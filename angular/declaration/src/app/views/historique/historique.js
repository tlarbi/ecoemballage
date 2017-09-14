var ctrl = require('./historiqueCtrl');
var service = require('./historiqueService');

var moduleName = 'declaration.historique';
angular.module(moduleName, []);

angular.module(moduleName).service('historiqueService', ['declarationResource', 'userService', 'unauthorizedPopInService', service]);
angular.module(moduleName).controller('historiqueCtrl', ['historiqueService', '$uibModal', '$scope', '$window', ctrl]);
angular.module(moduleName).component('historiqueDeclaration', {
    template: require('./historique.html'),
    controller: 'historiqueCtrl',
    controllerAs: 'historiqueCtrl',
    bindings: {}
});
angular.module(moduleName).filter('decimalSeparator', function () {
    return function (value) {
        try{
            var result = value.toLocaleString('fr-FR');
            if (result.split(',').length == 1) {
                result = result + ',00';
            }
            else
            {
                if (result.split(',').length == 2 && result.split(',')[1].length == 1)
                    result = result + '0';
            }
            return result;
        } catch (e) { return value;/*.toLocaleString('fr-FR');*/ }
    }
});
module.exports = moduleName;