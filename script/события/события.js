

//            🧰 Отмена всплытия 🧰
// Метод stopPropagation останавливает всплытие на элементе:

//evt.stopPropagation();
//event.stopImmediatePropagation(); // stopImmediatePropagation остановит только те обработчики, которые описаны после него. 

addButton.addEventListener('click', function(evt) {
  console.log('действие выполнено');
});

// addButton.addEventListener('click', function(evt) {
//   console.log('действие выполнено второй раз');
//   evt.stopImmediatePropagation();
// });

addButton.addEventListener('click', function(evt) {
  console.log('действие не будет выполнено');
});

// 🧰 Получение элементов форм 🧰

const form = document.forms.add;
const название = form.elements.title;
const артист = form.elements.artist;

console.log(document.forms); // Псевдо массив с формами
console.log(form);


form.addEventListener('submit', function (evt) {
  evt.preventDefault(); // отменяет стандартное поведение формы, не отправляет данные на сервер
  addSong(artistInput.value, titleInput.value);
  artistInput.value = '';
  titleInput.value = '';
});

console.log(document.forms.add.elements); // элементы формы 'add'
console.log(form.elements.title) // элемент "Название" в плейлисте

// ✅ Значение текстового поля

addButton.addEventListener('click', function(evt) {
  console.log(название.value);
  console.log(артист.value);
});


// ✅ Значение чекбокса и радиокнопки

const button = document.querySelector('.button_theme_check');

const checkbox1 = document.forms.formChoice.elements.myCheckboxYes;
const checkbox2 = document.forms.formChoice.elements.myCheckboxNo;

// по нажатию на кнопку выведем в консоль
// значения свойства checked чекбокса
button.addEventListener('click', function (evt) {
  evt.preventDefault();
  console.log(checkbox1.checked); // true или false
  //console.log(checkbox2.checked); // true или false
});

// ✅ Значение списка с вариантами ответов

const buttonS = document.querySelector('.button_theme_select');

const select = document.forms.formChoice.elements.mySelect;

buttonS.addEventListener('click', function (evt) {
  evt.preventDefault();
   console.log(select.value); // попадёт то, что выбрано
 }); 