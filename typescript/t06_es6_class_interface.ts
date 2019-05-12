'use strict';

import {p} from "./ut";


p("classes interfaces\n")


interface AInterface {
    x: number;
    y: number;

    something(): void;
}


class A implements AInterface {
    x: number;
    y: number;

    constructor() {
        this.x = 10;
        this.y = 10;
    }

    something(): void {
        console.log("something");
    }
}

console.log(new A());
