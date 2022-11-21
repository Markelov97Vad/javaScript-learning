//                                       Создание, добавление и удаление элементов в DOM

// метод createElement принимает на вход имя тега в виде строки
const listItem = document.createElement('li');
const divElement = document.createElement('div');
const imageElement = document.createElement('img');

// метод createTextNode принимает строку — текст узла
const textItem = document.createTextNode('Hello, world');

const bodyElem = document.querySelector('body');
bodyElem.prepend(listItem, divElement, imageElement, textItem);
//node.append(...nodes or strings) — добавляет узлы или строки в конец node;
//node.prepend(...nodes or strings) — в начало node;
//node.before(...nodes or strings) — до node;
//node.after(...nodes or strings) — после node;
//node.replaceWith(...nodes or strings) — заменяет node заданными узлами или строками.

const listNew = document.querySelector('.todo-list');

const listItem1 = document.createElement('li');
listItem1.textContent = 'Я тебя создал';
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

listNew.prepend(listItem1, listItem2, listItem3); 



// массив дел на сегодня
const tasks = [
  'Сделать проектную работу',
  'Погулять с собакой',
  'Пройти туториал по Реакту'
];

// создадим из массива дел массив элементов
const taskElements = [];
for (let i = 0; i < tasks.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = tasks[i];
    taskElements[i] = listItem;
}

// добавим элементы в DOM с использованием цикла
for (let i = 0; i < taskElements.length; i++) {
  listNew.append(taskElements[i]);
} 

const deletButton = document.querySelector('.todo__item-button');

deletButton.addEventListener('click', function() {
  const varButton = deletButton.closest('.todo__item');
  varButton.remove();
})

//                                                       closest
//  Он возвращает ближайший родительский элемент с переданным селектором.

// пример
//// события для лайка

const likeCard = evt => {
  evt.target.closest('.element__button').classList.toggle('element__button_active');
};
// найдет ближайший елемент(.element__button) и добавит туда класс (element__button_active);

//                                               Клонирование элементов

// //клонировать элемент вместе со всем его содержимым
//const deepCopy = elem.cloneNode(true);

// // клонирование без дочерних элементов
//const shallowCopy = elem.cloneNode(false); 

// Метод cloneNode только копирует элемент, но не добавляет его в DOM. Для этого к копии используют append или другой метод добавления:
const container = document.querySelector('.container');
const element = document.querySelector('.element');

const elementCopy = element.cloneNode(true);

container.append(elementCopy);

//
const userTemplate = document.querySelector('#user').content;
//const usersOnline = document.querySelector('.users-online');

// клонируем содержимое тега template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

// наполняем содержимым
userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
userElement.querySelector('.user__name').textContent = 'Дюк Корморант';

// отображаем на странице
userTemplate.append(userElement);


//                                        Ссылка на родителя — parentElement

console.log(container.parentElement);

//                                        Псевдомассив детей — children


console.log(bodyElem.children); // HTMLCollection(19) [li, div, img, h1.title, div.todo-list, ul, div.container, template#user, noscript, script, img, script, script, script, script, script, script, script, script, user: template#user]

//                              Первый и последний ребёнок — firstElementChild и lastElementChild

console.log(body.firstElementChild);
console.log(body.lastElementChild);

const forExample = document.querySelector('.user__name');

console.log(listNew.previousElementSibling); // <h1 class="title">Title</h1>
console.log(listNew.nextElementSibling); // <ul></ul>
