//                                            Создание одного массива из другого: метод MAP
//                                                   не меняет исходный массив
//                                               нельзя применять к массивоподобным объектам
// Метод map нужен, когда мы хотим создать новый массив из старого и преобразовать его элементы.

const numArr = [0, 4, 120, 349, 1000];

const numSquared = numArr.map(function (item) {
  return item * item;
});
console.log(numSquared); // [0, 16, 14400, 121801, 1000000]

//                             Примеры с использованием map

const characters = [
  "Люк Скайуокер",
  "Оби Ван",
  "Чубакка",
  "Энакин Скайуокер",
  "Хан Соло",
  "Палпатин",
];

const newCharacters = characters.map(function (character) {
  if (character === "Энакин Скайуокер") {
    return "Дарт Вейдер";
  }
  return character;
});

console.log(newCharacters);