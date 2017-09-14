function profilesCorrespondantsService(compteWebResource, $cookies, userService) {
    var _self = this;

    // var userInfo = {
    //     lastName: "Dupont",
    //     firstName: "Jean",
    //     civility: "M",
    //     idClientSF: "098765462",
    //     idClientSAP: "GHJYT6565DFG",
    //     idCorrespondentSF: "3"
    // };
    //
    // userService.add('userInfo', userInfo);

    var idEntreprise = userService.getUserIdClientSF();

    // $cookies.put('IDSALESFORCE', idEntreprise);

    _self.getCorrespondants = function () {
        return compteWebResource.getCorrespondants(idEntreprise, '!PRINCIPAL')
    }

    _self.putForm = function (form) {
      return compteWebResource.updateProfilesCorrespondants(idEntreprise, form);
    }

    return _self;
}

module.exports = profilesCorrespondantsService;
