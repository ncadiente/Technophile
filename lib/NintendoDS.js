module.exports = NintendoDS;

var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS() {
  GameConsole.call(this, "Nintendo DS");
  WebBrowser.call(this);
}