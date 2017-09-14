function choixdeclarationService(declarationResource, userService) {
    var self = this;
    self.getChoixTypesDeclaration = declarationResource.getChoixTypesDeclaration;
    self.contenu = declarationResource.getContenuBloc;

    self.getFichierExcelUvc = declarationResource.getFichierExcelUvc;
    self.InitialiserDeclarationUVC = declarationResource.InitialiserDeclarationUVC;
    
    self.goToDeclarationWeb = declarationResource.goToDeclarationWeb;
    self.goToDelarationForfait = declarationResource.goToDelarationForfait;
    self.getTemplateExcelSectDetail = declarationResource.getTemplateExcelSectDetail;

    self.CreateDeclarationUvcWeb = declarationResource.CreateDeclarationUvcWeb;

    self.user = {
        numero_client: undefined,
        id_declarant:undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client = userService.getUserIdSAP();//'GHJYT6565DFG';
        self.user.id_declarant = userService.getUserIdCorrespondent();//'123'; 
        console.log(self.user)
        return self.user;
    }
    self.getLanguage = function () { return userService.getLanguage; }

   return self;
}
module.exports = choixdeclarationService;
