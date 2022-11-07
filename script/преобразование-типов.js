// Функция parseInt
let age1 = '37 лет, 8 месяцев и 10 дней';

console.log(parseInt(age1)); // 37 
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

// Неявное преобразование

'235' === 235 // false
'235' == 235 // true

console.log(undefined + ''); // 'undefined'

console.log('один' > 'два'); // true
console.log(undefined > 1); // false
console.log(67 + +'33'); // 100 

// Явное преобразование
// преобразование в строку
const numberToString = String(2); // "2"
const nanToString = String(NaN); // "NaN"
const undefinedToString = String(undefined); // "undefined"
const nullToString = String(null); // "null"
const booleanToString = String(true); // "true" 

// преобразование в число

const Nam = Number('45'); // 45
const Nam2 = Number('null'); // 0
const Nam3 = Number('NaN'); // Nan
const anotherStringToNumber = Number('счастье не за горами'); // NaN
const undefinedToNumber = Number(undefined); // NaN 

// преобразование к булевым значениям

const boolValue = Boolean(2) // true
const boolValue2 = Boolean(0) // false 
const boolValue3 = Boolean('') // false
const boolValue4 = Boolean('что то тут есть') // true

// также

Boolean(NaN); // false
Boolean(null); //false
Boolean(undefined); // false
Boolean({}); // true
Boolean([]); //true 