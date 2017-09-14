//var validationModule = require('./validation/Validation');
var commonServices = require('./commonServices/commonServices');
var popupsAdhesionService = require('./popupsAdhesion/popupsAdhesionService');
//var resource = require('./../resources/Resources');
var moduleName = 'relationClient.commons';

angular.module(moduleName, []);

angular.module(moduleName).factory('commonServices', ['$uibModal', 'compteWebResource', 'userService', '$q', 'errorMessagesService', commonServices]);
angular.module(moduleName).factory('popupsAdhesionService', ['$uibModal', '$q', 'compteWebResource', popupsAdhesionService]);

module.exports = moduleName;
