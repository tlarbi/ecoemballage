module.exports = function (rpcService, $uibModal, $scope, $location, $window) {
   
    // #region ATTRIBUTES
    
    const activationCodeOk = 'Ok';
    const activationCodeInvalid = 'InvalidCode';
    const activationCodeExpired = 'ExpiredCode';
    const activationCodeLocked = 'Locked';
    const activationCodeKo = 'Ko';

    var self = this;
    self.client_number_SAP;
    self.rpcs;
    self.stepPopin;
   // self.codeActivation = '';

    //the order is popin3 then popin2 then popin1
    self.modal_instance;

    var inputMin = 2;
    var defaultMax = 20;
    self.diplayMoreState = false;
    self.maxToDisplayMultiplicator = 1;
    self.validerState = false;
    self.eltModel = '';
    self.someVal = '';
    self.result = '';
    self.expertsList = [];
    self.expertsListTemp = [];
    self.eltChosen = {
        adresse: undefined,
        civilite: undefined,
        code_postal: undefined,
        email: undefined,
        nom: undefined,
        prenom: undefined,
        qualite: undefined,
        uniquecsoecid: undefined,
        ville: undefined,
    }
    self.details = {
        id: undefined,
        idClient: undefined,
        annee: undefined,
        montant: undefined,
        raisonSociale: undefined,
        siren: undefined,
        idSignataire: undefined, //at my level
        iddeletion: undefined,
        mandataireKindToDelete: undefined,
    }
    //var idClient = 'A1100015';//session storage
    self.xmail = '';
    self.xname = '';
    self.xcivility = '';

    self.IsModification = false;
    self.DeletionOK = false;

    self.selectedRpc = null;
    self.invalidCode = false;

    self.no_contact_found = false;

    self.AnneeContractualisation = '';
    // #endregion

    this.$onInit = function () {

        self.userInfo = rpcService.getUserInfos();
        self.client_number_SAP = /*3073;*//* 0000503394;*//*'0000521846';*/self.userInfo.idClientSAP;

        console.log("init");
        console.log("Client number SAP: " + self.client_number_SAP);
        
        rpcService.getAnneesContractualisations(self.client_number_SAP).then(function (response) {
            self.AnneeContractualisation = response.data;
            console.log('self.AnneeContractualisation' + JSON.stringify(response) + '      ' + self.AnneeContractualisation);

        }, function (reason) {
            console.error('error retrieving date contractualisation: ' + JSON.stringify(reason));
            self.errors = reason.data;
        }).finally(function () { });

        rpcService.getRpcs(self.client_number_SAP/*4648*//*0000521846*/).then(function (response) {
            self.status_code_attestation = 200;

            self.rpcs = response.data;

            for (var index = 0; index < self.rpcs.length; index++) {
                console.log('for');
                self.rpcs[index].Exist = self.RpcFileExist(self.client_number_SAP, self.rpcs[index]);
                }
        }, function (reason) {
            self.status_code_attestation = reason.status;
            console.error('submit - error : ' + JSON.stringify(reason));
            self.errors = reason.data;
        }).finally(function () { });
        //rpcService.PostCacCreateProject().then(function (response) {
        //    console.log('resoponse  ' + response);
        //}, function (reason) {
        //                console.error('submit - error : ' + JSON.stringify(reason));
        //    }).finally(function () { });
        //rpcService.GetHeaders().then(function (response) {
        //    self.xmail = response.headers('HTTP_CUSTOM_EMAIL');
        //    console.log('EMAIL  '+response.headers('HTTP_CUSTOM_EMAIL'));
        //}, function (reason) {           
        //    console.error('error : ' + JSON.stringify(reason));
        //}).finally(function () { });
        //self.xname= rpcService.getUserInfo().lastName;
        //self.xcivility = rpcService.getUserInfo().civility
        //console.log("endOnInit  mail  nom  civility  " + self.xmail + " " + self.xname + " " + self.xcivility);
    }

    // #region rpc visualiation et telechargement

    self.RpcFileExist = function (clientNumber, rpc) {
        console.log('getrpc file ctrl');

        rpcService.RpcFileExist(/*3073, 2016*/ clientNumber, rpc.Annee).then(function (response) {

            rpc.Exist = response.data[0].Exist;

            console.log('rep' + JSON.stringify(response));
            console.log('Rpc annee: ' + rpc.Annee + ' Exist: ' + rpc.Exist);

        }, function (reason) {

            console.error('submit - error : ' + JSON.stringify(reason));
            self.errors = reason.data;

        }).finally(function () { });

    }

    self.getRpcFile = function (action, rpcSelected) {
        console.log('getrpc file attachement ctrl');
        self.rpcSelectedannee = rpcSelected.Annee;
        console.log('annee: ' + self.rpcSelectedannee);

        rpcService.getRpcFile(/*3073, 2016*/ self.client_number_SAP, self.rpcSelectedannee).then(function (response) {
            
            
            console.log('rpc vérification retour : ', response.data);
            self.rpcObject = [];

            if (response.data.length > 0) {

                self.rpcObject.push({
                    Annee: response.data[0].Annee,
                    NomFichier: response.data[0].NomFichier,
                    TypeMime: response.data[0].TypeMime,
                    Taille: response.data[0].Taille,
                    DateImport: response.data[0].DateImport,
                    UrlRpc: response.data[0].UrlRpc
                });


                console.log('Rpc annee: ' + self.rpcObject[0].Annee + ' NomFichier: ' + self.rpcObject[0].NomFichier);

                console.log('action: ' + action);
                if (action == 1) {
                    //$window.open(self.rpcObject[0].UrlRpc + "?display=inline");
                    viewFile(self.rpcObject[0].UrlRpc + "?display=inline");
                }
                else {
                    $window.location.href = (self.rpcObject[0].UrlRpc + "?display=attachement");
                }

            }

        }, function (reason) {

            console.error('submit - error : ' + JSON.stringify(reason));
            self.errors = reason.data;

        }).finally(function () { });

    }


    var viewFile = function (url) {    
         
            var lecture = document.createElement('a');
            lecture.href = url;
            lecture.target = '_blank';
            document.body.appendChild(lecture);
            console.log('genrated file link : ', lecture);
            lecture.click();
    }
    
    // #endregion
    
    // #region POPIN 1 ERREUR AUTH

    this.erreurAuth = function () {
        //lauch some web service and see if everything is ok and then according you show popin erreur or popin success
        if (self.modal_instance) self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin1AuthenticationProblem.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };

    // #endregion

    // #region POPIN 1 ERREUR CONFLIT

    self.erreurConflict = function () {
        //lauch some web service and see if everything is ok and then according you show popin erreur or popin success
        if (self.modal_instance) self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin1erreur.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };

    // #endregion

    // #region POPIN 1 ERREUR SURVENUE

    self.erreurSurvenue = function () {

        if (self.modal_instance) self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin1erreurErreurSurvenue.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };

    // #endregion

    // #region POPIN 1 ERREUR IMPOSSIBLE DE MODIFIER

    self.impossibleModifier = function () {

        if (self.modal_instance) self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin1erreurImpossibleModifier.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };

    // #endregion

    // #region POPIN 1

    self.successlaunch = function () {
        //lauch some web service and see if everything is ok and then according you show popin erreur or popin success
        if (self.modal_instance) self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin1.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };

    // #endregion

   
    // #region POPIN 2
    this.ChoixExpert = function () {
        console.log('test : ' + self.ec + ' modif ? :  ' + self.IsModification);
        if (self.modal_instance)
            self.modal_instance.close();
        // self.loading = true;
        self.modal_instance = $uibModal.open({
            template: require('./popin2.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });

    };

    this.closeModal = function () {
        self.expertsList.length = 0; //clearing array
        self.diplayMoreState = false; //the more button is disabled
        self.validerState = false;
        self.maxToDisplayMultiplicator = 1;
        self.ec = '';
        self.someVal = '';
        self.result = '';
        self.expertsList.length = 0;
        self.expertsListTemp.length = 0;
        self.modal_instance.close();
        self.eltChosen = {
            adresse: undefined,
            civilite: undefined,
            code_postal: undefined,
            email: undefined,
            nom: undefined,
            prenom: undefined,
            qualite: undefined,
            uniquecsoecid: undefined,
            ville: undefined,
        }  //reset
        self.IsModification = false;
        self.DeletionOK = false;
        self.details = {
            id: undefined,
            idClient: undefined,
            annee: undefined,
            montant: undefined,
            raisonSociale: undefined,
            siren: undefined,
            idSignataire: undefined, //at my level
            iddeletion: undefined,
            mandataireKindToDelete: undefined,
        }

        self.no_contact_found = false;
        
        self.AnneeContractualisation = '';
        self.$onInit();
    };

    self.textChanged = function () {
        self.no_contact_found = false;
        self.expertsList.length = 0; //clearing array
        self.expertsListTemp.length = 0;
        self.diplayMoreState = false; //the more button is disabled
        self.validerState = false;  //disable validate button
        self.eltChosen = {
            adresse: undefined,
            civilite: undefined,
            code_postal: undefined,
            email: undefined,
            nom: undefined,
            prenom: undefined,
            qualite: undefined,
            uniquecsoecid: undefined,
        }  //reset
        self.maxToDisplayMultiplicator = 1;

        if (self.someVal.length >= inputMin) {
            ///s/elf.result = self.someVal;

            // #region EXPERTSCOMPTABLE
            if (self.ec == 'EC') {

                // retourne liste des experts
                rpcService.GetExpertsByName(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    if (self.someVal.length >= inputMin) {
                        console.log("REPONSE : ", response.data);
                        self.expertsList.length = 0; //clearing array
                        self.diplayMoreState = false; //the more button is disabled

                        //reponse = 200 OK; iterate through response and fill the list binded
                        if (response.status == 200) {

                            if (Array.isArray(response.data.contacts)) {
                                for (var index in response.data.contacts) {
                                    self.expertsList.push({
                                        adresse: response.data.contacts[index].adresse,
                                        civilite: response.data.contacts[index].civilite,
                                        code_postal: response.data.contacts[index].code_postal,
                                        email: response.data.contacts[index].email,
                                        nom: response.data.contacts[index].nom,
                                        prenom: response.data.contacts[index].prenom,
                                        qualite: response.data.contacts[index].qualite,
                                        uniquecsoecid: response.data.contacts[index].uniquecsoecid,
                                        ville: response.data.contacts[index].ville,
                                    });
                                }
                            }
                            else {
                                self.expertsList.push({
                                    adresse: response.data.contacts.adresse,
                                    civilite: response.data.contacts.civilite,
                                    code_postal: response.data.contacts.code_postal,
                                    email: response.data.contacts.email,
                                    nom: response.data.contacts.nom,
                                    prenom: response.data.contacts.prenom,
                                    qualite: response.data.contacts.qualite,
                                    uniquecsoecid: response.data.contacts.uniquecsoecid,
                                    ville: response.data.contacts.ville,
                                });
                            }

                            //display the button "display more"
                            if (response.data.fin == 'false') {
                                self.diplayMoreState = true;
                            }
                        }
                            //show no contacts found
                        else if (response.status == 204) {
                            console.log("no contact found");
                            self.no_contact_found = true;
                        }

                    }
                    else {
                        //console.log("heerer");
                        //show to enter at least 2 values
                        self.result = '';
                        self.expertsList.length = 0; //clearing array
                        self.expertsListTemp.length = 0;
                        self.diplayMoreState = false; //the more button is disabled
                        self.validerState = false;  //disable validate button
                        self.eltChosen = {
                            adresse: undefined,
                            civilite: undefined,
                            code_postal: undefined,
                            email: undefined,
                            nom: undefined,
                            prenom: undefined,
                            qualite: undefined,
                            uniquecsoecid: undefined,
                        }  //reset
                        self.maxToDisplayMultiplicator = 1;
                    }
                }, function (reason) {
                    self.no_contact_found = true;
                    console.error(' - error : ' + JSON.stringify(reason));
                }).finally(function () { });
            }
            // #endregion

            // #region CAC
            if (self.ec == 'CAC') {
                // retourne liste des CAC
                rpcService.GetCacByNames(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    if (self.someVal.length >= inputMin) {
                        console.log("CAC REPONSE : ", response.data);
                        self.expertsList.length = 0; //clearing array
                        self.diplayMoreState = false; //the more button is disabled

                        //reponse = 200 OK; iterate through response and fill the list binded
                        if (response.status == 200) {
                            self.no_contact_found = false;
                            if (Array.isArray(response.data.data)) {
                                if (response.data.data.length>0) {
                                    for (var index = 0; index < response.data.data.length; index++) {
                                        self.expertsList.push({
                                            adresse: response.data.data[index].adresse,
                                            civilite: response.data.data[index].civilite,
                                            code_postal: response.data.data[index].code_postal,
                                            email: response.data.data[index].email,
                                            nom: response.data.data[index].nom,
                                            prenom: response.data.data[index].prenom,
                                            ville: response.data.data[index].ville,
                                            id: response.data.data[index].id,
                                        });
                                    }
                                }
                                else {
                                    self.no_contact_found = true;
                                }
                                
                            }
                            else {
                                console.log("we shouldnt come here CAC");
                            }
                            //display the button "display more"
                            if (response.data.fin == false) {
                                self.diplayMoreState = true;
                                console.log("self.displaymorestate  " + self.diplayMoreState)
                            }
                        }
                            //show no contacts found
                        //else if (response.status == 400) {
                        //    console.log("Bad Request");
                        //    self.no_contact_found = true;
                        //}
                        else {
                            self.no_contact_found = true;
                            console.log("Bad Request _ no 400");
                        }
                    }
                    else {

                        console.log("inferior to min of 2");
                        //show to enter at least 2 values
                        self.result = '';
                        self.expertsList.length = 0; //clearing array
                        self.expertsListTemp.length = 0;
                        self.diplayMoreState = false; //the more button is disabled
                        self.validerState = false;  //disable validate button
                        self.eltChosen = {
                            adresse: undefined,
                            civilite: undefined,
                            code_postal: undefined,
                            email: undefined,
                            nom: undefined,
                            prenom: undefined,
                            qualite: undefined,
                            uniquecsoecid: undefined,
                        }  //reset
                        self.maxToDisplayMultiplicator = 1;
                    }
                }, function (reason) {
                    self.no_contact_found = true;
                    console.error(' error : ' + JSON.stringify(reason.data));
                }).finally(function () { });
            }
            // #endregion
        }
        else {
            //console.log("heerer");
            //show to enter at least 2 values
            self.result = '';
            self.expertsList.length = 0; //clearing array
            self.expertsListTemp.length = 0;
            self.diplayMoreState = false; //the more button is disabled
            self.validerState = false;  //disable validate button
            self.eltChosen = {
                adresse: undefined,
                civilite: undefined,
                code_postal: undefined,
                email: undefined,
                nom: undefined,
                prenom: undefined,
                qualite: undefined,
                uniquecsoecid: undefined,
            }  //reset
            self.maxToDisplayMultiplicator = 1;
        }
    };

    self.displayMore = function () {
        self.maxToDisplayMultiplicator = self.maxToDisplayMultiplicator + 1;
        self.diplayMoreState = false; //the more button is disabled
        self.validerState = false;  //disable validate button
        self.eltChosen = {
            adresse: undefined,
            civilite: undefined,
            code_postal: undefined,
            email: undefined,
            nom: undefined,
            prenom: undefined,
            qualite: undefined,
            uniquecsoecid: undefined,
            ville: undefined,
        }  //reset
        self.expertsListTemp.length = 0;


        if (self.someVal.length >= inputMin) {

            // #region EXPERTSCOMPTABLE
            if (self.ec == 'EC') {
                rpcService.GetExpertsByName(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    console.log("EC REPONSE : ", response.data);

                    //reponse = 200 OK; iterate through response and fill the list binded
                    if (response.status == 200) {
                        if (Array.isArray(response.data.contacts)) {
                            for (var index in response.data.contacts) {
                                self.expertsListTemp.push({
                                    adresse: response.data.contacts[index].adresse,
                                    civilite: response.data.contacts[index].civilite,
                                    code_postal: response.data.contacts[index].code_postal,
                                    email: response.data.contacts[index].email,
                                    nom: response.data.contacts[index].nom,
                                    prenom: response.data.contacts[index].prenom,
                                    qualite: response.data.contacts[index].qualite,
                                    uniquecsoecid: response.data.contacts[index].uniquecsoecid,
                                    ville: response.data.contacts[index].ville,
                                });
                            }
                            for (var i = (defaultMax * (self.maxToDisplayMultiplicator - 1)) ; i < self.expertsListTemp.length; i++) {
                                self.expertsList.push(self.expertsListTemp[i]);
                            }
                        }

                        //display the button "display more"
                        if (response.data.fin == 'false') {
                            self.diplayMoreState = true;
                        }
                    }
                        //show no contacts found
                    else if (response.status == 204) {
                        console.log("no contact found");
                    }
                }, function (reason) {
                    console.error(' - error : ' + JSON.stringify(reason));
                }).finally(function () { });
            }
            // #endregion

            // #region CAC
            if (self.ec == 'CAC') {
                // retourne liste des CAC
                rpcService.GetCacByNames(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    console.log("CAC REPONSE : ", response.data);

                    //reponse = 200 OK; iterate through response and fill the list binded
                    if (response.status == 200) {
                        if (Array.isArray(response.data.data)) {
                            for (var index = 0; index < response.data.data.length; index++) {
                                self.expertsListTemp.push({
                                    adresse: response.data.data[index].adresse,
                                    civilite: response.data.data[index].civilite,
                                    code_postal: response.data.data[index].code_postal,
                                    email: response.data.data[index].email,
                                    nom: response.data.data[index].nom,
                                    prenom: response.data.data[index].prenom,
                                    ville: response.data.data[index].ville,
                                    id: response.data.data[index].id,
                                });
                            }
                            for (var i = (defaultMax * (self.maxToDisplayMultiplicator - 1)) ; i < self.expertsListTemp.length; i++) {
                                self.expertsList.push(self.expertsListTemp[i]);
                            }
                        }
                        //display the button "display more"
                        if (response.data.fin == false) {
                            self.diplayMoreState = true;
                        }
                    }
                        //show no contacts found
                    else if (response.status == 400) {
                        console.log("Bad Request");
                    }
                }, function (reason) {
                    console.error(' error : ' + JSON.stringify(reason.data));
                }).finally(function () { });
            }
            // #endregion
        }
        else {
            //show to enter at least 2 values
            self.result = '';
        }
    }

    self.eltSelected = function (expertchoosen) {
        //turn on validate button
        self.validerState = true;

        self.eltChosen.adresse = expertchoosen.adresse,
        self.eltChosen.civilite = expertchoosen.civilite,
        self.eltChosen.code_postal = expertchoosen.code_postal,
        self.eltChosen.email = expertchoosen.email,
        self.eltChosen.nom = expertchoosen.nom,
        self.eltChosen.prenom = expertchoosen.prenom;

        if (self.ec == 'EC') {
            console.log('Elt selected EC');
             self.eltChosen.qualite = expertchoosen.qualite,
             self.eltChosen.uniquecsoecid = expertchoosen.uniquecsoecid;
             }
        else {
            console.log('Elt selected CAC');
             self.eltChosen.uniquecsoecid = expertchoosen.id;
        }

        self.eltChosen.ville = expertchoosen.ville,
            console.log("Selected is " + self.eltChosen.nom + "  " + self.eltChosen.uniquecsoecid);

    }


    self.modification = function () {
        //self.mandataireKindToDelete = 'EC';//NADIA should send it as parameter
        console.log("inside modification   mandatairekindtodelete " + self.mandataireKindToDelete);
        
        if (rpcService.IsConseiller()) {
            console.log("Non Authorisé Car Conseiller ");
            rpcService.unAuthPopinOpen();
        }
        else {
            console.log("Pas Conseiller ");

            if (self.mandataireKindToDelete == 'EC') {
                return rpcService.ExpertsDeleteProjects(self.details.iddeletion)  //Nadia gives here the id.
                .then(function (response) {
                    if (response.status == 200 || response.status == 201) {
                        console.log("Deleted EC " + JSON.stringify(response.data));
                        self.DeletionOK = true;
                        console.log('deletion OK ' + self.DeletionOK);
                        //save into BDD
                        console.log('Starting Saving into BDD');
                        rpcService.UpdateCancelMissions(self.details.iddeletion)
                        .then(function (response) {
                            if (response.status == 200) {
                                console.log("UPDATED IN DB EC " + JSON.stringify(response.data));
                            }
                        }, function (reason) {
                            if (reason.status == 404) {
                                console.log("Bad Request EC " + JSON.stringify(reason));
                                self.erreurConflict();
                            }
                            else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
                                console.log("Non Authorisé EC " + JSON.stringify(reason));
                                self.erreurAuth();
                            }
                            else if (reason.status == 500) {
                                console.log("Erreur EC " + JSON.stringify(reason));
                                self.erreurAuth();
                            }
                        }).finally(function () { });
                    }
                }, function (reason) {
                    if (reason.status == 404) {
                        console.log("Bad Request EC " + JSON.stringify(reason));
                        self.erreurSurvenue();
                    }
                    else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
                        console.log("Non Authorisé EC " + JSON.stringify(reason));
                        self.erreurAuth();
                    }
                    else if (reason.status == 500) {
                        console.log("Erreur EC " + JSON.stringify(reason));
                        self.impossibleModifier();
                    }
                }).finally(function () { });
            }
            else if (self.mandataireKindToDelete == 'CAC') {
                return rpcService.CacDeleteProjects(self.details.iddeletion)
               .then(function (response) {
                   if (response.status == 200 || response.status == 201) {
                       console.log("Deleted CAC " + JSON.stringify(response.data));
                       self.DeletionOK = true;
                       //save into BDD
                       rpcService.UpdateCancelMissions(self.details.iddeletion)
                       .then(function (response) {
                           if (response.status == 200 || response.status == 201) {
                               console.log("UPDATED IN DB CAC " + JSON.stringify(response.data));
                           }
                       }, function (reason) {
                           if (reason.status == 404) {
                               console.log("Bad Request EC " + JSON.stringify(reason));
                               self.erreurConflict();
                           }
                           else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
                               console.log("Non Authorisé EC " + JSON.stringify(reason));
                               self.erreurAuth();
                           }
                           else if (reason.status == 500) {
                               console.log("Erreur EC " + JSON.stringify(reason));
                               self.erreurConflict();
                           }
                       }).finally(function () { });
                   }
               }, function (reason) {
                   if (reason.status == 404) {
                       console.log("Bad Request EC " + JSON.stringify(reason));
                       self.erreurSurvenue();
                   }
                   else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
                       console.log("Non Authorisé EC " + JSON.stringify(reason));
                       self.erreurAuth();
                   }
                   else if (reason.status == 500) {
                       console.log("Erreur EC " + JSON.stringify(reason));
                       self.impossibleModifier();
                   }
               }).finally(function () { });
            }
        }

    }

    self.createRPCOnlyEC = function () {
        console.log("creation EC");

        console.log("id:  "+self.details.id);
        console.log("idclient: "+self.details.idClient);
        console.log("annee:  " +self.details.annee);
        console.log("montant: " +self.details.montant);
        console.log("raison sociale: "+ self.details.raisonSociale);
        console.log("siren:  " + self.details.siren);
        console.log("signataire:  " + self.details.idSignataire);

        if (rpcService.IsConseiller()) {
            console.log("Non Authorisé Car Conseiller ");
            rpcService.unAuthPopinOpen();
        }
        else {
            console.log("Pas Conseiller ");


            rpcService.PostExpertsCreateProject(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale,
                                                                 self.details.siren, self.details.idSignataire)
                    .then(function (response) {
                        if (response.status == 201) {
                            console.log("Created  " + response.data);

                            // #region SAVING INTO DB
                            /////async call to save in database : createmission or savemission
                            rpcService.SaveNewMissions(self.details.id, rpcService.getUserInfo().idClientSAP /*self.details.idClient*/, self.details.annee, self.details.montant, self.details.idSignataire,
                                                                self.eltChosen.nom, self.eltChosen.civilite, self.eltChosen.email, 'EC', 1)
                            .then(function (response) {
                                if ((response.status == 201) || (response.status == 200)) {
                                    console.log("Created in DB  " + response.data);
                                    //popin thank you
                                    self.successlaunch();
                                }
                            }, function (reason) {
                                console.log("Erreur while saving ");//+ JSON.stringify(reason));
                                console.log("ERROR BUT NO POP UP 1 ");//+ JSON.stringify(reason))
                            }).finally(function () { });;
                            // #endregion


                        }
                    }, function (reason) {
                        if (reason.status == 409) {
                            console.log("Conflict while creating mission EC ");// + JSON.stringify(reason));
                            self.erreurConflict();
                        }
                        else if (reason.status == 400) {
                            console.log("BAd Request while creating mission EC ");// + JSON.stringify(reason));
                            self.erreurSurvenue();
                        }
                        else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
                            console.log("Non Authorisé while creating mission EC ");//+ JSON.stringify(reason));
                            self.erreurAuth();
                        }
                        else if (reason.status == 500) {
                            console.log("Erreur while creating mission EC ");//+ JSON.stringify(reason));
                            self.erreurSurvenue();
                        }
                    }).finally(function () { });
        }

    }

    self.createRPCOnlyCAC = function () {
        console.log("creation CAC");
        console.log("id:  " + self.details.id);
        console.log("idclient: " + self.details.idClient);
        console.log("annee:  " + self.details.annee);
        console.log("montant: " + self.details.montant);
        console.log("raison sociale: " + self.details.raisonSociale);
        console.log("siren:  " + self.details.siren);
        console.log("signataire:  " + self.details.idSignataire);
        var mydata =
           {
               id: self.details.id,
               idClient: self.details.idClient,
               annee: self.details.annee,
               montant: self.details.montant,
               siren: self.details.siren,
               idSignataire: self.details.idSignataire
           }
        //self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale,
        //                                                 self.details.siren, self.details.idSignataire


        if (rpcService.IsConseiller()) {
            console.log("Non Authorisé Car Conseiller ");
            rpcService.unAuthPopinOpen();
        }
        else {
            console.log("Pas Conseiller ");

            rpcService.PostCacCreateProject(mydata)
            .then(function (response) {
                if (response.status == 201 || response.status == 200) {
                    console.log("Created CAC " + response.data);

                    // #region SAVING INTO DB
                    /////async call to save in database : createmission or savemission

                    rpcService.SaveNewMissions(self.details.id, rpcService.getUserInfo().idClientSAP /*self.details.idClient*/, self.details.annee, self.details.montant, self.details.idSignataire,
                                                        self.eltChosen.nom, self.eltChosen.civilite, self.eltChosen.email, 'CAC', 1)
                    .then(function (response) {
                        if ((response.status = 201) || (response.status = 200)) {
                            console.log("Created in DB  " + response.data);
                            //popin thank you
                            self.successlaunch();
                        }
                    }, function (reason) {
                        console.log("Erreur while saving " + JSON.stringify(reason));
                        console.log("ERROR BUT NO POP UP 2 ");//+ JSON.stringify(reason))
                    }).finally(function () { });;
                    // #endregion


                }
            }, function (reason) {
                if (reason.status == 409) {
                    console.log("Conflict " + JSON.stringify(reason));
                    self.erreurConflict();
                }
                else if (reason.status == 400) {
                    console.log("BAd Request" + JSON.stringify(reason));
                    self.erreurSurvenue();
                }
                else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
                    console.log("Non Authorisé" + JSON.stringify(reason));
                    self.erreurAuth();
                }
                else if (reason.status == 500) {
                    console.log("Erreur" + JSON.stringify(reason));
                    self.erreurSurvenue();
                }
            }).finally(function () { });
        }


    }

    self.createRPC = function () {


        if (rpcService.IsConseiller()) {
            console.log("Non Authorisé Car Conseiller ");
            rpcService.unAuthPopinOpen();
        }
        else {
            console.log("Pas Conseiller ");


            // #region EXPERTSCOMPTABLE
            if (self.ec == 'EC') {
                self.details.id = rpcService.generateId();
                //self.details.annee = '2016';//mannee;
                //self.details.montant = '79000';//mmontant;
                //self.details.iddeletion = 'ATEST16'

                self.details.idClient = rpcService.getUserInfo().idClientSAP; //rpcService.getSAPCustomed();
                self.details.raisonSociale = rpcService.getUserInfo().clientName;//'ECO EMBALLAGES';//
                self.details.idSignataire = self.eltChosen.uniquecsoecid;

                rpcService.getSirets(rpcService.getUserInfo().idClientSAP).then(function (response) {

                    console.log("Id client SAP: " + rpcService.getUserInfo().idClientSAP);
                    console.log("Siret EC response " + response.data);
                    console.log("Siret Ec: " + response.data.Siret);
                    if (response.data.Siret == null)
                        self.details.siren = '';
                    else
                        self.details.siren = (response.data.Siret).slice(0, 9);
                    console.log("Siren EC: " + self.details.siren);

                    // #region MODIFICATION
                    ////cancel previous mission if there is
                    if (self.IsModification) {
                        console.log("modification in progress EC");
                        self.modification().then(function (response) {
                            console.log("modification done EC");
                            console.log('deletion OK ' + self.DeletionOK);
                            if (self.DeletionOK == true) {
                                console.log("starting creation of new table EC");
                                self.createRPCOnlyEC();
                                console.log("starting creation of new table EC");
                            }
                        });
                    }
                    // #endregion

                    // #region CREATION
                    //// create mission RPC with experts
                    if (self.IsModification == false) {
                        console.log("creation EC Is not Modif ");
                        self.createRPCOnlyEC();
                    }
                    // #endregion

                }, function (reason) {
                    console.log("Erreur siren EC");//+ JSON.stringify(reason));
                }).finally(function () { });
                /*602045288;*/
            }
            // #endregion

            // #region CAC
            if (self.ec == 'CAC') {
                self.details.id = rpcService.generateId();
                //self.details.annee = '2016';//mannee;
                //self.details.montant = '79000';//mmontant;
                //self.iddeletion = 'TESTINGGG'

                self.details.idClient = rpcService.getUserInfo().idClientSAP;//rpcService.getSAPCustomed();
                self.details.raisonSociale = rpcService.getUserInfo().clientName;//'ECO EMBALLAGES';//rpcService.getUserInfo().clientName
                self.details.idSignataire = self.eltChosen.uniquecsoecid;

                //MODIFIER APPELER GET SIRETS
                rpcService.getSirets(rpcService.getUserInfo().idClientSAP).then(function (response) {

                    console.log("Id client SAP: " + rpcService.getUserInfo().idClientSAP);
                    console.log("Siret CAC response " + response.data);
                    console.log("Siret CAC: " + response.data.Siret);
                    if (response.data.Siret == null)
                        self.details.siren = '';
                    else
                        self.details.siren = (response.data.Siret).slice(0, 9);
                    console.log("Siren CAC: " + self.details.siren);

                    // #region MODIFICATION
                    ////cancel previous mission if there is
                    if (self.IsModification) {
                        console.log("modification in progress CAC");
                        self.modification().then(function (response) {
                            console.log("modification done CAC");
                            console.log('deletion OK ' + self.DeletionOK);
                            if (self.DeletionOK == true) {
                                console.log("starting creation of new table CAC");
                                self.createRPCOnlyCAC();
                                console.log("starting creation of new table CAC");
                            }
                        });


                    }
                    // #endregion

                    // #region CREATION
                    //// create mission RPC with experts
                    if (self.IsModification == false) {
                        console.log(" launching  creation CAC");
                        self.createRPCOnlyCAC();
                    }
                    // #endregion

                }, function (reason) {
                    console.log("Erreur siren CAC ");//+ JSON.stringify(reason));
                }).finally(function () { });

            }
            // #endregion

        }

    }
    // #endregion

    // #region POPIN 3
    this.lancement = function (rpcSelected) {
        console.log('lancement');
        if (self.modal_instance)
            self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin3.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });

        console.log('before fillDetails');
        console.log('annee: ' + rpcSelected.Annee);
        self.fillDetails(rpcSelected.Annee, 0, '', '');

    };
    // #endregion
    
    // #region CHANGE MISSION
    this.changeMission = function (rpcSelected) {
        if (self.modal_instance)
            self.modal_instance.close();
        self.loading = true;
        self.IsModification = true;
        self.modal_instance = $uibModal.open({
            template: require('./popin4ChangeMission.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });

        console.log('before fillDetails');
        console.log('annee: ' + rpcSelected.Annee);
        console.log('mission Id: ' + rpcSelected.MissionId);
        console.log('type expert: ' + rpcSelected.TypeExpert);
        self.mandataireKindToDelete = rpcSelected.TypeExpert;
        self.fillDetails(rpcSelected.Annee, 0, rpcSelected.MissionId, rpcSelected.TypeExpert);
    };
    // #endregion

    // #region CODE ACTIVATION
    this.codeActivation = function (rpc) {
        console.log('codeActivation');
        if (self.modal_instance)
            self.modal_instance.close();
        self.selectedRpc = rpc;
        self.loading = true;
        self.IsModification = true;
        self.modal_instance = $uibModal.open({
            template: require('./popinCodeActivation.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };
    // #endregion
    
    // #region DETAILS TO SEND WHILE CREATING OR MODIFYING

    self.fillDetails = function (mannee, mmontant, middeletion, mmandataireKindToDelete) {
        //self.details.id = 'TESTINGG';//mid;
        self.details.annee = mannee;
       rpcService.getAmounts(rpcService.getUserInfo().idClientSAP, mannee).then(function(response) {
            if((response.status == 201) || (response.status == 200)) {
                console.log(" amount charged ");
                if (response.data == 'undefined')
                    self.details.montant = 0;
                else
                    self.details.montant = response.data;
                console.log("montant: " +self.details.montant);
                }
                }, function (reason) {
            console.log("failed amount charged  ");//+ JSON.stringify(reason));
        }).finally(function () { });

        //mmontant; //historique declaration (montant estime)
        self.details.iddeletion = middeletion;
        self.details.mandataireKindToDelete = mmandataireKindToDelete; //'EC';
        console.log('inside fillDetails');
        console.log('annee: ' + mannee);
        console.log('mission Id: ' + middeletion);
        console.log('type expert: mmandataireKindToDelete' + mmandataireKindToDelete);
        console.log('type expert: self.details.mandataireKindToDelete' + self.details.mandataireKindToDelete);

    }
    // #endregion

    this.validationCode = function () {
        self.invalidCode = false;
        self.loading = true;

        // Post du code
        var postData = {
          MissionId: self.selectedRpc.MissionId,
          Annee: self.selectedRpc.Annee,
          IdClient: self.client_number_SAP,//rpcService.getSAPCustomed(),
          ActivationCode: self.mCodeActivation
        };
        console.log('validationCode - postData', postData);
        rpcService.activateCode(postData)
          .then(function (response) {
            var resultCode = response.data.ResultCode;
            console.log('validationCode - resultCode', resultCode);
            switch (resultCode) {
              case activationCodeOk:
                openPopIn('./popInCodeActivationSuccess.html');
                    /*
                rpcService.getRpcs(self.client_number_SAP).then(function (response) {
                    self.status_code_attestation = 200;
                    self.rpcs = response.data;
                }, function (reason) {
                    self.status_code_attestation = reason.status;
                    self.errors = reason.data;
                });
                */
                break;
              case activationCodeInvalid:
                console.log('activationCodeInvalid');
                self.invalidCode = true;
                break;
              case activationCodeExpired:
                openPopIn('./popInCodeActivationExpired.html');
                break;
              case activationCodeLocked:
                openPopIn('./popInCodeActivationLocked.html');
                break;
              default:
                openPopIn('./popInCodeActivationError.html');
                break;
            }
          }, function (reason) {
            openPopIn('./popInCodeActivationError.html');
          })
          .finally(function () {
            self.loading = false;
          });
    }

    self.codeFocus = function () {
      self.invalidCode = false;
    }

    function openPopIn (template) {
      if (self.modal_instance)
          self.modal_instance.close();

      self.modal_instance = $uibModal.open({
        template: require(template),
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });
    }

  /*  this. = function (stepPopin) {

        self.stepPopin = stepPopin;

        if (self.modal_instance)
            self.modal_instance.close();
        self.loading = true;

        self.modal_instance = $uibModal.open({
            template: require('./popin3.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };
    this.closeModal = function () {
        self.modal_instance.close()
    };
     this.ChoixExpert = function (stepPopin) {
         self.stepPopin = stepPopin;
        console.log('test : ', self.ec);
        if (self.modal_instance)
            self.modal_instance.close();
           // self.loading = true;
            self.modal_instance = $uibModal.open({
            template: require('./popin3.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
     };
     
    */

};
