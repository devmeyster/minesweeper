//Instructions: in terminal run "node mineSweeper.js challenge.txt"

if (process.argv.length < 3) {
  console.log('Please provide filename to read from');
  process.exit(1);
}
var reader = require('./read'),
    MineDetonator = require('./mineDetonator'),
    filename = process.argv[2],
    file = [],
    lines = [],
    mineCordinates = [];

// call `read` method from read.js to read `xxx.txt`
reader.read(filename, function( data ){
  file = data;
});

lines = file.match(/[^\r\n]+/g);
mineCordinates = lines.map(function(line){
  return line.split(" ").map(Number);
});


//Begin chain reaction

function startExplosions(mineCordinates){
  var detonator = new MineDetonator();
  mineCordinates.forEach(function(mine){
    detonator.addMine(mine[0], mine[1], mine[2]);
  });
  return detonator.maxExplosion();
};

console.log(startExplosions(mineCordinates));
