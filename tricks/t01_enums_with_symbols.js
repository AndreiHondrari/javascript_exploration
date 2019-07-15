
const Colors = Object.freeze({
    RED:   Symbol("red"),
    BLUE:  Symbol("blue"),
    GREEN: Symbol("green")
});

console.log(Colors.RED == Colors.BLUE);
console.log(Colors.RED == Colors.RED);
