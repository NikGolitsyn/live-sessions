


//How to work on tech tasks. Step by step guide

// 1. Learn requirement +++
// 2. Create step by step algo (& input/output for functions) +++
// 3. Write draft solution & testing +++
// 4. Refectoring & final testing -> final solution +++

// algo
// 1. iterate from 2 to num
// 2. check every number in prime
// 2.1 iterate form from 2 to N
// 2.2 check if num % index === 0 -not prime

// examples
// 9 ->
// step1: 9/2
// step2: 9/3 --> not prime
// step3: 9/4
// ...

//draft solution
// input: num
// output: undefined

// function getPrimes(num) {
//   for (let index = 2; index <= num; index += 1) {
//     console.log('checking if ' + index + ' is prime');
//     let isPrime = true;
//     for (let number = 2; number < index; number += 1) {
//       console.log('checking if index % number ' + number + ' ' + index);
//       if (index % number === 0) {
//         console.log('number is not prime');
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(index);
//     }
//   }
// }

//input number
//output boolean

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      console.log(index);
    }
  }
}

// test data
getPrimes(10);
