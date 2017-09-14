function rpcService(declarationResource, userService, unauthorizedPopInService) {
    var self = this;

    this.getRpcs = declarationResource.getRpcs;
    this.RpcFileExist = declarationResource.RpcFileExist;
    this.getRpcFile = declarationResource.getRpcFile;

    this.user = {
        numero_client: undefined,
        id_declarant: undefined,

    }

    this.getUserInfos = function () {
        self.user.numero_client = userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        self.user.id_SF = userService.getUserIdSF();
        self.user.idClientSAP = userService.getUserIdSAP();
        return self.user;
    }

    // #region EC
    self.GetExpertsByName = function (name, max) {
        return declarationResource.GetExpertByName(name, max);
    }

    self.unAuthPopinOpen = function () {
        unauthorizedPopInService.open();
    }

    self.PostExpertsCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
        return declarationResource.ExpertsCreateProject(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
    }

    self.ExpertsDeleteProjects = function (id) {
        console.log("deleting projects id " + id);
        return declarationResource.ExpertsDeleteProject(id);
    }

    self.ExpertsGetProjects = function (id) {
        return declarationResource.ExpertsGetProject(id);
    }
    // #endregion

    // #region CAC
    self.GetCacByNames = function (name, max) {
        return declarationResource.GetCacByName(name, max);
    }

    self.PostCacCreateProject = function (mydata) {
        return declarationResource.CacCreateProject(mydata);
    }

    self.CacDeleteProjects = function (id) {
        return declarationResource.CacDeleteProject(id);
    }

    self.activateCode = function (data) {
      return declarationResource.activateCacCode(data);
    }
    // #endregion

    // #region OTHERS

    self.getAnneesContractualisations = function (ClientID) {
        return declarationResource.getAnneesContractualisation(ClientID);
    }

    self.getUserInfo = function () {
        self.user = userService.getUser();
        return self.user;
    }

    self.IsConseiller = function () {
        return userService.isConseiller();
    }

    //just have to relaunch a protected web service to receive all the headers 
    //self.GetHeaders = function () {
    //    return declarationResource.getPays();
    //}

    self.getSAPCustomed = function () {

        var SapCustomed = /*'521846';*/self.getUserInfo().idClientSAP;
        console.log("sapcustomed: " + self.getUserInfo().idClientSAP);

        //self.test = 'eco';
        //if (self.test.valueOf() == 'eco'.valueOf()) {//(self.getUserInfo().getOrgaCommerciale().valueOf() == 'eco'.valueOf()) {
        if (SapCustomed.toString().charAt(0) == 'A' || SapCustomed.toString().charAt(0) == 'a') {
            console.log("sapcustomed: ADELPHE:  " + self.getUserInfo().idClientSAP);
            return SapCustomed;
        }
        else if (SapCustomed.toString().length < 10) {
                var l = 10 - SapCustomed.length;
                //complete with 0 in front
                for (var i = 0; i < l; i++) {
                    SapCustomed = '0' + SapCustomed;
                }
                console.log("sapcustomed: CITEO:  " + self.getUserInfo().idClientSAP);
                return SapCustomed;
            }
        //}
        
    }

    self.generateId = function () {
        var today = new Date();
        var d = today.getDate();
        var mmotemp = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        var mmo = mmotemp[today.getMonth()];
        var yyyy = today.getFullYear();
        var h = today.getHours() > 12 ? today.getHours() - 12 : (today.getHours() < 10 ? "0" + today.getHours() : today.getHours());
        var m = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        var s = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

        if (d < 10) {
            d = '0' + d
        }
        today = yyyy + mmo + d + h + m + s;
        return today;
    }

    /*** FONCTION OBSOLETE ?? on appel que getSirets ***/
    self.getSiren = function (idSAP) {
        return declarationResource.getSiren(idSAP);
    }

    self.SaveNewMissions = function (idMission, clientNumber, annee, contribTotal, signataire, nom, civilite, email, typeexpert, statut) {
        return declarationResource.SaveNewMission(idMission, clientNumber, annee, contribTotal, signataire, nom, civilite, email, typeexpert, statut);
    }

    self.UpdateCancelMissions = function (idMission) {
        return declarationResource.UpdateCancelMission(idMission);
    }

    self.getAmounts = function (idSAp,year) {
        return declarationResource.getAmount(idSAp,year);
    }

    self.getSirets = function (idSAp) {
        return declarationResource.getSiret(idSAp);
    }

    // #endregion

    return self;
}

module.exports = rpcService;
