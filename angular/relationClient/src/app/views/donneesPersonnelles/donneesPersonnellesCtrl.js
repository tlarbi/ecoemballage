module.exports = function(donneesPersonnellesService, userService, commonServices, $filter, $q, errorMessagesService) {
  var _self = this;
  var regexList = commonServices.getRegExList();

  _self.emailRegExp = regexList.emailRegEx;
  _self.telRegExp = regexList.telRegEx;

  _self.errors = [""];
  _self.loading = false;
  _self.saveSuccess = false;
  _self.operationFailure = false;
  _self.formLoaded = true;
  _self.errorMessage = '';

  _self.$onInit = function() {
    _self.functions = userService.getFunctions();

    var principalPromise = donneesPersonnellesService.getPrincipal().then(function(response) {
      _self.principal = response.data[0];
    });

    var donneesPersonnellesPromise = donneesPersonnellesService.getData().then(function(response) {
      _self.form = response.data;

      _self.form.DisplayedAccess = '';
      for (var i = 0; i < _self.form.Access.length; i++) {
        if (_self.form.DisplayedAccess != '') {
          _self.form.DisplayedAccess += ' - ';
        }

        _self.form.DisplayedAccess += $filter('translate')('labels.relationClient.access.' + _self.form.Access[i]);
      }
    });

    _self.loading = true;
    _self.formLoaded = false;
    $q.all([principalPromise, donneesPersonnellesPromise]).then(function (response) {
    }, function (response) {
      _self.operationFailure = true;
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
    }).finally(function () {
      _self.loading = false;
      _self.formLoaded = true;
    });
  }

  _self.hasFunction = function() {
    return _self.form != undefined && _self.form != null &&
      _self.form.Function != undefined && _self.form.Function != null && _self.form.Function != '';
  };

  _self.isMobliePhoneEmpty = function () {
    return _self.form == null || _self.form == undefined || _self.form.MobilePhone == '';
  };

  _self.isOtherFunctionEmpty = function () {
    return _self.form == null || _self.form == undefined
      || _self.form.OtherFunction == null ||  _self.form.OtherFunction == undefined || _self.form.OtherFunction == '';
  }

  _self.showFunction = function (businessFunction) {
    return businessFunction.code != _self.form.OtherFunction;
  };

  _self.showOtherFunction = function (businessFunction) {
    return businessFunction.code != _self.form.Function;
  };

  _self.submit = function() {
    _self.saveSuccess = false;
    _self.operationFailure = false;

    _self.loading = true;
    donneesPersonnellesService.postForm(_self.form).then(function(response) {
      _self.saveSuccess = true;
    }, function(response) {
      _self.operationFailure = true;
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
    }).finally(function () {
      _self.loading = false;
    });
  };
}
