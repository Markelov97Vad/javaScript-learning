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

//

const person = ['Гав-гав', 'Незнайка', 'Бармaлей', 'Леопольд', 'Хоттабыч'];

const incorrectWord = person.find(function (item) {
  return item.includes('a');
});

console.log(incorrectWord);