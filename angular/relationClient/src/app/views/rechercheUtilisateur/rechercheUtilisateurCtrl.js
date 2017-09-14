module.exports = function (rechercheUtilisateurService, commonServices, userService) {
  var _self = this;
  var regexList = commonServices.getRegExList();

  _self.emailRegExp = regexList.emailRegEx;

  this.$onInit = function() {

      var button = document.getElementById('bouton-deposer-declaration');
      var form = document.getElementById('recherche-utilisateur-form');

      if(button) {
          form.appendChild(button);
          button.classList.remove('page-header');
      }

  }

  _self.form = {
    email: undefined
  }
  _self.operationFailure = false;
  _self.userNotFound = false;

  _self.mailFocus = function () {
    _self.userNotFound = false;
  }

  _self.submit = function () {
    var userUid = undefined;
    var redirectUrl = undefined;

    rechercheUtilisateurService.getUserUid(_self.form.email).then(function (response) {
      userUid = response.data;

      // creation d'un cookie avec l'UID du client choisi
      userService.createCookieConseiller(userUid);

      rechercheUtilisateurService.getUserInfo(userUid).then(function (response) {
          redirectUrl = rechercheUtilisateurService.setClientList(response.data.listCompany);
          commonServices.navigateWithRecheckRoles(redirectUrl);
        //window.location = redirectUrl;
      }, function (response) {
        _self.operationFailure = true;
      });
    }, function (response) {
      if (response.status == 404) {
        _self.userNotFound = true;
      } else {
        _self.operationFailure = true;
      }
    });
  }

  this.navigate = function() {
      window.location = '/accueil-conseiller/depot-declaration';
  }
}
