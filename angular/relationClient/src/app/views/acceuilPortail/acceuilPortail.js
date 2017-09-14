var ctrl = require('./acceuilPortailCtrl');
var service = require('./acceuilPortailService');
var moduleName = 'relationClient.acceuilPortail';
angular.module(moduleName, []);
angular.module(moduleName).factory('acceuilPortailService', ['requestGet', 'requestPost', '$q', service]);
angular.module(moduleName).controller('acceuilPortailCtrl', ['compteWebResource', 'userService', ctrl]);
angular.module(moduleName).component('acceuilPortail', {
    template: require('./acceuilPortail.html'),
    controller: 'acceuilPortailCtrl',
    controllerAs: 'acceuilPortailCtrl',
    bindings: {}
});

module.exports = moduleName;