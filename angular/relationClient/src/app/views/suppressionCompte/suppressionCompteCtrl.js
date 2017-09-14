module.exports = function (suppressionCompteService, userService, $uibModal, $scope, compteWebResource, errorMessagesService) {
  var _self = this;
  console.log('Something');

  _self.modal = null;
  _self.motif = null;
  _self.password = null;
  _self.passwordChecked = false;
  _self.passwordValid = false;
  _self.remainingAttemptCount = 0;
  _self.operationFailure = false;
  _self.emptyReason = false;
  _self.canDeleteUserAccount = true;
  _self.accountLocked = false;
  _self.errorMessage = '';

  _self.reasons = userService.userDeletionReasons;

  _self.openSuppressionCompte = function () {
    suppressionCompteService.canDeleteUserAccount().then(function (response) {
      _self.canDeleteUserAccount = response.data;

      _self.modal = $uibModal.open({
        template: require('./suppressionComptePopIn.html'),
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });
    }, function (response) {
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
      _self.operationFailure = true;
    });
  };

  _self.annulerModal = function () {
    resetPopIn();
    _self.modal.close();
  };

  _self.passwordFocus = function () {
    _self.passwordChecked = false;

    if (_self.motif == null || _self.motif == undefined || _self.motif == '') {
      _self.emptyReason = true;
    }
  };

  _self.supprimerCompte = function () {
    if (_self.motif == null || _self.motif == undefined || _self.motif == '') {
      _self.emptyReason = true;
    }

    _self.operationFailure = false;
    var validatePasswordInput = {
      Password: _self.password
    };
    _self.passwordChecked = false;
    suppressionCompteService.validateUserPassword(validatePasswordInput).then(function (response) {
      var validatePasswordResponse = response.data;
      var validPassword = validatePasswordResponse.ValidPassword;
      var userEmail = validatePasswordResponse.UserEmail;
      var orgaCommerciale = validatePasswordResponse.OrgaCommerciale;
      _self.remainingAttemptCount = validatePasswordResponse.RemainingAttemptCount;
      if (!validPassword) {
        if (_self.remainingAttemptCount < 0) {
          _self.accountLocked = true;
          _self.ValidPassword = false;
          window.location = '/login/#/?mail=' + userEmail + '&orgaCommerciale=' + orgaCommerciale + '&displayError=1';
        } else {
          _self.passwordChecked = true;
          _self.accountLocked = false;
          _self.ValidPassword = true;
        }
        return;
      }

      var deleteUserAccountInput = {
        Reason: _self.motif
      };
      suppressionCompteService.deleteUserAccount(deleteUserAccountInput).then(function (response) {
        var redirectUrl = response.data.RedirectionUrl;
        //window.location = redirectUrl;

          //morceau de code injecté
          compteWebResource.logout().finally(function(){

            userService.clearUserInfo();
            compteWebResource.logoutDrupal().finally(function(){

                window.location = redirectUrl;
            });

        });
          //morceau de code injecté

      }, function (response) {
        _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
        _self.operationFailure = true;
      });
    }, function (response) {
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
      _self.operationFailure = true;
    });
  };

  _self.motifFoucs = function () {
    _self.emptyReason = false;
  }

  function resetPopIn () {
    _self.motif = undefined;
    _self.password = undefined;
    _self.operationFailure = false;
    _self.passwordChecked = false;
    _self.emptyReason = false;
    _self.canDeleteUserAccount = true;
    _self.suppressionCompteForm.$setUntouched();
    _self.suppressionCompteForm.$setPristine();
  };
}
