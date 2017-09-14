var errorMessagesService = require('./errorMessagesService');

var moduleName = 'common.errorMessages';
angular.module(moduleName, []);
angular.module(moduleName).factory('errorMessagesService', ['$filter', errorMessagesService]);
