
// a-component behavior factory
// make an a-component and give it a does= attribute with space separated classes to run
export class Factory extends HTMLElement {
	connectedCallback(){
		var elem = this;
		this.getAttribute( "does" ).split( " " ).forEach(function( func ){
			if( window[func] ){
				elem[ func ] = new window[func](elem);
				elem[func].elem = elem;
				elem.classList.add( func + "-defined" );
				if( elem[func].create ){
					elem[func].create();
					elem.dispatchEvent( new Event("create." + func, {"bubbles":true, "cancelable":false}) );
				}
			}
		});
	}
	disconnectedCallback(){
		var elem = this;
		this.getAttribute( "does" ).split( " " ).forEach(function( func ){
			document.dispatchEvent( new Event("destroy." + func, {"bubbles":true, "cancelable":false}) );
			if( elem[func].destroy ){
				elem[func].destroy();
			}
		});
	}
}

if ('customElements' in window) {
	customElements.define('a-component', Factory );
}