'use strict';


class MyClass {

    constructor() {
        this._some = 123;
        this._bla = 555;
    }

    get some() {
        return this._some;
    }

    get bla() {
        return this._bla;
    }

    set bla(value) {
        this._bla = value * 100;
    }
}

let o1 = new MyClass();

// writable property
console.log("WRITABLE PROPERTY");
console.log("-----------------\n");
console.log(`o1.bla: ${o1.bla}`);
o1.bla = 999;
console.log(`o1.bla = 999: ${o1.bla}`);


console.log("\nREADONLY PROPERTY");
console.log("-----------------\n");
// readonly property
console.log(`o1.some: ${o1.some}`);

try {
    console.log(`o1.some = <some value>`);
    o1.some = 215151;  // should throw an error because it has only a getter
} catch(e) {
    console.log("Error thrown because of setting o1.some while it doesn't have a setter.");
}
