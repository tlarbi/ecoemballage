function simulateurService(declarationResource) {
    var self = this; 
    self.getContenuSimulateurExcel = declarationResource.getContenuSimulateurExcel;
    self.getExcelLinks = declarationResource.getExcelLinks

   return self;
}
module.exports = simulateurService;


