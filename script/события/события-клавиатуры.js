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

//                    🧰 Снятие слушателя removeEventListener 🧰


artistInput.removeEventListener('keydown', keyHandler); // отключит слушатель событий в input 'Исполнитель'

addButton.removeEventListener('click', function () {
  addSong(artistInput.value, titleInput.value);
}); // не сработает, тк js не видит эту функцию

// ✅
// character — это персонаж. В его свойстве health
// хранится количество очков здоровья

const character = {
  health: 200
};

// объявляем функцию increaseHealth,
// англ. increase health — увеличить здоровье
function increaseHealth(evt) {
    character.health = character.health + 50; // увеличиваем очки здоровья

  // как только зелье выпито,
  // обработчик удаляется с зелья
    evt.target.removeEventListener('click', increaseHealth);
}

// добавляем слушатель элементу зелья
// англ. potion — зелье
potion.addEventListener('click', increaseHealth); 
