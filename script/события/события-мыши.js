// 🧰 Объект event — мышь 🧰

// https://code.s3.yandex.net/web-developer/learning-materials/mouseover-ru.mp4

// событя мыши для Плейлиста 

const coverHeading = document.querySelector('.cover__heading');
const playListTitles = [
  'Сборник хитов',
  'ЯЯЯЯЯЯЯЯЯЯЗЬ',
  'Вышел кролик на крыльцо, почесать свое яйцо',
  'А еще раз',
  'Полный улет',
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener('dblclick', () => {
  coverHeading.textContent = getRandomElement(playListTitles);
});