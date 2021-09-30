const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorText = document.querySelector('.error-text');

const serverUrl = 'https://6141977c357db50017b3db7a.mockapi.io/api/v1/users2/';

const validateFormHandler = () => {
  if (loginForm.reportValidity()) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
};
loginForm.addEventListener('input', validateFormHandler);

// algo
// 1. read form - get user info +++
// 2. send data to server +++
// 3. handle server response

const createUserHandler = event => {
  event.preventDefault();

  // 1 option -- BAD
  // const user = {
  //   email: emailInput.value,
  //   name: nameInput.value,
  //   password: passwordInput.value,
  // };

  // option 2 -- GOOD
  const user = Object.fromEntries(new FormData(loginForm));

  fetch(serverUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(body => {
      loginForm.reset();
      alert(JSON.stringify(body));
    })
    .catch(() => {
      errorText.textContent = 'Failed to create user';
    });
};
loginForm.addEventListener('submit', createUserHandler);

// fetch(serverUrl, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(user),
// })
//   .then(response => {
//     if (response.status === 400) {
//       throw new Error('dsdsds');
//     }

//     if (response.status === 500) {
//       throw new Error('smth');
//     }
//     return response.json();
//   })
//   .then(body => {
//     loginForm.reset();
//     alert(body);
//   })
//   .catch(e => {
//     console.log(e);
//     errorText.textContent = 'Failed to create user';
//   });
