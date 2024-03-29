//                                                   Обход массива: метод FOREACH
//                                                     не меняет исходный массив
// Метод forEach нужен, когда мы хотим просто пройтись по массиву и для каждого элемента что-то сделать


const brand = ["Puma", "Adidas", "Nike"];

brand.forEach(function (item) {
  console.log(item + "|");
}); // Puma|
// Adidas|
//  Nike| // Методу forEach мы передали функцию. forEach вызовет её столько раз, сколько элементов в массиве brand.

// аналогичный циклу for
for (let i = 0; i < brand.length; i++) {
  console.log(brand[i] + "|");
}

//                             Примеры с использованием forEach

const a = [
  "Гарри Поттер и философский камень",
  "Гарри Поттер и Тайная комната",
  "Гарри Поттер и узник Азкабана",
  "Гарри Поттер и Кубок огня",
  "Гарри Поттер и Орден феникса",
  "Гарри Поттер и Принц-полукровка",
  "Гарри Поттер и Дары смерти",
  "Гарри Поттер и методы рационального мышления",
];

const b = [];
a.forEach(function (item) {
  b.push(item.split(" и ")[1]);
});
console.log(b);

// const arrSсience = [
//   "Гравитационные силы",
//   "Электромагнитные силы",
//   "Ядерные силы",
//   "Слабые силы",
// ];
// arrSсiencef.forEach(function (element, index) {
//   console.log(`${index + 1}. ${element}`);
// });

const tweets = [
  'Какой-то странный тред',
  'Твит, адресованный Илону Маску',
  'Ответ на инфоповод'
];

function consoleTweet(tweet) {
    console.log(tweet);
}

tweets.forEach(consoleTweet);