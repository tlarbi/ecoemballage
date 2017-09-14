var ctrl = require('./validationCtrl');
var service = require('./validationService');
var moduleName = 'declaration.validation';
angular.module(moduleName, ['ui.bootstrap']);

angular.module(moduleName).service('validationService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('validationCtrl', ['validationService', '$uibModal', '$scope', '$location', ctrl]);
angular.module(moduleName).component('validation', {
    template: require('./validation.html'),
    controller: 'validationCtrl',
    controllerAs: 'validationCtrl',
    bindings: {}
});
angular.module(moduleName).directive('materiau', function () {
    return {
        require: 'ngModel',

        link: function (scope, element, attrs, ngModelController) {
            //ngModelController.$parsers.push(function (data) {
            //    //convert data from view format to model format
            //    if (data === '')
            //        return 0; //converted
            //    else return data;
            //});

            ngModelController.$formatters.push(function (data) {
                //convert data from model format to view format
                if (data == 0)
                    return ''; //converted
                else return data;
            });
        }
    }
});
module.exports = moduleName;