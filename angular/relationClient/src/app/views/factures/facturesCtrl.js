module.exports = function (facturesService) {
    var _self = this;

    _self.status_code;
    _self.client_number_SF;
    _self.factures= [];

    this.$onInit = function () {

        _self.userInfo = facturesService.getUserInfo();
        _self.client_number_SF = _self.userInfo.idClientSF;

        facturesService.getFactures(_self.client_number_SF).then(function (response) {
            _self.status_code = 200;
            _self.factures = response.data;
            console.log("factures success: ", response);

        }, function (reason) {
            _self.status_code = reason.status;
            _self.errors = reason.data;
            console.log("factures failure: ", reason);

        }).finally(function () { });
    }

}
