//       🧰 this 🧰
// Свойство this — это ключевое слово, которое доступно внутри любой функции. 
//В зависимости от способа вызова функции this принимает разные значения.
// свойство this хранит ссылку на объект, на котором она вызвана:
// Значение this зависит только от того, на каком объекте вызвана функция, а не в каком объекте она хранится.

const objThis = {
  keyOne: 'Свойство',
  method: function () {
      console.log(this); // выведем значение this
  }
}

objThis.method(); // https://pictures.s3.yandex.net/resources/JS4_2___1__3_1560772888_1589621901.jpg

/* 
Установить значение this в функции в зависимости от точки вызова можно так: 
*По умолчанию.
*При вызове функции как метода объекта.
*Явной привязкой методами call, apply и bind.
*При вызове функции с оператором new.
*/

// 🧰 По Умолчанию 🧰
function globalFunction() {
  console.log(this);
}
console.clear()
globalFunction(); // Window — this ссылается на глобальный объект window 

// ✅

// window.hiMyNameIs = 'What?';

// function slimShady() {
//   console.log(this.hiMyNameIs);
// }

// slimShady();

//       🧰  Явная привязка. Метод bind 🧰

// chopVegetables - овощерезка
function chopVegetables() {
  console.log(`Chop ${this}`);
}
// 🥒 🍆 🥕
const boundChopVegetables = chopVegetables.bind('🥒');

boundChopVegetables();
/*
 Chop 🥒
*/ 
//  ✅

const car = {
  registrationNumber: 'O287AE',
  brand: 'Tesla'
};

function displayDetails(ownerName, greeting) {
  console.log(`${greeting} ${ownerName}`);
  console.log(`Car info: ${this.registrationNumber} ${this.brand}`);
}

// создаём новую функцию с привязанным контекстом. Где бы мы ни вызвали функцию boundDisplayDetails, значением this внутри неё всегда будет объект car
const boundDisplayDetails = displayDetails.bind(car);

// теперь можно вызвать её просто по имени — к ней привязан контекст
boundDisplayDetails('Matt', 'Hello');

/*

  Hello Matt
  Car info: O287AE Tesla

*/ 

function like() {
  this.isLiked = !this.isLiked;
}

function getSongInfo() {
  return `${this.artist} - ${this.title} (${this.releaseYear})`;
}

function createSong(title, artist, releaseYear) {
  const newSong = {
    title,
    artist,
    isLiked: false,
    like: like,
    releaseYear,
    getSongInfo: getSongInfo
  }

  return newSong;
}

//? call 

const nameUser = {
  parName: 'Vadim',
  funcName (surname) {
    console.log(`${surname} ${this.parName}`);
  }
}

const constNameUser = nameUser.funcName;
constNameUser.call(nameUser, 'Markelov');