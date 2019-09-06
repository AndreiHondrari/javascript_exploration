'use strict';

import {p} from "./ut";


p("arrow function\n")

const fn = (param) => (subparam) => {
    return `ref: ${param} -> bazinga: ${subparam}`
}

const res = fn("themainref")("eureka perhaps?");
console.log(`arrow arrow res: ${res}`);
