module.exports = function (recommandationService) {
  var self = this;
  self.typesDeclarations = [];
    recommandationService.recommandations().then(function(response){
      for(var index in response.data){
        if(response.data[index].body && response.data[index].field_code_type_decla){
          //A retirer !
          response.data[index].body[0].value= response.data[index].body[0].value.replace('src="','src="http://eead-dev-front.northeurope.cloudapp.azure.com/');
          self.typesDeclarations.push({
            html : response.data[index].body[0].value,
            code: response.data[index].field_code_type_decla[0].value
          });


        }
      }
    });
};
