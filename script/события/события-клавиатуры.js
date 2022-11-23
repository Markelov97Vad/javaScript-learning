// 🧰 событие keydown 🧰

/* 
document.addEventListener('keydown', function () {
  console.log('На что ни нажми — я появлюсь');
});  
*/


// 🧰 Разница между keydown, keypress и keyup 🧰
// https://pictures.s3.yandex.net/resources/keyup_down_press_2_1588417097.gif

// сработает один раз, когда нажали клавишу
// document.addEventListener('keypress', function() {
//   console.log('Нажали клавишу');
// });

// // будет срабатывать много раз, когда клавиша нажата
// document.addEventListener('keydown', function() {
//   console.log('Клавиша зажата');
// });

// // сработает один раз, когда отпустили клавишу
// document.addEventListener('keyup', function() {
//   console.log('Отпустили клавишу');
// });

// . 🧰 у event есть свойства key и keyCode. Первое хранит название нажатой клавиши, второе — её уникальный код. 🧰

// ✅ события для Плейлиста

addButton.addEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener('keydown', keyHandler);

titleInput.addEventListener('keydown', keyHandler);

function keyHandler (event) {
  if (event.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
};