var ctrl = require('./widgetrpcCtrl');
var service = require('./widgetrpcService');
var moduleName = 'declaration.widgetrpc';
angular.module(moduleName, []);

var app = angular.module(moduleName, []);

angular.module(moduleName).service('widgetrpcService', ['declarationResource','userService', '$q',service]);
angular.module(moduleName).controller('widgetrpcCtrl', ['widgetrpcService', 'userService', ctrl]);
angular.module(moduleName).component('widgetrpc', {
    template: require('./widgetrpc.html'),
    controller: 'widgetrpcCtrl',
    controllerAs: 'widgetrpcCtrl',
    bindings: {
      
    }
});

module.exports = moduleName;





