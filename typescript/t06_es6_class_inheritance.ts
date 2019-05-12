'use strict';

import {p} from "./ut";


p("classes inheritance\n")


class A {
    x: number;
    y: number;

    constructor(x=null, y=null) {
        this.x = x || 10;
        this.y = y || 22;
    }
}

class B extends A {
    z: number;

    constructor(x=null, y=null, z=null) {
        super(x, y);
        this.z = z || 30;
    }
}

p("new B()")
let b1 = new B();
console.log(b1);

p("new B(55)")
let b2 = new B(55);
console.log(b2);

p("new B(66, 88)")
let b3 = new B(66, 88);
console.log(b3);
