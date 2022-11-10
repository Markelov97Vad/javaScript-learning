// Функции — блоки кода, которые можно использовать несколько раз.

// объявляем функцию sayHello
function sayHello() {
  console.log('Привет');
}

// вызываем её
sayHello(); // "Привет" 

// Пример

function multiply(a, b) { // функция принимает множители
  return a * b; // и возвращает произведение
}

multiply(2, 3); // 6 

//                                                Область видимости функции

let batteriesNumber = 12;
let batteriesInTetris = 4;

function findBatteries() {
  const batteriesNumber = 8;

  /* внутри функции есть идентификатор batteriesNumber
  именно это значение оказывается в консоли */
  console.log(batteriesNumber); // 8

  /* внутри функции такого идентификатора нет,
  поэтому движок взял значение из кода снаружи */
  console.log(batteriesInTetris); // 4
} 


// Пример


/* Здесь глобальная область видимости */
const i = 'Internet';

function callMe() {
    /* А здесь область видимости функции callMe */
    console.log(i + 8000); // возьмёт a из глобальной области
}

function callMeToo() {
  console.log(i + 9000); // тоже возьмёт a из глобальной области
}

callMe(); // Internet8000
callMeToo(); // Internet9000 

// Пример

// здесь глобальная область видимости

const e = 1; // это глобальная переменная

function callMe() {
  // а здесь область видимости функции callMe

  let b = 2; // это локальная переменная функции callMe
} 

// Пример

const w = 1;

function callMe() {
  const b = 2;

// функция callMeToo вложена в CallMe
  function callMeToo() {
        const c = 3;

    console.log(w);
    console.log(b);
    console.log(c);
  }

  callMeToo();
}

callMe();

// 1 
// 2
// 3 

/* Если в теле функции обратиться к идентификатору, движок JavaScript сначала ищет его в теле этой функции, 
и уже потом снаружи. Поэтому если и снаружи, и внутри есть одинаковые идентификаторы, 
движок остановится на внутреннем, а внешний — проигнорирует.*/

const f = 'Hello';

function callMe() {
    const f = 'world';

    console.log(f);
}

callMe(); // "world" 

// пример

function callMeFromTheInside() {
  console.log('Hello');
}

function callMe() {
  function callMeFromTheInside() {
    console.log('world');
  }
  console.log(callMeFromTheInside());
}

callMe(); // "world" 

//                                              способ создания функций  Function Declaration

function multiply(a, b) {
  return a * b;
} 
multiply(2, 3); // 6 

//                                              способ создания функций  Function Expression

// запишем функцию в переменную multiply
const multiplySecond = function (a, b) {
  return a * b;
};

// её можно вызвать по имени
multiplySecond(2, 3); // 6 

// функции находится в составе выражения — вызова метода 

element.addEventListener('click', function () {
  console.log('Клик');
 }); 

//                                                       Использование анонимных функций 
// function (a) {
//  console.log(a);
//}

// Будет ошибка 

//                      функциональное выражение может быть анонимным. Это распространённый приём создания колбэков:

// переданная методу функция анонимна — у неё нет имени
element.addEventListener('click', function () {
  console.log('Клик');
 });
 
const arrFunctiun = [1, 2, 3];
 
// эта функция тоже анонимна
arrFunctiun.map(function (item) {
   return item * 2;
  }); 

 // Мы передаём функцию методу, и потом она нам не нужна. Поэтому нет смысла давать ей имя.

 //                                                    Возможность вызова до объявления

 // сначала вызвали функцию
console.log(double(2)); // 4

// а потом объявили
function double(num) {
  return num * 2;
}
/*
double(2); // ошибка

const double = function (num) {
  return num * 2;
}; 
*/

// Function Declaration
function double(num) {
  return num * 2;
}

// Function Expression
const triple = function (num) {
  return num * 3;
};

double(2); // 4
triple(2); // 6 

//
function createFunction() {
  function simpleFunction() {
    console.log('Меня вернули, а затем вызвали!');
  }

  /* мы не вызываем функцию, а возвращаем её */
  return simpleFunction;
}

// в newFunction запишется ссылка на simpleFunction
const newFunction = createFunction();

newFunction(); // "Меня вернули, а затем вызвали!" 

//


function makeHelloWorld() {
  function helloWorld() {
    console.log('Hello World!');
  }
  return helloWorld;
};

const dropFunc = makeHelloWorld();
dropFunc();

