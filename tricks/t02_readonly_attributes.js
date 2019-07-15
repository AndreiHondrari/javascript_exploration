

let o1 = {};

Object.defineProperty(o1, "bla", {
    value: 123,
    writable: false
});

console.log(o1.bla);
o1.bla = 456; // should throw error because o1.bla is not writable
