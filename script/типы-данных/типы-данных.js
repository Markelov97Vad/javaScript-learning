
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