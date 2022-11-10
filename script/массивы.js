//Создание пустого массива
const emptyArr = [];
// Более сложный метод
const arr = new Array(56, "string");
// Более простой метод
const easyArr = [44, "string", true, 0, -55];
// Поиск элемента по индексу
easyArr[2];
// Присвоить другой элемент списку
easyArr[2] = false;
// Длинна массива
easyArr.length;

//                                                Многомерные массивы

let arr1 = ["str", 34, -4, null];
let arr2 = [4000000, Object, undefined, "str"];
let arr3 = [22.3, Infinity, 4434, -5];

let grupArr = [arr1, arr2, arr3];

// Показать весь список
console.log(grupArr);
// Узнать элемент по индексу массива
grupArr[1][3];

// Другой вариант записи
let bigArr = [
  [33, "string", null, 44.8],
  ["string", -398, -Infinity, undefined],
  [Object, 43, "string", false],
];

// Замена значения элемента в списке
bigArr[2][2] = "newString";
// Показать весь список
console.log(bigArr);

// Добавить массив, который нельзя по новой объявить
const brothers = ["Вадим", "Саша"];
brothers.push("Дима"); // метод который добавляет в конец массива // меняет исходный массив
brothers.pop(); //метод который извлекает из конца массива // меняет исходный массив
brothers.shift(); // извлекает элемент из начала массива // индексы элементов после изменений поменяются // меняет исходный массив
brothers.unshift("Вадим"); // добавляет элементы в начало // индексы элементов после изменений поменяются // меняет исходный массив
console.log(brothers);

//                                                Добавление элементов. Метод CONCAT
//                                                    не меняет исходный массив

// Метод concat применяется к массиву и создаёт из него новый. Все аргументы, переданные методу, будут добавлены в новый массив в том же порядке:


const toDoList = ["Посадить дерево", "Построить дом"];
const toDoListUpdated = toDoList.concat("Вырастить сына");

console.log(toDoListUpdated); // ["Посадить дерево", "Построить дом", "Вырастить сына"]

// Как аргумент можно передать и другой массив — его элементы будут скопированы и добавлены в новый массив:

const moscowAttractions = ["Кремль", "Третьяковская галерея"];
const spbAttractions = ["Эрмитаж", "Мариинский театр"];
const volgogradAttractions = ["Мамаев Курган", "Родина-мать"];

const russiaAttractions = moscowAttractions.concat(
  spbAttractions,
  volgogradAttractions
);

// получим новый массив со значениями всех исходных массивов
console.log(russiaAttractions);
/*
  [
    "Кремль",
    "Третьяковская галерея",
    "Эрмитаж",
    "Мариинский театр",
    "Мамаев Курган",
    "Родина-мать"
  ]
*/

//                                             Преобразование массива в строку. Метод JOIN
//                                                     не меняет исходный массив


const superheroes = [
  "Зимний Солдат",
  "Шэрон Картер",
  "Хельмут Земо",
  "Черная Вдова",
  "Локи",
  "Шан-Чи и Мандарин",
  "Вечные",
  "Мисс Марвел",
  "Человек-паук",
  "Доктор Стрэндж",
  " Соколиный Глаз",
  "Барон Мордо",
  "Тор",
  "Звездный Лорд",
  "Валькирия",
  "Корг и Миек",
  "Окойе и Шури",
  "Капитан Марвел",
  "Женщина-Халк",
  "Халк",
  "Стражи Галактики",
  "Гамора",
  "Человек-муравей и Оса",
  "Железное Сердце",
  "Воитель",
  "Ник Фьюри",
  "Блэйд",
  "Фантастическая Четверка",
  "Железный человек",
  "Капитан Америка",
];

console.log(superheroes.join());

console.log(`Представляем музыкантов: ${superheroes.join(", ")}`);
// при этом с исходным массивом ничего не произошло:
console.log(superheroes);

const italyCities = ["Помпеи", "Рим", "Неаполь"];

const volcanoEruption = italyCities.shift(); // метод shift() возвращает удалённый элемент
console.log(typeof volcanoEruption);
console.log(volcanoEruption.length);
console.log(italyCities);

//                                                Получение части массива: метод SLISE
//                                                      не меняет исходный массив


const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

// начиная с индекса 2 ("Март") и до, но не включая индекс 5 ("Июнь")
const spring = months.slice(2, 5);

console.log(spring); // ["Март", "Апрель", "Май"]

console.log(months); /* ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] */


//                                      Как видите, исходный массив остался нетронутым


// начиная с четвёртого элемента с конца и до первого с конца (не включительно)
const autumn = months.slice(-4, -1);
console.log(autumn); // ["Сентябрь", "Октябрь", "Ноябрь"]

// с третьего элемента с конца и до конца
const fourthQuarter = months.slice(-3);
console.log(fourthQuarter); // ["Октябрь", "Ноябрь", "Декабрь"]

console.log(typeof months.slice());


//                                   Замена части элементов массива: метод SPLICE
//                                           меняет исходный массив


const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

//const myRules = week.splice(0, 5, 'Суббота', 'Суббота', 'Суббота', 'Суббота', 'Суббота');
week.splice(0, 1, "Суббота");
console.log(week);
const sunday = week.splice(-1, 1);
console.log(sunday);


//                                          Array.from создаёт массив из «массивоподобного» объекта:



const parent = document.querySelector(".users-online");
console.log(parent);
const child = document.querySelectorAll(".user__name");
const family = Array.from(child);
console.log(family);

//

const sectionElem = document.querySelector(".profile");
const navElem = document.querySelectorAll(".profile__nav");
const navArrElem = Array.from(navElem);

const addNewClass = navArrElem.map((elem) => {
  elem.classList.add("ptifile__nav_add-background");
});
console.log(addNewClass);


//                                                   Обход массива: метод FOREACH
//                                                     не меняет исходный массив
// Метод forEach нужен, когда мы хотим просто пройтись по массиву и для каждого элемента что-то сделать


const brand = ["Puma", "Adidas", "Nike"];

brand.forEach(function (item) {
  console.log(item + "|");
}); // Puma|
// Adidas|
//  Nike| // Методу forEach мы передали функцию. forEach вызовет её столько раз, сколько элементов в массиве brand.

// аналогичный циклу for
for (let i = 0; i < brand.length; i++) {
  console.log(brand[i] + "|");
}

//                                            Создание одного массива из другого: метод MAP
//                                                   не меняет исходный массив
//                                               нельзя применять к массивоподобным объектам
// Метод map нужен, когда мы хотим создать новый массив из старого и преобразовать его элементы.

const numArr = [0, 4, 120, 349, 1000];

const numSquared = numArr.map(function (item) {
  return item * item;
});
console.log(numSquared); // [0, 16, 14400, 121801, 1000000]



// Получение
const listString = "string";
const tweets = [
  {
    user: "@elonmusk",
    date: "16 марта 2019 года",
    text: "I'm from South Africa.",
  },
  {
    user: "@realDonaldTrump",
    date: "24 марта 2019 года",
    text: "Good Morning, Have A Great Day!",
  },
  {
    user: "@BillGates",
    date: "24 марта 2019 года",
    text: "I never ate apple in my life",
  },
];
console.log(typeof listString, typeof tweets);

const tweetsTextOnly = tweets.map(function (el) {
  return el.text;
});

console.log(tweetsTextOnly);

tweetsTextOnly.forEach(function (el) {
  console.log(el);
});

const filteredTweets = tweets.filter(function (item) {
  return item.text.length > 25;
});
console.log(filteredTweets);

// Пример если не указать return
const firstArr = [0, 1, 2, 3, 4];

const secondArr = firstArr.map(function (elem) {
  console.log("Это сообщение будет выведено пять раз");
});
console.log(secondArr);



//                                           Второй аргумент, ИНДЕКС текущего цикла
//  Первый параметр считывается как текущий элемент, второй — как его индекс.

const counter = [
  "Царь",
  "Царевич",
  "Король",
  "Королевич",
  "Сапожник",
  "Портной",
];
//                                                   index - счетчик, Его можно использовать, например, для расстановки позиций в списке:
const counterIndexed = counter.map(function (person, index) {
  return `${index + 1}) ${person}`;
});

console.log(counterIndexed);

//                                                Третий аргумент, Исходный массив

const ivans = [
  "Иван I Калита",
  "Иван II  Красный",
  "Иван III Великий",
  "Иван IV Грозный",
  "Иван V",
  "Иван VI",
];
//                                                   array - Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива:
const ivansIndexed = ivans.map(function (item, index, array) {
  const currentIndex = `(${index + 1} из ${array.length})`;
  return `${item} ${currentIndex}`;
});
console.log(ivansIndexed);
/*
[
  "Иван I Калита (1 из 6)",
  "Иван II  Красный (2 из 6)",
  "Иван III Великий (3 из 6)",
  "Иван IV Грозный (4 из 6)",
  "Иван V (5 из 6)",
  "Иван VI (6 из 6)"
]
*/

//                             Примеры с использованием forEach

const a = [
  "Гарри Поттер и философский камень",
  "Гарри Поттер и Тайная комната",
  "Гарри Поттер и узник Азкабана",
  "Гарри Поттер и Кубок огня",
  "Гарри Поттер и Орден феникса",
  "Гарри Поттер и Принц-полукровка",
  "Гарри Поттер и Дары смерти",
  "Гарри Поттер и методы рационального мышления",
];

const b = [];
a.forEach(function (item) {
  b.push(item.split(" и ")[1]);
});
console.log(b);

const arrSсience = [
  "Гравитационные силы",
  "Электромагнитные силы",
  "Ядерные силы",
  "Слабые силы",
];
arr.forEach(function (element, index) {
  console.log(`${index + 1}. ${element}`);
});

//                             Примеры с использованием map

const characters = [
  "Люк Скайуокер",
  "Оби Ван",
  "Чубакка",
  "Энакин Скайуокер",
  "Хан Соло",
  "Палпатин",
];

const newCharacters = characters.map(function (character) {
  if (character === "Энакин Скайуокер") {
    return "Дарт Вейдер";
  }
  return character;
});

console.log(newCharacters);


//                                       Отбор элементов массива: метод FILTER
//                                           не меняет исходный массив
//  Он должен вернуть true или false в зависимости от того, хотим мы оставить текущий элемент массива или отфильтровать:
const ArrNamber = [2, 4, 5, 200, -1, 4, 320, 320, 700, 32, 4, 4, 4, 5];

const beggerNum = ArrNamber.filter((num) => {
  return num > 100;
});
console.log(beggerNum); // [200, 320, 320, 700]

const uniqueNum = ArrNamber.filter((num, index, arrey) => {
  return arrey.lastIndexOf(num) === index;
});
console.log(uniqueNum); // [2, 200, -1, 320, 700, 32, 4, 5]

//                                        Пример работы с FILTER

const movies = [
  "Титаник (1997)",
  "Чёрная Пантера (2018)",
  "Остров Собак (2018)",
  "Омерзительная Восьмерка (2015)",
];

const moviesFiltered = movies.filter(function (item) {
  return item.includes("2018");
});

console.log(moviesFiltered); // ['Чёрная Пантера (2018)', 'Остров Собак (2018)']

//

const cards = [
  "6 червей",
  "7 червей",
  "8 червей",
  "9 червей",
  "10 червей",
  "Валет червей",
  "Дама червей",
  "Король червей",
  "Туз червей",
  "6 пик",
  "7 пик",
  "8 пик",
  "9 пик",
  "10 пик",
  "Валет пик",
  "Дама пик",
  "Король пик",
  "Туз пик",
  "6 треф",
  "7 треф",
  "8 треф",
  "9 треф",
  "10 треф",
  "Валет треф",
  "Дама треф",
  "Король треф",
  "Туз треф",
  "6 бубен",
  "7 бубен",
  "8 бубен",
  "9 бубен",
  "10 бубен",
  "Валет бубен",
  "Дама бубен",
  "Король бубен",
  "Туз бубен",
];

const cardsFiltered = cards.filter(function (card) {
  return parseInt(card) && (card.includes("червей") || card.includes("бубен"));
});
console.log(cardsFiltered);



const nobel = `Рентген В.К., Германия; Зееман П., Нидерланды; Лоренц Х. А., Нидерланды; Беккерель А. А., Франция; Кюри П., Франция; Склодовская-Кюри М., Франция; Стретт [лорд Рэлей — Рейли] Дж. У., Великобритания; Ленард Ф. Э. А., Германия; Томсон Дж. Дж., Великобритания; Майкельсон А. А., США; Липман Г., Франция; Маркони Г., Италия; Браун К. Ф., Германия; Ваальс [ван-дер-Ваальс] Я. Д., Нидерланды; Вин В., Германия; Дален Н. Г., Швеция; Камерлинг-Оннес Х., Нидерланды; Лауэ М. фон, Германия; Брегг У. Л., Великобритания; Брэгг У. Г., Великобритания; Баркла Ч., Великобритания; Планк М. К., Германия; Штарк Й., Германия; Гильом [Гийом] Ш. Э., Швейцария; Эйнштейн А., Германия; БОР Н. Х. Д., Дания; Милликен Р. Э., США; Сигбан К. М., Швеция; Герц Г., Германия; Франк Дж., Германия; Перрен Ж. Б., Франция; Вильсон Ч. Т. Р., Великобритания; Комптон А. Х., США; Ричардсон О. У., Великобритания; Бройль Л. де, Франция; Раман Ч. В., Индия; Гейзенберг В. К., Германия; Дирак П. А. М., Великобритания; Шредингер Э., Австрия; Чедвик Дж., Великобритания; Андерсон К. Д., США; Гесс В. Ф., Австрия; Дэвиссон К. Дж., США; Томсон Дж. П., Великобритания; Ферми Э., Италия; Лоуренс Э. О., США; Штерн О., США; Раби И. А., США; Паули В., Швейцария; Бриджмен П. У., США; Эплтон Э. В., Великобритания; Блэкетт П. М. С., Великобритания; Юкава Х., Япония; Пауэлл С. Ф., Великобритания; Кокрофт Дж. Д., Великобритания; Уолтон Э. Т. С., Великобритания; Блох Ф., США; Перселл Э. М., США; Цернике Ф., Нидерланды; Борн М., Германия; Боте В., Германия; Куш П., США; Лэмб У. Ю., США; Бардин Дж., США; Браттейн У., США; Шокли У. Б., США; Ли Чж., США; Янг Чж., США; Тамм И. Е., СССР; Франк И. М., СССР; Черенков П. А., СССР; Сегре Э., США; Чемберлен О., США; Глазер Д.А., США; Мессбауэр Р. Л., Германия; Хофстедтер Р., США; Ландау Л. Д., СССР; Вигнер Ю. П., США; Гепперт-Майер М., США; Йенсен Й. Х. Д., Германия; Басов Н. Г., СССР; Прохоров А. М., СССР; Таунс Ч. Х., США; Томонага С., Япония; Фейнман Р. Ф., США; Швингер Дж., США; Кастлер А., Франция; Бете Х. А., США; Альварес Л. У., США; Гелл-Ман М., США; Альвен Х., Швеция; Неель Л. Э. Ф., Франция; Габор Д., Великобритания; Купер Л., США; Шриффер Дж. Р., США; Джайевер А., США; Джозефсон Б., Великобритания; Эсаки Л., США; Райл М., Великобритания; Хьюиш Э., Великобритания; Бор О., Дания; Моттельсон Б., Дания; Рейнуотер Дж., США; Рихтер Б., США; Тинг С., США; Андерсон Ф., США; Ван Флек Дж. Х., США; Мотт Н., Великобритания; Вильсон Р. В., США; Капица П. Л., СССР; Пензиас А. А., США; Вайнберг [Уэйнберг] С., США; Глэшоу Ш., США; Салам А., Пакистан; Кронин Дж. У., США; Фитч В. Л., США; Бломберген Н., США; Шавлов А. Л., США; Сигбан К. М., Швеция; Вильсон К., США; Фаулер У. А., США; Чандрасекар С., США; Мер [Ван-дер-Мер] С., Нидерланды; Руббиа К., Италия; Клитцинг К., Германия; Бинниг Г., Германия; Рорер Г., Швейцария; Руска Э., Германия; Беднорц Й. Г., Германия; Мюллер К. А., Швейцария; Ледерман Л. М., США; Стейнбергер Дж., США; Шварц М., США; Рамзей Н. Ф., США; Демелт Х. Дж., США; Пауль В., Германия; Кендалл Г., США; Тейлор Р., Канада; Фридман Дж., США; Де Жен П. Ж., Франция; Шарпак Ж., Франция; Тейлор Дж. [младший], США; Халс Р., США; Брокхауз Б., Канада; Шалл К., США; Перл М., США; Рейнес Ф., США; Ли Д., США; Ошерофф Д., США; Ричардсон Р., США; Коэн-тануджи К., Франция; Филлипс У., США; Чу С., США; Лафлин Р., США; Цуи Д., США; Штермер Х., Германия; Велтман М., Нидерланды; т Хоофт Г., Нидерланды; Алферов Ж.И., Россия; Килби Дж., США; Кремер Г., США; Вейман К., США; Кеттерле В., Германия; Корнелл Э. А., США; Джаккони Р., США; Дэвис-младший Р., США; Косиба М., Япония; Абрикосов А. А, Россия; Гинзбург В. Л., Россия; Леггет Э., США; Вилчек Ф., США; Гросс Д., США; Политцер Д., США; Глаубер Р., США; Хенш Т., Германия; Холл Дж., США; Мазер Дж., США; Смут Дж., США; Грюнберг П., Германия; Ферт А., Франция; Кобаяси М., Япония; Маскава Т., Япония; Намбу Й., Япония; Бойл У., США; Као Ч., Китай; Смит Дж., США; Гейм А.К., Россия; Новоселов К.С., Россия; Перлмуттер С., США; Рисс А., США; Шмидт Б., США; Арош С., Франция; Уайнленд Д., США; Хиггс П., Великобритания; Энглер Ф., Бельгия; Акасаки И., Япония; Амано Х., Япония; Накамура С., США; Кадзита Т., Япония; Макдональд А., Канада; Таулесс Д., Великобритания; Холдейн Д., Великобритания; Костерлиц Дж., Великобритания; Вайсс Р., США; Бэриш Б., США; Торн К., США; Эшкин А., США; Муру Ж., Франция; Стрикленд Д., Канада`;

const nobelArr = nobel.split("; ");

const rusNobel = nobelArr.filter(function (scientist) {
  return scientist.includes("Россия") || scientist.includes("СССР");
});

console.log(rusNobel);


//                                         Проверка элементов массива. Метод SOME
//                                              Не меняет исходный массив
// Метод some проверяет, есть ли в массиве хотя бы один элемент, который соответствует определённому правилу. Колбэк с этим правилом проверяет каждый элемент и возвращает true или false:


const myHeroes = ['Batman', 'Spiderman', 'Iron man'];

const RobertpPattinson = myHeroes.some((el) => {
  return el === 'Batman'
})

console.log(RobertpPattinson); // true 

//

const haystack = ['сено', 'сено', 'сено', 'сено', 'сено', 'сено'];

const needle = haystack.some(function(item) {
    return item === 'иголка';
});

console.log(needle); // false 

//                                           Поиск элемента в массиве. Метод FIND
//                                              Не меняет исходный массив
// some возвращает булево значение, а find — значение элемента, на котором он завершил проверку:

const birds = [
  'Ворона',
  'Чёрно-белая ворона',
  34,
  'Ворона обыкновенная'
];

const includesCrow = birds.some(function (bird) {
  return bird.includes('ворона');
});

const crow = birds.find(function (bird) {
  return bird === 34;
});

const crow2 = birds.find(function (bird) {
  return bird.includes('ворона');
});

console.log(includesCrow); // true
console.log(crow); // 34
console.log(crow2); // 'Чёрно-белая ворона'

//                                            Проверка элементов массива. Метод EVERY
//                                              Не меняет исходный массив
// Метод every тоже похож на some, но проверяет все элементы массива и возвращает true, только если все элементы прошли проверку.


const jokes = [
  'смешная шутка и доля правды',
  'не очень смешной анекдот + доля правды',
  'доля правды в дурацкой шутке, услышав которую, все улыбнулись из вежливости'
];

const allJokesWithTruth = jokes.every(function (joke) {
  //return joke.indexOf('доля правды') >= 0;
  return joke.includes('доля');
});

console.log(allJokesWithTruth); // true 


//

const person = ['Гав-гав', 'Незнайка', 'Бармaлей', 'Леопольд', 'Хоттабыч'];

const incorrectWord = person.find(function (item) {
  return item.includes('a');
});

console.log(incorrectWord);

// пример поиска натуральных чисел 
// дан массив чисел
const integersToCheck = [2, 0, -1, 3, 193, 79, 7, 29];

/* нужно дополнить функцию isPrime, принимающую число на вход
и возвращающую true, если число простое, а иначе false */

function isPrime(num) {
    for (let i = 2; i < num; i += 1) {
        /* При каждой итерации цикла мы увеличиваем i
        на единицу и проверяем, стала ли она натуральным
        делителем элемента массива. */

        if (num % i === 0) {
            return false;
        }
    }

    return true;
};


/* ниже используйте метод .every() и функцию isPrime,
чтобы проверить элементы маcсива */

console.log(integersToCheck.every(isPrime));

//                                                 Сведение массива. Метод REDUCE
//                                                  не меняет исходный массив
// Метод reduce перебирает элементы массива и сводит его к одному значению
/* Промежуточное значение — новый первый аргумент и главная особенность reduce. 
На каждой итерации этот аргумент равен тому, что в прошлый раз вернул колбэк. */
const arrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumReduce = arrReduce.reduce(function (промежуточноеЗначение, item) {
  // первый аргумент равен тому, что в прошлый раз вернул колбэк (item)
  return промежуточноеЗначение + item;
  // «прибавь текущий элемент массива к тому, что получилось на предыдущей итерации»
});
console.log(sumReduce); // 45

//      Пример

const testReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumTest= testReduce.reduce(function (previousValue, item) {
  // для наглядности выведем аргументы в консоль
  console.log(`previousValue: ${previousValue}, item: ${item}`);
  return previousValue + item;
});

console.log(`sumaaa: ${sumTest}`);

/*
 previousValue: 1, item: 2
 previousValue: 3, item: 3
 previousValue: 6, item: 4
 previousValue: 10, item: 5
 previousValue: 15, item: 6
 previousValue: 21, item: 7
 previousValue: 28, item: 8
 previousValue: 36, item: 9
 sumTest: 45
*/ 

//   Пример
// Первый аргумент метода reduce — колбэк. А вот вторым нужно задать промежуточное значение previousValue при первой итерации.

/* Создадим массив, хранящий в себе историю выигрышей
и проигрышей одного игрока в казино. */
const winsAndLoses = [190, 117, -381, -394, -36, 137, -473, 372, -383];

/* Посчитаем, какая сумма денег останется у этого игрока
к концу вечера, если вначале у него было с собой 1000. */
const total = winsAndLoses.reduce(function (previousValue, item) {
    return previousValue + item;
}, 1000); // Начальное значение передаём методу reduce как второй аргумент.

console.log(total); // 149

// Задачу можно решить иначе — не передавать методу reduce второй аргумент, а просто прибавить 1000 к переменной total:
const total2 = 1000 + winsAndLoses.reduce(function (previousValue, item) {
  return previousValue + item;
});

console.log(total2); // 149
// Это сработает, когда результат работы reduce — число или строка. Когда на выходе нужен массив или объект, второй аргумент обязателен.


//   Пример 

const acrostic = [
  'Довольно именем известна я своим;',
  'Равно клянётся плут и непорочный им,',
  'Утехой в бедствиях всего бываю боле,',
  'Жизнь сладостней при мне и в самой лучшей доле.',
  'Блаженству чистых душ могу служить одна,',
  'А меж злодеями — не быть я создана.'
];

const cipherWord = acrostic.reduce(function (prevVal, item) {
  return prevVal + item[0];
}, '');

console.log(cipherWord); // "ДРУЖБА"

//   Пример

const order = ['яблоко', 'банан', 'апельсин', 'банан', 'яблоко', 'банан'];

const result = order.reduce(function (prevVal, item) {
  if (!prevVal[item]) {
    // если ключа ещё нет в объекте, значит это первое повторение
    prevVal[item] = 1; 
  } else {
    // иначе увеличим количество повторений на 1
    prevVal[item] += 1; /*{яблоко: 1}
                          {яблоко: 1, банан: 1}
                          {яблоко: 1, банан: 1, апельсин: 1}
                          {яблоко: 2, банан: 3, апельсин: 1} */
  }

  // и вернём изменённый объект
  return prevVal;
}, {}); // Начальное значение — пустой объект.

console.log(result); // { яблоко: 2, банан: 3, апельсин: 1 } 



//                                               Сортировка массива. Метод SORT
//                                                   меняет исходный массив !!
// Метод sort, если не передавать ему аргументы, пытается сортировать элементы массива по возрастанию кодов (Unicode).
const myNumbers = [0, 3.14, 2.718, 13];
myNumbers.sort();
console.log(myNumbers); // [0, 13, 2.718, 3.14] 

//

const fruits = ['яблоко', 'банан', 'апельсин', 'томат'];
fruits.sort(); // ["апельсин", "банан", "томат", "яблоко"] 
console.log(fruits); //  ["апельсин", "банан", "томат", "яблоко"]

//                                               Функции обратного вызова для сортировки

const myNumbers2 = [0, 3.14, 2.718, 13]; // Для чисел такой подход отлично работает: 
//если вы хотите отсортировать массив по возрастанию, колбэк должен возвращать a - b, по убыванию — b - a.

myNumbers.sort(function (a, b) {
    return a - b;

  /* Если a меньше b, вернётся отрицательное число.
  Это значит, что a должно расположиться в итоговом массиве
  раньше, b — позже. Например:

    a = 0, b = 3.14
    a - b = -3.14

  Получили отрицательное число, значит a стоит раньше b */
});

console.log(myNumbers2); // [0, 2.718, 3.14, 13] — так и есть 

/* Диагнозы записаны в том порядке,
в каком поступили пациенты. Отсортируем его по алфавиту. */

const diagnoses = [
  'мизофобия',
  'синдром упущенной выгоды',
  'боязнь красного цвета'
];

diagnoses.sort(function(a, b) {
  /* приведём строки к нижнему регистру,
  чтобы сравнение прошло корректно */
  a = a.toLowerCase();
  b = b.toLowerCase();
  console.log(a);
  console.log(b);
  if (a < b) return -1; // a расположится раньше b
  if (b < a) return 1; // b расположится раньше a

  return 0;
});

console.log(diagnoses);

/* ["боязнь красного цвета", "мизофобия", "синдром упущенной выгоды"] */ 

let bob = 'болезнь';
let job = 'зараза'
const testNewreduce = bob[job] = 1;
console.log(testNewreduce);

let string1 = 'тут одно слово';
let string2 = 'тут два слова';

console.log(string1 > string2);

console.log('0' === '0');

const arrfortest = ['ящерица', 'попугай', 'кот', 'аист',];

let newarrfortest =  arrfortest.sort();
console.log(newarrfortest);