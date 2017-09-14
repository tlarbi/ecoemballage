module.exports = function (emailDirectiveService, commonService) {

    return {
        restrict: 'A',
        scope: {
            emailControl: '=',
            verify: '@'
        },
        require: 'ngModel',
        replace: false,
        link: function (scope, element, attrs, ngModel) {
            console.log('this is the directive link : ', scope.verify, scope.emailControl, attrs, ngModel);

            commonService.setBlurFunction(element[0]);

            var emailRegEx = emailDirectiveService.initialize(scope.emailControl);

            ngModel.$validators.emailPattern = function(value) {
                console.log('value : ', value);
                return emailRegEx.test(value) || !value;
            }

            ngModel.$validators.setClasses = function(value){

                console.log('setting class');
                if(ngModel.$touched)
                    commonService.setClasses(ngModel.$valid, element[0].classList, value);

                return true;
            }

            if(scope.verify == 'if-exist' || scope.verify == 'if-not-exist') {
                ngModel.$asyncValidators.emailVerify = function(value) {
                    return emailDirectiveService.verifyEmail(value, scope.verify);
                }
            }
        }
    };
}
