var ctrl = require('./excelCtrl');
var service = require('./excelService');

var moduleName = 'declaration.uvc.excel';
angular.module(moduleName, ['ui.bootstrap']);

angular.module(moduleName).service('excelService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('excelCtrl', ['excelService', '$uibModal', '$scope', '$location', ctrl]);
angular.module(moduleName).component('uvcExcel', {
    template: require('./excel.html'),
    controller: 'excelCtrl',
    controllerAs: 'excelCtrl',
    bindings: {}
});


angular.module(moduleName).directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

angular.module(moduleName).directive('validFile', function () {
    return {
        require:'ngModel',
        link:function(scope,el,attrs,ctrl){
            ctrl.$setValidity('validFile', el.val() != ''); 
            //change event is fired when file is selected
            el.bind('change',function(){
                ctrl.$setValidity('validFile', el.val() != ''); 
                scope.$apply(function(){
                    ctrl.$setViewValue(el.val());
                    ctrl.$render();
                });
            });
        }
    }
})



module.exports = moduleName;