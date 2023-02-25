import {collapseWhiteSpace} from '@augment-vir/common';
import {convertTemplateToString} from '@augment-vir/element-vir';
import {html} from 'element-vir';
import {TemplateResult} from 'lit';
import {ImageData} from './image-data';
import {messageType} from './message-type';

export function generateIframeDoc(
    imageData: ImageData,
    extraHTML: string | TemplateResult | undefined,
    htmlSizeQuerySelector: string | undefined,
): string {
    const placeholder = Math.random();

    const sizeScript = html`
        <script>
            const imageType = '${imageData.imageType}';

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(/s*\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*/);
                const viewBoxWidth = Number(viewBoxDimensions?.[1]);
                const viewBoxHeight = Number(viewBoxDimensions?.[2]);
                const width =
                    Number(svgElement.getAttribute('width')?.replace(/px$/, '')) || viewBoxWidth;
                const height =
                    Number(svgElement.getAttribute('height')?.replace(/px$/, '')) || viewBoxHeight;

                if (isNaN(width) || isNaN(height)) {
                    return undefined;
                } else {
                    return {width, height};
                }
            }

            function extractHtmlSize(element) {
                if (!element) {
                    throw new Error('No element found to extract size from.');
                }

                let size;

                if (element instanceof HTMLImageElement) {
                    size = {
                        width: element.naturalWidth,
                        height: element.naturalHeight,
                    };
                } else {
                    const rawWidth = window.getComputedStyle(element).width;
                    const rawHeight = window.getComputedStyle(element).height;
                    const width = Number(rawWidth.replace(/px$/, ''));
                    const height = Number(rawHeight.replace(/px$/, ''));

                    if (width && height) {
                        size = {height, width};
                    }
                }

                if (size) {
                    if (!size.height || !size.width) {
                        throw new Error(
                            'Got invalid html size for ' +
                                imageData.imageUrl +
                                JSON.stringify(size),
                        );
                    }
                    return size;
                } else {
                    return extractHtmlSize(element.nextElementSibling);
                }
            }

            function getHtmlSize(element = document.body) {
                const query = '${htmlSizeQuerySelector ?? ''}' || 'body > *';
                const size = extractHtmlSize(document.querySelector(query));

                return size;
            }

            function getSvgSize() {
                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = extractSvgSize(svgElement);

                if (!svgElement.getAttribute('viewBox')) {
                    svgElement.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
                }
                svgElement.removeAttribute('width');
                svgElement.removeAttribute('height');
                svgElement.style.removeProperty('width');
                svgElement.style.removeProperty('height');

                return {width, height};
            }

            function getVideoSize() {
                return {};
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                svg: getSvgSize,
                html: getHtmlSize,
                image: getImageSize,
                video: getVideoSize,
            };

            function postSize() {
                const size = sizeGrabbers[imageType]();

                if (!size.width || !size.height) {
                    throw new Error('invalid size ' + JSON.stringify(size));
                }

                readyPromise.then(() => {
                    globalThis.postMessage({
                        type: '${messageType.detectedSize}',
                        data: JSON.stringify(size),
                    });
                });
            }

            let retryCount = 0;

            function repeatedlyPostSize() {
                try {
                    postSize();
                } catch (error) {
                    retryCount++;
                    if (retryCount > 10) {
                        throw new Error(
                            "Tried to get the '${imageData.imageType}' size for '${imageData.imageUrl}' over 10 times and failed.",
                        );
                    }
                    setTimeout(() => {
                        repeatedlyPostSize();
                    }, 100);
                }
            }

            repeatedlyPostSize();
        </script>
    `;

    const htmlTemplate = html`
        <!DOCTYPE html>
        <html class="image-type-${imageData.imageType.toLowerCase()}">
            <head>
                <style>
                    body,
                    html {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    html {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    html.image-type-image img,
                    html.image-type-svg svg {
                        display: block;
                    }

                    html.image-type-image img,
                    html.image-type-svg svg,
                    html.image-type-video video {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: 100vw;
                        height: 100vh;
                    }

                    .crisp {
                        image-rendering: crisp-edges;
                    }
                </style>
                <script>
                    let resolve;
                    const readyPromise = new Promise((innerResolve) => {
                        resolve = innerResolve;
                    });
                    globalThis.addEventListener('message', (messageEvent) => {
                        if (messageEvent.data.type === '${messageType.readyPing}') {
                            resolve();
                            globalThis.postMessage({type: '${messageType.readyPong}'});
                        } else if (messageEvent.data.type === '${messageType.setScale}') {
                            document
                                .querySelector('body')
                                .style.setProperty(
                                    'transform',
                                    \`scale(\${messageEvent.data.data})\`,
                                );
                        } else if (messageEvent.data.type === '${messageType.setScalingMethod}') {
                            if (messageEvent.data.data === 'crisp') {
                                document.body.classList.add('crisp');
                            } else {
                                document.body.classList.remove('crisp');
                            }
                        }
                    });

                    function muteVideos() {
                        const videoElements = Array.from(document.body.querySelectorAll('video'));
                        videoElements.forEach((videoElement) => {
                            videoElement.setAttribute('muted', '');
                        });
                    }

                    try {
                        muteVideos();
                        const mutationObserver = new MutationObserver(muteVideos);
                        mutationObserver.observe(document.body, {childList: true, subtree: true});
                    } catch (error) {
                        console.error(error);
                    }
                </script>
            </head>
            <body>
                ${placeholder} ${sizeScript} ${extraHTML ?? ''}
            </body>
        </html>
    `;

    const htmlString = collapseWhiteSpace(convertTemplateToString(htmlTemplate)).replace(
        String(placeholder),
        `\n${imageData.templateString}\n`,
    );

    return htmlString;
}
