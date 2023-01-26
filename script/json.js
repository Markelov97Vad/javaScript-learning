// ? JavaScript object natation
//Объектная запись JavaScript.

/*
Строка должна быть JSON-совместимой, то есть:
  на верхнем уровне должен быть объект или массив;
  ключи и значения-строки должны быть в двойных кавычках;
  кроме строк JSON может содержать числовые, булевы значения или null.
 */

// console.log(JSON); // JSON {объект...}

const objForJSON = {
  first: true,
  second: 100
}
// метод stringfly переведет объект в формат JSON
//JSON.stringify(objForJSON);
const nextStringify = JSON.stringify(objForJSON);

console.log(nextStringify); // {"first":true,"second":100}
// ? JSON.parse // преобразовывает JSON-строку в объект JavaScript
const nextParce = JSON.parse(nextStringify);

console.log(nextParce); // Object { first: true, second: 100 }
console.log(typeof nextParce); // Object

// ? res.json

fetch('https://praktikum.yandex.ru')
  .then(res => {
    return res.json(); // возвращаем результат работы метода и идём в следующий then
  })
  .then( data => {
    console.log(data.user.name);  // если мы попали в этот then, data — это объект
  })
  .catch(err => {
    console.log('ошибка, чтото пошло не так');
  })

