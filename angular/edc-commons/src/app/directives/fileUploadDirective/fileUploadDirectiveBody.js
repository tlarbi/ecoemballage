module.exports =  function (fileUploadDirectiveService, commonService, $parse) {
    return {
        restrict: 'A',
        scope: {
            fileUploadControl: '=',
            notRequired: '=',
            extensionControl: '='
        },
        require: 'ngModel',
        replace: false,
        link: function (scope, element, attrs, ngModel) {
        /*    var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });*/


            console.log('this is the upload file directive : ');
            console.log('scope : ', scope);
            console.log('element : ', element);
            console.log('attrs : ', attrs);
            console.log('ngModel : ', ngModel);

            element.bind('change', function () {
                console.log('change function');
                /*
                $parse(attrs.fileUploadControl).assign(scope, element[0].files[0]);
                scope.$apply();
                */
                scope.fileUploadControl = element[0].files[0];
                console.log('apply function', element.val(), scope.fileUploadControl);

                ngModel.$validate();
                if(!ngModel.$touched)
                    ngModel.$setTouched();
                scope.$apply();
            });

            fileUploadDirectiveService.addValidators(ngModel, scope, element);

        }
    };
};
