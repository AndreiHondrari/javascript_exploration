'use strict';

import {p} from "./ut";


p("spread operator")

let ls1: number[] = [1, 2, 3];
let ls2: number[] = [1, 2, 3];


let ls3: number[] = [...ls1, ...ls2]

console.log(ls3);
