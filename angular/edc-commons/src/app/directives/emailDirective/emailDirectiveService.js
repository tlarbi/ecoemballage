module.exports = function(resourceService) {

    // default email RegEx if RexEx is wrong or regEx is not setted
    const defaulEmailRegEx = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

    // Validation de l'expression régulière
    this.initialize = function(emailRegEx) {

        console.log('in initialize function', emailRegEx);
        if(angular.isDefined(emailRegEx)) {
            try {
                ''.match(emailRegEx);
                console.log('valid email regEx');
                return emailRegEx;
            }
            catch(err) {
                console.log('invalid email regEx');
                return defaulEmailRegEx;
            }
        }
        else {
            console.log('no email regEx set');
            return defaulEmailRegEx;
        }
    }

    this.checkValidity = function(model, emailRegEx, verify) {

        var email = model.$modelValue;
        console.log('verify check : ', verify);
        if(angular.isDefined(email) && email != '') {

            if(emailRegEx.test(email))
                model.$setValidity('email-pattern', true);
            else
                model.$setValidity('email-pattern', false);
        }
        else
            model.$setValidity('email-pattern', true);
    }

    this.verifyEmail = function(value, verify) {

        if(verify == 'if-exist') {

            return resourceService.checkIfEmailExist(value).then(function(){
                return true;
            }, function(){
                return $q.reject('not exist');
            });
        } else if(verify == 'if-not-exist'){

            return resourceService.checkIfEmailExist(value).then(function(){
                return $q.reject('exist');
            }, function(){
                return true;
            });
        }
    }

    return this;
}
