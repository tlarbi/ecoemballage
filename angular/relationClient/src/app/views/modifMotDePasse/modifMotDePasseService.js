module.exports = function (compteWebResource) {
    var _self = this;

    _self.validateUserPassword = function (form) {
      return compteWebResource.validateUserPassword(form);
    };

    this.postForm = function (form) {
      return compteWebResource.updatePassword(form);
    };

    return _self;
}
