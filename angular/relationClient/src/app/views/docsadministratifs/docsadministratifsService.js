module.exports = function (userService,compteWebResource) {
    
    var self = this;
    
    this.getFile = compteWebResource.getFile;
    this.getDocsLinks = compteWebResource.getDocsLinks;
    
    return this;
   
}