module.exports = function (attestationsService) {
    var _self = this;

    _self.status_code;
    _self.client_number_SF;
    _self.attestation;

    this.$onInit = function () {

        _self.userInfo = attestationsService.getUserInfo();
        _self.client_number_SF = _self.userInfo.idClientSF;

        attestationsService.getAttestation(_self.client_number_SF).then(function (response) {
            _self.status_code = 200;
            _self.attestation = response.data;
            _self.attestation.AdhesionEtat = response.data.AdhesionEtat;
            console.log("(attestation)etat de l'adhesion" + _self.attestation.AdhesionEtat);

        }, function (reason) {
            _self.status_code = reason.status;
            console.error('submit - error : ' + JSON.stringify(reason));
            _self.errors = reason.data;

        }).finally(function () { });
    }

}