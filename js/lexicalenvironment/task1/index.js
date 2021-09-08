/* eslint-disable */

/*
  // global
  {
    "environmentRecord": {
      'message': 'Test',
      'weight': 55s,
      'createMessenger': func,
      ....
    },
    'outherLexicalEnv': null
  }

  // createMessenger
  {
        "environmentRecord": {
        'message': 'Just learn it',
        'sender': 'Gromecode',
        'sendMessage': func,
        ...
    },
    'outherLexicalEnv': global
  }

  // run
  {
    "environmentRecord": {},
    "outherLexicalEnv": global
  }
  // sendMessage
    "environmentRecord": {},
    "outherLexicalEnv": createMessanger
*/

const message = 'Test';
const weight = 55;

// Лексическое окружение также создается при блоках кода {}
// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
if (true) {
  const currentDay = 'Monday';
  console.log(message);
}
// console.log(currentDay);
// le живёт до момента выполнения кода и пока на него ссылаються

// замыкание когда функция ссылаеться на  себя и на даёт удалить своё LE
function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

// console.log(sender); is not defined

createMessenger();
// после выполнения сразу удаляеться LE, потому что никто на него не ссылаеться

const messanger = createMessenger(); // замыкание

const messanger1 = createMessenger(); // замыкание
messanger1.setSender('Nova poshta');
messanger1.sendMessage('Andrey');

const messanger2 = createMessenger(); // замыкание
messanger2.setSender('Rozetka');
messanger2.sendMessage('Denis');
messanger2.sendMessage('Yevgen');

const messanger3 = createMessenger(); // замыкание

messanger.sendMessage('TestName');

run();
// scope область видимости за которыми переменные не видны