module.exports = function (lancementrpcService, $location, $uibModal, $scope, $userService) {
    lancementrpcService, $location, $uibModal, $scope, $userService
    var self = this;
    //the order is popin3 then popin2 then popin1
    self.modal_instance;

    var inputMin = 2;
    var defaultMax = 20;
    self.diplayMoreState = false;
    self.maxToDisplayMultiplicator = 1;
    self.validerState = false;
    self.eltModel='';
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
    //var id = 123;
    //var idClient = 'A1100015';//session storage
    //var annee = '2016';
    //var montant = '80000';
    //var raisonSociale = 'PINSON';
    //var siren = '999999999';
    //var idSignataire = 'e394d56f-3e82-d35e-07ba-53b55326d06d'; //self.eltChosen.uniquecsoecid

    self.IsModification = false;
    self.DeletionOK = false;
    
    this.$onInit = function () {
       // var d = new Date();
       // var annee_en_cours = d.getFullYear();
       //// self.annee_en_cours = 2006,
       // console.log("annee en cours:",annee_en_cours);
    

       // widgetuploadService.getAnneesContractualisation(self.user.numero_client).then(function (response) {
       //     self.AnneesContractualisation = response.data;
       //     console.log("AnneesContractualisation :", self.AnneesContractualisation);
            
       // }, function (reason) {
           
       // }).finally(function () { });   
    };



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
        console.log('test : '+  self.ec + ' modif ? :  ' + self.IsModification);
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
            ville : undefined,
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
    };
        
    self.textChanged = function () {
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
            //s/elf.result = self.someVal;
            // #region EXPERTSCOMPTABLE
            if (self.ec == 'EC') {
                
                // retourne liste des experts
                lancementrpcService.GetExpertsByName(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    console.log("REPONSE : ", response.data);
                    self.expertsList.length = 0; //clearing array
                    self.diplayMoreState = false; //the more button is disabled

                    //reponse = 200 OK; iterate through response and fill the list binded
                    if (response.status = 200) {

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
                            });
                        }

                        //display the button "display more"
                        if (response.data.fin == 'false') {
                            self.diplayMoreState = true;
                        }
                    }
                    //show no contacts found
                    else if (response.status = 204) {
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
                lancementrpcService.GetCacByNames(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    console.log("CAC REPONSE : ", response.data);
                    self.expertsList.length = 0; //clearing array
                    self.diplayMoreState = false; //the more button is disabled

                    //reponse = 200 OK; iterate through response and fill the list binded
                    if (response.status = 200) {
                        if (Array.isArray(response.data.data)) {
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

                        }
                        //display the button "display more"
                        if (response.data.fin == false) {
                            self.diplayMoreState = true;
                            console.log("self.displaymorestate  " + self.diplayMoreState)
                        }
                    }
                        //show no contacts found
                    else if (response.status = 400) {
                        console.log("Bad Request");
                    }
                }, function (reason) {
                    console.error(' error : ' + JSON.stringify(response.data));
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
            ville : undefined,
        }  //reset 
        self.expertsListTemp.length = 0;


        if (self.someVal.length >= inputMin) {       

            // #region EXPERTSCOMPTABLE
            if (self.ec == 'EC') {
                lancementrpcService.GetExpertsByName(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    console.log("EC REPONSE : ", response.data);

                    //reponse = 200 OK; iterate through response and fill the list binded
                    if (response.status = 200) {
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
                    else if (response.status = 204) {
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
                lancementrpcService.GetCacByNames(self.someVal, defaultMax * self.maxToDisplayMultiplicator).then(function (response) {

                    console.log("CAC REPONSE : ", response.data);
                    
                    //reponse = 200 OK; iterate through response and fill the list binded
                    if (response.status = 200) {
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
                    else if (response.status = 400) {
                        console.log("Bad Request");
                    }
                }, function (reason) {
                    console.error(' error : ' + JSON.stringify(response.data));
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
        self.eltChosen.prenom = expertchoosen.prenom,
        self.eltChosen.qualite = expertchoosen.qualite,
        self.eltChosen.uniquecsoecid = expertchoosen.uniquecsoecid,
        self.eltChosen.ville= expertchoosen.ville,

        console.log("Selected is " + self.eltChosen.nom + "  " + self.eltChosen.uniquecsoecid);        
    }


    self.modification = function () {
        self.mandataireKindToDelete = 'EC';//NADIA should send it as parameter 

        if (self.mandataireKindToDelete == 'EC') {
            lancementrpcService.ExpertsDeleteProjects(self.details.iddeletion)  //Nadia gives here the id.
            .then(function (response) {
                if (response.status = 200) {
                    console.log("Deleted EC " + JSON.stringify(response.data));
                    self.DeletionOK = true;
                    console.log('deletion OK ' + self.DeletionOK);
                    //save into BDD
                    lancementrpcService.UpdateCancelMissions(self.details.iddeletion)
                    .then(function (response) {
                        if (response.status = 200) {
                            console.log("UPDATED IN DB EC " + JSON.stringify(response.data));
                        }
                    }, function (reason) {
                        if (reason.status = 404) {
                            console.log("Bad Request EC " + JSON.stringify(reason));
                            self.erreurConflict();
                        }
                        if (reason.status = 401) {
                            console.log("Non Authorisé EC " + JSON.stringify(reason));
                            //self.erreurAuth();
                        }
                        if (response.status = 500) {
                            console.log("Erreur EC " + JSON.stringify(reason));
                            self.erreurAuth();
                        }
                    }).finally(function () { });
                }
            }, function (reason) {
                if (reason.status = 404) {
                    console.log("Bad Request EC " + JSON.stringify(reason));
                    self.erreurConflict();
                }
                if (reason.status = 401) {
                    console.log("Non Authorisé EC " + JSON.stringify(reason));
                    self.erreurAuth();
                }
                if (response.status = 500) {
                    console.log("Erreur EC " + JSON.stringify(reason));
                    self.erreurConflict();
                }
            }).finally(function () { });
        }
        else if (self.mandataireKindToDelete == 'CAC') {
            lancementrpcService.CacDeleteProjects(self.details.iddeletion)  //Nadia gives here the id.
           .then(function (response) {
               if (response.status = 200) {
                   console.log("Deleted CAC " + JSON.stringify(response.data));
                   self.DeletionOK = true;
                   //save into BDD
                   lancementrpcService.UpdateCancelMissions(self.details.iddeletion)
                   .then(function (response) {
                       if (response.status = 200) {
                           console.log("UPDATED IN DB EC " + JSON.stringify(response.data));
                       }
                   }, function (reason) {
                       if (reason.status = 404) {
                           console.log("Bad Request EC " + JSON.stringify(reason));
                           self.erreurConflict();
                       }
                       if (reason.status = 401) {
                           console.log("Non Authorisé EC " + JSON.stringify(reason));
                           self.erreurAuth();
                       }
                       if (response.status = 500) {
                           console.log("Erreur EC " + JSON.stringify(reason));
                           self.erreurConflict();
                       }
                   }).finally(function () { });
               }
           }, function (reason) {
               if (reason.status = 404) {
                   console.log("Bad Request EC " + JSON.stringify(reason));
                   self.erreurConflict();
               }
               if (reason.status = 401) {
                   console.log("Non Authorisé EC " + JSON.stringify(reason));
                   self.erreurAuth();
               }
               if (response.status = 500) {
                   console.log("Erreur EC " + JSON.stringify(reason));
                   self.erreurConflict();
               }
           }).finally(function () { });
        }
    }

    self.createRPCOnlyEC = function () {
        console.log("creation EC");
        lancementrpcService.PostExpertsCreateProject(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale,
                                                             self.details.siren, self.details.idSignataire)
                .then(function (response) {
                    if (response.status = 201) {
                        console.log("Created  " + response.data);

                        // #region SAVING INTO DB
                        /////async call to save in database : createmission or savemission 
                        lancementrpcService.SaveNewMissions(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.idSignataire,
                                                            self.eltChosen.nom, self.eltChosen.email, 'EC', 1)
                        .then(function (response) {
                            if ((response.status = 201) || (response.status = 200)) {
                                console.log("Created in DB  " + response.data);
                            }
                        }, function (reason) {
                            console.log("Erreur while saving ");//+ JSON.stringify(reason));
                        }).finally(function () { });;
                        // #endregion

                        //popin thank you
                        self.successlaunch();
                    }
                }, function (reason) {
                    if (reason.status = 409) {
                        console.log("Conflict while creating mission EC ");// + JSON.stringify(reason));
                        self.erreurConflict();
                    }
                    else if (reason.status = 400) {
                        console.log("BAd Request while creating mission EC ");// + JSON.stringify(reason));
                    }
                    else if (reason.status = 401) {
                        console.log("Non Authorisé while creating mission EC ");//+ JSON.stringify(reason));
                        self.erreurAuth();
                    }
                    else if (reason.status = 500) {
                        console.log("Erreur while creating mission EC ");//+ JSON.stringify(reason));
                    }
                }).finally(function () { });
    }

    self.createRPCOnlyCAC = function () {
        console.log("creation CAC");
        lancementrpcService.PostCacCreateProject(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale,
                                                         self.details.siren, self.details.idSignataire)
        .then(function (response) {
            if (response.status = 201) {
                console.log("Created CAC " + response.data);

                // #region SAVING INTO DB
                /////async call to save in database : createmission or savemission 
                lancementrpcService.SaveNewMissions(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.idSignataire,
                                                    self.eltChosen.nom, self.eltChosen.email, 'CAC', 1)
                .then(function (response) {
                    if ((response.status = 201) || (response.status = 200)) {
                        console.log("Created in DB  " + response.data);
                    }
                }, function (reason) {
                    console.log("Erreur while saving ");//+ JSON.stringify(reason));
                }).finally(function () { });;
                // #endregion

                //popin thank you
                self.successlaunch();
            }
        }, function (reason) {
            if (reason.status = 409) {
                console.log("Conflict ");// + JSON.stringify(reason));
                self.erreurConflict();
            }
            if (response.status = 400) {
                console.log("BAd Request");// + JSON.stringify(reason));
            }
            if (response.status = 401) {
                console.log("Non Authorisé");//+ JSON.stringify(reason));
                this.erreurAuth();
            }
            if (response.status = 500) {
                console.log("Erreur");//+ JSON.stringify(reason));
            }
        }).finally(function () { });
    }

    self.createRPC = function () {

        // #region EXPERTSCOMPTABLE
        if (self.ec == 'EC') {           
            self.details.id = 'ATEST12';//self.generateId();
            self.details.annee = '2016';//mannee; 
            self.details.montant = '79000';//mmontant;
            self.details.iddeletion = 'ATEST11'

            self.details.idClient = lancementrpcService.getSAPCustomed();
            self.details.raisonSociale = 'CITEO';//lancementrpcService.getUserInfo().clientName 
            self.details.idSignataire = self.eltChosen.uniquecsoecid;
            self.details.siren = 602045288;
            //    lancementrpcService.getSiren(self.details.idClient).then(function (response) {
            //    if ((response.status = 201) || (response.status = 200)) {
            //        console.log("Saved in DB  " + response.data);
            //    }
            //}, function (reason) {                
            //        console.log("Erreur while saving ");//+ JSON.stringify(reason));
            //}).finally(function () { });

            // #region MODIFICATION
            ////cancel previous mission if there is 
            if (self.IsModification) {
                console.log("modification in progress EC");
                self.modification().then(function (response)
                {
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
                console.log("creation EC");
                self.createRPCOnlyEC();
            }
            // #endregion

        }
        // #endregion 

        // #region CAC
        if (self.ec == 'CAC') {
            self.details.id = 'ATEST';//self.generateId();
            self.details.annee = '2016';//mannee;
            self.details.montant = '79000';//mmontant;
            self.iddeletion = 'TESTINGGG'

            self.details.idClient = lancementrpcService.getSAPCustomed();
            self.details.raisonSociale = 'CITEO';//lancementrpcService.getUserInfo().clientName 
            self.details.idSignataire = self.eltChosen.uniquecsoecid;
            self.details.siren = 602045288;
            //    lancementrpcService.getSiren(self.details.idClient).then(function (response) {
            //    if ((response.status = 201) || (response.status = 200)) {
            //        console.log("Saved in DB  " + response.data);
            //    }
            //}, function (reason) {                
            //        console.log("Erreur while saving ");//+ JSON.stringify(reason));
            //}).finally(function () { });

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
                console.log("DONE creation CAC");
                self.createRPCOnlyCAC();
            }
            // #endregion
        }
        // #endregion
    }
    // #endregion
     
    // #region POPIN 3
    this.lancement = function () { 
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

    // #endregion

    
    // #region CHANGE MISSION
    this.changeMission = function () {
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
    };
    // #endregion




    // #region DETAILS TO SEND WHILE CREATING OR MODIFYING

    self.fillDetails = function (mid, mannee, mmontant, msiren, middeletion) {
        self.details.id = 'TESTINGG';//mid;
        self.details.annee = '2016';//mannee;
        self.details.montant = '79000';//mmontant;
        self.details.iddeletion = 'TESTINGG';
        self.details.mandataireKindToDelete = 'EC';
        }
    // #endregion
};

