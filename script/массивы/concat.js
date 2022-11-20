//                                                Добавление элементов. Метод CONCAT
//                                                    не меняет исходный массив

// Метод concat применяется к массиву и создаёт из него новый. Все аргументы, переданные методу, будут добавлены в новый массив в том же порядке:


const toDoList = ["Посадить дерево", "Построить дом"];
const toDoListUpdated = toDoList.concat("Вырастить сына");

console.log(toDoListUpdated); // ["Посадить дерево", "Построить дом", "Вырастить сына"]

// Как аргумент можно передать и другой массив — его элементы будут скопированы и добавлены в новый массив:

const moscowAttractions = ["Кремль", "Третьяковская галерея"];
const spbAttractions = ["Эрмитаж", "Мариинский театр"];
const volgogradAttractions = ["Мамаев Курган", "Родина-мать"];

const russiaAttractions = moscowAttractions.concat(
  spbAttractions,
  volgogradAttractions
);

// получим новый массив со значениями всех исходных массивов
console.log(russiaAttractions);
/*
  [
    "Кремль",
    "Третьяковская галерея",
    "Эрмитаж",
    "Мариинский театр",
    "Мамаев Курган",
    "Родина-мать"
  ]
*/