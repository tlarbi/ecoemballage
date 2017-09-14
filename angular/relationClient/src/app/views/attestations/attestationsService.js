module.exports = function (userService,compteWebResource) {
    
    var _self = this;

    this.getAttestation = compteWebResource.getAttestation;

    this.getUserInfo = function () {
        _self.user = userService.getUser();
        return _self.user;
    }

    return this;
   
}