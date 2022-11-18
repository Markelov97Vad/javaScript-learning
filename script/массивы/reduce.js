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
    console.log(prevVal[item]);
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