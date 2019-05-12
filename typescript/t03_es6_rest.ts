'use strict';

import {p} from "./ut";


p("spread operator")

function something(...args) {
    args.forEach(function(elem) {
        console.log(elem);
    });
}

p("something(1, 2, 3)")
something(1, 2, 3)

p("something(1, 2, 3, 4, 5)")
something(1, 2, 3, 4, 5)
