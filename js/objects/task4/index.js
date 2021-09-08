// const getCustomersList = obj => {
//   console.log(Object.entries(obj));
//   const order = Object.entries(obj).sort((a, b) => a[1].age - b[1].age);
//   console.log(order);
//   const first = order.map(el => el[1]);
//   console.log(first);
//   const second = order.map(el => el[0]);
//   console.log(second);
//   return first.map((el, index) => ({ ...el, id: second[index] }));
// };

// input object
// output array

// Algo
// 1 Create an array of key values Object.entries
// 2 Use map to create new array of objects with correct id
// 3 Sort an array

const getCustomersList = obj =>
  Object.entries(obj)
    .map(el => ({ ...el[1], id: el[0] }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customers-id-1': {
    name: 'William',
    age: 54,
  },
  'customers-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customers-id-3': {
    name: 'John',
    age: 34,
  },
  'customers-id-4': {
    name: 'Maria',
    age: 25,
  },
  'customers-id-5': {
    name: 'Maria',
    age: 25,
    job: 'developer',
  },
  'customers-id-6': {
    name: 'Daria',
    age: 25,
    title: 'queen',
  },
};

// good option
const getCustomersList1 = obj => {
  // input callback
  // output changed array

  // input array
  // ouput changed array
  return Object.entries(obj)
    .map(arr => ({ id: arr[0], ...arr[1] }))
    .sort((a, b) => a.age - b.age);
};

// best option
const getCustomersList2 = obj => Object.entries(obj)
    .map(([id, customersObj]) => ({ id, ...customersObj }))
    .sort((a, b) => a.age - b.age);


getCustomersList2(customers);
