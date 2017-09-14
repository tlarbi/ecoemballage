var ctrl = require('./errorCtrl');
var moduleName = 'common.error';

angular.module(moduleName, []);
angular.module(moduleName).controller('errorCtrl', [ctrl]);
angular.module(moduleName).component('commonerror', {
    template: require('./error.html'),
    controller: 'errorCtrl',
    controllerAs: 'errorCtrl',
    bindings: {
        errors: '=',
    }
});

module.exports = moduleName;