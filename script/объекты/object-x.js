//           🧰 Object.keys 🧰
// переводит объект в массив
const expenses = {
  'руп': 'на суп',
  'трёшку': 'на картошку',
  'пятёрку': 'на тетёрку', 
  'десятку': 'на куропатку',
  'сотку': 'на *одку'
};
const arrExpenses = Object.keys(expenses); // [ 'руп', 'трёшку', 'пятёрку', 'десятку', 'сотку' ]
console.log(arrExpenses);
// методом forEach  перебираем полученный массив при помощи Object.keys
arrExpenses.forEach(function (a) {
  console.log(a);
});

/* в консоли выводятся ключи:

  руп
  трёшку
  пятёрку
  десятку
  сотку

*/ 

/* 
 ✅
const expenses = {
    '100': 'на *одку',
    '10': 'на куропатку',
    '5': 'на тетёрку',
    '3': 'на картошку',
    '1': 'на суп'
};

Object.keys(expenses).forEach(function (a) {
    // для наглядности выведем вместе с ключами их значения 
    console.log(`${a} — ${expenses[a]}`);
});

 движок упорядочил ключи в порядке возрастания, 
и вывод получился практически как у Олейникова

    1 — на суп
    3 — на картошку
    5 — на тетёрку
    10 — на куропатку
    100 — на *одку

*/

// .           🧰 Object.entries и Object.values 🧰
// Метод Object.values возвращает значения всех свойств и методов объекта, а Object.entries — все пары «ключ-значение».

const paulMcCartney = {
  yesterday: 'all my troubles seemed so far away'
};

console.log( Object.values(paulMcCartney) ); // ["all my troubles seemed so far away"]
console.log( Object.entries(paulMcCartney) ); // [["yesterday", "all my troubles seemed so far away"]]

// ✅

const heights = {
  burjKhalifa: 828,
  tokyoSkyTree: 634,
  shanghaiTower: 632,
  abrajAlBait: 601,
  cantonTower: 600,
  pingAnFinanceCentre: 600,
  lotteWorldTower: 555,
  cnTower: 553,
  oneWorldTradeCenter: 541,
  ostankinoTower: 540
};

const stratoHeight = 11000;

const sumHeights = Object.values(heights).reduce((preV, elem) => preV + elem );

//console.log(sumHeights);
console.log(sumHeights >= stratoHeight);

// ✅

const mya = {
  'бремя': 'burden',
  'время': 'time',
  'вымя': 'udder',
  'мяч': 'ball',
  'знамя': 'banner',
  'имя': 'name',
  'мясо': 'meat',
};

Object.keys(mya).forEach(function (key) {
  if(!key.endsWith('мя')){
    delete mya[key];
  }
});

console.log(mya);

/*

  {
    бремя: "burden",
    время: "time",
    вымя: "udder",
    знамя: "banner",
    имя: "name"
  }

*/

// ✅ поменять местами ключ и значения

function swap(obj) {
  const res = {};

  // добавьте в res ключи и значения obj, поменяв их местами
Object.keys(obj).forEach( item => {
  //        myObj[fitst] // 1
  let col = obj[item];
  // {}[1]  // first
  res[col] = item;
});
  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3
};

console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }

// ✅ функция копирования объектов

function copy(obj) {
  // напишите свой код здесь
  const res = {};
  
  Object.keys(obj).forEach(function (key) {
//{}[one]/one=  1 // one: 1,
    res[key] = obj[key];
  });
  return res;
}

const firstObj = {
	one: 1,
	two: 2,
	three: 3
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { one: 1, three: 3, two: 2 }
console.log(secondObj); // { one: 1, three: 3, two: 2 }
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;

console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// thirdObj не изменился
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

//                    🧰 Поверхностное копирование объектов  Object.assign 🧰

const firstObjTest = {
  din: 1,
  don: 2
};

const secondObjTest = Object.assign({}, firstObjTest);
console.log(secondObjTest);
console.log(secondObjTest === firstObjTest); // false 

const tutObj = {
  'первый пошел': true,
  'второй пошел': 2022,
  сюрприз: {
    0: 'тоже число'
  }
}

const tamObj = Object.assign({}, tutObj);

console.log(tutObj['второй пошел'] === tamObj['второй пошел']); // true
console.log(tutObj["сюрприз"] === tamObj["сюрприз"]); // true

// ✅ Функция которая создавет новый объект-копию и уже туда записывает новое свойство.

function evolution(obj, key, value) {
  const newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}

const fish = {
  eggs: 'икра',
  eyes: 2,
  home: 'вода'
};

const frog = evolution(fish, 'legs', 4);

console.log('лягушка: ', frog);

// лягушка: { eggs: икра, eyes: 2, home: вода, legs:4 }

console.log('рыба: ', fish);

// рыба: { eggs: "икра", eyes: 2, home: "вода" }

// 🧰 Глубокое копирование объектов 🧰

const original = {
  one: 1,
  two: 2,
  three: { message: 'I love JS' }
};

const copyOriginal = Object.assign({}, original);
copyOriginal.three = Object.assign({}, original.three);

// копия
console.log(copyOriginal);

// { one: 1, two: 2, three: { message: "I love JS" } } 

// копия имеет общие корни с оригиналом?
console.log(copyOriginal === original); // false

// свойство three копии имеет общие корни
// со свойством three оригинала?
console.log(copyOriginal.three === original.three); // false

// ✅

const aladdinSane = {
  artist: 'David Bowie',
  album: 'Aladdin Sane',
  year: 1973,
  tracks: {
    'Watch That Man': '4:30',
    'Aladdin Sane': '5:06',
    'Drive-In Saturday': '4:33',
    'Panic in Detroit': '4:25',
    'Cracked Actor': '3:01',
    'Time': '5:15',
    'The Prettiest Star': '3:31',
    "Let's Spend the Night Together": '3:10',
    'The Jean Genie': '4:07',
    'Lady Grinning Soul': '3:54'
  }
};

const aladdinSaneCopy = Object.assign({}, aladdinSane);
aladdinSaneCopy.tracks = Object.assign({}, aladdinSane.tracks);

console.log(aladdinSane.tracks === aladdinSaneCopy.tracks); // false

//  Массивы — это объекты

const arrObj = [1, 2, 3];
arrObj.four = 4;

console.log(arrObj.four); // 4
console.log(arrObj); // [1, 2, 3, four: 4] — можно и весь arr вывести, так забавнее