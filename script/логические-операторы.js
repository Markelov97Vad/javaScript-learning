// Оператор логическое НЕ (!)

!false; // true 

!(3 > 2) === 3 <= 2; // true.
/* Потому что это превращается в проверку false === false */

// Функция проверки пароля
let password = 'JavaScript';
function checkPassword(pass) {
    if (!(pass === password)) {
        console.log('Неверный пароль');
        return;
    }

    console.log('Пароль правильный');
}

checkPassword('java script'); // 'Неверный пароль'
checkPassword('JavaScript'); // 'Пароль правильный' 

!'Непустая строка' // false 

console.log(!!true); // true
!!'непустая строка'; // true
!!''; // false
!!1; // true
!!0; // false 

// Оператор логическое ИЛИ (||)

true || false || true ; // true Оператору ИЛИ достаточно, чтобы хотя бы одно простое условие было истинным

let condition =  0 || NaN || 'строка' || false; // Значение переменной condition: 'строка'. 


function howDoYouDo(answer) {
  const result = answer || 'да ничего';
  return result;
}

howDoYouDo('всё прекрасно'); // "всё прекрасно"
howDoYouDo(); // "да ничего" 

const optimism = !'Жить' && !'Быть' || 'Жить и быть'; 
console.log(optimism); // "Жить и быть" , сначала выполняется !, потом &&, затем || 