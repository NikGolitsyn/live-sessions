const numbersList = [5, 0, 8, 10, -4, 50, 220];

console.log('numbersList before map', numbersList);

// input callback fn
// output newArr

// callback input (element, index(optional), array(optional))
// callback output changed element after func return

// OPTION 1

// const mapRes = numbersList.map(function (el, index, array) {
//   // console.log(el);
//   // console.log(index);
//   // console.log(array);

//   return el * el;
// });

// OPTION 2
const mapRes = numbersList.map((el, index, array) => el * el);
console.log(mapRes);

console.log('numbersList after map', numbersList);

// ====== FOREACH

// input callback
// output undefined

// input (el, index, arr)
// output undefined
console.log('numbersList before forEach', numbersList);

const ForEach = numbersList.forEach(el => {
  if (el > 0) {
    console.log(el);
  }
});

// Don't use this variant const ForEach = numbersList.forEach(el => (el > 0 ? console.log(el) : null));

console.log(ForEach);
console.log('numbersList after forEach', numbersList);

// input callback
// output first found element || undefined

// CALLBACK
// input (el, index, arr)
// output boolean

// OPTION 1

// const findRes = numbersList.find(el => {
//   if (el % 2 === 0 && el > 0) {
//     return true;
//   }
//   return false;
// });

// OPTION 2
const findRes = numbersList.find(el => el % 2 === 0 && el > 0);
console.log(findRes);

// ========= REDUCE

const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];
// input callback, acc initial value
// output number

// callback
// input acc (number), el (number), index(optional), arra(optional)
// output number
console.log('before reduce', transactions);

// const reduceRes = transactions.reduce((acc, element, index) => {
//   console.log('step: ' + index + ', acc is: ' + acc + ', element is: ' + element);
//   acc += element;
//   return acc;
// });

const reduceRes = transactions.reduce((acc, element) => acc + element);

console.log(reduceRes);
console.log('after reduce', transactions);
