var homeModule = require('./home/home');
var viewsModuleName = "views";
module.exports = viewsModuleName;
angular.module('views', [homeModule]);
