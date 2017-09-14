module.exports = function(authentificationService, $uibModal, $scope, $location, commonServices, $timeout, userService) {

  var _self = this;

  _self.displayError = false;

  this.$onInit = function() {

    //DECONNEXION DE DRUPAL
    console.log('authentification initialize');
    //authentificationService.drupalDisconnect();

    //VERIFICATION D'URL
    checkUrlPath();
    this.displayFlag = true;

    //DECONNEXION DE OPEN AM
    // ******************************** A REMETTRE ******************
    authentificationService.disconnect();
    // **************************************************************

    // Expressions régulière pour les différents controls
    _self.emailRegEx = commonServices.getRegExList('email');
    //console.log('functions : ', regExList);

    //Afficher popin 
    if (orgaCommerciale == _self.orgaCommercialeEco) { 
            newcoCheckCookie();
    }

    var queryString = $location.search();
    var mail = queryString.mail;
    var orgaCommerciale = queryString.orgaCommerciale;
    var displayError = queryString.displayError;
    if (mail != null && mail != undefined && mail != '') {
      _self.form.username = mail;
      if (orgaCommerciale == _self.orgaCommercialeEco) {
          _self.orgaContext = _self.ecoLabel;
   
      } else {
        _self.orgaContext = _self.adLabel;
      }

      if (displayError != null && displayError != undefined && displayError == '1') {
        _self.displayError = true;
        _self.accountBlockedFlag = true;
      }
    }
  }

  //this.errors = ["teststset"];
  this.form = {
    username: undefined,
    password: undefined
  }



  this.emailNotExistFlag = false;
  this.emailInvalidFlag = false;
  this.emailEmptyFlag = false;
  this.processFlag = false;
  this.focusFlag = false;
  this.passInvalidFlag = false;
  this.emailExistFlag = false;
  this.technicalErrorFlag = false;
  this.accountBlockedFlag = false;
  this.loadingFlag = false;
  this.navigateFlag = false;
  this.nextPageFlag = false;

  this.orgaContext = undefined;
  this.orgaCommercialeEco = 'eco';
  this.ecoLabel = 'Citeo';
  this.adLabel = 'Adelphe';

  this.forgottenPassUrl = '/oubli-mot-de-passe';
  this.signUpUrl = '/creation-compte';
  this.urlHome = '/login?language=$language$#?mail=#email#';

  var loginUrlPathRegEx = /^\/login/;
  var loginUrlPath = '/login';
  var loginUrlLanguage = '?language=$language$';

  this.delay = 100;

  this.resetFlags = function(field) {
    switch (field) {
      case "pass":
        _self.passInvalidFlag = false;
        break;
      default:
        _self.emailNotExistFlag = false;
        _self.emailInvalidFlag = false;
        _self.emailEmptyFlag = false;
        _self.emailExistFlag = false;
        _self.technicalErrorFlag = false;
        _self.accountBlockedFlag = false;
    }

  }

  this.isEmailValid = function() {
    return _self.emailRegEx.test(_self.form);
  }

  // ENVOIE DU FORMULAIRE
  this.submit = function() {

    _self.loadingFlag = true;

    console.log("Authentification Ctrl : entering submit function");
    console.log(_self.form)
    authentificationService.postForm(_self.form).then(function(response) {

      console.log("controller authentification : ", response);

      if (authentificationService.technicalErrorFlag) {

        console.log('technical error : ');

        _self.technicalErrorFlag = true;
        _self.form.username = undefined;
        _self.form.password = undefined;
      } else if (authentificationService.unauthorizedUserFlag) {

        console.log('unauthorized user : ');
        _self.form.password = undefined;

        _self.attemptCount = authentificationService.attemptCount;

        if (_self.attemptCount == -1) {
          if (authentificationService.orgaCommerciale == _self.orgaCommercialeEco)
            _self.orgaContext = _self.ecoLabel;
          else
            _self.orgaContext = _self.adLabel;

          _self.accountBlockedFlag = true;
          console.log('orga commerciale : ', _self.orgaContext);
        } else {

          _self.passInvalidFlag = true;
          _self.openModalUnauthorizedUser();
        }

      }
      if (!authentificationService.redirectFlag)
        _self.loadingFlag = false;
    });
  }

  this.focus = function() {
    _self.focusFlag = true;
    _self.resetFlags();
  }

  this.blur = function(){

        if (_self.isEmailEmpty())
          _self.emailEmptyFlag = true;
        else if (!_self.emailRegEx.test(_self.form.username))
          _self.emailInvalidFlag = true;
        else
          _self.verifyEmail();
        _self.focusFlag = false
        console.log("reset focus new : ", _self.form.username);
  }

  this.blurTimeOut = function(delay){

      $timeout(_self.blur, delay);
  }


  // VERIFICATION DE MAIL
  this.verifyEmail = function() {
      console.log('email checking');
    _self.processFlag = true;
    authentificationService.checkEmail(_self.form.username).then(function(response) {

      //Email Found
      console.log("email found : ", response);
      _self.emailExistFlag = true;
    }, function(response) {

      //Email not found
      console.log("email not found");

      if (response.status == 404)
        _self.emailNotExistFlag = true;
      else {
        _self.technicalErrorFlag = true;
        _self.form.username = undefined;
        _self.form.password = undefined;
      }


    }).finally(function() {
      _self.processFlag = false;
      console.log("reset process");
    });
  };

  this.isEmailEmpty = function() {
      console.log('is email empty');
    return (_self.form.username == "" || angular.isUndefined(_self.form.username));
  }

  this.checkErrors = function(field) {
    //console.log("check errors method");
    switch (field) {
      case "username":
        //console.log("check error username");
        return (_self.emailEmptyFlag || _self.emailInvalidFlag || _self.emailNotExistFlag || _self.accountBlockedFlag);
      default:
        //console.log("check error default");
        return (_self.emailEmptyFlag || _self.emailInvalidFlag || _self.emailNotExistFlag || _self.processFlag || _self.focusFlag || _self.technicalErrorFlag || _self.accountBlockedFlag);
    }

  }

  this.openModalUnauthorizedUser = function() {

    console.log('attempt count : ', _self.attemptCount);

    _self.modal = $uibModal.open({
      template: require('./authentificationEchec.html'),
      scope: $scope,
      backdrop: 'static',
      keyboard: false
    });
  }

  this.closeModal = function() {

    _self.modal.close();
  }

  this.resetPassword = function() {

    _self.loadingFlag = true;
    authentificationService.resetPassword(_self.form.username).then(function(response){

            console.log('reset password request success : ', response);
            _self.nextPageFlag = true;

        }, function(response){

            console.log('reset password raquest failure : ', response);
            _self.accountBlockedFlag = false;
            _self.technicalErrorFlag = true;
        }).finally(function(){

            _self.loadingFlag = false;
    });
  }

  this.navigate = function(route){

      _self.navigateFlag = true;
      switch(route){
          case 'pass':
              //window.location = _self.forgottenPassUrl;
              commonServices.recheckLanguage(_self.forgottenPassUrl);
              break;
          case 'signup':
              //window.location = _self.signUpUrl;
              commonServices.recheckLanguage(_self.signUpUrl);
      }
  }

  this.next = function(){

        window.location = _self.urlHome.replace('#email#', _self.form.username).replace('$language$', userService.getLanguage());
        window.location.reload();
    }

    var checkUrlPath = function() {
        var path = window.location.pathname;
        if(!loginUrlPathRegEx.test(path))
            window.location.replace(loginUrlPath + loginUrlLanguage.replace('$language$', userService.getLanguage()));
        else if(!window.location.search)
            window.location.search = loginUrlLanguage.replace('$language$', userService.getLanguage());
    }

};
