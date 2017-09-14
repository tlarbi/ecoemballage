var moduleName = 'common.controlInputDirective';
angular.module(moduleName, []);

var controlInputDirectiveBody = require('./controlInputDirectiveBody');
var controlInputDirectiveService = require('./controlInputDirectiveService');

angular.module(moduleName).factory('controlInputDirectiveService', ['resourceService', controlInputDirectiveService]);
angular.module(moduleName).directive('controlInput', ['controlInputDirectiveService', 'commonService', '$q', controlInputDirectiveBody]);

module.exports = moduleName;
