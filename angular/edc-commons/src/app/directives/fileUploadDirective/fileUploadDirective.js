var moduleName = 'common.fileUploadDirective';
//var directiveName = 'fileUploadControl'
angular.module(moduleName, []);

var fileUploadDirectiveBody = require('./fileUploadDirectiveBody');
var fileUploadDirectiveService = require('./fileUploadDirectiveService');

angular.module(moduleName).factory('fileUploadDirectiveService', fileUploadDirectiveService);
angular.module(moduleName).directive('fileUploadControl', ['fileUploadDirectiveService', 'commonService', '$parse', fileUploadDirectiveBody]);

module.exports = moduleName;
