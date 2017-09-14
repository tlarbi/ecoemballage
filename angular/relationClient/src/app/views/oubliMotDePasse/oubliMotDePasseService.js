module.exports = function (compteWebResource) {

    var _self = this;

    this.checkEmail = function (email) {
        return compteWebResource.checkEmail(email);
    }
    this.resetPassword = function (email) {
        return compteWebResource.resetPasswordAsk(email);
    }
    return this;

}