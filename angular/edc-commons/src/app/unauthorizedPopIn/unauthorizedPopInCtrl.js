module.exports = function (unauthorizedPopInService) {
  var _self = this;

  _self.close = function () {
    unauthorizedPopInService.close();
  }
}
