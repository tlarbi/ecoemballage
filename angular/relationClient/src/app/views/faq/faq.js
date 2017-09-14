var ctrl = require('./faqCtrl');
var service = require('./faqService');
var moduleName = 'relationClient.faq';

angular.module(moduleName, []);
angular.module(moduleName).factory('faqService', ['userService', 'compteWebResource', service]);
angular.module(moduleName).controller('faqCtrl', ['faqService', ctrl]);

angular.module(moduleName).component('faq', {
    template: require('./faq.html'),
    controller: 'faqCtrl',
    controllerAs: 'faqCtrl',
    bindings: {}
});

/*
angular.module(moduleName).config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
*/

module.exports = moduleName;
