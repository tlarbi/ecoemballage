var ctrl = require('./navigationCtrl');
var moduleName = 'relationClient.adhesion.navigation';

angular.module(moduleName, []);
angular.module(moduleName).controller('navigationCtrl', ['$state', ctrl]);

angular.module(moduleName).component('navigation', {
    template: require('./navigation.html'),
    controller: 'navigationCtrl',
    controllerAs: 'navigationCtrl',
    bindings: {
        test2: '='
    }
});

module.exports = moduleName;