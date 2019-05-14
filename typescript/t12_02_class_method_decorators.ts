'use strict';

import {p} from "./ut";

p("class method decorators\n")


p("basic method decoration")
function f(target: Object, property: string, descriptor: PropertyDescriptor) {
    p("f params")
    console.log("TARGET", target);
    console.log("PROPERTY", property);
    console.log("DESCRIPTOR", descriptor);

    const func = descriptor.value;

    descriptor.value = function() {
        console.log("BEFORE FUNC");
        func();
        console.log("AFTER FUNC");
    }
}

class A {
    @f
    some() {
        console.log("some() call.")
    }
}

p("instantiate new A() and use .some()");
let a1 = new A();
a1.some();
a1.some();
