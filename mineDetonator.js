//MineDetonator Class
var Mine = require('./mine');

function MineDetonator() {
  this.mines = [];
};

MineDetonator.prototype = {
  constructor: MineDetonator, 
  addMine: function(x, y, radius) {
    this.mines.push(new Mine(x, y, radius));
  },
  maxExplosion: function(){
    if(this.mines.length === 0){
      return null;
    }
    var result;
    var max = 0;
    var otherMines = this.mines;
    var resultingMines = [];
    var explodedMines = this.mines.map(function(mines){
      return mines.explodedMines(otherMines);
    });
    //Count the maximum number of mines exploded per any given mine
    //Update the max variable
    //Add the mines that triggered maximum explosions to the resultingMines array
    explodedMines.map(function(mines){
      var count = mines[1].length;
      var triggerMine = mines[0];
      if(count > max){
        max = count;
        resultingMines = [triggerMine];
      } else if(count === max){
        resultingMines.push(triggerMine);
      }
    });
    //Create the output by combining the max number of explosions with the list of mines 
    result = "" + max;
    resultingMines.forEach(function(mine){
      result += "\n" + mine.x +" " + mine.y;
    });
    return result;
  }
};

module.exports = MineDetonator;
