function widgetuploadService(declarationResource,userService) {
    var self = this;

    self.getAnneesContractualisation = declarationResource.getAnneesContractualisation;


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



module.exports = widgetuploadService;
