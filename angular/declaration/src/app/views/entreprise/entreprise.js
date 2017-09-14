var ctrl = require('./entrepriseCtrl');
var service = require('./entrepriseService');
var moduleName = 'declaration.entreprise';
angular.module(moduleName, []);

var app = angular.module(moduleName, []);

//app.config(['$locationProvider', function ($locationProvider) {
//    $locationProvider.html5Mode(
//        {
//            enabled:true,
//            requireBase: false
//        });
//}]);

angular.module(moduleName).service('entrepriseService', ['declarationResource','userService',service]);
angular.module(moduleName).controller('entrepriseCtrl', ['entrepriseService','$location','$uibModal','$scope','$filter', ctrl]);
angular.module(moduleName).component('entreprise', {
    template: require('./entreprise.html'),
    controller: 'entrepriseCtrl',
    controllerAs: 'entrepriseCtrl',
    bindings: {
    }
});

module.exports = moduleName;





