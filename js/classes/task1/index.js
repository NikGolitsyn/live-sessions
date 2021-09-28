class Sportsman {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, styleOfSwimming) {
    super(name);
    this.styleOfSwimming = styleOfSwimming;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.styleOfSwimming}`);
  }
}

