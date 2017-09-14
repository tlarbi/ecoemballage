var compteWebRessource = require('./compteWeb/compteWeb');
var requestPost = require('./compteWeb/requestPost');
var requestGet = require('./compteWeb/requestGet');
var requestPut = require('./compteWeb/requestPut');

var moduleName = 'relationClient.resources';
angular.module(moduleName, []);
angular.module(moduleName).factory('compteWebResource', ['$http','$window', compteWebRessource]);
angular.module(moduleName).factory('requestPost', ['$http', requestPost]);
angular.module(moduleName).factory('requestGet', ['$http', requestGet]);
angular.module(moduleName).factory('requestPut', ['$http', requestPut]);

module.exports = moduleName;