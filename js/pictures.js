'use strict';

/*
var COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце-концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как-будто их избивают. Как можно было поймать такой неудачный момент?!'
]
*/

var pictureTemplate = document.querySelector('#picture-template').content;

var getRandomNumberForUrl = function () {
  var min = 1;
  var max = 25;
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

/*
var getRandomNumberForLikes = function() {
  var min = 15;
  var max = 200;
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

var getRandomComments = function() {
  var randomComments = Math.floor(Math.random() * COMMENTS.length);
  return COMMENTS[randomComments];
}
*/

var pictureUsers = [
  {
    url: 'pictures/' + getRandomNumberForUrl() + '.jpg'
    // likes: getRandomNumberForLikes(),
    // comments: getRandomComments()
  },
  {
    url: 'pictures/' + getRandomNumberForUrl() + '.jpg'
    // likes: getRandomNumberForLikes(),
    // comments: getRandomComments()
  },
  {
    url: 'pictures/' + getRandomNumberForUrl() + '.jpg'
    // likes: getRandomNumberForLikes(),
    // comments: getRandomComments()
  }
];

var renderPicture = function () {
  var pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('a.picture, img').src = pictureUsers.url;

  //  fotoElement.querySelector('.picture-likes').textContent = foto.likes;
  //  fotoElement.querySelector('.picture-comments').textContent = foto.comments;

  return pictureElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < pictureUsers.length; i++) {
  fragment.appendChild(renderPicture(pictureUsers[i]));
}
