module.exports = Tablet;

function Tablet() {
  this.touch = function(x, y) {
    var tabObj = {};
    tabObj.x = x;
    tabObj.y = y;
    return tabObj;
  };
}