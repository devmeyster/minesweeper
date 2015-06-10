// Mine Class

function Mine(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
};

Mine.prototype = {
  constructor: Mine, 
  location: function(){
    return [this.x, this.y];
  },
  explodedMines: function(mineList){
    //Filter through the mineList and check which mines explode
    var triggerMine = this;
    var results = mineList.filter(function(mine){
      return triggerMine.explode(mine);
    });
    return [triggerMine, results];
  },
  explode: function(otherMine){
    //Explode the mines
    var otherMine = otherMine.location();
    var x2 = otherMine[0];
    var y2 = otherMine[1];
    return this.withinBlastRadius(x2, y2);
  }, 
  withinBlastRadius: function(x2, y2){
    //Check if the cordinates x2, y2 fall within the explosion radius
    return Math.pow(this.x - x2, 2)  +  Math.pow(this.y - y2, 2) <= Math.pow(this.radius, 2);
  }
};

module.exports = Mine;
