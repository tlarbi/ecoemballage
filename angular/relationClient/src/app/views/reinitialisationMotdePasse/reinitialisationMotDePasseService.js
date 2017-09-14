module.exports = function(compteWebResource, userService) {
    
    var _self = this;
    
    this.urlInvalidToken = '/reinitialisation-mot-de-passe/jeton-invalide';
    this.urlSuccessResetPassword = '/login';
    this.tokenValidFlag = false;  // A RETIRER 
    this.technicalErrorFlag = false;
    
    // VERIFICATION DU JETON CHANGEMENT DE MOT DE PASSE
    this.checkLink = function(form) {
        
        return compteWebResource.resetPasswordCheckToken(form).then(function(response){
            
            console.log('check link success', response);
            _self.tokenValidFlag = true;
            console.log('token service : ', _self.tokenValidFlag);
        }, function(response){
            
            console.log('token service : ', _self.tokenValidFlag, response);
            window.location = _self.urlInvalidToken; // A REMETTRE
            
        });
    }
    
    // CHANGEMENT DU MOT DE PASSE
    this.changePassword = function(form) {
        
        _self.technicalError = false;
        
        var loginForm = {
            username: undefined,
            password: form.pass
          };
        
        return compteWebResource.resetPassword(form).then(function(response){
            
                console.log('change password success : ', response);
                loginForm.username = response.data.email;
            
                compteWebResource.logIn(loginForm).then(function(response){
                console.log("Authentification Ctrl : submit function : success : ", response);

                // ENREGISTER LES INFORMATIONS UTILES DANS LA SESSION ET CREATION DES COOKIES 
                window.location = userService.setSessionStorageAndCookies(response.data);
            
            }, function(response){
                    console.log('authentification failure : ', response);
                    _self.technicalErrorFlag = true;
                });
            
        }, function(response){
            
            console.log('change password failure : ', response);
            _self.technicalError = true;
        });
    }
    
    return this;
}