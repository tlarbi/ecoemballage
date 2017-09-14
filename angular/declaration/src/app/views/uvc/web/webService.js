function webService(declarationResource, userService) {
    var self = this;
    self.getListUVC_firstLoad = declarationResource.getListUVC_firstLoad;
    self.getlistUvcService = declarationResource.getListUvc;
    self.AddUvcWeb = declarationResource.AddUvcWeb;
    self.copyUvcService = declarationResource.copyUvc;
    self.deleteUvc = declarationResource.deleteUvc;

    self.goBack = declarationResource.goBack;
 
    self.checkEtape = declarationResource.checkEtape;

    self.getProduits = declarationResource.getProduits;
    self.getProduitsSpec = declarationResource.getProduitsSpec;
    self.UpdateUvcWeb = declarationResource.UpdateUvcWeb;
    self.CancelEdition = declarationResource.CancelEdition;
    self.InvalidateUvcWeb = declarationResource.InvalidateUvcWeb;

    self.ValidateDeclaWeb = declarationResource.ValidateDeclaWeb;
    self.goToMarquesSocietes = declarationResource.goToMarquesSocietes;

    self.getRecap = declarationResource.getRecap;

    self.CalculerNbBobinesAlimentaire = declarationResource.CalculerNbBobinesAlimentaire;

    this.orgaCommerciale = userService.getOrgaCommerciale();

    this.user = {
        numero_client: undefined,
        id_declarant: undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client = userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        return self.user;
    }
   
    return self;
}
module.exports = webService;