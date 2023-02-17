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

// ? apply

const carApply = {
  registrationNumber: 'O287AE',
  brand: 'Tesla'
};

function displayDetails(greeting, ownerName) {
  console.log(`${greeting} ${ownerName}`);
  console.log(`Car info: ${this.registrationNumber} ${this.brand}`);
}

displayDetails.apply(carApply, ['Hello', 'Matt']);

/*

  Hello Matt
  Car info: O287AE Tesla

*/ 

function Human(name) {
  this.name = name;
}

const bob = new Human('Bob');

console.log(bob) // Human { name: 'Bob' }

// https://pictures.s3.yandex.net/resources/JS4_3___1__3_1593431558.jpg

/*
? Когда функцию вызывают с оператором new, движок автоматически выполняет три действия:
* Конструирует новый объект.
* Устанавливает этот объект в значение this для вызванной функции.
* Возвращает this.
*/

function Plane(model) {
  this.model = model;

  return { model: 'TU-134' };
}
let asse  = { he: 'офигеть какой самолет'}
const airbus = new Plane(asse);

console.log(airbus); // { model: 'TU-134' } 

// Поскольку this у стрелочной функции определяется только местом её объявления, 
//вызов стрелочных функций методами call или apply никак не влияет на значение this.

function Frontender() {
  this.profession = 'Frontend Developer';
  this.printProfession = () => {
     console.log('I am a ' + this.profession);
  };
}

const backender = {
profession: 'Backend Developer'
};

const frontender = new Frontender();

frontender.printProfession.call(backender); // "I am a Frontend Developer"
frontender.printProfession.apply(backender); // "I am a Frontend Developer"

const boundPrintProfession = frontender.printProfession.bind(backender);

boundPrintProfession(); // "I am a Frontend Developer"

// Функция-конструктор устанавливает в this созданный объект. 
// Но у стрелочной функции своего this быть не может, поэтому вызвать с new её нельзя.

const arrowFunction = () => {
  console.log(this);
};

//! const obj = new arrowFunction(); // TypeError: arrowFunction is not a constructor