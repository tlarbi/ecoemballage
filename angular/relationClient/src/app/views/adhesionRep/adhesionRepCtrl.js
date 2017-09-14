module.exports = function (adhesionRepService, formService, $state, commonServices) {
    var _self = this;

    const LOGO_LINK = '/adhesion/accueil-adhesion-questionnaire';

    _self.status_code;
    _self.client_number_SF;
    _self.step1 = "step1";
    _self.step2 = "step2";
    _self.step3 = "step3";
    _self.step4 = "step4";
    _self.etape1 = "";
    _self.etape2 = "";
    _self.etape3 = "";
    _self.etape4 = "";
    _self.formInfo = [];
    _self.form_etape1_question1_rep;
    _self.form_etape2_questionA_rep;
    _self.form_etape2_questionB_rep;
    _self.form_etape2_questionC_rep;
    _self.form_etape3_question1_rep;
    _self.form_etape4_question1_rep = false;;
    _self.form_etape4_question1_rep_oui_1 = false;
    _self.form_etape4_question1_rep_oui_2 = false;
    _self.existStep1;
    _self.existStep2;
    _self.existStep3;
    _self.existStep4;

    _self.tab = [];

    this.$onInit = function () {

        commonServices.setLogoLinkRedirection(LOGO_LINK);

        _self.userInfo = adhesionRepService.getUserInfo();
        _self.client_number_SF = _self.userInfo.idClientSF;

        console.log('init');

        _self.existStep1 = formService.exist(_self.step1);
        _self.existStep2 = formService.exist(_self.step2);
        _self.existStep3 = formService.exist(_self.step3);
        _self.existStep4 = formService.exist(_self.step4);

        console.log("exist step1: " + _self.existStep1);

        if (_self.existStep1 == false) {
            formService.addStep1(_self.etape1);
        }
        else {

            _self.form_etape1_question1_rep = formService.getResponseAllStep(_self.step1);

            if (_self.existStep2) {
                _self.form_etape2_questionA_rep = formService.getResponseStep2QA(_self.step2);
                _self.form_etape2_questionB_rep = formService.getResponseStep2QB(_self.step2);
                _self.form_etape2_questionC_rep = formService.getResponseStep2QC(_self.step2);
            }

            if (_self.existStep3) {
                _self.form_etape3_question1_rep = formService.getResponseAllStep(_self.step3);
            }

            if (_self.existStep4) {
                _self.form_etape4_question1_rep_oui_1 = formService.getResponseStep4Q1Oui1(_self.step4);
                _self.form_etape4_question1_rep_oui_2 = formService.getResponseStep4Q1Oui2(_self.step4);
                _self.form_etape4_question1_rep = formService.getResponseStep4Q1Rep(_self.step4);
                console.log('recup step 4 : ', _self.form_etape4_question1_rep_oui_1);
            }
        }

    }

    this.etape1Validation = function () {

        console.log('etape1validation');

        _self.etape1 = "{\"responseQ1\":\"" + _self.form_etape1_question1_rep + "\"}";
        formService.addStep1(_self.etape1);
        console.log("response: " + formService.getResponseAllStep(_self.step1));

        if (_self.form_etape1_question1_rep == 'Oui') {
            console.log('if');
            formService.addStep2(_self.etape2);
            this.redirectToState2();
        }
        else {
            console.log('else');
            this.redirectToNonC();
        }

        console.log('etape1validation done');
    }

    this.redirectToNonC = function (numQuestion) {

        console.log('redirectToNonC');
        adhesionRepService.goToNonConcerne();
    }

    this.redirectToState2 = function () {

        console.log('redirectToState2');
        $state.go('state2');
    }

    this.etape2Validation = function (numEtape, numQuestion, response) {

        console.log('etape2validation');

        _self.etape2 = "{\"responseQA\":\"" + _self.form_etape2_questionA_rep + "\",\"responseQB\":\"" + _self.form_etape2_questionB_rep + "\",\"responseQC\":\"" + _self.form_etape2_questionC_rep + "\"}";
        formService.addStep2(_self.etape2);

        console.log("response QA: " + formService.getResponseStep2QA(_self.step2));
        console.log("response QB: " + formService.getResponseStep2QB(_self.step2));
        console.log("response QC: " + formService.getResponseStep2QC(_self.step2));
        console.log('etape2validation done');

        formService.addStep3(_self.etape3);
    }

    this.etape3Validation = function (numEtape, numQuestion, response) {

        console.log('etape3validation');

        _self.etape3 = "{\"responseQ1\":\"" + _self.form_etape3_question1_rep + "\"}";
        formService.addStep3(_self.etape3);
        console.log("response: " + formService.getResponseAllStep(_self.step3));

        console.log('etape3validation done');

        formService.addStep4(_self.etape4);
    }

    this.etape4Validation = function (numQuestion, response) {

        console.log('etape4validation');

        _self.etape4 = "{\"responseQ1Oui1\":\"" + _self.form_etape4_question1_rep_oui_1 + "\", \"responseQ1Oui2\":\"" + _self.form_etape4_question1_rep_oui_2 + "\", \"responseQ1Rep\":\"" + _self.form_etape4_question1_rep + "\"}";
        formService.addStep4(_self.etape4);
        console.log("response: " + formService.getResponseAllStep(_self.step4));

        console.log('etape4validation done');
        console.log('reponse etape 4 repA:' + _self.form_etape4_question1_rep);
        console.log('reponse etape 4 repB:' + _self.form_etape4_question1_rep_oui_1);
        console.log('reponse etape 4 repC:' + _self.form_etape4_question1_rep_oui_2);

        this.formValidation();
    }

    this.formValidation = function () {

        if (_self.form_etape1_question1_rep == 'Oui' && ((_self.form_etape2_questionA_rep == 'Non') || (_self.form_etape2_questionA_rep == 'Oui' && _self.form_etape2_questionC_rep == 'Oui')) && (_self.form_etape3_question1_rep == 'Non') && (_self.form_etape4_question1_rep)) {
            adhesionRepService.goToNonConcerne();
        }
        else {
            adhesionRepService.goToConcerne();
        }

    }

    this.removeStep1Session = function () {
        formService.removeStep1();
    }

    this.removeStep2Session = function () {
        formService.removeStep2();
    }
    this.removeStep3Session = function () {
        formService.removeStep3();
    }
    this.removeStep4Session = function () {
        formService.removeStep4();
    }

    this.controlStep2 = function () {

        _self.existStep1 = formService.exist(_self.step1);

        if (_self.existStep1 == false) {
            $state.go('state1');
        }
        else {
            $state.go('state2');
        }

    }

    this.controlStep3 = function () {

        console.log('control step3');
        _self.existStep2 = formService.exist(_self.step2);

        if (_self.existStep2 == true) {
            console.log('redirection state 3');
            $state.go('state3');
        }
        else {
            console.log('redirection state 1');
            $state.go('state1');
        }

    }

    this.controlStep4 = function () {

        console.log('control step4');
        _self.existStep3 = formService.exist(_self.step3);

        if (_self.existStep3 == true) {
            console.log('redirection state 4');
            $state.go('state4');
        }
        else {
            console.log('redirection state 1');
            $state.go('state1');
        }
    }

}
