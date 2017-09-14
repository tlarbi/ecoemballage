module.exports = function (simulateurService, userService) {
    var self = this;

    self.selected_type;
    self.typesSimulateurs = [];
    self.typesSimulateursTextes = [];
    self.type;

    self.files_urls = [];
    
    this.$onInit = function() {
        
        self.orga = userService.getOrgaCommerciale();
    }
    
     simulateurService.getContenuSimulateurExcel().then(function (response) {

        for (var index in response.data) {
            if (response.data[index].body && response.data[index].title) {
                self.typesSimulateurs.push({
                    titre: response.data[index].title[0].value,
                    html: response.data[index].body[0].value,
                    type: response.data[index].field_type_simulateur[0].value
                }); 
            }
        }

    });
     simulateurService.getExcelLinks().then(function (response) {

         for (var index in response.data) {
             if (response.data[index].field_name && response.data[index].field_upload_excel) {
                 self.files_urls.push({
                     type: response.data[index].field_name[0].value, 
                     url: response.data[index].field_upload_excel[0].url
                 });
             }
         }
         console.log('elf.files_urls', self.files_urls);
     });

     this.getTypeDeclarationParId = function (type) {
        for (i = 0; i < self.typesSimulateurs.length; i++) { 
            if (self.typesSimulateurs[i].type == type)
                return self.typesSimulateurs[i];
        }
     }
     this.getExcelLinkByType = function (type) {
         for (i = 0; i < self.files_urls.length; i++) {
             if (self.files_urls[i].type == type)
                 return self.files_urls[i].url;
         }
         //simulateurService.getExcelLinkByType(type);
     }
};
