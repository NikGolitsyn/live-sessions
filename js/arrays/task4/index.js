// map
// input: array, callback;
// output: new array

// callback
// input: element, index, array
// otput: new element

// algo
// 1. create empty array
// 2. iterate array
// 3. apply callback for each el
// 4. push el to the res

const mapArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    res.push(callback(arr[index], index, arr));
  }
  return res;
};

// OPTION 1
const emptyArray = [1];
const array = [15, 16, 23, 32, 44];
const callFunc1 = (el, index, arr) => {
  if (index === 0) {
    console.log('How many tasks did you solve today?');
  }

  if (arr.length < 4) {
    return 'Not Enough students';
  }

  let newEl = `For today I solved ${el} tasks`;
  return newEl;
};

console.log(mapArrayElements(emptyArray, callFunc1));
console.log(mapArrayElements(array, callFunc1));
console.log(array.length);
console.log(mapArrayElements(array, callFunc1).length);

// OPTION 2
// const array = [2, 4, 6, 10, 12];
// const callFunc = el => el * el;
// console.log(mapArrayElements(array, callFunc));
// console.log(array.length);
// console.log(mapArrayElements(array, callFunc).length);
