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
  let col = obj[item];
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