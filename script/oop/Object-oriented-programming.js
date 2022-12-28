// 🧰  Объекты в ООП

const song = {
  title: 'На заре',
  artist: 'Альянс',
  isLiked: false,
  like: function () {
      song.isLiked = !song.isLiked;
  }
};

// ✅

function createSong2(title, artist) {
  // создаём новый объект песни*
  const newSong = {
      title,
      artist,
      isLiked: false,
      like: function () {
          newSong.isLiked = !newSong.isLiked;
      }
  }

  return newSong; // возвращаем этот объект
}

// теперь создавать объекты песен гораздо проще
const song1 = createSong2('Футбольный мяч', 'Антоха MC');
const song2 = createSong2('На заре', 'Альянс');
const song3 = createSong2('Ай', 'Хаски');

// тестируем, как данные и функциональность работают вместе
console.log(song1.isLiked === song2.isLiked); // true
console.log('Равенство функций :' + (`функция song1: ${song1.like}` === `Функция song2: ${song3.like}`))// false
console.log(song1.isLiked); // false
song1.like();
console.log(song1.isLiked); // true 


/* Свойства объекта — это переменные, его атрибуты. 
Ещё их называют полями объекта. В коде выше — это song.title, song.artist и song.isLiked.
Поведение объекта — это его функции. Их называют методами объекта. 
В коде выше song.like — метод объекта song. */


//    Ключевое слово 🧰 class 🧰 это описание того, какие данные и функциональность будут у объекта. 
//Это своего рода чертёж, на основании которого создают объекты — экземпляры данного класса. 
//Класс устанавливает в свои экземпляры свойства (данные) и методы (функциональность).

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
console.log(new Song);

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

// ✅ Приватные свойства и методы 🧰 Инкапсуляция 🧰
/* Когда мы используем публичные методы объекта, мы одновременно вызываем приватные методы и читаем или записываем данные в приватные свойства. 
Но эту информацию знать необязательно: приватные свойства инкапсулированы внутри класса. 
Часть их данных и функциональности скрыты от внешнего окружения.*/

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
console.log(carClass.refuel(45));

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
  constructor(title, artist, releaseYear) {
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
  constructor(title, artist, guest, duration) {
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
const songClass1 = new Audio ('Жорик Вартанов', "Небо", 2010)
const songClass2 = new PodcastAudio ('Жорик Вартанов', "Небо", 2010)
console.log(songClass1);
console.log(songClass2);

// ✅ Еще пример
class Student {
  constructor(name, cohort, profession, trainingDuration) {
    this._name = name;
    this._cohort = cohort;
    this._profession = profession;
    this._trainingDuration = trainingDuration;
  }
  getInfo() {
    return {
        name: this._name,
        cohort: this._cohort,
        profession: this._profession,
        trainingDuration: this._trainingDuration
    }
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

function getInfoList(students) {
  if (!Array.isArray(students)) return [];
  return students.map(student => student.getInfo());
}


const student1 = new WebDeveloperStudent("Вадим Маркелов", 58);
const student2 = new DataAnalystStudent("Гриша Чукчин", 28);

//console.log(student1);

console.log(getInfoList([student1, student2])); 

//                         🧰 Полиморфизм 🧰
/* В случае ООП, возлагая ответственность на класс за его код так же, как свои собственные данные, 
полиморфизм может быть достигнут в том, что у каждого класса есть своя функция, 
которая (при вызове) выполняется корректно для любого объекта.*/

class WebDeveloperStudent1 extends Student {
  constructor(name, cohort) {
    // ...
  }
  
  getInfo() {
    const info = super.getInfo();
    info.language = 'Javascript';
    return info;
  }
}
