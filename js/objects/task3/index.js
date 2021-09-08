// input obj, obj
// output boolean

// algo
// 1 create two array of our objects with keys and values
// 2 test if arrays length are equal if not === false
// 3 join parts of arrays to create one element
// 4 test if array of first object includes all element in array of second object

// option 1 Very bad noob option

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

// option 2 Bad option, слишком замудрено, сравнивает корректо только свойства с примитивами, зато свойста могут быть в любом порядке.

// function compareObjects(firstObj, secondObj) {
//   const first = [...Object.entries(firstObj)];
//   const second = [...Object.entries(secondObj)];
//   if (first.length !== second.length) {
//     return false;
//   }

//   return first
//     .map(arrEl => arrEl.join(''))
//     .every(el => second.map(arrEl => arrEl.join('')).includes(el));
// }

// // option 3 Bad option работает с доп вложенностью, но игнорирует функции и "Порядок свойств имеет значение при сравнении"

// const compareObjectsJSON = (firstObj, secondObj) =>
//   JSON.stringify(firstObj) === JSON.stringify(secondObj);

// examples
const obj1 = {
  age: 17,
  name: 'Tom',
  city: 'Kiyv',
};

const obj2 = {
  city: 'Kiyv',
  name: 'Tom',
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
// input obj
// output array of key: values
// console.log(Object.entries(obj6));
// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log('compare obj1, obj4 ', compareObjects(obj1, obj4)); // ==> true
// console.log(compareObjects({}, {})); // ==> true
// console.log('compare obj5, obj6 with functions', compareObjects(obj5, obj6)); // ==> true, yet it still does not work correctly
// метод JSON.stringify() transform object into string, but does not work with functions inside object('methods')

// console.log('JSON.stringify(obj5) is ', JSON.stringify(obj5)); // it ignored our function
// console.log(JSON.parse(JSON.stringify(obj5)));
// JSON.parse()
// input (String, reviver = function(optional)
// output Could be an Array, object, string etc, depends on input text
// console.log(JSON.parse('[1,2,3,4,5]'));
// console.log('JSON.parse with string {"name":"Tony"}', JSON.parse('{"name":"Tony"}'));
// console.log('JSON.parse with string boolean', JSON.parse('true'));
// console.log('JSON.parse with string boolean', JSON.parse('13'));
// console.log('JSON.stringify(obj5)', JSON.stringify(obj5));
// console.log('JSON method', JSON.stringify(obj5) === JSON.stringify(obj6)); // ==> true
// const first = [...Object.entries(obj1)];
// const second = [...Object.entries(obj2)];

// input-obj,obj
// output- boolean
// 1. compare if  number keys in obj1 !== number keys in obj2=>false
// 2. collect keys to arr
// 3 iterate  in obj1  and compare keys:values obj1 with keys:values obj1
// 3.1 if (obj1[key] !== obj2[key]) return false

// very nice options

function compareObjects1(obj1, obj2) {
  const keys1 = Object.keys(obj1);


  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  return !keys1.some(key => obj1[key] !== obj2[key]);
}

console.log(compareObjects1(obj1, obj2));
