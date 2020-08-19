(function(window) {
	/*
		======== A Handy Little QUnit Reference ========
		http://api.qunitjs.com/

		Test methods:
			module(name, {[setup][ ,teardown]})
			test(name, callback)
			expect(numberOfAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			throws(block, [expected], [message])
    */

   var modalA = document.getElementById("testmodal");
   var modalB = document.getElementById("testmodal2");

   

   test( "general API checks", function(){
        ok( customElements.get("fg-modal"), "modal custom element class is defined" );

        ok( modalA.classList.contains("modal"), "modal one has modal class" )

        ok( modalA.connectedCallback, "modalA connected callback is defined")
        ok( modalA.disconnectedCallback, "modalA disconnected callback is defined")

        ok( modalA.open, "modal one has open method" )
        ok( modalA.close, "modal one has close method" )
   });

   test(  "heading is present", function(){
    ok( modalA.querySelector(".modal_title"), "modal one has title element" );
});

test(  "button is generated", function(){
    ok( modalA.querySelector(".modal_close"), "modal one has button element" );
});

test(  "heading is not present in modal two", function(){
    ok( !modalB.querySelector(".modal_title"), "modal two has no title element" );
});
test(  "modal two has aria-label predefined", function(){
    equal( modalB.getAttribute("aria-label"), "Modal dialog number two", "modal two has aria-label attr" );
});


   test(  "role is defined", function(){
    equal( modalA.getAttribute("role"), "dialog", "modal one has aria-labelledby attr" );
});

test(  "tabindex is defined", function(){
    equal( modalA.getAttribute("tabindex"), "-1", "modal one has tabindex=-1 attr" );
});

   test(  "aria labelledby is present", function(){
    ok( modalA.getAttribute("aria-labelledby"), "modal one has aria-labelledby attr" );
});



test(  "aria labelledby is mapped to title", function(){
    var id = modalA.getAttribute("aria-labelledby");
    ok( modalA.querySelector("#" + id), "modal one has aria-labelledby attr pointing to element ID that exists" );
    ok( modalA.querySelector("#" + id).classList.contains("modal_title"), "modal one has aria-labelledby attr pointing to element ID that exists" );
});

   test(  "open method adds open class", function(){
       modalA.open();
       ok( modalA.classList.contains("modal-open"), "modal one has open class" );
       modalA.close();
   } );

   test(  "close method removes open class", function(){
        modalA.open();
        modalA.close();
       ok( !modalA.classList.contains("modal-open"), "modal one has no open class" );
   } );

   

   test(  "open method closes other dialogs", function(){
        modalA.open();
        ok( modalA.classList.contains("modal-open"), "modal one has open class" );
        modalB.open();
        ok( !modalA.classList.contains("modal-open"), "modal one has no open class" );
        ok( modalB.classList.contains("modal-open"), "modal two has open class" );
        modalB.close();
        ok( modalA.classList.contains("modal-open"), "modal one has open class after two closes" );
        ok( !modalB.classList.contains("modal-open"), "modal two has no open class" );
        modalA.close();
        ok( !modalA.classList.contains("modal-open"), "modal one has no open class" );
    } );

    test(  "open and close methods trigger events", function(){
        modalA.addEventListener("open", function(e){
            ok("open event fired");
        });
        modalA.addEventListener("close", function(e){
            ok("close event fired");
        });
        modalA.addEventListener("beforeopen", function(e){
            ok("beforeopen event fired");
        });
        modalA.addEventListener("beforeclose", function(e){
            ok("beforeclose event fired");
        });
        modalA.open();
        modalA.close();
    } );




}(window));
