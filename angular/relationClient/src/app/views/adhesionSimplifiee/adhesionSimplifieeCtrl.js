module.exports = function(adhesionSimplifieeService, commonServices, userService, popupsAdhesionService, $filter, $location, $scope) {

    const LOGO_LINK = '/adhesion/accueil-adhesion-questionnaire';
    const COMPANY_MAX = 10;
    const BRAND_MAX = 10;
    const COMPLEMENT_MAX = 3;
    const TIME_OUT_VALUE = 50;

    const contractFileName = 'contrat.pdf';
    const delegateFileName = 'mandat_delegation.pdf';
    var _self = this;
    var prefillObject = require('./adhesionFormObject');

    var countryArray = ['FR', 'DE', 'AT', 'BE', 'BG', 'CY', 'HR', 'DK', 'ES', 'FE', 'FI', 'CH', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'CZ', 'RO', 'GB', 'SK', 'SI', 'SE'];

    // SCRIPT D'INITILALISATION
    this.$onInit = function () {



        commonServices.setLogoLinkRedirection(LOGO_LINK);

        var regExList = commonServices.getRegExList('adhesion');

        _self.filesContext = userService.getFilesContext();
        console.log('files context : ', _self.filesContext);

        _self.functions = userService.getFunctions();

        _self.siretRegEx = regExList.siretRegEx;
        _self.emailRegEx = regExList.emailRegEx;

        _self.orgaContext = $filter("translate")('labels.orgaContext.NAME');
        var cilEmail = $filter("translate")('labels.orgaContext.EMAIL_CIL');
        _self.linkMail = '<a href="mailto:' + cilEmail + '">'+ cilEmail + '</a>';

        console.log('url params : ', $location.search());
        initializeForm();
        //checkDisableMode();

    }

    var initializeForm = function() {

        var link = $location.search().f;
        var idSF = $location.search().idSF;
        var idSAP = $location.search().idSAP;
        if(angular.isDefined(link)) {
            adhesionSimplifieeService.getForm(link).then(function(){
                if(angular.isDefined(adhesionSimplifieeService.formObject)) {

                    _self.statusCode = adhesionSimplifieeService.formObject.Status;

                    if(_self.statusCode != 1) {
                        _self.warningFlag = true;
                        _self.form = initFormObject();
                    }
                    else {
                        _self.form = adhesionSimplifieeService.formObject;
                        settingForm(_self.form);

                        if(_self.form.Recontractualisation)
                            _self.recontractModeFlag = true;

                        getFileAttachment(_self.form.TraceId);
                    }

                    console.log('setting form object : ', _self.form);

                }
                else {
                    _self.form = initFormObject();
                    _self.technicalErrorFlag = true;
                }

            });
        }
        else if (angular.isDefined(idSF) && angular.isDefined(idSAP)) {

            _self.recupRecontractObjectFlag = true;

            adhesionSimplifieeService.getRecontractForm(idSF, idSAP).then(function(){

                _self.recupRecontractObjectFlag = false;
                if(angular.isDefined(adhesionSimplifieeService.formObject)) {

                    _self.statusCode = adhesionSimplifieeService.formObject.Status;

                    if(_self.statusCode != 1) {
                        _self.warningFlag = true;
                        _self.form = initFormObject();
                    }
                    else {
                        _self.form = adhesionSimplifieeService.formObject;
                        settingForm(_self.form);
                        //getFileAttachment(_self.form.TraceId);
                        _self.recontractModeFlag = true;
                        validateFileAttachment(true);
                    }

                    console.log('setting recontract form object : ', _self.form);

                }
                else {
                    _self.form = initFormObject();
                    _self.technicalErrorFlag = true;
                }

            });
        }
        else
		{
            _self.form = initFormObject();
			//_self.recontractModeFlag = true;
		}
    }

    // var checkDisableMode = function() {
    //
    //     var mode = $location.search().mode;
    //     console.log('check disable mode : ', mode);
    //     if(mode == 'disable')
    //         _self.disabledFlag = true;
    // }

    // INITIALISATION DU FORMULAIRE
    var initFormObject = function() {

        var form = {
            IA: {
                adress: {
                    complements: [{}]
                },
                radioContributionREP: undefined,
                // ------------------------------------------------------
                //siret: "55206518700130" // !!!!!!!!!!!!!!!!!!!! A ENLEVER
                // ------------------------------------------------------
            },
            IAC: {
                companies: [{}],
                brands: [{}]
            },
            IDF: {
                adressInvoice: {
                    complements: [{}]
                },
                radioDistinctBillingCompany: undefined,
                radioCompanyInvoice: undefined,
                adressSendingBill: {
                    complements: [{}]
                },
                radioBillingAdress: undefined
            },
            CP: {
                adress: {
                    complements: [{}]
                },
                radioProvider: undefined
            },
            IS: {
                adress: {
                    complements: [{}]
                }
            },
            isSigner: false
        }

        form.IA.adress.complements.minFlag = true;
        form.IDF.adressInvoice.complements.minFlag = true;
        form.IAC.companies.minFlag = true;
        form.IAC.brands.minFlag = true;
        form.IDF.adressSendingBill.complements.minFlag = true;
        form.CP.adress.complements.minFlag = true;
        form.IS.adress.complements.minFlag = true;

        return form;
    }

    // VERIFIER LA PRESENCE DE TOUS LES TABLEAUX
    var settingForm = function(form) {
        checkArray(form.IA.adress.complements, COMPLEMENT_MAX);
        checkArray(form.IDF.adressInvoice.complements, COMPLEMENT_MAX);
        checkArray(form.IAC.companies, COMPANY_MAX);
        checkArray(form.IAC.brands, BRAND_MAX);
        checkArray(form.IDF.adressSendingBill.complements, COMPLEMENT_MAX);
        checkArray(form.CP.adress.complements, COMPLEMENT_MAX);
        checkArray(form.IS.adress.complements, COMPLEMENT_MAX);
    }

    // AJOUT DES FLAG MIN OU MAX AUX TABLEAUX
    var checkArray = function(array, maxLength) {
        if(angular.isUndefined(array) || array == null) {
            array = [{}];
            array.minFlag = true;
        }
        else {
            if(array.length === 1)
                array.minFlag = true;

            if(array.length >= maxLength)
                array.maxFlag = true;
        }
    }

    // AJOUTER UN NOUVEL OBJET
    var addObject = function(object, limite) {

        object.minFlag = false;

        if(object.length < limite)
            object.push({});

        if(object.length >= limite)
            object.maxFlag = true;
    }

    // SUPPRIMER UN OBJET EXISTANT A L'INDEX INDIQUE
    var removeObject = function(object, index) {

        object.splice(index, 1);
        object.maxFlag = false;

        if(object.length == 1)
            object.minFlag = true;
    }

    // AJOUTER UN NOUVEAU CHAMP
    this.addFields = function(field) {

        switch(field) {
            case 'company':
                addObject(_self.form.IAC.companies, COMPANY_MAX);
                break;
            case 'brand':
                addObject(_self.form.IAC.brands, BRAND_MAX);
                break;
            case 'idf-complement':
                addObject(_self.form.IDF.adressInvoice.complements, COMPLEMENT_MAX);
                break;
            case 'ia-complement':
                addObject(_self.form.IA.adress.complements, COMPLEMENT_MAX);
                break;
            case 'company-invoice-complement':
                addObject(_self.form.IDF.adressSendingBill.complements, COMPLEMENT_MAX);
                break;
            case 'cp-complement':
                addObject(_self.form.CP.adress.complements, COMPLEMENT_MAX);
                break;
            case 'sign-complement':
                addObject(_self.form.IS.adress.complements, COMPLEMENT_MAX);
                break;
        }
    }

    // SUPPRIMER UN CHAMP EXISTANT
    this.removeFields = function(field, index) {

        switch(field) {
            case 'company':
                removeObject(_self.form.IAC.companies, index);
                break;
            case 'brand':
                removeObject(_self.form.IAC.brands, index);
                break;
            case 'idf-complement':
                removeObject(_self.form.IDF.adressInvoice.complements, index);
                break;
            case 'ia-complement':
                removeObject(_self.form.IA.adress.complements, index);
                break;
            case 'company-invoice-complement':
                removeObject(_self.form.IDF.adressSendingBill.complements, index);
                break;
            case 'cp-complement':
                removeObject(_self.form.CP.adress.complements, index);
                break;
            case 'sign-complement':
                removeObject(_self.form.IS.adress.complements, index);
                break;
        }
    }

    //APPLIQUE LA REGLE DE GESTION SUR LES ADRESSES DE FACTURATION
    var setAdresses = function() {

        var form = _self.form;

        if(!(form.IDF.radioCompanyInvoice || form.IDF.radioDistinctBillingCompany))
            form.IDF.adressInvoice = form.IA.adress;

        if(!form.IDF.radioCompanyInvoice || form.IDF.radioDistinctBillingCompany)
            form.IDF.adressSendingBill = form.IDF.adressInvoice;

        if(form.IDF.radioCompanyInvoice)
            form.IDF.radioDistinctBillingCompany = true;

        return form;
    }

    this.checkTVA = function() {

        var form = _self.form;
        console.log('check TVA Begin !!');
        // if(angular.isUndefined(form.IDF.radioCompanyInvoice) || angular.isUndefined(form.IDF.radioDistinctBillingCompany == undefined))
        //     _self.tvaRequiredFlag = false;
        if(form.IDF.radioCompanyInvoice || form.IDF.radioDistinctBillingCompany)
            _self.tvaRequiredFlag = checkIfInCountryArray(form.IDF.adressInvoice.country);
        else
            _self.tvaRequiredFlag = checkIfInCountryArray(form.IA.adress.country);

        console.log('TVA Required : ', _self.tvaRequiredFlag);
    }

    var checkIfInCountryArray = function(country) {

        if(angular.isUndefined(country))
            return false;

        return userService.findInArray(countryArray, function(code){return this.countryCode == code;}, {countryCode: country});
    }

    var setTouch = function(formulaire) {

        console.log('formulaire : ', formulaire);
        for(var element in formulaire) {
            //console.log('next one');
            //console.log('element : ', element, formulaire[element]);
            if(angular.isObject(formulaire[element]) && formulaire[element].hasOwnProperty('$touched') && formulaire[element].$untouched) {
                formulaire[element].$setTouched();
                //console.log('element set to touched');
                formulaire[element].$$parseAndValidate();
                //console.log('element set validity');
            }
        }
    }

    // VALIDATION DES DONNEES
    this.sendForm = function(formulaire) {

        console.log('formulaire : ', formulaire)
        if(formulaire.$invalid || !formulaire.$valid) {
            console.log('invalid form : show errors');
            //_self.showErrors = true;
            setTouch(formulaire);
            //document.getElementById('adhesion').querySelector('.ng-invalid').focus();
            focusInputWithError('adhesion');
            console.log('complete errors showing');
            //formulaire.company_name.$setTouched();
            return;
        }
        var form = setAdresses();


        console.log('post adhesion : ', form);
        _self.sendingFormFlag = true;
        adhesionSimplifieeService.postAdhesion(form, _self.fileAttachment).then(function(response){

            console.log('post form success : ', response);
            if(!form.isSigner)
                popupsAdhesionService.openNotSignerPopup().then(function(){
                    console.log('popin closed');
                });
            else {
                popupsAdhesionService.openAhdesionMailSentPopup().then(function(){

                    //SCROLL TO END OF PAGE
                    console.log('popin closed');
                    window.scrollTo(0, document.body.scrollHeight);
                });
                _self.sendedFormFlag = true;
                _self.form.TraceId = response.data.TraceId;
            }

        }, function(response){
            console.log('post form failure : ', response);
        }).finally(function(){
            _self.sendingFormFlag = false;
        });
    }

    // A SUPPRIMER -- PREREMPLISSAGE DU FORMULAIRE
    this.prefillForm = function() {

        //Object.assign(_self.form, prefillObject);
        _self.form = prefillObject;

        console.log('prefillForm : ', prefillObject);
        console.log('final Form : ', _self.form);
    }

    // RECUPERER LE CONTRAT ADHESION
    this.getContract = function(language) {

        _self.fileGenerationFlag = true;
        var form = setAdresses();

        console.log('getting contract');
        adhesionSimplifieeService.getContract(form, language).then(function(response){
            console.log('success : ', response);
            _self.saveFile(response.data, contractFileName);
        }, function(response){
            console.log('failure : ', response);
            //_self.countries = [];
        }).finally(function(){

            _self.fileGenerationFlag = false;
        });
    }

    // RECUPERER LE MANDAT DE DELEGATION
    this.getDelegate = function(language) {

        _self.fileGenerationFlag = true;

        var form = setAdresses();

        console.log('getting delegate');
        adhesionSimplifieeService.getDelegate(form, language).then(function(response){
            console.log('success : ', response);
            _self.saveFile(response.data, delegateFileName);
        }, function(response){
            console.log('failure : ', response);
        }).finally(function(){

            _self.fileGenerationFlag = false;
        });
    }

    // SAUVGARDER UN FICHIER SUR LE DISQUE
    this.saveFile = function(data, name) {

        if(!name)
            name = data.name;
        if (window.navigator.msSaveOrOpenBlob)
           navigator.msSaveBlob(data, name);
        else {
             var file = new Blob([data], {type: 'application/pdf'});

             var fileURL = window.URL.createObjectURL(file);
             var download = document.createElement('a');
             download.href = fileURL;
             download.target = '_blank';
             download.download = name;
             document.body.appendChild(download);
             console.log('genrated file link : ', download);
             download.click();
         }
    }

    // SIGNATURE DU CONTRAT D'ADHESION
    this.sign = function(signerForm, adhesionFromValid) {

        console.log('formulaires : ', signerForm, adhesionFromValid);

        if(signerForm.$invalid){
            setTouch(signerForm);
            if(!adhesionFromValid)
                focusInputWithError('adhesion');
                //document.getElementById('adhesion').querySelector('.ng-invalid').focus();
            else
                //document.getElementById('signature-adhesion').querySelector('.ng-invalid').focus();
                focusInputWithError('signature-adhesion');
            return;
        }
        else if(!adhesionFromValid) {
            focusInputWithError('adhesion');
            //document.getElementById('adhesion').querySelector('.ng-invalid').focus();
            return;
        }


        var form = setAdresses();
        popupsAdhesionService.openValidationContractPopup(form, _self.fileAttachment).then(function(){

            console.log('contract signed');
            popupsAdhesionService.openAdhesionDonePopup().then(function(test){

                console.log('promise rejected : ', test);
             });
        }, function(){ });
    }

    // RECUPERER LA PJ
    var getFileAttachment = function(traceId) {

        adhesionSimplifieeService.getFileAttachment(traceId).then(function(){

            _self.fileAttachment = adhesionSimplifieeService.fileAttachment;
            validateFileAttachment();

        });
    }

    var validateFileAttachment = function(siret) {
        if(siret)
            setTimeout(function(){$scope.adhesionForm['file_upload'].$validate();$scope.adhesionForm['siret'].$validate();$scope.$apply();}, TIME_OUT_VALUE);
        else
            setTimeout(function(){$scope.adhesionForm['file_upload'].$validate();$scope.$apply();}, TIME_OUT_VALUE);
    }

    // A SUPPRIMER --
    this.checkFile = function() {
        console.log('checking file function');
        console.log('ng model : ', _self.fakeFile);
        console.log('file model : ', _self.fileAttachment);
    }

    // SUPPRIMER LA PJ
    this.deleteAttachment = function(ctrl) {
        console.log('delete attachment function : ', ctrl);

        if(ctrl.$untouched)
            ctrl.$setTouched();

        document.getElementById('file-upload').value = null;
        _self.fileAttachment = null;
        console.log('file after deleted : ', _self.fileAttachment);

        setTimeout(function(){ctrl.$validate();$scope.$apply();}, TIME_OUT_VALUE);
    }

    var focusInputWithError = function(idValue) {
        var elem = document.getElementById(idValue).querySelector('.ng-invalid');
        if(elem.id == 'file-upload')
            document.getElementById('file-link').focus();
        else
            elem.focus();
    }


}
