function suppressionCompteService (compteWebResource) {
  var _self = this;

  _self.validateUserPassword = function (form) {
    return compteWebResource.validateUserPassword(form);
  };

  _self.deleteUserAccount = function (form) {
    return compteWebResource.deleteUserAccount(form);
  };

  _self.canDeleteUserAccount = function () {
    return compteWebResource.canDeleteUserAccount();
  };

  return _self;
}

module.exports = suppressionCompteService;
