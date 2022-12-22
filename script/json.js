// JavaScript object natation

console.log(JSON); // JSON {объект...}

const objForJSON = {
  first: true,
  second: 100
}
// метод stringfly переведет объект в строку
//JSON.stringify(objForJSON);
const nextStringify = JSON.stringify(objForJSON);

console.log(nextStringify); // {"first":true,"second":100}

const nextParce = JSON.parse(nextStringify);

console.log(nextParce); // Object { first: true, second: 100 }

