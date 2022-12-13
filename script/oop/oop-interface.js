// ООП в интерфейсах

class Card {
  constructor(title, description, price, image) {
    this._title = title;
    this._description =  description;
    this._price =  price;
    this._image =  image;
  }
  
  _getTemplate() {
    const cardElem = document.querySelector('.horizontal-card').content.querySelector('.card').cloneNode(true);
    return cardElem;
  }
}
const test1 = new Card;
console.log(test1._getTemplate())

// ✅ для мессенджера

const messageList = [
	{
		image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
		text: 'Привет, нам срочно требуется доработать чат!'
	},
	{
		image: 'https://code.s3.yandex.net/web-code/card__image-lake.jpg',
		text: 'Теперь мы можем создавать сколько угодно карточек!'
	},
];

class Message {
	constructor(text, image) {
		this._text = text;
		this._image = image;
	}
  	
  _getElement() {
    const messageElement = document
      .querySelector('.message-template')
      .content
      .querySelector('.message')
      .cloneNode(true);
          
    return messageElement;
  }
  
  generate() {
    this._element = this._getElement();
    
    this._element.querySelector('.message__avatar').src = this._image;
    this._element.querySelector('.message__paragraph').textContent = this._text;
    
    return this._element;
  }
}
const body = document.querySelector('#body')
messageList.forEach((item) => {
	const message = new Message(item.text, item.image);
	const messageElement = message.generate();
  
  body.append(messageElement);
});