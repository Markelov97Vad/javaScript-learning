//                                    Цикл с неизвестным числом повторений WHILE

/* Условие цикла содержит только проверку переменной number. 
Пока эта переменная не больше 20, цикл выполняется. 
Но тело цикла меняет значение number — прибавляет к нему 2 при каждой итерации.
Поэтому после 6 повторений переменная number станет больше 20, и цикл прекратится. */

let number = 10;
//    условие цикла
while (number < 20) {
  // тело цикла
  console.log(number); // 10 11 12 13 14 15 16 17 18 19
  number += 1;
} 

/* Тело цикла — это те шаги, которые будут выполняться повторно. 
Тело цикла должно быть организовано так, чтобы условие рано или поздно перестало выполняться. 
Иначе цикл будет выполняться бесконечно.
Следующий цикл напечатает все чётные цифры от 10 до 20: */

//                                     Цикл с известным числом повторений for

// for (переменная цикла и её исходное значение; условие выполнения цикла; изменение переменной после каждой итерации) {
  // тело цикла
//} 

/* Выражение в скобках состоит из трёх частей. 
Сперва задаётся переменная, затем условие выполнения цикла, и в конце — 
как переменная должна меняться после каждого повторения. */

for (let i = 3; i <= 10; i = i + 1) {
  console.log("вывод1: " + i); // 1 2 3 4 5 6 7 8 9 10
} 


const arrСycle = [1, 2, 3, 4, 5, 6, 555, 8, 9];

let sum = 0; // создадим переменную, где будем хранить сумму

// проходим по всем элементам массива 
// прибавляем каждый из них к переменной-аккумулятору sum 

for (let i = 0; i < arrСycle.length; i += 1) {
  sum += arrСycle[i];
}
console.log("вывод2: " + sum);


const testArr = [2, 3, 4, 5, 10];
let num12 = 0;
for ( let i = 0; i < testArr.length; i+= 1) {
  //              массив[элемент массива]
  num12 = num12 + testArr[i];
  console.log(testArr[i]);
}
console.log("вывод3: " + num12);
