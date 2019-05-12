'use strict';

import {p} from "./ut";

let x: number = 0xfe;
let xb: number = 0b101;

p("Basics in TypeScript\n")

p("fundamental types")
console.log("x: number: " + x);
console.log(`x: number ${x} -> line generated with format string`);
console.log(`xb: number = 0b101 | ${xb}`);

p("arrays")
console.log("lst1: number[]");
let lst1: number[] = [1, 2, 3, 4]
lst1.forEach(function(elem) {
    console.log(elem);
});

console.log("\nlst2: Array<number>");
let lst2: Array<number> = [0x01, 0xe1, 0xfe];
console.log(lst2);

p("tuples")
let t1: [string, number];
t1 = ["bla", 20]
// t1 = [22.3, 44]  // -> is not valid. Expecting [string, number]

p("enums")
enum SomeType {Type_1, Type_2, Type_3};
console.log(`SomeType: ${SomeType}`);
console.log(`SomeType.Type_1: ${SomeType.Type_1}`);

p("any")
let z: any = 4;
z = 10;
z = "bla"
console.log(`z: any = 10 | ${z}`)
console.log(`z: any "bla" | ${z}`)

p("void")

function something (): void {
    console.log("this is a void func");
}
console.log("something() result: " + something());
