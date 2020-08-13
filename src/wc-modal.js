export class Modal extends HTMLElement {

	connectedCallback(){
		this.closetext = "Close dialog";
		this.closeclass = "modal_close";
		this.closed = true;
		
		this.initEvent = new CustomEvent("init", {
			bubbles: true,
			cancelable: false
		});

		this.beforeOpenEvent = new CustomEvent("beforeopen", {
			bubbles: true,
			cancelable: false
		});

		this.openEvent = new CustomEvent("open", {
			bubbles: true,
			cancelable: false
		});
	
		this.closeEvent = new CustomEvent("close", {
			bubbles: true,
			cancelable: false
		});

		this.beforeCloseEvent = new CustomEvent("beforeclose", {
			bubbles: true,
			cancelable: false
		});
		this.closeBtn = this.querySelector( "." + this.closeclass ) || this.appendCloseBtn();
		this.title = this.querySelector( ".modal_title" );
		this.enhanceMarkup();
		this.bindEvents();
		this.dispatchEvent( this.initEvent );
	}

	appendCloseBtn(){
		var btn = document.createElement( "button" );
		btn.className = this.closeclass;
		btn.innerHTML = this.closetext;
		this.append( btn );
		return btn;
	}

	enhanceMarkup(){
		this.setAttribute( "role", "dialog" );
		this.id = this.id || ("modal_" + new Date().getTime());
		if( this.title ){
			this.title.id = this.title.id || ("modal_title_" + new Date().getTime());
			this.setAttribute( "aria-labelledby", this.title.id );
		}
		this.classList.add("modal");
		this.setAttribute("tabindex","-1");
		this.overlay = document.createElement("div");
		this.overlay.className = "modal_screen";
		this.after(this.overlay);
		this.modalLinks = "a.modal_link[href='#" + this.id + "']";
		this.changeAssocLinkRoles();
	}

	inert(){
		var self = this;
		function inertSiblings( node ){
			if( node.parentNode ){
				node.parentNode.childNodes.forEach(function(elem){
					if( elem !== node && elem.nodeType === 1 ){
						elem.inert = true;
					}
				});
				if( node.parentNode !== document.body ){
					inertSiblings(node.parentNode);
				}
			}
			
		}
		inertSiblings(this);
	}

	unert(){
		document.querySelectorAll( "[inert]" ).forEach(function(elem){
			elem.inert = false;
		});
	}

	open( programmedOpen ){
		var self = this;
		this.dispatchEvent( this.beforeOpenEvent );
		this.classList.add( "modal-open" );
		if( !programmedOpen ){
			this.focusedElem = document.activeElement;
		}
		this.closed = false;
		this.focus();
		self.inert();
		this.dispatchEvent( this.openEvent );
	}

	

	close( programmedClose ){
		var self = this;
		this.dispatchEvent( this.beforeCloseEvent );
		this.classList.remove( "modal-open" );
		this.closed = true;
		self.unert();
		var focusedElemModal = this.focusedElem.closest(".modal");
		if( focusedElemModal ){
			focusedElemModal.open( true );
		}
		if( !programmedClose ){
			this.focusedElem.focus();
		}
		
		this.dispatchEvent( this.closeEvent );
	}

	changeAssocLinkRoles(){
		document.querySelectorAll(this.modalLinks).forEach(function(elem){
			elem.setAttribute("role", "button" );
		});
	}


	bindEvents(){
		var self = this;

		// close btn click
		this.closeBtn.addEventListener('click', event => self.close());

		// open dialog if click is on link to dialog
		window.addEventListener('click', function( e ){
			var assocLink = e.target.closest(self.modalLinks);
			if( assocLink ){
				e.preventDefault();
				self.open();
			}
		});

		// click on the screen itself closes it
		this.overlay.addEventListener('mouseup', function( e ){
			if( !self.closed ){
				self.close();
			}
		});

		// click on anything outside dialog closes it too (if screen is not shown maybe?)
		window.addEventListener('mouseup', function( e ){
			if( !self.closed && !e.target.closest( "#" + self.id ) ){
				e.preventDefault();
				self.close();
			}
		});
		

		// close on escape
		window.addEventListener('keydown', function( e){
			if( e.keyCode === 27 &&  !self.closed ){
				e.preventDefault();
				self.close();
			}
			
		});

		// close on other dialog open
		window.addEventListener('beforeopen', function( e){
			if( !self.closed && e.target !== this ){
				self.close( true );
			}
		});
	}

	disconnectedCallback(){
		// remove screen when elem is removed
		this.overlay.remove();
	}
}

if ('customElements' in window) {
	customElements.define('fg-modal', Modal );
}