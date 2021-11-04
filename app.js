//BUTTONS
const rock_btn = document.querySelector('.rock');
const paper_btn = document.querySelector('.paper');
const scissors_btn = document.querySelector('.scissors');
const start_btn = document.querySelector('.start');
//IMAGES
const player_img = document.querySelector('.player-img');
const bot_img = document.querySelector('.bot-img');

//SPANS
const span_player = document.querySelector('.span-player');
const span_bot = document.querySelector('.span-bot');
// CONTAINERS
const starter_container = document.getElementById('starter');
const game = document.getElementById('game');

//GLOBAL VARIABLES

const posibility = ['rock', 'paper', 'scissors'];

let player_score = 0;
let bot_score = 0;

let player_choose = '';
let bot_choose = '';

// LOGIiC FOR PLAYER

rock_btn.addEventListener('click', function () {
  clickBtb('rock');
});

paper_btn.addEventListener('click', function () {
  clickBtb('paper');
});

scissors_btn.addEventListener('click', function () {
  clickBtb('scissors');
});

start_btn.addEventListener('click', function () {
  starter_container.classList.add('hidden-class');
  game.classList.remove('hidden-class');
});

const clickBtb = function (choose) {
  player_choose = `${choose}`;
  player_img.src = `${choose}.png`;

  bot();
  upDate_points();
};
//LOGIC FOR BOT

const randomNumber = (num) => Math.floor(Math.random() * num);

const bot = function () {
  bot_choose = posibility[randomNumber(3)];
  bot_img.src = `${bot_choose}.png`;
  getPoint();
};

const getPoint = function () {
  if (player_choose === 'paper' && bot_choose === 'paper') {
    player_score++;
    bot_score++;
  } else if (player_choose === 'paper' && bot_choose === 'rock') {
    player_score++;
  } else if (player_choose === 'paper' && bot_choose === 'scissors') {
    bot_score++;
  } else if (player_choose === 'rock' && bot_choose === 'rock') {
    player_score++;
    bot_score++;
  } else if (player_choose === 'rock' && bot_choose === 'scissors') {
    player_score++;
  } else if (player_choose === 'rock' && bot_choose === 'paper') {
    bot_score++;
  } else if (player_choose === 'scissors' && bot_choose === 'scissors') {
    player_score++;
    bot_score++;
  } else if (player_choose === 'scissors' && bot_choose === 'rock') {
    bot_score++;
  } else if (player_choose === 'scissors' && bot_choose === 'paper') {
    player_score++;
  }
};

const upDate_points = function () {
  span_bot.innerHTML = `${bot_score}`;
  span_player.innerHTML = `${player_score}`;
};

start_btn.addEventListener('click', function () {});
