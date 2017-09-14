function validationService(declarationResource, userService) {
    var self = this;

    self.sendDeclarationUvcXml = declarationResource.sendDeclarationUvcXml;
    self.sendDeclarationAR = declarationResource.sendDeclarationAR;
    self.saveMailsAR = declarationResource.saveMailsAR;
    self.findMailsAR = declarationResource.findMailsAR;
    self.getRecap = declarationResource.getRecap;
    self.getAnneesDeclaration = declarationResource.getAnneesDeclaration;
    self.getAnneesDeclaree = declarationResource.getAnneesDeclaree; 
    self.getMotifsCorrective = declarationResource.getMotifsCorrective;
    self.sendExcelSectDetail = declarationResource.sendExcelSectDetail;
    self.goToHistoriqueDeclaration = declarationResource.goToHistoriqueDeclaration;
    self.checkEtape = declarationResource.checkEtape;
    self.goBack = declarationResource.goBack;

    this.user = {
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

module.exports = validationService;