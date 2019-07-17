

class Node {

    constructor(msg) {
        this.pcount = 0;
        this.ncount = 0;
        this.prevs = [];
        this.nexts = [];

        this.msg = msg;
    }

    h() {
        console.log(this.msg);
    }

    c(n) {
        this.nexts.push(n);
        n.prevs.push(this);
        n.pcount++;
    }

    f() {
        this.pcount--;

        if (this.pcount > 0)
            return;

        this.h();
        this.ncount = this.nexts.length;
        this.nexts.forEach(function(n) {
            n.f();
        });
    }

    b() {
        this.ncount--;

        if (this.ncount > 0)
            return;

        this.h();
        this.pcount = this.prevs.length;
        this.prevs.forEach(function(n) {
            n.b();
        });
    }
}

let n1 = new Node("N1");
let n2 = new Node("N2");
let n3 = new Node("N3");

n1.c(n3);
n2.c(n3);

console.log("FORWARD");
n1.f();
n2.f();

console.log("\nBACK");
n3.b();
