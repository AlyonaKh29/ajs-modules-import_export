const { GameSavingData, readGameSaving: loadGame, writeGameSaving: saveGame } = require('./game');
/* Нельзя одним импортом импортировать дефолтный и именованый экспорт,
тогда появляется ошибка 'Uncaught TypeError: Game is not a constructor...' */
const Game = require('./game'); 


const game = new Game();
game.start();

