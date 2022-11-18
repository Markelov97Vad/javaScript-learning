// Обьекты 

const car = {
  //ключ // значение свойств
  model: 'ВАЗ 2101',
  year: 1983,
  doors: 4,
  hasAirConditioner: false
};

// обьект в обьекте

const car2 = {
  model: 'ВАЗ 2101',
  year: 1983,
  doors: 4,
  hasAirConditioner: false,
  owner: {
    name: 'Пётр',
    age: 42
  }
}; 

let stringName = 'Егор'
let objact = {
  name: 'Вадим',
  age: 25,
  [stringName]: true,
};

console.log(objact[stringName]);