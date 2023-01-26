// ? then — выполнится, если промис исполнен;
//?  catch — если отклонён;
//?  finally — выполнится в любом случае независимо от статуса промиса.
/* 
Промисы позволяют добавлять задачи в асинхронную очередь. Для этого нужно дописать в коде ещё один then или catch. 
Первые then и catch на странице получат те значения, которые мы передавали на вход функциям resolve и reject. 
Все последующие — то, что возвращали предыдущие методы then и catch.
*/


// Создаём промис
const newPromise = new Promise(function (resolve, reject) {
  /* Будем определять, обработан запрос
  или нет, случайным образом */
    const rand = Math.random() > 0.5 ? true : false;

    if (rand) {
        resolve('Запрос обработан успешно');
    } else {
        reject('Запрос отклонён');
    }
});

newPromise
  .then(function (value) { // Если промис был обработан

    /* Параметр value хранит значение, переданное методу
    resolve при создании промиса, то есть строку
    "Запрос обработан успешно" */

      console.log(value);
  })
  .catch(function (value) { // Если промис был отклонён

    /* Здесь параметр value будет хранить то значение,
    которое было передано методу reject, то есть строку
    "Запрос отклонён" */

      console.log(value + ', нам жаль :(');
  })
  .finally(function () { // В любом случае
      console.log('Как бы там ни было — запрос мы в глаза видели');
  });

// const newPromise = new Promise(function (resolve, reject) {
//   if (true) {
//     resolve('1');
//   }
//    else {
//   }
// });

// function firstAction(value) {
//   return `${value}, два`;
// }

// function secondAction(value) {
//   return `${value}, три`;
// }

// function thirdAction(value) {
//   console.log(value);
// }

// newPromise
// .then(firstAction)
// .then(secondAction)
// // .catch(thirdAction);

Promise.resolve('Этот промис исполнен')
  .then(function (value) {
    console.log(value); // "Этот промис исполнен"
  });

Promise.reject('Этот промис отклонён')
  .catch(function (value) {
    console.log(value); // "Этот промис отклонён"
  });


// ✅
const firstPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('first promise')
  } else {
    reject();
  }
})

const secondPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('second promise')
  } else {
    reject();
  }
})

const promises = [firstPromise, secondPromise];

Promise.all(promises).then((result) => {
  console.log(result);
})