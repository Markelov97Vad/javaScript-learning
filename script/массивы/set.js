//                                                        🧰 Массив из Set 🧰 
/* Set (по-русски говорят множество) — коллекция для хранения уникальных значений любого типа. 
Одно и то же значение нельзя добавить в Set больше одного раза. */
/* Set — это неиндексированная коллекция, положить элемент в коллекцию можно, но достать нельзя. 
По элементам коллекции можно итерироваться.*/
/*
▫ 🔺 add() — добавить элемент.
  🔺 delete() — удалить элемент.
  🔺 has() — проверить, есть ли элемент в коллекции.
  🔺 clear() — очистить коллекцию.
  🔺 forEach() — выполнить функцию для каждого элемента в коллекции, аналогично одноимённому методу массива.
*/

// ✅
const uniqueIds = new Set()

uniqueIds.add(123)
uniqueIds.add(456)
uniqueIds.add(111)
uniqueIds.add(123)

console.log(uniqueIds.size)
// 3 ; (123) повторное число, оно не было добавлено 

// ✅ Set позволяет проверить, был ли элемент уже добавлен. За это отвечает метод has()
console.log(uniqueIds.has(111))
// true

uniqueIds.delete(111)
console.log(uniqueIds.size)
// 2

// ✅ полностью очистить Set можно методом clear().
uniqueIds.clear()
console.log(uniqueIds.size)
// 0

// 🧰 Создание коллекции 🧰

const newSet = new Set()

console.log(set.size) // 0

// ✅

const filled = new Set([1, 2, 3, 3, 3, 'hello']);

console.log(filled.size); // 4

// 🧰 Работа с коллекцией 🧰

const filled2 = new Set([1, 2, 3, '3', 3, 'hello'])

filled2.add(100);
filled2.delete(1);

// 1️⃣ Использовать метод forEach(), который работает аналогично одноимённому методу массива:

filled2.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// '3'
// 'hello'

// 2️⃣ Воспользоваться for...of:

for (let n of filled2) {
  console.log(n)
}
// 1
// 2
// 3
// '3'
// 'hello'

// ✅ Могут быть разные адреса памяти
const cheapShirt = { size: 'L', color: 'white' }
const fancyShirt = { size: 'L', color: 'white' }

console.log(cheapShirt === fancyShirt)
// false
console.log(cheapShirt === cheapShirt)
// true
console.log(fancyShirt === fancyShirt)
// true

/* Мы создали два разных объекта (фигурные скобки создают новый объект), 
которые выглядят одинаково, но по факту это разные объекты. 
Они не равны друг другу — если в один добавить новое свойство, то второй не изменится. */

// ✅ Попробуем добавить эти объекты в Set:

const closetSetT = new Set();
closetSetT.add(cheapShirt);
closetSetT.add(fancyShirt);

console.log(closetSetT.size);
// 2

// ✅ Если же попробовать добавить их второй раз, то эта операция будет проигнорирована:
closetSetT.add(cheapShirt)
closetSetT.add(cheapShirt)
closetSetT.add(fancyShirt)

console.log(closetSetT.size)
// 2

/* 🛠 С помощью Set можно легко получить массив уникальных элементов из массива 
неуникальных с помощью конструктора и спред-синтаксиса: */

const nonUnique = [1, 2, 3, 4, 5, 4, 5, 1, 1]
const uniqueValuesArr = [...new Set(nonUnique)]

console.log(uniqueValuesArr)
// [1, 2, 3, 4, 5]

