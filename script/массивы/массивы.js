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


// Создать массив от 0 до 1000

const bigNumArr = [];

for(let i = 0; i <= 1000; i++) {
  bigNumArr.push(i);
}
//console.log(bigNumArr);

// Создадим массив чётных чисел от 0 до 1000:

const evenNumbers = []
for (let i = 0; i <= 1000; i += 2) {
  evenNumbers.push(i)
}

