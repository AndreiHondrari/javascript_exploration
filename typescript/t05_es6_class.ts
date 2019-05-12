'use strict';

import {p} from "./ut";


p("classes\n")


class A {
    x: number;
    y: number;

    constructor(x=null, y=null) {
        this.x = x || 10;
        this.y = y || 22;
    }
}

p("new A()")
let a1 = new A();
console.log(a1);

p("new A(55)")
let a2 = new A(55);
console.log(a2);

p("new A(66, 88)")
let a3 = new A(66, 88);
console.log(a3);
