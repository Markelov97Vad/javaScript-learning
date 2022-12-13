// ООП в интерфейсах

const items = [
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID',
    description: 'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
    price: '82 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
    title: 'BIOLOID Premium kit',
    description: 'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
    price: '126 000'
  },
  {
    image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
    title: 'Airwheel',
    description: 'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
    price: '145 000'
  },
];

class Card {
  constructor(data, templateSelector) {
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;

    return this._element;
  }
}

items.forEach((item) => {
  const card = new Card(item, '.horizontal-card');
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.card-list__items').append(cardElement);
});


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
	constructor(data, selector) {
		this._text = data.text;
		this._image = data.image;
		this._selector = selector;
	}

	_getElement() {
    const messageElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.message')
      .cloneNode(true);

    return messageElement;
	}

  generate() {
    this._element = this._getElement();
  	this._element.querySelector('.message__avatar').src = this._image;
  	this._element.querySelector('.message__paragraph').textContent = this._text;

    this._setEventListeners();

  	return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.message__text').addEventListener('click', () => {
      this._handleClick();
    });
  }

  _handleClick() {
    this._element.querySelector('.message__text').classList.toggle('message__text_is-active');
  }
}
const page = document.querySelector('.page')
messageList.forEach((item) => {
	const message = new Message(item, '.message-template_type_default');
	const messageElement = message.generate();

	page.append(messageElement);
});