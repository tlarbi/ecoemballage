var ctrl = require('./docsannexecontratCtrl');
var service = require('./docsannexecontratService');
var moduleName = 'relationClient.docsannexecontrat';

angular.module(moduleName, []);
angular.module(moduleName).factory('docsannexecontratService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('docsannexecontratCtrl', ['docsannexecontratService', ctrl]);

angular.module(moduleName).component('docsannexecontrat', {
    template: require('./docsannexecontrat.html'),
    controller: 'docsannexecontratCtrl',
    controllerAs: 'docsannexecontratCtrl',
    bindings: {}
});

module.exports = moduleName;

