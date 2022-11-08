// Методы поиска в строке
'Поиск элемента в строке'.indexOf('э'); // индекс [6]

const list = 'Спички, молоко, масло, сок'
list.indexOf('молоко'); // индекс от первой буквы 8

'Шалаш'.indexOf('Ш'); // 0
'Шалаш'.indexOf('ш'); // 4 

// Поиск символов в строке
'Гарри Поттер и узник Азкабана'.includes('узник'); // true 

// Поиск в начале строки
'Вендетта'.startsWith('В'); // true
'Вендетта'.startsWith('Ви'); // false
// В конце
const theRealEnd = 'Это ещё не конец';
theRealEnd.endsWith('конец'); // true 

// Перевод в регистр
'Большие города'.toLocaleLowerCase(); // большие города
'Большие города'.toLocaleUpperCase(); // БОЛЬШИЕ ГОРОДА

// Пример для сравнения двух срок
const firstStr = 'Такая проверка не пройдёт';
const secondStr = 'таКая пРовеРка не пройдёт';

console.log(firstStr === secondStr); // false
console.log(firstStr.toLowerCase() === secondStr.toLowerCase()); // true

// Разделение строки на массив
console.log('Здесь надо бы запомнить'.split(' ')) //[ 'Здесь', 'надо', 'бы', 'запомнить' ]

'Не прислоняться'.slice(6, 10); //  "слон" ; На вход он принимает два аргумента — с какого индекса начинать отсчёт и на каком закончить:

// Пример вывода строки с буквой в верхнем регистре
const myName = /*prompt */('Как Вас зовут?', '');

//const input = myName.slice(0, 1);
//const input2 = input.toUpperCase();
//console.log('Здравствуйте, ' + input2 + myName.slice(1));
// или
console.log('Здравствуйте, ' + myName[0].toUpperCase() + myName.slice(1));

