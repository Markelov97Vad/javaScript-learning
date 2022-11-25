

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
  addSong(артист.value, название.value);
  артист.value = '';
  название.value = '';
  console.log('сработал второй обработчик')
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
const choiceForm = document.forms.formChoice;
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
  console.log(`Произошло событие ${evt.type}`)
});

//        🧰 События change и input 🧰
// ✅ для всех типов, кроме текстовых полей

choiceForm.addEventListener('input', function (evt) {
  console.log(`Произошло событие ${evt.type}`);
})

choiceForm.addEventListener('change', function (evt) {
  console.log(`Произошло событие ${evt.type}`);
})

// ✅  для текстовых полей

artistInput.addEventListener('input', function(evt) {
  console.log(`Произошло событие ${evt.type}`);
  //const isValid = artist.value.length > 0 && title.value.length > 0;
  //setSubmitButtonState(isValid);
});

artistInput.addEventListener('change', function(evt) {
  console.log(`Произошло событие ${evt.type}`);
})

form.addEventListener('input', function (evt) {
  const trueOrFalse = артист.value.length > 0 && название.value.length > 0;
  //console.log(isValid);
  setSubmitButtonState(trueOrFalse);
});

function setSubmitButtonState(ответИзформы) {
  if (ответИзформы) {
    addButton.removeAttribute('disabled');
    addButton.classList.remove('input__btn_disabled');
  } else {
    addButton.setAttribute('disabled', true);
    addButton.classList.add('input__btn_disabled');
  };
};
