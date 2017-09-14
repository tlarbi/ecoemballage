function lancementrpcService(declarationResource, userService) {
    var self = this;

    // #region EC
    self.GetExpertsByName = function (name, max) {
        return declarationResource.GetExpertByName(name, max);
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

    self.PostCacCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
        return declarationResource.CacCreateProject(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
    }
    
    self.CacDeleteProjects = function (id) {
        return declarationResource.CacDeleteProject(id);
    }
    // #endregion
    
    self.getUserInfo = function () {
        self.user = userService.getUser();
        return self.user;
    }

    self.getSAPCustomed = function () {
        
        var SapCustomed = '521846';//self.getUserInfo().idClientSAP;
        self.test='eco';
        if (self.test.valueOf() == 'eco'.valueOf()){//(self.getUserInfo().getOrgaCommerciale().valueOf() == 'eco'.valueOf()) {
            if (SapCustomed.toString().length < 10) {
                var l = 10 - SapCustomed.length;
                //complete with 0 in front 
                for (var i = 0; i < l; i++) {
                    SapCustomed = '0' + SapCustomed;
                }
            }
        }
        return SapCustomed;
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

    self.getSiren = function (idSAP) {
        return declarationResource.getSiren(idSAP);
    }

    self.SaveNewMissions = function (idMission, clientNumber, annee, contribTotal, signataire, nom, email, typeexpert, statut) {
        return declarationResource.SaveNewMission(idMission, clientNumber, annee, contribTotal, signataire, nom, email, typeexpert, statut);
    }

    self.UpdateCancelMissions = function (idMission) {
        return declarationResource.UpdateCancelMission(idMission);
    }
           
    return self;
}
module.exports = lancementrpcService;
