'use strict';

import {p} from "./ut";

p("generators\n")

// old way
p("old-style generator")
function generator() {
    return {
        next() {
            return 10;
        }
    }
}

let g1 = generator();

console.log(`${g1.next()}`);
console.log(`${g1.next()}`);
console.log(`${g1.next()}`);
console.log(`${g1.next()}`);
console.log(`${g1.next()}`);

// new way
p("new-style generator")
function* makeRangeIterator(start = 0, end = 3, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

let g2 = makeRangeIterator();

console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());


// for...of on generator
p("for...of generator")
let g3 = makeRangeIterator();

for (let x of g3) {
    console.log(`g3.x: ${x}`);
}
