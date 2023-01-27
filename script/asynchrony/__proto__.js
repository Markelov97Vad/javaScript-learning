/*
У каждого объекта в JS есть свойство __proto__. Оно позволяет одному объекту обращаться к свойствам другого.
Прототип объекта — это другой объект, где движок будет искать свойство или метод, если их нет в исходном объекте.  
*/


const obj1 = {
  messegeRu: 'Привет, Мир!'
};

const obj2 = {
  messegeEn: 'Hello, World!'
}

obj2.__proto__= obj1;

console.log(obj2.messegeRu);  //* 'Привет, Мир!'
console.log(obj2.messegeRu === obj1.messegeRu); // * true
console.log(obj2);

const obj3 = {
  messageGe: 'ამარჯობა, მსოფლიო!'
};

const obj4 = {
  messageIt: 'Ciao mondo!'
};

const obj5 = {
  messageFrench: 'Bonjour le monde!'
};

obj3.__proto__ = obj2
obj4.__proto__ = obj3;
obj5.__proto__ = obj4;

console.log(obj5.messageGe); // 'ამარჯობა, მსოფლიო!'

// ! Метод Object.create

// это будет прототип объекта-песни
const songPrototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  }
};

// создаём пустой объект с указанным прототипом
function createNewSong (title,artist) {
  const newSong = Object.create(songPrototype);
  newSong.title = title;
  newSong.artist = artist;
  newSong.isLiked = false;

  return newSong
}

const songAdd1 = createNewSong('Футбольный мяч','Антоха MC');
const songAdd2 = createNewSong('На заре', 'Альянс');

console.log(songAdd1); // { title: 'Футбольный мяч' ... }
console.log(songAdd1.like === songAdd2.like); // true


// ? Метод Object.create создаёт новый пустой объект с указанным прототипом:
const objPrototype = {
  foo: function() {
    console.log('foo');
  }
};

const obj = Object.create(objPrototype);

console.log(obj); // {} — пустой объект
console.log(obj.__proto__); // { foo: ƒ } — прототип


// ! Функция-конструктор
/*
Функции, предназначенные для того, чтобы их вызывали с оператором new, называют функциями-конструкторами. 
Их основная задача — «сконструировать» какой-то новый объект, в нашем случае объект песни. 
Отсюда и название.
 */
function SongFuncConstruct(title, artist) {
  // this = {}; — движок сделает это сам

  // Добавим в this необходимые свойства
  this.title = title;
  this.artist = artist;
  this.isLiked = false;

  // return this; —  это движок тоже берёт на себя
}

SongFuncConstruct.prototype.like = function () {
  this.isLiked = !this.isLiked;
}
console.clear()
const soNew = new SongFuncConstruct('На заре', 'Альянс');
console.log(soNew);
console.log(soNew.isLiked); // * false
soNew.like();
console.log(soNew.isLiked); // * true

// ? У встроенных функций-конструкторов есть и свойство prototype. 
// ? Когда мы создаём новый массив, в его свойство __proto__ попадает объект, хранящийся в Array.prototype:
const arrNewArray = new Array(1, 2, 3);
const arrNewArray1 = [];

//console.log(`У встроенный функций конструкторов есть свойство prototype? Ответ: ${arrNewArray1.__proto__ === Array.prototype}`); // true, потому что свойство __proto__ ссылается на Array.prototype

Array.prototype.arrNewArray1 = [ 
  1,
  2,
  3
]
console.clear()
console.log(`У встроенный функций конструкторов есть свойство prototype? Ответ: ${arrNewArray1.__proto__ === Array.prototype}`);
// const ddd = arrNewArray1.__proto__.forEach(el => {
//   console.log(el)
// })
console.log(arrNewArray1);
arrNewArray1.push(1, 3, 4)
console.log(arrNewArray1);
console.log(arrNewArray1.arrNewArray1)

const objProt = {};
const numProt = 4;
const strProt = 'Привет';
const boolProt = true;
const funcProt = function () {
  console.log('Hello world!');
};

console.log(objProt.__proto__ === Object.prototype); // true
console.log(numProt.__proto__ === Number.prototype); // true
console.log(strProt.__proto__ === String.prototype); // true
console.log(boolProt.__proto__ === Boolean.prototype); // true
console.log(funcProt.__proto__ === Function.prototype); // true

console.log( String.prototype);

// https://pictures.s3.yandex.net/resources/sprint_4___1__216_1592650608.jpg

console.log(String.prototype.__proto__ === Object.prototype); // true
console.log(Number.prototype.__proto__ === Object.prototype); // true
console.log(Boolean.prototype.__proto__ === Object.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true

/*
? Если метод массива не найден в Array.prototype, движок продолжит поиски в Object.prototype. 
? То есть у массивов есть все методы, которые есть у объектов. 
? А благодаря звену Array.prototype, у массива есть дополнительные методы. 
? Массив имеет доступ ко всем методам объекта и дополняет его своими. 
? Принято говорить, что Array.prototype «наследует» от Object.prototype. 
*/

console.log([5, 10, 23].hasOwnProperty()) // true // * метод Обекта

const interstellar = [1, 2, 3];
console.clear()
console.log(interstellar.__proto__); // выведет Array.prototype
console.log(interstellar.__proto__.__proto__); // выведет Object.prototype