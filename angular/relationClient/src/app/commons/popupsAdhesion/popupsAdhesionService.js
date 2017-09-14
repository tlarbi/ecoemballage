module.exports = function($uibModal, $q, compteWebResource,userService) {

    var _self = this;

    var popupsAdhesionCtrl = require('./popupsAdhesionCtrl');

    this.flags = undefined;

    this.controlModal = function(action){

        switch(action){
            case 'resolve':
                console.log('resolve modal : ', action);
                _self.modal.close();
                _self.deferedModal.resolve();
                break;
            case 'reject':
                console.log('reject modal : ', action);
                _self.modal.close();
                _self.deferedModal.reject('test');
        }
    }

    this.openNotSignerPopup = function() {

        var template = require('./popupDoneNotSigner.html');
        return openPopup(template);
    }

    this.openValidationContractPopup = function(form, file) {

        _self.form = form;
        _self.file = file;
        var template = require('./popupValidationContrat.html');
        return openPopup(template);
    }

    this.openAdhesionDonePopup = function() {
        var template = require('./popupDone.html');
        return openPopup(template);
    }

    this.openAhdesionMailSentPopup = function() {
        var template = require('./popupMailSent.html');
        return openPopup(template);
    }

    var openPopup = function(requiredTemplate) {

        _self.deferedModal = $q.defer();

        console.log('into function');
        _self.modal = $uibModal.open({
            template: requiredTemplate,
            controller: ['popupsAdhesionService', popupsAdhesionCtrl],
            controllerAs: 'popupsAdhesionCtrl',
            backdrop: 'static',
            keyboard: false
        });
        return _self.deferedModal.promise;
    }



    this.sign = function() {

        _self.flags = {};

        console.log('form to sign : ', _self.form);
        return compteWebResource.signAdhesion(_self.form, _self.file).then(function(response){

            console.log('adhesion sign success : ', response);

            switch(response.data.StatusCode) {
                case 1:
                    _self.controlModal('resolve');
                    break;
                case 2:
                    console.log('invalid code');
                    _self.flags.invalidCode = true;
                    break;
                case 3:
                    _self.flags.expiredLink = true;
            }

            console.log('flags', _self.flags);


        }, function(response){

            console.log('adhesion sign failure : ', response);
            _self.flags.technicalError = true;
        });
    }


    this.getUserInfo = function() {

        _self.user = userService.getUser();
        _self.user.clientNumber = _self.user.idClientSAP;
        return _self.user;
    }

    this.checkSession = function() {

        testSession = userService.getOrgaCommerciale();
        var defered = $q.defer();
        if(testSession == null) {

            return compteWebResource.restoreSession().then(function(response){

                console.log('restore session success : ', response);
                userService.restoreSession(response.data);
            }, function(response){
                console.log('restore session failure : ', response);
            });
        } else {

            console.log('restore session : nothing to restore');
            defered.resolve();
            return defered.promise;
        }
    }

    this.getOrgaCommerciale = function(){

        console.log('orga : ', userService.getOrgaCommerciale());
        return userService.getOrgaCommerciale();
    }



    return this;
}
