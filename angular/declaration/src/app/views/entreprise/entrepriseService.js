function entrepriseService(declarationResource,userService) {
    var self = this;

    self.getPays = declarationResource.getPays; 
    self.getRecap =  declarationResource.getRecap;
   
    self.SaveSocietesMarques = declarationResource.SaveSocietesMarques;
    self.goToValidationDecWeb = declarationResource.goToValidationDecWeb;
    self.goToDeclarationUvcWeb = declarationResource.goToDeclarationUvcWeb;
    self.goToHistoriqueDeclaration = declarationResource.goToHistoriqueDeclaration;
   
    self.checkEtape = declarationResource.checkEtape;
    self.getListEntreprise = declarationResource.getListEntreprise;
    self.getListMarque = declarationResource.getListMarque;
    self.goBack = declarationResource.goBack;
  
    self.getControleEcart = declarationResource.getControleEcart;

    self.user = {
        numero_client: undefined,
        id_declarant:undefined,
        id_SF:undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client =userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        self.user.id_SF = userService.getUserIdSF();
        return self.user;
    }


    return self;
}



module.exports = entrepriseService;
