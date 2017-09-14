var unauthorizedPopInService = require('./unauthorizedPopInService');

var moduleName = 'common.unauthorizedPopIn';
angular.module(moduleName, []);
angular.module(moduleName).factory('unauthorizedPopInService', ['$injector', unauthorizedPopInService]);
