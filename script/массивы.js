//Создание пустого массива
const emptyArr = [];
// Более сложный метод
const arr = new Array(56,"string");
// Более простой метод
const easyArr = [44,"string",true, 0, -55];
// Поиск элемента по индексу
easyArr[2];
// Присвоить другой элемент списку
easyArr[2] = false;
// Длинна массива
easyArr.length;



//                                                Многомерные массивы
let arr1 = ["str", 34, -4, null];
let arr2 = [4000000, Object, undefined, 'str'];
let arr3 = [22.3, Infinity, 4434, -5];

let grupArr = [arr1, arr2, arr3];

// Показать весь список
console.log(grupArr);
// Узнать элемент по индексу массива
grupArr[1][3];

// Другой вариант записи
let bigArr = [
  [33, 'string', null, 44.8], ['string', -398, -Infinity, undefined], [Object, 43, 'string', false]
];

// Замена значения элемента в списке
bigArr[2][2] = 'newString';
// Показать весь список 
console.log(bigArr);

// Добавить массив, который нельзя по новой объявить
const brothers = ["Вадим", "Саша"];
brothers.push('Дима'); // метод который добавляет в конец списка
brothers.pop(); //метод который извлекает из конца списка 
brothers.shift() // извлекает элемент из начала // индексы элементов после изменений поменяются
brothers.unshift('Вадим') // добавляет элементы в начало // индексы элементов после изменений поменяются
console.log(brothers);

//                                                Добавление элементов. Метод concat
// Метод concat применяется к массиву и создаёт из него новый. Все аргументы, переданные методу, будут добавлены в новый массив в том же порядке:

const toDoList = ['Посадить дерево', 'Построить дом'];
const toDoListUpdated = toDoList.concat('Вырастить сына');

console.log(toDoListUpdated); // ["Посадить дерево", "Построить дом", "Вырастить сына"] 

// Как аргумент можно передать и другой массив — его элементы будут скопированы и добавлены в новый массив:

const moscowAttractions = ['Кремль', 'Третьяковская галерея'];
const spbAttractions = ['Эрмитаж', 'Мариинский театр'];
const volgogradAttractions = ['Мамаев Курган', 'Родина-мать'];

const russiaAttractions = moscowAttractions.concat(spbAttractions, volgogradAttractions);

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

//                                          Преобразование массива в строку. Метод join

const superheroes = ['Зимний Солдат', 'Шэрон Картер', 'Хельмут Земо', 'Черная Вдова', 'Локи', 'Шан-Чи и Мандарин', 'Вечные', 'Мисс Марвел', 'Человек-паук', 'Доктор Стрэндж',' Соколиный Глаз', 'Барон Мордо', 'Тор', 'Звездный Лорд', 'Валькирия', 'Корг и Миек', 'Окойе и Шури', 'Капитан Марвел', 'Женщина-Халк', 'Халк', 'Стражи Галактики', 'Гамора', 'Человек-муравей и Оса', 'Железное Сердце', 'Воитель', 'Ник Фьюри', 'Блэйд', 'Фантастическая Четверка', 'Железный человек', 'Капитан Америка',];

console.log(superheroes.join()); 

console.log(`Представляем музыкантов: ${superheroes.join(', ')}`);
// при этом с исходным массивом ничего не произошло:
console.log(superheroes);

const italyCities = ['Помпеи', 'Рим', 'Неаполь'];

const volcanoEruption = italyCities.shift(); // метод shift() возвращает удалённый элемент
console.log(typeof volcanoEruption);
console.log(volcanoEruption.length);
console.log(italyCities);

//                  Получение части массива: метод slice
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

// начиная с индекса 2 ("Март") и до, но не включая индекс 5 ("Июнь")
const spring = months.slice(2, 5);

console.log(spring); // ["Март", "Апрель", "Май"]

console.log(months); /* ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] */

// Как видите, исходный массив остался нетронутым 

// начиная с четвёртого элемента с конца и до первого с конца (не включительно)
const autumn = months.slice(-4, -1);
console.log(autumn); // ["Сентябрь", "Октябрь", "Ноябрь"]

// с третьего элемента с конца и до конца
const fourthQuarter = months.slice(-3);
console.log(fourthQuarter); // ["Октябрь", "Ноябрь", "Декабрь"] 

console.log(typeof months.slice());

//                                   Замена части элементов массива: метод splice
const week = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

//const myRules = week.splice(0, 5, 'Суббота', 'Суббота', 'Суббота', 'Суббота', 'Суббота');
week.splice(0, 1, 'Суббота');
console.log(week)
const sunday = week.splice(-1, 1);
console.log(sunday);


//                Array.from создаёт массив из «массивоподобного» объекта:

const parent = document.querySelector('.users-online');
console.log(parent);
const child = document.querySelectorAll('.user__name');
const family = Array.from(child);
console.log(family);

//                          Обход массива: метод forEach

const brand = ['Puma', 'Adidas', 'Nike'];

brand.forEach(function (item) {
  console.log(item + '|');
});  // Puma|
     // Adidas|
     //  Nike| // Методу forEach мы передали функцию. forEach вызовет её столько раз, сколько элементов в массиве brand.

// аналогичный циклу for
for (let i = 0; i < brand.length; i++) {
  console.log(brand[i] + '|');
}

//                      Создание одного массива из другого: метод map
const numArr = [0, 4, 120, 349, 1000]

const numSquared = numArr.map(function (item) {
  return item * item;
})
console.log(numSquared);

// Получение 
const listString = 'string';
const tweets = [
  {
  user: '@elonmusk',
  date: '16 марта 2019 года',
  text: "I'm from South Africa."
},
  {
  user: '@realDonaldTrump',
   date: '24 марта 2019 года',
  text: 'Good Morning, Have A Great Day!'
},
  {
  user: '@BillGates',
  date: '24 марта 2019 года',
  text: 'I never ate apple in my life'
}
];

console.log(typeof listString,typeof tweets);

const tweetsTextOnly = tweets.map(function (el) {
  return el.text;
});

console.log(tweetsTextOnly);

tweetsTextOnly.forEach(function (el) {
  console.log(el);
});