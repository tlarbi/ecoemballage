var messageFr = require('../data/messages/labels-fr');
var messageEn = require('../data/messages/labels-en');

var paysFr = require('../data/messages/pays-fr');
var paysEn = require('../data/messages/pays-en');

module.exports = function($cookies) {

    //this.add = function(key, value) {}


    var _self = this;
    this.userObjectName = 'userInfo';
    this.listClientsObjectName = 'listClients';
    this.errorMessage = 'undefined';
    this.emptyMessage = '';
	this.facticeIdCorrespondent = 'factice';
    this.orgaCommercialeName = 'orgaCommerciale';

    this.cookieClientSFname = 'idClientSF';
    this.cookieClientSAPname = 'idClientSAP';
    this.cookieOpenAM = 'iPlanetDirectoryPro';

    var cookieLanguageName = 'language';
    var cookieConseillerUidName = 'conseillerUid';
    var cookieConseillerName = 'CookieConseiller';

    //this.functions = messageFr.labels.relationClient.functions;

    this.userDeletionReasons = messageFr.labels.relationClient.accountDeletionReason;

    const languageCookieName = 'language';

    //************** A RETIRER ************
    this.urlChooseClient = '/choix-entreprise';
    this.urlHome = '/mon-espace/accueil';
    //*************************************
    this.urlConseillerHome = '/accueil-conseiller';

    this.getFunctions = function () {

        var language = $cookies.get(cookieLanguageName);
        console.log('language cookie : ', language);
        if (angular.isDefined(language) && language.trim() == 'en')
            return messageEn.labels.relationClient.functions;
        else
            return messageFr.labels.relationClient.functions;
    }

    this.getLanguage = function () {
        var language = $cookies.get(cookieLanguageName);
        return language ? language : 'fr';
    }

    this.getCountries = function() {

        var language = $cookies.get(languageCookieName);
        console.log('language cookie : ', language);
        if (angular.isDefined(language) && language.trim() == 'en')
            return paysEn;
        else
            return paysFr;
    }

    this.userInfo = {
        lastName : undefined,
        firstName : undefined,
        initials: undefined,
        civility : undefined,
        idClientSF : undefined,
        idClientSAP : undefined,
        clientName : undefined,
        idCorrespondentSF : undefined
    }

    this.listClients = undefined;

    // AJOUTER UNE NOUVELLE
    this.add = function(key, value) {

        sessionStorage.setItem(key, JSON.stringify(value));
    }

    // AJOUTER OBJET USER DANS LA SESSION
    this.addUser = function(value) {

        sessionStorage.setItem(_self.userObjectName, JSON.stringify(value));
    }


    // RECUPERER OBJET USER DANS LA SESSION
    this.getUser = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null ? user : _self.errorMessage;
    }


    // RECUPERER NUMERO CLIENT SAP
    this.getUserIdSAP = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.idClientSAP) ? user.idClientSAP : _self.errorMessage;
    }

    // RECUPERER NUMERO CLIENT SALES FORCE
    this.getUserIdSF = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.idClientSF) ? user.idClientSF : _self.emptyMessage;
    }

    // RECUPERER NUMERO CORRESPONDANT
    this.getUserIdCorrespondent = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.idCorrespondentSF) && user.idCorrespondentSF != null ? user.idCorrespondentSF : _self.facticeIdCorrespondent;
    }

    // RECUPERER NOM CORRESPONDANT
    this.getLastName = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.lastName) ? user.lastName : _self.errorMessage;
    }

    // RECUPERER PRENOM CORRESPONDANT
    this.getFirstName = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.firstName) ? user.firstName : _self.errorMessage;
    }

    // RECUPERER CIVILITE CORRESPONDANT
    this.getCivility = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.civility) ? user.civility : _self.errorMessage;
    }

    // RECUPERER LE NOM DU CLIENT (ENTREPRISE)
    this.getClientName = function() {

        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
        return user != null && angular.isDefined(user.clientName) ? user.clientName : _self.errorMessage;
    }

    this.getValue = function(key) {

        return JSON.parse(sessionStorage.getItem(key));
    }

    this.getUserIdClientSF = function(){
        return _self.getUserIdSF();
    }

    this.getUserIdClientSAP = function(){
        return _self.getUserIdSAP();
    }

    this.getUserIdCorrespondentSF = function(){
        return _self.getUserIdCorrespondent();
    }

    // SUPPRESSION DES DONNEES UTILISATEUR
    this.clearUserInfo = function(){
        sessionStorage.clear();
        var cookiesList = $cookies.getAll();
        for (var key in cookiesList) {
            console.log("The key is : ", key);
            console.log("The value is : ", cookiesList[key]);

            if (key != languageCookieName) {

                console.log("remove cookie : ", key);
                $cookies.remove(key, { path: '/' });
            }
        }
        $cookies.remove(_self.cookieClientSFname, {path: '/'});
        $cookies.remove(_self.cookieClientSAPname, {path: '/'});

        //A MODIFIER
        $cookies.remove(_self.cookieOpenAM, {
            domain: '.' + window.location.hostname,
            path: '/'
        });
    }

    this.addClientSFcookie = function(cookieValue){
        $cookies.put(_self.cookieClientSFname, cookieValue);
    }

    this.addClientSAPcookie = function(cookieValue){
        $cookies.put(_self.cookieClientSAPname, cookieValue);
    }

    this.addOrgaCommercialeToSession = function(orgaCommerciale){

        sessionStorage.setItem(_self.orgaCommercialeName, orgaCommerciale);
    }

    this.getOrgaCommerciale = function(){

        return sessionStorage.getItem(_self.orgaCommercialeName);
    }

    this.getFilesContext = function() {
        var contextRegEx = /(adelphe)|(ad)/;
        var hostname = window.location.hostname;
        if(contextRegEx.test(hostname))
            return 'adelphe';
        else
            return 'default';
    }


    // ENREGISTREMENT DES DONNEES UTILISATEURS DANS LA SESSION ET CREATION DES COOKIES
    this.setSessionStorageAndCookies = function(data) {

        //ENREGISTREMENT DU NOM PRENOM ET CIVILITE
        if(angular.isDefined(data.lastName) && data.lastName != null)
            _self.userInfo.lastName = data.lastName[0];
        if(angular.isDefined(data.firstName) && data.firstName != null)
            _self.userInfo.firstName = data.firstName[0];

        if(angular.isDefined(data.title) && data.title != null)
            _self.userInfo.civility = data.title[0];

        // ENREGISTREMENT DES INITIALS
        if(angular.isDefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName))
            _self.userInfo.initials = _self.userInfo.firstName.substring(0,1).toUpperCase() + _self.userInfo.lastName.substring(0,1).toUpperCase();
        else if(angular.isDefined(_self.userInfo.firstName) && angular.isUndefined(_self.userInfo.lastName))
            _self.userInfo.initials = _self.userInfo.firstName.substring(0,1).toUpperCase();
        else if(angular.isUndefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName))
            _self.userInfo.initials = _self.userInfo.lastName.substring(0,1).toUpperCase();


        if(data.listCompany != null && data.listCompany[0] != null)
            _self.listClients = data.listCompany;

        _self.addOrgaCommercialeToSession(data.orgaCommerciale);

        _self.addUser(_self.userInfo);
        _self.add(_self.listClientsObjectName, _self.listClients);

        if (data.Conseiller) {
          return _self.urlConseillerHome;
        }

        if(angular.isDefined(_self.listClients) && _self.listClients.length == 1) {

            _self.addClientInfosToSession(_self.listClients[0]);
            return _self.urlHome;
        } else {

            return _self.urlChooseClient;
        }

    }

    // resoration des informations de session après une ouverture d'un nouvel onglet
    this.restoreSession = function(data) {

        // recuperer l'ID sales force du cookie
        var clientIdSf = $cookies.get(_self.cookieClientSFname);
        console.log('test cookie id Client SF : ', clientIdSf);

        //ENREGISTREMENT DU NOM PRENOM ET CIVILITE
        if(angular.isDefined(data.lastName) && data.lastName != null)
            _self.userInfo.lastName = data.lastName[0];
        if(angular.isDefined(data.firstName) && data.firstName != null)
            _self.userInfo.firstName = data.firstName[0];

        if(angular.isDefined(data.title) && data.title != null)
            _self.userInfo.civility = data.title[0];

        // ENREGISTREMENT DES INITIALS
        if(angular.isDefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName))
            _self.userInfo.initials = _self.userInfo.firstName.substring(0,1).toUpperCase() + _self.userInfo.lastName.substring(0,1).toUpperCase();
        else if(angular.isDefined(_self.userInfo.firstName) && angular.isUndefined(_self.userInfo.lastName))
            _self.userInfo.initials = _self.userInfo.firstName.substring(0,1).toUpperCase();
        else if(angular.isUndefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName))
            _self.userInfo.initials = _self.userInfo.lastName.substring(0,1).toUpperCase();

        if(data.listCompany[0] != null)
            _self.listClients = data.listCompany;

        _self.addOrgaCommercialeToSession(data.orgaCommerciale);

        _self.addUser(_self.userInfo);
        _self.add(_self.listClientsObjectName, _self.listClients);

        if(angular.isDefined(clientIdSf)) {

            console.log(_self.listClients);
            var cInfo = _self.listClients.filter(
                function(data){ return data.idSF == clientIdSf }
            );

            console.log('object user : ', cInfo[0]);

            _self.addClientInfosToSession(cInfo[0], false);
        }



    }

    // AJOUT DES INFORMATIONS RELATIVES AU CLIENT DANS LA SESSION
    this.addClientInfosToSession = function(clientInfo, createCookie) {


        createCookie = angular.isDefined(createCookie) ? createCookie : 'true';

        console.log('ACTS - clientInfo : ', clientInfo);
        console.log('ACTS - createCookie : ', createCookie);

        _self.userInfo = _self.getUser();

        _self.userInfo.idClientSAP = clientInfo.idSAP;
        _self.userInfo.idClientSF = clientInfo.idSF;
        _self.userInfo.clientName = clientInfo.libelle;
        _self.userInfo.idCorrespondentSF = clientInfo.idCorespondant;

        if(createCookie) {
            $cookies.put(_self.cookieClientSFname, _self.userInfo.idClientSF, {path: '/'});
            $cookies.put(_self.cookieClientSAPname, _self.userInfo.idClientSAP, {path: '/'});
        }

        _self.addUser(_self.userInfo);
    }

    // VERIFICATION SI UN NUMERO CLIENT EXIST BIEN EN SESSION
    this.isClientNumberExistInSession = function(clientNumber) {

        _self.listClients = _self.getListClients();

        var clientNumberRegEx = new RegExp('^' + clientNumber + '$', 'i');

        if(!Array.isArray(_self.listClients))
            return false;

        for(var i=0; i<_self.listClients.length; i++)
            if(_self.listClients[i].idSAP.match(clientNumberRegEx) != null)
                return true;

        return false;
    }

    // AJOUTER UN CLIENT A LA SESSION
    this.addClientToSession = function(clientInfo) {

        _self.listClients = _self.getListClients();
        _self.listClients.push(clientInfo);
        //_self.listClients.sort(function(a, b){});
        _self.add(_self.listClientsObjectName, _self.listClients);

    }

    // RECUPERER LA LISTE DES ENTREPRISES RATTACCHCEES A UN UTILISATEURS
    this.getListClients = function() {

        var listClients = JSON.parse(sessionStorage.getItem(_self.listClientsObjectName));
        return listClients != null ? listClients : _self.errorMessage;
    }

    // Supprime un client de la liste
    this.removeClient = function (idSf) {
      var indexToRemove = -1;
      _self.listClients = _self.getListClients();
      for (var index = 0; index < _self.listClients.length; index++) {
        if (_self.listClients[index].idSF == idSf) {
          indexToRemove = index;
          break;
        }
      }

      if (indexToRemove >= 0) {
        _self.listClients.splice(indexToRemove, 1);
      }
      _self.add(_self.listClientsObjectName, _self.listClients);
    }

    // Supprime les information liées à l'nentreprise de la session
    this.resetCompany = function () {
      _self.userInfo = _self.getUser();

      _self.userInfo.idClientSAP = undefined;
      _self.userInfo.idClientSF = undefined;
      _self.userInfo.clientName = undefined;
      _self.userInfo.idCorrespondentSF = undefined;

      $cookies.remove(_self.cookieClientSFname);
      $cookies.remove(_self.cookieClientSAPname);

      _self.addUser(_self.userInfo);
    }

    // fonction qui permet de rechercher dans un tableau à la manière de .find() de javascript (non disponnible sur IE)
    this.searchInArray = function(array, searchFunction, dataObject) {

        if(!angular.isArray(array) || array.length == 0 || !angular.isFunction(searchFunction)) {
            console.log('searchInArray function : inccorect arguments');
            return;
        }


        for(var i = 0; i < array.length; i++) {
            if(searchFunction.call(dataObject, array[i]))
                return array[i];
        }
    }

    this.findInArray = function(array, searchFunction, dataObject) {

        if(!angular.isArray(array) || array.length == 0 || !angular.isFunction(searchFunction)) {
            console.log('findInArray function : inccorect arguments');
            return;
        }


        for(var i = 0; i < array.length; i++) {
            if(searchFunction.call(dataObject, array[i]))
                return true;
        }

        return false;
    }

    this.createCookieConseiller = function(uid) {

        console.log('create cookie Conseiller uid ....');
        $cookies.put(cookieConseillerUidName, uid, {path: '/'});
        console.log('cookie conseiller uid created');
    }

    this.isConseiller = function() {

        var cookieConseillerUid = $cookies.get(cookieConseillerUidName);

        console.log('le cookie conseiller : ', cookieConseillerUid);

        if(cookieConseillerUid)
            return true;
        else
            return false;
    }

    this.getCookieConseiller = function() {
        return $cookies.get(cookieConseillerUidName);
    }

    return this;
}
