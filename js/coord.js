(function () {
  if (typeof SnakeGame === "undefined"){
    window.SnakeGame = {};
  }

  var Coord = SnakeGame.Coord = function (){};

  Coord.plus = function(pos, dir) {
    var nextPos = pos.slice(0);

    switch (dir){
      case 'N':
        nextPos[1] += 1;
        break;
      case 'S':
        nextPos[1] -= 1;
        break;
      case 'E':
        nextPos[0] += 1;
        break;
      case 'W':
        nextPos[0] -= 1;
        break;
    }

    return nextPos;
  }

  Coord.equals = function(thisPos, otherPos) {
    return (thisPos[0] === otherPos[0] && thisPos[1] === otherPos[1]);
  }

  Coord.opposite = function (thisDir, thatDir) {
    switch (thisDir) {
      case 'N':
        return thatDir === 'S';
        break;
      case 'S':
        return thatDir === 'N';
        break;
      case 'E':
        return thatDir === 'W';
        break;
      case 'W':
        return thatDir === 'E';
        break;
    }
  }

  Coord.randomPos = function (dimX, dimY) {
    return [
      Math.floor(Math.random() * dimX),
      Math.floor(Math.random() * dimY)
    ];
  }

  Coord.collidesWithArray = function (pos, array) {
    return array.some( function(el) {
      return Coord.equals(el, pos);
    });
  }

})();
