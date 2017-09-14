module.exports = function (compteWebResource, $cookies, userService, commonServices) {
    var _self = this;

    // var userInfo = {
    //     lastName: "Dupont",
    //     firstName: "Jean",
    //     civility: "M",
    //     idClientSF: "GHJYT6565DFG",
    //     idClientSAP: "GHJYT6565DFG",
    //     idCorrespondentSF: "3"
    // };
    //
    // userService.add('userInfo', userInfo);

    var idUtilisateur = userService.getUserIdCorrespondent();

    // $cookies.put('IDSALESFORCE', 'GHJYT6565DFG')

    _self.getEntreprises = function () {
        return compteWebResource.getEntreprises(idUtilisateur);
    };

    _self.supprimerRattachement = function (idCorrespondant, idClient) {
        return compteWebResource.removeCompanyFromCorrespondant(idCorrespondant, idClient);
    };

    _self.checkClientNumber = function (clientNumber) {
      return compteWebResource.checkClientNumberToAdd(clientNumber);
    };

    _self.addCompanyToUser = function (idCorrespondant, form) {
      return compteWebResource.addCompanyToUser(idCorrespondant, form);
    }

    _self.checkRemovalRight = function (idCorresponant, idClient) {
      return compteWebResource.checkRemovalRight(idCorresponant, idClient);
    }

    _self.addClient = function () {
      return commonServices.openAddNewClientPopup();
    };

    this.goHome = function(clientInfo) {

        commonServices.goHome(clientInfo);
    }

    _self.removeCompanyFromSession = function () {
      userService.resetCompany();
    };

    return _self;
}
