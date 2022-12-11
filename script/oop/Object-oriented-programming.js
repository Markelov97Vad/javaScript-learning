// 🧰  Объекты в ООП

const song = {
  title: 'На заре',
  artist: 'Альянс',
  isLiked: false,
  like: function () {
      song.isLiked = !song.isLiked;
  }
};

/* Свойства объекта — это переменные, его атрибуты. 
Ещё их называют полями объекта. В коде выше — это song.title, song.artist и song.isLiked.
Поведение объекта — это его функции. Их называют методами объекта. 
В коде выше song.like — метод объекта song. */

//       🧰 this 🧰
// Свойство this — это ключевое слово, которое доступно внутри любой функции. 
//В зависимости от способа вызова функции this принимает разные значения.

function like() {
  this.isLiked = !this.isLiked;
}

function getSongInfo() {
  return `${this.artist} - ${this.title} (${this.releaseYear})`;
}

function createSong(title, artist, releaseYear) {
  const newSong = {
    title,
    artist,
    isLiked: false,
    like: like,
    releaseYear,
    getSongInfo: getSongInfo
  }

  return newSong;
}

// Ключевое слово 🧰 class 🧰

class Song {
  constructor(title, artist) {
      this.title = title;
      this.artist = artist;
  }

  like() {
      this.isLiked = !this.isLiked;
  }
}
// Ключевое слово new важно в вызове класса. Оно означает, 
// что результат этого вызова возвращает новый объект — экземпляр класса, который вызывают. 
// Попытка сделать это без new приведёт к ошибке: 
// «Конструктор класса нельзя вызвать без ключевого слова new».
const songCreate = new Song('Start Over', 'Any Given Day');

// Метод 🧰 constructor 🧰

/* Любой класс содержит метод constructor, который вызывается при создании нового объекта этого класса. 
Метод нужен, чтобы заполнить будущий объект данными.  */

class PodcastEpisode {
  constructor(title, artist, guest, duration) {
    this.title = title;
    this.artist = artist;
    this.isLiked = false;
    this.guest = guest;
    this.duration = duration;
  }
  getEpisodeInfo() {
    return `${this.artist}. ${this.title} - ${this.guest} (${this.getFormattedDuration()})`;
  }
  getFormattedDuration() {
    const minutes = Math.floor(this.duration / 60); // целое количество минут // 22
    const seconds = this.duration % 60; // получаем остаток от деления // 50
    return `${minutes} : ${seconds > 9 ?  seconds : '0' + seconds}` // 22:50
  }
  
  like() {
    this.isLiked = !this.isLiked;
  }
}