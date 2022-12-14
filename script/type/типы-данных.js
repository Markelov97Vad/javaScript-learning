
let integer = 10;
integer = 1234567890123456789012345678901234567890n // n - тип BigInt, без него число будет отображаться с точкой, поддерживается только в браузерах Firefox, Chrome, Edge и Safari, но не поддерживается в IE
integer = Infinity; // представляет собой математическую бесконечность ∞. Это особое значение, которое больше любого числа
integer = -Infinity;
integer = NaN; // означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции

// Булевый (логический)
let boolean = false || true; // правда или ложь
// при стравнении чисел
let comparison = 233 > 23; // true

// Null
let age = null //  специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

// Undefined
let nameOfundefined;
console.log(nameOfundefined) // выведет undefined
nameOfundefined = 25; // поменяли значение на 25
nameOfundefined = undefined // поменяли на undefined

// 🧰 Логические операторы  ||, &&, !

function howDoYouDo(answer) {
  const result = answer || 'да ничего' || 'норм';
  return result;
}

howDoYouDo('всё прекрасно'); // "всё прекрасно"
console.log(howDoYouDo()) // "да ничего" 

// ✅

!'Непустая строка' // false 

!(3 > 2) === 3 <= 2; // true.

// ✅
// среди правдивых
2 * 2 === 4 && 5 < 6 && 'Каждый может стать' // 'Каждый может стать' 
// среди ложных
const I = 2 * 2 === 4 && 0 && undefined // undefined 

console.log(I);

// ✅

const optimism = !'Жить' && !'Быть' || 'Жить и быть'; 

console.log(optimism); // "Жить и быть"

/* сначала выполняется !, потом &&, затем || */

const pessimism = !'Жить' && (!'Быть' || 'Жить и быть'); 

console.log(pessimism); // false

// ✅

function checkTheCar (distance, ownersNumber, crushed, price) {
  const condition = distance <= 100000 && (ownersNumber === 1 || ownersNumber === 2) && !crushed && price <= 1000000;
  return condition;
}

checkTheCar(50000, 2, false, 700000); // true — фух, работает 