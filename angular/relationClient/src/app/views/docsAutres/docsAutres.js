var ctrl = require('./docsAutresCtrl');
var service = require('./docsAutresService');
var moduleName = 'relationClient.docsAutres';

angular.module(moduleName, []);
angular.module(moduleName).factory('docsAutresService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('docsAutresCtrl', ['docsAutresService', ctrl]);

angular.module(moduleName).component('docsAutres', {
    template: require('./docsAutres.html'),
    controller: 'docsAutresCtrl',
    controllerAs: 'docsAutresCtrl',
    bindings: {}
});

module.exports = moduleName;