'use strict';

// const obj = {
//   key: values,
// };
function sayHi() {
  console.log(this);
}

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,
  array: [1, 2, 3],

  startTimer() {
    console.log(this);
    const self = this;

    this.array.filter(function (el) {
      console.log(this);
      return el === 1;
    });

    setTimeout(function () {
      console.log(this);
    }, 100);

    // // lose context case#2
    // this.timerId = setInterval(() => {
    //   this.secondsPassed += 1;

    //   if (this.secondsPassed === 60) {
    //     this.minsPassed += 1;
    //     this.secondsPassed = 0;
    //   }

    //   console.log(this);
    // }, 1000);

    // fix context with bind
    // const callbackFunc = function () {
    //   console.log(this);

    //   this.secondsPassed += 1;
    // };

    // const bindedCallbackFunc = callbackFunc.bind(this);

    // setInterval(bindedCallbackFunc, 1000);

    // setInterval(
    //   function () {
    //     console.log(this);

    //     this.secondsPassed += 1;
    //   }.bind(this),
    //   1000,
    // );
    // function filter (callback) {
    // ...
    // ...
    // callback();
    // ...
    // ...
    // }

    // function setInterval (callback) {
    // ...
    // ...
    // window.callback();
    // }
  },
  stopTimer() {
    clearInterval(this.timerId);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// context
// Один из источников данных откуда функция может черпать информацию
// Это объект который владеет вызовом функции
// 1. know when context is lost
// 2. fix context

// test data
// timer.startTimer();

// lose context case #1
// const startTimerFunc = timer.startTimer;
// startTimerFunc();

// // set interval example
// const intervalId = setInterval(() => {
//   console.log('Monday');
// }, 2000);
// clearInterval(intervalId);

// lose context case #2
// [1, 2, 4].filter(function () {
//   console.log('filter this ' + this);
// });

function Service(args, string) {
  let numbers = args;
  let token = string;

  function doSomething() {
    setTimeout(function doAnotherThing() {
      numbers.forEach(function log(number) {
        console.log(number);
        console.log(token);
      });
    }, 100);
  }

  return Object.freeze({
    doSomething,
  });
}

const test = new Service([1,2,3], 'token');
test.doSomething();
