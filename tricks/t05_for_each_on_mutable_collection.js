

let m1 = new Map();
m1.set('a', 10);
m1.set('b', 20);

console.log("Iterate");
for (const [key, val] of m1) {

    // funky alteration of the map during iteration
    if (key == 'a')
        m1.set('c', 30);  // -> this will also be iterated over
        // dangerous if you keep adding

    console.log(`Item: (${key}: ${val})`);
}
console.log("Iteration stop");
