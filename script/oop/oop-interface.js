// ООП в интерфейсах
// карточки товаров
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
const cardList = document.querySelector('.card-list__items');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const defaultCardButton = document.querySelector('.filter__button_type_grid');
const horizontalCardButton = document.querySelector('.filter__button_type_column');

class Card {
  constructor(templateSelector) {
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

  _handleOpenPopup() {
    popupImage.src = this._image;
    popupElement.classList.add('popup_is-opened');
  }

  _handleClosePopup() {
    popupImage.src = '';
    popupElement.classList.remove('popup_is-opened');
  }

  _setEventListeners() {
    this._element.addEventListener('click', () => {
      this._handleOpenPopup();
    });
    console.log(this._element)

    popupCloseButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }
}

class DefaultCard extends Card {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;

    return this._element;
  }
  
  _handleOpenPopup(){
    popupCaption.textContent = this._description;
    super._handleOpenPopup();
  }
  
  _handleClosePopup(){
    popupCaption.textContent = '';
    super._handleClosePopup();
  }
}

class HorizontalCard extends Card {
  constructor(data, templateSelector) {
    super(templateSelector);
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector('.card__image').style.backgroundImage = `url(${this._image})`;
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__info').textContent = this._description;
    this._element.querySelector('.card__price-property').textContent = this._price;

    return this._element;
  }
}

const renderElements = (isGrid) => {
  cardList.innerHTML = '';
  items.forEach((item) => {
    const card = isGrid
      ? new DefaultCard(item, '.default-card')
      : new HorizontalCard(item, '.horizontal-card');

    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
};

defaultCardButton.addEventListener('click', () => {
  renderElements(true);
});

horizontalCardButton.addEventListener('click', () => {
  renderElements(false);
});

renderElements();


// ✅ для мессенджера

const messageList = [
	{
		image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
		text: 'Привет, нам срочно требуется доработать чат!'
	},
	{
		text: 'Это карточка пользователя',
    isOwner: true
	},
	{
		image: 'https://code.s3.yandex.net/web-code/card__image.jpg',
		text: 'Ответ!'
	},
];

class Message {
	constructor(selector) {
    this._selector = selector;
	}

  _getElement() {
  	const messageElement = document
      .querySelector(this._selector)
      .content
      .querySelector('.message')
      .cloneNode(true);

    this._elem = messageElement;
  }

	_setEventListeners() {
		this._elem.querySelector('.message__text').addEventListener('click', () => {
			this._handleClick();
		});
	}

	_handleClick() {
		this._element.querySelector('.message__text').classList.toggle('message__text_is-active');
	}
}

class UserMessage extends Message {
	constructor(data, selector) {
    super(selector);
		this._text = data.text;
	}
 
  generate() {
    super._getElement();
    //console.log(this._getElement())
    super._setEventListeners();

  	this._elem.querySelector('.message__paragraph').textContent = this._text;

  	return this._elem;
  }
};

class DefaultMessage extends Message {
	constructor(data, selector) {
    super(selector);
		this._text = data.text;
		this._image = data.image;
	}

  generate() {
    super._getElement();
    super._setEventListeners();

    this._elem.querySelector('.message__avatar').src = this._image;
  	this._elem.querySelector('.message__paragraph').textContent = this._text;
 
    //console.log(this);
  	return this._elem;
  }
};

messageList.forEach((item) => {
  const message = item.isOwner
    ? new UserMessage(item, '.message-template_type_user')
    : new DefaultMessage(item, '.message-template_type_default');

	const messageElement = message.generate();

	document.body.append(messageElement);
});

// создание элементов через ООП ✅

// class Instruct {
//   constructor(select){
//     // клон Node
//     this.$el = document.querySelector(select);
//   }

//   hide() {
//     this.$el.style.display = 'none';
//   }
//   show() {
//     this.$el.style.display = 'block';
//   }

// }

// class Box extends Instruct {
//   constructor(options) {
//     super(options.select);


//     this.$el.style.width = this.$el.style.height =  options.size + 'px';
//     this.$el.style.background = options.color
//   }
// }

// class Circle extends Box {
//   constructor(options){
//     super(options)

//     this.$el.style.borderRadius = '50%'
//   }
// }


// const box1 = new Box({
//   select: '#box1',
//   size: 100,
//   color: "red"
// })

// const box2 = new Box({
//   select: '#box2',
//   size: 300,
//   color: "blue"
// })

// const box3 = new Box({
//   select: '#box3',
//   size: 500,
//   color: "purple"
// })

// const box4 = new Box({
//   select: '#box4',
//   size: 10,
//   color: "black"

// })

// const circle = new Circle({
//   select: '#circle',
//   size: 90,
//   color: 'yellow'
// })



// const boxRulet = [box1, box2, box3, box4];

// function newFigure (){
//   const box = new Box({
//     select: '#box3',
//     size: 500,
//     color: "purple"
//   })
//   return box;
// }

// function getRandomFigure(arr) {
//   const randomId = Math.floor(Math.random() * arr.length);
//   return arr[randomId];
// }

// function generateFigure () {
//   getRandomFigure(allBox());
//   console.log('hello');
// }

// box1.hide();
// box1.show();
// const boxRed = document.querySelector('#box1');
// const boxBlue = document.querySelector('#box2');
// const boxPurple = document.querySelector('#box3');
// const boxBlack= document.querySelector('#box4');
// const box = document.querySelector('.box');

// box.addEventListener('click', () => box1.hide());

// box.addEventListener('click', () =>  getRandomFigure(boxRulet));
// box.addEventListener('click', () =>  newFigure(getRandomFigure(allBox())));
// box.addEventListener('click', () =>  generateFigure ());