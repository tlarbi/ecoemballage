module.exports = function(userService, compteWebResource, $q) {

    var _self = this;

    //this.redirectionUrl = 'http://www.ecoemballages.fr/bienvenue-dans-votre-espace-entreprises';

    this.getUserInfo = function() {

        _self.user = userService.getUser();
        _self.user.clientNumber = _self.user.idClientSAP;
        return _self.user;
    }

    this.disconnect = function(redirectionUrl) {

        console.log('redirectionUrl : ', redirectionUrl);
        compteWebResource.logout().finally(function(){

            userService.clearUserInfo();
            window.location = redirectionUrl;

        });
    }

    this.checkSession = function() {

        testSession = userService.getOrgaCommerciale();
        var defered = $q.defer();
        if(testSession == null) {

            compteWebResource.restoreSession().then(function(response){

                console.log('restore session success : ', response);
                userService.restoreSession(response.data);
                defered.resolve();
            }, function(response){
                console.log('restore session failure : ', response);
                defered.reject();
            });
        } else {

            console.log('restore session : nothing to restore');
            defered.resolve();
        }
        return defered.promise;
    }

    this.getOrgaCommerciale = function(){

        console.log('orga : ', userService.getOrgaCommerciale());
        return userService.getOrgaCommerciale();
    }

    return this;

}
