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

//    Ключевое слово 🧰 class 🧰

class Song {
  // метод, функциональность
  constructor(title, artist) {
    // свойста, данные
    // this ссылка на этот возвращаемый объект.
    this.title = title;
    this.artist = artist;
  }
  // метод, функциональность
  like() {
    this.isLiked = !this.isLiked;
  }
}
// Ключевое слово new важно в вызове класса. Оно означает, 
// что результат этого вызова возвращает новый объект — экземпляр класса, который вызывают. 
// Попытка сделать это без new приведёт к ошибке: 
// «Конструктор класса нельзя вызвать без ключевого слова new».
const songCreate = new Song('Start Over', 'Any Given Day');

//         Метод 🧰 constructor 🧰

/* Любой класс содержит метод constructor, который вызывается при создании нового объекта этого класса. 
Метод нужен, чтобы заполнить будущий объект данными.  */

class PodcastEpisode {
  constructor(title, artist, guest, duration) {
    // свойства создаваемого объекта
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

// ✅ Приватные свойства и методы

class Car {  //максимальное значение бензобака// потребление топлива
  constructor(максЗначБензобака, потреблТоплива) {
      this.СтоимостьБензобака = 0;
      this._максЗначБензобака = максЗначБензобака;
      this._потреблТоплива = потреблТоплива; // литров на 100км
  }
// получить доступную стоимость газа
  _getAvailableGasValue(значениеГаза) {
      if (значениеГаза < 0) return 0;
      if (значениеГаза > this._максЗначБензобака) return this._максЗначБензобака;
      return значениеГаза;
  }
  // дозаправиться
  refuel(значениеГаза) {
      this._СтоимостьБензобака = this._getAvailableGasValue(значениеГаза);
  }
  
  getDistance() {
      return this._СтоимостьБензобака / this._потреблТоплива * 100;
  }
}
                    // литров // литров
const carClass = new Car(70, 9);
carClass.refuel(45);

console.log(carClass._СтоимостьБензобака); // 45. Свойство на самом деле не приватное. Его можно легко изменить
console.log(carClass.getDistance()); // 500 

// ✅ Действительно приватные свойства и методы

/* class Car {
    #gasTankValue
    #maxGasTankValue
    #fuelConsumption
    constructor(maxGasTankValue, fuelConsumption) {
        this.#gasTankValue = 0;
        this.#maxGasTankValue = maxGasTankValue;
        this.#fuelConsumption = fuelConsumption; // литров на 100км
    }

    #getAvailableGasValue(gasValue) {
        if (gasValue < 0) return 0;
        if (gasValue > this.#maxGasTankValue) return this.#maxGasTankValue;
        return gasValue;
    }
    
    refuel(gasValue) {
        this.#gasTankValue = this.#getAvailableGasValue(gasValue);
    }
    
    getDistance() {
        return this.#gasTankValue / this.#fuelConsumption * 100;
    }
}

var car = new Car(70, 9); 
// Эта строка приведёт к ошибке. Доступ к приватным свойствам извне отсутствует
car.#gasTankValue = -10   */

//                      🧰 Наследование 🧰
// Общий класс для наследования
class AudioItem {
  constructor(title, artist) {
    this._title = title;
    this._artist = artist;
  }
  like() {
    this.isLiked = !this.isLiked;
  }
}
 // extends расширяет возможности
class Audio extends AudioItem {
  constructor(releaseYear) {
    // функция super() - вызывает свойства из AudioItem
    super(title, artist);
    this._releaseYear = releaseYear;
    this.isLiked = false;
  }
  getAudioInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`
  }
}

class PodcastAudio extends AudioItem {
  constructor(guest, duration) {
    super(title, artist);
    this._guest = guest;
    this._duration = duration;
    this.isLiked = false;
  }
  getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} сек.)`;
  }
  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // целое количество минут
    const seconds = this._duration % 60; // остаток от деления на 60
    return `${minutes}:${seconds > 9 ?  seconds : '0' + seconds}`;
  }
}

// ✅ Еще пример
class Student {
  constructor(name, cohort, profession, trainingDuration) {
    this._name = name;
    this._cohort = cohort;
    this._profession = profession;
    this._trainingDuration = trainingDuration;
  }
} 

class WebDeveloperStudent extends Student {
  constructor(name, cohort) {
    super(name, cohort);
    this._profession = 'Web developer';
    this._trainingDuration = 10;
  }
}

class PythonDeveloperStudent extends Student {
  constructor(name, cohort) {
    super(name, cohort);
    this._profession = 'Python developer';
    this._trainingDuration = 9;
  }
}

class DataAnalystStudent extends Student {
  constructor(name, cohort) {
    super(name, cohort);
    this._profession = 'Data analyst';
    this._trainingDuration = 6;
  }
}

const student1 = new WebDeveloperStudent("Вадим Маркелов", 58);
const student2 = new DataAnalystStudent("Гриша Чукчин", 28);

console.log(student1);