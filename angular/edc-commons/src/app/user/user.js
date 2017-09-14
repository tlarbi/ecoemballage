var session = require('./userService');

var moduleName = 'common.user';
angular.module(moduleName, []);
angular.module(moduleName).factory('userService', ['$cookies', session]);