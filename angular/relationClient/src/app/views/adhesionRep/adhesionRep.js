var ctrl = require('./adhesionRepCtrl');
var service = require('./adhesionRepService');
var moduleName = 'relationClient.adhesionRep';

angular.module(moduleName, ['ui.router']);
angular.module(moduleName).factory('adhesionRepService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('adhesionRepCtrl', ['adhesionRepService', 'formService', '$state', 'commonServices', ctrl]);
angular.module(moduleName).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $stateProvider
      .state('state', {
             url: "",
             template: require('./adhesionRep.html')
      })
      .state('state1', {
          url: "/state1",
          template: require('./adhesionRep.html')
      })
     .state('state2', {
         url: "/state2",
         template: require('./state/state2.html'),
         controller: 'adhesionRepCtrl.controlStep2'
     })
      .state('state3', {
          url: "/state3",
          template: require('./state/state3.html'),
          controller: 'adhesionRepCtrl.controlStep3'
      })
      .state('state4', {
          url: "/state4",
          template: require('./state/state4.html'),
          controller: 'adhesionRepCtrl.controlStep4'
      });
});

angular.module(moduleName).component('adhesionRep', {
    template: require('./adhesionRep.html'),
    controller: 'adhesionRepCtrl',
    controllerAs: 'adhesionRepCtrl',
    bindings: {}
});

module.exports = moduleName;
