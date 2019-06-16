
export default function doh() {
    console.log("module2.DOH");
};

let var1 = 111;
let var2 = 222;

export {var1 as varTheOne, var2};
