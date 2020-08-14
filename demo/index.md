---
---

<script>this.customElements||document.write('<script src="./lib/document-register-element.js"><\x2fscript>');</script>
<script src="./lib/inert.js" defer></script>

<script type="module">
  import '../src/wc-modal.js';
</script>
<link rel="stylesheet" href="../src/wc-modal.css">


# Demo

<a href="#testmodal" class="modal_link">Open Modal</a>


## Documentation

To make a modal, create an `fg-modal` element and give it a unique ID. This element and attribute combination will be recognized by this component's javascript, and allow it to be enhanced with necessary behaviors and accessibility information.

You can place any HTML content inside the element, but one part that's particularly helpful is a title that labels the modal accessibly, which can either be placed in an HTML element with a class of `modal_title` (seen below) or in an `aria-label` attribute on the `fg-modal` element itself. 

You can link to the modal by starting with an anchor link that has a class of `modal_link` and an `href` that points to the modal's ID. Here's the code:


```html
<fg-modal id="testmodal">
  <h2 class="modal_title">Dialog number one</h2>
  <p>This is the modal content and it has a <a href="#">link</a> in it </p>
  <p>This is more modal content and it also has a <a href="#testmodal2" class="modal_link">open modal two</a> in it </p>
</fg-modal>
<a href="#testmodal" class="modal_link">Open Modal</a>
```


<fg-modal id="testmodal">
  <h2 class="modal_title">Dialog number one</h2>
  <p>This is the modal content and it has a <a href="#">link</a> in it </p>
  <p>This is more modal content and it also has a <a href="#testmodal2" class="modal_link">open modal two</a> in it </p>
</fg-modal>


<fg-modal id="testmodal2" aria-label="Dialog number two">
  <p>This is more modal content and it has a custom close button in it. </p>
  <p>This is more modal content and it also has a <a href="#">link</a> in it </p>
  <button class="modal_close" aria-label="Close Modal Window"></button>
</fg-modal>


## Markup options

The modal web component generates a close button automatically with a class of `modal_close`. If you would like to create a custom close button for sake of styling or language purposes, include your own in the markup and the modal will use that instead:

```html
<fg-modal id="testmodal2" aria-label="Dialog number two">
  <p>content...</p>
  <button class="modal_close" aria-label="Close Modal Window"></button>
</fg-modal>
```

## Including Scripts and Styles

TBD

## Methods and Events

TBD

## Polyfills

TBD

