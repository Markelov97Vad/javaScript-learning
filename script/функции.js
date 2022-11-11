// Функции — блоки кода, которые можно использовать несколько раз.

// объявляем функцию sayHello
function sayHello() {
  console.log('Привет');
}

// вызываем её
sayHello(); // "Привет" 
// Код функции не отработает, если она не вызвана.

// Пример

function multiplyFirst(a, b) { // функция принимает множители
  return a * b; // и возвращает произведение
}

multiplyFirst(2, 3); // 6 

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

// // // // // Пример

// здесь глобальная область видимости

const e = 1; // это глобальная переменная

function callMe2() {
  // а здесь область видимости функции callMe

  let b = 2; // это локальная переменная функции callMe
} 
// // // // //
// Пример

const w = 1;

function callMe3() {
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

callMe3();
// 1 
// 2
// 3 

/* Если в теле функции обратиться к идентификатору, движок JavaScript сначала ищет его в теле этой функции, 
и уже потом снаружи. Поэтому если и снаружи, и внутри есть одинаковые идентификаторы, 
движок остановится на внутреннем, а внешний — проигнорирует.*/

const f = 'Hello';

function callMe4() {
    const f = 'world';

    console.log(f);
}

callMe4(); // "world" 

// пример

function callMeFromTheInside() {
  console.log('Hello');
}

function callMe5() {
  function callMeFromTheInside() {
    console.log('world');
  }
  console.log(callMeFromTheInside());
}

callMe5(); // "world" 

//                                              способ создания функций  Function Declaration

function multiplyDecl(a, b) {
  return a * b;
} 
multiplyDecl(2, 3); // 6 

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
// /////////////
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
////////////////
//

//


function makeHelloWorld() {
  function helloWorld() {
    console.log('Hello World!');
  }
  return helloWorld;
};
console.log(makeHelloWorld());
const dropFunc = makeHelloWorld();
dropFunc(); // 'Hello World!'

//                                                 Функции — это значения

// Записываем функцию в переменную
const multiplyFunc = function (a, b) {
  return a * b;
};

multiplyFunc(2, 3); // 6

// передаём функцию как аргумент
const resultTest = [1, 2, 3].reduce(multiplyFunc);
console.log(resultTest); // 6 - произведение всех чисел в массиве 



// Функцию даже можно вернуть из другой функции:



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


//                                                       Cтрелочные функции

// функциональное выражение
const consoleCat = function (cat) {
  console.log('cat');
};
consoleCat();
// стрелочная функция
const consoleWombat = (wombat) => {
  console.log('wombat');
};
consoleWombat();

// Если директива return — единственное действие в теле стрелочной функции, можно опустить и директиву return, и фигурные скобки:

/* эти функции идентичны */
const singleAnecdote = (anecdote) => {
  return `я знаю только один анекдот: ${anecdote}`;
};

const shorterSingleAnecdote = (anecdote) => `я знаю только один анекдот: ${anecdote}`;

// Если возвращаемое значение — объект, его нужно заключить в круглые скобки. 
// Иначе то, что в фигурных скобках, движок воспримет как тело функции:

// вот так правильно
const colorHex = () => ({ white: '#FFF' });

// а вот так не сработает
const colorHexWhite = () => { white: '#FFF' }; 

// Если у стрелочной функции один параметр, можно не заключать его в скобки:

// несколько параметров стрелочной функции указывают в скобках 
const boatDeparture = (eater, food) => {
  console.log(`через речку в лодке поплывут ${eater} и ${food}`);    
};

boatDeparture('козёл', 'капуста');

// через речку в лодке поплывут козёл и капуста

// если параметр один, скобки необязательны 
const boatArrival = survivor => {
  console.log(`до другого берега доберётся только ${survivor}`);
};

boatArrival('козёл'); // до другого берега доберётся только козёл 

//                                                       Стрелочные функции как коллбэки

const arrayCallBack = [1, 2, 3, 4];

arrayCallBack.forEach(() => {
  console.log('Кнопка нажата!');
});

//

const arrayReturn = [1, 2, 3, 4];

const newArray = arrayReturn.map(elem => elem * 2); 

// В ES6 появилась возможность задать значение аргумента по умолчанию:
function generateName(firstName, lastName, middleName = '') {
  return `${firstName} ${middleName} ${lastName}`;
}

generateName('Маша', 'Петрова'); // Маша  Петрова
generateName('Мария', 'Петрова', 'Ивановна'); // Мария Ивановна Петрова 

// Параметр по умолчанию может принимать любое значение: число, строку, объект, функцию. 
// Это значение будет присвоено параметру, если аргумент не передан или равен undefined.

function generateName(firstName, lastName = '<без фамилии>', middleName = '<без отчества>') {
  return `${firstName} ${middleName} ${lastName}`;
}

generateName('Маша', 'Петрова'); // Маша <без отчества> Петрова
generateName('Маша', 'Петрова', undefined); // Маша <без отчества> Петрова
generateName('Маша', 'Петрова', null); // Маша null Петрова
generateName('Маша', 'Петрова', ''); // Маша  Петрова
generateName('Мария', 'Ивановна'); // Мария Ивановна <без фамилии>

//                                             Функции с неопределённым числом аргументов
// В ES6 появился новый оператор: ... (три точки). 
// В зависимости от контекста применения и ожидаемой функциональности эти три точки ... называют либо spread, либо rest.


// spread
const numsXxx = [4, 8, 15, 16, 23, 42];

/* Оператор spread разложит массив на отдельные
аргументы: 4, 8, 15 и так далее */
console.log(Math.max(...numsXxx)); // 42


// rest
// Они выполняют действие, обратное оператору spread: собирают отдельные параметры функции в массив:
// Внимание: rest-параметр всегда стоит в конце.

function consoleDogs(firstDog, ...otherDogs) {
  console.log(`Первый: ${firstDog}`);
  console.log(`Остальные: ${otherDogs}`);
}

consoleDogs('Спаниель', 'Овчарка', 'Борзая', 'Метис')
/* В консоль будет выведено:
  Первый: Спаниель
  Остальные: ['Овчарка', 'Борзая', 'Метис']
*/

//                                             Старый код. Переменная ARGUMENTS
// В старом коде, до появления оператора spread, можно встретить другой способ работы с такими функциями — переменную arguments.
function gimmeSomeArguments() {
  console.log(arguments);
}

gimmeSomeArguments(1, 2); // [1, 2]
gimmeSomeArguments('a', 'b', 'c', 'd', 'e'); // ['a', 'b', 'c', 'd', 'e']max 

//

function max(...args) {
  let result = args[0];

  for (let i = 0; i < args.length; i += 1) {
    if (result < args[i]) {
      result = args[i];
    }
  }

  return result;
}

console.log(max(4, 8, 15, 16, 23, 42)); // 42