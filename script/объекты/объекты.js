//              🔷 Объекты 🔷

const car = {
  //ключ // значение свойств
  model: 'ВАЗ 2101',
  year: 1983,
  doors: 4,
  hasAirConditioner: false
};

//  🧰 обьект в обьекте 🧰

const car2 = {
  model: 'ВАЗ 2101',
  year: 1983,
  doors: 4,
  hasAirConditioner: false,
  owner: {
    name: 'Пётр',
    age: 42
  }
}; 

let stringName = 'Егор'
let objact = {
  name: 'Вадим',
  age: 25,
  [stringName]: true,
};

console.log(objact[stringName]);


// 🧰 можно обратиться через точку 🧰

const objactT = {
  one: 1,
  two: 2,
  three: 3
};

console.log(objactT.one); // 1
console.log(objactT.two); // 2
console.log(objactT.three); // 3 

// 🔴 Ошибки не будет. При обращении к свойству, которого в объекте нет, вернётся undefined.

// 🧰 Необязательно записывать свойства объекта при его создании. Это можно сделать и позже 🧰

// ✅ запишем ещё одно
objactT.four = 4;

console.log(objactT.four); // 4

// 🧰 Свойству можно присваивать значения уже существующих переменных: 🧰

const human = {};
const mom = 'мама';

human.mama = mom;

console.log(human.mama); // "мама" 

// 🧰 Если переменную после этого переопределить, свойство останется прежним: 🧰
let friend = 'друг';

const anybody = {
  friend: friend
};

friend = 'И не друг, и не враг, а так...';

console.log(anybody.friend); // "друг"

// 🧰 Точно так же можно записать в свойство объекта функцию: 🧰

const father = function () {
  console.log('Люк, я твой отец!');
};
const another = {
  father: father
};

console.log(another.father());

/* в ES2015 появился новый способ добавить свойство при объявлении объекта. 
Теперь свойство из переменной можно записать коротко, без дублирования: */

const humanT = 'Дядя Фёдор';
const catT = 'Матроскин';
const dogT = 'Шарик';

function getCartoonName() {
  return 'Трое из Простоквашино';
}

const cartoon = {
  humanT,
  catT,
  dogT,
  getCartoonName
};

/* Если свойств не очень много, можно уместить запись в одну строку:
    🔸 const cartoon = { human, cat, dog, getCartoonName };  
*/

// 🧰 Обращение к свойству 🧰

const myFavObf = {
  cantry: 'Russia',
  'Навсегда я тут': false,
  'Буду скучать': true
}

console.log(myFavObf["Навсегда я тут"]); // false

// 🧰 Ключ-переменная 🧰

const objT = {
  one: 1
};

const keyTObj = 'one';

console.log(objT[keyTObj]); // 1 

// ✅

const welcomeT = {
  'добро пожаловать': 'или посторонним вход воспрещён'
};

const part1 = 'добро';
const part2 = 'пожаловать';

const keyForWelcomeT = `${part1} ${part2}`;

console.log(welcomeT[keyForWelcomeT]); // "или посторонним вход воспрещён"

// ✅ Или если мы не знаем имени ключа — например, получаем его от пользователя:

const objColor = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
};

//const keyForObjColor = prompt('red, green или blue?'); // пользователь вводит, например, red

//console.log(objColor[keyForObjColor]); // "#f00"


// ✅ 

const birthday = {
  vadim: {
      month: 'март',
      day: 31
  }    ,
  lena: {
      month: 'апрель',
      day: 27
  }
};

console.log(birthday.lena.month); // "апрель"
console.log(birthday['lena']['month']); // "апрель"

let t = 'vadim';
let p = 'month';

birthday[t][p] = 'декабрь'

console.log(birthday.vadim.month); // 'декабрь'

birthday['саша'] = 'июнь';
birthday['day'] = '6';
birthday[1] = 'единица';
birthday[true] = 'истина';

console.log(birthday['саша']);
console.log(birthday['day']);
console.log(birthday['1']); // "единица"
console.log(birthday['true']); // "истина" 
console.log(birthday); /*{
  '1': 'единица',
  vadim: { month: 'декабрь', day: 31 },
  lena: { month: 'апрель', day: 27 },
  'саша': 'июнь',
  day: '6',
  true: 'истина'
} */

// ✅ 

const welcomeMessages = {
  russian: 'Добро пожаловать',
  english: 'Welcome',
  french: 'Bienvenue',
  italian: 'Benvenuto',
  spanish: 'bienvenido',
  chinese: '歡迎',
  finnish: 'Tervetuloa'
};

function addWelcomeMessage(language, message) {
  welcomeMessages[language] = message;
}

addWelcomeMessage('danish', 'Velkommen');
addWelcomeMessage('zulu', 'Ukwamukela');

console.log(welcomeMessages.danish); // "Velkommen"
console.log(welcomeMessages.zulu); // "Ukwamukela"

// ✅ 

const phonebook = {
  'Тёма': {
    mobile: '+79995164420',
    work: '+79569172374',
    home: '+78123552223'
  },
  'Вася брат Андрея': {
    mobile: '+79045174415'
  }
};


function addPhoneNumber(name, numberType, number) {
  if (!phonebook[name]){
    phonebook[name] = {};
  };
  phonebook[name][numberType] = number;
  
};

// когда функция будет готова, добавьте мобильный Анастасии Павловны
addPhoneNumber('Анастасия Павловна', 'mobile', '+79111545616');

console.log(phonebook['Анастасия Павловна'].mobile); // "+79111545616"

// ✅ 
// если такого ключа нет, то выведет 0
const yourNumber = 'Л059';
let windowNumber;

const windows = {
  'Л054': 1,
  'Л055': 2,
  'Л056': 3,
  'Л057': 4,
  'Л058': 5
};

windowNumber = windows[yourNumber] || 0;

console.log(windowNumber); // 0
