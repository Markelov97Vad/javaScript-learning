//      🧰 IIFE 🧰
// «немедленно вызванное функциональное выражение».

(function () {
  console.log('Hello world!');
})();

//

(function () {
  const button = document.querySelector('button');

  function handleClick(evt) {
    // код обработки клика
  }

  button.addEventListener('click', handleClick);
})();

/* Теперь в коде нет глобальных переменных, и если другой разработчик тоже решит 
воспользоваться переменной button, 
это никак не повлияет ни на его код, ни на ваш.*/

// ✅ Пример Инкапсуляции 

/* Модуль — это фрагмент программы, который реализует часть её функциональности. 
Обычно это отдельный файл с кодом, в 
котором эта функциональность реализована.*/
// Chart — модуль
const Chart = (function() {
  // локальные переменные, они не видны снаружи
  const data = [];
    
  // публичные методы, они будут доступны в объекте Chart
    return {
        render: function (data) { /* ... */ },
        setData: function (data) { /* ... */ }
    };
}()); // IIFE возвращает объект

Chart.render([[0,12], [1,22], [3,18]]); 

export const objII = {
 "text": 'значение из ./script/function/iife.js'
};