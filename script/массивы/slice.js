//                                               🧰 Получение части массива: метод SLICE 🧰
//                                                      не меняет исходный массив


const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

// начиная с индекса 2 ("Март") и до, но не включая индекс 5 ("Июнь")
const spring = months.slice(2, 5);

console.log(spring); // ["Март", "Апрель", "Май"]

console.log(months); /* ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"] */


//                                      Как видите, исходный массив остался нетронутым 🛠


// начиная с четвёртого элемента с конца и до первого с конца (не включительно)
const autumn = months.slice(-4, -1);
console.log(autumn); // ["Сентябрь", "Октябрь", "Ноябрь"]

// с третьего элемента с конца и до конца
const fourthQuarter = months.slice(-3);
console.log(fourthQuarter); // ["Октябрь", "Ноябрь", "Декабрь"]

console.log(typeof months.slice());

// 💬 Копия массива создаётся с помощью метода slice(). Нужно вызвать его без аргументов и сохранить результат в новую переменную: 💬

const iWatched = ['GameOfThrones', 'Breaking Bad']
// копируем в новую переменную
const vitalikWatched = iWatched.slice()

vitalikWatched.push('American Gods')
console.log(iWatched)
// ['GameOfThrones', 'Breaking Bad'] 👍
console.log(vitalikWatched)
// ['GameOfThrones', 'Breaking Bad', 'American Gods'] 💪


// 🛠 Деструктуризация массива

const myProfile = [
  'vadim',
  'big',
  24,
  'https://sun9-82.userapi.com/sun9-50/impg/HTNUYVK-IvYFtifkwibYyeir-wwOgSU8SdC93Q/fFx-MPC6Piw.jpg?size=564x480&quality=96&sign=3e754af822a8789bd67f42aaf1da9b28&type=album'
]
// .   vadim, big
const [name, size] = myProfile;
console.log(size); // big

