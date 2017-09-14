module.exports = function (validationService, $uibModal, $scope, $location) {

    var _self = this;
    _self.RecapDeclaration;
   
    _self.errors;
    _self.loading=true;
    _self.modal_instance;
    _self.status_code;
    _self.mails = [];

    _self.step = 1;
    _self.mailinput;
    _self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;
    
    _self.user = validationService.getUserInfo();

    _self.id_declaration = $location.search().id_declaration;

    if (typeof _self.id_declaration == 'undefined')
        _self.id_declaration = '';
    console.log('IF self.id_declaration', _self.id_declaration);

    this.$onInit = function () {

                //validationService.checkEtape(_self.id_declaration, 3).then(function (response) {

                //console.log('id declaration: ' + _self.id_declaration);
                //console.log('etape_declaration: ' + response.data);

                //if (!response.data)
                //    validationService.goToHistoriqueDeclaration();
                //else {

                    validationService.getRecap(_self.id_declaration).then(function (response) {

                    console.log('id_dec getRecap :' + _self.id_declaration);
                    _self.RecapDeclaration = response.data;
                    console.log('getRecap : ' + JSON.stringify(response));

                }, function (reason) {
                    console.error('getRecap - error : ' + JSON.stringify(reason));
                    _self.status_code = reason.status;
                    console.log('On init status_code: ' + _self.status_code);
                    console.log('getRecap: ' + _self.status_code);
                    _self.errors = reason.data;

                }).finally(function () { });
            //}
            //}, function (reason) {
            //       validationService.goToHistoriqueDeclaration();
            //}).finally(function () { });
    }
   
    this.addMails = function () {
        if (inArray(_self.mailinput, _self.mails) == -1) {
            _self.mails.push(_self.mailinput);
        }
        _self.mailinput = '';
    }
    this.removeMail = function (mail) {
        for (var i = this.mails.length - 1; i >= 0; i--) {
            if (this.mails[i] === mail) {
                this.mails.splice(i, 1);
            }
        }
    }
    function inArray(elem, array) {
        var len = array.length;
        for (var i = 0 ; i < len; i++) {
            if (array[i] == elem) { return i; }
        }
        return -1;
    }

    this.valideMails = function () {

        _self.modal_instance = $uibModal.open({
            template: require('./myModalValidation.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });

        validationService.sendDeclarationAR(_self.mails.join(), _self.id_declaration, _self.user.id_SF).then(function (response) {

            validationService.saveMailsAR(_self.mails.join(), _self.id_declaration).then(function (response) {

                _self.status_code = 200;
                _self.loading = false;
                _self.declarationMails = null;

            }, function (reason) {
                _self.status_code = reason.status;
                console.log('Validemails saveMailsAR status code: ' + _self.status_code);
                _self.errors = reason.data;
                _self.mails = null;
                _self.loading = false;
            }).finally(function () { });


        }, function (reason) {
            if (reason.status == 403) {
                _self.modal_instance.close();
            } else {
                _self.status_code = reason.status;
                console.log('Validemails sendDeclarationAR status code: ' + _self.status_code);
                _self.loading = false;
                console.error('submit - error : ' + JSON.stringify(reason));
                _self.errors = reason.data;
                _self.mails = null;
            }

        }).finally(function () { });

    };

    this.saveMails = function () {
        validationService.saveMailsAR(_self.mails.join(), _self.id_declaration).then(function (response) {
            _self.status_code = 200;
            console.log('saveMails status code: ' + _self.status_code);
            validationService.goBack();
            //validationService.goToHistoriqueDeclaration();
        }, function (reason) {
            _self.status_code = reason.status;
            console.log('saveMails: ' + _self.status_code);
            _self.errors = reason.data;
            _self.mails = null;
           
        }).finally(function () { });
    };

   
};