module.exports = function(visualisationEntreprisesService, $uibModal, $scope, userService) {
  var _self = this;

  _self.entreprises = {};
  _self.idClient = '';
  _self.modal = null;
  _self.numeroClient = '';
  _self.numeroClientChecked = false;
  _self.numeroClientOk = false;
  _self.checkCompanyMessageCode = '';
  _self.showDelete = true;
  _self.canRemove = true;
  _self.hotLinePhone = '';
  _self.hotLineMail = '';
  _self.hotLineMailLink = '';

    
    
  var idCorrespondant = userService.getUserIdCorrespondent();
  var hotLineMailLinkPattern = '<a href="mailto: {HOTLINE_MAIL}">mail</a>';
    
    
    

  afficheEntreprises();

  _self.demandeSuppressionRattachement = function(idClient) {
    _self.idClient = idClient;
    visualisationEntreprisesService.checkRemovalRight(idCorrespondant, idClient).then(function(response) {
      _self.canRemove = response.data.CanRemoveCompany;
      _self.hotLinePhone = response.data.HotlinePhone;
      _self.hotLineMail = response.data.HotlineMail;
      _self.hotLineMailLink = hotLineMailLinkPattern.replace('{HOTLINE_MAIL}', _self.hotLineMail);

      _self.modal = $uibModal.open({
        template: require('./confirmSuppressionRattachement.html'),
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });
    });
  };

  _self.demandeRattachement = function() {
    visualisationEntreprisesService.addClient().then(function() {
      afficheEntreprises();
    });
  }

  _self.annuleModal = function() {
    _self.modal.close();
  };

  _self.supprimeRattachement = function() {
    visualisationEntreprisesService.supprimerRattachement(idCorrespondant, _self.idClient).then(function(response) {
      userService.removeClient(_self.idClient);
      var listClients = userService.getListClients();

      if (_self.idClient != userService.getUserIdSF()) {
        _self.modal.close();
        afficheEntreprises();
      } else {
        visualisationEntreprisesService.removeCompanyFromSession();
        if (listClients.length > 1) {
          window.location = '/choix-entreprise';
        } else {
          visualisationEntreprisesService.goHome(listClients[0]);
        }
      }
    });
  };

  _self.selectionnerEntreprise = function(entreprise) {
    var clientInfo = {
      idSAP: entreprise.Number,
      idSF: entreprise.IdClient,
      libelle: entreprise.Name,
      idCorespondant: entreprise.IdCorrespondant
    };

    visualisationEntreprisesService.goHome(clientInfo);
  };

  function afficheEntreprises() {
    visualisationEntreprisesService.getEntreprises().then(function(response) {
      _self.entreprises = response.data;
      _self.showDelete = (_self.entreprises.length > 1);
    });
  }
}
