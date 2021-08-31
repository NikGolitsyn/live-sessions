// input obj, obj
// output boolean

// algo
// 1 create two array of our objects with keys and values
// 2 test if arrays length are equal if not === false
// 3 test if array of first object includes all element in array of second object

// option 1 bad option

// function compareObjects(obj1, obj2) {
// const first = [].concat(...Object.entries(obj1));
// const second = [].concat(...Object.entries(obj2));

//   let count = 0;
//   if (first.length !== second.length) {
//     return false;
//   }
//   if (first.length === second.length) {
//     first.forEach(el => {
//       if (!second.includes(el)) {
//         count += 1;
//       }
//     });
//   }
//   return count === 0;
// }

// option 2 сравнивает корректо только свойства с примитивами

function compareObjects(firstObj, secondObj) {
  const first = [...Object.entries(firstObj)];
  const second = [...Object.entries(secondObj)];
  if (first.length !== second.length) {
    return false;
  }
  console.log(first.map(arrEl => arrEl.join('')));
  return first
    .map(arrEl => arrEl.join(''))
    .every(el => second.map(arrEl => arrEl.join('')).includes(el));
}

// option 3 работает с доп вложенностью, но игнорирует функции и "Порядок свойств имеет значение"

const compareObjectsJSON = (firstObj, secondObj) => JSON.stringify(firstObj) === JSON.stringify(secondObj);


// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  name: 'Anton',
  test: {
    a: 'test1',
    b: 'test2',
  },
  sayHi: () => {
    console.log(`Hi`);
  },
};

const obj6 = {
  name: 'Anton',
  test: {
    a: 'test1',
    b: 'test2',
  },
  sayHi: () => {
    console.log(`Hi`);
  },
};

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log('compare obj1, obj4 ', compareObjects(obj1, obj4)); // ==> true
// console.log(compareObjects({}, {})); // ==> true
console.log('compare obj5, obj6 with functions', compareObjects(obj5, obj6)); // ==> true, yet it still does not work correctly
// метод JSON.stringify() transform object into string, but does not work with functions inside object('methods')

console.log('JSON.stringify(obj5) is ', JSON.stringify(obj5)); // it ignored our function
console.log(JSON.parse(JSON.stringify(obj5)));
// JSON.parse()
// input (String, reviver = function(optional)
// output Could be an Array, object, string etc, depends on input text
console.log(JSON.parse('[1,2,3,4,5]'));
console.log('JSON.parse with string {"name":"Tony"}', JSON.parse('{"name":"Tony"}'));
console.log('JSON.parse with string boolean', JSON.parse('true'));
console.log('JSON.parse with string boolean', JSON.parse('13'));
console.log('JSON.stringify(obj5)', JSON.stringify(obj5));
console.log('JSON method', JSON.stringify(obj5) === JSON.stringify(obj6)); // ==> true
// const first = [...Object.entries(obj1)];
// const second = [...Object.entries(obj2)];
