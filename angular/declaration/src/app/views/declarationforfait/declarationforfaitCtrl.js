module.exports = function (declarationforfaitService, $uibModal, $scope, $location, $window) {
    var self = this;
    self.step = 1;

    self.mails = [];
    self.mailinput;
    self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

    self.RecapDeclaration;
    self.modal_instance;
    self.status_code
    self.loading;
    self.user = declarationforfaitService.getUserInfo();
    self.annee = $location.search().annee;

    //gestion corrective
    self.selected_motif;
    self.commentaire;
    self.flag_corrective;

    self.id_declaration = $location.search().id_declaration;
    self.action = $location.search().action;
    self.annee = $location.search().annee;
    self.first_load = true;

    //compélter une declaration 
    if (typeof self.id_declaration != 'undefined') {
        if (typeof self.action != 'undefined' && self.action == 'control_ecart')
            self.step = "controle_ecart";
        else
            self.step = 2;
        //get recap 
        declarationforfaitService.getRecap(self.id_declaration).then(function (response) {
            self.RecapDeclaration = response.data;
        }, function (reason) {
            console.error('getRecap - error : ' + JSON.stringify(reason));
        }).finally(function () { });
    }

    this.SaveDeclarationForfait = function () {
        self.selected_motif = sessionStorage.getItem("motif_corrective");
        self.commentaire = sessionStorage.getItem("commentaire_corrective");
        if (self.selected_motif != null)
            self.flag_corrective = true;
        else self.flag_corrective = false;

        declarationforfaitService.SaveDeclarationForfait(self.user.numero_client, self.user.id_declarant, self.annee, self.flag_corrective, self.selected_motif, self.commentaire).then(function (response) {
            self.RecapDeclaration = response.data;
            console.log('submit - ok : ' + JSON.stringify(response));
            self.RecapDeclaration = response.data;
            sessionStorage.removeItem("motif_corrective");
            sessionStorage.removeItem("commentaire_corrective");
            //vérifier le controle ecart
            declarationforfaitService.getControleEcart(self.RecapDeclaration.IdDeclaration).then(function (response) {
                self.first_load = false;
                console.log('retour getControleEcart', response)
                if (response.data == "OK") {
                    self.step = "controle_ecart";
                }
                else {
                    self.step = 2;
                }
            }, function (reason) {
                self.step = 2;
            }).finally(function () { });

        }, function (reason) {
            console.error('submit - error : ' + JSON.stringify(reason));
        }).finally(function () { });
    };

    this.addMails = function () {
        console.debug(self.mailinput);
        if (inArray(self.mailinput, self.mails) == -1) {
            self.mails.push(self.mailinput);
        }
        console.debug(self.mails);
        self.mailinput = '';
    };

    function inArray(elem, array) {
        var len = array.length;
        for (var i = 0 ; i < len; i++) {
            if (array[i] == elem) { return i; }
        }
        return -1;
    };

    this.removeMail = function (mail) {
        for (var i = this.mails.length - 1; i >= 0; i--) {
            if (this.mails[i] === mail) {
                this.mails.splice(i, 1);
            }
        }
    }

    this.valideMails = function () {
        if (typeof self.RecapDeclaration != 'undefined') {
            if (self.modal_instance)
                self.modal_instance.close();
            self.loading = true;

            self.modal_instance = $uibModal.open({
                template: require('./myModalValidation.html'),
                scope: $scope,
                backdrop: 'static',
                keyboard: false
            });

            declarationforfaitService.sendDeclarationAR(self.mails.join(), self.RecapDeclaration.IdDeclaration, self.user.id_SF).then(function (response) {

                console.log('SF: ' + self.user.id_SF);
                console.debug('recap declaration join ' + self.RecapDeclaration.IdDeclaration);

                declarationforfaitService.saveMailsAR(self.mails.join(), self.RecapDeclaration.IdDeclaration).then(function (response) {

                    self.status_code = 200;
                }, function (reason) {
                    self.status_code = reason.status;
                    self.errors = reason.data;
                    self.mails = [];

                }).finally(function () { self.mails = []; self.loading = false; });

            }, function (reason) {
                if (reason.status == 403) {
                    self.modal_instance.close();
                } else {
                    self.status_code = reason.status;
                    self.errors = reason.data;
                    self.mails = [];
                    self.loading = false;
                }

            }).finally(function () { self.mails = []; });


            
        }
    };


    this.saveMails = function () {

        declarationforfaitService.saveMailsAR(self.mails.join(), self.RecapDeclaration.IdDeclaration).then(function (response) {

            self.status_code = 200;
            self.step = 1;

        }, function (reason) {
            self.status_code = reason.status;
            self.errors = reason.data;
            // self.mails = null;

        }).finally(function () { /*_self.mails = null;*/ });
    };

    this.goBackFromControlEcart= function () {
        
        if (self.first_load) {
            declarationforfaitService.goBack();
        }
        else self.step = 1;
    }

}
