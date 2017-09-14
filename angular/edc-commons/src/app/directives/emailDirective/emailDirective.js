var moduleName = 'common.emailDirective';
//var directiveName = 'emailControl'
angular.module(moduleName, []);

var emailDirectiveBody = require('./emailDirectiveBody');
var emailDirectiveService = require('./emailDirectiveService');

angular.module(moduleName).factory('emailDirectiveService', ['resourceService', emailDirectiveService]);
angular.module(moduleName).directive('emailControl', ['emailDirectiveService', 'commonService', emailDirectiveBody]);

module.exports = moduleName;
