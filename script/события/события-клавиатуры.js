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

addButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addSong(artistInput.value, titleInput.value);
  console.log('сработал первый обработчик');
  setSubmitButtonState(false); // делает кнопку неактивной
});

artistInput.addEventListener('keydown', keyHandler);

titleInput.addEventListener('keydown', keyHandler);

function skolko() {
  // напишите свой код здесь
  if(!skolko.times) {
    skolko.times = 0;
  } 
  return skolko.times += 1;
}

//console.log(typeof 'string');
//typeof 'string' === typeof evt.key
function adc (evt){
  if (Number.isNaN(Number(evt))) {
    if (evt === 'й') {
      return `${evt}`+ ' - йогурт';
    }
     else if (evt === 'ц'){
      return `${evt}`+ ' - царь 👑';
    } else if (evt === 'у'){
      return `${evt}`+ ' - улитка 🐌';
    } else if (evt === 'к'){
      return `${evt}`+ ' - какашка';
    } else if (evt === 'е'){
      return `${evt}`+ ' - Ералаш';
    } else if (evt === 'н'){
      return `${evt}`+ ' - навоз';
    } else if (evt === 'г'){
      return `${evt}`+ ' - голубь';
    } else if (evt === 'ш'){
      return `${evt}`+ ' - шашлык';
    } else if (evt === 'щ'){
      return `${evt}`+ ' - щука';
    } else if (evt === 'з'){
      return `${evt}`+ ' - заноза';
    } else if (evt === 'х'){
      return `${evt}`+ ' - хлыст';
    } else if (evt === 'ъ'){
      return `${evt}`+ ' - знак';
    } else if (evt === 'ф'){
      return `${evt}`+ ' - фламинго';
    } else if (evt === 'ы'){
      return `${evt}`+ ' - Ы – голый вепрь, из книги Стругацких «Трудно быть богом»';
    } else if (evt === 'в'){
      return `${evt}`+ ' - вогон';
    } else if (evt === 'а'){
      return `${evt}`+ ' - астронавт';
    } else if (evt === 'п'){
      return `${evt}`+ ' - помидор';
    } else if (evt === 'р'){
      return `${evt}`+ ' - рыло';
    } else if (evt === 'о'){
      return `${evt}`+ ' - огрызок';
    } else if (evt === 'л'){
      return `${evt}`+ ' - льдина';
    } else if (evt === 'д'){
      return `${evt}`+ ' - дармоед';
    } else if (evt === 'ж'){
      return `${evt}`+ ' - жир';
    } else if (evt === 'э'){
      return `${evt}`+ ' - энергия';
    } else if (evt === 'ё'){
      return `${evt}`+ ' - ёж';
    } else if (evt === 'я'){
      return `${evt}`+ ' - ярлык';
    } else if (evt === 'ч'){
      return `${evt}`+ ' - чугун';
    } else if (evt === 'с'){
      return `${evt}`+ ' - сельдь';
    } else if (evt === 'м'){
      return `${evt}`+ ' - молот';
    } else if (evt === 'и'){
      return `${evt}`+ ' - иний';
    } else if (evt === 'т'){
      return `${evt}`+ ' - труба';
    } else if (evt === 'ь'){
      return `${evt}`+ ' - знак';
    } else if (evt === 'б'){
      return `${evt}`+ ' - боров';
    } else if (evt === 'ю'){
      return `${evt}`+ ' - ювелир';
    } 
  } else if (typeof 'string' === typeof evt) {
    return evt * evt;
  } else {
    console.log('все пропало');
  }
}

function keyHandler (event) {
  if (event.key === 'Enter') {
    addSong(artistInput.value, titleInput.value);
  }
  const xXx = event.key.toLowerCase()
  console.log(adc(xXx));
  
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
//potion.addEventListener('click', increaseHealth);

