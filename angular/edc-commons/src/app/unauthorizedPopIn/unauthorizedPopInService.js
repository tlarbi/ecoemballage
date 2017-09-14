module.exports = function ($injector) {
  var _self = this;
  var unauthorizedPopInCtrl = require('./unauthorizedPopInCtrl');

  _self.modal = null;

  _self.open = function () {
    var uibModal = $injector.get('$uibModal');
    _self.modal = uibModal.open({
      template: require('./unauthorizedPopIn.html'),
      backdrop: 'static',
      keyboard: false,
      controller: ['unauthorizedPopInService', unauthorizedPopInCtrl],
      controllerAs: 'unauthorizedPopInCtrl'
    });
  }

  _self.close = function () {
    _self.modal.close();
  }

  return _self;
}
