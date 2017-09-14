function historiqueService(declarationResource, userService, unauthorizedPopInService) {
    var self = this;
    self.getHistoriqueDeclaration = declarationResource.getHistoriqueDeclaration;
    self.getUrl_historique_declaration = declarationResource.getUrl_historique_declaration;
    self.getMotifsCorrective = declarationResource.getMotifsCorrective;


    self.goToChoixDeclaration = declarationResource.goToChoixDeclaration;
    self.goToUploadExcel = declarationResource.goToUploadExcel;

    self.postDeclarationWebSectDetail = declarationResource.postDeclarationWebSectDetail;
    self.GetLienFinalisationForfait = declarationResource.GetLienFinalisationForfait;

    self.GetLienTelechargementSectDetail = declarationResource.GetLienTelechargementSectDetail;
    self.GetLienTelechargementUVC = declarationResource.GetLienTelechargementUVC;

    self.getFichierExcelUvc = declarationResource.getFichierExcelUvc;
    self.InitialiserDeclarationUVC = declarationResource.InitialiserDeclarationUVC;

    self.goToDeclarationWeb = declarationResource.goToDeclarationWeb;
    self.goToDelarationForfait = declarationResource.goToDelarationForfait;
    self.getTemplateExcelSectDetail = declarationResource.getTemplateExcelSectDetail;

    self.CreateDeclarationUvcWeb = declarationResource.CreateDeclarationUvcWeb;
    self.SupprimerDeclaration = declarationResource.SupprimerDeclaration;
    self.user = {
        numero_client: undefined,
        id_declarant: undefined,
        id_SF: undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client = userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        self.user.id_SF = userService.getUserIdSF();
        return self.user;
    }
	
	 self.IsConseiller = function () {
        return userService.isConseiller();
    }

	
	self.unAuthPopinOpen = function () {
        unauthorizedPopInService.open();
    }

	
    return self;
}
module.exports = historiqueService;