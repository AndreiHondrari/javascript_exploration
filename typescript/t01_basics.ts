'use strict';

import {p} from "./ut";

let x: number = 0xfe;
let lst1: number[] = [1, 2, 3, 4]

p("Basics in TypeScript\n")

p("fundamental types")
console.log("x: number: " + x);
console.log(`x: number ${x} -> line generated with format string`);

p("")
console.log("lst1:");
lst1.forEach(function(elem) {
    console.log(elem);
});

console.log("tuples");
