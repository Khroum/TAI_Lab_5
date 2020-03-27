"use strict";
class Complex {
    constructor(r, i) {
        this.r = r;
        this.i = i;
    }
    add(comp) {
        return new Complex(this.r + comp.r, this.i + comp.i);
    }
    sub(comp) {
        return new Complex(this.r - comp.r, this.i - comp.i);
    }
    mod() {
        return Math.sqrt(Math.pow(this.r, 2) + Math.pow(this.i, 2));
    }
    toString() {
        console.log(`Complex: real=${this.r} imaginary=${this.i}`);
    }
}
let com1 = new Complex(1.0, 1.0);
let com2 = new Complex(2.0, 2.0);
let comAdd = com1.add(com2);
comAdd.toString();
let comSub = comAdd.sub(com1);
comSub.toString();
console.log(`mod: ${comSub.mod()}`);
