module.exports = function (userService,compteWebResource) {
    
    var self = this;
    
    this.getFile = compteWebResource.getFile;
    this.getDocsAnnexes = compteWebResource.getDocsAnnexes;
    
    return this;
   
}