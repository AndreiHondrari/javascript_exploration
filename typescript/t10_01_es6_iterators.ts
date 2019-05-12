'use strict';

import {p} from "./ut";

p("iterators and for...of\n")


let someIterator = {
    [Symbol.iterator]() {

        let i = 0;

        return {
            next() {

                if (i >= 10)
                    return {value: undefined, done: true};

                return {value: i++, done: false};
            }
        }
    }
}

for (let x of someIterator) {
    console.log(`x of someIterator: ${x}`);
}
