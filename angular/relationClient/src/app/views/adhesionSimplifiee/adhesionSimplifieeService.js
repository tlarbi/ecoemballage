module.exports = function (compteWebResource) {

    var _self = this;

    _self.checkSiret = compteWebResource.checkSiret;

    this.postAdhesion = function(form, file) {

        return compteWebResource.postAdhesion(form, file);
    }

    this.getCountriesList = function() {

        return compteWebResource.getCountries().then(function(response){
            console.log('success : ', response);
            _self.countries = response.data;
        }, function(response){
            console.log('failure : ', response);
            _self.countries = [];
        })
    }

    this.getForm = function(link) {

        return compteWebResource.getAdhesionObject(link).then(function(response){
            console.log('success : ', response);
            _self.formObject = response.data;
        }, function(response){
            console.log('failure : ', response);
            _self.formObject = undefined;
        });
    }

    this.getRecontractForm = function(idClientSF, idClientSAP) {

        return compteWebResource.getRecontractualisation(idClientSF, idClientSAP).then(function(response){
            console.log('success : ', response);
            _self.formObject = response.data;
        }, function(response){
            console.log('failure : ', response);
            _self.formObject = undefined;
        });
    }

    this.getContract = function(form, language) {

        return compteWebResource.getAdhesionContract(form, language);
    }

    this.getDelegate = function(form, language) {

        return compteWebResource.getAdhesionDelegate(form, language);
    }

    this.getFileAttachment = function(traceId) {

        return compteWebResource.getAdhesionFileAttachment(traceId).then(function(response){
            console.log('getting file success : ', response);
            if(response.data.size > 0)
                _self.fileAttachment = response.data;
            else {
                _self.fileAttachment = undefined;
            }
        }, function(response){
            console.log('getting file failure : ', response);
        });
    }
    return this;

}
