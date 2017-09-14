module.exports = function (excelService, $uibModal, $scope, $location) {

    var _self = this;
    _self.RecapDeclaration;
    _self.declarationFile;
    _self.errors;
    _self.loading;
    _self.modal_instance;
    _self.status_code;
    _self.mails = [];

    _self.step = 1;
    _self.mailinput;
    _self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

    _self.type_declaration;
    _self.annees_declaration = {};
    _self.annees_declaree = {};
    _self.selected_annee;
    _self.submitted;
    _self.file_name;
    _self.user = excelService.getUserInfo();
    _self.id_dec;
    _self.action;

    /*corrective*/
    _self.selected_motif = '';
    _self.motifs_corrective = {};
    _self.corrective_submitted;
    _self.commentaire = '';
    /*affichage choix des types de déclarations*/
    //_self.ancienne_detaillee;

    _self.id_dec = $location.search().id_dec;
    _self.action = $location.search().action;

    console.log('id_dec ' + _self.id_dec);
    console.log('action ' + _self.action);

    _self.controleEcart = false;

    this.loadData = function () {
        
        excelService.getAnneesDeclaration(_self.user.numero_client).then(function (response) {
            _self.annees_declaration = response.data;
            //!pour selectionner par défaut l'année n-1
            _self.selected_annee = _self.annees_declaration[0].toString();
            console.log('getAnneesDeclaration - ok : ' + JSON.stringify(response));
        }, function (reason) {
            console.error('getAnneesDeclaration - error : ' + JSON.stringify(reason));
        }).finally(function () { });

        excelService.getAnneesDeclaree(_self.user.numero_client).then(function (response) {
            _self.annees_declaree = response.data;
            console.log('getAnneesDeclaree - ok : ' + JSON.stringify(response));
        }, function (reason) {
            console.error('getAnneesDeclaree - error : ' + JSON.stringify(reason));
        }).finally(function () { });

        excelService.getMotifsCorrective().then(function (response) {
            _self.motifs_corrective = response.data;
            console.log('getMotifsCorrective - ok : ' + JSON.stringify(response));
        }, function (reason) {
            console.error('getMotifsCorrective - error : ' + JSON.stringify(reason));
        }).finally(function () { });
    }




    if (typeof _self.id_dec != 'undefined' && typeof _self.action != 'undefined') {
        if (_self.action == 'ajout_destinataire') {
            excelService.findMailsAR(_self.id_dec).then(function (response) {
                console.log('id_dec findMailsAR:' + _self.id_dec);
                console.log('action findMailsAR: ' + _self.action);

                _self.mails = response.data;
                console.log('findMailsAR : ' + JSON.stringify(response));

            }, function (reason) {
                console.error('findMailsAR - error : ' + JSON.stringify(reason));
                _self.status_code = reason.status;
                _self.errors = reason.data;

            }).finally(function () { });

            excelService.getRecap(_self.id_dec).then(function (response) {

                console.log('id_dec getRecap :' + _self.id_dec);
                console.log('action getRecap : ' + _self.action);

                _self.RecapDeclaration = response.data;
                console.log('getRecap : ' + JSON.stringify(response));

            }, function (reason) {
                console.error('getRecap - error : ' + JSON.stringify(reason));
                _self.status_code = reason.status;
                _self.errors = reason.data;

            }).finally(function () { });

            _self.step = 2;
        }
        else if (_self.action == 'control_ecart') {
            excelService.getRecap(_self.id_dec).then(function (response) {

                console.log('id_dec getRecap :' + _self.id_dec);
                console.log('action getRecap : ' + _self.action);

                _self.RecapDeclaration = response.data;
                console.log('getRecap : ' + JSON.stringify(response));

            }, function (reason) {
                console.error('getRecap - error : ' + JSON.stringify(reason));
                _self.status_code = reason.status;
                _self.errors = reason.data;

            }).finally(function () { });

            _self.step = 'controle_ecart';
            _self.controleEcart = true;
        }
        else {
            _self.loadData();
        }
    }
    else {
        _self.id_dec = '';
        _self.loadData();
    }
 
    this.submit_corrective = function (form) {
        _self.corrective_submitted = true;
        if (form.$valid) {
            if (_self.type_declaration == 'uvc') {
                this.ExcelUpload(true);
            }
            else { 
                //post ancienne appli
                this.SendExcelSectDetail(true);
            }
        }
    }
    _self.custom_error = '';
    this.submit = function (form) {
        _self.submitted = true;
        if (form.$valid) { 
            if (_self.selected_annee <2016 && _self.type_declaration == 'uvc') {
                  _self.custom_error = 'ERREUR_UVC';
                  _self.modal_instance = $uibModal.open({
                      template: require('./ErreurModal.html'),
                      scope: $scope,
                      backdrop: 'static',
                      keyboard: false
                  });
                  return false;
            }
            //vérifier si c'est une corrective
            _self.selected_motif = sessionStorage.getItem("motif_corrective");
            _self.commentaire = sessionStorage.getItem("commentaire_corrective");
            if (_self.selected_motif != null)
                _self.flag_corrective = true;
            else _self.flag_corrective = false;

            if (inArray(_self.selected_annee, _self.annees_declaree) != -1 && _self.flag_corrective == false) {
                _self.modal_instance = $uibModal.open({
                    template: require('./CorrectiveModal.html'),
                    scope: $scope,
                    backdrop: 'static',
                    keyboard: false
                });
                return false;
            }
            if (_self.type_declaration == 'uvc') {
                this.ExcelUpload(_self.flag_corrective);
            }
            else {
                //post ancienne appli 
                this.SendExcelSectDetail(_self.flag_corrective);
            }
        }
    };

    this.ExcelUpload = function (flag_corrective) {
        if (_self.modal_instance) {
            _self.modal_instance.close();
        }
        _self.mails = [];
        _self.loading = true;
        _self.modal_instance = $uibModal.open({
            template: require('./myModal.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
        excelService.sendDeclarationUvcXml(_self.declarationFile, _self.user.numero_client, _self.user.id_declarant, _self.selected_annee, flag_corrective,
            _self.selected_motif, _self.commentaire, _self.id_dec).then(function (response) {
                console.log('submit - ok : ' + JSON.stringify(response));
                _self.RecapDeclaration = response.data;
                _self.loading = false;
                _self.status_code = 200;
                $('#fileMobile').val('');
                _self.declarationFile = null;

            }, function (reason) {
                _self.status_code = reason.status;
                _self.loading = false;
                console.error('submit - error : ' + JSON.stringify(reason));
                _self.errors = reason.data;
                $('#file_upload').val('');
                _self.declarationFile = null;
                if (reason.status == 403) {
                    _self.modal_instance.close();
                }
            }).finally(function () { });
    }

    this.closeModal = function () {
        //clear all variables
        _self.declarationFile = null;
        $('#file_upload').val('');
        _self.file_name = null;
        _self.submitted = false;
        _self.type_declaration = null;
        _self.selected_annee = null;
        _self.modal_instance.close();

        _self.selected_motif = '';
        _self.corrective_submitted = false;
        _self.commentaire = '';
    };

    this.valideModal = function () {
        //vérifier le controle ecart
        excelService.getControleEcart(_self.RecapDeclaration.IdDeclaration).then(function (response) {
            console.log('retour getControleEcart', response)
            if (response.data == "OK") {
                _self.step = "controle_ecart";
                _self.controleEcart = true;
            }
            else {
                _self.step = 2;
            }
        }, function (reason) {
            _self.step = 2;
        }).finally(function () { }); 
        //_self.step = 2;
        _self.modal_instance.close();
    };

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
        if (typeof _self.RecapDeclaration != 'undefined') {
            if (_self.modal_instance)
                _self.modal_instance.close();
            _self.loading = true;

            _self.modal_instance = $uibModal.open({
                template: require('./myModalValidation.html'),
                scope: $scope,
                backdrop: 'static',
                keyboard: false
            });

            excelService.sendDeclarationAR(_self.mails.join(), _self.RecapDeclaration.IdDeclaration, _self.user.id_SF).then(function (response) {

                console.log('SF: ' + _self.user.id_SF);
                console.debug('recap declaration 1 ' + _self.RecapDeclaration.IdDeclaration);
                console.debug('recap declaration join ' + _self.RecapDeclaration.IdDeclaration);
                console.debug('Decote ' + _self.RecapDeclaration.Decote);
                console.log('submit - ok : ' + JSON.stringify(response));
                _self.loading = false;
                _self.status_code = 200;
                _self.declarationMails = null;

            }, function (reason) {
                _self.status_code = reason.status;
                _self.loading = false;
                console.error('submit - error : ' + JSON.stringify(reason));
                _self.errors = reason.data;

                _self.mails = null;

            }).finally(function () { /*_self.mails = null;*/ });

            excelService.saveMailsAR(_self.mails.join(), _self.RecapDeclaration.IdDeclaration).then(function (response) {

                _self.status_code = 200;
                // _self.step = 1;


            }, function (reason) {
                _self.status_code = reason.status;
                _self.errors = reason.data;
                _self.mails = null;
                _self.loading = false;

            }).finally(function () {/* _self.mails = null;*/ });
        }
    };

    this.saveMails = function () {

        excelService.saveMailsAR(_self.mails.join(), _self.RecapDeclaration.IdDeclaration).then(function (response) {

            _self.status_code = 200;
            // _self.step = 1;
            if (_self.controleEcart)
                _self.step = "controle_ecart";
            else
            excelService.goToHistoriqueDeclaration();

        }, function (reason) {
            _self.status_code = reason.status;
            _self.errors = reason.data;
            _self.mails = null;
            _self.loading = false;

        }).finally(function () { /*_self.mails = null;*/ });
    };
     
    this.SendExcelSectDetail = function (corrective) {
        var action = '';
        if (_self.type_declaration == 'sectorielle')
            action = '/OldApp/Declaration/EcdUpload?type=Secto&annee=' + _self.selected_annee;
        else action = '/OldApp/Declaration/EcdUpload?type=Detaille&annee=' + _self.selected_annee;
        var form2 = document.getElementById("excel_upload_form_id");
        form2.action = action;
        form2.method = "post";
        form2.enctype = "multipart/form-data";

        var flag_correctiveInput = document.createElement("input");
        flag_correctiveInput.setAttribute("name", 'flag_corrective');
        flag_correctiveInput.setAttribute("value", corrective);
        flag_correctiveInput.setAttribute("type", 'hidden');
        form2.appendChild(flag_correctiveInput);

        var motifInput = document.createElement("input");
        motifInput.setAttribute("name", 'motif');
        motifInput.setAttribute("value", _self.selected_motif);
        motifInput.setAttribute("type", 'hidden');
        form2.appendChild(motifInput);

        var commentaireInput = document.createElement("input");
        commentaireInput.setAttribute("name", 'commentaire');
        commentaireInput.setAttribute("value", _self.commentaire);
        commentaireInput.setAttribute("type", 'hidden');
        form2.appendChild(commentaireInput);

        form2.submit();
    }


     
    this.goBackFromControlEcart = function () {
        var oldURL = document.referrer;

        if (oldURL.indexOf('historique') !== -1) {
            excelService.goBack();
        }
        else excelService.goToUploadExcel2(_self.RecapDeclaration.IdDeclaration, _self.RecapDeclaration.Annee);
    }
};