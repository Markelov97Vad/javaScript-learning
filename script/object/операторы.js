//                               🧰 delete 🧰
// опеартор который удаляет
const objOperator = { one: 1 };
console.log(objOperator.one); // 1

delete objOperator.one;
console.log(objOperator.one); // undefined

//                                 🧰 in 🧰
// Проверка наличия ключа в объекте

const whoIsAtHome = { 
  father: 'папа',
  mother: 'мама'
};

console.log('father' in whoIsAtHome); // true 

// ✅ 

const home = { // англ. home, «дом»
  mother: 'мама',
  father: 'папа',
  children: {
        child1: 'сыночек',
        child2: 'сыночек',
        child3: 'сыночек',
        child4: 'сыночек',
        child5: 'лапочка-дочка',
    }
};

if ('mother' in home) {
    console.log('Позовите маму');
} else if ('father' in home) {
    console.log('Позовите папу');
} else {
    console.log('Попозже зайду');
} // "Позовите маму"

delete home.mother;

if ('mother' in home) {
    console.log('Позовите маму');
} else if ('father' in home) {
    console.log('Позовите папу');
} else {
    console.log('Попозже зайду');
} // "Позовите папу" 

// ✅ 
const right = {
  right1: '⇸',
  right2: '→',
  notLeft: '⇍',
  right3: '⇛',
  right4: '⇉',
  left: '⇐'
};

delete right.left;

console.log(right);

// ✅ Часто нам нужно проверить не столько наличие в объекте ключа, сколько является ли его значение truthy:

const house = { 
  father: 'папа',
  children: {
      child1: 'сыночек',
      child2: 'сыночек',
      child3: 'сыночек',
      child4: 'сыночек',
      child5: 'лапочка-дочка',
  }
}

if (house.father) {
console.log('Откройте, пожалуйста');
} else {
console.log('Позовите, пожалуйста, кого-нибудь из взрослых');
};

// ✅

const welcomeMessages1 = {
  russian: 'Добро пожаловать',
  english: 'Welcome',
  french: 'Bienvenue',
  italian: 'Benvenuto',
  spanish: 'bienvenido',
  chinese: '歡迎',
  finnish: 'Tervetuloa'
};

function deleteWelcomeMessages(propsArr) {
  propsArr.forEach( key => {
    delete welcomeMessages1[key];
  });
}

deleteWelcomeMessages(['italian', 'french']);

console.log(welcomeMessages1);

/* Теперь итальянский и французский переводы удалены:

  {
    russian: "Добро пожаловать",
    english: "Welcome",
    spanish: "bienvenido",
    chinese: "歡迎",
    finnish: "Tervetulo"'
  }

*/
