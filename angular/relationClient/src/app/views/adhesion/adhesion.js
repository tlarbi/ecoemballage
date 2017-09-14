var ctrl = require('./adhesionCtrl');
var conf = require('./adhesionStatesConfig');
var moduleName = 'relationClient.adhesion';

var comp1 = require('./comp1/comp1');
var comp2 = require('./comp2/comp2');
var navigationModule = require('./navigation/navigation');

angular.module(moduleName, ['ui.router', comp1, comp2, navigationModule]);
angular.module(moduleName).controller('adhesionCtrl', [ctrl]);

angular.module(moduleName).component('adhesion', {
    template: require('./adhesion.html'),
    controller: 'adhesionCtrl',
    controllerAs: 'adhesionCtrl',
    bindings: {}
});

angular.module(moduleName).component('adhesiontest', {
    template: '<div>Test Adhesion Component</div>',
    controller: function(){},
    bindings: {}
});


angular.module(moduleName).config(conf);



module.exports = moduleName;