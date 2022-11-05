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



// Многомерные массивы
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
brothers.shift() // извлекает элемент из начала
brothers.unshift('Вадим') // добавляет элементы в начало.
console.log(brothers);