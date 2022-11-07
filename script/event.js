// Объект event

const buttonEvent = document.querySelector('button');

buttonEvent.addEventListener('click', function (event) { // event доступен как параметр
    // // //console.log(event); // его можно использовать в теле обработчика //
    // в переменной eventTarget окажется элемент
    // button, на который мы кликнули
    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
}); 

