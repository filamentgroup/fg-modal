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


<a href="https://www.filamentgroup.com" class="project-logo">Filament Group</a>

# {{site.title}}
# {{site.description}}

------------


<a-component does="modal" id="testmodal">
  <h2 class="modal_title">Dialog number one</h2>
  <p>This is the modal content and it has a <a href="#">link</a> in it </p>
  <p>This is more modal content and it also has a <a href="#testmodal2" class="modal_link">open modal two</a> in it </p>
</a-component>


<a-component does="modal" id="testmodal2" aria-label="Dialog number two">
  <p>This is more modal content and it has a custom close button in it. </p>
  <p>This is more modal content and it also has a <a href="#">link</a> in it </p>
  <button class="modal_close" aria-label="Close Modal Window"></button>
</a-component>


<a href="#testmodal" class="modal_link">Open Modal</a>