//                                         Проверка элементов массива. Метод SOME
//                                              Не меняет исходный массив
// Метод some проверяет, есть ли в массиве хотя бы один элемент, который соответствует определённому правилу. Колбэк с этим правилом проверяет каждый элемент и возвращает true или false:


const myHeroes = ['Batman', 'Spiderman', 'Iron man'];

const RobertpPattinson = myHeroes.some((el) => {
  return el === 'Batman'
})

console.log(RobertpPattinson); // true 

//

const haystack = ['сено', 'сено', 'сено', 'сено', 'сено', 'сено'];

const needle = haystack.some(function(item) {
    return item === 'иголка';
});

console.log(needle); // false 