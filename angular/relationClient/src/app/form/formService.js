module.exports = function () {

    var _self = this;
    this.numEtapeName = 'numEtape';

    this.errorMessage = '';

    this.step1Name = "step1";
    this.step2Name = "step2";
    this.step3Name = "step3";
    this.step4Name = "step4";

    this.step1 = {
        responseQ1: undefined
    }

    this.step2 = {
        responseQA: undefined,
        responseQB: undefined,
        responseQC: undefined
    }

    this.step3 = {
        responseQ1: undefined
    }

    this.step4 = {
        responseQ1Oui1: undefined,
        responseQ1Oui2: undefined,
        responseQ1Rep: undefined
    }

    this.addStep1 = function (value) {

        sessionStorage.setItem(_self.step1Name, value);
    }

    this.addStep2 = function (value) {

        sessionStorage.setItem(_self.step2Name, value);
    }

    this.addStep3 = function (value) {

        sessionStorage.setItem(_self.step3Name, value);
    }

    this.addStep4 = function (value) {

        sessionStorage.setItem(_self.step4Name, value);
    }

    this.removeStep1 = function () {

        console.log("remove step1");
        sessionStorage.removeItem(_self.step1Name);
    }

    this.removeStep2 = function () {
        sessionStorage.removeItem(_self.step2Name);
    }

    this.removeStep3 = function () {
        sessionStorage.removeItem(_self.step3Name);
    }

    this.removeStep4 = function () {
        sessionStorage.removeItem(_self.step4Name);
    }

    this.addFormEtape = function (etape) {
        sessionStorage.setItem(_self.numEtapeName, etape);
    }

    this.add = function () {
        sessionStorage.setItem()
    }

    // RECUPERER OBJET FORM DANS LA SESSION
    this.getForm = function () {

        var form = JSON.parse(sessionStorage.getItem(_self.formObjectName));
        return form != null ? user : _self.errorMessage;
    }

    // RECUPERER LE NUMERO DE L'ETAPE DU FORMULAIRE
    this.getFormEtape = function () {

        var form = JSON.parse(sessionStorage.getItem(_self.formObjectName));
        return form != null && angular.isDefined(form.numEtape) ? form.numEtape : _self.errorMessage;
    }

    this.getValue = function (key) {

        return JSON.parse(sessionStorage.getItem(key));
    }

    this.getResponseAllStep = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQ1) ? form.responseQ1 : _self.errorMessage;
    }

    this.getResponseStep2QA = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQA) ? form.responseQA : _self.errorMessage;
    }

    this.getResponseStep2QB = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQB) ? form.responseQB : _self.errorMessage;
    }

    this.getResponseStep2QC = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQC) ? form.responseQC : _self.errorMessage;
    }

    this.getResponseStep4Q1Oui1 = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQ1Oui1) ? form.responseQ1Oui1 == 'true' : _self.errorMessage;
    }

    this.getResponseStep4Q1Oui2 = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQ1Oui2) ? form.responseQ1Oui2 == 'true' : _self.errorMessage;
    }

    this.getResponseStep4Q1Rep = function (stepName) {

        console.log("stepName: " + stepName);
        var form = JSON.parse(sessionStorage.getItem(stepName));
        return form != null && angular.isDefined(form.responseQ1Rep) ? form.responseQ1Rep == 'true' : _self.errorMessage;
    }


    this.getEtapeForm = function () {
        return _self.getFormEtape();
    }

    // ENREGISTREMENT DES DONNEES UTILISATEURS DANS LA SESSION
    this.setSessionStorage = function (data) {

        //ENREGISTREMENT DE L'ETAPE
        if (angular.isDefined(data.numEtape) && data.numEtape != null)
            _self.userInfo.numEtape = data.numEtape[0];

    }

    this.exist = function (stepName) {

        if (sessionStorage.getItem(stepName)) {
            return true;
        }
        else return false;
    }

    return this;
}
