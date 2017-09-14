var moduleName = 'common.telDirective';
//var directiveName = 'telControl'
angular.module(moduleName, []);

var telDirectiveBody = require('./telDirectiveBody');
var telDirectiveService = require('./telDirectiveService');

angular.module(moduleName).factory('telDirectiveService', ['$http', telDirectiveService]);
angular.module(moduleName).directive('telControl', ['telDirectiveService', telDirectiveBody]);

module.exports = moduleName;
