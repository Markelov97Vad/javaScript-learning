const songsContainer = document.querySelector('.songs-container');
const addButton = document.querySelector('.input__btn_action_add');
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

const buba = {
  singEl: '.song__artist',
  songTiEl: '.song__title',
  likeEl : ".song__like",
  SongLiAct: 'song__like_active'
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector(buba.singEl).textContent = artistValue;
  songElement.querySelector(buba.songTiEl).textContent = titleValue;
  songElement.querySelector(buba.likeEl).addEventListener('click', function (evt) {
    evt.target.classList.toggle(buba.SongLiAct);
  });

  songsContainer.append(songElement);
  // artistInput.value = '';
  // titleInput.value = '';
  form.reset(); // обнуляет значение полей
}

