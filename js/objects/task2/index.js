// input array, array
// output obj;

// algo
// 1. reduce

// algo
// 1. create res obj
// 2. itarate keyList
// 3. get value by index
// 4. add key-value to the object

// option bad
function buildObjectTest(keyList, valuesList) {
  let obj = {};

  for (let index = 0; index < keyList.length; index += 1) {
    obj = { ...obj, [keyList[index]]: valuesList[index] }; // obj[keyList[index]] = valuesList[index]
  }
  return obj;
}

// option good
const buildObjectTest2 = (keysList, valuesList) => {
  return keysList.reduce((obj, item, index) => {
    return { ...obj, [item]: valuesList[index] };
  }, {});
};

// option good
const buildObject = (keysList, valuesList) =>
keysList.reduce((objAcc, keyEl, index) => ({ ...objAcc, [keyEl]: valuesList[index] }), {});

// test data
const keys = ['name', 'address', 'age', 'run'];
const values = [
  'Bob',
  'Ukraine',
  34,
  () => {
    console.log('run');
  },
];

const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
console.log(result);
console.log(result.run());
// console.log(buildObjectTest(keys, values));
