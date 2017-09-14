module.exports = function (controlInputDirectiveService, commonService, $q) {

    return {
        restrict: 'A',
        scope: {
            controlInput: '@',
            idTrace: '=',
            ngDisabled: '='
        },
        require: 'ngModel',
        replace: false,
        link: function (scope, element, attrs, ngModel) {

            //console.log('controlInput : ', scope.controlInput, element, attrs, ngModel);
            console.log('TraceId : ', scope.idTrace);
            //controlInputDirectiveService.setBlurFunction(element[0]);
            commonService.setBlurFunction(element[0]);

            switch (scope.controlInput) {
                case 'amount':
                    ngModel.$validators.amountPattern = function(value) {
                        console.log('control amount format : ', value);
                        return controlInputDirectiveService.isValidAmount(value);
                    }
                    break;

                case 'tel':
                    ngModel.$validators.telPattern = function(value) {
                        console.log('control tel format : ', value);
                        return controlInputDirectiveService.isValidTel(value);
                    }
                    break;


                case 'activation-code':
                console.log('activation code : ', scope);
                    ngModel.$validators.activationCodePattern = function(value) {
                        console.log('control code format :', value, scope.idTrace);
                        return controlInputDirectiveService.isValidActivationCode(value);
                    }

                    ngModel.$asyncValidators.activationCode = function(value) {

                        ngModel.$setValidity('invalidCode', true);
                        ngModel.$setValidity('expiredCode', true);
                        ngModel.$setValidity('technicalError', true);

                        if(value == '' || angular.isUndefined(value))
                            return $q.resolve();

                        return controlInputDirectiveService.checkCode(value, scope.idTrace).then(function(){

                            switch(controlInputDirectiveService.statusCode){
                                case 1:
                                    ngModel.$setValidity('invalidCode', true);
                                    ngModel.$setValidity('expiredCode', true);
                                    ngModel.$setValidity('technicalError', true);
                                    var isValid = true;
                                    break;
                                case 2:
                                    ngModel.$setValidity('invalidCode', false);
                                    break;
                                case 3:
                                    ngModel.$setValidity('expiredCode', false);
                                    break;
                                case 4:
                                    ngModel.$setValidity('technicalError', false);

                            }

                            //console.log('hcecking code element : ', ngModel, element, ngModel.$valid);
                            if(ngModel.$touched)
                                commonService.setClasses(isValid, element[0].classList, value);

                            return true;
                        });

                    }
                default:
            }

            if(!scope.ngDisabled) {
                ngModel.$validators.setClasses = function(value){

                    console.log('setting class');
                    if(ngModel.$touched && !scope.ngDisabled)
                        commonService.setClasses(ngModel.$valid, element[0].classList, value);

                    return true;
                }
            }


        }
    };
}
