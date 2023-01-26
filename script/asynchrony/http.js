//?  fetch (принести)
//* специальный API внутри браузера
/* 
Метод fetch создаёт запрос на сервер и возвращает его ответ. 
На вход fetch принимает два аргумента. Первый — обязательный — URL запрашиваемого ресурса:
*/
// fetch('https://swapi.nomoreparties.co/people').then(res => {
//   console.log(res)
// })

//Второй аргумент — необязательный. Это объект опций. 
//Чаще всего нужны опции method, headers и body: 
//они отвечают за метод запроса, его заголовки и тело:

fetch('https://swapi.nomoreparties.co/people', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'ivan'
  })
});

/*
Метод fetch асинхронный. Когда вы его вызываете, он создаёт промис, а когда получает ответ — 
переводит промис в нужный статус. 
Ответ от сервера при этом записывается в промис, так что его можно использовать через then и catch: 
*/

fetch('https://example.com')
  .then((res) => {
    console.log(`Ответ 1: ${res}`); // если всё хорошо, получили ответ
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен');
  });

//! метод GET
/*
GET — самый распространённый метод. Данные обычно получают именно этим методом. 
Если метод не прописать явно, fetch будет отправлять запросы методом GET: 
*/
fetch('https://example.com')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
      console.log(data.user.name); // если мы попали в этот then, data — это объект
  })
  .catch((err) => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });

// ! метод POST
/*
Его используют для отправки данных на сервер. Чтобы послать запрос методом POST, 
нужно указать этот метод в объекте опций — втором аргументе метода fetch: 
*/

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'New massage',
      body: 'context'
      }),
    headers: {
      'Content-Type': "application/json; charset=UTF-8"
      }
}).then( res => res.json()).then(json => console.log(`Ответ 2 ${json}`)); // Ответ 2 {title: 'New massage', body: 'context'}

fetch('https://api.kanye.rest')
    .then(res => {
    console.log(res.status, res.statusText); // 200 OK
  });