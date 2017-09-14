var session = require('./formService');

var moduleName = 'relationClient.form';
angular.module(moduleName, []);
angular.module(moduleName).factory('formService', [session]); 