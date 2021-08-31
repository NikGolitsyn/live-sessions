// bad
// const withdraw = (clients, balances, names, amount) => {
//   let result = 0;
//   clients.forEach(function (client, index) {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// good
// const withdraw = (clients, balances, clientName, amount) => {
//   // const withdraw = (clients, balances, client, amount) =>
//   //   balances[clients.indexOf(client)] < amount ? -1 : (balances[clients.indexOf(client)] -= amount);
//   const clientIndex = clients.indexOf(clientName);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// };

// bad
// function withdraw(clients, balances, client, amount) {
//   let i = 0;
//   for (; i < clients.length; ++i) {
//     if (clients[i] === client) {
//       break;
//     }
//   }

//   balances[i] -= amount;
//   console.log(balances);
//   return balances[i] > 0 ? balances[i] : -1;
// }

// good
// function withdraw(clients, balances, client, amount) {
//   let clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// }

// bad
// const withdraw2 = (clients, balances, client, amount) => {
//   let clientNum = clients.indexOf(client);

//   const newBalances = balances.map(num => {
//     if (num >= amount) {
//       return num - amount;
//     }
//     return -1;
//   });
//   return newBalances[clientNum];
// };

// /// test data
// const clients = ['Denis', 'Andrey', 'Jack'];
// const balances = [100, 80, 1200];
// const client = 'Jack';
// const amount = 500;
// console.log(withdraw2(clients, balances, client, amount));
// console.log(balances);

// bad
// const withdraw = (clients, balances, client, amount) => {
//   //put your code here
//   let ind = clients.indexOf(client);
//   let bal = balances[ind];
//   return bal < amount ? -1 : (balances[ind] -= amount);
// };

// good
const withdraw = (clients, balances, client, amount) => {
  //put your code here
  const index = clients.indexOf(client);
  // const res = balance < amount ?  -1 : (balances[index] -= amount);
  return balance < amount ? -1 : (balances[index] -= amount);
};

// bad
// function withdraw(clients, balances, client, amount) {
//   let indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] >= amount) {
//     balances[indexOfPerson] -= amount;
//     return amount;
//   }
//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }
// }

//good
// function withdraw(clients, balances, client, amount) {
//   let indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }

//   balances[indexOfPerson] -= amount;
//   return balances[indexOfPerson];
// }

// bad
// function withdraw(clients, balances, client, amount) {
//   let output = 0;
//   const indexOfPerson = clients.indexOf(client);

//   if (balances[indexOfPerson] >= amount) {
//     output = balances[indexOfPerson] - amount;
//     return output;
//   }
//   output = -1;

//   return output;
// }

// const MAX_AMOUNT = 4;
// if (balances[indexOfPerson] < 4(MAX_AMOUNT) && client === 'test ---- magical numbers and strings)

// good
// function withdraw(clients, balances, client, amount) {
//   const indexOfPerson = clients.indexOf(client);

// console.log(indexOfPerson);
// console.log(balances[indexOfPerson]);

//   if (balances[indexOfPerson] < amount) {
//     return -1;
//   }

//   balances[indexOfPerson] -= amount;
//   return balances[indexOfPerson];
// }

//..
// const users = [10, 24, 15, 43, 40, 33, 21, 22];
// console.log(users.filter(age => age > 18).length);

// let count = 0;
// users.forEach(el => {
//   if (el > 18) {
//     count += 1;
//   }
// });
// console.log(count);
