const Character = require('./domain');


class Game {
    start() {
      console.log('game started');
    }
}
  
class GameSavingData {
}
  
function readGameSaving() {
}
  
function writeGameSaving() {
}

module.exports = Game;
exports.GameSavingData = GameSavingData;
exports.readGameSaving = readGameSaving;
exports.writeGameSaving = writeGameSaving;

