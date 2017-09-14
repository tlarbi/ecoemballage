function declarationforfaitService(declarationResource, userService) {
    var self = this;
    
    self.SaveDeclarationForfait = declarationResource.SaveDeclarationForfait;
    self.getRecap = declarationResource.getRecap;
    self.goToChoixDeclaration = declarationResource.goToChoixDeclaration;

    self.sendDeclarationAR = declarationResource.sendDeclarationAR;
    self.saveMailsAR = declarationResource.saveMailsAR;  
    self.getControleEcart = declarationResource.getControleEcart;
    self.goBack = declarationResource.goBack;

     self.user = {
        numero_client: undefined,
        id_declarant:undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client = userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        self.user.id_SF = userService.getUserIdSF();
        return self.user;
    }

   return self;
}
module.exports = declarationforfaitService;

