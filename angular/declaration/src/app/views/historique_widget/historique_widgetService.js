function historique_widgetService(declarationResource, userService) {
    var self = this;
    self.getHistoriqueDeclaration = declarationResource.getHistoriqueDeclaration;
    self.getUrl_historique_declaration = declarationResource.getUrl_historique_declaration;  

    self.getAnneesContractualisation = declarationResource.getAnneesContractualisation;

    this.getNumeroClient = function () {
        return userService.getUserIdSAP(); //'GHJYT6565DFG';
    }

    /* self.user = {
        numero_client: undefined,
        id_declarant:undefined,
        id_SF:undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client =userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        self.user.id_SF = userService.getUserIdSF();
        return self.user;
    }*/

    return self;
}



module.exports = historique_widgetService;