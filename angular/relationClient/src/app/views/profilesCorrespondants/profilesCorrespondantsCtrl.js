module.exports = function(profilesCorrespondantsService, errorMessagesService) {
  var _self = this;

  this.loadingFlag = false;

  _self.saveSuccess = false;
  _self.operationFailure = false;
  _self.errorMessage = '';

  _self.form = {
    correspondants: {}
  };
  _self.hasChanged = false;

  _self.$onInit = function() {
    _self.loadingFlag = true;
    profilesCorrespondantsService.getCorrespondants().then(function(response) {
      _self.form.correspondants = response.data;
    }, function(response) {
      _self.saveSuccess = false;
      _self.operationFailure = true;
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
    }).finally(function(response) {
      _self.loadingFlag = false;
    });
  }

  _self.accesDisabled = function(access) {
    if (access.Access == 'SERVICES') {
      return true;
    }

    return false;
  };

  _self.accessChanged = function(correspondant, access) {
    _self.hasChanged = true;
    _self.saveSuccess = false;
    correspondant.Modified = true;

    if (access.Access == 'DECLARATION') {
      for (var index = 0; index < correspondant.Access.length; index++) {
        if (correspondant.Access[index].Access == 'FACTURATION') {
          correspondant.Access[index].HasAccess = access.HasAccess;
          break;
        }
      }
    } else if (access.Access == 'FACTURATION' && !access.HasAccess) {
      for (var index = 0; index < correspondant.Access.length; index++) {
        if (correspondant.Access[index].Access == 'DECLARATION') {
          correspondant.Access[index].HasAccess = false;
          break;
        }
      }
    };
  };

  _self.displayOtherFunction = function(correspondant) {
    if (correspondant.OtherFunction == null || correspondant.OtherFunction == undefined || correspondant.OtherFunction == '') {
      return '';
    }

    return ' - ' + correspondant.OtherFunction;
  };

  _self.submit = function() {
    _self.saveSuccess = false;
    _self.operationFailure = false;

    _self.loadingFlag = true;
    var correspondants = [];
    for (var index = 0; index < _self.form.correspondants.length; index++) {
      if (_self.form.correspondants[index].Modified) {
        correspondants.push(_self.form.correspondants[index]);
      }
    }

    profilesCorrespondantsService.putForm(correspondants).then(function(response) {
      _self.saveSuccess = true;
      _self.operationFailure = false;
      _self.hasChanged = false;
    }, function(response) {
      _self.saveSuccess = false;
      _self.operationFailure = true;
      _self.errorMessage = errorMessagesService.getErrorMessage(response.status);
    }).finally(function(response) {
      _self.loadingFlag = false;
    });
  };
}
