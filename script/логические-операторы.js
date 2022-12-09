// ✅ Оператор логическое НЕ (!)

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

// ✅ Оператор логическое ИЛИ (||)

true || false || true ; // true Оператору ИЛИ достаточно, чтобы хотя бы одно простое условие было истинным

let condition =  0 || NaN || 'строка' || false; // Значение переменной condition: 'строка'. 


function howDoYouDo(answer) {
  const result = answer || 'да ничего';
  return result;
}

howDoYouDo('всё прекрасно'); // "всё прекрасно"
howDoYouDo(); // "да ничего" 


// 🧰 Конструкция switch-case

//const where = prompt('Куда едешь? Налево, направо или прямо?', '').toLowerCase();

// switch (where) {
//   case 'налево':
//     alert('Быть тебе женатым');
//     break
//   case 'прямо':
//     alert('Живым не бывать');
//     break;
//   case "направо":
//     alert('Быть тебе богатым');
//     break 
// }




// 🧰 тернарный обератор (?)
// /* условие */ ? /* значение, если true */ : /* значение, если false */ 

// const tern1 = 5;
// const tern2 = tern1 > 10 ? 5 : 'вагон';

// console.log(tern2); // 0, потому что a > 10 — false 

// ✅

// const ageP = parseInt(prompt('Ваш возраст?'), 10);
// const ageC = ageP > 18 ? "Принимайте участие в голосовании!" : 'Вам ещё не исполнилось 18 лет.';
// console.log(ageC);

// ✅

// const typeCountry = prompt(`Укажите гражданство`.toLocaleLowerCase());
// const typeAge = parseInt(prompt('Укажите возраст'), 10)
// const typeDebt = parseInt(prompt('Укажите сумму долгов'), 10);

// function typeAll () {
//   const check1 = typeCountry.includes('рф') || typeCountry.includes('россия') ? true : console.log('Только гражданам РФ');
//   const check2 = typeAge >= 18 ? true : console.log('Выдаем кредит только совершеннолетним');
//   const check3 = typeDebt <= 0 ? true : console.log("У вас не должно быть долгов");

//   const checkLast = check1 && check2 && check3 ? 'Вам одобрен кредит' : 'Вам отказано!';
//   console.log(console.log(checkLast));
// }

// typeAll ();

// ✅
// Допишите код, чтобы он проверял, есть ли в пароле вопросительный знак — и если есть, выводил его позицию на экран:

// const passwordQwest = prompt('Введите пароль:', '');
// console.log(passwordQwest);

// for (let i = 0; i <= passwordQwest.length; i = i + 1) {
//     if (passwordQwest.includes('?')) {
//       if(!(passwordQwest.indexOf('?') !== i)) {
//         alert('"?" является ' + (i + 1) + ' символом');
//       }
//     } 
//     if (i === passwordQwest.indexOf('?')) {
//       break
//     }
   
// }

// for (let i = 0; i <= passwordQwest.length; i = i + 1) {
//   if (passwordQwest.indexOf('?') !== i) continue;
//   if((passwordQwest.indexOf('?') === i)){
//       alert('"?" является ' + (i + 1) + ' символом');
//     }
   
//   if (i === passwordQwest.indexOf('?')) {
//     break
//   }
 
// }

let tesTobJ = {
  true: 'false'
}

tesTobJ = {
  false: 'true'
}
console.log(tesTobJ);


const hum1 = {};
const women = 'mom';

hum1["numberOne"] = women;
console.log(hum1);

const expenO = {
  'руп': 'на суп',
  'трёшку': 'на картошку',
  'пятёрку': 'на тетёрку', 
  'десятку': 'на куропатку',
  'сотку': 'на *одку'
};

/* в виде объекта записано стихотворение Николая Олейникова 
«Перечень расходов на одного делегата» */

Object.keys(expenO).forEach(function (a , b, c) {
  console.log(expenO[a]);
});

/* в консоли выводятся ключи:

  руп
  трёшку
  пятёрку
  десятку
  сотку

*/ 

