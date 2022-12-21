// Деструктуризация

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