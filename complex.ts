class Complex {
  private r: number;
  private i: number;

  constructor(r: number, i: number) {
    this.r = r;
    this.i = i;
  }

  add(comp: Complex): Complex {
    return new Complex(this.r + comp.r, this.i + comp.i);
  }

  sub(comp: Complex): Complex {
    return new Complex(this.r - comp.r, this.i - comp.i);
  }

  mod() {
    return Math.sqrt(this.r ** 2 + this.i ** 2);
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
