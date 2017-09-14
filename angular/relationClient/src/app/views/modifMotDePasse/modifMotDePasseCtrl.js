module.exports = function(modifMotDePasseService, commonServices, $scope, errorMessagesService) {
  var _self = this;
  var regExList = commonServices.getRegExList();

  _self.wrongCurrentPasswordFlag = false;
  _self.form = {
    oldPassword: undefined,
    newPassword: undefined,
    newPasswordConfirm: undefined
  };
  _self.saveSuccess = false;
  _self.operationFailure = false;
  _self.accountLocked = false;
  _self.remainingAttemptCount = 0;
  _self.errorMessage = '';

  _self.passwordRegEx = regExList.passRegEx;

  _self.passRegEx = regExList.passRegEx;
  _self.atLeastNineCarRegEx = regExList.atLeastNineCarRegEx;
  _self.atLeastMajRegEx = regExList.atLeastMajRegEx;
  _self.atLeastNumRegEx = regExList.atLeastNumRegEx;
  _self.atLeastSpecialCarRegEx = regExList.atLeastSpecialCarRegEx;
  _self.atLeastMinRegEx = regExList.atLeastMinRegEx;

  _self.isEmpty = function(field) {
    switch (field) {
      case 'oldPassword':
        return angular.isUndefined(_self.form.oldPassword);
      case 'newPassword':
        return angular.isUndefined(_self.form.newPassword);
      case 'newPasswordConfirm':
        return angular.isUndefined(_self.form.newPasswordConfirm);
    }
  };

  _self.checkPassword = function(isEmptyValid) {
    if (isEmptyValid && (_self.form.newPasswordConfirm == null || _self.form.newPasswordConfirm == undefined) || _self.form.newPasswordConfirm == '') {
      return true;
    }

    return _self.isEmpty('newPasswordConfirm') ? false : _self.form.newPassword == _self.form.newPasswordConfirm;
  };

  this.checkPattern = function(field) {
    //console.log(field);
    switch (field) {
      case "pass":
        return !_self.isEmpty("newPassword") ? _self.passRegEx.test(_self.form.newPassword) : false;
      case "maj":
        return !_self.isEmpty("newPassword") ? _self.atLeastMajRegEx.test(_self.form.newPassword) : false;
      case "min":
        return !_self.isEmpty("newPassword") ? _self.atLeastMinRegEx.test(_self.form.newPassword) : false;
      case "num":
        return !_self.isEmpty("newPassword") ? _self.atLeastNumRegEx.test(_self.form.newPassword) : false;
      case "specialCar":
        return !_self.isEmpty("newPassword") ? _self.atLeastSpecialCarRegEx.test(_self.form.newPassword) : false;
      case "length":
        return !_self.isEmpty("newPassword") ? _self.atLeastNineCarRegEx.test(_self.form.newPassword) : false;
    }
  };

  this.checkNewPasswordPattern = function() {
    if (_self.form.newPassword == null || _self.form.newPassword == undefined || _self.form.newPassword == '') {
      return true;
    }

    return _self.passRegEx.test(_self.form.newPassword);
  }

  this.onFocus = function() {

    _self.wrongCurrentPasswordFlag = false;
  }

  _self.submit = function() {
    _self.saveSuccess = false;
    _self.operationFailure = false;

    var validatePasswordInput = {
      Password: _self.form.oldPassword
    };
    _self.wrongCurrentPasswordFlag = false;
    modifMotDePasseService.validateUserPassword(validatePasswordInput).then(function(response) {
      var validatePasswordResponse = response.data;
      var wrongCurrentPasswordFlag = !validatePasswordResponse.ValidPassword;
      _self.remainingAttemptCount = validatePasswordResponse.RemainingAttemptCount;
      var userEmail = validatePasswordResponse.UserEmail;
      var orgaCommerciale = validatePasswordResponse.OrgaCommerciale;

      if (wrongCurrentPasswordFlag && _self.remainingAttemptCount < 0) {
        _self.accountLocked = true;
        window.location = '/login/#/?mail=' + userEmail + '&orgaCommerciale=' + orgaCommerciale + '&displayError=1';
        return;
      }

      if (wrongCurrentPasswordFlag) {
        _self.wrongCurrentPasswordFlag = wrongCurrentPasswordFlag;
        return;
      }

      modifMotDePasseService.postForm(_self.form).then(function(response) {
        _self.saveSuccess = true;
        _self.operationFailure = false;

        _self.form.oldPassword = undefined;
        _self.form.newPassword = undefined;
        _self.form.newPasswordConfirm = undefined;
        _self.modifMotDePasseForm.$setUntouched();
        _self.modifMotDePasseForm.$setPristine();
      }, function(response) {
        _self.saveSuccess = false;
        _self.operationFailure = true;
        _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
      });
    }, function(response) {
      _self.saveSuccess = false;
      _self.operationFailure = true;
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
    });
  };
}
