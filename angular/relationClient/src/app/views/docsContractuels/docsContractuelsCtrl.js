module.exports = function (docsContractuelsService) {
    var _self = this;

    _self.status_code_attestation;
    _self.status_code_contrat;
    _self.status_code_contrat_file;
    _self.client_number_SF;
    _self.attestation;
    _self.contrat;
    _self.contrat_file;
    _self.getContratFile;

    _self.status_code_delegation;
    _self.delegation;

    this.$onInit = function () {

        _self.userInfo = docsContractuelsService.getUserInfo();
        _self.client_number_SF = _self.userInfo.idClientSF;

        docsContractuelsService.getAttestation(_self.client_number_SF).then(function (response) {
            _self.status_code_attestation = 200;
            _self.attestation = response.data;
            _self.attestation.AdhesionEtat = response.data.AdhesionEtat;
            console.log("(attestation) url : "+ _self.attestation.Url)

        }, function (reason) {
            _self.status_code_attestation = reason.status;
            console.error('submit - error : ' + JSON.stringify(reason));
            _self.errors = reason.data;

        }).finally(function () { });

        docsContractuelsService.getContrat(_self.client_number_SF).then(function (response) {
            _self.status_code_contrat = 200;
            _self.contrat = response.data;
            _self.contrat.vc_DateScan = response.data.vc_DateScan;
            _self.contrat.vc_Error = response.data.vc_Error;
            console.log("(contrat) date : " + _self.contrat.vc_DateScan);

        }, function (reason) {
            _self.status_code_contrat = reason.status;
            console.error('submit - error : ' + JSON.stringify(reason));
            _self.errors = reason.data;

        }).finally(function () { });


        docsContractuelsService.getDelegation(_self.client_number_SF).then(function (response) {
            _self.status_code_delegation = 200;
            _self.delegation = response.data;
            _self.delegation.vc_DateScan = response.data.vc_DateScan;
            _self.delegation.vc_Error = response.data.vc_Error;
            console.log("(delegation) date : " + _self.delegation.vc_DateScan);

        }, function (reason) {
            _self.status_code_delegation = reason.status;
            console.error('submit - error : ' + JSON.stringify(reason));
            _self.errors = reason.data;

        }).finally(function () { });

        
    }
 
    _self.getContratFile = function () {
        docsContractuelsService.getContratFile(_self.client_number_SF);
    }

    _self.getContratFileAttachement = function () {
        docsContractuelsService.getContratFileAttachement(_self.client_number_SF);
    }

    _self.getDelegationFile = function () {
        docsContractuelsService.getDelegationFile(_self.client_number_SF);
    };

    _self.getDelegationFileAttachement = function () {
        docsContractuelsService.getDelegationFileAttachement(_self.client_number_SF);
    };

}