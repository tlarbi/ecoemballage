module.exports = function (userService,compteWebResource) {
    
    var _self = this;

    this.getAttestation = compteWebResource.getAttestation;
    this.getContrat = compteWebResource.getContrat;
    this.getContratFile = compteWebResource.getContratFile;
    this.getContratFileAttachement = compteWebResource.getContratFileAttachement;

    this.getDelegation = compteWebResource.getDelegation;
    this.getDelegationFile = compteWebResource.getDelegationFile;
    this.getDelegationFileAttachement = compteWebResource.getDelegationFileAttachement;



    this.getUserInfo = function () {
        _self.user = userService.getUser();
        return _self.user;
    }

    return this;
   
}