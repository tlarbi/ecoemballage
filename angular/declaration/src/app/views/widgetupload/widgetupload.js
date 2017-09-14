var ctrl = require('./widgetuploadCtrl');
var service = require('./widgetuploadService');
var moduleName = 'declaration.widgetupload';
angular.module(moduleName, []);

var app = angular.module(moduleName, []);


angular.module(moduleName).service('widgetuploadService', ['declarationResource','userService',service]);
angular.module(moduleName).controller('widgetuploadCtrl', ['widgetuploadService', '$location', '$uibModal', '$scope', '$document', ctrl]);
angular.module(moduleName).component('widgetupload', {
    template: require('./widgetupload.html'),
    controller: 'widgetuploadCtrl',
    controllerAs: 'widgetuploadCtrl',
    bindings: {
    }
});

module.exports = moduleName;





