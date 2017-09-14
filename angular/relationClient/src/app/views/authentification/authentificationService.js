module.exports = function (compteWebResource, userService, commonServices) {

    var _self = this;

    this.homeUrl = '/mon-espace/accueil';
    this.chooseClientUrl = '/choix-entreprise';

    //flags
    this.technicalErrorFlag = false;
    this.redirectFlag = false;
    this.attemptCount = undefined;
    this.unauthorizedUserFlag = false;
    this.orgaCommerciale = undefined;

    //session storage


    this.postForm = function(loginForm) {

        console.log("authentification Service : entering postForm method");
        console.log(loginForm);

        _self.technicalErrorFlag = false;
        _self.unauthorizedUserFlag = false;
        return compteWebResource.logIn(loginForm).then(function(response){
            console.log("Authentification Ctrl : submit function : success : ", response);

            // ENREGISTER LES INFORMATIONS UTILES DANS LA SESSION ET CREATION DES COOKIES
            var urlRedirection = userService.setSessionStorageAndCookies(response.data);

            if(urlRedirection == '/mon-espace/accueil')
                commonServices.goHome();
            else if(urlRedirection == '/accueil-conseiller')
                commonServices.navigateWithRecheckRoles(urlRedirection);
            else
                window.location = urlRedirection;

            _self.redirectFlag = true;
        }, function(response){

            console.log("Authentification Service : submit function : failure", response, response.headers(''));
            if(response.status == 401){
                _self.unauthorizedUserFlag = true;
                _self.attemptCount = response.data.NombreTentatives;
                if(_self.attemptCount == -1)
                    _self.orgaCommerciale = response.data.orgaCommerciale;
            }
            else
                _self.technicalErrorFlag = true;

        });

    }

    this.checkEmail = function(mail) {

    	console.log(mail);
        return compteWebResource.checkEmail(mail);
    };

    // SUPPRESSION COOKIE DRUPAL
    this.drupalDisconnect = function() {

        compteWebResource.logoutDrupal();
    }

    this.resetPassword = function(email) {

        return compteWebResource.resetPasswordAsk(email, 'true');
    }

    this.disconnect = function() {

        //userService.clearUserInfo();
        compteWebResource.clearSessionDrupal();
        //compteWebResource.logout();
    }

    return _self;
}
