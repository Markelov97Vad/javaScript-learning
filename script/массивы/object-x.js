// 🧰 Копирование массива методом Object.assign 🧰

const boringTale = [
  'У попа была собака, он её любил,',
  'Она съела кусок мяса, поп её убил,',
  'В землю закопал,',
  'И надпись написал о том, что'
];

const boringTale2 = Object.assign([], boringTale);

console.log(boringTale2);
console.log(boringTale === boringTale2); // false. 
// Это два разных массива, но с одинаковым набором элементов. 