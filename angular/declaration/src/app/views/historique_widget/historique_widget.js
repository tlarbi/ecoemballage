var ctrl = require('./historique_widgetCtrl');
var service = require('./historique_widgetService');

var moduleName = 'declaration.historique_widget';
angular.module(moduleName, []);

angular.module(moduleName).service('historique_widgetService', ['declarationResource', 'userService', service]);
angular.module(moduleName).controller('historique_widgetCtrl', ['historique_widgetService', ctrl]);
angular.module(moduleName).component('historiqueDeclarationWidget', {
    template: require('./historique_widget.html'),
    controller: 'historique_widgetCtrl',
    controllerAs: 'historique_widgetCtrl',
    bindings: {}
});
module.exports = moduleName;