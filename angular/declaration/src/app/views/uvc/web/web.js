//var listeEmballage = require('./listeEmballage/listeEmballage');
//var remplirProduit = require('./remplirProduit/remplirProduit'); 

var ctrl = require('./webCtrl');
var service = require('./webService');

var moduleName = 'declaration.uvc.web';
var app = angular.module(moduleName, ['ui.bootstrap']);

//app.config(['$locationProvider', function ($locationProvider) {
//    $locationProvider.html5Mode(
//        {
//            enabled:true,
//            requireBase: false
//        });
//}]);
 

angular.module(moduleName).service('webService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('webCtrl', ['webService', '$uibModal', '$filter', '$location', '$scope', ctrl]);
angular.module(moduleName).component('uvcWeb', {
    template: require('./web.html'),
    controller: 'webCtrl',
    controllerAs: 'ctrl',
});
angular.module(moduleName).filter('decimalSeparator', function () {
    return function (value) {
        try {
            var result = value.toLocaleString('fr-FR');
            if (result.split(',').length == 1) {
                result = result + ',00';
            }
            else {
                if (result.split(',').length == 2 && result.split(',')[1].length == 1)
                    result = result + '0';
            }
            return result;
        } catch (e) { return value;/*.toLocaleString('fr-FR');*/ }
    }
});
angular.module(moduleName).filter('thousandSeparator', function () {
    return function (value) {
        try {
            var result = value.toLocaleString('fr-FR'); 
            return result;
        } catch (e) { return value;}
    }
});
module.exports = moduleName;