//input object key value
//output changed or new obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data

const transaction = {
  value: 170,
};

// console.log(addPropertyV1({}, 'name', 'John'));
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
// console.log(transaction);

// ===
// input: object, string, string
// output: object

//Object assign
//input first obj that accept changes
//output source object that gave some property;
function addPropertyV2(obj, key, value) {
  // put your code here
  return Object.assign(obj, { [key]: value });
}
const transaction2 = {
  value: 170,
};

// console.log(addPropertyV2({ name: 'Roland', age: 18 }, 'name', 'John'));
// console.log(addPropertyV2(transaction2, 'currency', 'USD'));
// console.log(transaction2);

function addPropertyV3(obj, key, value) {
  // put your code here
  return Object.assign({}, obj, { [key]: value });
}
// const transaction3 = {
//   value: 170,
// };

// console.log(addPropertyV3(obj, 'skin-color', 'white'));
// console.log(addPropertyV3(transaction3, 'currency', 'USD'));
// console.log(transaction3);
// console.log(obj);

const obj = {
  name: 'Roland',
  age: 18,
  title: 'King',
};

function addPropertyV4(obj, key, value) {
  return { [key]: value, ...obj };
}

const transaction4 = {
  value: 170,
};

console.log(addPropertyV4(obj, 'skin-color', 'white'));
console.log(addPropertyV4(transaction4, 'currency', 'USD'));
console.log(transaction4);
console.log(obj);

// spread operator

// const numbers = [10, 11, 18, 7, 0];
// console.log(numbers);
// console.log(...numbers);
// const numbersCopy = [...numbers, 1111, 22, 33, 44];
// console.log(numbersCopy);

// const transactionTest = {
//   value: 170,
// };

// const transactionTestCopy = { ...transactionTest };
// console.log(transactionTestCopy);

// // rest operator
// function sum(param1, ...params) {
//   console.log(params);

//   return (
//     param1 +
//     params.reduce((acc, el) => {
//       acc += el;
//       return acc;
//     })
//   );
// }

// // test data
// console.log(sum(1, 2, 3, 4, 5));

// data destructing
const numbersRest = [10, 11, 18, 7, 0];
[firstElem, ...rest] = numbersRest;
console.log(firstElem);
console.log(rest);
