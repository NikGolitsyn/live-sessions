// Объект класса Array // функция внутри класса = метод.

const numbersList1 = [1, 2, 3, 4, 5];

console.log(numbersList1);

const res = numbersList1.pop();
console.log(res);

console.log(numbersList1);

//input none
//output number

/* push - добавит элемент в конец массива */

const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push', numbersList2);
const push = numbersList2.push(100);
console.log(push);

console.log('after push', numbersList2);
//input number
//output number(arr.length)

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift', numbersList3);
console.log(numbersList3.shift());
console.log('after shift', numbersList3);

//input none
//output number(array[0]) || undefined

/* ======================================= */
/* ===> НЕ мутирующие методы массивов <=== */
/* ===> НЕ изменяют исходный массив <===== */
/* ======================================= */

/* метод filter */
// начальный массив
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
console.log('before filter', anotherNumbersList);

// input function(element, (index,...)optional)
// output new array after changes

// input (element, (index, arr)optional);
// output boolean;

//OPTION 1

// function filterCallback(element) {
//   console.log(element);
//   if (element > 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

const filterRes = anotherNumbersList.filter(element => element > 5);
console.log(filterRes);
console.log('after filter', anotherNumbersList);

// SLICE
const numbersList4 = [1, 2, 3, 4, 5];
console.log('before slice', numbersList4);
const res4 = numbersList4.slice(2);
console.log(res4);
console.log('after slice', numbersList4);
//input (number(index of start), number (optional))
//output array

// =================== CALLBACK
// input number, number, callback
// output undefined

function sum(from, to, printer) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  printer(sum);
}

// function printResult(res) {
//   alert(res);
// }
function printResult(res) {
  console.log(res);
}
// function printResult(res) {
//  // send email
// }

// test data
sum(5, 8, printResult);
