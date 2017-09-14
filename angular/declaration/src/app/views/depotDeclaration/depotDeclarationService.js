module.exports = function(declarationResource, popupsService) {
    
    var _self  = this;
    
    this.submit = function(form) {
        
        return declarationResource.sentDeclaration(form).then(function(response){
            console.log('sent declaration success : ', response);
            popupsService.openDepotDeclarationSuccess(response.data.ContributionTotale);
        }, function(response){
            console.log('sent declaration failure : ', response);
            if(response.status == 400)
                popupsService.openDepotDeclarationFailure(response.data);
        });
    }
    
    this.getMotifs = function(){
        return declarationResource.getMotifs();
    }
    
    return this;
}