//input obj
//output undefined
function saveUser(userData) {
  // input url, other params method, header, body, type
  // output promise with respond
  const res = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData), // then это подписка на ассинхронный код, the оборачивает результат callback в промис
  })
    .then(response => {
      // input callback
      // output promise
      console.log(response.status);

      return response.json();
    })
    .then(body => {
      console.log(body);
    });

  console.log(res);
}
// input promise
// output

// test data
const user = {
  email: 'test@gmail.com',
  firstName: 'Nikita',
  lastName: 'Golitsyn',
  city: 'Kiev',
  age: 18,
};

console.log(JSON.stringify(user));

saveUser(user);
