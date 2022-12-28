// Деструктуризация
// Деструктуризация — это способ записи значений в переменные. Используя её, можно заметно сократить код. 

function calcValue1 (a,b) {
  return [
    a * b,
    a - b,
    a / b,
    a + b
  ]
};

const [ sumM,,sub ] = calcValue1( 600, 20)
const [,,,un] = calcValue1(15, 5) // 20
const [...other] = calcValue1(13,2)
const [volv = 'переопределение'] = calcValue1(20, 20);
console.log(sumM, sub); // 12000 30
console.log(un);
console.log(other);
console.log(volv);

const human1 = {
  name: 'Vad',
  ageH: 25,
  adress: {
    country: 'Rus',
    city: 'St.P'
  }
}

// const nameHum = human1.name
const {name: nameHum, 
  ageH, 
  frand = 'false',
  adress: {city: newKey}
} = human1
const {name: secName, ...info} = human1
console.log(nameHum, ageH, frand, newKey);
console.log(secName, info);

function logPers ({name: fName, ageH}) {
  console.log(fName, ageH)
}

logPers(human1);

// ✅ Объект

const { A: type, B: nameV } = { A: 'кресло', B: 'Василий' };
console.log(type, nameV); // кресло Василий

// ✅ Массив

const [type1, nameZ] = ['кресло', 'Василий'];
console.log(type1, nameZ); // кресло Василий

// ✅ Функция

const chair = { type: 'кресло', name: 'Василий' };

const whereToSit = ({ type, name }) => {
return `Садитесь в ${type} «${name}»`;
};

console.log(whereToSit(chair)); // Садитесь в кресло «Василий»

// ✅ значения по умолчанию:

const { nameNew= 'Василий' } = {};
const [typeNew = 'кресло'] = [];

console.log(typeNew, nameNew); // кресло Василий

// ✅

const greekGods = { love: 'Афродита', war: 'Арес', trade: 'Гермес' };

/* перечисляем свойства, которые нужно достать, в фигурных скобках */
const { love, war, trade } = greekGods; // имена переменных совпадают с ключами объекта

console.log(love, trade); // Афродита Арес Гермес

// ✅

const precipitation = ['дождь', 'морось', 'роса'];
const [rain, drizzle, dew] = precipitation;

console.log(rain, drizzle, dew); // дождь морось роса 

const userNameInfo = {
  name:'Семен',
  work: 'разработчик'
}

const paymentInfo = {
  method: 'card',
  amount: 1000,
  currency: 'rub'  
};

const printUserParams = ({ name: nameInUserN , work}, { amount, ...payment }) => {
  console.log( nameInUserN, work);
  console.log(amount, payment);
};
// console.clear()
printUserParams(userNameInfo, paymentInfo);

// Класс с использование деструктуризации ✅

const textZet = 'Цель оправдывает средства';
const picMyLife = 'https://budapest';
const loveMoment = 'Music'
class Destruct {
  constructor({textZet, picMyLife, loveMoment}){
    this._textZet = textZet;
    this._picMyLife = picMyLife;
    this._loveMoment = loveMoment;
  }
}

// Если приходит объект без параметра, то значение будет по умолчанию ✅

function consUserInf ({name = 'Монгол', dogName ="Гошан"}) {
  //const {name = 'Монгол', dogName ="Гошан"} = user;
  console.log(`${name}, ${dogName}`);
}
consUserInf({name:'Иришка', dogName:'Геркулес'});
consUserInf({dogName:'Тузик'});

// ✅

function getFirstThreeUsers(users) {
  const value = [firstOf = 'Дэвид', secondOf = 'Леонард', thirdOf = 'Стивен'] = users;
  console.log(firstOf, secondOf, thirdOf);
}

getFirstThreeUsers(['пахом', 'Венцислав']); // пахом Венцислав Стивен

   


   