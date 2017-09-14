function donneesPersonnellesService(compteWebResource, $cookies, userService) {
    var _self = this;

    // var userInfo = {
    //     lastName: "Dupont",
    //     firstName: "Jean",
    //     civility: "M",
    //     idClientSF: "098765462",
    //     idClientSAP: "098765462",
    //     idCorrespondentSF: "3"
    // };
    //
    // userService.add('userInfo', userInfo);

    var idEntreprise = userService.getUserIdSF();
    var idCorrespondant = userService.getUserIdCorrespondent();

    // $cookies.put('IDSALESFORCE', idEntreprise);

    _self.getData = function () {
        console.log("id Correspondant : ", idCorrespondant);
        return compteWebResource.getPersonnalData(idEntreprise, idCorrespondant);
    }

    _self.postForm = function (form) {
        console.log("id Correspondant : ", idCorrespondant);
        return compteWebResource.updatePersonnalData(idEntreprise, idCorrespondant, form);
    }

    _self.getPrincipal = function () {
        return compteWebResource.getCorrespondants(idEntreprise, 'PRINCIPAL');
    }

    _self.getAllBusinessFunctions = function () {
      return compteWebResource.getAllBusinessFunctions();
    }

    return _self;
}

module.exports = donneesPersonnellesService;
