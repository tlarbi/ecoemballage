module.exports = function (docsAutresService) {
    var self = this;

    
    self.type;
    self.files_urls_docs = [];

    docsAutresService.getDocsAutres().then(function (response) {

         for (var index in response.data) {
             if (response.data[index].name && response.data[index].field_file_field_3) {
                 self.files_urls_docs.push({
                     name: response.data[index].name[0].value, 
                     //url: response.data[index].field_upload[0].url field_file_field
                     url: response.data[index].field_file_field_3[0].url

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