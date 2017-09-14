var resourceService = require('./resourceService');

var moduleName = 'common.resource';
angular.module(moduleName, []);
angular.module(moduleName).factory('resourceService', ['$http', resourceService]);
