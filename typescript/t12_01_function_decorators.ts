'use strict';

import {p} from "./ut";

p("function decorators\n")

// classic wrapping
function wrap(somef) {
    return function(){
        console.log("before somef");
        somef();
        console.log("after somef");
    }
}

function some() {
    console.log("some()");
}

let somew = wrap(some);

p("call somew (which wraps some)");
somew();
