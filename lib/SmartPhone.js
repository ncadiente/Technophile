module.exports = SmartPhone;

var Phone = require('./Phone');
var GameConsole = require('./GameConsole');
var Tablet = require('./Tablet');
var WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  GameConsole.call(this, "Smart Phone");
  Tablet.call(this);
  WebBrowser.call(this);
}