module.exports = function (telDirectiveService, $http, $q) {

    return {
        restrict: 'A',
        scope: {
            telControl: '='
        },
        require: 'ngModel',
        replace: false,
        link: function (scope, element, attrs, ngModel) {
            console.log('this is the directive link : ', scope.verify, scope.telControl, attrs, ngModel);

            var telRegEx = telDirectiveService.initialize(scope.telControl);

            ngModel.$validators.telPattern = function(value) {
                return telDirectiveService.checkValidity(value, telRegEx);
            }
        }
    };
}
