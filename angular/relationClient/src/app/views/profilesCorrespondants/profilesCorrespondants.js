var ctrl = require('./profilesCorrespondantsCtrl');
var service = require('./profilesCorrespondantsService');
var moduleName = 'relationClient.profilesCorrespondants';

angular.module(moduleName, []);
angular.module(moduleName).factory('profilesCorrespondantsService', ['compteWebResource', '$cookies', 'userService', service]);
angular.module(moduleName).controller('profilesCorrespondantsCtrl', ['profilesCorrespondantsService', 'errorMessagesService', ctrl]);
angular.module(moduleName).component('profilesCorrespondants', {
    template: require('./profilesCorrespondants.html'),
    controller: 'profilesCorrespondantsCtrl',
    controllerAs: 'profilesCorrespondantsCtrl',
    bindings: {}
});

module.exports = moduleName;
