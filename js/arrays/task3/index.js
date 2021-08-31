// input: array; func
// output: new array

// callback
// input: element, index, array
// otput: boolean

// algo
// 1. create empty array
// 2. iterate array
// 3. apply callback for each el
// 4. push el to the res if callback true

// OPTION 2
// const filterArrayElements = (arr, callback) => {
//   const res = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     const callbackRes = callback(arr[index], index, arr);
//     if (callbackRes) {
//       res.push(arr[index]);
//     }
//   }

//   return res;
// };

const filterArrayElements = (arr, callback) => {
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index], index, arr)) {
      res.push(arr[index]);
    }
  }

  return res;
};

// test
const arr = [2, 3, 15, 22, 33, -5, undefined];
const func1 = el => el > 7;

console.log(filterArrayElements(arr, func1));
// test data

// const array = [10, 5, 4, 6, 9];
// const func = (el, index, arr) => {
//   console.log(`el: ${el}, index: ${index}, arr: ${arr}`);
//   if (el > 7) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(filterArrayElements(array, func));

// test 3
const array = [2, 3, 15, 22, 5, 4, 111];
const func2 = (el, index, arr) => {
  if (arr.length < 5) {
    return true;
  }

  return el > 7;
};
console.log(filterArrayElements(array, func2));
