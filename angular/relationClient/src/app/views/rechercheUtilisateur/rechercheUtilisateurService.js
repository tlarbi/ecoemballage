function rechercheUtilisateurService (compteWebResource, userService) {
  var _self = this;

  _self.getUserUid = function (email) {
    return compteWebResource.conseillerGetUserUid(email);
  };

  _self.getUserInfo = function (uid) {
    return compteWebResource.conseillerGetUserInfo(uid);
  };

  _self.setClientList = function (clientList) {
    userService.add(userService.listClientsObjectName, clientList);

    if (angular.isDefined(clientList) && clientList.length == 1) {
      userService.addClientInfosToSession(clientList[0]);
      return userService.urlHome;
    } else {
      return userService.urlChooseClient;
    }
  };

  return _self;
}

module.exports = rechercheUtilisateurService;
