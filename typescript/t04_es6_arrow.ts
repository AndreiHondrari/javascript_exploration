'use strict';

import {p} from "./ut";


p("arrow function\n")

function callTheCallback (cbk) {
    console.log("PRE cbk");
    cbk();
    console.log("POST cbk");
}


p("Calling callTheCallback...")
callTheCallback(() => {console.log("in the arrow cbk function");})
