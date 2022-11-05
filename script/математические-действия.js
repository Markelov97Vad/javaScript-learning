let num1 = 404;
let num2 = 2;

console.log(num1 + num2); // сложение
console.log(num1 - num2); // вычитание
console.log(num1 * num2); // умножение
console.log(num1 / num2); // деление
console.log(num1 % num2); // остаток от деления 

let num3 = 10;
num3 = num3 + 90; // num3 = 100
// сокращенная запись 
let num4 = 10;
num4 += 90 // num4 = 100
// добавить еденицу
num4 ++; //num4 = 101;

// Сложение строк
let str_1 = 'один';
let str_2 = 'два';
console.log(str_1 + str_2); // одиндва

let str_3 = 88;
let str_4 = '25';
console.log(str_3 + str_4); // 8825
// преобразование строки в число
str_4 = Number('25')
console.log(str_3 + str_4); // 113

console.log('3' - 1); // 2 — выполнилось приведение к числу
console.log('4' / 4); // 1 — тоже привелось к числу
console.log('2' * 2); // 4 — опять привелось
console.log('4' + 4); // 44 — а здесь выполнится конкатенация 
// Встроенный объект Math.


Math.max(34, 56, -2, 100); // метод .max определит наибольшее число
Math.min(34, 56, -2, 100); // метод .min определит наименьшее число

// округляет переданное число «вниз»
Math.floor(9.99); // 9

// округляет «вверх»
Math.ceil(9.01); // 10

// округляет до ближайшего целого
Math.round(9.51); // 10

// возвращает случайное число от 0 включительно до 1 не включительно
Math.random(); // 0.31764219954126016 

// Функция parseInt
let age = '37 лет, 8 месяцев и 10 дней';

console.log(parseInt(age)); // 37 
parseInt('Метро 2033'); // NaN 
parseInt('38 попугаев'); // 38
parseInt('454545', 10); // переведет строку в число: (10) - десятеричная система счисления

// Функция parseFloat

parseFloat('36.6'); // 36.6
parseFloat('36.6 нормальная температура человека '); // 36.6 

// Метод Number.isInteger

const eightAndAHalf = 8.5;
// Проверяет целое ли число
Number.isInteger(eightAndAHalf); // false
Number.isInteger(Math.floor(eightAndAHalf)); // true

'235' === 235 // false
'235' == 235 // true

console.log(undefined + ''); // 'undefined'

console.log('один' > 'два'); // true
console.log(undefined > 1); // false
console.log(67 + +'33'); // 100 