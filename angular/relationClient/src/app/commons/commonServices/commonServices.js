 module.exports = function($uibModal, compteWebRessource, userService, $q, errorMessagesService) {

    var _self = this;

    this.orgaCommercialeEco = 'eco';
    this.orgaCommercialeAdelphe = 'adelphe';

    this.RegExList = require('./regExList');


    this.newClientAddedFlag = undefined;
    this.urlHome = '/mon-espace/accueil';

    _self.technicalErrorMessage = '';

    var commonCrl = require('./commonCtrl');

    this.getRegExList = function(field) {

        switch(field){
            case 'email':
                return _self.RegExList.inscription.emailRegEx;
            case 'inscription':
                return _self.RegExList.inscription;
            case 'adhesion':
                return _self.RegExList.adhesion;
            default:
                return _self.RegExList.inscription;
        }
    }

    this.openAddNewClientPopup = function() {

        _self.deferedModal = $q.defer();

        console.log('into function');
        _self.modal = $uibModal.open({
            template: require('./ajouterEntreprise.html'),
            controller: ['commonServices', commonCrl],
            controllerAs: 'commonCtrl',
            backdrop: 'static',
            keyboard: false
        });
        return _self.deferedModal.promise;
    }

    this.controlModal = function(action){

        switch(action){
            case 'resolve':
                _self.modal.close();
                _self.deferedModal.resolve();
                break;
            case 'reject':
                _self.modal.close();
                _self.deferedModal.reject();
        }
    }

    this.checkClientNumber = function(clientNumber) {

        return compteWebRessource.checkClientNumber(clientNumber);
    }

    this.getClientInfo = function(clientNumber) {

        compteWebRessource.getCompanyInfo(clientNumber).then(function(response){

            console.log('success get company : ', response);
        }, function(response){

            console.log('failure get company : ', response);
        });
    }

    this.isClientNumberInSession = function(clientNumber) {
        return userService.isClientNumberExistInSession(clientNumber);
    }

    this.addNewClient = function(clientNumber) {

        var clientInfo = {
            idSAP: undefined,
            idSF: undefined,
            libelle: undefined,
            dCorespondant: undefined
                        };
        var form = {idSAP: clientNumber};

        var defered = $q.defer();

        compteWebRessource.addCompanyToUser(form).then(function(response){

            console.log('client added success : ', response);
            compteWebRessource.getCompanyInfo(clientNumber).then(function(response){

                console.log('client get company success : ', response);

                clientInfo.idSAP = response.data.IdClientSAP;
                clientInfo.idSF = response.data.IdClientSalesForce;
                clientInfo.libelle = response.data.Nom;

                _self.newClientAddedFlag = true;
                console.log('new client flag seted as : ', _self.newClientAddedFlag);

                userService.addClientToSession(clientInfo); // AJOUT DU NOUVEAU CLIENT A LA SESSION

                defered.resolve();


            }, function(response){

                console.log('client get company failure : ', response);
                _self.newClientAddedFlag = false;
                console.log('new client glaf seted as : ', _self.newClientAddedFlag);
                $q.reject();
            });
        }, function(response){
            var statusCode = response.status;
            _self.technicalErrorMessage = errorMessagesService.getErrorMessage(statusCode);
            console.log('client added failure : ', response);
            _self.newClientAddedFlag = false;
            console.log('new client glaf seted as : ', _self.newClientAddedFlag);
            defered.reject();
        });

        return defered.promise;
    }

    // REDIRECTION VERS LA PAGE D'ACCUEIL ET CHOIX DU BON ROLE DANS OPEN AM
    this.goHome = function(client) {
        console.log('in go home function');
        if(angular.isDefined(client) && client != null)
            userService.addClientInfosToSession(client);
        else
            console.log('nothing to add to session');

        console.log('after add client tio session : ', client);

        if(userService.isConseiller()) {

            console.log('is an adviser')

            compteWebRessource.conseillerUpdateCookie(userService.getCookieConseiller(), client.idSF).then(function(response){

                console.log('Cookie Updated success : ', response);
            }, function(response) {

                console.log('update Cookie failure : ', response);
            }).finally(function(){

                compteWebRessource.drupalRecheckRoles().then(function (response) {

                    console.log('go home with recheck roles success : ', response);
                }, function (response) {

                    console.log('go home with recheck roles failure : ', response);
                }).finally(function () {

                    //REDIRECTION VERS LA PAGE D'ACCUEIL
                    window.location = _self.urlHome;
                });

            });
        }
        else {
            compteWebRessource.drupalRecheckRoles().then(function(response){

                console.log('go home with recheck roles success : ', response);
            }, function(response){

                console.log('go home with recheck roles failure : ', response);
            }).finally(function(){

                //REDIRECTION VERS LA PAGE D'ACCUEIL
                window.location = _self.urlHome;
            });
        }


        console.log('after life');
    }


    this.navigateWithRecheckRoles = function (url) {

        compteWebRessource.drupalRecheckRoles().then(function (response) {

            console.log('navigate with recheck roles success : ', response);
        }, function (response) {

            console.log('navigate with recheck roles failure : ', response);
        }).finally(function () {

            //REDIRECTION VERS LA PAGE D'ACCUEIL
            window.location = url;
        });
    }

    this.recheckLanguage = function (urlToNavigate) {

        compteWebRessource.drupalRecheckLanguage().then(function (response) {

            console.log('recheck language success : ', response);
        }, function (response) {

            console.log('recheck language failure : ', response);
        }).finally(function () {

            //RECHARGER LA PAGE
            if(urlToNavigate)
                window.location = urlToNavigate;
            else if(window.location.search)
                window.location.search = "";
            else
                window.location.reload();
        });
    }

    this.getErrorMessage = function (statusCode) {
      return errorMessagesService.getErrorMessage(statusCode);
    }

    this.setLogoLinkRedirection = function(link) {

        logoLink = document.getElementById('logo-home');
        console.log('setting link redirection : ', logoLink);
        if(logoLink)
            logoLink.href = link;
    }

    return this;
}
