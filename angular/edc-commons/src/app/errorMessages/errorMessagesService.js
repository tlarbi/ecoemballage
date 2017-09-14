module.exports = function($filter) {
  var _self = this;

  _self.getErrorMessage = function (statusCode) {
    var errorMessage = '';

    switch (statusCode) {
      case 403:
        errorMessage = $filter('translate')('labels.transverse.OPERATION_NOT_ALLOWED');
        break;
      default:
        errorMessage = $filter('translate')('errors.transverse.TECHNICAL');
    }

    return errorMessage;
  }

  return _self;
}
