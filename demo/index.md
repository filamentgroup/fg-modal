---
---

  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/webcomponents-bundle.js" defer></script>
  <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2.10/custom-elements-es5-adapter.js" defer></script>
 
<script src="../src/wc-modal.js" defer></script>
<script src="./lib/inert.js" defer></script>
<link rel="stylesheet" href="../src/wc-modal.css">


# Demo

<a href="#testmodal" class="modal_link">Open Modal</a>

## About

This modal is built to be easy to use, dependency-free (aside from feature polyfills), and accessible. It can be opened and closed programatically or via links in a page, contains behavior to gracefully support keyboard use (including focus management, focus isolation, and closing via escape key), and is tested for optimal accessibility for assistive technology. It also supports chaining of modals, meaning that if you link to another modal from within a modal, the new modal will cause the prior modal to close when it opens. 



## Documentation

To make a modal, create a `fg-modal` element and give it a unique ID. This element and attribute combination will be recognized by this component's javascript, and allow it to be enhanced with necessary behaviors and accessibility information.

You can place any HTML content inside the element, but one part that's particularly helpful is a title that labels the modal accessibly, which can either be placed in an HTML element with a class of `modal_title` (seen below) or in an `aria-label` attribute on the `fg-modal` element itself. 


```html
<fg-modal id="testmodal">
  <h2 class="modal_title">Modal dialog number one</h2>
  <p>This is the modal content and it has a <a href="#">link</a> in it </p>
  <p>This is more modal content and it also has a <a href="#testmodal2" class="modal_link">open modal two</a> in it </p>
</fg-modal>
```

By default the modal dialog will be closed. You can create a link that opens the modal by starting with an anchor link that has a class of `modal_link` and an `href` that points to the modal's ID. When the modal is enhanced, it will change the role of the link to a `button` to match its in-page behavior. 

```html
<a href="#testmodal" class="modal_link">Open Modal</a>
```


<fg-modal id="testmodal">
  <h2 class="modal_title">Modal dialog number one</h2>
  <p>This is the modal content and it has a <a href="#">link</a> in it </p>
  <p>This is more modal content and it also has a <a href="#testmodal2" class="modal_link">open modal two</a> in it </p>
</fg-modal>


<fg-modal id="testmodal2" aria-label="Modal dialog number two">
  <p>This is more modal content and it has a custom close button in it. </p>
  <p>This is more modal content and it also has a <a href="#">link</a> in it </p>
  <button class="modal_close" aria-label="Close Modal Window"></button>
</fg-modal>

The modal web component generates a close button automatically with a class of `modal_close`. If you would like to create a custom close button for sake of styling or language purposes, include your own in the markup that uses that class and the modal will use that button instead:

```html
<fg-modal id="testmodal" aria-label="Settings dialog">
  <p>content...</p>
  <button class="modal_close" aria-label="Close Modal Window"></button>
</fg-modal>
```

## Including Scripts &amp; Styles

The modal has two dependencies, one for the Javascript and one for the CSS:

```html
<script type="module">
  import '../src/wc-modal.js';
</script>
<link rel="stylesheet" href="../src/wc-modal.css">
```


## Methods and Events

The modal has several methods you can call on it. You can find these methods on the element itself. 

- Open: Open the modal: `document.getElementById("testmodal").open();`
- Close: Close the modal: `document.getElementById("testmodal").close();`

When the modal opens and closes, 

## Polyfills

To use the modal in modern browsers, two polyfills are likely necessary (please check browser support to see how these align with your needs). 

- Inert: The standard `inert` attribute (support currently includes Chrome and Edge) is used for disabling the rest of the page when the modal is open, which is a required accessiblility feature. Browser support for `inert` is still improving so [WICG's Inert polyfill](https://github.com/WICG/inert) is listed as a dependency of this project and can be found in the [demo/inert.js](demo/inert.js) file. You can load it in a deferred or async manner as it is not used until the dialog is opened. Example: `<script src="./lib/inert.js" defer></script>`
- Custom Elements: The `fg-modal` element uses the standard HTML custom elements feature, which are well supported but need a polyfill in IE11 and older. This project references WebReflection's [Document Register Element](https://github.com/WebReflection/document-register-element) polyfill which can be found at [demo/lib/document-register-element.js](demo/lib/document-register-element.js). It should be loaded prior to the accessible modal script. In our demo page we use the following pattern to load it, but you could package it with <script>this.customElements||document.write('<script src=".demo/lib/document-register-element.js"><\x2fscript>');</script>
```

