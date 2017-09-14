module.exports = function(compteWebResource) {

    var _self = this;

    this.getContract = function(lang, token) {

        return compteWebResource.getAdhesionContractMail(lang, token).then(function(response) {

            console.log('get adhesion contract success : ', response);
            _self.contractFile = response.data;
        }, function(response) {

            console.log('get adhesion contract failure : ', response);
            _self.contractFile = undefined;
        });
    }

    return this;
}
