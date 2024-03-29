# resizable-image-element

Arbitrary interactive resource resizing to fit within arbitrary dimensions. This original started as an image helper, but now it supports many file types including text, video, audio, etc.

Exports a native web element, `VirResizableImage` (for use in [`element-vir`](https://www.npmjs.com/package/element-vir)) or `vir-resizable-image` (for use as an HTML tag name) that accepts inputs of max dimensions and imageUrl. The element handles the rest!

-   [x] constrains images to arbitrary dimensions while maintaining aspect ratio
-   [x] works with SVGs and normal images
-   [x] works with SVGs that have `<image>` elements
-   [x] works with SVGs that rely on `<script>` elements without giving them access to the main window
-   [x] works with "images" that are actually embedded HTML documents
-   [x] tested in Safari, Chrome, and Firefox
-   [x] fixes missing attributes on SVG images
-   [x] handles `viewBox` attributes missing on the top SVG (but existing on a nested SVG element)
-   [x] allows for arbitrary manipulation of SVG code to account for errors in the original SVG code
-   [x] handles race conditions between loading the image and determining its size
-   [x] handles the many race conditions between iframe loading and communicating back and forth wit them
-   [x] handles audio files

## Example

[https://electrovir.github.io/resizable-image-element](https://electrovir.github.io/resizable-image-element/)

## Usage

```bash
npm i @electrovir/resizable-image-element
```

Meant for use with `element-vir`:

<!-- example-link: src/readme-examples/simple-usage.example.ts -->

```TypeScript
import {html} from 'element-vir';
import {VirResizableImage} from '@electrovir/resizable-image-element';

export function createTemplate() {
    return html`
        <${VirResizableImage.assign({
            imageUrl: 'https://example.com/my-image-url',
            max: {
                height: 300,
                width: 600,
            },
            min: {
                height: 100,
                width: 200,
            },
        })}></${VirResizableImage}>
    `;
}
```

You can also use the tag name `vir-resizable-image` outside of `element-vir` but you may have to imperatively assign inputs to make that work.

### Loading placeholder

To customize the loading placeholder, use `slot="loading"` on a child element:

<!-- example-link: src/readme-examples/loading-slot.example.ts -->

```TypeScript
import {html} from 'element-vir';
import {VirResizableImage} from '@electrovir/resizable-image-element';

export function createTemplate() {
    return html`
        <${VirResizableImage.assign({
            imageUrl: 'https://example.com/my-image-url',
        })}>
            <div slot="loading">My custom loading</div>
        </${VirResizableImage}>
    `;
}
```
