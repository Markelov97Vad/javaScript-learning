let stringName = 'Егор'
let objact = {
  name: 'Вадим',
  age: 25,
  [stringName]: true,
};

console.log(objact[stringName]);