(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function $s(t){return t.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}function Tr(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Ni({value:t,min:e,max:n}){return Math.max(Math.min(t,n),e)}const Di=["january","february","march","april","may","june","july","august","september","october","november","december"];Di.map(t=>t.slice(0,3));function lr(t){return t?t instanceof Error?t.message:String(t):""}function kn(t){return t instanceof Error?t:new Error(lr(t))}function zi(t){return!!t}function Pn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Or(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Rr(t){return!!t&&typeof t=="object"}function ji(t,e){try{if(t===e)return!0;if(Rr(t)&&Rr(e)){const n=Or(t),r=Or(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${lr(n)}`),n}}function Mi(t,e){return Pn(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Es(t,e){let n=!1;const r=Pn(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Pn(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function ln(t){const e=cr();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function cr(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${cr.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}function Z(t){return String(t).endsWith("px")?String(t):`${t}px`}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=window,ur=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hr=Symbol(),Nr=new WeakMap;let As=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(ur&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Nr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Nr.set(n,e))}return e}toString(){return this.cssText}};const re=t=>new As(typeof t=="string"?t:t+"",void 0,hr),Cs=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new As(n,t,hr)},Bi=(t,e)=>{ur?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const r=document.createElement("style"),s=Lt.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=n.cssText,t.appendChild(r)})},Dr=ur?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return re(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const Gt=window,zr=Gt.trustedTypes,Ki=zr?zr.emptyScript:"",jr=Gt.reactiveElementPolyfillSupport,Tn={toAttribute(t,e){switch(e){case Boolean:t=t?Ki:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},ks=(t,e)=>e!==t&&(e==e||t==t),pn={attribute:!0,type:String,converter:Tn,reflect:!1,hasChanged:ks};let Be=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,r)=>{const s=this._$Ep(r,n);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,n=pn){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,r){return{get(){return this[n]},set(s){const i=this[e];this[n]=s,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pn}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of r)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)n.unshift(Dr(s))}else e!==void 0&&n.push(Dr(e));return n}static _$Ep(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Bi(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EO(e,n,r=pn){var s;const i=this.constructor._$Ep(e,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Tn).toAttribute(n,r.type);this._$El=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,n){var r;const s=this.constructor,i=s._$Ev.get(e);if(i!==void 0&&this._$El!==i){const o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:Tn;this._$El=i,this[i]=a.fromAttribute(n,o.type),this._$El=null}}requestUpdate(e,n,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||ks)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,i)=>this[i]=s),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdate)===null||i===void 0?void 0:i.call(s)}),this.update(r)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(r)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Be.finalized=!0,Be.elementProperties=new Map,Be.elementStyles=[],Be.shadowRootOptions={mode:"open"},jr==null||jr({ReactiveElement:Be}),((mn=Gt.reactiveElementVersions)!==null&&mn!==void 0?mn:Gt.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gn;const Jt=window,Je=Jt.trustedTypes,Mr=Je?Je.createPolicy("lit-html",{createHTML:t=>t}):void 0,me=`lit$${(Math.random()+"").slice(9)}$`,Ps="?"+me,Li=`<${Ps}>`,Ye=document,yt=(t="")=>Ye.createComment(t),vt=t=>t===null||typeof t!="object"&&typeof t!="function",Ts=Array.isArray,Ii=t=>Ts(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Br=/-->/g,Kr=/>/g,_e=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lr=/'/g,Ir=/"/g,Os=/^(?:script|style|textarea|title)$/i,Hi=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Ui=Hi(1),ge=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Hr=new WeakMap,Ue=Ye.createTreeWalker(Ye,129,null,!1),Fi=(t,e)=>{const n=t.length-1,r=[];let s,i=e===2?"<svg>":"",o=rt;for(let l=0;l<n;l++){const h=t[l];let u,c,d=-1,f=0;for(;f<h.length&&(o.lastIndex=f,c=o.exec(h),c!==null);)f=o.lastIndex,o===rt?c[1]==="!--"?o=Br:c[1]!==void 0?o=Kr:c[2]!==void 0?(Os.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=_e):c[3]!==void 0&&(o=_e):o===_e?c[0]===">"?(o=s??rt,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,u=c[1],o=c[3]===void 0?_e:c[3]==='"'?Ir:Lr):o===Ir||o===Lr?o=_e:o===Br||o===Kr?o=rt:(o=_e,s=void 0);const y=o===_e&&t[l+1].startsWith("/>")?" ":"";i+=o===rt?h+Li:d>=0?(r.push(u),h.slice(0,d)+"$lit$"+h.slice(d)+me+y):h+me+(d===-2?(r.push(void 0),l):y)}const a=i+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Mr!==void 0?Mr.createHTML(a):a,r]};let Yt=class{constructor({strings:e,_$litType$:n},r){let s;this.parts=[];let i=0,o=0;const a=e.length-1,l=this.parts,[h,u]=Fi(e,n);if(this.el=Yt.createElement(h,r),Ue.currentNode=this.el.content,n===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(s=Ue.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(me)){const f=u[o++];if(c.push(d),f!==void 0){const y=s.getAttribute(f.toLowerCase()+"$lit$").split(me),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:y,ctor:m[1]==="."?Vi:m[1]==="?"?Gi:m[1]==="@"?Ji:un})}else l.push({type:6,index:i})}for(const d of c)s.removeAttribute(d)}if(Os.test(s.tagName)){const c=s.textContent.split(me),d=c.length-1;if(d>0){s.textContent=Je?Je.emptyScript:"";for(let f=0;f<d;f++)s.append(c[f],yt()),Ue.nextNode(),l.push({type:2,index:++i});s.append(c[d],yt())}}}else if(s.nodeType===8)if(s.data===Ps)l.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(me,c+1))!==-1;)l.push({type:7,index:i}),c+=me.length-1}i++}}static createElement(e,n){const r=Ye.createElement("template");return r.innerHTML=e,r}};function Xe(t,e,n=t,r){var s,i,o,a;if(e===ge)return e;let l=r!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[r]:n._$Cl;const h=vt(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((i=l==null?void 0:l._$AO)===null||i===void 0||i.call(l,!1),h===void 0?l=void 0:(l=new h(t),l._$AT(t,n,r)),r!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[r]=l:n._$Cl=l),l!==void 0&&(e=Xe(t,l._$AS(t,e.values),l,r)),e}let qi=class{constructor(e,n){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var n;const{el:{content:r},parts:s}=this._$AD,i=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:Ye).importNode(r,!0);Ue.currentNode=i;let o=Ue.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new cn(o,o.nextSibling,this,e):h.type===1?u=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(u=new Yi(o,this,e)),this.u.push(u),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Ue.nextNode(),a++)}return i}p(e){let n=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},cn=class{constructor(e,n,r,s){var i;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=s,this._$Cm=(i=s==null?void 0:s.isConnected)===null||i===void 0||i}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&e.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Xe(this,e,n),vt(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==ge&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ii(e)?this.k(e):this.g(e)}O(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Yt.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.p(r);else{const o=new qi(i,this),a=o.v(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let n=Hr.get(e.strings);return n===void 0&&Hr.set(e.strings,n=new Yt(e)),n}k(e){Ts(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,s=0;for(const i of e)s===n.length?n.push(r=new cn(this.O(yt()),this.O(yt()),this,this.options)):r=n[s],r._$AI(i),s++;s<n.length&&(this._$AR(r&&r._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cm=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}},un=class{constructor(e,n,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,r,s){const i=this.strings;let o=!1;if(i===void 0)e=Xe(this,e,n,0),o=!vt(e)||e!==this._$AH&&e!==ge,o&&(this._$AH=e);else{const a=e;let l,h;for(e=i[0],l=0;l<i.length-1;l++)h=Xe(this,a[r+l],n,l),h===ge&&(h=this._$AH[l]),o||(o=!vt(h)||h!==this._$AH[l]),h===B?e=B:e!==B&&(e+=(h??"")+i[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vi=class extends un{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}};const Wi=Je?Je.emptyScript:"";let Gi=class extends un{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,Wi):this.element.removeAttribute(this.name)}},Ji=class extends un{constructor(e,n,r,s,i){super(e,n,r,s,i),this.type=5}_$AI(e,n=this){var r;if((e=(r=Xe(this,e,n,0))!==null&&r!==void 0?r:B)===ge)return;const s=this._$AH,i=e===B&&s!==B||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==B&&(s===B||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Yi=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}};const Ur=Jt.litHtmlPolyfillSupport;Ur==null||Ur(Yt,cn),((gn=Jt.litHtmlVersions)!==null&&gn!==void 0?gn:Jt.litHtmlVersions=[]).push("2.6.1");const Xi=(t,e,n)=>{var r,s;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:e;let o=i._$litPart$;if(o===void 0){const a=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;i._$litPart$=o=new cn(e.insertBefore(yt(),a),a,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn,vn;let lt=class extends Be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const r=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=r.firstChild),r}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xi(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ge}};lt.finalized=!0,lt._$litElement$=!0,(yn=globalThis.litElementHydrateSupport)===null||yn===void 0||yn.call(globalThis,{LitElement:lt});const Fr=globalThis.litElementPolyfillSupport;Fr==null||Fr({LitElement:lt});((vn=globalThis.litElementVersions)!==null&&vn!==void 0?vn:globalThis.litElementVersions=[]).push("3.2.2");var Qi=globalThis&&globalThis.__decorate||function(t,e,n,r){var s=arguments.length,i=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(s<3?o(i):s>3?o(e,n,i):o(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i};function Zi(){return t=>{}}let wt=class extends lt{};wt=Qi([Zi()],wt);const eo={capitalizeFirstLetter:!1};function to(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function no(t,e){return e.capitalizeFirstLetter?to(t):t}function ro(t,e=eo){const n=t.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return no(r,e)}function qr(t){return t!==t.toUpperCase()}function so(t){return t.split("").reduce((n,r,s,i)=>{const o=s>0?i[s-1]:"",a=s<i.length-1?i[s+1]:"",l=qr(o)||qr(a);return r===r.toLowerCase()||s===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}const io=["january","february","march","april","may","june","july","august","september","october","november","december"];io.map(t=>t.slice(0,3));function dr(t){return t?t instanceof Error?t.message:String(t):""}function oo(t){return t instanceof Error?t:new Error(dr(t))}const ao=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Rs(t,e){return t?ao.some(n=>{try{return n(t,e)}catch{return!1}}):!1}function lo(t,e){return t&&e.every(n=>Rs(t,n))}function Te(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Vr(t){return Object.entries(t).sort((e,n)=>e[0].localeCompare(n[0]))}function Wr(t){return!!t&&typeof t=="object"}function co(t,e){try{if(t===e)return!0;if(Wr(t)&&Wr(e)){const n=Vr(t),r=Vr(e);return JSON.stringify(n)===JSON.stringify(r)}else return JSON.stringify(t)===JSON.stringify(e)}catch(n){throw console.error(`Failed to compare objects using JSON.stringify: ${dr(n)}`),n}}function uo(t,e){return Te(t).filter(r=>{const s=t[r];return e(r,s,t)}).reduce((r,s)=>(r[s]=t[s],r),{})}function Qe(t,e){let n=!1;const r=Te(t).reduce((s,i)=>{const o=e(i,t[i],t);return o instanceof Promise&&(n=!0),{...s,[i]:o}},{});return n?new Promise(async(s,i)=>{try{await Promise.all(Te(r).map(async o=>{const a=await r[o];r[o]=a})),s(r)}catch(o){i(o)}}):r}function ho(t){return!!(Rs(t,"then")&&typeof t.then=="function")}function bt(){let t,e,n=!1;const r=new Promise((s,i)=>{t=o=>(n=!0,s(o)),e=o=>{n=!0,i(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${bt.name}.`);return{promise:r,resolve:t,reject:e,isSettled(){return n}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Gr(t){return(e,n)=>n!==void 0?((r,s,i)=>{s.constructor.createProperty(i,r)})(t,e,n):fo(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wn;((wn=window.HTMLSlotElement)===null||wn===void 0?void 0:wn.prototype.assignedElements)!=null;const On=Symbol("this-is-an-element-vir-declarative-element"),fr=Symbol("key for ignoring inputs not having been set yet"),mo={[fr]:!0};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mr=t=>(...e)=>({_$litDirective$:t,values:e});let pr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};function go(t,e){return Ns(t,e,wt)}function Ns(t,e,n){Rn(t,e);const r=t.element;if(!(r instanceof n))throw new Error(`${e} attached to non ${n.name} element.`);return r}function Rn(t,e){if(t.type!==po.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element.`);if(!t.element)throw new Error(`${e} directive found no element.`)}function gr(t,e){return yo(t,e)}const yo=mr(class extends pr{constructor(t){super(t),this.element=go(t,"assign")}render(t,e){return vo(t,this.element,e),ge}});function vo(t,e,n){if(e.tagName.toLowerCase()!==t.tagName.toLowerCase())throw console.error(e,t),new Error(`Assignment mismatch. Assignment was made for ${e.tagName.toLowerCase()} but it's attached to ${t.tagName.toLowerCase()}`);e.assignInputs(n)}function Ds(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const n=e.host;return n instanceof wt?!0:Ds(n)}var P=globalThis&&globalThis.__classPrivateFieldGet||function(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)},J=globalThis&&globalThis.__classPrivateFieldSet||function(t,e,n,r,s){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!s)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?s.call(t,n):s?s.value=n:e.set(t,n),n},ne,Se,$e,Ee,Ie,Ke,V,ct,Nn,Dn;const zs=Symbol("element-vir-async-state-marker");function wo(t){if(!t)return{};const e=uo(t,(r,s)=>s instanceof js);return Qe(e,(r,s)=>new bo(s.initialValue))}const Ot=Symbol("not set");class bo{constructor(e){ne.add(this),Se.set(this,Ot),$e.set(this,void 0),Ee.set(this,void 0),Ie.set(this,[]),Ke.set(this,void 0),V.set(this,bt()),this.asyncMarkerSymbol=zs,e&&this.setValue({newPromise:e})}setValue(e){if("createPromise"in e){if(P(this,Se,"f")===Ot||!co(e.trigger,P(this,Se,"f"))){J(this,Se,e.trigger,"f");const n=e.createPromise();P(this,ne,"m",Nn).call(this,n)}}else"newPromise"in e?(P(this,Se,"f"),P(this,ne,"m",Nn).call(this,e.newPromise),P(this,ne,"m",ct).call(this)):"resolvedValue"in e?P(this,ne,"m",Dn).call(this,e.resolvedValue):e.forceUpdate&&(J(this,Se,Ot,"f"),J(this,$e,void 0,"f"),P(this,V,"f").isSettled()||P(this,V,"f").reject("Canceled by force update"),J(this,V,bt(),"f"),P(this,ne,"m",ct).call(this))}getValue(){return P(this,V,"f").isSettled()?P(this,Ee,"f")?P(this,Ee,"f"):P(this,$e,"f"):P(this,V,"f").promise}addSettleListener(e){P(this,Ie,"f").push(e)}removeSettleListener(e){J(this,Ie,P(this,Ie,"f").filter(n=>n!==e),"f")}}Se=new WeakMap,$e=new WeakMap,Ee=new WeakMap,Ie=new WeakMap,Ke=new WeakMap,V=new WeakMap,ne=new WeakSet,ct=function(){P(this,Ie,"f").forEach(e=>{e()})},Nn=function(e){e!==P(this,Ke,"f")&&(J(this,$e,void 0,"f"),J(this,Ee,void 0,"f"),J(this,Ke,e,"f"),P(this,V,"f").isSettled()&&J(this,V,bt(),"f"),e.then(n=>{P(this,Ke,"f")===e&&P(this,ne,"m",Dn).call(this,n)}).catch(n=>{P(this,Ke,"f")===e&&(J(this,Ee,oo(n),"f"),P(this,V,"f").promise.catch(()=>{}),P(this,V,"f").reject(n),P(this,ne,"m",ct).call(this))}))},Dn=function(e){e!==P(this,$e,"f")&&(J(this,Ee,void 0,"f"),J(this,$e,e,"f"),P(this,V,"f").isSettled()&&J(this,V,bt(),"f"),P(this,V,"f").resolve(e),P(this,ne,"m",ct).call(this))};class js{constructor(e){this.initialValue=e,this.asyncMarkerSymbol=zs}}function Ms(t){return new js(t)}function Bs(t,e){return`${t}-${so(e)}`}function _o(t,e){return e?Qe(e,n=>re(`--${Bs(t,String(n))}`)):{}}function xo(t,e){return t?Qe(t,(n,r)=>{const s=e[n];return re(`var(${s}, ${r})`)}):{}}class So extends CustomEvent{get type(){return this._type}constructor(e,n){super(typeof e=="string"?e:e.type,{detail:n,bubbles:!0,composed:!0}),this._type=""}}function Ks(){return t=>{var e;return e=class extends So{constructor(n){super(t,n),this._type=t}},e.type=t,e}}function zn(){return Ks()}function $o(t){return t?Object.keys(t).filter(e=>{if(typeof e!="string")throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${String(e)}`);if(e==="")throw new Error("Got empty string for events key.");return!0}).reduce((e,n)=>{const r=Ks()(n);return e[n]=r,e},{}):{}}function Jr(t,e,n){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${n.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${n.toLowerCase()}'.`)}function Yr(t,e){const n=t;function r(i,o){e&&Jr(o,t,t.tagName);const a=t.asyncStateHandlerMap[o];return a?a.getValue():n[o]}return new Proxy({},{get:r,set:(i,o,a)=>{e&&Jr(o,t,t.tagName),i[o]=void 0;const l=t.asyncStateHandlerMap[o];return l?l.setValue(a):n[o]=a,!0},ownKeys:i=>Reflect.ownKeys(i),getOwnPropertyDescriptor(i,o){if(o in i)return{get value(){return r(i,o)},configurable:!0,enumerable:!0}},has:(i,o)=>Reflect.has(i,o)})}function Eo(t,e){return e?Qe(e,n=>Bs(t,String(n))):{}}function Ao({hostClassNames:t,cssVarNames:e,cssVarValues:n}){return{hostClassSelectors:Qe(t,(r,s)=>re(`:host(.${s})`)),hostClassNames:Qe(t,(r,s)=>re(s)),cssVarNames:e,cssVarValues:n}}function Co({host:t,hostClassesInit:e,hostClassNames:n,state:r,inputs:s}){e&&Te(e).forEach(i=>{const o=e[i],a=n[i];typeof o=="function"&&(o({state:r,inputs:s})?t.classList.add(a):t.classList.remove(a))})}function ko(t,e){function n(s){Te(s).forEach(i=>{const o=s[i],a=t.asyncStateHandlerMap[i];a?a.setValue(o):t.instanceState[i]=o})}return{dispatch:s=>t.dispatchEvent(s),updateState:n,inputs:t.instanceInputs,host:t,state:t.instanceState,events:e}}function yr(t){var e;const n=$o(t.events),r=Eo(t.tagName,t.hostClasses),s=_o(t.tagName,t.cssVars),i=xo(t.cssVars,s),o={...mo,...t.options},a=typeof t.styles=="function"?t.styles(Ao({hostClassNames:r,cssVarNames:s,cssVarValues:i})):t.styles||Cs``,l=t.renderCallback,h=(e=class extends wt{createRenderParams(){return ko(this,n)}get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}markInputsAsHavingBeenSet(){this.haveInputsBeenSet||(this.haveInputsBeenSet=!0)}render(){Ds(this)&&!this.haveInputsBeenSet&&!o[fr]&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use the "${gr.name}" directive on it. If no inputs are intended, use "${yr.name}" to define ${t.tagName}.`),this.hasRendered=!0;const u=this.createRenderParams();!this.initCalled&&t.initCallback&&(this.initCalled=!0,t.initCallback(u));const c=t.renderCallback(u);return Co({host:u.host,hostClassesInit:t.hostClasses,hostClassNames:r,state:u.state,inputs:u.inputs}),c}connectedCallback(){if(super.connectedCallback(),this.hasRendered&&!this.initCalled&&t.initCallback){this.initCalled=!0;const u=this.createRenderParams();t.initCallback(u)}}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanupCallback){const u=this.createRenderParams();t.cleanupCallback(u)}this.initCalled=!1}assignInputs(u){Te(u).forEach(c=>{Gr()(this,c),this.instanceInputs[c]=u[c]}),this.markInputsAsHavingBeenSet()}constructor(){super(),this.initCalled=!1,this.hasRendered=!1,this.haveInputsBeenSet=!1,this.definition={},this.asyncStateHandlerMap=wo(t.stateInit),this.instanceInputs=Yr(this,!1),this.instanceState=Yr(this,!0);const u=t.stateInit||{};Te(u).forEach(c=>{Gr()(this,c);const d=this.asyncStateHandlerMap[c];d?(this.instanceState[c]=d.getValue(),d.addSettleListener(()=>{this[c]=d.getValue()})):this.instanceState[c]=u[c]}),this.definition=h}},e.tagName=t.tagName,e.styles=a,e.isStrictInstance=()=>!1,e.events=n,e.renderCallback=l,e.hostClasses=r,e.cssVarNames=s,e.stateInit=t.stateInit,e.cssVarValues=s,e);return Object.defineProperties(h,{[On]:{value:!0,writable:!1},name:{value:ro(t.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:u=>u instanceof h,writable:!1}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,h),h}function Ls(){return t=>yr({...t,options:{[fr]:!1},...t.options})}function ut(t,e){return Po(t,e)}const Po=mr(class extends pr{constructor(t){super(t),this.element=Ns(t,"listen",HTMLElement)}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:n=>{var r;return(r=this.lastListenerMetaData)===null||r===void 0?void 0:r.callback(n)}}}render(t,e){const n=typeof t=="string"?t:t.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(n,e)),ge}}),Xr="onDomCreated",To=mr(class extends pr{constructor(t){super(t),Rn(t,Xr)}update(t,[e]){Rn(t,Xr);const n=t.element;return n!==this.element&&(requestAnimationFrame(()=>e(n)),this.element=n),this.render(e)}render(t){}});function jn(t,e,n,r){return t instanceof Error?r?r(t):dr(t):ho(t)?e:n?n(t):t}function Oo(t){var e,n;const{assertInputs:r,transformInputs:s}={assertInputs:(e=t==null?void 0:t.assertInputs)!==null&&e!==void 0?e:()=>{},transformInputs:(n=t==null?void 0:t.transformInputs)!==null&&n!==void 0?n:i=>i};return{defineElement:()=>i=>(r(i),Ls()(s(i))),defineElementNoInputs:i=>(r(i),yr(s(i)))}}function Ro(t,e){return t.filter((n,r)=>!e.includes(r))}function Is(t){return t.filter(e=>lo(e,["tagName",On])&&!!e.tagName&&!!e[On])}const Hs=new WeakMap;function No(t,e){var n;const r=Is(e);return(n=Us(Hs,[t,...r]).value)===null||n===void 0?void 0:n.template}function Do(t,e,n){const r=Is(e);return qs(Hs,[t,...r],n)}function Us(t,e,n=0){const{currentTemplateAndNested:r,reason:s}=Fs(t,e,n);return r?n===e.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Us(r.nested,e,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:s}}function Fs(t,e,n){const r=e[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!t.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const s=t.get(r);return s==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:s,reason:"key and value exists"}}function qs(t,e,n,r=0){var s;const{currentTemplateAndNested:i,currentKey:o,reason:a}=Fs(t,e,r);if(!o)return{result:!1,reason:a};const l=i??{nested:void 0,template:void 0};if(i||t.set(o,l),r===e.length-1)return l.template=n,{result:!0,reason:"set value at end of keys array"};const h=(s=l.nested)!==null&&s!==void 0?s:new WeakMap;return l.nested||(l.nested=h),qs(h,e,n,r+1)}function Vs(t,e,n){return{name:t,check:e,transform:n}}const zo=new WeakMap;function Ws(t,e,n){const r=No(t,e),s=r??n();if(!r){const o=Do(t,e,s);if(o.result)zo.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=Ro(e,s.valueIndexDeletions);return{strings:s.templateStrings,values:i}}function Gs(t,e,n,r){const s=[],i=[],o=[];return t.forEach((l,h)=>{var u;const c=s.length-1,d=s[c],f=h-1,y=e[f];let m;r&&r(l),typeof d=="string"&&(m=(u=n.find(p=>p.check(d,l,y)))===null||u===void 0?void 0:u.transform,m&&(s[c]=d+m(y)+l,o.push(f))),m||s.push(l);const v=t.raw[h];m?i[c]=i[c]+m(y)+v:i.push(v)}),{templateStrings:Object.assign([],s,{raw:i}),valueIndexDeletions:o}}function Js(t){return typeof t=="function"&&t.hasOwnProperty("tagName")&&typeof t.tagName=="string"&&t.tagName.includes("-")}const jo=[Vs("tag name css selector interpolation",(t,e,n)=>Js(n),t=>t.tagName)];function Mo(t,e){return Gs(t,e,jo)}function He(t,...e){const n=Ws(t,e,()=>Mo(t,e));return Cs(n.strings,...n.values)}const Bo=[Vs("tag name interpolation",(t,e,n)=>{const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/)||(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">"),s=Js(n);if(r&&!s)throw console.error({lastNewString:t,currentLitString:e,currentValue:n}),new Error(`Got interpolated tag name but it wasn't of type VirElement: '${n.prototype.constructor.name}'`);return r&&s},t=>t.tagName)];function Ko(t){}function Lo(t){return Gs(t.strings,t.values,Bo,Ko)}function W(t,...e){const n=Ui(t,...e),r=Ws(t,e,()=>Lo(n));return{...n,strings:r.strings,values:r.values}}function Io(t,e){return t<e}function Ho(t,e){return t>e}function Uo({constraint:t,box:e,constraintType:n="max"}){return(n==="max"?Ho:Io)(e.width/e.height,t.width/t.height)?"width":"height"}function bn({box:t,constraint:e,constraintType:n}){const r=Uo({box:t,constraint:e,constraintType:n});return e[r]/t[r]}function Ys({box:t,ratio:e}){return Es(t,(n,r)=>r*e)}function Xs({box:t,min:e,max:n}){return Es(t,(r,s)=>Ni({value:s,min:(e==null?void 0:e[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Qs({min:t,max:e,box:n}){const r=Zs({min:t,max:e,box:n}),s=Ys({box:n,ratio:r});return{height:Math.floor(s.height||(t==null?void 0:t.height)||250),width:Math.floor(s.width||(t==null?void 0:t.width)||250)}}function Zs({min:t,max:e,box:n}){if(!t&&!e)return 1;const r=t?bn({box:n,constraint:t,constraintType:"min"}):1,s=e?bn({box:n,constraint:e,constraintType:"max"}):1,i=r>1?r:s<1?s:1,o=Ys({ratio:i,box:n});return(t?bn({box:o,constraint:t,constraintType:"min"}):1)>1?r:i}const Qr=10;function ei(t){return Math.min(Math.max(Math.floor(Math.pow(t+1,3)*Qr),Qr),5e3)}function Fe(t){if("templateString"in t)return t.templateString;const{strings:e,values:n}=t;if((!e||!(e!=null&&e.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(e??[""]).map((o,a)=>{const l=Fo(o,r[a]);return`${o}${l}`});return $s(i.join(""))}function Fo(t,e){return e._$litType$!=null||e._$litDirective$!=null?Fe(e):Array.isArray(e)?e.map(r=>Fe(r)).join(""):t.endsWith("=")?`"${e}"`:e}var Xt=(t=>(t.Html="html",t.Text="text",t.Svg="svg",t.Image="image",t.Video="video",t))(Xt||{});async function qo(t,e){return t.includes("video")?"video":t.includes("svg")||e.includes("<svg")?"svg":t.includes("html")||e.includes("<html")?"html":t.includes("json")||t.includes("text")||t.includes("txt")?"text":"image"}function Vo({imageType:t,imageText:e,imageUrl:n,blockAutoPlay:r}){return t==="image"?Fe(W`
            <img src=${n} />
        `):t==="video"?Fe(W`
            <video
                ${r?"":"autoplay"}
                muted
                loop
                onclick="this.paused ? this.play() : this.pause()"
            >
                <source src=${n} type="video/mp4" />
            </video>
        `):t==="text"?Fe(W`
                <p class="text-wrapper">
                    ${e.replace(/\n/g,"<br />").replace(/    /g,'<span class="spacer"></span>')}
                </p>
            `):e}function Wo(t,e){if(e.includes("json"))try{return JSON.stringify(JSON.parse(t),null,4)}catch{}return t}async function Zr(t,e){var a;let n;try{n=await fetch(t)}catch{}const r=((a=n==null?void 0:n.headers.get("Content-Type"))==null?void 0:a.toLowerCase())??"",s=Wo(await(n==null?void 0:n.text())??"",r),i=n?await qo(r,s):"image";return{templateString:Vo({imageText:s,imageType:i,imageUrl:t,blockAutoPlay:e}),imageUrl:t,imageType:i}}var X=(t=>(t.Ready="ready",t.SendSize="send-size",t.SendScale="set-scale",t.SendScalingMethod="set-scaling-method",t.ForceSize="force-size",t))(X||{}),Mn=(t=>(t.FromParent="from-parent",t.FromChild="from-child",t))(Mn||{});const Go=35;function Jo(t,e,n){return n.type===t&&n.direction===e}async function qe({getMessageContext:t,message:e,verifyData:n,imageUrl:r}){let s=0,i=!1,o,a,l=!1;const h={...e,direction:"from-parent"},u=e.type;function c(m){try{const v=m.data;if(v.direction!=="from-child")return;if(v&&l&&Jo(u,"from-child",v)){let p=!1;try{p=n?n(v.data):!0}catch{}if(!p)return;i=!0,o=v}}catch(v){a=kn(v)}}let d=t();d==null||d.addEventListener("message",c);const f=Date.now();for(;!i&&s<Go&&!a;){await ln(ei(s));const m=t();m&&(d==null||d.removeEventListener("message",c),m.addEventListener("message",c),m!==d&&(d=m),l=!0,m.postMessage(h)),s++}const y=Date.now()-f;if(a)throw console.error({listenerError:a,imageUrl:r,messageToSend:e}),a;if(!i)throw new Error(`Failed to receive response from the iframe for message '${e.type}' after '${Math.floor(y/1e3)}' seconds for '${r}'`);return o==null?void 0:o.data}var Q=(t=>(t.VerticallyCenter="vertically-center",t.HideLoading="hide-loading",t))(Q||{});function pe(t){return t.contentWindow}const es=1e4;async function Yo({updateState:t,min:e,max:n,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o,forcedOriginalImageSize:a}){var f;const l=Date.now(),h=cr();s.onload=()=>{h.resolve()};let u=0,c=0;for(;!pe(s)&&c<=es;)await ln(ei(u)),c=Date.now()-l,u++;c>es&&await h.promise,await qe({message:{type:X.Ready},imageUrl:i.imageUrl,getMessageContext:()=>pe(s)??void 0}),o&&await qe({message:{type:X.ForceSize,data:o},imageUrl:i.imageUrl,getMessageContext:()=>pe(s)??void 0});const d=a??await qe({message:{type:X.SendSize},imageUrl:i.imageUrl,getMessageContext:()=>pe(s)??void 0,verifyData:y=>!isNaN(y.width)&&!isNaN(y.height)&&!!y.width&&!!y.height});return await Xo({updateState:t,min:e,max:n,imageDimensions:d,host:r,iframeElement:s,imageData:i,forcedFinalImageSize:o}),((f=pe(s))==null?void 0:f.document.documentElement.outerHTML)??""}async function Xo({updateState:t,min:e,max:n,imageDimensions:r,host:s,iframeElement:i,imageData:o,forcedFinalImageSize:a}){const l=s.shadowRoot.querySelector(".frame-constraint");if(!(l instanceof HTMLElement))throw new Error("Could not find frame constraint div.");const h=Qs({min:e,max:n,box:a??r});l.style.width=Z(Math.floor(h.width)),l.style.height=Z(Math.floor(h.height));const u=Xs({min:e,max:n,box:h});h.height<u.height?s.classList.add(Q.VerticallyCenter):s.classList.remove(Q.VerticallyCenter),s.style.width=Z(u.width),s.style.height=Z(u.height);const c=Zs({min:e,max:n,box:a??r});if(c>3?await qe({message:{type:X.SendScalingMethod,data:"pixelated"},imageUrl:o.imageUrl,getMessageContext:()=>pe(i)??void 0}):await qe({message:{type:X.SendScalingMethod,data:"default"},imageUrl:o.imageUrl,getMessageContext:()=>pe(i)??void 0}),o.imageType===Xt.Html){const d=a?{width:a.width/r.width,height:a.height/r.height}:{width:1,height:1},f={width:c*d.width,height:c*d.height};await qe({message:{type:X.SendScale,data:f},imageUrl:o.imageUrl,getMessageContext:()=>pe(i)??void 0})}}var ts=Object.freeze,Qo=Object.defineProperty,ns=(t,e)=>ts(Qo(t,"raw",{value:ts(e||t.slice())})),rs,ss;function Zo(t,e,n){const r=Math.random(),s=W(rs||(rs=ns([`
        <script>
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

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
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
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
                const query = '`,`' || 'body > *';
                const size = extractHtmlSize(document.querySelector(query));

                return size;
            }

            function getSvgSize() {
                if (forcedFinalImageSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElement);

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
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            function getTextSize() {
                const textWrapper = document.querySelector('.text-wrapper');

                const size = {
                    width: textWrapper.clientWidth,
                    height: textWrapper.clientHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                svg: getSvgSize,
                html: getHtmlSize,
                image: getImageSize,
                video: getVideoSize,
                text: getTextSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '`,`') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '`,`',
                        data,
                    };
                    globalThis.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '`,`': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '`,`': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('body')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        if (message.data === 'pixelated') {
                            document.body.classList.add('pixelated');
                        } else {
                            document.body.classList.remove('pixelated');
                        }
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        try {
                            forcedFinalImageSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            try {
                muteEverything();
                const mutationObserver = new MutationObserver(muteEverything);
                mutationObserver.observe(document, {childList: true, subtree: true});
            } catch (error) {
                console.error(error);
            }
        <\/script>
    `],[`
        <script>
            const imageType = '`,`';
            let forcedFinalImageSize = undefined;

            function extractSvgSize(svgElement) {
                const viewBox = svgElement.getAttribute('viewBox');
                const viewBoxDimensions = viewBox?.match(/s*\\\\d+\\\\s+\\\\d+\\\\s+(\\\\d+)\\\\s+(\\\\d+)\\\\s*/);
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
                const rawWidth = window.getComputedStyle(element).width;
                const rawHeight = window.getComputedStyle(element).height;
                const width = Number(rawWidth.replace(/px$/, ''));
                const height = Number(rawHeight.replace(/px$/, ''));

                if (width && height) {
                    size = {height, width};
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
                const query = '`,`' || 'body > *';
                const size = extractHtmlSize(document.querySelector(query));

                return size;
            }

            function getSvgSize() {
                if (forcedFinalImageSize) {
                    const elements = document.body.querySelectorAll('*');
                    elements.forEach((element) =>
                        element.setAttribute('preserveAspectRatio', 'none'),
                    );
                }

                const svgElements = Array.from(document.querySelectorAll('svg'));

                if (!svgElements.length) {
                    throw new Error('Failed to find any SVG elements');
                }

                const svgElement = svgElements.find((svgElement) => !!extractSvgSize(svgElement));

                if (!svgElement) {
                    throw new Error('Found no SVG element with dimensions');
                }

                const {height, width} = forcedFinalImageSize ?? extractSvgSize(svgElement);

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
                const video = document.querySelector('video');

                const size = {
                    width: video.videoWidth,
                    height: video.videoHeight,
                };

                return size;
            }

            function getImageSize() {
                const image = document.querySelector('img');

                const size = {
                    width: image.naturalWidth,
                    height: image.naturalHeight,
                };

                return size;
            }

            function getTextSize() {
                const textWrapper = document.querySelector('.text-wrapper');

                const size = {
                    width: textWrapper.clientWidth,
                    height: textWrapper.clientHeight,
                };

                return size;
            }

            const sizeGrabbers = {
                svg: getSvgSize,
                html: getHtmlSize,
                image: getImageSize,
                video: getVideoSize,
                text: getTextSize,
            };

            if (!(imageType in sizeGrabbers)) {
                throw new Error('No size grabber exists for image type "' + imageType + '"');
            }

            function getSize() {
                return sizeGrabbers[imageType]();
            }

            globalThis.addEventListener('message', async (messageEvent) => {
                const message = messageEvent.data;

                if (message.direction === '`,`') {
                    return;
                }

                function sendMessageToParent(data) {
                    const messageForParent = {
                        type: message.type,
                        direction: '`,`',
                        data,
                    };
                    globalThis.postMessage(messageForParent);
                }

                switch (message.type) {
                    case '`,`': {
                        if (!!document.querySelector('body')) {
                            sendMessageToParent();
                        }
                        return;
                    }
                    case '`,`': {
                        const scaleDimensions = message.data;

                        document
                            .querySelector('body')
                            .style.setProperty(
                                'transform',
                                'scaleX(' +
                                    scaleDimensions.width +
                                    ') scaleY(' +
                                    scaleDimensions.height +
                                    ')',
                            );
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        if (message.data === 'pixelated') {
                            document.body.classList.add('pixelated');
                        } else {
                            document.body.classList.remove('pixelated');
                        }
                        return sendMessageToParent();
                    }
                    case '`,`': {
                        try {
                            await executeBeforeSizing();
                            const size = getSize();

                            sendMessageToParent(size);
                        } catch (error) {}
                        return;
                    }
                    case '`,`': {
                        try {
                            forcedFinalImageSize = message.data;
                            getSize();
                            sendMessageToParent();
                        } catch (error) {}
                        return;
                    }
                }
            });

            function muteEverything() {
                const videoElements = Array.from(document?.body?.querySelectorAll('video') ?? []);
                const audioElements = Array.from(document?.body?.querySelectorAll('audio') ?? []);
                [
                    ...videoElements,
                    ...audioElements,
                ].forEach((videoElement) => {
                    videoElement.setAttribute('muted', true);
                    videoElement.muted = true;
                });
            }

            try {
                muteEverything();
                const mutationObserver = new MutationObserver(muteEverything);
                mutationObserver.observe(document, {childList: true, subtree: true});
            } catch (error) {
                console.error(error);
            }
        <\/script>
    `])),t.imageType,n??"",Mn.FromChild,Mn.FromChild,X.Ready,X.SendScale,X.SendScalingMethod,X.SendSize,X.ForceSize),i=W(ss||(ss=ns([`
        <!DOCTYPE html>
        <html class="image-type-`,`">
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
                    html.image-type-svg svg,
                    html.image-type-video video {
                        max-width: 100vw;
                        max-height: 100vh;
                        width: 100vw;
                        height: 100vh;
                        display: block;
                    }

                    .spacer {
                        padding: 0 8px;
                    }

                    .pixelated {
                        image-rendering: pixelated;
                    }

                    html.image-type-text body {
                        max-width: 100%;
                    }

                    .text-wrapper {
                        font-family: sans-serif;
                        word-break: break-all;
                        padding: 16px;
                        max-width: 100%;
                    }
                </style>
                <script>
                    var executeBeforeSizing = () => {
                        return undefined;
                    };
                <\/script>
            </head>
            <body>
                `," "," ",`
            </body>
        </html>
    `])),t.imageType.toLowerCase(),r,e??"",s);return $s(Fe(i)).replace(String(r),`
${t.templateString}
`)}const ea={imageData:Ms()},is=W`
    <div class="click-cover"></div>
`,os="latest-frame-srcdoc",ht=Ls()({tagName:"vir-resizable-image",stateInit:ea,events:{settled:zn(),errored:zn()},styles:He`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${re(Q.VerticallyCenter)}) {
            align-items: center;
        }

        .click-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }

        * {
            flex-shrink: 0;
        }

        .frame-constraint {
            position: relative;
            transition: 100ms;
            z-index: 100;
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: calc(100% + 2px);
            min-height: calc(100% + 2px);
            max-width: calc(100% + 2px);
            max-height: calc(100% + 2px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        .loading-wrapper {
            position: absolute;
            z-index: 200;
            background-color: inherit;
            opacity: 1;
            pointer-events: none;
        }

        :host(.${re(Q.HideLoading)}) .loading-wrapper,
        :host(.${re(Q.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition: 500ms;
        }

        :host(.${re(Q.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
        }

        :host(.${re(Q.HideLoading)}) iframe {
            /**
             * While showing the actual image.
             */
            opacity: 1;
        }

        iframe {
            opacity: 0;
            display: block;
            border: none;
            max-width: calc(100% + 1px);
            max-height: calc(100% + 1px);
            width: calc(100% + 1px);
            height: calc(100% + 1px);
        }

        .min-size {
            display: flex;
            justify-content: center;
        }
    `,cleanupCallback({host:t}){const e=t.shadowRoot.querySelector("iframe"),n=t[os];e&&n&&(e.srcdoc=n)},renderCallback({state:t,inputs:e,updateState:n,host:r,dispatch:s,events:i}){n({imageData:{createPromise:async()=>{r.classList.remove(Q.HideLoading),s(new i.settled(!1)),r.classList.remove(Q.VerticallyCenter);try{return Zr(e.imageUrl,!!e.blockAutoPlay)}catch{await ln(1e3);try{return Zr(e.imageUrl,!!e.blockAutoPlay)}catch(y){throw s(new i.errored(kn(y))),y}}},trigger:{...Mi(e,f=>f!=="extraHtml")}}});const o=e.min&&e.max?Xs({box:e.min,max:e.max}):e.min,a=e.max,l=e.forcedOriginalImageSize?Qs({min:o,max:a,box:e.forcedOriginalImageSize}):void 0,h=jn(t.imageData,"",f=>W`
                    <iframe
                        loading="lazy"
                        referrerpolicy="no-referrer"
                        scrolling="no"
                        srcdoc=${Zo(f,e.extraHtml,e.htmlSizeQuerySelector)}
                        ${To(async y=>{try{const m=await Yo({updateState:n,min:o,max:a,host:r,iframeElement:y,imageData:f,forcedFinalImageSize:e.forcedFinalImageSize,forcedOriginalImageSize:l});r[os]=m,s(new i.settled(!0)),r.classList.add(Q.HideLoading)}catch(m){console.error(m)}})}
                    ></iframe>
                    <slot name="loaded"></slot>
                `,f=>(s(new i.errored(kn(f))),W`
                    <div class="error-wrapper">
                        <slot name="error">${lr(f)}</slot>
                    </div>
                `)),u=jn(t.imageData,is,f=>[Xt.Html,Xt.Video].includes(f.imageType)?"":is,()=>""),c=t.imageData instanceof Error?He`
                      max-width: 100%;
                      max-height: 100%;
                  `:l?He`
                      width: ${l.width}px;
                      height: ${l.height}px;
                  `:"",d=He`
            width: ${(o==null?void 0:o.width)??250}px;
            height: ${(o==null?void 0:o.height)??250}px;
        `;return W`
            <div class="loading-wrapper">
                <slot name="loading">Loading...</slot>
            </div>
            <div class="min-size" style=${d}>
                <div class="frame-constraint" style=${c}>${h}</div>
            </div>
            ${u}
        `}}),R=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,j=Object.keys,I=Array.isArray;function F(t,e){return typeof e!="object"||j(e).forEach(function(n){t[n]=e[n]}),t}typeof Promise>"u"||R.Promise||(R.Promise=Promise);const _t=Object.getPrototypeOf,ta={}.hasOwnProperty;function Y(t,e){return ta.call(t,e)}function Ze(t,e){typeof e=="function"&&(e=e(_t(t))),(typeof Reflect>"u"?j:Reflect.ownKeys)(e).forEach(n=>{ce(t,n,e[n])})}const ti=Object.defineProperty;function ce(t,e,n,r){ti(t,e,F(n&&Y(n,"get")&&typeof n.get=="function"?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function Ve(t){return{from:function(e){return t.prototype=Object.create(e.prototype),ce(t.prototype,"constructor",t),{extend:Ze.bind(null,t.prototype)}}}}const na=Object.getOwnPropertyDescriptor;function vr(t,e){let n;return na(t,e)||(n=_t(t))&&vr(n,e)}const ra=[].slice;function Qt(t,e,n){return ra.call(t,e,n)}function ni(t,e){return e(t)}function ot(t){if(!t)throw new Error("Assertion Failed")}function ri(t){R.setImmediate?setImmediate(t):setTimeout(t,0)}function si(t,e){return t.reduce((n,r,s)=>{var i=e(r,s);return i&&(n[i[0]]=i[1]),n},{})}function ue(t,e){if(Y(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var n=[],r=0,s=e.length;r<s;++r){var i=ue(t,e[r]);n.push(i)}return n}var o=e.indexOf(".");if(o!==-1){var a=t[e.substr(0,o)];return a===void 0?void 0:ue(a,e.substr(o+1))}}function ee(t,e,n){if(t&&e!==void 0&&(!("isFrozen"in Object)||!Object.isFrozen(t)))if(typeof e!="string"&&"length"in e){ot(typeof n!="string"&&"length"in n);for(var r=0,s=e.length;r<s;++r)ee(t,e[r],n[r])}else{var i=e.indexOf(".");if(i!==-1){var o=e.substr(0,i),a=e.substr(i+1);if(a==="")n===void 0?I(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=n;else{var l=t[o];l&&Y(t,o)||(l=t[o]={}),ee(l,a,n)}}else n===void 0?I(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=n}}function ii(t){var e={};for(var n in t)Y(t,n)&&(e[n]=t[n]);return e}const sa=[].concat;function oi(t){return sa.apply([],t)}const ai="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(oi([8,16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>R[t]),ia=ai.map(t=>R[t]);si(ai,t=>[t,!0]);let fe=null;function Ct(t){fe=typeof WeakMap<"u"&&new WeakMap;const e=Bn(t);return fe=null,e}function Bn(t){if(!t||typeof t!="object")return t;let e=fe&&fe.get(t);if(e)return e;if(I(t)){e=[],fe&&fe.set(t,e);for(var n=0,r=t.length;n<r;++n)e.push(Bn(t[n]))}else if(ia.indexOf(t.constructor)>=0)e=t;else{const i=_t(t);for(var s in e=i===Object.prototype?{}:Object.create(i),fe&&fe.set(t,e),t)Y(t,s)&&(e[s]=Bn(t[s]))}return e}const{toString:oa}={};function Kn(t){return oa.call(t).slice(8,-1)}const Ln=typeof Symbol<"u"?Symbol.iterator:"@@iterator",aa=typeof Ln=="symbol"?function(t){var e;return t!=null&&(e=t[Ln])&&e.apply(t)}:function(){return null},Le={};function ae(t){var e,n,r,s;if(arguments.length===1){if(I(t))return t.slice();if(this===Le&&typeof t=="string")return[t];if(s=aa(t)){for(n=[];!(r=s.next()).done;)n.push(r.value);return n}if(t==null)return[t];if(typeof(e=t.length)=="number"){for(n=new Array(e);e--;)n[e]=t[e];return n}return[t]}for(e=arguments.length,n=new Array(e);e--;)n[e]=arguments[e];return n}const wr=typeof Symbol<"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1;var se=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function li(t,e){se=t,ci=e}var ci=()=>!0;const la=!new Error("").stack;function Ne(){if(la)try{throw Ne.arguments,new Error}catch(t){return t}return new Error}function In(t,e){var n=t.stack;return n?(e=e||0,n.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),n.split(`
`).slice(e).filter(ci).map(r=>`
`+r).join("")):""}var ui=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],br=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ui),ca={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function We(t,e){this._e=Ne(),this.name=t,this.message=e}function hi(t,e){return t+". Errors: "+Object.keys(e).map(n=>e[n].toString()).filter((n,r,s)=>s.indexOf(n)===r).join(`
`)}function Zt(t,e,n,r){this._e=Ne(),this.failures=e,this.failedKeys=r,this.successCount=n,this.message=hi(t,e)}function dt(t,e){this._e=Ne(),this.name="BulkError",this.failures=Object.keys(e).map(n=>e[n]),this.failuresByPos=e,this.message=hi(t,e)}Ve(We).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+In(this._e,2))}},toString:function(){return this.name+": "+this.message}}),Ve(Zt).from(We),Ve(dt).from(We);var _r=br.reduce((t,e)=>(t[e]=e+"Error",t),{});const ua=We;var C=br.reduce((t,e)=>{var n=e+"Error";function r(s,i){this._e=Ne(),this.name=n,s?typeof s=="string"?(this.message=`${s}${i?`
 `+i:""}`,this.inner=i||null):typeof s=="object"&&(this.message=`${s.name} ${s.message}`,this.inner=s):(this.message=ca[e]||n,this.inner=null)}return Ve(r).from(ua),t[e]=r,t},{});C.Syntax=SyntaxError,C.Type=TypeError,C.Range=RangeError;var as=ui.reduce((t,e)=>(t[e+"Error"]=C[e],t),{}),It=br.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=C[e]),t),{});function T(){}function xt(t){return t}function ha(t,e){return t==null||t===xt?e:function(n){return e(t(n))}}function Oe(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function da(t,e){return t===T?e:function(){var n=t.apply(this,arguments);n!==void 0&&(arguments[0]=n);var r=this.onsuccess,s=this.onerror;this.onsuccess=null,this.onerror=null;var i=e.apply(this,arguments);return r&&(this.onsuccess=this.onsuccess?Oe(r,this.onsuccess):r),s&&(this.onerror=this.onerror?Oe(s,this.onerror):s),i!==void 0?i:n}}function fa(t,e){return t===T?e:function(){t.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,e.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?Oe(n,this.onsuccess):n),r&&(this.onerror=this.onerror?Oe(r,this.onerror):r)}}function ma(t,e){return t===T?e:function(n){var r=t.apply(this,arguments);F(n,r);var s=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);return s&&(this.onsuccess=this.onsuccess?Oe(s,this.onsuccess):s),i&&(this.onerror=this.onerror?Oe(i,this.onerror):i),r===void 0?o===void 0?void 0:o:F(r,o)}}function pa(t,e){return t===T?e:function(){return e.apply(this,arguments)!==!1&&t.apply(this,arguments)}}function xr(t,e){return t===T?e:function(){var n=t.apply(this,arguments);if(n&&typeof n.then=="function"){for(var r=this,s=arguments.length,i=new Array(s);s--;)i[s]=arguments[s];return n.then(function(){return e.apply(r,i)})}return e.apply(this,arguments)}}It.ModifyError=Zt,It.DexieError=We,It.BulkError=dt;var St={};const[Hn,en,Un]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,_t(t),t];const e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[e,_t(e),t]})(),di=en&&en.then,Ht=Hn&&Hn.constructor,Sr=!!Un;var Fn=!1,ga=Un?()=>{Un.then(Rt)}:R.setImmediate?setImmediate.bind(null,Rt):R.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(()=>{Rt(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout(Rt,0)},ft=function(t,e){at.push([t,e]),tn&&(ga(),tn=!1)},qn=!0,tn=!0,Ce=[],Ut=[],Vn=null,Wn=xt,Ge={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:cs,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{cs(t[0],t[1])}catch{}})}},A=Ge,at=[],ke=0,Ft=[];function S(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=T,this._lib=!1;var e=this._PSD=A;if(se&&(this._stackHolder=Ne(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==St)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Jn(this,this._value))}this._state=null,this._value=null,++e.ref,mi(this,t)}const Gn={get:function(){var t=A,e=nn;function n(r,s){var i=!t.global&&(t!==A||e!==nn);const o=i&&!he();var a=new S((l,h)=>{$r(this,new fi(rn(r,t,i,o),rn(s,t,i,o),l,h,t))});return se&&yi(a,this),a}return n.prototype=St,n},set:function(t){ce(this,"then",t&&t.prototype===St?Gn:{get:function(){return t},set:Gn.set})}};function fi(t,e,n,r,s){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof e=="function"?e:null,this.resolve=n,this.reject=r,this.psd=s}function mi(t,e){try{e(n=>{if(t._state===null){if(n===t)throw new TypeError("A promise cannot be resolved with itself.");var r=t._lib&&kt();n&&typeof n.then=="function"?mi(t,(s,i)=>{n instanceof S?n._then(s,i):n.then(s,i)}):(t._state=!0,t._value=n,pi(t)),r&&Pt()}},Jn.bind(null,t))}catch(n){Jn(t,n)}}function Jn(t,e){if(Ut.push(e),t._state===null){var n=t._lib&&kt();e=Wn(e),t._state=!1,t._value=e,se&&e!==null&&typeof e=="object"&&!e._promise&&function(r,s,i){try{r.apply(null,i)}catch(o){s&&s(o)}}(()=>{var r=vr(e,"stack");e._promise=t,ce(e,"stack",{get:()=>Fn?r&&(r.get?r.get.apply(e):r.value):t.stack})}),function(r){Ce.some(s=>s._value===r._value)||Ce.push(r)}(t),pi(t),n&&Pt()}}function pi(t){var e=t._listeners;t._listeners=[];for(var n=0,r=e.length;n<r;++n)$r(t,e[n]);var s=t._PSD;--s.ref||s.finalize(),ke===0&&(++ke,ft(()=>{--ke==0&&Er()},[]))}function $r(t,e){if(t._state!==null){var n=t._state?e.onFulfilled:e.onRejected;if(n===null)return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++ke,ft(ya,[n,t,e])}else t._listeners.push(e)}function ya(t,e,n){try{Vn=e;var r,s=e._value;e._state?r=t(s):(Ut.length&&(Ut=[]),r=t(s),Ut.indexOf(s)===-1&&function(i){for(var o=Ce.length;o;)if(Ce[--o]._value===i._value)return void Ce.splice(o,1)}(e)),n.resolve(r)}catch(i){n.reject(i)}finally{Vn=null,--ke==0&&Er(),--n.psd.ref||n.psd.finalize()}}function gi(t,e,n){if(e.length===n)return e;var r="";if(t._state===!1){var s,i,o=t._value;o!=null?(s=o.name||"Error",i=o.message||o,r=In(o,0)):(s=o,i=""),e.push(s+(i?": "+i:"")+r)}return se&&((r=In(t._stackHolder,2))&&e.indexOf(r)===-1&&e.push(r),t._prev&&gi(t._prev,e,n)),e}function yi(t,e){var n=e?e._numPrev+1:0;n<100&&(t._prev=e,t._numPrev=n)}function Rt(){kt()&&Pt()}function kt(){var t=qn;return qn=!1,tn=!1,t}function Pt(){var t,e,n;do for(;at.length>0;)for(t=at,at=[],n=t.length,e=0;e<n;++e){var r=t[e];r[0].apply(null,r[1])}while(at.length>0);qn=!0,tn=!0}function Er(){var t=Ce;Ce=[],t.forEach(r=>{r._PSD.onunhandled.call(null,r._value,r)});for(var e=Ft.slice(0),n=e.length;n;)e[--n]()}function Nt(t){return new S(St,!1,t)}function N(t,e){var n=A;return function(){var r=kt(),s=A;try{return ve(n,!0),t.apply(this,arguments)}catch(i){e&&e(i)}finally{ve(s,!1),r&&Pt()}}}Ze(S.prototype,{then:Gn,_then:function(t,e){$r(this,new fi(null,null,t,e,A))},catch:function(t){if(arguments.length===1)return this.then(null,t);var e=arguments[0],n=arguments[1];return typeof e=="function"?this.then(null,r=>r instanceof e?n(r):Nt(r)):this.then(null,r=>r&&r.name===e?n(r):Nt(r))},finally:function(t){return this.then(e=>(t(),e),e=>(t(),Nt(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Fn=!0;var t=gi(this,[],20).join(`
From previous: `);return this._state!==null&&(this._stack=t),t}finally{Fn=!1}}},timeout:function(t,e){return t<1/0?new S((n,r)=>{var s=setTimeout(()=>r(new C.Timeout(e)),t);this.then(n,r).finally(clearTimeout.bind(null,s))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&ce(S.prototype,Symbol.toStringTag,"Dexie.Promise"),Ge.env=vi(),Ze(S,{all:function(){var t=ae.apply(null,arguments).map(Dt);return new S(function(e,n){t.length===0&&e([]);var r=t.length;t.forEach((s,i)=>S.resolve(s).then(o=>{t[i]=o,--r||e(t)},n))})},resolve:t=>{if(t instanceof S)return t;if(t&&typeof t.then=="function")return new S((n,r)=>{t.then(n,r)});var e=new S(St,!0,t);return yi(e,Vn),e},reject:Nt,race:function(){var t=ae.apply(null,arguments).map(Dt);return new S((e,n)=>{t.map(r=>S.resolve(r).then(e,n))})},PSD:{get:()=>A,set:t=>A=t},totalEchoes:{get:()=>nn},newPSD:ye,usePSD:tt,scheduler:{get:()=>ft,set:t=>{ft=t}},rejectionMapper:{get:()=>Wn,set:t=>{Wn=t}},follow:(t,e)=>new S((n,r)=>ye((s,i)=>{var o=A;o.unhandleds=[],o.onunhandled=i,o.finalize=Oe(function(){(function(a){function l(){a(),Ft.splice(Ft.indexOf(l),1)}Ft.push(l),++ke,ft(()=>{--ke==0&&Er()},[])})(()=>{this.unhandleds.length===0?s():i(this.unhandleds[0])})},o.finalize),t()},e,n,r))}),Ht&&(Ht.allSettled&&ce(S,"allSettled",function(){const t=ae.apply(null,arguments).map(Dt);return new S(e=>{t.length===0&&e([]);let n=t.length;const r=new Array(n);t.forEach((s,i)=>S.resolve(s).then(o=>r[i]={status:"fulfilled",value:o},o=>r[i]={status:"rejected",reason:o}).then(()=>--n||e(r)))})}),Ht.any&&typeof AggregateError<"u"&&ce(S,"any",function(){const t=ae.apply(null,arguments).map(Dt);return new S((e,n)=>{t.length===0&&n(new AggregateError([]));let r=t.length;const s=new Array(r);t.forEach((i,o)=>S.resolve(i).then(a=>e(a),a=>{s[o]=a,--r||n(new AggregateError(s))}))})}));const L={awaits:0,echoes:0,id:0};var va=0,qt=[],_n=0,nn=0,wa=0;function ye(t,e,n,r){var s=A,i=Object.create(s);i.parent=s,i.ref=0,i.global=!1,i.id=++wa;var o=Ge.env;i.env=Sr?{Promise:S,PromiseProp:{value:S,configurable:!0,writable:!0},all:S.all,race:S.race,allSettled:S.allSettled,any:S.any,resolve:S.resolve,reject:S.reject,nthen:ls(o.nthen,i),gthen:ls(o.gthen,i)}:{},e&&F(i,e),++s.ref,i.finalize=function(){--this.parent.ref||this.parent.finalize()};var a=tt(i,t,n,r);return i.ref===0&&i.finalize(),a}function et(){return L.id||(L.id=++va),++L.awaits,L.echoes+=100,L.id}function he(){return!!L.awaits&&(--L.awaits==0&&(L.id=0),L.echoes=100*L.awaits,!0)}function Dt(t){return L.echoes&&t&&t.constructor===Ht?(et(),t.then(e=>(he(),e),e=>(he(),M(e)))):t}function ba(t){++nn,L.echoes&&--L.echoes!=0||(L.echoes=L.id=0),qt.push(A),ve(t,!0)}function _a(){var t=qt[qt.length-1];qt.pop(),ve(t,!1)}function ve(t,e){var n=A;if((e?!L.echoes||_n++&&t===A:!_n||--_n&&t===A)||wi(e?ba.bind(null,t):_a),t!==A&&(A=t,n===Ge&&(Ge.env=vi()),Sr)){var r=Ge.env.Promise,s=t.env;en.then=s.nthen,r.prototype.then=s.gthen,(n.global||t.global)&&(Object.defineProperty(R,"Promise",s.PromiseProp),r.all=s.all,r.race=s.race,r.resolve=s.resolve,r.reject=s.reject,s.allSettled&&(r.allSettled=s.allSettled),s.any&&(r.any=s.any))}}function vi(){var t=R.Promise;return Sr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(R,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:en.then,gthen:t.prototype.then}:{}}function tt(t,e,n,r,s){var i=A;try{return ve(t,!0),e(n,r,s)}finally{ve(i,!1)}}function wi(t){di.call(Hn,t)}function rn(t,e,n,r){return typeof t!="function"?t:function(){var s=A;n&&et(),ve(e,!0);try{return t.apply(this,arguments)}finally{ve(s,!1),r&&wi(he)}}}function ls(t,e){return function(n,r){return t.call(this,rn(n,e),rn(r,e))}}(""+di).indexOf("[native code]")===-1&&(et=he=T);function cs(t,e){var n;try{n=e.onuncatched(t)}catch{}if(n!==!1)try{var r,s={promise:e,reason:t};if(R.document&&document.createEvent?((r=document.createEvent("Event")).initEvent("unhandledrejection",!0,!0),F(r,s)):R.CustomEvent&&F(r=new CustomEvent("unhandledrejection",{detail:s}),s),r&&R.dispatchEvent&&(dispatchEvent(r),!R.PromiseRejectionEvent&&R.onunhandledrejection))try{R.onunhandledrejection(r)}catch{}se&&r&&!r.defaultPrevented&&console.warn(`Unhandled rejection: ${t.stack||t}`)}catch{}}var M=S.reject;function Yn(t,e,n,r){if(t.idbdb&&(t._state.openComplete||A.letThrough||t._vip)){var s=t._createTransaction(e,n,t._dbSchema);try{s.create(),t._state.PR1398_maxLoop=3}catch(i){return i.name===_r.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Yn(t,e,n,r))):M(i)}return s._promise(e,(i,o)=>ye(()=>(A.trans=s,r(i,o,s)))).then(i=>s._completion.then(()=>i))}if(t._state.openComplete)return M(new C.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._options.autoOpen)return M(new C.DatabaseClosed);t.open().catch(T)}return t._state.dbReadyPromise.then(()=>Yn(t,e,n,r))}const Ae=String.fromCharCode(65535),ie="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",mt=[],hn=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),xa=hn,Sa=hn,bi=t=>!/(dexie\.js|dexie\.min\.js)/.test(t);function Re(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(this,arguments)}:t:e}const _i={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function zt(t){return typeof t!="string"||/\./.test(t)?e=>e:e=>(e[t]===void 0&&t in e&&delete(e=Ct(e))[t],e)}class $a{_trans(e,n,r){const s=this._tx||A.trans,i=this.name;function o(l,h,u){if(!u.schema[i])throw new C.NotFound("Table "+i+" not part of transaction");return n(u.idbtrans,u)}const a=kt();try{return s&&s.db===this.db?s===A.trans?s._promise(e,o,r):ye(()=>s._promise(e,o,r),{trans:s,transless:A.transless||A}):Yn(this.db,e,[this.name],o)}finally{a&&Pt()}}get(e,n){return e&&e.constructor===Object?this.where(e).first(n):this._trans("readonly",r=>this.core.get({trans:r,key:e}).then(s=>this.hook.reading.fire(s))).then(n)}where(e){if(typeof e=="string")return new this.db.WhereClause(this,e);if(I(e))return new this.db.WhereClause(this,`[${e.join("+")}]`);const n=j(e);if(n.length===1)return this.where(n[0]).equals(e[n[0]]);const r=this.schema.indexes.concat(this.schema.primKey).filter(h=>h.compound&&n.every(u=>h.keyPath.indexOf(u)>=0)&&h.keyPath.every(u=>n.indexOf(u)>=0))[0];if(r&&this.db._maxKey!==Ae)return this.where(r.name).equals(r.keyPath.map(h=>e[h]));!r&&se&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);const{idxByName:s}=this.schema,i=this.db._deps.indexedDB;function o(h,u){try{return i.cmp(h,u)===0}catch{return!1}}const[a,l]=n.reduce(([h,u],c)=>{const d=s[c],f=e[c];return[h||d,h||!d?Re(u,d&&d.multi?y=>{const m=ue(y,c);return I(m)&&m.some(v=>o(f,v))}:y=>o(f,ue(y,c))):u]},[null,null]);return a?this.where(a.name).equals(e[a.keyPath]).filter(l):r?this.filter(l):this.where(n).equals("")}filter(e){return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,I(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.mappedClass=e;const n=r=>{if(!r)return r;const s=Object.create(e.prototype);for(var i in r)if(Y(r,i))try{s[i]=r[i]}catch{}return s};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=n,this.hook("reading",n),e}defineClass(){return this.mapToClass(function(e){F(this,e)})}add(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=zt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"add",keys:n!=null?[n]:null,values:[i]})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{ee(e,s,o)}catch{}return o})}update(e,n){if(typeof e!="object"||I(e))return this.where(":id").equals(e).modify(n);{const r=ue(e,this.schema.primKey.keyPath);if(r===void 0)return M(new C.InvalidArgument("Given object does not contain its primary key"));try{typeof n!="function"?j(n).forEach(s=>{ee(e,s,n[s])}):n(e,{value:e,primKey:r})}catch{}return this.where(":id").equals(r).modify(n)}}put(e,n){const{auto:r,keyPath:s}=this.schema.primKey;let i=e;return s&&r&&(i=zt(s)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[i],keys:n!=null?[n]:null})).then(o=>o.numFailures?S.reject(o.failures[0]):o.lastResult).then(o=>{if(s)try{ee(e,s,o)}catch{}return o})}delete(e){return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:[e]})).then(n=>n.numFailures?S.reject(n.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.core.mutate({trans:e,type:"deleteRange",range:_i})).then(e=>e.numFailures?S.reject(e.failures[0]):void 0)}bulkGet(e){return this._trans("readonly",n=>this.core.getMany({keys:e,trans:n}).then(r=>r.map(s=>this.hook.reading.fire(s))))}bulkAdd(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const h=e.length;let u=l&&a?e.map(zt(l)):e;return this.core.mutate({trans:o,type:"add",keys:s,values:u,wantResults:i}).then(({numFailures:c,results:d,lastResult:f,failures:y})=>{if(c===0)return i?d:f;throw new dt(`${this.name}.bulkAdd(): ${c} of ${h} operations failed`,y)})})}bulkPut(e,n,r){const s=Array.isArray(n)?n:void 0,i=(r=r||(s?void 0:n))?r.allKeys:void 0;return this._trans("readwrite",o=>{const{auto:a,keyPath:l}=this.schema.primKey;if(l&&s)throw new C.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(s&&s.length!==e.length)throw new C.InvalidArgument("Arguments objects and keys must have the same length");const h=e.length;let u=l&&a?e.map(zt(l)):e;return this.core.mutate({trans:o,type:"put",keys:s,values:u,wantResults:i}).then(({numFailures:c,results:d,lastResult:f,failures:y})=>{if(c===0)return i?d:f;throw new dt(`${this.name}.bulkPut(): ${c} of ${h} operations failed`,y)})})}bulkDelete(e){const n=e.length;return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:e})).then(({numFailures:r,lastResult:s,failures:i})=>{if(r===0)return s;throw new dt(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})}}function pt(t){var e={},n=function(a,l){if(l){for(var h=arguments.length,u=new Array(h-1);--h;)u[h-1]=arguments[h];return e[a].subscribe.apply(null,u),t}if(typeof a=="string")return e[a]};n.addEventType=i;for(var r=1,s=arguments.length;r<s;++r)i(arguments[r]);return n;function i(a,l,h){if(typeof a=="object")return o(a);l||(l=pa),h||(h=T);var u={subscribers:[],fire:h,subscribe:function(c){u.subscribers.indexOf(c)===-1&&(u.subscribers.push(c),u.fire=l(u.fire,c))},unsubscribe:function(c){u.subscribers=u.subscribers.filter(function(d){return d!==c}),u.fire=u.subscribers.reduce(l,h)}};return e[a]=n[a]=u,u}function o(a){j(a).forEach(function(l){var h=a[l];if(I(h))i(l,a[l][0],a[l][1]);else{if(h!=="asap")throw new C.InvalidArgument("Invalid event config");var u=i(l,xt,function(){for(var c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];u.subscribers.forEach(function(f){ri(function(){f.apply(null,d)})})})}})}}function st(t,e){return Ve(e).from({prototype:t}),e}function je(t,e){return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function xn(t,e){t.filter=Re(t.filter,e)}function Sn(t,e,n){var r=t.replayFilter;t.replayFilter=r?()=>Re(r(),e()):e,t.justLimit=n&&!r}function Vt(t,e){if(t.isPrimKey)return e.primaryKey;const n=e.getIndexByKeyPath(t.index);if(!n)throw new C.Schema("KeyPath "+t.index+" on object store "+e.name+" is not indexed");return n}function us(t,e,n){const r=Vt(t,e.schema);return e.openCursor({trans:n,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:r,range:t.range}})}function jt(t,e,n,r){const s=t.replayFilter?Re(t.filter,t.replayFilter()):t.filter;if(t.or){const i={},o=(a,l,h)=>{if(!s||s(l,h,d=>l.stop(d),d=>l.fail(d))){var u=l.primaryKey,c=""+u;c==="[object ArrayBuffer]"&&(c=""+new Uint8Array(u)),Y(i,c)||(i[c]=!0,e(a,l,h))}};return Promise.all([t.or._iterate(o,n),hs(us(t,r,n),t.algorithm,o,!t.keysOnly&&t.valueMapper)])}return hs(us(t,r,n),Re(t.algorithm,s),e,!t.keysOnly&&t.valueMapper)}function hs(t,e,n,r){var s=N(r?(i,o,a)=>n(r(i),o,a):n);return t.then(i=>{if(i)return i.start(()=>{var o=()=>i.continue();e&&!e(i,a=>o=a,a=>{i.stop(a),o=T},a=>{i.fail(a),o=T})||s(i.value,i,a=>o=a),o()})})}function U(t,e){try{const n=ds(t),r=ds(e);if(n!==r)return n==="Array"?1:r==="Array"?-1:n==="binary"?1:r==="binary"?-1:n==="string"?1:r==="string"?-1:n==="Date"?1:r!=="Date"?NaN:-1;switch(n){case"number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let h=0;h<l;++h)if(s[h]!==i[h])return s[h]<i[h]?-1:1;return o===a?0:o<a?-1:1}(fs(t),fs(e));case"Array":return function(s,i){const o=s.length,a=i.length,l=o<a?o:a;for(let h=0;h<l;++h){const u=U(s[h],i[h]);if(u!==0)return u}return o===a?0:o<a?-1:1}(t,e)}}catch{}return NaN}function ds(t){const e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";const n=Kn(t);return n==="ArrayBuffer"?"binary":n}function fs(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}class Ea{_read(e,n){var r=this._ctx;return r.error?r.table._trans(null,M.bind(null,r.error)):r.table._trans("readonly",e).then(n)}_write(e){var n=this._ctx;return n.error?n.table._trans(null,M.bind(null,n.error)):n.table._trans("readwrite",e,"locked")}_addAlgorithm(e){var n=this._ctx;n.algorithm=Re(n.algorithm,e)}_iterate(e,n){return jt(this._ctx,e,n,this._ctx.table.core)}clone(e){var n=Object.create(this.constructor.prototype),r=Object.create(this._ctx);return e&&F(r,e),n._ctx=r,n}raw(){return this._ctx.valueMapper=null,this}each(e){var n=this._ctx;return this._read(r=>jt(n,e,r,n.table.core))}count(e){return this._read(n=>{const r=this._ctx,s=r.table.core;if(je(r,!0))return s.count({trans:n,query:{index:Vt(r,s.schema),range:r.range}}).then(o=>Math.min(o,r.limit));var i=0;return jt(r,()=>(++i,!1),n,s).then(()=>i)}).then(e)}sortBy(e,n){const r=e.split(".").reverse(),s=r[0],i=r.length-1;function o(h,u){return u?o(h[r[u]],u-1):h[s]}var a=this._ctx.dir==="next"?1:-1;function l(h,u){var c=o(h,i),d=o(u,i);return c<d?-a:c>d?a:0}return this.toArray(function(h){return h.sort(l)}).then(n)}toArray(e){return this._read(n=>{var r=this._ctx;if(r.dir==="next"&&je(r,!0)&&r.limit>0){const{valueMapper:s}=r,i=Vt(r,r.table.core.schema);return r.table.core.query({trans:n,limit:r.limit,values:!0,query:{index:i,range:r.range}}).then(({result:o})=>s?o.map(s):o)}{const s=[];return jt(r,i=>s.push(i),n,r.table.core).then(()=>s)}},e)}offset(e){var n=this._ctx;return e<=0||(n.offset+=e,je(n)?Sn(n,()=>{var r=e;return(s,i)=>r===0||(r===1?(--r,!1):(i(()=>{s.advance(r),r=0}),!1))}):Sn(n,()=>{var r=e;return()=>--r<0})),this}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Sn(this._ctx,()=>{var n=e;return function(r,s,i){return--n<=0&&s(i),n>=0}},!0),this}until(e,n){return xn(this._ctx,function(r,s,i){return!e(r.value)||(s(i),n)}),this}first(e){return this.limit(1).toArray(function(n){return n[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){var n,r;return xn(this._ctx,function(s){return e(s.value)}),n=this._ctx,r=e,n.isMatch=Re(n.isMatch,r),this}and(e){return this.filter(e)}or(e){return new this.db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.key,s)})}eachUniqueKey(e){return this._ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var n=this._ctx;return n.keysOnly=!n.isMatch,this.each(function(r,s){e(s.primaryKey,s)})}keys(e){var n=this._ctx;n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.key)}).then(function(){return r}).then(e)}primaryKeys(e){var n=this._ctx;if(n.dir==="next"&&je(n,!0)&&n.limit>0)return this._read(s=>{var i=Vt(n,n.table.core.schema);return n.table.core.query({trans:s,values:!1,limit:n.limit,query:{index:i,range:n.range}})}).then(({result:s})=>s).then(e);n.keysOnly=!n.isMatch;var r=[];return this.each(function(s,i){r.push(i.primaryKey)}).then(function(){return r}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.limit(1).keys(function(n){return n[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){var e=this._ctx,n=e.index&&e.table.schema.idxByName[e.index];if(!n||!n.multi)return this;var r={};return xn(this._ctx,function(s){var i=s.primaryKey.toString(),o=Y(r,i);return r[i]=!0,!o}),this}modify(e){var n=this._ctx;return this._write(r=>{var s;if(typeof e=="function")s=e;else{var i=j(e),o=i.length;s=function(m){for(var v=!1,p=0;p<o;++p){var g=i[p],b=e[g];ue(m,g)!==b&&(ee(m,g,b),v=!0)}return v}}const a=n.table.core,{outbound:l,extractKey:h}=a.schema.primaryKey,u=this.db._options.modifyChunkSize||200,c=[];let d=0;const f=[],y=(m,v)=>{const{failures:p,numFailures:g}=v;d+=m-g;for(let b of j(p))c.push(p[b])};return this.clone().primaryKeys().then(m=>{const v=p=>{const g=Math.min(u,m.length-p);return a.getMany({trans:r,keys:m.slice(p,p+g),cache:"immutable"}).then(b=>{const E=[],x=[],w=l?[]:null,_=[];for(let $=0;$<g;++$){const O=b[$],D={value:Ct(O),primKey:m[p+$]};s.call(D,D.value,D)!==!1&&(D.value==null?_.push(m[p+$]):l||U(h(O),h(D.value))===0?(x.push(D.value),l&&w.push(m[p+$])):(_.push(m[p+$]),E.push(D.value)))}const k=je(n)&&n.limit===1/0&&(typeof e!="function"||e===$n)&&{index:n.index,range:n.range};return Promise.resolve(E.length>0&&a.mutate({trans:r,type:"add",values:E}).then($=>{for(let O in $.failures)_.splice(parseInt(O),1);y(E.length,$)})).then(()=>(x.length>0||k&&typeof e=="object")&&a.mutate({trans:r,type:"put",keys:w,values:x,criteria:k,changeSpec:typeof e!="function"&&e}).then($=>y(x.length,$))).then(()=>(_.length>0||k&&e===$n)&&a.mutate({trans:r,type:"delete",keys:_,criteria:k}).then($=>y(_.length,$))).then(()=>m.length>p+g&&v(p+u))})};return v(0).then(()=>{if(c.length>0)throw new Zt("Error modifying one or more objects",c,d,f);return m.length})})})}delete(){var e=this._ctx,n=e.range;return je(e)&&(e.isPrimKey&&!Sa||n.type===3)?this._write(r=>{const{primaryKey:s}=e.table.core.schema,i=n;return e.table.core.count({trans:r,query:{index:s,range:i}}).then(o=>e.table.core.mutate({trans:r,type:"deleteRange",range:i}).then(({failures:a,lastResult:l,results:h,numFailures:u})=>{if(u)throw new Zt("Could not delete some values",Object.keys(a).map(c=>a[c]),o-u);return o-u}))}):this.modify($n)}}const $n=(t,e)=>e.value=null;function Aa(t,e){return t<e?-1:t===e?0:1}function Ca(t,e){return t>e?-1:t===e?0:1}function G(t,e,n){var r=t instanceof Si?new t.Collection(t):t;return r._ctx.error=n?new n(e):new TypeError(e),r}function Me(t){return new t.Collection(t,()=>xi("")).limit(0)}function ka(t,e,n,r,s,i){for(var o=Math.min(t.length,r.length),a=-1,l=0;l<o;++l){var h=e[l];if(h!==r[l])return s(t[l],n[l])<0?t.substr(0,l)+n[l]+n.substr(l+1):s(t[l],r[l])<0?t.substr(0,l)+r[l]+n.substr(l+1):a>=0?t.substr(0,a)+e[a]+n.substr(a+1):null;s(t[l],h)<0&&(a=l)}return o<r.length&&i==="next"?t+n.substr(t.length):o<t.length&&i==="prev"?t.substr(0,n.length):a<0?null:t.substr(0,a)+r[a]+n.substr(a+1)}function Mt(t,e,n,r){var s,i,o,a,l,h,u,c=n.length;if(!n.every(m=>typeof m=="string"))return G(t,"String expected.");function d(m){s=function(p){return p==="next"?g=>g.toUpperCase():g=>g.toLowerCase()}(m),i=function(p){return p==="next"?g=>g.toLowerCase():g=>g.toUpperCase()}(m),o=m==="next"?Aa:Ca;var v=n.map(function(p){return{lower:i(p),upper:s(p)}}).sort(function(p,g){return o(p.lower,g.lower)});a=v.map(function(p){return p.upper}),l=v.map(function(p){return p.lower}),h=m,u=m==="next"?"":r}d("next");var f=new t.Collection(t,()=>de(a[0],l[c-1]+r));f._ondirectionchange=function(m){d(m)};var y=0;return f._addAlgorithm(function(m,v,p){var g=m.key;if(typeof g!="string")return!1;var b=i(g);if(e(b,l,y))return!0;for(var E=null,x=y;x<c;++x){var w=ka(g,b,a[x],l[x],o,h);w===null&&E===null?y=x+1:(E===null||o(E,w)>0)&&(E=w)}return v(E!==null?function(){m.continue(E+u)}:p),!1}),f}function de(t,e,n,r){return{type:2,lower:t,upper:e,lowerOpen:n,upperOpen:r}}function xi(t){return{type:1,lower:t,upper:t}}class Si{get Collection(){return this._ctx.table.db.Collection}between(e,n,r,s){r=r!==!1,s=s===!0;try{return this._cmp(e,n)>0||this._cmp(e,n)===0&&(r||s)&&(!r||!s)?Me(this):new this.Collection(this,()=>de(e,n,!r,!s))}catch{return G(this,ie)}}equals(e){return e==null?G(this,ie):new this.Collection(this,()=>xi(e))}above(e){return e==null?G(this,ie):new this.Collection(this,()=>de(e,void 0,!0))}aboveOrEqual(e){return e==null?G(this,ie):new this.Collection(this,()=>de(e,void 0,!1))}below(e){return e==null?G(this,ie):new this.Collection(this,()=>de(void 0,e,!1,!0))}belowOrEqual(e){return e==null?G(this,ie):new this.Collection(this,()=>de(void 0,e))}startsWith(e){return typeof e!="string"?G(this,"String expected."):this.between(e,e+Ae,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Mt(this,(n,r)=>n.indexOf(r[0])===0,[e],Ae)}equalsIgnoreCase(e){return Mt(this,(n,r)=>n===r[0],[e],"")}anyOfIgnoreCase(){var e=ae.apply(Le,arguments);return e.length===0?Me(this):Mt(this,(n,r)=>r.indexOf(n)!==-1,e,"")}startsWithAnyOfIgnoreCase(){var e=ae.apply(Le,arguments);return e.length===0?Me(this):Mt(this,(n,r)=>r.some(s=>n.indexOf(s)===0),e,Ae)}anyOf(){const e=ae.apply(Le,arguments);let n=this._cmp;try{e.sort(n)}catch{return G(this,ie)}if(e.length===0)return Me(this);const r=new this.Collection(this,()=>de(e[0],e[e.length-1]));r._ondirectionchange=i=>{n=i==="next"?this._ascending:this._descending,e.sort(n)};let s=0;return r._addAlgorithm((i,o,a)=>{const l=i.key;for(;n(l,e[s])>0;)if(++s,s===e.length)return o(a),!1;return n(l,e[s])===0||(o(()=>{i.continue(e[s])}),!1)}),r}notEqual(e){return this.inAnyRange([[-(1/0),e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){const e=ae.apply(Le,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return G(this,ie)}const n=e.reduce((r,s)=>r?r.concat([[r[r.length-1][1],s]]):[[-(1/0),s]],null);return n.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(n,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,n){const r=this._cmp,s=this._ascending,i=this._descending,o=this._min,a=this._max;if(e.length===0)return Me(this);if(!e.every(g=>g[0]!==void 0&&g[1]!==void 0&&s(g[0],g[1])<=0))return G(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",C.InvalidArgument);const l=!n||n.includeLowers!==!1,h=n&&n.includeUppers===!0;let u,c=s;function d(g,b){return c(g[0],b[0])}try{u=e.reduce(function(g,b){let E=0,x=g.length;for(;E<x;++E){const w=g[E];if(r(b[0],w[1])<0&&r(b[1],w[0])>0){w[0]=o(w[0],b[0]),w[1]=a(w[1],b[1]);break}}return E===x&&g.push(b),g},[]),u.sort(d)}catch{return G(this,ie)}let f=0;const y=h?g=>s(g,u[f][1])>0:g=>s(g,u[f][1])>=0,m=l?g=>i(g,u[f][0])>0:g=>i(g,u[f][0])>=0;let v=y;const p=new this.Collection(this,()=>de(u[0][0],u[u.length-1][1],!l,!h));return p._ondirectionchange=g=>{g==="next"?(v=y,c=s):(v=m,c=i),u.sort(d)},p._addAlgorithm((g,b,E)=>{for(var x=g.key;v(x);)if(++f,f===u.length)return b(E),!1;return!!function(w){return!y(w)&&!m(w)}(x)||(this._cmp(x,u[f][1])===0||this._cmp(x,u[f][0])===0||b(()=>{c===s?g.continue(u[f][0]):g.continue(u[f][1])}),!1)}),p}startsWithAnyOf(){const e=ae.apply(Le,arguments);return e.every(n=>typeof n=="string")?e.length===0?Me(this):this.inAnyRange(e.map(n=>[n,n+Ae])):G(this,"startsWithAnyOf() only works with strings")}}function te(t){return N(function(e){return $t(e),t(e.target.error),!1})}function $t(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}const we=pt(null,"storagemutated");class Pa{_lock(){return ot(!A.global),++this._reculock,this._reculock!==1||A.global||(A.lockOwnerFor=this),this}_unlock(){if(ot(!A.global),--this._reculock==0)for(A.global||(A.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var e=this._blockedFuncs.shift();try{tt(e[1],e[0])}catch{}}return this}_locked(){return this._reculock&&A.lockOwnerFor!==this}create(e){if(!this.mode)return this;const n=this.db.idbdb,r=this.db._state.dbOpenError;if(ot(!this.idbtrans),!e&&!n)switch(r&&r.name){case"DatabaseClosedError":throw new C.DatabaseClosed(r);case"MissingAPIError":throw new C.MissingAPI(r.message,r);default:throw new C.OpenFailed(r)}if(!this.active)throw new C.TransactionInactive;return ot(this._completion._state===null),(e=this.idbtrans=e||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):n.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}))).onerror=N(s=>{$t(s),this._reject(e.error)}),e.onabort=N(s=>{$t(s),this.active&&this._reject(new C.Abort(e.error)),this.active=!1,this.on("abort").fire(s)}),e.oncomplete=N(()=>{this.active=!1,this._resolve(),"mutatedParts"in e&&we.storagemutated.fire(e.mutatedParts)}),this}_promise(e,n,r){if(e==="readwrite"&&this.mode!=="readwrite")return M(new C.ReadOnly("Transaction is readonly"));if(!this.active)return M(new C.TransactionInactive);if(this._locked())return new S((i,o)=>{this._blockedFuncs.push([()=>{this._promise(e,n,r).then(i,o)},A])});if(r)return ye(()=>{var i=new S((o,a)=>{this._lock();const l=n(o,a,this);l&&l.then&&l.then(o,a)});return i.finally(()=>this._unlock()),i._lib=!0,i});var s=new S((i,o)=>{var a=n(i,o,this);a&&a.then&&a.then(i,o)});return s._lib=!0,s}_root(){return this.parent?this.parent._root():this}waitFor(e){var n=this._root();const r=S.resolve(e);if(n._waitingFor)n._waitingFor=n._waitingFor.then(()=>r);else{n._waitingFor=r,n._waitingQueue=[];var s=n.idbtrans.objectStore(n.storeNames[0]);(function o(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(s.get(-1/0).onsuccess=o)})()}var i=n._waitingFor;return new S((o,a)=>{r.then(l=>n._waitingQueue.push(N(o.bind(null,l))),l=>n._waitingQueue.push(N(a.bind(null,l)))).finally(()=>{n._waitingFor===i&&(n._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new C.Abort))}table(e){const n=this._memoizedTables||(this._memoizedTables={});if(Y(n,e))return n[e];const r=this.schema[e];if(!r)throw new C.NotFound("Table "+e+" not part of transaction");const s=new this.db.Table(e,r,this);return s.core=this.db.core.table(e),n[e]=s,s}}function Xn(t,e,n,r,s,i,o){return{name:t,keyPath:e,unique:n,multi:r,auto:s,compound:i,src:(n&&!o?"&":"")+(r?"*":"")+(s?"++":"")+$i(e)}}function $i(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function Ei(t,e,n){return{name:t,primKey:e,indexes:n,mappedClass:null,idxByName:si(n,r=>[r.name,r])}}let Et=t=>{try{return t.only([[]]),Et=()=>[[]],[[]]}catch{return Et=()=>Ae,Ae}};function Qn(t){return t==null?()=>{}:typeof t=="string"?function(e){return e.split(".").length===1?n=>n[e]:n=>ue(n,e)}(t):e=>ue(e,t)}function ms(t){return[].slice.call(t)}let Ta=0;function gt(t){return t==null?":id":typeof t=="string"?t:`[${t.join("+")}]`}function Oa(t,e,n){function r(l){if(l.type===3)return null;if(l.type===4)throw new Error("Cannot convert never type to IDBKeyRange");const{lower:h,upper:u,lowerOpen:c,upperOpen:d}=l;return h===void 0?u===void 0?null:e.upperBound(u,!!d):u===void 0?e.lowerBound(h,!!c):e.bound(h,u,!!c,!!d)}const{schema:s,hasGetAll:i}=function(l,h){const u=ms(l.objectStoreNames);return{schema:{name:l.name,tables:u.map(c=>h.objectStore(c)).map(c=>{const{keyPath:d,autoIncrement:f}=c,y=I(d),m=d==null,v={},p={name:c.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:m,compound:y,keyPath:d,autoIncrement:f,unique:!0,extractKey:Qn(d)},indexes:ms(c.indexNames).map(g=>c.index(g)).map(g=>{const{name:b,unique:E,multiEntry:x,keyPath:w}=g,_={name:b,compound:I(w),keyPath:w,unique:E,multiEntry:x,extractKey:Qn(w)};return v[gt(w)]=_,_}),getIndexByKeyPath:g=>v[gt(g)]};return v[":id"]=p.primaryKey,d!=null&&(v[gt(d)]=p.primaryKey),p})},hasGetAll:u.length>0&&"getAll"in h.objectStore(u[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}(t,n),o=s.tables.map(l=>function(h){const u=h.name;return{name:u,schema:h,mutate:function({trans:c,type:d,keys:f,values:y,range:m}){return new Promise((v,p)=>{v=N(v);const g=c.objectStore(u),b=g.keyPath==null,E=d==="put"||d==="add";if(!E&&d!=="delete"&&d!=="deleteRange")throw new Error("Invalid operation type: "+d);const{length:x}=f||y||{length:1};if(f&&y&&f.length!==y.length)throw new Error("Given keys array must have same length as given values array.");if(x===0)return v({numFailures:0,failures:{},results:[],lastResult:void 0});let w;const _=[],k=[];let $=0;const O=H=>{++$,$t(H)};if(d==="deleteRange"){if(m.type===4)return v({numFailures:$,failures:k,results:[],lastResult:void 0});m.type===3?_.push(w=g.clear()):_.push(w=g.delete(r(m)))}else{const[H,K]=E?b?[y,f]:[y,null]:[f,null];if(E)for(let z=0;z<x;++z)_.push(w=K&&K[z]!==void 0?g[d](H[z],K[z]):g[d](H[z])),w.onerror=O;else for(let z=0;z<x;++z)_.push(w=g[d](H[z])),w.onerror=O}const D=H=>{const K=H.target.result;_.forEach((z,De)=>z.error!=null&&(k[De]=z.error)),v({numFailures:$,failures:k,results:d==="delete"?f:_.map(z=>z.result),lastResult:K})};w.onerror=H=>{O(H),D(H)},w.onsuccess=D})},getMany:({trans:c,keys:d})=>new Promise((f,y)=>{f=N(f);const m=c.objectStore(u),v=d.length,p=new Array(v);let g,b=0,E=0;const x=_=>{const k=_.target;p[k._pos]=k.result,++E===b&&f(p)},w=te(y);for(let _=0;_<v;++_)d[_]!=null&&(g=m.get(d[_]),g._pos=_,g.onsuccess=x,g.onerror=w,++b);b===0&&f(p)}),get:({trans:c,key:d})=>new Promise((f,y)=>{f=N(f);const m=c.objectStore(u).get(d);m.onsuccess=v=>f(v.target.result),m.onerror=te(y)}),query:function(c){return d=>new Promise((f,y)=>{f=N(f);const{trans:m,values:v,limit:p,query:g}=d,b=p===1/0?void 0:p,{index:E,range:x}=g,w=m.objectStore(u),_=E.isPrimaryKey?w:w.index(E.name),k=r(x);if(p===0)return f({result:[]});if(c){const $=v?_.getAll(k,b):_.getAllKeys(k,b);$.onsuccess=O=>f({result:O.target.result}),$.onerror=te(y)}else{let $=0;const O=v||!("openKeyCursor"in _)?_.openCursor(k):_.openKeyCursor(k),D=[];O.onsuccess=H=>{const K=O.result;return K?(D.push(v?K.value:K.primaryKey),++$===p?f({result:D}):void K.continue()):f({result:D})},O.onerror=te(y)}})}(i),openCursor:function({trans:c,values:d,query:f,reverse:y,unique:m}){return new Promise((v,p)=>{v=N(v);const{index:g,range:b}=f,E=c.objectStore(u),x=g.isPrimaryKey?E:E.index(g.name),w=y?m?"prevunique":"prev":m?"nextunique":"next",_=d||!("openKeyCursor"in x)?x.openCursor(r(b),w):x.openKeyCursor(r(b),w);_.onerror=te(p),_.onsuccess=N(k=>{const $=_.result;if(!$)return void v(null);$.___id=++Ta,$.done=!1;const O=$.continue.bind($);let D=$.continuePrimaryKey;D&&(D=D.bind($));const H=$.advance.bind($),K=()=>{throw new Error("Cursor not stopped")};$.trans=c,$.stop=$.continue=$.continuePrimaryKey=$.advance=()=>{throw new Error("Cursor not started")},$.fail=N(p),$.next=function(){let z=1;return this.start(()=>z--?this.continue():this.stop()).then(()=>this)},$.start=z=>{const De=new Promise((q,be)=>{q=N(q),_.onerror=te(be),$.fail=be,$.stop=nt=>{$.stop=$.continue=$.continuePrimaryKey=$.advance=K,q(nt)}}),ze=()=>{if(_.result)try{z()}catch(q){$.fail(q)}else $.done=!0,$.start=()=>{throw new Error("Cursor behind last entry")},$.stop()};return _.onsuccess=N(q=>{_.onsuccess=ze,ze()}),$.continue=O,$.continuePrimaryKey=D,$.advance=H,ze(),De},v($)},p)})},count({query:c,trans:d}){const{index:f,range:y}=c;return new Promise((m,v)=>{const p=d.objectStore(u),g=f.isPrimaryKey?p:p.index(f.name),b=r(y),E=b?g.count(b):g.count();E.onsuccess=N(x=>m(x.target.result)),E.onerror=te(v)})}}}(l)),a={};return o.forEach(l=>a[l.name]=l),{stack:"dbcore",transaction:t.transaction.bind(t),table(l){if(!a[l])throw new Error(`Table '${l}' not found`);return a[l]},MIN_KEY:-1/0,MAX_KEY:Et(e),schema:s}}function Zn({_novip:t},e){const n=e.db,r=function(s,i,{IDBKeyRange:o,indexedDB:a},l){return{dbcore:function(u,c){return c.reduce((d,{create:f})=>({...d,...f(d)}),u)}(Oa(i,o,l),s.dbcore)}}(t._middlewares,n,t._deps,e);t.core=r.dbcore,t.tables.forEach(s=>{const i=s.name;t.core.schema.tables.some(o=>o.name===i)&&(s.core=t.core.table(i),t[i]instanceof t.Table&&(t[i].core=s.core))})}function sn({_novip:t},e,n,r){n.forEach(s=>{const i=r[s];e.forEach(o=>{const a=vr(o,s);(!a||"value"in a&&a.value===void 0)&&(o===t.Transaction.prototype||o instanceof t.Transaction?ce(o,s,{get(){return this.table(s)},set(l){ti(this,s,{value:l,writable:!0,configurable:!0,enumerable:!0})}}):o[s]=new t.Table(s,i))})})}function er({_novip:t},e){e.forEach(n=>{for(let r in n)n[r]instanceof t.Table&&delete n[r]})}function Ra(t,e){return t._cfg.version-e._cfg.version}function Na(t,e,n,r){const s=t._dbSchema,i=t._createTransaction("readwrite",t._storeNames,s);i.create(n),i._completion.catch(r);const o=i._reject.bind(i),a=A.transless||A;ye(()=>{A.trans=i,A.transless=a,e===0?(j(s).forEach(l=>{En(n,l,s[l].primKey,s[l].indexes)}),Zn(t,n),S.follow(()=>t.on.populate.fire(i)).catch(o)):function({_novip:l},h,u,c){const d=[],f=l._versions;let y=l._dbSchema=nr(l,l.idbdb,c),m=!1;function v(){return d.length?S.resolve(d.shift()(u.idbtrans)).then(v):S.resolve()}return f.filter(p=>p._cfg.version>=h).forEach(p=>{d.push(()=>{const g=y,b=p._cfg.dbschema;rr(l,g,c),rr(l,b,c),y=l._dbSchema=b;const E=Ai(g,b);E.add.forEach(w=>{En(c,w[0],w[1].primKey,w[1].indexes)}),E.change.forEach(w=>{if(w.recreate)throw new C.Upgrade("Not yet support for changing primary key");{const _=c.objectStore(w.name);w.add.forEach(k=>tr(_,k)),w.change.forEach(k=>{_.deleteIndex(k.name),tr(_,k)}),w.del.forEach(k=>_.deleteIndex(k))}});const x=p._cfg.contentUpgrade;if(x&&p._cfg.version>h){Zn(l,c),u._memoizedTables={},m=!0;let w=ii(b);E.del.forEach(O=>{w[O]=g[O]}),er(l,[l.Transaction.prototype]),sn(l,[l.Transaction.prototype],j(w),w),u.schema=w;const _=wr(x);let k;_&&et();const $=S.follow(()=>{if(k=x(u),k&&_){var O=he.bind(null,null);k.then(O,O)}});return k&&typeof k.then=="function"?S.resolve(k):$.then(()=>k)}}),d.push(g=>{(!m||!xa)&&function(b,E){[].slice.call(E.db.objectStoreNames).forEach(x=>b[x]==null&&E.db.deleteObjectStore(x))}(p._cfg.dbschema,g),er(l,[l.Transaction.prototype]),sn(l,[l.Transaction.prototype],l._storeNames,l._dbSchema),u.schema=l._dbSchema})}),v().then(()=>{var p,g;g=c,j(p=y).forEach(b=>{g.db.objectStoreNames.contains(b)||En(g,b,p[b].primKey,p[b].indexes)})})}(t,e,i,n).catch(o)})}function Ai(t,e){const n={del:[],add:[],change:[]};let r;for(r in t)e[r]||n.del.push(r);for(r in e){const s=t[r],i=e[r];if(s){const o={name:r,def:i,recreate:!1,del:[],add:[],change:[]};if(""+(s.primKey.keyPath||"")!=""+(i.primKey.keyPath||"")||s.primKey.auto!==i.primKey.auto&&!hn)o.recreate=!0,n.change.push(o);else{const a=s.idxByName,l=i.idxByName;let h;for(h in a)l[h]||o.del.push(h);for(h in l){const u=a[h],c=l[h];u?u.src!==c.src&&o.change.push(c):o.add.push(c)}(o.del.length>0||o.add.length>0||o.change.length>0)&&n.change.push(o)}}else n.add.push([r,i])}return n}function En(t,e,n,r){const s=t.db.createObjectStore(e,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});return r.forEach(i=>tr(s,i)),s}function tr(t,e){t.createIndex(e.name,e.keyPath,{unique:e.unique,multiEntry:e.multi})}function nr(t,e,n){const r={};return Qt(e.objectStoreNames,0).forEach(s=>{const i=n.objectStore(s);let o=i.keyPath;const a=Xn($i(o),o||"",!1,!1,!!i.autoIncrement,o&&typeof o!="string",!0),l=[];for(let u=0;u<i.indexNames.length;++u){const c=i.index(i.indexNames[u]);o=c.keyPath;var h=Xn(c.name,o,!!c.unique,!!c.multiEntry,!1,o&&typeof o!="string",!1);l.push(h)}r[s]=Ei(s,a,l)}),r}function rr({_novip:t},e,n){const r=n.db.objectStoreNames;for(let s=0;s<r.length;++s){const i=r[s],o=n.objectStore(i);t._hasGetAll="getAll"in o;for(let a=0;a<o.indexNames.length;++a){const l=o.indexNames[a],h=o.index(l).keyPath,u=typeof h=="string"?h:"["+Qt(h).join("+")+"]";if(e[i]){const c=e[i].idxByName[u];c&&(c.name=l,delete e[i].idxByName[u],e[i].idxByName[l]=c)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&R.WorkerGlobalScope&&R instanceof R.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}class Da{_parseStoresSpec(e,n){j(e).forEach(r=>{if(e[r]!==null){var s=e[r].split(",").map((o,a)=>{const l=(o=o.trim()).replace(/([&*]|\+\+)/g,""),h=/^\[/.test(l)?l.match(/^\[(.*)\]$/)[1].split("+"):l;return Xn(l,h||null,/\&/.test(o),/\*/.test(o),/\+\+/.test(o),I(h),a===0)}),i=s.shift();if(i.multi)throw new C.Schema("Primary key cannot be multi-valued");s.forEach(o=>{if(o.auto)throw new C.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new C.Schema("Index must have a name and cannot be an empty string")}),n[r]=Ei(r,i,s)}})}stores(e){const n=this.db;this._cfg.storesSource=this._cfg.storesSource?F(this._cfg.storesSource,e):e;const r=n._versions,s={};let i={};return r.forEach(o=>{F(s,o._cfg.storesSource),i=o._cfg.dbschema={},o._parseStoresSpec(s,i)}),n._dbSchema=i,er(n,[n._allTables,n,n.Transaction.prototype]),sn(n,[n._allTables,n,n.Transaction.prototype,this._cfg.tables],j(i),i),n._storeNames=j(i),this}upgrade(e){return this._cfg.contentUpgrade=xr(this._cfg.contentUpgrade||T,e),this}}function Ar(t,e){let n=t._dbNamesDB;return n||(n=t._dbNamesDB=new Pe("__dbnames",{addons:[],indexedDB:t,IDBKeyRange:e}),n.version(1).stores({dbnames:"name"})),n.table("dbnames")}function Cr(t){return t&&typeof t.databases=="function"}function sr(t){return ye(function(){return A.letThrough=!0,t()})}function za(){var t;return!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){var n=function(){return indexedDB.databases().finally(e)};t=setInterval(n,100),n()}).finally(function(){return clearInterval(t)}):Promise.resolve()}function ja(t){const e=t._state,{indexedDB:n}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.then(()=>e.dbOpenError?M(e.dbOpenError):t);se&&(e.openCanceller._stackHolder=Ne()),e.isBeingOpened=!0,e.dbOpenError=null,e.openComplete=!1;const r=e.openCanceller;function s(){if(e.openCanceller!==r)throw new C.DatabaseClosed("db.open() was cancelled")}let i=e.dbReadyResolve,o=null,a=!1;return S.race([r,(typeof navigator>"u"?S.resolve():za()).then(()=>new S((l,h)=>{if(s(),!n)throw new C.MissingAPI;const u=t.name,c=e.autoSchema?n.open(u):n.open(u,Math.round(10*t.verno));if(!c)throw new C.MissingAPI;c.onerror=te(h),c.onblocked=N(t._fireOnBlocked),c.onupgradeneeded=N(d=>{if(o=c.transaction,e.autoSchema&&!t._options.allowEmptyDB){c.onerror=$t,o.abort(),c.result.close();const y=n.deleteDatabase(u);y.onsuccess=y.onerror=N(()=>{h(new C.NoSuchDatabase(`Database ${u} doesnt exist`))})}else{o.onerror=te(h);var f=d.oldVersion>Math.pow(2,62)?0:d.oldVersion;a=f<1,t._novip.idbdb=c.result,Na(t,f/10,o,h)}},h),c.onsuccess=N(()=>{o=null;const d=t._novip.idbdb=c.result,f=Qt(d.objectStoreNames);if(f.length>0)try{const m=d.transaction((y=f).length===1?y[0]:y,"readonly");e.autoSchema?function({_novip:v},p,g){v.verno=p.version/10;const b=v._dbSchema=nr(0,p,g);v._storeNames=Qt(p.objectStoreNames,0),sn(v,[v._allTables],j(b),b)}(t,d,m):(rr(t,t._dbSchema,m),function(v,p){const g=Ai(nr(0,v.idbdb,p),v._dbSchema);return!(g.add.length||g.change.some(b=>b.add.length||b.change.length))}(t,m)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),Zn(t,m)}catch{}var y;mt.push(t),d.onversionchange=N(m=>{e.vcFired=!0,t.on("versionchange").fire(m)}),d.onclose=N(m=>{t.on("close").fire(m)}),a&&function({indexedDB:m,IDBKeyRange:v},p){!Cr(m)&&p!=="__dbnames"&&Ar(m,v).put({name:p}).catch(T)}(t._deps,u),l()},h)}))]).then(()=>(s(),e.onReadyBeingFired=[],S.resolve(sr(()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let h=e.onReadyBeingFired.reduce(xr,T);return e.onReadyBeingFired=[],S.resolve(sr(()=>h(t.vip))).then(l)}}))).finally(()=>{e.onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}return r===e.openCanceller&&t._close(),M(l)}).finally(()=>{e.openComplete=!0,i()})}function ir(t){var e=i=>t.next(i),n=s(e),r=s(i=>t.throw(i));function s(i){return o=>{var a=i(o),l=a.value;return a.done?l:l&&typeof l.then=="function"?l.then(n,r):I(l)?Promise.all(l).then(n,r):n(l)}}return s(e)()}function Ma(t,e,n){var r=arguments.length;if(r<2)throw new C.InvalidArgument("Too few arguments");for(var s=new Array(r-1);--r;)s[r-1]=arguments[r];n=s.pop();var i=oi(s);return[t,i,n]}function Ci(t,e,n,r,s){return S.resolve().then(()=>{const i=A.transless||A,o=t._createTransaction(e,n,t._dbSchema,r),a={trans:o,transless:i};if(r)o.idbtrans=r.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(c){return c.name===_r.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>Ci(t,e,n,null,s))):M(c)}const l=wr(s);let h;l&&et();const u=S.follow(()=>{if(h=s.call(o,o),h)if(l){var c=he.bind(null,null);h.then(c,c)}else typeof h.next=="function"&&typeof h.throw=="function"&&(h=ir(h))},a);return(h&&typeof h.then=="function"?S.resolve(h).then(c=>o.active?c:M(new C.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):u.then(()=>h)).then(c=>(r&&o._resolve(),o._completion.then(()=>c))).catch(c=>(o._reject(c),M(c)))})}function Bt(t,e,n){const r=I(t)?t.slice():[t];for(let s=0;s<n;++s)r.push(e);return r}const Ba={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(t){return{...t,table(e){const n=t.table(e),{schema:r}=n,s={},i=[];function o(u,c,d){const f=gt(u),y=s[f]=s[f]||[],m=u==null?0:typeof u=="string"?1:u.length,v=c>0,p={...d,isVirtual:v,keyTail:c,keyLength:m,extractKey:Qn(u),unique:!v&&d.unique};return y.push(p),p.isPrimaryKey||i.push(p),m>1&&o(m===2?u[0]:u.slice(0,m-1),c+1,d),y.sort((g,b)=>g.keyTail-b.keyTail),p}const a=o(r.primaryKey.keyPath,0,r.primaryKey);s[":id"]=[a];for(const u of r.indexes)o(u.keyPath,0,u);function l(u){const c=u.query.index;return c.isVirtual?{...u,query:{index:c,range:(d=u.query.range,f=c.keyTail,{type:d.type===1?2:d.type,lower:Bt(d.lower,d.lowerOpen?t.MAX_KEY:t.MIN_KEY,f),lowerOpen:!0,upper:Bt(d.upper,d.upperOpen?t.MIN_KEY:t.MAX_KEY,f),upperOpen:!0})}}:u;var d,f}return{...n,schema:{...r,primaryKey:a,indexes:i,getIndexByKeyPath:function(u){const c=s[gt(u)];return c&&c[0]}},count:u=>n.count(l(u)),query:u=>n.query(l(u)),openCursor(u){const{keyTail:c,isVirtual:d,keyLength:f}=u.query.index;return d?n.openCursor(l(u)).then(y=>y&&function(m){return Object.create(m,{continue:{value:function(p){p!=null?m.continue(Bt(p,u.reverse?t.MAX_KEY:t.MIN_KEY,c)):u.unique?m.continue(m.key.slice(0,f).concat(u.reverse?t.MIN_KEY:t.MAX_KEY,c)):m.continue()}},continuePrimaryKey:{value(p,g){m.continuePrimaryKey(Bt(p,t.MAX_KEY,c),g)}},primaryKey:{get:()=>m.primaryKey},key:{get(){const p=m.key;return f===1?p[0]:p.slice(0,f)}},value:{get:()=>m.value}})}(y)):n.openCursor(u)}}}}}};function kr(t,e,n,r){return n=n||{},r=r||"",j(t).forEach(s=>{if(Y(e,s)){var i=t[s],o=e[s];if(typeof i=="object"&&typeof o=="object"&&i&&o){const a=Kn(i);a!==Kn(o)?n[r+s]=e[s]:a==="Object"?kr(i,o,n,r+s+"."):i!==o&&(n[r+s]=e[s])}else i!==o&&(n[r+s]=e[s])}else n[r+s]=void 0}),j(e).forEach(s=>{Y(t,s)||(n[r+s]=e[s])}),n}const Ka={stack:"dbcore",name:"HooksMiddleware",level:2,create:t=>({...t,table(e){const n=t.table(e),{primaryKey:r}=n.schema;return{...n,mutate(i){const o=A.trans,{deleting:a,creating:l,updating:h}=o.table(e).hook;switch(i.type){case"add":if(l.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"put":if(l.fire===T&&h.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"delete":if(a.fire===T)break;return o._promise("readwrite",()=>u(i),!0);case"deleteRange":if(a.fire===T)break;return o._promise("readwrite",()=>function(d){return c(d.trans,d.range,1e4)}(i),!0)}return n.mutate(i);function u(d){const f=A.trans,y=d.keys||function(m,v){return v.type==="delete"?v.keys:v.keys||v.values.map(m.extractKey)}(r,d);if(!y)throw new Error("Keys missing");return(d=d.type==="add"||d.type==="put"?{...d,keys:y}:{...d}).type!=="delete"&&(d.values=[...d.values]),d.keys&&(d.keys=[...d.keys]),function(m,v,p){return v.type==="add"?Promise.resolve([]):m.getMany({trans:v.trans,keys:p,cache:"immutable"})}(n,d,y).then(m=>{const v=y.map((p,g)=>{const b=m[g],E={onerror:null,onsuccess:null};if(d.type==="delete")a.fire.call(E,p,b,f);else if(d.type==="add"||b===void 0){const x=l.fire.call(E,p,d.values[g],f);p==null&&x!=null&&(p=x,d.keys[g]=p,r.outbound||ee(d.values[g],r.keyPath,p))}else{const x=kr(b,d.values[g]),w=h.fire.call(E,x,p,b,f);if(w){const _=d.values[g];Object.keys(w).forEach(k=>{Y(_,k)?_[k]=w[k]:ee(_,k,w[k])})}}return E});return n.mutate(d).then(({failures:p,results:g,numFailures:b,lastResult:E})=>{for(let x=0;x<y.length;++x){const w=g?g[x]:y[x],_=v[x];w==null?_.onerror&&_.onerror(p[x]):_.onsuccess&&_.onsuccess(d.type==="put"&&m[x]?d.values[x]:w)}return{failures:p,results:g,numFailures:b,lastResult:E}}).catch(p=>(v.forEach(g=>g.onerror&&g.onerror(p)),Promise.reject(p)))})}function c(d,f,y){return n.query({trans:d,values:!1,query:{index:r,range:f},limit:y}).then(({result:m})=>u({type:"delete",keys:m,trans:d}).then(v=>v.numFailures>0?Promise.reject(v.failures[0]):m.length<y?{failures:[],numFailures:0,lastResult:void 0}:c(d,{...f,lower:m[m.length-1],lowerOpen:!0},y)))}}}}})};function ki(t,e,n){try{if(!e||e.keys.length<t.length)return null;const r=[];for(let s=0,i=0;s<e.keys.length&&i<t.length;++s)U(e.keys[s],t[i])===0&&(r.push(n?Ct(e.values[s]):e.values[s]),++i);return r.length===t.length?r:null}catch{return null}}const La={stack:"dbcore",level:-1,create:t=>({table:e=>{const n=t.table(e);return{...n,getMany:r=>{if(!r.cache)return n.getMany(r);const s=ki(r.keys,r.trans._cache,r.cache==="clone");return s?S.resolve(s):n.getMany(r).then(i=>(r.trans._cache={keys:r.keys,values:r.cache==="clone"?Ct(i):i},i))},mutate:r=>(r.type!=="add"&&(r.trans._cache=null),n.mutate(r))}}})};function Pr(t){return!("from"in t)}const oe=function(t,e){if(!this){const n=new oe;return t&&"d"in t&&F(n,t),n}F(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0})};function At(t,e,n){const r=U(e,n);if(isNaN(r))return;if(r>0)throw RangeError();if(Pr(t))return F(t,{from:e,to:n,d:1});const s=t.l,i=t.r;if(U(n,t.from)<0)return s?At(s,e,n):t.l={from:e,to:n,d:1,l:null,r:null},ps(t);if(U(e,t.to)>0)return i?At(i,e,n):t.r={from:e,to:n,d:1,l:null,r:null},ps(t);U(e,t.from)<0&&(t.from=e,t.l=null,t.d=i?i.d+1:1),U(n,t.to)>0&&(t.to=n,t.r=null,t.d=t.l?t.l.d+1:1);const o=!t.r;s&&!t.l&&on(t,s),i&&o&&on(t,i)}function on(t,e){Pr(e)||function n(r,{from:s,to:i,l:o,r:a}){At(r,s,i),o&&n(r,o),a&&n(r,a)}(t,e)}function Ia(t,e){const n=or(e);let r=n.next();if(r.done)return!1;let s=r.value;const i=or(t);let o=i.next(s.from),a=o.value;for(;!r.done&&!o.done;){if(U(a.from,s.to)<=0&&U(a.to,s.from)>=0)return!0;U(s.from,a.from)<0?s=(r=n.next(a.from)).value:a=(o=i.next(s.from)).value}return!1}function or(t){let e=Pr(t)?null:{s:0,n:t};return{next(n){const r=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,r)for(;e.n.l&&U(n,e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!r||U(n,e.n.to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}return{done:!0}}}}function ps(t){var e,n;const r=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((n=t.l)===null||n===void 0?void 0:n.d)||0),s=r>1?"r":r<-1?"l":"";if(s){const i=s==="r"?"l":"r",o={...t},a=t[s];t.from=a.from,t.to=a.to,t[s]=a[s],o[s]=a[i],t[i]=o,o.d=gs(o)}t.d=gs(t)}function gs({r:t,l:e}){return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}Ze(oe.prototype,{add(t){return on(this,t),this},addKey(t){return At(this,t,t),this},addKeys(t){return t.forEach(e=>At(this,e,e)),this},[Ln](){return or(this)}});const Ha={stack:"dbcore",level:0,create:t=>{const e=t.schema.name,n=new oe(t.MIN_KEY,t.MAX_KEY);return{...t,table:r=>{const s=t.table(r),{schema:i}=s,{primaryKey:o}=i,{extractKey:a,outbound:l}=o,h={...s,mutate:d=>{const f=d.trans,y=f.mutatedParts||(f.mutatedParts={}),m=w=>{const _=`idb://${e}/${r}/${w}`;return y[_]||(y[_]=new oe)},v=m(""),p=m(":dels"),{type:g}=d;let[b,E]=d.type==="deleteRange"?[d.range]:d.type==="delete"?[d.keys]:d.values.length<50?[[],d.values]:[];const x=d.trans._cache;return s.mutate(d).then(w=>{if(I(b)){g!=="delete"&&(b=w.results),v.addKeys(b);const _=ki(b,x);_||g==="add"||p.addKeys(b),(_||E)&&function(k,$,O,D){function H(K){const z=k(K.name||"");function De(q){return q!=null?K.extractKey(q):null}const ze=q=>K.multiEntry&&I(q)?q.forEach(be=>z.addKey(be)):z.addKey(q);(O||D).forEach((q,be)=>{const nt=O&&De(O[be]),fn=D&&De(D[be]);U(nt,fn)!==0&&(nt!=null&&ze(nt),fn!=null&&ze(fn))})}$.indexes.forEach(H)}(m,i,_,E)}else if(b){const _={from:b.lower,to:b.upper};p.add(_),v.add(_)}else v.add(n),p.add(n),i.indexes.forEach(_=>m(_.name).add(n));return w})}},u=({query:{index:d,range:f}})=>{var y,m;return[d,new oe((y=f.lower)!==null&&y!==void 0?y:t.MIN_KEY,(m=f.upper)!==null&&m!==void 0?m:t.MAX_KEY)]},c={get:d=>[o,new oe(d.key)],getMany:d=>[o,new oe().addKeys(d.keys)],count:u,query:u,openCursor:u};return j(c).forEach(d=>{h[d]=function(f){const{subscr:y}=A;if(y){const m=E=>{const x=`idb://${e}/${r}/${E}`;return y[x]||(y[x]=new oe)},v=m(""),p=m(":dels"),[g,b]=c[d](f);if(m(g.name||"").add(b),!g.isPrimaryKey){if(d!=="count"){const E=d==="query"&&l&&f.values&&s.query({...f,values:!1});return s[d].apply(this,arguments).then(x=>{if(d==="query"){if(l&&f.values)return E.then(({result:_})=>(v.addKeys(_),x));const w=f.values?x.result.map(a):x.result;f.values?v.addKeys(w):p.addKeys(w)}else if(d==="openCursor"){const w=x,_=f.values;return w&&Object.create(w,{key:{get:()=>(p.addKey(w.primaryKey),w.key)},primaryKey:{get(){const k=w.primaryKey;return p.addKey(k),k}},value:{get:()=>(_&&v.addKey(w.primaryKey),w.value)}})}return x})}p.add(n)}}return s[d].apply(this,arguments)}}),h}}}};class Pe{constructor(e,n){this._middlewares={},this.verno=0;const r=Pe.dependencies;this._options=n={addons:Pe.addons,autoOpen:!0,indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange,...n},this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange};const{addons:s}=n;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;const i={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:T,dbReadyPromise:null,cancelOpen:T,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};var o;i.dbReadyPromise=new S(a=>{i.dbReadyResolve=a}),i.openCanceller=new S((a,l)=>{i.cancelOpen=l}),this._state=i,this.name=e,this.on=pt(this,"populate","blocked","versionchange","close",{ready:[xr,T]}),this.on.ready.subscribe=ni(this.on.ready.subscribe,a=>(l,h)=>{Pe.vip(()=>{const u=this._state;if(u.openComplete)u.dbOpenError||S.resolve().then(l),h&&a(l);else if(u.onReadyBeingFired)u.onReadyBeingFired.push(l),h&&a(l);else{a(l);const c=this;h||a(function d(){c.on.ready.unsubscribe(l),c.on.ready.unsubscribe(d)})}})}),this.Collection=(o=this,st(Ea.prototype,function(a,l){this.db=o;let h=_i,u=null;if(l)try{h=l()}catch(y){u=y}const c=a._ctx,d=c.table,f=d.hook.reading.fire;this._ctx={table:d,index:c.index,isPrimKey:!c.index||d.schema.primKey.keyPath&&c.index===d.schema.primKey.name,range:h,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:u,or:c.or,valueMapper:f!==xt?f:null}})),this.Table=function(a){return st($a.prototype,function(l,h,u){this.db=a,this._tx=u,this.name=l,this.schema=h,this.hook=a._allTables[l]?a._allTables[l].hook:pt(null,{creating:[da,T],reading:[ha,xt],updating:[ma,T],deleting:[fa,T]})})}(this),this.Transaction=function(a){return st(Pa.prototype,function(l,h,u,c,d){this.db=a,this.mode=l,this.storeNames=h,this.schema=u,this.chromeTransactionDurability=c,this.idbtrans=null,this.on=pt(this,"complete","error","abort"),this.parent=d||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new S((f,y)=>{this._resolve=f,this._reject=y}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},f=>{var y=this.active;return this.active=!1,this.on.error.fire(f),this.parent?this.parent._reject(f):y&&this.idbtrans&&this.idbtrans.abort(),M(f)})})}(this),this.Version=function(a){return st(Da.prototype,function(l){this.db=a,this._cfg={version:l,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}(this),this.WhereClause=function(a){return st(Si.prototype,function(l,h,u){this.db=a,this._ctx={table:l,index:h===":id"?null:h,or:u};const c=a._deps.indexedDB;if(!c)throw new C.MissingAPI;this._cmp=this._ascending=c.cmp.bind(c),this._descending=(d,f)=>c.cmp(f,d),this._max=(d,f)=>c.cmp(d,f)>0?d:f,this._min=(d,f)=>c.cmp(d,f)<0?d:f,this._IDBKeyRange=a._deps.IDBKeyRange})}(this),this.on("versionchange",a=>{a.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",a=>{!a.newVersion||a.newVersion<a.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${a.oldVersion/10}`)}),this._maxKey=Et(n.IDBKeyRange),this._createTransaction=(a,l,h,u)=>new this.Transaction(a,l,h,this._options.chromeTransactionDurability,u),this._fireOnBlocked=a=>{this.on("blocked").fire(a),mt.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(a))},this.use(Ba),this.use(Ka),this.use(Ha),this.use(La),this.vip=Object.create(this,{_vip:{value:!0}}),s.forEach(a=>a(this))}version(e){if(isNaN(e)||e<.1)throw new C.Type("Given version is not a positive number");if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new C.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,e);const n=this._versions;var r=n.filter(s=>s._cfg.version===e)[0];return r||(r=new this.Version(e),n.push(r),n.sort(Ra),r.stores({}),this._state.autoSchema=!1,r)}_whenReady(e){return this.idbdb&&(this._state.openComplete||A.letThrough||this._vip)?e():new S((n,r)=>{if(this._state.openComplete)return r(new C.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen)return void r(new C.DatabaseClosed);this.open().catch(T)}this._state.dbReadyPromise.then(n,r)}).then(e)}use({stack:e,create:n,level:r,name:s}){s&&this.unuse({stack:e,name:s});const i=this._middlewares[e]||(this._middlewares[e]=[]);return i.push({stack:e,create:n,level:r??10,name:s}),i.sort((o,a)=>o.level-a.level),this}unuse({stack:e,name:n,create:r}){return e&&this._middlewares[e]&&(this._middlewares[e]=this._middlewares[e].filter(s=>r?s.create!==r:!!n&&s.name!==n)),this}open(){return ja(this)}_close(){const e=this._state,n=mt.indexOf(this);if(n>=0&&mt.splice(n,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}e.dbReadyPromise=new S(r=>{e.dbReadyResolve=r}),e.openCanceller=new S((r,s)=>{e.cancelOpen=s})}close(){this._close();const e=this._state;this._options.autoOpen=!1,e.dbOpenError=new C.DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){const e=arguments.length>0,n=this._state;return new S((r,s)=>{const i=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);o.onsuccess=N(()=>{(function({indexedDB:a,IDBKeyRange:l},h){!Cr(a)&&h!=="__dbnames"&&Ar(a,l).delete(h).catch(T)})(this._deps,this.name),r()}),o.onerror=te(s),o.onblocked=this._fireOnBlocked};if(e)throw new C.InvalidArgument("Arguments not allowed in db.delete()");n.isBeingOpened?n.dbReadyPromise.then(i):i()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){const e=this._state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return j(this._allTables).map(e=>this._allTables[e])}transaction(){const e=Ma.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,n,r){let s=A.trans;s&&s.db===this&&e.indexOf("!")===-1||(s=null);const i=e.indexOf("?")!==-1;let o,a;e=e.replace("!","").replace("?","");try{if(a=n.map(h=>{var u=h instanceof this.Table?h.name:h;if(typeof u!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return u}),e=="r"||e==="readonly")o="readonly";else{if(e!="rw"&&e!="readwrite")throw new C.InvalidArgument("Invalid transaction mode: "+e);o="readwrite"}if(s){if(s.mode==="readonly"&&o==="readwrite"){if(!i)throw new C.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");s=null}s&&a.forEach(h=>{if(s&&s.storeNames.indexOf(h)===-1){if(!i)throw new C.SubTransaction("Table "+h+" not included in parent transaction.");s=null}}),i&&s&&!s.active&&(s=null)}}catch(h){return s?s._promise(null,(u,c)=>{c(h)}):M(h)}const l=Ci.bind(null,this,o,a,s,r);return s?s._promise(o,l,"lock"):A.trans?tt(A.transless,()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!Y(this._allTables,e))throw new C.InvalidTable(`Table ${e} does not exist`);return this._allTables[e]}}const Ua=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable";class Fa{constructor(e){this._subscribe=e}subscribe(e,n,r){return this._subscribe(e&&typeof e!="function"?e:{next:e,error:n,complete:r})}[Ua](){return this}}function Pi(t,e){return j(e).forEach(n=>{on(t[n]||(t[n]=new oe),e[n])}),t}function qa(t){return new Fa(e=>{const n=wr(t);let r=!1,s={},i={};const o={get closed(){return r},unsubscribe:()=>{r=!0,we.storagemutated.unsubscribe(u)}};e.start&&e.start(o);let a=!1,l=!1;function h(){return j(i).some(d=>s[d]&&Ia(s[d],i[d]))}const u=d=>{Pi(s,d),h()&&c()},c=()=>{if(a||r)return;s={};const d={},f=function(y){n&&et();const m=()=>ye(t,{subscr:y,trans:null}),v=A.trans?tt(A.transless,m):m();return n&&v.then(he,he),v}(d);l||(we("storagemutated",u),l=!0),a=!0,Promise.resolve(f).then(y=>{a=!1,r||(h()?c():(s={},i=d,e.next&&e.next(y)))},y=>{a=!1,e.error&&e.error(y),o.unsubscribe()})};return c(),o})}let ar;try{ar={indexedDB:R.indexedDB||R.mozIndexedDB||R.webkitIndexedDB||R.msIndexedDB,IDBKeyRange:R.IDBKeyRange||R.webkitIDBKeyRange}}catch{ar={indexedDB:null,IDBKeyRange:null}}const xe=Pe;function Wt(t){let e=le;try{le=!0,we.storagemutated.fire(t)}finally{le=e}}Ze(xe,{...It,delete:t=>new xe(t,{addons:[]}).delete(),exists:t=>new xe(t,{addons:[]}).open().then(e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1),getDatabaseNames(t){try{return function({indexedDB:e,IDBKeyRange:n}){return Cr(e)?Promise.resolve(e.databases()).then(r=>r.map(s=>s.name).filter(s=>s!=="__dbnames")):Ar(e,n).toCollection().primaryKeys()}(xe.dependencies).then(t)}catch{return M(new C.MissingAPI)}},defineClass:()=>function(t){F(this,t)},ignoreTransaction:t=>A.trans?tt(A.transless,t):t(),vip:sr,async:function(t){return function(){try{var e=ir(t.apply(this,arguments));return e&&typeof e.then=="function"?e:S.resolve(e)}catch(n){return M(n)}}},spawn:function(t,e,n){try{var r=ir(t.apply(n,e||[]));return r&&typeof r.then=="function"?r:S.resolve(r)}catch(s){return M(s)}},currentTransaction:{get:()=>A.trans||null},waitFor:function(t,e){const n=S.resolve(typeof t=="function"?xe.ignoreTransaction(t):t).timeout(e||6e4);return A.trans?A.trans.waitFor(n):n},Promise:S,debug:{get:()=>se,set:t=>{li(t,t==="dexie"?()=>!0:bi)}},derive:Ve,extend:F,props:Ze,override:ni,Events:pt,on:we,liveQuery:qa,extendObservabilitySet:Pi,getByKeyPath:ue,setByKeyPath:ee,delByKeyPath:function(t,e){typeof e=="string"?ee(t,e,void 0):"length"in e&&[].map.call(e,function(n){ee(t,n,void 0)})},shallowClone:ii,deepClone:Ct,getObjectDiff:kr,cmp:U,asap:ri,minKey:-(1/0),addons:[],connections:mt,errnames:_r,dependencies:ar,semVer:"3.2.3",version:"3.2.3".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t+e/Math.pow(10,2*n))}),xe.maxKey=Et(xe.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(we("storagemutated",t=>{if(!le){let e;hn?(e=document.createEvent("CustomEvent"),e.initCustomEvent("x-storagemutated-1",!0,!0,t)):e=new CustomEvent("x-storagemutated-1",{detail:t}),le=!0,dispatchEvent(e),le=!1}}),addEventListener("x-storagemutated-1",({detail:t})=>{le||Wt(t)}));let le=!1;if(typeof BroadcastChannel<"u"){const t=new BroadcastChannel("x-storagemutated-1");typeof t.unref=="function"&&t.unref(),we("storagemutated",e=>{le||t.postMessage(e)}),t.onmessage=e=>{e.data&&Wt(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){we("storagemutated",e=>{try{le||(typeof localStorage<"u"&&localStorage.setItem("x-storagemutated-1",JSON.stringify({trig:Math.random(),changedParts:e})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(n=>n.postMessage({type:"x-storagemutated-1",changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.key==="x-storagemutated-1"){const n=JSON.parse(e.newValue);n&&Wt(n.changedParts)}});const t=self.document&&navigator.serviceWorker;t&&t.addEventListener("message",function({data:e}){e&&e.type==="x-storagemutated-1"&&Wt(e.changedParts)})}S.rejectionMapper=function(t,e){if(!t||t instanceof We||t instanceof TypeError||t instanceof SyntaxError||!t.name||!as[t.name])return t;var n=new as[t.name](e||t.message,t);return"stack"in t&&ce(n,"stack",{get:function(){return this.inner.stack}}),n},li(se,bi);class Tt extends Error{constructor(e){super(e),this.name="SpaRouterError"}}class ys extends Tt{constructor(e){super(e),this.name="WindowEventConsolidationError"}}const dn="locationchange";let vs=!1;const Va=window.history.pushState;function ws(...t){const e=Va.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}const Wa=window.history.replaceState;function bs(...t){const e=Wa.apply(window.history,t);return window.dispatchEvent(new Event(dn)),e}function Ga(){if(!vs){if(window.history.pushState===ws)throw new ys("The consolidation module thinks that window events have not been consolidated yet but window.history.pushState has already been overridden. Does this module have two copies in your repo?");if(window.history.replaceState===bs)throw new ys("The consolidation module thinks that window events have not been consolidated yet but window.history.replaceState has already been overridden. Does this module have two copies in your repo?");vs=!0,window.history.pushState=ws,window.history.replaceState=bs,window.addEventListener("popstate",()=>{window.dispatchEvent(new Event(dn))})}}function Ja(t){return Array.from(t.entries()).reduce((e,n)=>(e[n[0]]=n[1],e),{})}function Ya(t){const e=Object.entries(t).reduce((n,r)=>{const s=`${r[0]}=${r[1]}`;return`${n}&${s}`},"");return new URLSearchParams(e)}function Xa(t){const n=(t?window.location.pathname.replace(t,""):window.location.pathname).split("/").filter(o=>!!o),s=window.location.search?Ja(new URLSearchParams(window.location.search)):void 0,i=window.location.hash||void 0;return{paths:n,search:s,hash:i}}class Qa extends Tt{constructor(e){super(e),this.name="SanitizationDepthMaxed"}}function Ti(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const n=Object.entries(t.search).join(" "),r=Object.entries(e.search).join(" ");if(n!==r)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const _s=6;function xs(t,e){const n=t.getCurrentRawRoutes();if(t.sanitizationDepth>_s)throw new Qa(`Route sanitization depth has exceed the max of ${_s} with ${JSON.stringify(n)}`);const r=t.sanitizeFullRoute(n);if(Ti(r,n))t.sanitizationDepth=0,e?e(r):t.listeners.forEach(s=>{s(r)});else return t.sanitizationDepth++,t.setRoutes(r,!0)}class An extends Tt{constructor(e){super(e),this.name="InvalidRouterInitParamsError"}}function Za(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new An(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new An(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new An(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function el(t,e,n,r=!1){const s=Oi(t,e,n);r?window.history.replaceState(void 0,"",s):window.history.pushState(void 0,"",s)}function Oi(t,e,n=""){var r;if(!n&&e!=null)throw new Tt("Route base regexp was defined but routeBase string was not provided.");const s=tl(e)?`/${n}`:"",i=t.search?Ya(t.search).toString():"",o=i?`?${i}`:"",a=!((r=t.hash)===null||r===void 0)&&r.startsWith("#")?"":"#",l=t.hash?`${a}${t.hash}`:"";return`${s}/${t.paths.join("/")}${o}${l}`}function tl(t){return!!(t&&window.location.pathname.match(t))}function nl(t={}){var e;Za(t),Ga();const n=(e=t.routeBase)===null||e===void 0?void 0:e.replace(/\/+$/,""),r=n?new RegExp(`^\\/${t.routeBase}`):void 0;let s=!1;const i={listeners:new Set,initParams:t,sanitizeFullRoute:o=>{const a={hash:void 0,search:void 0,...o};return t.routeSanitizer?t.routeSanitizer(a):a},setRoutes:(o,a=!1,l=!1)=>{const h=i.getCurrentRawRoutes(),u={...h,...o},c=i.sanitizeFullRoute(u);if(!(!l&&Ti(h,c)))return el(c,r,n,a)},createRoutesUrl:o=>Oi(o,r,n),getCurrentRawRoutes:()=>Xa(r),addRouteListener:(o,a)=>{if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Tt(`Tried to exceed route listener max of ${t.maxListenerCount}.`);return i.listeners.add(a),s||(window.addEventListener(dn,()=>xs(i)),s=!0),o&&xs(i,a),a},hasRouteListener:o=>i.listeners.has(o),removeRouteListener:o=>i.listeners.delete(o),sanitizationDepth:0};return i}const Ri=nl({routeBase:"resizable-image-element"}),rl=["https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/765dfc51-51bc-11eb-80d1-005056bbdc38/porsche-model.png"],sl="resizable-image-element-storage";class il extends Pe{constructor(){super(sl),this.version(1).stores({storedUrls:"&index"})}}const Cn=new il,Ss={async set(t){const e=an(t).map((n,r)=>({index:r,url:n}));await Cn.storedUrls.clear(),await Cn.storedUrls.bulkPut(e)},async get(){const e=(await Cn.storedUrls.toArray()).map(r=>r.url),n=an(e);return ol(n.length?n:rl)}};function ol(t){var e,n;try{const r=an(((n=(e=Ri.getCurrentRawRoutes().search)==null?void 0:e.imageUrls)==null?void 0:n.split(","))??[]);return Array.isArray(r)&&r.length?r:t}catch{return t}}function an(t){return t.map(e=>e.replace(/^"/,"").replace(/"$/,"").trim()).filter(zi)}const{defineElement:al,defineElementNoInputs:ll}=Oo(),Kt=al()({tagName:"vir-url-input",events:{urlsChange:zn()},styles:He`
        :host {
            display: block;
        }

        textarea {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            max-height: 100%;
            height: 150px;
            font: inherit;
            outline: none;
            border: 2px solid #ccc;
            border-radius: 4px;

            white-space: pre;
            overflow-wrap: normal;
            overflow-x: scroll;
            padding: 8px;
        }

        textarea:focus {
            border-color: blue;
        }
    `,renderCallback:({inputs:t,dispatch:e,events:n,host:r})=>{const s=r.shadowRoot.querySelector("textarea"),i=t.urls.join(`
`),o=i+`
`;return s&&(s==null?void 0:s.value)!==i&&(s.value=i),W`
            <textarea
                ${ut("input",a=>{const h=a.currentTarget.value.split(`
`).map(u=>u.trim().replace(/,+$/,""));e(new n.urlsChange(h))})}
                ${ut("blur",()=>{s&&(s.value=o)})}
                .value=${s&&s.matches(":focus")?i:o}
            ></textarea>
        `}}),it={max:{width:300,height:600},min:{width:300,height:150}};ll({tagName:"vir-example-app",stateInit:{showConstraints:!0,imageUrls:Ms(Ss.get()),constraints:void 0,router:Ri,urlUpdateDebounce:{promise:void 0,lastSearch:void 0}},hostClasses:{showConstraints:({state:t})=>t.showConstraints},styles:({hostClassSelectors:t})=>He`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
        }

        .all-image-containers {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .images-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .images-container > * {
            flex-shrink: 0;
        }

        label {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            font: inherit;
            font-size: 1.4em;
            gap: 4px;
        }

        .inline-label {
            flex-direction: row;
            align-items: center;
        }

        p {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .constraint-controls {
            display: flex;
            gap: 8px;
        }

        input {
            font: inherit;
        }

        .constraint-wrapper {
            border: 2px solid transparent;
            flex-shrink: 0;
            position: relative;
        }

        ${t.showConstraints} .constraint-wrapper.max {
            border-color: red;
        }

        ${t.showConstraints} .constraint-wrapper.min {
            border-color: lime;
        }

        ${t.showConstraints} ${ht} {
            border-color: blue;
        }

        ${ht} {
            border: 1px solid transparent;
            background-color: rgb(241, 241, 241);
            border-radius: 8px;
            flex-shrink: 0;
        }

        .constraint-wrapper.max {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .constraint-wrapper.min {
            pointer-events: none;
        }

        .constraint-wrapper .min-wrapper {
            position: absolute;
            pointer-events: none;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .constraint-wrapper a {
            cursor: pointer;
        }
    `,renderCallback:({state:t,updateState:e})=>{if(!t.constraints){const o=t.router.getCurrentRawRoutes().search;e({constraints:{min:{width:Number(o==null?void 0:o.minW)||it.min.width,height:Number(o==null?void 0:o.minH)||it.min.height},max:{width:Number(o==null?void 0:o.maxW)||it.max.width,height:Number(o==null?void 0:o.maxH)||it.max.height}}})}const n=t.constraints??it,r=Array.isArray(t.imageUrls)?t.imageUrls:[];function s(){return{...t.router.getCurrentRawRoutes().search,minW:String(n.min.width),minH:String(n.min.height),maxW:String(n.max.width),maxH:String(n.max.height),...r.length?{imageUrls:r.join(",")}:{}}}function i(o,a,l){e({constraints:{...n,[a]:{...n[a],[l]:Number(o.value)||0}}})}return!t.urlUpdateDebounce.promise&&(!t.urlUpdateDebounce.lastSearch||!ji(s(),t.urlUpdateDebounce.lastSearch))&&e({urlUpdateDebounce:{promise:ln(1e3).then(()=>{const o=s();try{t.router.setRoutes({search:o},!0)}catch(a){console.warn(a)}e({urlUpdateDebounce:{promise:void 0,lastSearch:o}})}),lastSearch:s()}}),W`
            <a href="https://github.com/electrovir/resizable-image-element">
                <h1>resizable-image-element</h1>
            </a>
            <p>Add more image URLs to the input below:</p>
            <${Kt}
                ${gr(Kt,{urls:r})}
                ${ut(Kt.events.urlsChange,o=>{const a=o.detail;Ss.set(a),e({imageUrls:{resolvedValue:o.detail}})})}
            ></${Kt}>
            <p>
                <label class="inline-label">
                    <input
                        type="checkbox"
                        ?checked=${t.showConstraints}
                        ${ut("input",o=>{const a=o.currentTarget;e({showConstraints:!!a.checked})})}
                    />
                    Outline constraint boxes
                </label>
            </p>
            <p>
                ${["min","max"].map(o=>{const a=["height","width"].map(l=>{const h=[Tr(o),Tr(l)].join(" "),u=n[o][l];return W`
                            <label>
                                ${h}
                                <br />
                                ${Z(u)}
                                <br />
                                <input
                                    type="range"
                                    max="1000"
                                    min="20"
                                    .value=${u}
                                    ${ut("input",c=>{i(c.currentTarget,o,l)})}
                                />
                            </label>
                        `});return W`
                        <div class="constraint-controls">${a}</div>
                    `})}
            </p>
            <div class="images-container">${cl(n,t.imageUrls)}</div>
        `}});function cl(t,e){return jn(e,"Loading...",n=>an(n).map(r=>{const s=`
                height: ${Z(t.max.height)};
                max-height: ${Z(t.max.height)};
                width: ${Z(t.max.width)};
                max-width: ${Z(t.max.width)}`,i=`height: ${Z(t.min.height)}; width: ${Z(t.min.width)}`;return W`
                <div class="constraint-wrapper max" style=${s}>
                    <a target="_blank" rel="noopener noreferrer" href=${r}>
                        <${ht}
                            ${gr(ht,{imageUrl:r,max:t.max,min:t.min})}
                        ></${ht}>
                    </a>
                    <div class="min-wrapper">
                        <div class="constraint-wrapper min" style=${i}></div>
                    </div>
                </div>
            `}))}