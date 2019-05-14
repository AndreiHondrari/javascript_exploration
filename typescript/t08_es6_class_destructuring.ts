'use strict';

import {p} from "./ut";


p("destructuring\n");

p("destructuring list");
function bla() {
    return [1, 2]
}

let [a, b, c = 3] = bla();
console.log(`a: ${a}, b: ${b}, c: ${c}`);

p("destructuring obj")
let {x1, y1 = 4} = {x1: 20};
console.log(`x1: ${x1}, y1: ${y1}`);

p("destructuring obj from function")
function bla2() {
    return {x2: 10, y2: 33};
}

let {x2, y2} = bla2();
console.log(`x2: ${x2}, y2: ${y2}`);


p("deep destructuring");
let {k: {l: m}} = {k: {l: 22}};
console.log(`m: ${m}`);


p("arg destructuring");

function gimme([a, b]) {
    console.log(`gimme() | a: ${a}, b: ${b}`);
}

gimme([55, 66]);

p("named arg destructuring");
function gimme2({a=null, b=null}: {a: number, b: boolean}) {
    console.log(`gimme2() | a: ${a}, b: ${b}`);
}

// gimme2({a: 10}) -> will not work because you have to give both `a` and `b`
// gimme2({a: 10, b: 22}) -> will not work because `b` is expecting a  boolean
gimme2({a: 10, b: false});

p("optional named arg destructuring");
function gimme3({a=null, b=null}: {a?: number, b?: boolean} = {}) {
    console.log(`gimme3() | a: ${a}, b: ${b}`);
}

gimme3({a: 10});
gimme3({a: 10, b: false});
gimme3({b: true});
gimme3();
