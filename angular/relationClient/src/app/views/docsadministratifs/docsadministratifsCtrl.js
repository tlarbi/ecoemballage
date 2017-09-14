module.exports = function (docsadministratifsService) {
    var self = this;

    
    self.type;
    self.files_urls_docs = [];

    docsadministratifsService.getDocsLinks().then(function (response) {

         for (var index in response.data) {
             if (response.data[index].name && response.data[index].field_file_field) {
                 self.files_urls_docs.push({
                     name: response.data[index].name[0].value, 
                     url: response.data[index].field_file_field[0].url

                 });
             }
         }
         console.log('urls:', self.files_urls_docs);
     });


     this.getDoc = function (name) {
         for (i = 0; i < self.files_urls_docs.length; i++) {
              if (self.files_urls_docs[i].name == name)
                 return self.files_urls_docs[i].url;
         }
     }
};