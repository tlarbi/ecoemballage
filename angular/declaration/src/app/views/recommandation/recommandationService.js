
function RecommandationService(declarationResource){
    var self = this;
    self.recommandations = declarationResource.getListTypesDeclaration;
   return self;
}



module.exports = RecommandationService;
