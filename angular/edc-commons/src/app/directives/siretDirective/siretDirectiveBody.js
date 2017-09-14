module.exports = function (siretDirectiveService, commonService, $q) {

    return {
        restrict: 'A',
        scope: {
            ngDisabled: '='
        },
        require: 'ngModel',
        replace: false,
        link: function (scope, element, attrs, ngModel) {

            if(!scope.ngDisabled) {
                commonService.setBlurFunction(element[0]);

                ngModel.$validators.siretPattern = function(value) {
                    console.log('siret value : ', value);
                    var isValidSiret = siretDirectiveService.isValidSiret(value);

                    if(!scope.ngDisabled && ngModel.$touched)
                        commonService.setClasses(isValidSiret, element[0].classList, value);

                    return isValidSiret;
                }

                console.log('verify attribute : ', attrs.hasOwnProperty('verify'));

                if(attrs.hasOwnProperty('verify'))
                    ngModel.$asyncValidators.siretVerify = function(value) {
                        console.log('if siret exist : ', value);
                        //commonService.unsetClasses(element[0].classList);
                        if(value == '' || angular.isUndefined(value) || scope.ngDisabled)
                            return $q.resolve();

                        return siretDirectiveService.checkSiret(value).then(function(){
                            console.log('what happened there');
                            if(ngModel.$touched)
                                commonService.setClassValid(element[0].classList, value);
                            return true;
                        }, function(){
                            console.log('what happened there to ? ');
                            if(ngModel.$touched)
                                commonService.setClassInvalid(element[0].classList);
                            return $q.reject();
                        });

                        //return isValidSiret;
                    }
            }
        }
    };
}
