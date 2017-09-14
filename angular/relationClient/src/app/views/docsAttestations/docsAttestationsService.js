module.exports = function (userService,compteWebResource) {
    
    var self = this;
    
    this.getFile = compteWebResource.getFile;
    this.getDocsAttestation = compteWebResource.getDocsAttestation;
    


    return this;
   
}