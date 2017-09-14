module.exports = function (userService,compteWebResource) {
    
    var _self = this;

    this.getUserInfo = function () {
        _self.user = userService.getUser();
        return _self.user;
    }

    _self.goToNonConcerne = compteWebResource.goToNonConcerne;
    _self.goToConcerne = compteWebResource.goToConcerne;

    return this;
   
}