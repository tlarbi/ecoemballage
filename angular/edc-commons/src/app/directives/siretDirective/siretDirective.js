var moduleName = 'common.siretDirective';
//var directiveName = 'siretControl'
angular.module(moduleName, []);

var siretDirectiveBody = require('./siretDirectiveBody');
var siretDirectiveService = require('./siretDirectiveService');

angular.module(moduleName).factory('siretDirectiveService', ['resourceService', '$q', siretDirectiveService]);
angular.module(moduleName).directive('siretControl', ['siretDirectiveService', 'commonService', '$q', siretDirectiveBody]);

module.exports = moduleName;
