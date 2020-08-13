---
---

<script>this.customElements||document.write('<script src="./lib/document-register-element.js"><\x2fscript>');</script>
<script src="./lib/inert.js" defer></script>

<script type="module">
  import {Modal} from '../src/wc-modal.js';
  window.modal = Modal;
</script>
<script type="module">
  import './lib/wc-factory.js';
</script>
<link rel="stylesheet" href="../src/wc-modal.css">


# Demo

<a href="#testmodal" class="modal_link">Open Modal</a>


## Documentation

This modal dialog uses the [Filament web component Factory pattern](https://github.com/filamentgroup/wc-factory). To make a modal, create an `fg-modal` element with a `does` attribute containing the term `modal`, and a unique ID. This element and attribute combination will be recognized by this component's javascript, and allow it to be enhanced with necessary behaviors and accessibility information.

You can place any HTML content inside the element, but one part that's particularly helpful is a title, which can either be placed in an HTML element with a class of `modal_title` or in an `aria-label` attribute on the `fg-modal` element itself. 

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

