class Sportsman {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(this);
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, swimStyle) {
    super(name); // вызов родительского конструктора
    this.swimStyle = swimStyle;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.swimStyle}`);
  }
}

// test
// const obj1 = new Object()
const obj1 = {
  name: 'James',
};
console.log(obj1);

const obj = new Sportsman('John');
obj.run();
console.log(obj);

const swimObj = new Swimmer('Mike', 'testStyle');
console.log(swimObj);
swimObj.run();
swimObj.swim();

// внутри классов контекст теряяется, сложная конструкции