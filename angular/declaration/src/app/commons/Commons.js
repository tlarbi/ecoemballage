//var validationModule = require('./validation/Validation');
var popupsService = require('./popups/popupsService');
var moduleName = 'declaration.commons';
angular.module(moduleName, []);

angular.module(moduleName).factory('popupsService', ['$uibModal', '$q', popupsService]);

module.exports = moduleName;
