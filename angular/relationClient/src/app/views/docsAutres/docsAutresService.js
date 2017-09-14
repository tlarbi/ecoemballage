module.exports = function (userService,compteWebResource) {
    
    var self = this;
    
    this.getFile = compteWebResource.getFile;
    this.getDocsAutres = compteWebResource.getDocsAutres;
    


    return this;
   
}