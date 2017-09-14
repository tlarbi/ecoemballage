module.exports = function () {

    return {
        restrict: 'AE',
        scope: {
            replace: '@'
        },
        replace: true,
        transclude: true,
        template: require('./selectCountries.html'),
        controller: 'selectCountriesCtrl',
        controllerAs: 'selectCountriesCtrl',
        link: function(scope, element, attrs) {

            console.log('countries directive', scope, element, attrs);

            scope.elementBis = element[0];
            
        }
    };
}
