webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	//require('bootstrap/dist/css/bootstrap.css');
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(6);
	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(12);
	__webpack_require__(10);
	__webpack_require__(11);
	//require('bootstrap-toggle');
	__webpack_require__(153);
	__webpack_require__(26);
	__webpack_require__(25);
	__webpack_require__(29);

	angular.module('declaration-libs', ['ui.bootstrap', 'pascalprecht.translate', 'ngMessages', 'ngSanitize', 'ngTable', 'edc-commons', 'ngCookies']);

	__webpack_require__(151);
	angular.module('declaration').requires.push('declaration-libs');

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(4);
	var service = __webpack_require__(5);
	var moduleName = 'declaration.rpc';
	angular.module(moduleName, ['ui.bootstrap']);

	angular.module(moduleName).service('rpcService', ['declarationResource', 'userService', 'unauthorizedPopInService', service]);
	angular.module(moduleName).controller('rpcCtrl', ['rpcService', '$uibModal', '$scope', '$location', '$window', ctrl]);
	angular.module(moduleName).component('rpc', {
	    template: __webpack_require__(24),
	    controller: 'rpcCtrl',
	    controllerAs: 'rpcCtrl',
	    bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
	        ville: undefined
	    };
	    self.details = {
	        id: undefined,
	        idClient: undefined,
	        annee: undefined,
	        montant: undefined,
	        raisonSociale: undefined,
	        siren: undefined,
	        idSignataire: undefined, //at my level
	        iddeletion: undefined,
	        mandataireKindToDelete: undefined
	        //var idClient = 'A1100015';//session storage
	    };self.xmail = '';
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
	        self.client_number_SAP = /*3073;*/ /* 0000503394;*/ /*'0000521846';*/self.userInfo.idClientSAP;

	        console.log("init");
	        console.log("Client number SAP: " + self.client_number_SAP);

	        rpcService.getAnneesContractualisations(self.client_number_SAP).then(function (response) {
	            self.AnneeContractualisation = response.data;
	            console.log('self.AnneeContractualisation' + JSON.stringify(response) + '      ' + self.AnneeContractualisation);
	        }, function (reason) {
	            console.error('error retrieving date contractualisation: ' + JSON.stringify(reason));
	            self.errors = reason.data;
	        }).finally(function () {});

	        rpcService.getRpcs(self.client_number_SAP /*4648*/ /*0000521846*/).then(function (response) {
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
	        }).finally(function () {});
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
	    };

	    // #region rpc visualiation et telechargement

	    self.RpcFileExist = function (clientNumber, rpc) {
	        console.log('getrpc file ctrl');

	        rpcService.RpcFileExist( /*3073, 2016*/clientNumber, rpc.Annee).then(function (response) {

	            rpc.Exist = response.data[0].Exist;

	            console.log('rep' + JSON.stringify(response));
	            console.log('Rpc annee: ' + rpc.Annee + ' Exist: ' + rpc.Exist);
	        }, function (reason) {

	            console.error('submit - error : ' + JSON.stringify(reason));
	            self.errors = reason.data;
	        }).finally(function () {});
	    };

	    self.getRpcFile = function (action, rpcSelected) {
	        console.log('getrpc file attachement ctrl');
	        self.rpcSelectedannee = rpcSelected.Annee;
	        console.log('annee: ' + self.rpcSelectedannee);

	        rpcService.getRpcFile( /*3073, 2016*/self.client_number_SAP, self.rpcSelectedannee).then(function (response) {

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
	                } else {
	                    $window.location.href = self.rpcObject[0].UrlRpc + "?display=attachement";
	                }
	            }
	        }, function (reason) {

	            console.error('submit - error : ' + JSON.stringify(reason));
	            self.errors = reason.data;
	        }).finally(function () {});
	    };

	    var viewFile = function (url) {

	        var lecture = document.createElement('a');
	        lecture.href = url;
	        lecture.target = '_blank';
	        document.body.appendChild(lecture);
	        console.log('genrated file link : ', lecture);
	        lecture.click();
	    };

	    // #endregion

	    // #region POPIN 1 ERREUR AUTH

	    this.erreurAuth = function () {
	        //lauch some web service and see if everything is ok and then according you show popin erreur or popin success
	        if (self.modal_instance) self.modal_instance.close();
	        self.loading = true;

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(16),
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
	            template: __webpack_require__(17),
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
	            template: __webpack_require__(18),
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
	            template: __webpack_require__(19),
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
	            template: __webpack_require__(15),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    // #endregion


	    // #region POPIN 2
	    this.ChoixExpert = function () {
	        console.log('test : ' + self.ec + ' modif ? :  ' + self.IsModification);
	        if (self.modal_instance) self.modal_instance.close();
	        // self.loading = true;
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(20),
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
	            ville: undefined //reset
	        };self.IsModification = false;
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
	            mandataireKindToDelete: undefined
	        };

	        self.no_contact_found = false;

	        self.AnneeContractualisation = '';
	        self.$onInit();
	    };

	    self.textChanged = function () {
	        self.no_contact_found = false;
	        self.expertsList.length = 0; //clearing array
	        self.expertsListTemp.length = 0;
	        self.diplayMoreState = false; //the more button is disabled
	        self.validerState = false; //disable validate button
	        self.eltChosen = {
	            adresse: undefined,
	            civilite: undefined,
	            code_postal: undefined,
	            email: undefined,
	            nom: undefined,
	            prenom: undefined,
	            qualite: undefined,
	            uniquecsoecid: undefined //reset
	        };self.maxToDisplayMultiplicator = 1;

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
	                                        ville: response.data.contacts[index].ville
	                                    });
	                                }
	                            } else {
	                                self.expertsList.push({
	                                    adresse: response.data.contacts.adresse,
	                                    civilite: response.data.contacts.civilite,
	                                    code_postal: response.data.contacts.code_postal,
	                                    email: response.data.contacts.email,
	                                    nom: response.data.contacts.nom,
	                                    prenom: response.data.contacts.prenom,
	                                    qualite: response.data.contacts.qualite,
	                                    uniquecsoecid: response.data.contacts.uniquecsoecid,
	                                    ville: response.data.contacts.ville
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
	                    } else {
	                        //console.log("heerer");
	                        //show to enter at least 2 values
	                        self.result = '';
	                        self.expertsList.length = 0; //clearing array
	                        self.expertsListTemp.length = 0;
	                        self.diplayMoreState = false; //the more button is disabled
	                        self.validerState = false; //disable validate button
	                        self.eltChosen = {
	                            adresse: undefined,
	                            civilite: undefined,
	                            code_postal: undefined,
	                            email: undefined,
	                            nom: undefined,
	                            prenom: undefined,
	                            qualite: undefined,
	                            uniquecsoecid: undefined //reset
	                        };self.maxToDisplayMultiplicator = 1;
	                    }
	                }, function (reason) {
	                    self.no_contact_found = true;
	                    console.error(' - error : ' + JSON.stringify(reason));
	                }).finally(function () {});
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
	                                if (response.data.data.length > 0) {
	                                    for (var index = 0; index < response.data.data.length; index++) {
	                                        self.expertsList.push({
	                                            adresse: response.data.data[index].adresse,
	                                            civilite: response.data.data[index].civilite,
	                                            code_postal: response.data.data[index].code_postal,
	                                            email: response.data.data[index].email,
	                                            nom: response.data.data[index].nom,
	                                            prenom: response.data.data[index].prenom,
	                                            ville: response.data.data[index].ville,
	                                            id: response.data.data[index].id
	                                        });
	                                    }
	                                } else {
	                                    self.no_contact_found = true;
	                                }
	                            } else {
	                                console.log("we shouldnt come here CAC");
	                            }
	                            //display the button "display more"
	                            if (response.data.fin == false) {
	                                self.diplayMoreState = true;
	                                console.log("self.displaymorestate  " + self.diplayMoreState);
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
	                    } else {

	                        console.log("inferior to min of 2");
	                        //show to enter at least 2 values
	                        self.result = '';
	                        self.expertsList.length = 0; //clearing array
	                        self.expertsListTemp.length = 0;
	                        self.diplayMoreState = false; //the more button is disabled
	                        self.validerState = false; //disable validate button
	                        self.eltChosen = {
	                            adresse: undefined,
	                            civilite: undefined,
	                            code_postal: undefined,
	                            email: undefined,
	                            nom: undefined,
	                            prenom: undefined,
	                            qualite: undefined,
	                            uniquecsoecid: undefined //reset
	                        };self.maxToDisplayMultiplicator = 1;
	                    }
	                }, function (reason) {
	                    self.no_contact_found = true;
	                    console.error(' error : ' + JSON.stringify(reason.data));
	                }).finally(function () {});
	            }
	            // #endregion
	        } else {
	            //console.log("heerer");
	            //show to enter at least 2 values
	            self.result = '';
	            self.expertsList.length = 0; //clearing array
	            self.expertsListTemp.length = 0;
	            self.diplayMoreState = false; //the more button is disabled
	            self.validerState = false; //disable validate button
	            self.eltChosen = {
	                adresse: undefined,
	                civilite: undefined,
	                code_postal: undefined,
	                email: undefined,
	                nom: undefined,
	                prenom: undefined,
	                qualite: undefined,
	                uniquecsoecid: undefined //reset
	            };self.maxToDisplayMultiplicator = 1;
	        }
	    };

	    self.displayMore = function () {
	        self.maxToDisplayMultiplicator = self.maxToDisplayMultiplicator + 1;
	        self.diplayMoreState = false; //the more button is disabled
	        self.validerState = false; //disable validate button
	        self.eltChosen = {
	            adresse: undefined,
	            civilite: undefined,
	            code_postal: undefined,
	            email: undefined,
	            nom: undefined,
	            prenom: undefined,
	            qualite: undefined,
	            uniquecsoecid: undefined,
	            ville: undefined //reset
	        };self.expertsListTemp.length = 0;

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
	                                    ville: response.data.contacts[index].ville
	                                });
	                            }
	                            for (var i = defaultMax * (self.maxToDisplayMultiplicator - 1); i < self.expertsListTemp.length; i++) {
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
	                }).finally(function () {});
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
	                                    id: response.data.data[index].id
	                                });
	                            }
	                            for (var i = defaultMax * (self.maxToDisplayMultiplicator - 1); i < self.expertsListTemp.length; i++) {
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
	                }).finally(function () {});
	            }
	            // #endregion
	        } else {
	            //show to enter at least 2 values
	            self.result = '';
	        }
	    };

	    self.eltSelected = function (expertchoosen) {
	        //turn on validate button
	        self.validerState = true;

	        self.eltChosen.adresse = expertchoosen.adresse, self.eltChosen.civilite = expertchoosen.civilite, self.eltChosen.code_postal = expertchoosen.code_postal, self.eltChosen.email = expertchoosen.email, self.eltChosen.nom = expertchoosen.nom, self.eltChosen.prenom = expertchoosen.prenom;

	        if (self.ec == 'EC') {
	            console.log('Elt selected EC');
	            self.eltChosen.qualite = expertchoosen.qualite, self.eltChosen.uniquecsoecid = expertchoosen.uniquecsoecid;
	        } else {
	            console.log('Elt selected CAC');
	            self.eltChosen.uniquecsoecid = expertchoosen.id;
	        }

	        self.eltChosen.ville = expertchoosen.ville, console.log("Selected is " + self.eltChosen.nom + "  " + self.eltChosen.uniquecsoecid);
	    };

	    self.modification = function () {
	        //self.mandataireKindToDelete = 'EC';//NADIA should send it as parameter
	        console.log("inside modification   mandatairekindtodelete " + self.mandataireKindToDelete);

	        if (rpcService.IsConseiller()) {
	            console.log("Non Authorisé Car Conseiller ");
	            rpcService.unAuthPopinOpen();
	        } else {
	            console.log("Pas Conseiller ");

	            if (self.mandataireKindToDelete == 'EC') {
	                return rpcService.ExpertsDeleteProjects(self.details.iddeletion) //Nadia gives here the id.
	                .then(function (response) {
	                    if (response.status == 200 || response.status == 201) {
	                        console.log("Deleted EC " + JSON.stringify(response.data));
	                        self.DeletionOK = true;
	                        console.log('deletion OK ' + self.DeletionOK);
	                        //save into BDD
	                        console.log('Starting Saving into BDD');
	                        rpcService.UpdateCancelMissions(self.details.iddeletion).then(function (response) {
	                            if (response.status == 200) {
	                                console.log("UPDATED IN DB EC " + JSON.stringify(response.data));
	                            }
	                        }, function (reason) {
	                            if (reason.status == 404) {
	                                console.log("Bad Request EC " + JSON.stringify(reason));
	                                self.erreurConflict();
	                            } else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
	                                console.log("Non Authorisé EC " + JSON.stringify(reason));
	                                self.erreurAuth();
	                            } else if (reason.status == 500) {
	                                console.log("Erreur EC " + JSON.stringify(reason));
	                                self.erreurAuth();
	                            }
	                        }).finally(function () {});
	                    }
	                }, function (reason) {
	                    if (reason.status == 404) {
	                        console.log("Bad Request EC " + JSON.stringify(reason));
	                        self.erreurSurvenue();
	                    } else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
	                        console.log("Non Authorisé EC " + JSON.stringify(reason));
	                        self.erreurAuth();
	                    } else if (reason.status == 500) {
	                        console.log("Erreur EC " + JSON.stringify(reason));
	                        self.impossibleModifier();
	                    }
	                }).finally(function () {});
	            } else if (self.mandataireKindToDelete == 'CAC') {
	                return rpcService.CacDeleteProjects(self.details.iddeletion).then(function (response) {
	                    if (response.status == 200 || response.status == 201) {
	                        console.log("Deleted CAC " + JSON.stringify(response.data));
	                        self.DeletionOK = true;
	                        //save into BDD
	                        rpcService.UpdateCancelMissions(self.details.iddeletion).then(function (response) {
	                            if (response.status == 200 || response.status == 201) {
	                                console.log("UPDATED IN DB CAC " + JSON.stringify(response.data));
	                            }
	                        }, function (reason) {
	                            if (reason.status == 404) {
	                                console.log("Bad Request EC " + JSON.stringify(reason));
	                                self.erreurConflict();
	                            } else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
	                                console.log("Non Authorisé EC " + JSON.stringify(reason));
	                                self.erreurAuth();
	                            } else if (reason.status == 500) {
	                                console.log("Erreur EC " + JSON.stringify(reason));
	                                self.erreurConflict();
	                            }
	                        }).finally(function () {});
	                    }
	                }, function (reason) {
	                    if (reason.status == 404) {
	                        console.log("Bad Request EC " + JSON.stringify(reason));
	                        self.erreurSurvenue();
	                    } else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
	                        console.log("Non Authorisé EC " + JSON.stringify(reason));
	                        self.erreurAuth();
	                    } else if (reason.status == 500) {
	                        console.log("Erreur EC " + JSON.stringify(reason));
	                        self.impossibleModifier();
	                    }
	                }).finally(function () {});
	            }
	        }
	    };

	    self.createRPCOnlyEC = function () {
	        console.log("creation EC");

	        console.log("id:  " + self.details.id);
	        console.log("idclient: " + self.details.idClient);
	        console.log("annee:  " + self.details.annee);
	        console.log("montant: " + self.details.montant);
	        console.log("raison sociale: " + self.details.raisonSociale);
	        console.log("siren:  " + self.details.siren);
	        console.log("signataire:  " + self.details.idSignataire);

	        if (rpcService.IsConseiller()) {
	            console.log("Non Authorisé Car Conseiller ");
	            rpcService.unAuthPopinOpen();
	        } else {
	            console.log("Pas Conseiller ");

	            rpcService.PostExpertsCreateProject(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale, self.details.siren, self.details.idSignataire).then(function (response) {
	                if (response.status == 201) {
	                    console.log("Created  " + response.data);

	                    // #region SAVING INTO DB
	                    /////async call to save in database : createmission or savemission
	                    rpcService.SaveNewMissions(self.details.id, rpcService.getUserInfo().idClientSAP /*self.details.idClient*/, self.details.annee, self.details.montant, self.details.idSignataire, self.eltChosen.nom, self.eltChosen.civilite, self.eltChosen.email, 'EC', 1).then(function (response) {
	                        if (response.status == 201 || response.status == 200) {
	                            console.log("Created in DB  " + response.data);
	                            //popin thank you
	                            self.successlaunch();
	                        }
	                    }, function (reason) {
	                        console.log("Erreur while saving "); //+ JSON.stringify(reason));
	                        console.log("ERROR BUT NO POP UP 1 "); //+ JSON.stringify(reason))
	                    }).finally(function () {});;
	                    // #endregion

	                }
	            }, function (reason) {
	                if (reason.status == 409) {
	                    console.log("Conflict while creating mission EC "); // + JSON.stringify(reason));
	                    self.erreurConflict();
	                } else if (reason.status == 400) {
	                    console.log("BAd Request while creating mission EC "); // + JSON.stringify(reason));
	                    self.erreurSurvenue();
	                } else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
	                    console.log("Non Authorisé while creating mission EC "); //+ JSON.stringify(reason));
	                    self.erreurAuth();
	                } else if (reason.status == 500) {
	                    console.log("Erreur while creating mission EC "); //+ JSON.stringify(reason));
	                    self.erreurSurvenue();
	                }
	            }).finally(function () {});
	        }
	    };

	    self.createRPCOnlyCAC = function () {
	        console.log("creation CAC");
	        console.log("id:  " + self.details.id);
	        console.log("idclient: " + self.details.idClient);
	        console.log("annee:  " + self.details.annee);
	        console.log("montant: " + self.details.montant);
	        console.log("raison sociale: " + self.details.raisonSociale);
	        console.log("siren:  " + self.details.siren);
	        console.log("signataire:  " + self.details.idSignataire);
	        var mydata = {
	            id: self.details.id,
	            idClient: self.details.idClient,
	            annee: self.details.annee,
	            montant: self.details.montant,
	            siren: self.details.siren,
	            idSignataire: self.details.idSignataire
	            //self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale,
	            //                                                 self.details.siren, self.details.idSignataire


	        };if (rpcService.IsConseiller()) {
	            console.log("Non Authorisé Car Conseiller ");
	            rpcService.unAuthPopinOpen();
	        } else {
	            console.log("Pas Conseiller ");

	            rpcService.PostCacCreateProject(mydata).then(function (response) {
	                if (response.status == 201 || response.status == 200) {
	                    console.log("Created CAC " + response.data);

	                    // #region SAVING INTO DB
	                    /////async call to save in database : createmission or savemission

	                    rpcService.SaveNewMissions(self.details.id, rpcService.getUserInfo().idClientSAP /*self.details.idClient*/, self.details.annee, self.details.montant, self.details.idSignataire, self.eltChosen.nom, self.eltChosen.civilite, self.eltChosen.email, 'CAC', 1).then(function (response) {
	                        if ((response.status = 201) || (response.status = 200)) {
	                            console.log("Created in DB  " + response.data);
	                            //popin thank you
	                            self.successlaunch();
	                        }
	                    }, function (reason) {
	                        console.log("Erreur while saving " + JSON.stringify(reason));
	                        console.log("ERROR BUT NO POP UP 2 "); //+ JSON.stringify(reason))
	                    }).finally(function () {});;
	                    // #endregion

	                }
	            }, function (reason) {
	                if (reason.status == 409) {
	                    console.log("Conflict " + JSON.stringify(reason));
	                    self.erreurConflict();
	                } else if (reason.status == 400) {
	                    console.log("BAd Request" + JSON.stringify(reason));
	                    self.erreurSurvenue();
	                } else if (reason.status == 401 || reason.status == 402 || reason.status == 403) {
	                    console.log("Non Authorisé" + JSON.stringify(reason));
	                    self.erreurAuth();
	                } else if (reason.status == 500) {
	                    console.log("Erreur" + JSON.stringify(reason));
	                    self.erreurSurvenue();
	                }
	            }).finally(function () {});
	        }
	    };

	    self.createRPC = function () {

	        if (rpcService.IsConseiller()) {
	            console.log("Non Authorisé Car Conseiller ");
	            rpcService.unAuthPopinOpen();
	        } else {
	            console.log("Pas Conseiller ");

	            // #region EXPERTSCOMPTABLE
	            if (self.ec == 'EC') {
	                self.details.id = rpcService.generateId();
	                //self.details.annee = '2016';//mannee;
	                //self.details.montant = '79000';//mmontant;
	                //self.details.iddeletion = 'ATEST16'

	                self.details.idClient = rpcService.getUserInfo().idClientSAP; //rpcService.getSAPCustomed();
	                self.details.raisonSociale = rpcService.getUserInfo().clientName; //'ECO EMBALLAGES';//
	                self.details.idSignataire = self.eltChosen.uniquecsoecid;

	                rpcService.getSirets(rpcService.getUserInfo().idClientSAP).then(function (response) {

	                    console.log("Id client SAP: " + rpcService.getUserInfo().idClientSAP);
	                    console.log("Siret EC response " + response.data);
	                    console.log("Siret Ec: " + response.data.Siret);
	                    if (response.data.Siret == null) self.details.siren = '';else self.details.siren = response.data.Siret.slice(0, 9);
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
	                    console.log("Erreur siren EC"); //+ JSON.stringify(reason));
	                }).finally(function () {});
	                /*602045288;*/
	            }
	            // #endregion

	            // #region CAC
	            if (self.ec == 'CAC') {
	                self.details.id = rpcService.generateId();
	                //self.details.annee = '2016';//mannee;
	                //self.details.montant = '79000';//mmontant;
	                //self.iddeletion = 'TESTINGGG'

	                self.details.idClient = rpcService.getUserInfo().idClientSAP; //rpcService.getSAPCustomed();
	                self.details.raisonSociale = rpcService.getUserInfo().clientName; //'ECO EMBALLAGES';//rpcService.getUserInfo().clientName
	                self.details.idSignataire = self.eltChosen.uniquecsoecid;

	                //MODIFIER APPELER GET SIRETS
	                rpcService.getSirets(rpcService.getUserInfo().idClientSAP).then(function (response) {

	                    console.log("Id client SAP: " + rpcService.getUserInfo().idClientSAP);
	                    console.log("Siret CAC response " + response.data);
	                    console.log("Siret CAC: " + response.data.Siret);
	                    if (response.data.Siret == null) self.details.siren = '';else self.details.siren = response.data.Siret.slice(0, 9);
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
	                    console.log("Erreur siren CAC "); //+ JSON.stringify(reason));
	                }).finally(function () {});
	            }
	            // #endregion
	        }
	    };
	    // #endregion

	    // #region POPIN 3
	    this.lancement = function (rpcSelected) {
	        console.log('lancement');
	        if (self.modal_instance) self.modal_instance.close();
	        self.loading = true;

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(21),
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
	        if (self.modal_instance) self.modal_instance.close();
	        self.loading = true;
	        self.IsModification = true;
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(22),
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
	        if (self.modal_instance) self.modal_instance.close();
	        self.selectedRpc = rpc;
	        self.loading = true;
	        self.IsModification = true;
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(23),
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
	        rpcService.getAmounts(rpcService.getUserInfo().idClientSAP, mannee).then(function (response) {
	            if (response.status == 201 || response.status == 200) {
	                console.log(" amount charged ");
	                if (response.data == 'undefined') self.details.montant = 0;else self.details.montant = response.data;
	                console.log("montant: " + self.details.montant);
	            }
	        }, function (reason) {
	            console.log("failed amount charged  "); //+ JSON.stringify(reason));
	        }).finally(function () {});

	        //mmontant; //historique declaration (montant estime)
	        self.details.iddeletion = middeletion;
	        self.details.mandataireKindToDelete = mmandataireKindToDelete; //'EC';
	        console.log('inside fillDetails');
	        console.log('annee: ' + mannee);
	        console.log('mission Id: ' + middeletion);
	        console.log('type expert: mmandataireKindToDelete' + mmandataireKindToDelete);
	        console.log('type expert: self.details.mandataireKindToDelete' + self.details.mandataireKindToDelete);
	    };
	    // #endregion

	    this.validationCode = function () {
	        self.invalidCode = false;
	        self.loading = true;

	        // Post du code
	        var postData = {
	            MissionId: self.selectedRpc.MissionId,
	            Annee: self.selectedRpc.Annee,
	            IdClient: self.client_number_SAP, //rpcService.getSAPCustomed(),
	            ActivationCode: self.mCodeActivation
	        };
	        console.log('validationCode - postData', postData);
	        rpcService.activateCode(postData).then(function (response) {
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
	        }).finally(function () {
	            self.loading = false;
	        });
	    };

	    self.codeFocus = function () {
	        self.invalidCode = false;
	    };

	    function openPopIn(template) {
	        if (self.modal_instance) self.modal_instance.close();

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(154)(template),
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	function rpcService(declarationResource, userService, unauthorizedPopInService) {
	    var self = this;

	    this.getRpcs = declarationResource.getRpcs;
	    this.RpcFileExist = declarationResource.RpcFileExist;
	    this.getRpcFile = declarationResource.getRpcFile;

	    this.user = {
	        numero_client: undefined,
	        id_declarant: undefined

	    };

	    this.getUserInfos = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        self.user.idClientSAP = userService.getUserIdSAP();
	        return self.user;
	    };

	    // #region EC
	    self.GetExpertsByName = function (name, max) {
	        return declarationResource.GetExpertByName(name, max);
	    };

	    self.unAuthPopinOpen = function () {
	        unauthorizedPopInService.open();
	    };

	    self.PostExpertsCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
	        return declarationResource.ExpertsCreateProject(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
	    };

	    self.ExpertsDeleteProjects = function (id) {
	        console.log("deleting projects id " + id);
	        return declarationResource.ExpertsDeleteProject(id);
	    };

	    self.ExpertsGetProjects = function (id) {
	        return declarationResource.ExpertsGetProject(id);
	    };
	    // #endregion

	    // #region CAC
	    self.GetCacByNames = function (name, max) {
	        return declarationResource.GetCacByName(name, max);
	    };

	    self.PostCacCreateProject = function (mydata) {
	        return declarationResource.CacCreateProject(mydata);
	    };

	    self.CacDeleteProjects = function (id) {
	        return declarationResource.CacDeleteProject(id);
	    };

	    self.activateCode = function (data) {
	        return declarationResource.activateCacCode(data);
	    };
	    // #endregion

	    // #region OTHERS

	    self.getAnneesContractualisations = function (ClientID) {
	        return declarationResource.getAnneesContractualisation(ClientID);
	    };

	    self.getUserInfo = function () {
	        self.user = userService.getUser();
	        return self.user;
	    };

	    self.IsConseiller = function () {
	        return userService.isConseiller();
	    };

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
	        } else if (SapCustomed.toString().length < 10) {
	            var l = 10 - SapCustomed.length;
	            //complete with 0 in front
	            for (var i = 0; i < l; i++) {
	                SapCustomed = '0' + SapCustomed;
	            }
	            console.log("sapcustomed: CITEO:  " + self.getUserInfo().idClientSAP);
	            return SapCustomed;
	        }
	        //}
	    };

	    self.generateId = function () {
	        var today = new Date();
	        var d = today.getDate();
	        var mmotemp = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	        var mmo = mmotemp[today.getMonth()];
	        var yyyy = today.getFullYear();
	        var h = today.getHours() > 12 ? today.getHours() - 12 : today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
	        var m = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
	        var s = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

	        if (d < 10) {
	            d = '0' + d;
	        }
	        today = yyyy + mmo + d + h + m + s;
	        return today;
	    };

	    /*** FONCTION OBSOLETE ?? on appel que getSirets ***/
	    self.getSiren = function (idSAP) {
	        return declarationResource.getSiren(idSAP);
	    };

	    self.SaveNewMissions = function (idMission, clientNumber, annee, contribTotal, signataire, nom, civilite, email, typeexpert, statut) {
	        return declarationResource.SaveNewMission(idMission, clientNumber, annee, contribTotal, signataire, nom, civilite, email, typeexpert, statut);
	    };

	    self.UpdateCancelMissions = function (idMission) {
	        return declarationResource.UpdateCancelMission(idMission);
	    };

	    self.getAmounts = function (idSAp, year) {
	        return declarationResource.getAmount(idSAp, year);
	    };

	    self.getSirets = function (idSAp) {
	        return declarationResource.getSiret(idSAp);
	    };

	    // #endregion

	    return self;
	}

	module.exports = rpcService;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <h1>{{'labels.declaration.uvc.popin_suppression.TITLE' | translate}}</h1>\r\n  <a class=\"close-icon\" ng-click=\"historiqueCtrl.closeModalSuppression()\"></a>\r\n\r\n   <p data-ng-if=\"!historiqueCtrl.suppresion_ok\">{{'labels.declaration.uvc.popin_suppression.ERREUR' | translate}}</p>\r\n    <p data-ng-if=\"historiqueCtrl.suppresion_ok\">{{'labels.declaration.uvc.popin_suppression.SUCCES' | translate}}</p>\r\n</div>";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  {{'labels.declaration.rpc.RPC_MERCI' | translate}} </h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>{{'labels.declaration.rpc.RPC_CONFIRMATION_1' | translate}}</p>\r\n    <p>{{'labels.declaration.rpc.RPC_CONFIRMATION_2' | translate}}</p>\r\n\r\n    <p>{{'labels.declaration.rpc.RPC_CONFIRMATION_3' | translate}} <a href=\"/mon-espace/declaration/documents/rpc\" onclick=\"location.reload()\">{{'labels.declaration.rpc.RPC_CONFIRMATION_4' | translate}}</a></p>\r\n</div>";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  {{'labels.declaration.rpc.RPC_ERREUR_1' | translate}} </h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>{{'labels.declaration.rpc.RPC_ERREUR_2' | translate}}</p>\r\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  {{'labels.declaration.rpc.RPC_ERREUR_1' | translate}} </h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>{{'labels.declaration.rpc.RPC_ERREUR_3' | translate}}<a href=\"/mon-espace/declaration/accueil\">{{'labels.declaration.rpc.RPC_ERREUR_4' | translate}}</a></p>\r\n</div>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  {{'labels.declaration.rpc.RPC_ERREUR_SURVENUE' | translate}} </h1>\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <!--<p>{{'labels.declaration.rpc.RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER_MSG' | translate}}</p>-->\r\n</div>";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  {{'labels.declaration.rpc.RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER' | translate}} </h1>\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>{{'labels.declaration.rpc.RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER_MSG' | translate}}</p>\r\n</div>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1 data-ng-if=\"!rpcCtrl.IsModification\">{{'labels.declaration.rpc.RPC_LAUNCH_1' | translate}}</h1>\r\n    <h1 data-ng-if=\"rpcCtrl.IsModification\">{{'labels.declaration.rpc.RPC_LAUNCH_2' | translate}}</h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n\r\n    <p><b> {{'labels.declaration.rpc.RPC_TEXT_TOP_BAR' | translate}} </b></p>\r\n\r\n    <div class=\"ctrl_form\">\r\n        <div id=\"recherche\">\r\n            <label for=\"id_recherche\" id=\"recherche\">&nbsp;</label>\r\n            <input type=\"text\" name=\"recherche\" id=\"id_recherche\" placeholder=\"{{'labels.declaration.rpc.RPC_SEARCH_BAR' | translate}}\"\r\n                   data-ng-model=\"rpcCtrl.someVal\" data-ng-change=\"rpcCtrl.textChanged()\">\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"table_produits\" data-ng-show=\"rpcCtrl.expertsList.length\">\r\n        <table id=\"choice_expert\">\r\n            <tr>\r\n                <th>{{'labels.declaration.rpc.RPC_LAUNCH_3' | translate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                <th>{{'labels.declaration.rpc.RPC_LAUNCH_4' | translate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                <th>{{'labels.declaration.rpc.RPC_LAUNCH_5' | translate}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n            </tr>\r\n            <tr data-ng-repeat=\"myexpert in rpcCtrl.expertsList\" data-ng-click=\"rpcCtrl.eltSelected(myexpert)\" ng-class=\"{'row_selected': myexpert.email===rpcCtrl.eltChosen.email && myexpert.nom===rpcCtrl.eltChosen.nom && myexpert.prenom===rpcCtrl.eltChosen.prenom}\">\r\n                <td>{{myexpert.nom}}  {{myexpert.prenom}}</td>\r\n                <td>{{myexpert.adresse}} <br /> {{myexpert.code_postal}}  {{myexpert.ville}} </td>\r\n                <td>{{myexpert.email}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n\r\n    <p data-ng-if=\"rpcCtrl.no_contact_found\">  {{'labels.declaration.rpc.RPC_NO_RESULT_FOUND' | translate}}  </p>\r\n\r\n    <!--data-ng-hide=\"!rpcCtrl.diplayMoreState\"  ng-if=\"rpcCtrl.expertsList.length>0\"-->\r\n    <button class=\"btnn\" id=\"ajout\" data-ng-click=\"rpcCtrl.displayMore()\" data-ng-disabled=\"!rpcCtrl.diplayMoreState\" >{{'labels.declaration.rpc.RPC_LAUNCH_6' | translate}}</button>\r\n\r\n    <!--type=\"submit\" data-ng-disabled=\"authentificationForm.$invalid || authentificationCtrl.checkErrors()\" class=\"btn btn-default suivant\"-->\r\n    <button type=\"submit\" class=\"suivant btnn\" data-ng-click=\"rpcCtrl.createRPC()\" data-ng-model=\"rpcCtrl.validerState\" data-ng-disabled=\"!rpcCtrl.validerState\">{{'labels.transverse.BTN_VALIDER' | translate}}</button>\r\n    <input id=\"CloseBtn\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"rpcCtrl.closeModal()\" type=\"button\">\r\n\r\n</div>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n\r\n    <h1>{{'labels.declaration.rpc_popins.LANCER_MISSION_TITLE' | translate}}</h1>\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>{{'labels.declaration.rpc_popins.LANCER_MISSION_TEXT_1' | translate}}</p>\r\n\r\n    <p>{{'labels.declaration.rpc_popins.LANCER_MISSION_TEXT_2' | translate}}</p>\r\n\r\n    <p>{{'labels.declaration.rpc_popins.LANCER_MISSION_TEXT_3' | translate}}</p><br />\r\n\r\n    <p><b>{{'labels.declaration.rpc_popins.LANCER_MISSION_CHOIX_EXPERT' | translate}}</b></p><br />\r\n\r\n    <input type=\"radio\" ng-model=\"rpcCtrl.ec\" value=\"EC\" /><label class=\"info-check\">{{'labels.declaration.rpc_popins.EC' | translate}} </label>\r\n    <input type=\"radio\" ng-model=\"rpcCtrl.ec\" value=\"CAC\" /><label class=\"info-check\">{{'labels.declaration.rpc_popins.CAC' | translate}}</label><br /> <br />\r\n\r\n\r\n    <button class=\"suivant btnn\" ng-click=\"rpcCtrl.ChoixExpert()\" data-ng-disabled=\"!rpcCtrl.ec\">\r\n        {{'labels.transverse.BTN_SUIVANT' | translate}}\r\n    </button>\r\n    <input id=\"CloseBtn\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"rpcCtrl.closeModal()\" type=\"button\">\r\n\r\n</div>\r\n\r\n<!--div class=\"mymodal\" ng-show=\"rpcCtrl.stepPopin==2\">\r\n    <h1>LANCER LA MISSION DE RAPPORT DE PROCÉDURES CONVENUES</h1>\r\n\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n\r\n\r\n    <div class=\"ctrl_form\">\r\n        <div id=\"recherche\">\r\n            <label for=\"id_recherche\" id=\"recherche\">&nbsp;</label>\r\n            <input type=\"text\" name=\"recherche\" id=\"id_recherche\" placeholder=\"{{'labels.relationClient.choixEntreprise.SEARCH' | translate}}\"\r\n                   data-ng-model=\"rpcCtrl.someVal\" data-ng-change=\"rpcCtrl.textChanged()\" data-ng-Trim=\"false\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"table_produits\">\r\n        <table id=\"choice_expert\">\r\n            <tr>\r\n                <th>Nom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                <th>Adresse &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                <th>Adresse e-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n            </tr>\r\n            <tr data-ng-repeat=\"myexpert in rpcCtrl.expertsList\" data-ng-click=\"rpcCtrl.expertSelected\">\r\n                <td>{{myexpert.name}}</td>\r\n                <td>{{myexpert.adresse}}</td>\r\n                <td>{{myexpert.mail}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <button id=\"ajout\" data-ng-click=\"rpcCtrl.displayMore()\">Afficher plus</button>\r\n\r\n    <button class=\"suivant\" ng-click=\"\">VALIDER</button>\r\n\r\n    <button id=\"CloseBtn\" ng-click=\"rpcCtrl.closeModal()\">Annuler</button>\r\n</div>\r\n\r\n<div class=\"mymodal\" ng-show=\"rpcCtrl.stepPopin==3\" >\r\n\r\n    <h1>ACTIVER LE CODE DE VALIDATION DU RPC</h1>\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>Ce code vous est transmis par votre Expert par email et vous permet de nous transmettre vos données RPC en toute sécurité.</p>\r\n\r\n    <input type=\"text\" name=\"code\" placeholder=\"Saisir mon code\" ng-model=\"rpcCtrl.codeActivation\"  ><br /> <br />\r\n\r\n    <button class=\"btn suivant\" ng-click=\"validationCode()\" ng-disabled=\"rpcCtrl.codeActivation=''\">\r\n        {{'labels.transverse.BTN_VALIDER' | translate}}\r\n    </button>\r\n    <a href=\"\" ng-click=\"rpcCtrl.closeModal()\">\r\n        {{'labels.transverse.BTN_ANNULER' | translate}}\r\n    </a>\r\n\r\n</div-->\r\n";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n\r\n    <h1>{{'labels.declaration.rpc.RPC_CHANGE_1' | translate}}</h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n\r\n    <p><b>{{'labels.declaration.rpc.RPC_CHANGE_2' | translate}}</b></p><br />\r\n\r\n    <input type=\"radio\" ng-model=\"rpcCtrl.ec\" value=\"EC\" /><label class=\"info-check\">{{'labels.declaration.rpc.RPC_CHANGE_3' | translate}}</label>\r\n    <input type=\"radio\" ng-model=\"rpcCtrl.ec\" value=\"CAC\" /><label class=\"info-check\">{{'labels.declaration.rpc.RPC_CHANGE_4' | translate}}</label><br /> <br />\r\n\r\n \r\n    <button class=\"suivant btnn\" ng-click=\"rpcCtrl.ChoixExpert()\" ng-disabled=\"!rpcCtrl.ec\">\r\n        {{'labels.transverse.BTN_SUIVANT' | translate}}\r\n    </button>\r\n    <input id=\"CloseBtn\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"rpcCtrl.closeModal()\" type=\"button\">\r\n\r\n</div>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n<form name=\"codeActivationForm\" ng-submit=\"rpcCtrl.validationCode()\" novalidate>\r\n    <h1>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_TITLE' | translate}}</h1>\r\n    <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n    <p>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_TEXT' | translate}}</p>\r\n\r\n    <div>\r\n      <input type=\"text\" name=\"code\" placeholder=\"Saisir mon code\" ng-model=\"rpcCtrl.mCodeActivation\" ng-focus=\"rpcCtrl.codeFocus()\" required><br /> <br />\r\n      <div ng-if=\"rpcCtrl.invalidCode\">\r\n        <label>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_INVALID' | translate}}</label>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"valider suivant\" type=\"submit\" ng-disabled=\"codeActivationForm.$invalid\">\r\n        {{'labels.transverse.BTN_VALIDER' | translate}}\r\n    </button>\r\n    <input id=\"CloseBtn\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"rpcCtrl.closeModal()\" type=\"button\">\r\n</form>\r\n\r\n </div>\r\n";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tbody_compte\">\r\n    <table id=\"tbl_rpc\">\r\n        <tbody>\r\n            <tr data-ng-repeat=\"rpc in rpcCtrl.rpcs | limitTo:3\">\r\n                <td><b>{{'labels.declaration.rpc.RPC_INTITULE' | translate}} {{rpc.Annee}}</b></td>\r\n                <td>\r\n                    <label ng-if=\"rpc.Statut=='1'\">{{'labels.declaration.rpc.RPC_STATUT_1' | translate}}</label>\r\n                    <label ng-if=\"rpc.Statut=='2'\">{{'labels.declaration.rpc.RPC_STATUT_2' | translate}} </label>\r\n                    <label ng-if=\"rpc.Statut==''\">{{'labels.declaration.rpc.RPC_STATUT_A_FAIRE' | translate}} </label>\r\n                    <label ng-if=\"rpc.Statut=='0'\">{{'labels.declaration.rpc.RPC_STATUT_A_VENIR' | translate}} </label>\r\n                </td>\r\n                <td>\r\n                    <input type=\"button\" class=\"btn\" ng-click=\"rpcCtrl.lancement(rpc)\" ng-if=\"rpc.Statut==''\" value=\"{{'labels.declaration.rpc.BUTTON_LANCER_MISSION' | translate}}\" />\r\n                    <input type=\"button\" class=\"btn\" ng-click=\"rpcCtrl.changeMission(rpc)\" ng-if=\"rpc.Statut=='1'\" value=\"{{'labels.declaration.rpc.BUTTON_MODIFIER' | translate}}\" />\r\n                    <input type=\"button\" class=\"btn\" ng-click=\"rpcCtrl.codeActivation(rpc)\" ng-if=\"rpc.Statut=='1'&&rpc.TypeExpert=='CAC'\" value=\"{{'labels.declaration.rpc.CODE_ACTIVATION' | translate}}\" />\r\n\r\n                    <label ng-if=\"rpc.Statut=='2'&&rpc.Exist==false\">{{'labels.declaration.rpc.RPC_ERROR_OCCUR' | translate}}</label>\r\n                    <!--<a href=\"\" class=\"acte\" target=\"_blank\" ng-if=\"rpc.Statut=='2'&&rpc.Exist==true\" ng-click=\"rpcCtrl.getRpcFile(1,rpc)\"><div class=\"pict_visu\"></div></a>-->\r\n\r\n\r\n                    <a href=\"\" class=\"acte\" ng-if=\"rpc.Statut=='2'&&rpc.Exist==true\" ng-click=\"rpcCtrl.getRpcFile(1,rpc)\"><div class=\"pict_visu\" id=\"pict-visu-rpc\"></div></a>\r\n                    <a href=\"\" class=\"acte\" ng-if=\"rpc.Statut=='2'&&rpc.Exist==true\" ng-click=\"rpcCtrl.getRpcFile(2,rpc)\"><div class=\"pict_telecharge\" id=\"pict-telecharger-rpc\"></div></a>\r\n\r\n                 </td>\r\n                    <td ng-if=\"rpc.Statut=='2'&&rpc.Exist==true\">\r\n                        \r\n                    </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n";

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

	/**
	 * @license AngularJS v1.5.11
	 * (c) 2010-2017 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular) {'use strict';

	/**
	 * @ngdoc module
	 * @name ngCookies
	 * @description
	 *
	 * # ngCookies
	 *
	 * The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.
	 *
	 *
	 * <div doc-module-components="ngCookies"></div>
	 *
	 * See {@link ngCookies.$cookies `$cookies`} for usage.
	 */


	angular.module('ngCookies', ['ng']).
	  /**
	   * @ngdoc provider
	   * @name $cookiesProvider
	   * @description
	   * Use `$cookiesProvider` to change the default behavior of the {@link ngCookies.$cookies $cookies} service.
	   * */
	   provider('$cookies', [/** @this */function $CookiesProvider() {
	    /**
	     * @ngdoc property
	     * @name $cookiesProvider#defaults
	     * @description
	     *
	     * Object containing default options to pass when setting cookies.
	     *
	     * The object may have following properties:
	     *
	     * - **path** - `{string}` - The cookie will be available only for this path and its
	     *   sub-paths. By default, this is the URL that appears in your `<base>` tag.
	     * - **domain** - `{string}` - The cookie will be available only for this domain and
	     *   its sub-domains. For security reasons the user agent will not accept the cookie
	     *   if the current domain is not a sub-domain of this domain or equal to it.
	     * - **expires** - `{string|Date}` - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT"
	     *   or a Date object indicating the exact date/time this cookie will expire.
	     * - **secure** - `{boolean}` - If `true`, then the cookie will only be available through a
	     *   secured connection.
	     *
	     * Note: By default, the address that appears in your `<base>` tag will be used as the path.
	     * This is important so that cookies will be visible for all routes when html5mode is enabled.
	     *
	     * @example
	     *
	     * ```js
	     * angular.module('cookiesProviderExample', ['ngCookies'])
	     *   .config(['$cookiesProvider', function($cookiesProvider) {
	     *     // Setting default options
	     *     $cookiesProvider.defaults.domain = 'foo.com';
	     *     $cookiesProvider.defaults.secure = true;
	     *   }]);
	     * ```
	     **/
	    var defaults = this.defaults = {};

	    function calcOptions(options) {
	      return options ? angular.extend({}, defaults, options) : defaults;
	    }

	    /**
	     * @ngdoc service
	     * @name $cookies
	     *
	     * @description
	     * Provides read/write access to browser's cookies.
	     *
	     * <div class="alert alert-info">
	     * Up until Angular 1.3, `$cookies` exposed properties that represented the
	     * current browser cookie values. In version 1.4, this behavior has changed, and
	     * `$cookies` now provides a standard api of getters, setters etc.
	     * </div>
	     *
	     * Requires the {@link ngCookies `ngCookies`} module to be installed.
	     *
	     * @example
	     *
	     * ```js
	     * angular.module('cookiesExample', ['ngCookies'])
	     *   .controller('ExampleController', ['$cookies', function($cookies) {
	     *     // Retrieving a cookie
	     *     var favoriteCookie = $cookies.get('myFavorite');
	     *     // Setting a cookie
	     *     $cookies.put('myFavorite', 'oatmeal');
	     *   }]);
	     * ```
	     */
	    this.$get = ['$$cookieReader', '$$cookieWriter', function($$cookieReader, $$cookieWriter) {
	      return {
	        /**
	         * @ngdoc method
	         * @name $cookies#get
	         *
	         * @description
	         * Returns the value of given cookie key
	         *
	         * @param {string} key Id to use for lookup.
	         * @returns {string} Raw cookie value.
	         */
	        get: function(key) {
	          return $$cookieReader()[key];
	        },

	        /**
	         * @ngdoc method
	         * @name $cookies#getObject
	         *
	         * @description
	         * Returns the deserialized value of given cookie key
	         *
	         * @param {string} key Id to use for lookup.
	         * @returns {Object} Deserialized cookie value.
	         */
	        getObject: function(key) {
	          var value = this.get(key);
	          return value ? angular.fromJson(value) : value;
	        },

	        /**
	         * @ngdoc method
	         * @name $cookies#getAll
	         *
	         * @description
	         * Returns a key value object with all the cookies
	         *
	         * @returns {Object} All cookies
	         */
	        getAll: function() {
	          return $$cookieReader();
	        },

	        /**
	         * @ngdoc method
	         * @name $cookies#put
	         *
	         * @description
	         * Sets a value for given cookie key
	         *
	         * @param {string} key Id for the `value`.
	         * @param {string} value Raw value to be stored.
	         * @param {Object=} options Options object.
	         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
	         */
	        put: function(key, value, options) {
	          $$cookieWriter(key, value, calcOptions(options));
	        },

	        /**
	         * @ngdoc method
	         * @name $cookies#putObject
	         *
	         * @description
	         * Serializes and sets a value for given cookie key
	         *
	         * @param {string} key Id for the `value`.
	         * @param {Object} value Value to be stored.
	         * @param {Object=} options Options object.
	         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
	         */
	        putObject: function(key, value, options) {
	          this.put(key, angular.toJson(value), options);
	        },

	        /**
	         * @ngdoc method
	         * @name $cookies#remove
	         *
	         * @description
	         * Remove given cookie
	         *
	         * @param {string} key Id of the key-value pair to delete.
	         * @param {Object=} options Options object.
	         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
	         */
	        remove: function(key, options) {
	          $$cookieWriter(key, undefined, calcOptions(options));
	        }
	      };
	    }];
	  }]);

	angular.module('ngCookies').
	/**
	 * @ngdoc service
	 * @name $cookieStore
	 * @deprecated
	 * sinceVersion="v1.4.0"
	 * Please use the {@link ngCookies.$cookies `$cookies`} service instead.
	 *
	 * @requires $cookies
	 *
	 * @description
	 * Provides a key-value (string-object) storage, that is backed by session cookies.
	 * Objects put or retrieved from this storage are automatically serialized or
	 * deserialized by angular's toJson/fromJson.
	 *
	 * Requires the {@link ngCookies `ngCookies`} module to be installed.
	 *
	 * @example
	 *
	 * ```js
	 * angular.module('cookieStoreExample', ['ngCookies'])
	 *   .controller('ExampleController', ['$cookieStore', function($cookieStore) {
	 *     // Put cookie
	 *     $cookieStore.put('myFavorite','oatmeal');
	 *     // Get cookie
	 *     var favoriteCookie = $cookieStore.get('myFavorite');
	 *     // Removing a cookie
	 *     $cookieStore.remove('myFavorite');
	 *   }]);
	 * ```
	 */
	 factory('$cookieStore', ['$cookies', function($cookies) {

	    return {
	      /**
	       * @ngdoc method
	       * @name $cookieStore#get
	       *
	       * @description
	       * Returns the value of given cookie key
	       *
	       * @param {string} key Id to use for lookup.
	       * @returns {Object} Deserialized cookie value, undefined if the cookie does not exist.
	       */
	      get: function(key) {
	        return $cookies.getObject(key);
	      },

	      /**
	       * @ngdoc method
	       * @name $cookieStore#put
	       *
	       * @description
	       * Sets a value for given cookie key
	       *
	       * @param {string} key Id for the `value`.
	       * @param {Object} value Value to be stored.
	       */
	      put: function(key, value) {
	        $cookies.putObject(key, value);
	      },

	      /**
	       * @ngdoc method
	       * @name $cookieStore#remove
	       *
	       * @description
	       * Remove given cookie
	       *
	       * @param {string} key Id of the key-value pair to delete.
	       */
	      remove: function(key) {
	        $cookies.remove(key);
	      }
	    };

	  }]);

	/**
	 * @name $$cookieWriter
	 * @requires $document
	 *
	 * @description
	 * This is a private service for writing cookies
	 *
	 * @param {string} name Cookie name
	 * @param {string=} value Cookie value (if undefined, cookie will be deleted)
	 * @param {Object=} options Object with options that need to be stored for the cookie.
	 */
	function $$CookieWriter($document, $log, $browser) {
	  var cookiePath = $browser.baseHref();
	  var rawDocument = $document[0];

	  function buildCookieString(name, value, options) {
	    var path, expires;
	    options = options || {};
	    expires = options.expires;
	    path = angular.isDefined(options.path) ? options.path : cookiePath;
	    if (angular.isUndefined(value)) {
	      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
	      value = '';
	    }
	    if (angular.isString(expires)) {
	      expires = new Date(expires);
	    }

	    var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	    str += path ? ';path=' + path : '';
	    str += options.domain ? ';domain=' + options.domain : '';
	    str += expires ? ';expires=' + expires.toUTCString() : '';
	    str += options.secure ? ';secure' : '';

	    // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
	    // - 300 cookies
	    // - 20 cookies per unique domain
	    // - 4096 bytes per cookie
	    var cookieLength = str.length + 1;
	    if (cookieLength > 4096) {
	      $log.warn('Cookie \'' + name +
	        '\' possibly not set or overflowed because it was too large (' +
	        cookieLength + ' > 4096 bytes)!');
	    }

	    return str;
	  }

	  return function(name, value, options) {
	    rawDocument.cookie = buildCookieString(name, value, options);
	  };
	}

	$$CookieWriter.$inject = ['$document', '$log', '$browser'];

	angular.module('ngCookies').provider('$$cookieWriter', /** @this */ function $$CookieWriterProvider() {
	  this.$get = $$CookieWriter;
	});


	})(window, window.angular);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	module.exports = 'ngCookies';


/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(50)();
	// imports


	// module
	exports.push([module.id, "/*! ========================================================================\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\n * http://www.bootstraptoggle.com\n * ========================================================================\n * Copyright 2014 Min Hur, The New York Times Company\n * Licensed under MIT\n * ======================================================================== */\n\n\n.checkbox label .toggle,\n.checkbox-inline .toggle {\n\tmargin-left: -20px;\n\tmargin-right: 5px;\n}\n\n.toggle {\n\tposition: relative;\n\toverflow: hidden;\n}\n.toggle input[type=\"checkbox\"] {\n\tdisplay: none;\n}\n.toggle-group {\n\tposition: absolute;\n\twidth: 200%;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\ttransition: left 0.35s;\n\t-webkit-transition: left 0.35s;\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n}\n.toggle.off .toggle-group {\n\tleft: -100%;\n}\n.toggle-on {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 50%;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n}\n.toggle-off {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 50%;\n\tright: 0;\n\tmargin: 0;\n\tborder: 0;\n\tborder-radius: 0;\n}\n.toggle-handle {\n\tposition: relative;\n\tmargin: 0 auto;\n\tpadding-top: 0px;\n\tpadding-bottom: 0px;\n\theight: 100%;\n\twidth: 0px;\n\tborder-width: 0 1px;\n}\n\n.toggle.btn { min-width: 59px; min-height: 34px; }\n.toggle-on.btn { padding-right: 24px; }\n.toggle-off.btn { padding-left: 24px; }\n\n.toggle.btn-lg { min-width: 79px; min-height: 45px; }\n.toggle-on.btn-lg { padding-right: 31px; }\n.toggle-off.btn-lg { padding-left: 31px; }\n.toggle-handle.btn-lg { width: 40px; }\n\n.toggle.btn-sm { min-width: 50px; min-height: 30px;}\n.toggle-on.btn-sm { padding-right: 20px; }\n.toggle-off.btn-sm { padding-left: 20px; }\n\n.toggle.btn-xs { min-width: 35px; min-height: 22px;}\n.toggle-on.btn-xs { padding-right: 12px; }\n.toggle-off.btn-xs { padding-left: 12px; }\n\n", ""]);

	// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"popupsCtrl.closePopup()\"></a>\r\n    <h1>{{'labels.declaration.uvc.popin_confirmation.ERROR_MSG' | translate}}</h1>\r\n    <div>{{popupsCtrl.messageError | translate}}</div>\r\n</div>";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"popupsCtrl.closePopup()\"></a>\r\n    <div>\r\n        <div class=\"recap_decla\">\r\n            <h1>{{'labels.declaration.uvc.popin_confirmation.TITRE' | translate}}</h1>\r\n            <p>\r\n                {{'labels.declaration.uvc.popin_confirmation.LABEL1' | translate}} {{popupsCtrl.RecapDeclaration.Annee}} {{'labels.declaration.uvc.popin_confirmation.LABEL2' | translate}}\r\n                <span class=\"chiffre_decla\">\r\n                    {{popupsCtrl.contributionTotale | decimalSeparator}} € {{'labels.declaration.uvc.popin_confirmation.HT' | translate}}\r\n                </span>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ng-cloak\" ng-if=\"accueil_declarationCtrl.isVisible\">\r\n    <span ng-bind-html=\"accueil_declarationCtrl.declarationBloc\"></span>\r\n    <button class=\"trans suivant-noir\" ng-click=\"accueil_declarationCtrl.goToChoixDeclaration()\">{{'labels.declaration.accueil_declaration.BOUTON' | translate}}</button>\r\n</div>\r\n<div class=\"ng-cloak\" ng-if=\"!accueil_declarationCtrl.isVisible\">\r\n    <span ng-bind-html=\"accueil_declarationCtrl.notDeclarationBloc\"></span>\r\n</div>";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"choix_decla_over\">\r\n    <h1>{{'labels.declaration.choixdeclaration.choix_type_declaration.TITLE' | translate}} {{choixdeclarationCtrl.annee}}</h1>\r\n    <h3>1.{{'labels.declaration.choixdeclaration.choix_type_declaration.TITLE_DECLARATION_UVC' | translate}}</h3>\r\n    <p>{{('labels.declaration.choixdeclaration.choix_type_declaration.LABEL_DECLARATION_UVC_SUR_MARCHE' | translate).replace('#year#', choixdeclarationCtrl.annee)}}</p>\r\n    <form ng-keyup=\"$event.keyCode == 13 && choixdeclarationCtrl.GetChoix()\">\r\n       \r\n            <div ng-show=\"choixdeclarationCtrl.annee>=2016\" class=\"slider_wrapper\">\r\n                <div ui-slider=\"{range: 'min'}\" min=\"0\" max=\"100\" ng-model=\"choixdeclarationCtrl.nbuvc\"></div>\r\n                <div style=\"width:16.67%; float:left;\">.</div>\r\n                <div style=\"width:33.33%; float:left;text-align:center;\">.</div>\r\n                <div style=\"width:33.33%; float:left;text-align:center;\">.</div>\r\n                <div style=\"width:16.67%; float:left;text-align:right;\">.</div>\r\n                <div style=\"width:16.67%;float:left;\">0</div>\r\n                <div style=\"width:33.33%;float:left; text-align:center\">10 000</div>\r\n                <div style=\"width:33.33%;float:left; text-align:center\">500 000</div>\r\n                <div style=\"width:16.67%;float:left; text-align:right\">...</div>\r\n                <br style=\"clear:both\" /><br />\r\n                <p ng-show=\"choixdeclarationCtrl.nbuvc < 34\">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_MOINS_10000'| translate}}</p>\r\n                <p ng-show=\"choixdeclarationCtrl.nbuvc > 33 && choixdeclarationCtrl.nbuvc < 67\">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_ENTRE_10000_50000'| translate}}</p>\r\n                <p ng-show=\"choixdeclarationCtrl.nbuvc > 66\">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_SUP_500000'| translate}}</p>\r\n            </div>\r\n            <div ng-show=\"choixdeclarationCtrl.annee<2016\" class=\"slider_wrapper\">\r\n                <div ui-slider=\"{range: 'min'}\" min=\"0\" max=\"100\" ng-model=\"choixdeclarationCtrl.nbuvc\"></div>\r\n                <div style=\"width:20%; float:left\">.</div>\r\n                <div style=\"width:60%; float:left;text-align:center;\">.</div> \r\n                <div style=\"width:20%; float:left;text-align:right;\">.</div>\r\n                <div style=\"width:20%;float:left;\">0</div>\r\n                <div style=\"width:60%;float:left; text-align:center\">180 000</div> \r\n                <div style=\"width:20%;float:left; text-align:right\">...</div>\r\n                <br style=\"clear:both\" /><br />\r\n                <p ng-show=\"choixdeclarationCtrl.nbuvc < 50\">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_MOINS_180000'| translate}}</p>\r\n                <p ng-show=\"choixdeclarationCtrl.nbuvc >= 50 \">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_SUP_180000'| translate}}</p>\r\n \r\n            </div>\r\n            <!--<input type=\"text\" ng-model=\"choixdeclarationCtrl.nbuvc\" placeholder=\"exemple 12 000\" required />&nbsp;<label>UVC</label><br />-->\r\n        <button class=\"contour\" ng-click=\"choixdeclarationCtrl.GetChoix()\">{{'labels.transverse.BTN_VALIDER' | translate}}</button>\r\n        \r\n        <div class=\"choix_decla\">\r\n            <div data-ng-repeat=\"choix in choixdeclarationCtrl.html\">\r\n                <div ng-show=\"$first && choixdeclarationCtrl.html.length>=1\">\r\n                    <h4>2.{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_DECLARATION_CHOIX_DU_TYPE'| translate}}</h4>\r\n                    <p class=\"premier_p\">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_DECLARATION_CONSEILLE'| translate}}</p>\r\n                </div>\r\n                <div class=\"bloc_choix_wrapper\">\r\n                    <input type=\"radio\" ng-model=\"choixdeclarationCtrl.selected_type\" value=\"{{choix.type}}\" />\r\n                    <div class=\"bloc_choix\" ng-class=\"{'selected': choixdeclarationCtrl.selected_type == choix.type }\" ng-click=\"choixdeclarationCtrl.selected_type=choix.type\">\r\n                        <h3>{{choix.titre}} </h3>\r\n                        <p data-ng-bind-html=\"choix.html\"></p>\r\n                    </div>\r\n                    <div class=\"autre_choix\" ng-show=\"$first && choixdeclarationCtrl.html.length>1\">\r\n                        <p class=\"choix_decla_p\">{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_DECLARATION_AUTRE_CONSEILLE'| translate}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"foot_acces_direct\">\r\n            <ul>\r\n                 <li> \r\n                    <input type=\"button\" class=\"btn suivant\" ng-show=\"choixdeclarationCtrl.selected_type != ''\" ng-click=\"choixdeclarationCtrl.valideChoixDeclaration()\" value=\"{{'labels.declaration.choixdeclaration.choix_type_declaration.LABEL_DECLARATION_CONTINUER' | translate}}\" />\r\n                 </li>\r\n            </ul>\r\n        </div>   \r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"choixdeclarationCtrl.closeModal()\"></a>\r\n    <div class=\"list_widget\">\r\n\t     <div class=\"widget_uvc\"> \r\n\t\t    <div  class=\"bloc_saisie\" ng-click=\"choixdeclarationCtrl.GoToDelarationEnLigne()\">\r\n                <div class=\"enligne\"></div>\r\n\t\t        <h4>{{'labels.declaration.choixdeclaration.choix_mode_saisi.TITLE_DECLARATION_LIGNE' | translate}}</h4>\r\n\r\n\t\t    </div>\r\n\t\t    <p>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_UN' | translate}}\r\n\t\t     <strong>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_DEUX' | translate}}</strong>\r\n\t\t      {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_TROIS' | translate}}</p>\r\n\t    </div> \r\n\t    <div class=\"widget_uvc\">\r\n\t\t    <div class=\"bloc_saisie\" ng-click=\"choixdeclarationCtrl.openExcelOptionsModal()\">\r\n                <div class=\"excel\"></div>\r\n\t\t        <h4>{{'labels.declaration.choixdeclaration.choix_mode_saisi.TITLE_DECLARATION_EXCEL' | translate}}</h4>\r\n\t\t    </div>\r\n\t\t    <p>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_UN' | translate}}\r\n\t\t    <strong>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_DEUX' | translate}}</strong>\r\n\t\t    {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_TROIS' | translate}}</p>\r\n\t    </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"choixdeclarationCtrl.closeModal()\"></a>\r\n    <h1>{{'labels.declaration.choixdeclaration.choix_mode_saisi.TITLE_CHOIX_OPTION_EXCEL' | translate}} </h1>\r\n    <div class=\"choix_param_container\">\r\n        <div class=\"choix_param_langue\">\r\n            <p>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_LANGUE' | translate}} </p>\r\n            <input type=\"radio\" name=\"langue\" value=\"francais\" ng-model=\"choixdeclarationCtrl.langue_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_LANGUE_FRANCAIS' | translate}}</label>\r\n            <input type=\"radio\" name=\"langue\" value=\"anglais\" ng-model=\"choixdeclarationCtrl.langue_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_LANGUE_ANGLAIS' | translate}}</label>\r\n        </div>\r\n        <div class=\"choix_param_annee\">\r\n            <p>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_ANNEE' | translate}} </p>\r\n            <input type=\"radio\" name=\"annee\" value=\"2007\" ng-model=\"choixdeclarationCtrl.annee_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_ANNEE_EXCEL2007' | translate}}</label>\r\n            <input type=\"radio\" name=\"annee\" value=\"2003\" ng-model=\"choixdeclarationCtrl.annee_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_ANNEE_EXCEL2003' | translate}}</label>\r\n          \r\n        </div>\r\n    </div>\r\n     <br/>\r\n    <p>\r\n    {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_MSG1' | translate}}&nbsp;<a href=\"/mon-espace/declaration/accueil\">{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_MSG2' | translate}}</a>&nbsp;{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_MSG3' | translate}}\r\n    </p>\r\n    <input class=\"btn\" ng-disabled=\"!choixdeclarationCtrl.langue_excel || !choixdeclarationCtrl.annee_excel \" type=\"button\" value=\"Valider\" ng-click=\"choixdeclarationCtrl.sendDeclarationExcel()\" />\r\n\r\n    <input id=\"CloseBtn\" type=\"button\" value=\"Annuler\" class=\"marg_btn\" ng-click=\"choixdeclarationCtrl.closeModal()\">\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>{{'labels.declaration.choixdeclaration.societes_marques.MSG5' | translate}} </h1>\r\n    <a class=\"close-icon\" ng-click=\"controleecartCtrl.closeModal()\"></a>\r\n    <button  class=\"btn\" ng-click=\"controleecartCtrl.closeModal()\">{{'labels.declaration.choixdeclaration.societes_marques.MSG6' | translate}}</button>\r\n   \r\n</div> \r\n";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"ControlEcart\">\r\n    <h1>{{'labels.declaration.controle_ecart.title' | translate}} </h1>\r\n    <p>\r\n        <br /> {{'labels.declaration.controle_ecart.MSG1' | translate}}\r\n        <br />{{'labels.declaration.controle_ecart.MSG2' | translate}}\r\n    </p>\r\n    <form name=\"myForm\" novalidate>\r\n\r\n        <table>\r\n            <tr>\r\n                <td colspan=\"4\">\r\n                    <label class=\"controlChamp\" ng-show=\"myForm.motif.$invalid && (controleecartCtrl.form_submitted || myForm.motif.$touched)\">\r\n                        {{'labels.declaration.controle_ecart.MSG3' | translate}}\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td>\r\n                    <label>\r\n                        <select name=\"motif\" class=\"selectforcountry\" ng-options=\"t.Code as t.Libelle for t in controleecartCtrl.MotifEcartTab\"\r\n                                ng-model=\"controleecartCtrl.selected_motif\" required>\r\n                            <option value=\"\">{{'labels.declaration.controle_ecart.MSG4' | translate}}</option>\r\n                        </select>\r\n                    </label>\r\n                    <a class=\"infobulle_uvc\" style=\"margin-top: 5px;\">\r\n                        <span class=\"arrow_box\">{{'labels.declaration.controle_ecart.INFOBULLE'|translate}}</span>\r\n                    </a>\r\n                </td>\r\n            </tr>\r\n            <tr>\r\n                <td> <textarea class=\"no-border\" placeholder=\"Commentaires (facultatif)\" rows=\"5\" cols=\"45\" ng-model=\"controleecartCtrl.commentaire\"></textarea></td>\r\n            </tr>\r\n        </table>\r\n        <div class=\"foot_acces_direct\">\r\n            <ul>\r\n                <li><button id=\"btn-grey\" ng-click=\"controleecartCtrl.goBack()\">{{'labels.declaration.controle_ecart.BTN_RETOUR' | translate}}</button></li>\r\n                <li><a class=\"btn_sauvegarder\" ng-click=\"controleecartCtrl.submit_commentaireSave(myForm)\">{{'labels.declaration.controle_ecart.BTN_ENREGISTRER' | translate}}</a></li>\r\n                <li>\r\n                    <button class=\"btn suivant\" ng-disabled=\"myForm.$invalid\" ng-click=\"controleecartCtrl.submit_commentaire(myForm)\">{{'labels.declaration.controle_ecart.BTN_SUIVANT' | translate}} </button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = "<div ng-show=\"declarationforfaitCtrl.step==1\" >\r\n    <form>\r\n        <h1>{{'labels.declaration.choixdeclaration.declarationforfait.TITLE_DECLARATION_FORFAIT' | translate}}</h1>\r\n        <p>{{'labels.declaration.choixdeclaration.declarationforfait.LABEL_DECLARATION_FORFAIT_INFO' | translate}}{{declarationforfaitCtrl.annee}}</p>\r\n        <p>{{'labels.declaration.choixdeclaration.declarationforfait.LABEL_DECLARATION_FORFAIT_CONT' | translate}}</p>\r\n        <h3>{{'labels.declaration.choixdeclaration.declarationforfait.LABEL_DECLARATION_FORFAIT_MONTANT' | translate}}</h3>\r\n        <!-- <input id=\"ValideBtn\" type=\"button\" value=\"CONTINUER\"  ng-click=\"declarationforfaitCtrl.SaveDeclarationForfait()\"/>\r\n        <a class=\"CloseBtn\" href=\"/mon-espace/declaration/historique\" >RETOUR</a>  -->  \r\n\r\n        <div class=\"foot_acces_direct\">\r\n            <ul>\r\n                <li> <button id=\"btn-grey\" onclick='window.location.href=\"/mon-espace/declaration/historique\"'>{{'labels.declaration.uvc.send_mails.LABEL_BTN_NO_VALIDATE' | translate}}</button></li>\r\n                \r\n                <li> <button class=\"suivant\"  ng-click=\"declarationforfaitCtrl.SaveDeclarationForfait()\">{{'labels.declaration.choixdeclaration.declarationforfait.LABEL_DECLARATION_FORFAIT_BTN' | translate}}\r\n                </button></li>\r\n            </ul>\r\n        </div>\r\n        \r\n    </form>\r\n</div>\r\n\r\n<div ng-show=\"declarationforfaitCtrl.step=='controle_ecart'\" >\r\n    <data-controleecart data-declarationid=\"{{declarationforfaitCtrl.RecapDeclaration.IdDeclaration}}\" onvalidate=\"declarationforfaitCtrl.step = 2\" onback=\"declarationforfaitCtrl.goBackFromControlEcart()\"></data-controleecart>\r\n</div>\r\n\r\n\r\n<div ng-show=\"declarationforfaitCtrl.step==2\" ng-cloak>\r\n    <form id=\"mail_form\" name=\"mail_form\" novalidate>\r\n\r\n         <h1><strong>{{'labels.declaration.uvc.send_mails.TITLE' | translate}}</strong></h1>\r\n        <p>{{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_1' | translate}} <br />\r\n        {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_2' | translate}} <br /> <br />\r\n        {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_3' | translate}}</p>\r\n\r\n         <table class=\"tab_declaration ajout_desti\">\r\n            <tr>\r\n                <td>\r\n                     <img src=\"/sites/default/files/inline-images/pict_mail.png\" class=\"marg-img\" /><input type=\"email\" name=\"email\" ng-model=\"declarationforfaitCtrl.mailinput\" ng-keyup=\"$event.keyCode == 13 && !mail_form.email.$invalid && !mail_form.email.$error.pattern && declarationforfaitCtrl.addMails()\" ng-pattern=\"declarationforfaitCtrl.email_pattern\" autocomplete=\"off\" placeholder=\"{{'labels.declaration.uvc.send_mails.PLACEHOLDER_EMAIL' | translate}}\" required>\r\n\r\n\r\n                    <span ng-show=\"mail_form.email.$invalid && !mail_form.email.$pristine && mail_form.email.$error.pattern\" class=\"help-block error\">{{'labels.declaration.uvc.send_mails.LABEL_ERROR' | translate}}</span>\r\n                </td>              \r\n            <td></td>\r\n            </tr>\r\n            <tr ng-repeat=\"mail in declarationforfaitCtrl.mails\">\r\n                <td><input type=\"email\" name=\"email\" placeholder=\"{{mail}}\" class=\"no-border\" disabled ></td>                \r\n                <td><div ng-click=\"declarationforfaitCtrl.removeMail(mail)\" class=\"pict_delete\">&nbsp;</div></td>                 \r\n            </tr>\r\n        </table>\r\n\r\n         <input id=\"ajout\" type=\"button\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_ADD_RECIPIENTS' | translate}}\" ng-disabled=\"mail_form.$invalid\" ng-click=\"declarationforfaitCtrl.addMails()\">\r\n        <br />\r\n\r\n         <div class=\"foot_acces_direct\">\r\n            <ul>\r\n                <li><input type=\"button\" id=\"btn-grey\" ng-click=\"declarationforfaitCtrl.saveMails()\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_BTN_NO_VALIDATE' | translate}}\" /></li>\r\n                <li><input type=\"checkbox\" ng-model=\"checked\" ng-click=\"selected()\" /><label class=\"info-check\">{{'labels.declaration.uvc.send_mails.LABEL_CERTIFIE' | translate}}</label></li>\r\n                <li><input type=\"button\" class=\"btn\" ng-disabled=\"!checked\" ng-click=\"declarationforfaitCtrl.valideMails()\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_BTN_VALIDATE' | translate}}\" /></li>\r\n            </ul>\r\n        </div>\r\n\r\n\r\n    </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <div ng-hide=\"declarationforfaitCtrl.loading\">\r\n        <a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>\r\n        <div ng-show=\"declarationforfaitCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_validation.TITLE' | translate}}</h1>\r\n\r\n            <p>{{'labels.declaration.uvc.popin_validation.RAPPEL_CONTRIB' | translate}}<span class=\"chiffre_decla\">{{declarationforfaitCtrl.RecapDeclaration.ContributionTotale | decimalSeparator}} € {{'labels.declaration.uvc.popin_validation.TAXE' | translate}}</span></p>\r\n       \r\n            <button class=\"suivant\" onclick='window.location.href=\"/mon-espace/declaration/accueil\"'>\r\n                    {{'labels.declaration.uvc.popin_validation.LABEL_BTN_ACCUEIL' | translate}}\r\n            </button>\r\n            \r\n        </div>\r\n        <div ng-hide=\"declarationforfaitCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_validation.ERROR_MSG' | translate}}</h1>\r\n            <div>{{excelCtrl.errors}}</div>\r\n        </div>\r\n    </div>\r\n     <div class=\"loading_spinner\" ng-show=\"declarationforfaitCtrl.loading\">\r\n        <div class=\"sk-cube-grid\">\r\n            <div class=\"sk-cube sk-cube1\"></div>\r\n            <div class=\"sk-cube sk-cube2\"></div>\r\n            <div class=\"sk-cube sk-cube3\"></div>\r\n            <div class=\"sk-cube sk-cube4\"></div>\r\n            <div class=\"sk-cube sk-cube5\"></div>\r\n            <div class=\"sk-cube sk-cube6\"></div>\r\n            <div class=\"sk-cube sk-cube7\"></div>\r\n            <div class=\"sk-cube sk-cube8\"></div>\r\n            <div class=\"sk-cube sk-cube9\"></div>\r\n        </div>\r\n        <p>{{'labels.declaration.uvc.modal.LOADING_MODAL' | translate}}</p>\r\n    </div> \r\n</div>\r\n";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = "<loader type=\"quarter\" ng-if=\"depotDeclarationCtrl.sendingFormFlag\" covered>Dépôt de la déclaration</loader>\r\n\r\n\r\n<form name=\"depotDeclarationForm\" id=\"depot-declaration-form\" ng-submit=\"depotDeclarationCtrl.submit(depotDeclarationForm)\" novalidate>\r\n    \r\n    <!-- ID CLIENT -->\r\n    <div>\r\n        <label class=\"exposant\" for=\"id_client\" data-ng-if=\"depotDeclarationCtrl.form.clientId\">Numéro client</label><input data-ng-model=\"depotDeclarationCtrl.form.clientId\" type=\"text\" name=\"id_client\" id=\"id-client\" maxlength=\"40\" placeholder=\"Numéro client\" required control-input>\r\n\r\n        <div data-ng-if=\"depotDeclarationForm.id_client.$touched\" data-ng-messages=\"depotDeclarationForm.id_client.$error\" class=\"error depot-declaration-error\">\r\n            <label class=\"error\" ng-message=\"required\">Numéro client requis</label>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n     <!-- YEAR -->\r\n    <div>\r\n        <label class=\"exposant\" for=\"year\" data-ng-if=\"depotDeclarationCtrl.form.year\">Année</label><input data-ng-model=\"depotDeclarationCtrl.form.year\" type=\"text\" name=\"year\" id=\"year\" maxlength=\"4\" placeholder=\"Année\" required control-input>\r\n\r\n        <div data-ng-if=\"depotDeclarationForm.year.$touched\" data-ng-messages=\"depotDeclarationForm.year.$error\" class=\"error depot-declaration-error\">\r\n            <label class=\"error\" ng-message=\"required\">Année requise</label>\r\n        </div>\r\n    </div>\r\n    \r\n    <!-- CORRECTIVE FLAG -->\r\n    <div>\r\n        <label for=\"corrective-flag-yes\">S'agit-t-il d'une corrective de déclaration ?</label>\r\n        <input data-ng-model=\"depotDeclarationCtrl.form.correctiveFlag\" type=\"radio\" name=\"corrective_flag\" id=\"corrective-flag-yes\" data-ng-value=\"true\"><label for=\"corrective-flag-yes\">{{'labels.relationClient.adhesionRestreinte.transverse.RADIO_YES' | translate}}</label>\r\n        <input data-ng-model=\"depotDeclarationCtrl.form.correctiveFlag\" type=\"radio\" name=\"corrective_flag\" id=\"corrective-flag-no\" data-ng-value=\"false\" required><label for=\"corrective-flag-no\">{{'labels.relationClient.adhesionRestreinte.transverse.RADIO_NO' | translate}}</label>\r\n\r\n        <div data-ng-if=\"depotDeclarationForm.corrective_flag.$touched\" data-ng-messages=\"depotDeclarationForm.corrective_flag.$error\" class=\"error depot-declaration-error\">\r\n            <label class=\"error\" ng-message=\"required\">Vous devez indiquer si c'est une cerrective de déclaration</label>\r\n        </div>\r\n    </div>\r\n    \r\n    <div data-ng-if=\"depotDeclarationCtrl.form.correctiveFlag\" id=\"comment-and-motif-bloc\">\r\n        <!-- MOTIF -->\r\n        <div>\r\n            <select id=\"select-motifs\" name=\"motifs\" ng-model=\"depotDeclarationCtrl.form.motif\" data-ng-class=\"{ 'error' : corrective_form.motifs.$invalid && historiqueCtrl.corrective_submitted}\" required>\r\n                <option value=\"\">{{'labels.declaration.uvc.popin_corrective.LABEL_MOTIF' | translate}}</option>\r\n                <option ng-repeat=\"motif in depotDeclarationCtrl.motifsCorrective\" value=\"{{motif.Code}}\">{{'motifs_correctives.'+motif.Code | translate}}</option>\r\n            </select>\r\n        </div>\r\n\r\n        <!-- COMMENT -->\r\n        <div id=\"comment-gabarit\">\r\n            <label class=\"exposant\" for=\"comment\" data-ng-if=\"depotDeclarationCtrl.form.comment\">Commentaire</label><textarea data-ng-model=\"depotDeclarationCtrl.form.comment\" name=\"comment\" id=\"dd-comment\" maxlength=\"500\" placeholder=\"Commentaire\" control-input></textarea>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <!-- FILE -->\r\n    <div>\r\n\r\n        <label for=\"file-upload\" id=\"file-button\" class=\"contour marg_rgt pointer\">{{'labels.relationClient.adhesionRestreinte.informationsAdministratives.ADD_FILE' | translate}}</label>\r\n        <div id=\"dd-file-link\" tabindex=\"-1\">\r\n            <a href=\"\" ng-click=\"\">{{depotDeclarationCtrl.form.fileAttachment.name}}</a>\r\n            <!-- PICTO CORBEILLE -->\r\n            <!--<div class=\"pict_delete\" id=\"file-delete\" ng-if=\"depotDeclarationCtrl.fileAttachment\" ng-click=\"depotDeclarationCtrl.deleteAttachment(depotDeclarationForm.file_upload)\"></div>-->\r\n        </div>\r\n        <div id=\"dd-file-error\" data-ng-if=\"depotDeclarationForm.file_upload.$touched\" data-ng-messages=\"depotDeclarationForm.file_upload.$error\" class=\"error depot-declaration-error\">\r\n            <label class=\"error\" ng-message=\"fileEmpty\">{{'errors.adhesionRestreinte.ERROR_FILE_REQUIRED' | translate}}</label>\r\n            <label class=\"error\" ng-message=\"fileType\">Le fichier doit être au format : ZIP ou FDE.</label>\r\n            <label class=\"error\" ng-message=\"fileSize\">{{'errors.adhesionRestreinte.ERROR_FILE_SIZE' | translate}}</label>\r\n        </div>\r\n        <input type=\"file\" data-ng-hide=\"true\" id=\"file-upload\" name=\"file_upload\" ng-model=\"depotDeclarationCtrl.fakeFile\" file-upload-control=\"depotDeclarationCtrl.form.fileAttachment\" extension-control=\"depotDeclarationCtrl.extensionsList\" value=\"fake value\"/>\r\n    </div>\r\n    \r\n    \r\n    \r\n    <button type=\"submit\">Envoyer</button>\r\n    <button type=\"button\" ng-click=\"depotDeclarationCtrl.navigate()\">Retour</button>\r\n</form>";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>{{'labels.declaration.choixdeclaration.societes_marques.MSG5' | translate}} </h1>\r\n    <a class=\"close-icon\" ng-click=\"entrepriseCtrl.closeModal()\"></a>\r\n    <button type=\"button\" class=\"btn\" ng-click=\"entrepriseCtrl.closeModal()\">{{'labels.declaration.choixdeclaration.societes_marques.MSG6' | translate}}</button>\r\n   \r\n</div> \r\n";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = "<div ng-hide=\"entrepriseCtrl.loading\">\r\n    <div ng-show=\"entrepriseCtrl.step=='controle_ecart'\">\r\n        <data-controleecart data-declarationid=\"{{entrepriseCtrl.RecapDeclaration.IdDeclaration}}\" onvalidate=\"entrepriseCtrl.step = 'entreprises_marques'\"\r\n                            onback=\"entrepriseCtrl.goToDeclarationUvcWeb()\"></data-controleecart>\r\n    </div>\r\n    <div class=\"entreprises_marques\" ng-show=\"entrepriseCtrl.step=='entreprises_marques'\">\r\n        <div class=\"forms_container\">\r\n            <h1><strong>{{'labels.declaration.choixdeclaration.societes_marques.titre' | translate}}</strong></h1>\r\n            <h4>{{'labels.declaration.choixdeclaration.societes_marques.societe_MSG1' | translate}}</h4>\r\n            <p>\r\n                {{'labels.declaration.choixdeclaration.societes_marques.societe_MSG2' | translate}}\r\n                &nbsp;? &nbsp;\r\n                <input class=\"test\" data-ng-model=\"entrepriseCtrl.choix\" data-ng-value=\"true\" name=\"entreprise\" type=\"radio\" /><label>\r\n                    {{'labels.declaration.choixdeclaration.societes_marques.MSG3' | translate}}\r\n                </label>\r\n                <input data-ng-model=\"entrepriseCtrl.choix\" data-ng-value=\"false\" name=\"entreprise\" type=\"radio\" /><label>{{'labels.declaration.choixdeclaration.societes_marques.MSG4' | translate}}</label>\r\n            </p>\r\n            <!-- GESTION DES SOCIETES -->\r\n            <form name=\"myForm\" novalidate>\r\n                <div ng-show=\"entrepriseCtrl.choix\">\r\n                    <table>\r\n                        <tr>\r\n                            <td colspan=\"4\"><label class=\"controlChamp\" ng-show=\"entrepriseCtrl.msgErreurForEntreprise\">{{'labels.declaration.choixdeclaration.societes_marques.LABEL_ERROR_ENTREPRISE' | translate}} </label></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><label class=\"controlChamp\" ng-show=\"myForm.name.$invalid && entrepriseCtrl.submitted\">{{'labels.declaration.choixdeclaration.societes_marques.LABEL_ERROR_SOCIETE' | translate}}</label></td>\r\n                            <td></td>\r\n                            <td colspan=\"2\"><label class=\"controlChamp\" ng-show=\"myForm.pays.$invalid && entrepriseCtrl.submitted\">{{'labels.declaration.choixdeclaration.societes_marques.LABEL_ERROR_PAYS' | translate}}</label></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <label class=\"produit_exposant\" ng-hide=\"entrepriseCtrl.hideExposant(entrepriseCtrl.entrepriseinput.nom)\">{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_SOCIETE' | translate}}</label>\r\n                            </td>\r\n                            <td>\r\n                                <label class=\"produit_exposant\" ng-hide=\"entrepriseCtrl.hideExposant(entrepriseCtrl.entrepriseinput.siret)\">{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_SIRET' | translate}} </label>\r\n                            </td>\r\n                            <td>\r\n                                <label class=\"produit_exposant\" ng-hide=\"entrepriseCtrl.hideExposant(entrepriseCtrl.entrepriseinput.pays)\">{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_PAYS' | translate}} </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <input type=\"text\" name=\"name\" ng-model=\"entrepriseCtrl.entrepriseinput.nom\" required placeholder=\"{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_SOCIETE' | translate}} *\" />  &nbsp; &nbsp;\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"text\" name=\"siret\" ng-model=\"entrepriseCtrl.entrepriseinput.siret\" placeholder=\"{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_SIRET' | translate}}\" />  &nbsp; &nbsp;\r\n                            </td>\r\n                            <td>\r\n                                <select class=\"selectforcountry\" name=\"pays\" ng-options=\"t.Code as t.Designation for t in entrepriseCtrl.Pays\" required ng-model=\"entrepriseCtrl.entrepriseinput.pays\">\r\n                                    <option value=\"\">{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_PAYS' | translate}} * </option>\r\n                                </select>\r\n                            </td>\r\n                            <td></td>\r\n                        </tr>\r\n\r\n                        <tr ng-repeat=\"e in entrepriseCtrl.entreprises\">\r\n                            <td>\r\n                                <input type=\"text\" placeholder=\"{{e.nom}}\" class=\"no-border\" disabled>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"text\" placeholder=\"{{e.siret}}\" class=\"no-border\" disabled>\r\n                            </td>\r\n                            <td>\r\n                                <input type=\"text\" placeholder=\"{{'pays.'+e.pays | translate}}\" class=\"no-border\" disabled>\r\n                            </td>\r\n                            <td>\r\n                                <div ng-click=\"entrepriseCtrl.removeEntreprise(e)\" class=\"pict_delete\"></div>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    <input id=\"ajout\" type=\"submit\" ng-disabled=\"myForm.$invalid\" ng-click=\"entrepriseCtrl.addEntreprise()\" value=\"{{'labels.declaration.choixdeclaration.societes_marques.societe_AJOUTER_ENTREPRISE' | translate}}\" ng-keyup=\"$event.keyCode == 13 && entrepriseCtrl.addEntreprise()\" value=\"{{'labels.declaration.choixdeclaration.societes_marques.societe_AJOUTER_ENTREPRISE' | translate}}\" />\r\n                </div>\r\n            </form>\r\n            <hr color=\"#EFEFEF\">\r\n            <!-- GESTION DES MARQUES -->\r\n            <h4>{{'labels.declaration.choixdeclaration.societes_marques.marque_MSG1' | translate}}</h4>\r\n            <p>\r\n                {{'labels.declaration.choixdeclaration.societes_marques.marque_MSG2' | translate}}\r\n                &nbsp;? &nbsp;\r\n                <input data-ng-model=\"entrepriseCtrl.choixmarque\" data-ng-value=\"true\" name=\"marque\" type=\"radio\" /><label>{{'labels.declaration.choixdeclaration.societes_marques.MSG3' | translate}}</label>\r\n                <input data-ng-model=\"entrepriseCtrl.choixmarque\" data-ng-value=\"false\" name=\"marque\" type=\"radio\" /><label>{{'labels.declaration.choixdeclaration.societes_marques.MSG4' | translate}}</label>\r\n            </p>\r\n            <form name=\"myForm1\" novalidate>\r\n                <div ng-show=\"entrepriseCtrl.choixmarque\">\r\n                    <table>\r\n\r\n                        <tr>\r\n                            <td><label class=\"controlChamp\" ng-show=\"entrepriseCtrl.msgErreurForMarque\">{{'labels.declaration.choixdeclaration.societes_marques.LABEL_ERROR_MARQUE' | translate}} </label></td>\r\n                            <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <label class=\"produit_exposant\" ng-hide=\"entrepriseCtrl.hideExposant(entrepriseCtrl.marqueinput)\">{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_MARQUE' | translate}} </label>\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <input ng-keyup=\"$event.keyCode == 13 && entrepriseCtrl.addMarque()\" type=\"text\" name=\"name\" ng-model=\"entrepriseCtrl.marqueinput\" required placeholder=\"{{'labels.declaration.choixdeclaration.societes_marques.PLACEHOLDER_MARQUE' | translate}} *\" />\r\n                            </td>\r\n                            <td></td>\r\n                        </tr>\r\n                        <tr ng-repeat=\"marque in entrepriseCtrl.marques\">\r\n\r\n                            <td>\r\n                                <input type=\"text\" placeholder=\"{{marque}}\" class=\"no-border\" disabled>\r\n                            </td>\r\n                            <td>\r\n                                <div ng-click=\"entrepriseCtrl.removeMarque(marque)\" class=\"pict_delete\"></div>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                    <input id=\"ajout\" type=\"button\" ng-disabled=\"myForm1.$invalid\" value=\"{{'labels.declaration.choixdeclaration.societes_marques.marque_AJOUTER_MARQUE' | translate}}\" ng-click=\"entrepriseCtrl.addMarque()\">\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"entreprises_marques_footer\">\r\n            <ul>\r\n                <li> <button id=\"btn-grey\" ng-click=\"entrepriseCtrl.goBack()\">{{'labels.declaration.choixdeclaration.societes_marques.BTN_ETAPE_RETOUR' | translate}}</button></li>\r\n                <li> <a class=\"btn_sauvegarder \" ng-click=\"entrepriseCtrl.SaveWithoutAddfalse();entrepriseCtrl.Save(false); entrepriseCtrl.valideEnregistrement()\">{{'labels.declaration.choixdeclaration.societes_marques.BTN_ETAPE_SAUVEGARDER' | translate}} </a></li>\r\n                <li>\r\n                    <button class=\"suivant\" ng-click=\"entrepriseCtrl.submitFromOutSide('myForm')\">{{'labels.declaration.choixdeclaration.societes_marques.BTN_ETAPE_SUIVANTE' | translate}}</button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"historiqueCtrl.closeModal()\"></a> \r\n    <div ng-show=\"historiqueCtrl.etape_corrective==1\">\r\n        <h1>{{'labels.declaration.uvc.popin_corrective.TITRE' | translate}}</h1>\r\n        <p>{{'labels.declaration.uvc.popin_corrective.LABEL1' | translate}}&nbsp;<strong>{{'labels.declaration.uvc.popin_corrective.LABEL2' | translate}} {{historiqueCtrl.selected_annee}}</strong></p>\r\n        <p class=\"question\">\r\n            {{'labels.declaration.uvc.popin_corrective.QUESTION' | translate}}\r\n        </p>\r\n        <form name=\"corrective_form\" ng-submit=\"historiqueCtrl.submit_corrective(corrective_form)\" novalidate>     \r\n            <select name=\"motifs\" ng-model=\"historiqueCtrl.selected_motif\" data-ng-class=\"{ 'error' : corrective_form.motifs.$invalid && historiqueCtrl.corrective_submitted}\" required>\r\n                <option value=\"\">{{'labels.declaration.uvc.popin_corrective.LABEL_MOTIF' | translate}}</option>\r\n                <option ng-repeat=\"motif in historiqueCtrl.motifs_corrective\" value=\"{{motif.Code}}\">{{'motifs_correctives.'+motif.Code | translate}}</option>\r\n            </select>\r\n            <label class=\"control-label\" ng-show=\"corrective_form.motifs.$invalid && (historiqueCtrl.corrective_submitted || corrective_form.motifs.$touched)\">{{'labels.declaration.uvc.popin_corrective.LABEL3' | translate}}</label>\r\n            <textarea placeholder=\"{{'labels.declaration.uvc.popin_corrective.LABEL_COMMENTAIRE' | translate}}\" rows=\"7\" ng-model=\"historiqueCtrl.commentaire\"></textarea>\r\n            <input id=\"ValideBtn\" type=\"submit\" value=\"{{'labels.transverse.BTN_SUIVANT' | translate}}\" />\r\n            <input id=\"CloseBtn\" type=\"button\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"historiqueCtrl.closeModal()\" />\r\n        </form>\r\n    </div>\r\n    <div ng-show=\"historiqueCtrl.etape_corrective==2\">\r\n        <h1>{{'labels.declaration.uvc.popin_corrective.TITRE2' | translate}} {{historiqueCtrl.selected_annee}}<!--{{'labels.declaration.uvc.popin_corrective.TITRE' | translate}}--></h1>\r\n        <p class=\"rappel\">{{'labels.declaration.uvc.popin_corrective.LABEL4' | translate}} {{historiqueCtrl.selected_annee}} <strong>{{'labels.type_declaration.'+historiqueCtrl.type_declaration | translate}} - {{'labels.mode_declaration.'+historiqueCtrl.mode_saisie | translate}}</strong></p>\r\n        <p class=\"question\">\r\n            {{'labels.declaration.uvc.popin_corrective.QUESTION2' | translate}} \r\n        </p>\r\n        <form name=\"modification_form\" ng-submit=\"historiqueCtrl.submit_modification(modification_form)\" novalidate>\r\n            <input type=\"radio\" name=\"radio_group\" ng-model=\"historiqueCtrl.modifier_mode_type_declaration\" value=\"true\" required />&nbsp;{{'labels.declaration.uvc.popin_corrective.REPONSE_OUI' | translate}}\r\n            <input type=\"radio\" name=\"radio_group\" ng-model=\"historiqueCtrl.modifier_mode_type_declaration\" value=\"false\" required />&nbsp;{{'labels.declaration.uvc.popin_corrective.REPONSE_NON' | translate}}\r\n            <label class=\"control-label\" ng-show=\"modification_form.radio_group.$invalid && historiqueCtrl.corrective_submitted\">{{'labels.declaration.uvc.popin_corrective.CHAMPS_OBLIGATOIRE' | translate}}</label>\r\n            <br />\r\n            <input id=\"ValideBtn\" type=\"submit\" value=\"{{'labels.transverse.BTN_SUIVANT' | translate}}\" />\r\n            <input id=\"CloseBtn\" type=\"button\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"historiqueCtrl.closeModal()\" />\r\n         </form>        \r\n    </div>\r\n</div>";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"historiqueCtrl.closeModal()\"></a>\r\n    <div class=\"list_widget\" ng-show=\"historiqueCtrl.etape_choix_mode_saisie==1\">\r\n        <div class=\"widget_uvc\">\r\n            <div class=\"bloc_saisie\" ng-click=\"historiqueCtrl.GoToDelarationEnLigne()\">\r\n                <div class=\"enligne\"></div>\r\n                <h4>{{'labels.declaration.choixdeclaration.choix_mode_saisi.TITLE_DECLARATION_LIGNE' | translate}}</h4>\r\n\r\n            </div>\r\n            <p>\r\n                {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_UN' | translate}}\r\n                <strong>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_DEUX' | translate}}</strong>\r\n                {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_TROIS' | translate}}\r\n            </p>\r\n        </div>\r\n        <div class=\"widget_uvc\">\r\n            <div class=\"bloc_saisie\" ng-click=\"historiqueCtrl.etape_choix_mode_saisie=2\">\r\n                <div class=\"excel\"></div>\r\n                <h4>{{'labels.declaration.choixdeclaration.choix_mode_saisi.TITLE_DECLARATION_EXCEL' | translate}}</h4>\r\n            </div>\r\n            <p>\r\n                {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_UN' | translate}}\r\n                <strong>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_DEUX' | translate}}</strong>\r\n                {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_TROIS' | translate}}\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"options_excel\"  ng-show=\"historiqueCtrl.etape_choix_mode_saisie==2\">\r\n        <h1>{{'labels.declaration.choixdeclaration.choix_mode_saisi.TITLE_CHOIX_OPTION_EXCEL' | translate}} </h1>\r\n        <div class=\"choix_param_container\">\r\n            <div class=\"choix_param_langue\">\r\n                <p>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_LANGUE' | translate}} </p>\r\n                <input type=\"radio\" name=\"langue\" value=\"francais\" ng-model=\"historiqueCtrl.langue_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_LANGUE_FRANCAIS' | translate}}</label>\r\n                <input type=\"radio\" name=\"langue\" value=\"anglais\" ng-model=\"historiqueCtrl.langue_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_LANGUE_ANGLAIS' | translate}}</label>\r\n            </div>\r\n            <div class=\"choix_param_annee\">\r\n                <p>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_ANNEE' | translate}} </p>\r\n                <input type=\"radio\" name=\"annee\" value=\"2007\" ng-model=\"historiqueCtrl.annee_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_ANNEE_EXCEL2007' | translate}}</label>\r\n                <input type=\"radio\" name=\"annee\" value=\"2003\" ng-model=\"historiqueCtrl.annee_excel\" /><label>{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_ANNEE_EXCEL2003' | translate}}</label>\r\n\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <p>\r\n            {{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_MSG1' | translate}}&nbsp;<a href=\"/mon-espace/declaration/accueil\">{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_MSG2' | translate}}</a>&nbsp;{{'labels.declaration.choixdeclaration.choix_mode_saisi.LABEL_DECLARATION_FORFAIT_MSG3' | translate}}\r\n        </p>\r\n        <input class=\"btn\" ng-disabled=\"!historiqueCtrl.langue_excel || !historiqueCtrl.annee_excel\" type=\"button\" value=\"Valider\" ng-click=\"historiqueCtrl.sendDeclarationExcel()\" />\r\n\r\n        <input id=\"CloseBtn\" type=\"button\" value=\"Annuler\" class=\"marg_btn\" ng-click=\"historiqueCtrl.closeModal()\">\r\n    </div>\r\n</div>";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <h1>{{'labels.declaration.uvc.popin_suppression.TITLE' | translate}}</h1>\r\n  <a class=\"close-icon\" ng-click=\"historiqueCtrl.annuleModal()\"></a>\r\n<div>{{'labels.declaration.uvc.popin_suppression.COMFIRM_REMOVE_DECLARATION' | translate}}</div>\r\n  <button type=\"button\" ng-click=\"historiqueCtrl.SupprimerDeclaration()\">{{'labels.transverse.BTN_SAUVEGARDER' | translate}}</button>\r\n  <button type=\"button\" class=\"btn-annuler\" ng-click=\"historiqueCtrl.annuleModal()\">{{'labels.transverse.BTN_ANNULER' | translate}}</button>\r\n</div>";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"page_historique\" ng-cloak>\r\n    <div class=\"page_historique_content\">\r\n        <table>\r\n            <thead>\r\n                <tr> \r\n                    <td colspan=\"7\" style=\"background-color:transparent\">\r\n                        <h1>{{'labels.declaration.historique.TITRE' | translate}}</h1> \r\n                        <p>{{'labels.declaration.historique.DESCRIPTION' | translate}}</p>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th width=\"26%\">{{'labels.declaration.historique.COL1' | translate}}</th>\r\n                    <th width=\"15%\">{{'labels.declaration.historique.COL2' | translate}}</th>\r\n                    <th width=\"15%\">{{'labels.declaration.historique.COL3' | translate}}</th>\r\n                    <th width=\"13%\">{{'labels.declaration.historique.COL4' | translate}}</th>\r\n                    <th width=\"13%\" class=\"montant\">{{'labels.declaration.historique.COL5' | translate}}</th>\r\n                    <th width=\"8%\"></th>\r\n                    <th width=\"12%\"></th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr data-ng-repeat=\"declaration in historiqueCtrl.listdeclarations\">\r\n                    <td>\r\n                        <span class=\"pict_corrective\" ng-show=\"{{declaration.Corrective}}\"></span>\r\n                      <label ng-show=\"{{declaration.Corrective}}\">{{'labels.declaration.historique.CORRECTIVE' | translate}}</label> {{'labels.declaration.historique.LABEL_DECLARATION' | translate}} {{declaration.Annee}}\r\n                    </td>\r\n                    <td>\r\n                        <span ng-show=\"declaration.TypeDecla!=''\">\r\n                            {{'labels.type_declaration.'+declaration.TypeDecla | translate}}\r\n                        </span>\r\n                        <a title=\"{{'labels.declaration.historique.LABEL_MODIFIER' | translate}}\" class=\"pict_editer\" ng-show=\"declaration.LienChangementType\" href=\"/mon-espace/declaration/choix/#?annee={{declaration.Annee}}\"></a>\r\n                        <label ng-show=\"declaration.TypeDecla==''\">-</label>      \r\n                    </td>                  \r\n                    <td>\r\n                        <span ng-show=\"declaration.ModeSaisie!=''\">\r\n                            {{'labels.mode_declaration.'+declaration.ModeSaisie | translate}}\r\n                        </span>\r\n                        <a title=\"{{'labels.declaration.historique.LABEL_MODIFIER' | translate}}\" class=\"pict_editer\" ng-show=\"declaration.LienChangementModeSaisie\" ng-click=\"historiqueCtrl.ModifierModeSaisie(declaration.IdDeclaration,declaration.Annee,declaration.TypeDecla,declaration.ModeSaisie)\"></a>\r\n                        <label ng-show=\"declaration.ModeSaisie==''\">-</label><br />                       \r\n                    </td>                 \r\n                    <td data-ng-class=\"{ 'validee' : declaration.Statut=='VALIDEE' }\">{{'labels.statut_declaration.'+declaration.Statut  | translate }}</td>\r\n                    <td class=\"montant\">\r\n                        <label ng-show=\"declaration.ContributionTotale!='0'\">{{declaration.ContributionTotale  | decimalSeparator }} €</label>\r\n                        <label ng-show=\"declaration.ContributionTotale=='0'\">-</label>\r\n                    </td>\r\n                    <td class=\"modification\">\r\n                        <a title=\"{{'labels.declaration.historique.LABEL_CORRIGER' | translate}}\" class=\"pict_editer\" ng-show=\"declaration.LienModification\" ng-click=\"historiqueCtrl.ModifierDeclaration(declaration.IdDeclaration,declaration.Annee,declaration.TypeDecla,declaration.ModeSaisie)\"></a>\r\n\t\t\t\t\t\t<a title=\"{{'labels.declaration.historique.LABEL_ANNULER' | translate}}\" class=\"pict_delete\" ng-show=\"declaration.LienSupprimer\" ng-click=\"historiqueCtrl.DemandeSuppressionDeclaration(declaration.IdDeclaration,declaration.Annee,declaration.TypeDecla,declaration.ModeSaisie)\"></a>\r\n                    </td>\r\n                    <td>\r\n                        <a class=\"button\" ng-show=\"declaration.LienCreation\" href=\"/mon-espace/declaration/choix/#?annee={{declaration.Annee}}\">{{'labels.declaration.historique.LABEL_SAISIR' | translate}}</a>\r\n                        <a class=\"button\" ng-show=\"declaration.LienTelechargement\" ng-click=\"historiqueCtrl.GetLienTelechargement(declaration.TypeDecla,declaration.Annee)\">{{'labels.declaration.historique.LABEL_TELECHARGER' | translate}}</a>\r\n                        <a class=\"button\" ng-show=\"declaration.LienFinalisationSectDetail\" ng-click=\"historiqueCtrl.GetLienFinalisationSectDetail(declaration.TypeDecla,declaration.ModeSaisie,declaration.Annee)\">{{'labels.declaration.historique.LABEL_COMPLETER' | translate}}</a>\r\n                        <a class=\"button\" ng-show=\"declaration.LienFinalisationForfait\" ng-click=\"historiqueCtrl.GetLienFinalisationForfait(declaration.IdDeclaration,declaration.Annee,declaration.Etape!=null?declaration.Etape:0)\">{{'labels.declaration.historique.LABEL_COMPLETER' | translate}}</a>\r\n                        <a class=\"button\" ng-show=\"declaration.LienFinalisationUVC\" ng-click=\"historiqueCtrl.GetLienFinalisationUvc(declaration.Statut,declaration.IdDeclaration,declaration.ModeSaisie,declaration.Etape)\">{{'labels.declaration.historique.LABEL_COMPLETER' | translate}}</a><!--/*historiqueCtrl.GetLienFinalisationUvc(declaration.Statut,declaration.IdDeclaration,declaration.ModeSaisie,declaration.Etape)*/-->\r\n                    </td>\r\n                </tr>\r\n            </tbody> \r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = "\r\n<div ng-if=\"historique_widgetCtrl.annee_en_cours != historique_widgetCtrl.AnneesContractualisation\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <th colspan=\"1\">{{'labels.declaration.historique.TITRE_WIDGET' | translate}}</th>\r\n                <th colspan=\"2\"><a href=\"{{historique_widgetCtrl.url_historique}}\">{{'labels.declaration.historique.LIEN_VOIR_TOUT' | translate}}</a></th>\r\n            </tr>\r\n            <tr  data-ng-repeat=\"declaration in historique_widgetCtrl.listdeclarations | limitTo:3\">\r\n                <td>{{'labels.declaration.historique.LABEL_DECLARATION' | translate}} {{declaration.Annee}}</td>\r\n                <td>{{'labels.statut_declaration.'+declaration.Statut  | translate}}</td>\r\n                <td class=\"acte\"><a href=\"{{historique_widgetCtrl.url_historique}}\"><div class=\"pict_visu\"></div></a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div> \r\n\r\n\r\n<div  ng-if=\"historique_widgetCtrl.annee_en_cours == historique_widgetCtrl.AnneesContractualisation\">\r\n    <table>\r\n        <tbody>\r\n            <tr>\r\n                <th colspan=\"1\">{{'labels.declaration.historique.TITRE_WIDGET' | translate}}</th>\r\n                <th colspan=\"2\">{{'labels.declaration.historique.LIEN_A_VENIR' | translate}}</th>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div> \r\n\r\n\r\n";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = "<div>   \r\n    <p>Bonjour !</p>\r\n<button class=\"trans suivant-noir\" ng-click=\"lancementrpcCtrl.lancement()\">POPIN</button>\r\n\r\n<!--<button class=\"trans suivant-noir\" ng-click=\"lancementrpcCtrl.cancelMission()\">ANNULER MISSION</button>-->\r\n\r\n<button class=\"trans suivant-noir\" ng-click=\"lancementrpcCtrl.changeMission()\">MODIFICATION MISSION</button>\r\n</div>\r\n";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  MERCI ! </h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"lancementrpcCtrl.closeModal()\"></a>\r\n\r\n    <p>Un email vient de vous être envoyé confirmant le lancement de la demande de mission RPC, </p>\r\n    <p>la date de la déclaration concernée et le contact du professionnel que vous avez missionné. </p>\r\n\r\n    <p>Retrouvez votrre demande dans <a href=\"/mon-espace/declaration/accueil\">vos documents.</a></p>\r\n</div>";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  ERREUR ! </h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"lancementrpcCtrl.closeModal()\"></a>\r\n\r\n    <p>Erreur D'Authentification</p>\r\n</div>";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1>  ERREUR ! </h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"lancementrpcCtrl.closeModal()\"></a>\r\n\r\n    <p>Vous avez déjà lancé une mission RPC. Si vous souhaitez la modifier <a href=\"/mon-espace/declaration/accueil\">cliquez ici</a></p>\r\n</div>";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <h1 data-ng-if=\"!lancementrpcCtrl.IsModification\">LANCER LA MISSION DE RAPPORT DE PROC�DURES CONVENUES</h1>\r\n    <h1 data-ng-if=\"lancementrpcCtrl.IsModification\">MODIFIER LA MISSION DE RAPPORT DE PROC�DURES CONVENUES</h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"lancementrpcCtrl.closeModal()\"></a>\r\n\r\n\r\n\r\n    <div class=\"ctrl_form\">\r\n        <div id=\"recherche\">\r\n            <label for=\"id_recherche\" id=\"recherche\">&nbsp;</label>\r\n            <input type=\"text\" name=\"recherche\" id=\"id_recherche\" placeholder=\"{{'labels.relationClient.choixEntreprise.SEARCH' | translate}}\" \r\n                               data-ng-model=\"lancementrpcCtrl.someVal\" data-ng-change=\"lancementrpcCtrl.textChanged()\" data-ng-Trim=\"false\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"table_produits\">\r\n        <table id=\"choice_expert\">\r\n            <tr>\r\n                <th>Nom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                <th>Adresse &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n                <th>Adresse e-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>\r\n            </tr>\r\n            <tr data-ng-click=\"lancementrpcCtrl.eltSelected(myexpert)\" data-ng-repeat=\"myexpert in lancementrpcCtrl.expertsList\" >\r\n                <td>{{myexpert.nom}}  {{myexpert.prenom}}</td>\r\n                <td>{{myexpert.adresse}} <br/> {{myexpert.code_postal}}  {{myexpert.ville}} </td>\r\n                <td>{{myexpert.email}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n        <!--<ul id=\"choice_expert\">\r\n            <li data-ng-repeat=\"client in lancementrpcCtrl.clients | orderBy:'libelle'\" data-ng-if=\"lancementrpcCtrl.checkMatching(client)\"\r\n                data-ng-click=\"lancementrpcCtrl.goHome(client)\">{{client.libelle}} - <span class=\"bleu\">{{client.idSAP}}</span></li>\r\n        </ul>-->\r\n        <button id=\"ajout\" data-ng-click=\"lancementrpcCtrl.displayMore()\" data-ng-model=\"lancementrpcCtrl.diplayMoreState\" data-ng-disabled=\"!lancementrpcCtrl.diplayMoreState\">Afficher plus</button>\r\n\r\n        <button class=\"suivant\" data-ng-click=\"lancementrpcCtrl.createRPC()\" data-ng-model=\"lancementrpcCtrl.validerState\" data-ng-disabled=\"!lancementrpcCtrl.validerState\">VALIDER</button>\r\n\r\n        <button id=\"CloseBtn\" data-ng-click=\"lancementrpcCtrl.closeModal()\">Annuler</button>\r\n    </div>";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n\r\n    <h1>LANCER LA MISSION DE RAPPORT DE PROCÉDURES CONVENUES</h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"lancementrpcCtrl.closeModal()\"></a>\r\n\r\n\r\n    <p>Le RPC est obligatoire dès 2017. Ainsi si vous ne l'avez pas réalisé ces 2 dernières années, vous devez</p>\r\n    <p>le produire pour la déclaration 2016.</p><br />\r\n\r\n    <p>Le RPC est un programme de travail établi sous forme de points de contrôle visnat tous les aspects</p>\r\n    <p>de la démarche déclarative.</p><br />\r\n\r\n    <p>Véritable outil de diagnostic et d'accompagnement, il vous permet d'identifier facilement les</p>\r\n    <p>non-conformités de votre déclaration et d'adapter votre processus déclaratif.</p><br /><br /><br />\r\n\r\n    <p><b>Choisissez l'Expert qui réalisera la mission :</b></p><br />\r\n\r\n    <input type=\"radio\" ng-model=\"lancementrpcCtrl.ec\" value=\"EC\"/><label class=\"info-check\">Expert Comptable </label>\r\n    <input type=\"radio\" ng-model=\"lancementrpcCtrl.ec\" value=\"CAC\"/><label class=\"info-check\">Commissaire aux comptes</label><br /> <br />\r\n    <button class=\"suivant\" ng-click=\"lancementrpcCtrl.ChoixExpert()\" ng-disabled=\"!lancementrpcCtrl.ec\">\r\n        SUIVANT\r\n    </button>\r\n    <button ng-click=\"lancementrpcCtrl.closeModal()\">\r\n        Annuler\r\n    </button>\r\n\r\n\r\n</div>";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n\r\n    <h1>MODIFIER LA MISSION DE RAPPORT DE PROCÉDURES CONVENUES</h1>\r\n    <!--<a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>-->\r\n    <a class=\"close-icon\" ng-click=\"lancementrpcCtrl.closeModal()\"></a>\r\n    \r\n\r\n    <p><b>Choisissez l'Expert qui réalisera la mission :</b></p><br />\r\n\r\n    <input type=\"radio\" ng-model=\"lancementrpcCtrl.ec\" value=\"EC\"/><label class=\"info-check\">Expert Comptable </label>\r\n    <input type=\"radio\" ng-model=\"lancementrpcCtrl.ec\" value=\"CAC\"/><label class=\"info-check\">Commissaire aux comptes</label><br /> <br />\r\n    <button class=\"suivant\" ng-click=\"lancementrpcCtrl.ChoixExpert()\" ng-disabled=\"!lancementrpcCtrl.ec\">\r\n        SUIVANT\r\n    </button>\r\n    <button ng-click=\"lancementrpcCtrl.closeModal()\">\r\n        Annuler\r\n    </button>\r\n\r\n\r\n</div>";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = "Recommandation\r\n<div class=\"row\">\r\n    <div class=\"col-md-3\" data-ng-repeat=\"typeDeclaration in recommandationCtrl.typesDeclarations\">\r\n        <label>{{typeDeclaration.code}}</label>\r\n        <p data-ng-bind-html=\"typeDeclaration.html\"></p>\r\n    </div>\r\n</div>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <h1>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_ERROR_TITLE' | translate}}</h1>\r\n  <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n  <p>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_ERROR_TEXT' | translate}}</p>\r\n</div>\r\n";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <h1>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_EXIPRED_TITLE' | translate}}</h1>\r\n  <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n  <p>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_EXIPRED_TEXT' | translate}}</p>\r\n</div>\r\n";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <h1>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_LOCKED_TITLE' | translate}}</h1>\r\n  <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n  <p>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_LOCKED_TEXT' | translate}}</p>\r\n</div>\r\n";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <h1>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_SUCCESS_TITLE' | translate}}</h1>\r\n  <a class=\"close-icon\" ng-click=\"rpcCtrl.closeModal()\"></a>\r\n\r\n  <p>{{'labels.declaration.rpc_popins.CODE_ACTIVATION_SUCCESS_TEXT' | translate}}</p>\r\n</div>\r\n";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"simulateur\">\r\n    <h1><strong>{{'labels.declaration.choixdeclaration.simulateur.TITLE_SIMULATEUR' | translate}}</strong> </h1>\r\n    <h5>{{'labels.declaration.choixdeclaration.simulateur.TITLE_SIMULATEUR_CHOIX' | translate}} </h5>\r\n    <div class=\"bloc_simulateur \">\r\n    <table>\r\n        <tr>\r\n            <td><h4>{{simulateurCtrl.getTypeDeclarationParId('sect').titre}}</h4>\r\n        <p data-ng-bind-html=\"simulateurCtrl.getTypeDeclarationParId('sect').html\"></p></td>\r\n            <td><a target=\"_self\" class=\"button btn_simul\" href=\"{{simulateurCtrl.getExcelLinkByType('SimulateurSECTORIELLE')}}?display=attachement\">{{simulateurCtrl.orga == 'adelphe' ? ('labels.transverse.DOWNLOAD' | translate) : ''}}</a></td>\r\n        </tr>\r\n        </table>\r\n        <table>\r\n        <tr>\r\n            <td><h4>{{simulateurCtrl.getTypeDeclarationParId('uvc').titre}}</h4>\r\n        <p data-ng-bind-html=\"simulateurCtrl.getTypeDeclarationParId('uvc').html\"></p></td>\r\n            <td><a target=\"_self\" class=\"button btn_simul\" href=\"{{simulateurCtrl.getExcelLinkByType('SimulateurUVC')}}?display=attachement\">{{simulateurCtrl.orga == 'adelphe' ? ('labels.transverse.DOWNLOAD' | translate) : ''}}</a></td>\r\n        </tr>\r\n        </table>\r\n        <table>\r\n        <tr>\r\n            <td><h4>{{simulateurCtrl.getTypeDeclarationParId('emb').titre}}</h4>\r\n        <p data-ng-bind-html=\"simulateurCtrl.getTypeDeclarationParId('emb').html\"></p></td>\r\n            <td><a target=\"_self\" class=\"button btn_simul\" href=\"{{simulateurCtrl.getExcelLinkByType('SimulateurDETAILLEE')}}?display=attachement\">{{simulateurCtrl.orga == 'adelphe' ? ('labels.transverse.DOWNLOAD' | translate) : ''}}</a></td>\r\n        </tr>\r\n    </table>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"excelCtrl.closeModal()\"></a>\r\n    <h1>{{'labels.declaration.uvc.popin_corrective.TITRE' | translate}}</h1>\r\n    <p>{{'labels.declaration.uvc.popin_corrective.LABEL1' | translate}}&nbsp;<strong>{{'labels.declaration.uvc.popin_corrective.LABEL2' | translate}} {{excelCtrl.selected_annee}}</strong></p>\r\n    <p class=\"question\">\r\n       {{'labels.declaration.uvc.popin_corrective.QUESTION' | translate}}\r\n    </p>\r\n    <form name=\"corrective_form\" ng-submit=\"excelCtrl.submit_corrective(corrective_form)\" novalidate>\r\n      \r\n        <select name=\"motifs\" ng-model=\"excelCtrl.selected_motif\" required>\r\n            <option value=\"\">{{'labels.declaration.uvc.popin_corrective.LABEL_MOTIF' | translate}}</option>\r\n            <option ng-repeat=\"motif in excelCtrl.motifs_corrective\" value=\"{{motif.Code}}\">{{'motifs_correctives.'+motif.Code | translate}}</option>\r\n        </select>\r\n        <label class=\"control-label\" ng-show=\"corrective_form.motifs.$invalid && (excelCtrl.corrective_submitted || corrective_form.motifs.$touched)\">veuillez préciser le motif de votre corrective</label>\r\n\r\n       \r\n        <textarea placeholder=\"{{'labels.declaration.uvc.popin_corrective.LABEL_COMMENTAIRE' | translate}}\" rows=\"7\" ng-model=\"excelCtrl.commentaire\"></textarea>\r\n        <input id=\"ValideBtn\" type=\"submit\" value=\"{{'labels.transverse.BTN_SUIVANT' | translate}}\" />\r\n        <input id=\"CloseBtn\" type=\"button\" value=\"{{'labels.transverse.BTN_ANNULER' | translate}}\" ng-click=\"excelCtrl.closeModal()\" />\r\n    </form>\r\n\r\n</div>\r\n ";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"excelCtrl.closeModal()\"></a>\r\n    <h1>{{'labels.declaration.uvc.popin_confirmation.ERROR_MSG' | translate}}</h1>\r\n    <div>{{'errors.formulaire_upload.'+excelCtrl.custom_error | translate}}</div>\r\n</div>";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"excel_upload_bloc\" ng-show=\"excelCtrl.step==1\" ng-cloak>\r\n    <form id=\"excel_upload_form_id\" name=\"excel_upload_form\" novalidate>\r\n        <h1>{{'labels.declaration.uvc.formulaire_upload.TITLE' | translate}}</h1>\r\n        <h4>{{'labels.declaration.uvc.formulaire_upload.TITLE_SELECT_DECLARATION_TYPE' | translate}}</h4>\r\n        <p>\r\n            <input type=\"radio\" name=\"type_declaration\" ng-model=\"excelCtrl.type_declaration\" value=\"detaillee\" required /><label>{{'labels.type_declaration.DETAILLEE' | translate}}&nbsp;</label>\r\n            <input type=\"radio\" name=\"type_declaration\" ng-model=\"excelCtrl.type_declaration\" value=\"uvc\" required /><label>{{'labels.type_declaration.UVC' | translate}}&nbsp;</label>\r\n            <input type=\"radio\" name=\"type_declaration\" ng-model=\"excelCtrl.type_declaration\" value=\"sectorielle\" required /><label>{{'labels.type_declaration.SECTORIELLE' | translate}}</label><br />\r\n        </p>\r\n        <label class=\"control-label\" ng-show=\"excel_upload_form.type_declaration.$invalid && excelCtrl.submitted\">{{'errors.formulaire_upload.TYPE_DECLARATION_REQUIRED' | translate}}</label>\r\n        <h4>{{'labels.declaration.uvc.formulaire_upload.TITLE_SELECT_YEAR' | translate}}</h4>\r\n        <select name=\"selected_annee\" ng-model=\"excelCtrl.selected_annee\" data-ng-class=\"{ 'error' : excel_upload_form.selected_annee.$invalid  && excelCtrl.submitted}\" required>\r\n            <option ng-repeat=\"annee in excelCtrl.annees_declaration\" value=\"{{annee}}\">{{annee}}</option>\r\n        </select>\r\n        <label class=\"control-label\" ng-show=\"excel_upload_form.selected_annee.$invalid && (excelCtrl.submitted || excel_upload_form.selected_annee.$touched)\">{{'errors.formulaire_upload.ANNEE_REQUIRED' | translate}}</label> \r\n      \r\n        <br /><br />\r\n        <label for=\"file_upload\" class=\"contour marg_rgt\">\r\n             {{'labels.declaration.uvc.formulaire_upload.TITLE_SELECT_FILE' | translate}}\r\n        </label> \r\n        <input type=\"file\" ng-model=\"excelCtrl.file_name\" file-model=\"excelCtrl.declarationFile\" data-ng-class=\"{ 'error' : excel_upload_form.file_upload_name.$invalid  && excelCtrl.submitted}\" value=\"upload uxcel\" name=\"file_upload_name\" id=\"file_upload\" required valid-file />\r\n        <label>{{excelCtrl.declarationFile.name}}</label>  \r\n        <label class=\"control-label\" ng-show=\"excel_upload_form.file_upload_name.$error.validFile && excelCtrl.submitted\">{{'errors.formulaire_upload.FILE_REQUIRED' | translate}}</label>\r\n        <br />\r\n        <div class=\"foot_acces_direct\">\r\n            <ul>\r\n                <li><button ng-click=\"excelCtrl.submit(excel_upload_form)\" class=\"btn suivant\">{{'labels.declaration.uvc.formulaire_upload.LABEL_BTN_VALIDATE' | translate}}</button></li>\r\n            </ul>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div ng-show=\"excelCtrl.step=='controle_ecart'\" ng-cloak>\r\n    <data-controleecart data-declarationid=\"{{excelCtrl.RecapDeclaration.IdDeclaration}}\" onvalidate=\"excelCtrl.step = 2\" onback=\"excelCtrl.goBackFromControlEcart()\"></data-controleecart>\r\n</div>\r\n<div ng-show=\"excelCtrl.step==2\" ng-cloak>\r\n    <form id=\"mail_form\" name=\"mail_form\" novalidate>\r\n        <h1><strong>{{'labels.declaration.uvc.send_mails.TITLE' | translate}}</strong></h1>\r\n        <p>{{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_1' | translate}} <br />\r\n        {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_2' | translate}} <br /> <br />\r\n        {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_3' | translate}}</p>\r\n        <table class=\"tab_declaration ajout_desti\">\r\n            <tr>\r\n                <td>\r\n                    <img src=\"/sites/default/files/inline-images/pict_mail.png\" class=\"marg-img\" /><input type=\"email\" name=\"email\" ng-model=\"excelCtrl.mailinput\" ng-keyup=\"$event.keyCode == 13 && !mail_form.email.$invalid && !mail_form.email.$error.pattern && excelCtrl.addMails()\" ng-pattern=\"excelCtrl.email_pattern\" autocomplete=\"off\" placeholder=\"{{'labels.declaration.uvc.send_mails.PLACEHOLDER_EMAIL' | translate}}\" required>\r\n                    <span ng-show=\"mail_form.email.$invalid && !mail_form.email.$pristine && mail_form.email.$error.pattern\" class=\"help-block error\">{{'labels.declaration.uvc.send_mails.LABEL_ERROR' | translate}}</span>\r\n                </td>              \r\n            <td></td>\r\n            </tr>\r\n            <tr ng-repeat=\"mail in excelCtrl.mails\">\r\n                <td><input type=\"email\" name=\"email\" placeholder=\"{{mail}}\" class=\"no-border\" disabled ></td>                \r\n                <td><div ng-click=\"excelCtrl.removeMail(mail)\" class=\"pict_delete\">&nbsp;</div></td>                 \r\n            </tr>\r\n        </table>\r\n        <input id=\"ajout\" type=\"button\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_ADD_RECIPIENTS' | translate}}\" ng-disabled=\"mail_form.$invalid\" ng-click=\"excelCtrl.addMails()\">\r\n     <br />\r\n        <div class=\"foot_acces_direct\">\r\n            <ul>\r\n                <li><input type=\"button\" id=\"btn-grey\" ng-click=\"excelCtrl.saveMails()\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_BTN_NO_VALIDATE' | translate}}\" /></li>\r\n                <li><input type=\"checkbox\" ng-model=\"checked\" ng-click=\"selected()\" /><label class=\"info-check\">{{'labels.declaration.uvc.send_mails.LABEL_CERTIFIE' | translate}}</label></li>\r\n                <li><input type=\"button\" class=\"btn\" ng-disabled=\"!checked\" ng-click=\"excelCtrl.valideMails()\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_BTN_VALIDATE' | translate}}\" /></li>\r\n            </ul>\r\n        </div>\r\n    </form>\r\n</div>\r\n";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <div ng-hide=\"excelCtrl.loading\">\r\n        <a class=\"close-icon\" ng-click=\"excelCtrl.closeModal()\"></a>\r\n        <div ng-show=\"excelCtrl.status_code==200\">\r\n            <div class=\"recap_decla\">\r\n                <h1>{{'labels.declaration.uvc.popin_confirmation.TITRE' | translate}}</h1>\r\n                <p>\r\n                    {{'labels.declaration.uvc.popin_confirmation.LABEL1' | translate}} {{excelCtrl.RecapDeclaration.Annee}} {{'labels.declaration.uvc.popin_confirmation.LABEL2' | translate}}\r\n                    <span class=\"chiffre_decla\">\r\n                        {{excelCtrl.RecapDeclaration.ContributionTotale | decimalSeparator}} € {{'labels.declaration.uvc.popin_confirmation.HT' | translate}}\r\n                    </span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div ng-hide=\"excelCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_confirmation.ERROR_MSG' | translate}}</h1>\r\n            <div>{{excelCtrl.errors | translate}}</div>\r\n        </div>\r\n        <div ng-show=\"excelCtrl.status_code==200\" class=\"recap_decla\">\r\n            <button id=\"ValideBtn\"  class=\"suivant\"  ng-click=\"excelCtrl.valideModal()\">{{'labels.transverse.BTN_VALIDER' | translate}}</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"loading_spinner\" ng-show=\"excelCtrl.loading\">\r\n        <loading></loading>      \r\n    </div>\r\n</div>";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <div ng-hide=\"excelCtrl.loading\">\r\n        <a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>\r\n        <div ng-show=\"excelCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_validation.TITLE' | translate}}</h1>\r\n            <p>{{'labels.declaration.uvc.popin_validation.RAPPEL_CONTRIB' | translate}}<span class=\"chiffre_decla\">{{excelCtrl.RecapDeclaration.ContributionTotale | decimalSeparator}} € {{'labels.declaration.uvc.popin_validation.TAXE' | translate}}</span></p>\r\n            <div class=\"list_widget\">\r\n                <a class=\"widget env_justif\" ng-show=\"{{excelCtrl.RecapDeclaration.Decote==true && excelCtrl.RecapDeclaration.AttestationRecycleValidee==false}}\" href=\"/OldApp/Declaration/EcdJustificatifs?typeDocument=AttestRec\">\r\n                    {{'labels.declaration.uvc.popin_validation.LABEL_BTN_ATTESTATIONS' | translate}}\r\n                </a>  \r\n            </div>\r\n                <button class=\"suivant\" onclick='window.location.href=\"/mon-espace/declaration/accueil\"'>\r\n                    {{'labels.declaration.uvc.popin_validation.LABEL_BTN_ACCUEIL' | translate}}\r\n                </button>\r\n        </div>\r\n        <div ng-hide=\"excelCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_validation.ERROR_MSG' | translate}}</h1>\r\n            <div>{{excelCtrl.errors}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"loading_spinner\" ng-show=\"excelCtrl.loading\">\r\n        <loading></loading>   \r\n    </div>\r\n</div>";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"ctrl.closeModal()\"></a>\r\n    <h3>{{'errors.declaration.UVC_ENCOURS' | translate}}</h3>\r\n    <button id=\"ValideBtn\" ng-click=\"ctrl.closeModal()\">OK</button>\r\n</div>";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <a class=\"close-icon\" ng-click=\"ctrl.closeModal()\"></a>\r\n    <h3>{{'labels.declaration.uvc.popin_produits.MSG_CONFIRMATION' | translate}}</h3>\r\n    \r\n    <button id=\"ValideBtn\" ng-click=\"ctrl.confirmDeleteUvc()\">{{'labels.declaration.uvc.popin_produits.REPONSE_OUI' | translate}}</button>\r\n    <input id=\"CloseBtn\" type=\"button\" value=\"{{'labels.declaration.uvc.popin_produits.REPONSE_NON' | translate}}\" ng-click=\"ctrl.closeModal()\" />\r\n</div>\r\n\r\n\r\n\r\n                   ";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal produits_modal\">\r\n    <a class=\"close-icon\" ng-click=\"ctrl.closeModal()\"></a>\r\n    <h1>{{'labels.declaration.uvc.popin_produits.TITRE' | translate}}</h1>\r\n    <p>{{'labels.declaration.uvc.popin_produits.DESCRIPTION' | translate}}</p>\r\n    <span class=\"recherche_produit_img\"></span>\r\n    <label class=\"produit_exposant\" ng-hide=\"ctrl.query=='' || ctrl.query==null\">{{'labels.declaration.uvc.popin_produits.SEARCH_LABEL'|translate}}</label>\r\n    <input type=\"text\" ng-model=\"ctrl.query\" placeholder=\"{{'labels.declaration.uvc.popin_produits.SEARCH_LABEL' | translate}}\" />\r\n    <div class=\"table_produits\">\r\n        <table border=\"1\">\r\n            <tr>\r\n                <th>{{'labels.declaration.uvc.popin_produits.CODE_PRODUIT' | translate}}</th>\r\n                <th>{{'labels.declaration.uvc.popin_produits.LIBELLE_PRODUIT' | translate}}</th>\r\n            </tr>\r\n            <tr data-ng-repeat=\"p in ctrl.produits | filter:ctrl.query\" ng-click=\"ctrl.code_produit_tmp=p.code\"  ng-class=\"{'row_selected': ctrl.code_produit_tmp==p.code}\">\r\n                <td>{{p.code}}</td>\r\n                <td>{{p.libelle}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <button id=\"ValideBtn\" ng-disabled=\"ctrl.code_produit_tmp==''\" ng-click=\"ctrl.setProduit()\">{{'labels.declaration.uvc.popin_produits.BTN_ADD' | translate}}</button>\r\n    <input id=\"CloseBtn\" type=\"button\" value=\"{{'labels.declaration.uvc.popin_produits.BTN_ANNULER' | translate}}\" ng-click=\"ctrl.closeModal()\" />\r\n</div>";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"declaration_web\" data-ng-if=\"ctrl.id_declaration!='' && !ctrl.error\">\r\n    <div class=\"uvc_form_container\">\r\n        <div class=\"uvc_form\" ng-class=\"{'stop_scrolling':ctrl.selectedUVC==undefined}\">\r\n            <form id=\"uvc_web_form_id\" name=\"ctrl.uvc_web_form_id\" novalidate ng-show=\"ctrl.vue=='ecriture'\">\r\n                <input ng-change=\"ctrl.produit_spec='0';ctrl.uvc.ProduitId='';ctrl.uvc.NbUvcEmballMenagers=''\" type=\"radio\" name=\"type_produit\" data-ng-model=\"ctrl.uvc.Spec\" data-ng-value=\"false\" /><label class=\"add_uvc_label\">{{'labels.declaration.uvc.formulaire.LABEL_ADD_UVC'|translate}}</label>\r\n                <input type=\"radio\" name=\"type_produit\" data-ng-model=\"ctrl.uvc.Spec\" data-ng-value=\"true\" ng-change=\"ctrl.uvc.ProduitId=''\" />\r\n                <select ng-options=\"t.id as t.libelle for t in ctrl.list_produits_spec\" ng-class=\"{'produits_spec_not_seleted': !ctrl.uvc.Spec}\" ng-change=\"ctrl.uvc.Spec=true;ctrl.CalculerNbBobinesAlimentaire()\" class=\"produits_spec\" name=\"produits_spec\" data-ng-model=\"ctrl.uvc.ProduitId\">\r\n                    <option value=\"\" disabled>{{'labels.declaration.uvc.formulaire.LABEL_ADD_SPEC'|translate}}</option>\r\n                </select>\r\n\r\n                <a class=\"infobulle_uvc\" style=\"margin-top: 5px;\">\r\n                    <span class=\"arrow_box arrow_box_right\">{{'labels.declaration.uvc.formulaire.INFOBULLE1'|translate}}</span>\r\n                </a>\r\n                <br />\r\n                <label class=\"control-label\" ng-show=\"ctrl.erreurs && ctrl.submitted\">{{'labels.declaration.uvc.formulaire.ERREUR_FORMULAIRE'|translate}}</label>\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_PRODUIT'|translate}}\r\n                    <a class=\"infobulle_uvc\">\r\n                        <span class=\"arrow_box\">{{'labels.declaration.uvc.formulaire.INFOBULLE2'|translate}}</span>\r\n                    </a>\r\n                </h3>\r\n                <label class=\"produit_exposant\" ng-hide=\"ctrl.uvc==undefined || ctrl.uvc.Libelle=='' || ctrl.uvc.Libelle==null\">{{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_UVC'|translate}}</label>\r\n                <input name=\"uvc_libelle\" class=\"uvc_libelle\" type=\"text\" placeholder=\"{{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_UVC'|translate}}\" ng-model=\"ctrl.uvc.Libelle\" data-ng-class=\"{ 'error' : ctrl.uvc_web_form_id.uvc_libelle.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.uvc_libelle.$touched)}\" maxlength=\"50\" required />\r\n                <label class=\"control-label\" ng-show=\"ctrl.uvc_web_form_id.uvc_libelle.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.uvc_libelle.$touched)\">{{'labels.declaration.uvc.formulaire.ERROR_LIBELLE'|translate}}</label>\r\n                <div ng-click=\"!ctrl.uvc.Spec && ctrl.openModal()\" class=\"search_product\" data-ng-class=\"{ 'search_product_error' : ctrl.uvc_web_form_id.produit_id.$invalid && ctrl.submitted}\">\r\n                    <label class=\"produit_exposant\" ng-hide=\"ctrl.uvc==ProduitId || ctrl.uvc.ProduitId=='' || ctrl.uvc.ProduitId==null\">{{'labels.declaration.uvc.formulaire.CODE_PRODUIT'|translate}}</label>\r\n                    <label class=\"produit_exposant\" ng-hide=\"ctrl.uvc==ProduitId || ctrl.uvc.ProduitId=='' || ctrl.uvc.ProduitId==null\">{{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_PRODUIT'|translate}}</label>\r\n                    <input type=\"text\" name=\"produit_id\" required placeholder=\"{{'labels.declaration.uvc.formulaire.CODE_PRODUIT'|translate}}\" ng-model=\"ctrl.uvc.ProduitId\" disabled />\r\n                    <input type=\"text\" placeholder=\"{{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_PRODUIT'|translate}}\" value=\"{{(ctrl.uvc.ProduitId!='' && ctrl.uvc.ProduitId!=null?'produits.'+ctrl.uvc.ProduitId:'') | translate}}\" ng-show=\"!ctrl.uvc.Spec\" disabled />\r\n                    <input type=\"text\" placeholder=\"{{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_PRODUIT'|translate}}\" value=\"{{(ctrl.uvc.ProduitId!='' && ctrl.uvc.ProduitId!=null?'produits_spec.'+ctrl.uvc.ProduitId:'') | translate}}\" ng-show=\"ctrl.uvc.Spec\" disabled />\r\n                    <span class=\"select_produit\" ng-class=\"{'disabled':ctrl.uvc.Spec}\"></span>\r\n                </div>\r\n                <label class=\"control-label\" ng-show=\"ctrl.uvc_web_form_id.produit_id.$invalid && ctrl.submitted\">{{'labels.declaration.uvc.formulaire.ERROR_PRODUIT'|translate}}</label>\r\n\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_POIDS'|translate}}\r\n                    <SPAN>{{ctrl.uvc.Spec?'labels.declaration.uvc.formulaire.TITRE_POIDS_UNITAIRE_KG':'labels.declaration.uvc.formulaire.TITRE_POIDS_UNITAIRE'|translate}}</SPAN>\r\n                    <a class=\"infobulle_uvc\">\r\n                        <span class=\"arrow_box\">\r\n                            {{'labels.declaration.uvc.formulaire.INFOBULLE3'|translate}}\r\n                        </span>\r\n                    </a>\r\n                </h3>\r\n                <span>{{'labels.declaration.uvc.formulaire.LABEL_REMPLIR_PRODUITS'|translate}}</span>\r\n                <table class=\"materiaux_inputs\">\r\n                    <tr class=\"title_row\">\r\n                        <td style=\"width:48%\"><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.acier)\">{{'labels.declaration.uvc.Materiaux.acier'|translate}}</label></td>\r\n                        <td style=\"width:4%\"></td>\r\n                        <td style=\"width:48%\"><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.alum)\">{{'labels.declaration.uvc.Materiaux.alum'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width:48%\"><input name=\"acier\" type=\"number\" placeholder=\"{{'labels.declaration.uvc.Materiaux.acier'|translate}}\" ng-model=\"ctrl.uvc.acier\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.acier.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.acier.$touched)}\" materiau /></td>\r\n                        <td style=\"width:4%\"></td>\r\n                        <td style=\"width:48%\"><input name=\"alum\" type=\"number\" placeholder=\"{{'labels.declaration.uvc.Materiaux.alum'|translate}}\" ng-model=\"ctrl.uvc.alum\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.alum.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.alum.$touched)}\" ng-change=\"ctrl.CalculerNbBobinesAlimentaire()\" materiau /></td>\r\n                    </tr>\r\n                    <tr class=\"title_row\">\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.pcNonBriq)\">{{'labels.declaration.uvc.Materiaux.pcNonBriq'|translate}}</label></td>\r\n                        <td></td>\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.briq)\">{{'labels.declaration.uvc.Materiaux.briq'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input type=\"number\" name=\"pcNonBriq\" placeholder=\"{{'labels.declaration.uvc.Materiaux.pcNonBriq'|translate}}\" ng-model=\"ctrl.uvc.pcNonBriq\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.pcNonBriq.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.pcNonBriq.$touched)}\" ng-change=\"ctrl.CalculerNbBobinesAlimentaire()\" materiau /></td>\r\n                        <td></td>\r\n                        <td><input type=\"number\" name=\"briq\" placeholder=\"{{'labels.declaration.uvc.Materiaux.briq'|translate}}\" ng-model=\"ctrl.uvc.briq\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.briq.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.briq.$touched)}\" materiau /></td>\r\n                    </tr>\r\n                    <tr class=\"title_row\">\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.petClair)\">{{'labels.declaration.uvc.Materiaux.petClair'|translate}}</label></td>\r\n                        <td></td>\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.flacon)\">{{'labels.declaration.uvc.Materiaux.flacon'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input type=\"number\" name=\"petClair\" placeholder=\"{{'labels.declaration.uvc.Materiaux.petClair'|translate}}\" ng-model=\"ctrl.uvc.petClair\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.petClair.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.petClair.$touched)}\" materiau /></td>\r\n                        <td></td>\r\n                        <td><input type=\"number\" name=\"flacon\" placeholder=\"{{'labels.declaration.uvc.Materiaux.flacon'|translate}}\" ng-model=\"ctrl.uvc.flacon\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.flacon.$invalid && (ctrl.submitted ||ctrl.uvc_web_form_id.flacon.$touched)}\" materiau /></td>\r\n                    </tr>\r\n                    <tr class=\"title_row\">\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.autrePlas)\">{{'labels.declaration.uvc.Materiaux.autrePlas'|translate}}</label></td>\r\n                        <td></td>\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.verre)\">{{'labels.declaration.uvc.Materiaux.verre'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td><input type=\"number\" name=\"autrePlas\" placeholder=\"{{'labels.declaration.uvc.Materiaux.autrePlas'|translate}}\" ng-model=\"ctrl.uvc.autrePlas\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.autrePlas.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.autrePlas.$touched)}\" ng-change=\"ctrl.CalculerNbBobinesAlimentaire()\" materiau /></td>\r\n                        <td></td>\r\n                        <td><input type=\"number\" name=\"verre\" placeholder=\"{{'labels.declaration.uvc.Materiaux.verre'|translate}}\" ng-model=\"ctrl.uvc.verre\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.verre.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.verre.$touched)}\" materiau /></td>\r\n                    </tr>\r\n\r\n                    <tr class=\"title_row\" ng-if=\"ctrl.orgaCommerciale=='adelphe'\">\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.Bois)\">{{'labels.declaration.uvc.Materiaux.bois'|translate}}</label></td>\r\n                        <td></td>\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.Textile)\">{{'labels.declaration.uvc.Materiaux.textile'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr ng-if=\"ctrl.orgaCommerciale=='adelphe'\">\r\n                        <td><input type=\"number\" name=\"autrePlas\" placeholder=\"{{'labels.declaration.uvc.Materiaux.bois'|translate}}\" ng-model=\"ctrl.uvc.Bois\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.bois.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.bois.$touched)}\" materiau /></td>\r\n                        <td></td>\r\n                        <td><input type=\"number\" name=\"textile\" placeholder=\"{{'labels.declaration.uvc.Materiaux.textile'|translate}}\" ng-model=\"ctrl.uvc.Textile\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.textile.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.textile.$touched)}\" materiau /></td>\r\n                    </tr>\r\n\r\n\r\n                    <tr class=\"title_row\">\r\n                        <td><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.autre)\">{{'labels.declaration.uvc.Materiaux.autre'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"3\"><input type=\"number\" name=\"autre\" placeholder=\"{{'labels.declaration.uvc.Materiaux.autre'|translate}}\" ng-model=\"ctrl.uvc.autre\" ng-pattern=\"/^[0-9]+(\\.[0-9]{1,4})?$/\" step=\"0.01\" min=\"0\" data-ng-class=\"{'error' : ctrl.uvc_web_form_id.autre.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.autre.$touched)}\" materiau /></td>\r\n                    </tr>\r\n                </table>\r\n                <input type=\"hidden\" name=\"materiaux_valide\" ng-model=\"test0\" ng-required=\"!ctrl.MateriauxValide()\" />\r\n                <label class=\"control-label\" ng-show=\"ctrl.uvc_web_form_id.materiaux_valide.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.autre.$touched|| ctrl.uvc_web_form_id.autre.$touched|| ctrl.uvc_web_form_id.verre.$touched|| ctrl.uvc_web_form_id.autrePlas.$touched|| ctrl.uvc_web_form_id.flacon.$touched|| ctrl.uvc_web_form_id.petClair.$touched|| ctrl.uvc_web_form_id.briq.$touched|| ctrl.uvc_web_form_id.pcNonBriq.$touched|| ctrl.uvc_web_form_id.alum.$touched|| ctrl.uvc_web_form_id.acier.$touched || (ctrl.orgaCommerciale=='adelphe' && (ctrl.uvc_web_form_id.bois.$touched || ctrl.uvc_web_form_id.textile.$touched)))\">\r\n                    {{'labels.declaration.uvc.formulaire.ERROR_MATERIAUX'|translate}}\r\n                </label>\r\n                <br />\r\n                <input type=\"hidden\" name=\"produits_spec_valide\" ng-model=\"test1\" ng-required=\"!ctrl.ProduitSpecValide()\" />\r\n                <label class=\"control-label\" ng-show=\"ctrl.uvc_web_form_id.produits_spec_valide.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.autre.$touched|| ctrl.uvc_web_form_id.autre.$touched|| ctrl.uvc_web_form_id.verre.$touched|| ctrl.uvc_web_form_id.autrePlas.$touched|| ctrl.uvc_web_form_id.flacon.$touched|| ctrl.uvc_web_form_id.petClair.$touched|| ctrl.uvc_web_form_id.briq.$touched|| ctrl.uvc_web_form_id.pcNonBriq.$touched|| ctrl.uvc_web_form_id.alum.$touched|| ctrl.uvc_web_form_id.acier.$touched || (ctrl.orgaCommerciale=='adelphe' && (ctrl.uvc_web_form_id.bois.$touched || ctrl.uvc_web_form_id.textile.$touched)))\">\r\n                    {{'labels.declaration.uvc.formulaire.ERREUR_PRODUIT_SPEC'+ctrl.ProduitSpecError|translate}}\r\n                </label>\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_DECOTE'|translate}}\r\n                    <a class=\"infobulle_uvc\">\r\n                        <span class=\"arrow_box\">{{'labels.declaration.uvc.formulaire.INFOBULLE4'|translate}}</span>\r\n                    </a>\r\n                </h3>\r\n                {{'labels.declaration.uvc.formulaire.LABEL_PAPIER_CARTON_RECYCLE'|translate}}\r\n                <div ng-class=\"{'toggle btn btn-primary':ctrl.uvc.Decote,'toggle btn btn-default off': !ctrl.uvc.Decote}\" ng-click=\"ctrl.uvc.Decote=!ctrl.uvc.Decote; ctrl.decote_touched=true\">\r\n                    <div class=\"toggle-group\">\r\n                        <label class=\"btn btn-primary toggle-on\">{{'labels.declaration.uvc.formulaire.DECOTE_OUI'|translate}}</label>\r\n                        <label class=\"btn btn-default active toggle-off\">{{'labels.declaration.uvc.formulaire.DECOTE_NON'|translate}}</label>\r\n                        <span class=\"toggle-handle btn btn-default\"></span>\r\n                    </div>\r\n                </div>\r\n                <input type=\"hidden\" name=\"decote_valide\" ng-model=\"test\" ng-required=\"ctrl.uvc.Decote && (ctrl.uvc.pcNonBriq == null || ctrl.uvc.pcNonBriq == '' || ctrl.uvc.pcNonBriq == 0)\" />\r\n                <label class=\"control-label\" ng-show=\"ctrl.uvc_web_form_id.decote_valide.$invalid\">\r\n                    {{'labels.declaration.uvc.formulaire.ERROR_DECOTE'|translate}}\r\n                </label>\r\n                <div class=\"bloc_bonus\">\r\n                    <h3>\r\n                        {{'labels.declaration.uvc.formulaire.TITRE_BONUS'|translate}}\r\n                        <a class=\"infobulle_uvc\">\r\n                            <span class=\"arrow_box\">{{'labels.declaration.uvc.formulaire.INFOBULLE5'|translate}}</span>\r\n                        </a>\r\n                    </h3>\r\n                    <div style=\"width:48%; float:left\">\r\n                        <label class=\"produit_exposant\" ng-hide=\"ctrl.uvc==undefined || ctrl.uvc.BonusReductionId=='' || ctrl.uvc.BonusReductionId==null || ctrl.uvc.BonusReductionId==0\">{{'bonus_reduction.0'|translate}}</label>\r\n                    </div>\r\n                    <div style=\"width:48%; float:right\">\r\n                        <label class=\"produit_exposant\" ng-hide=\"ctrl.uvc==undefined || ctrl.uvc.BonusSensibilisationId=='' || ctrl.uvc.BonusSensibilisationId==null || ctrl.uvc.BonusSensibilisationId==0\">{{'bonus_sensibilisation.0'|translate}}</label>\r\n                    </div>\r\n                    <div style=\"clear:both\" >\r\n                        <select name=\"bonus_reduction\" data-ng-model=\"ctrl.uvc.BonusReductionId\" ng-options=\"t.id as t.libelle for t in ctrl.list_bonus_reduction\">\r\n                            <option value=\"\">{{'bonus_reduction.0'|translate}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div>\r\n                        <select name=\"bonus_sensibilisation\" data-ng-model=\"ctrl.uvc.BonusSensibilisationId\" ng-options=\"t.id as t.libelle for t in ctrl.list_bonus_sensibilisation\">\r\n                            <option value=\"\">{{'bonus_sensibilisation.0'|translate}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_MALUS'|translate}}\r\n                    <a class=\"infobulle_uvc\">\r\n                        <span class=\"arrow_box\">{{'labels.declaration.uvc.formulaire.INFOBULLE6'|translate}}</span>\r\n                    </a>\r\n                </h3>\r\n                <table class=\"table_malus\">\r\n                    <tr>\r\n                        <td class=\"choix_param\" ng-class=\"{ 'selected_malus' : ctrl.uvc.MalusPerturbateur }\" ng-click=\"ctrl.uvc.MalusPerturbateur=!ctrl.uvc.MalusPerturbateur;ctrl.uvc.MalusSansFiliere=false;\">\r\n                            {{'labels.declaration.uvc.formulaire.MALUS_PERTURBATEUR'|translate}}\r\n                        </td>\r\n                        <td class=\"choix_param\" ng-class=\"{ 'selected_malus' : ctrl.uvc.MalusSansFiliere }\" ng-click=\"ctrl.uvc.MalusSansFiliere=!ctrl.uvc.MalusSansFiliere; ctrl.uvc.MalusPerturbateur=false;\">\r\n                            {{'labels.declaration.uvc.formulaire.MALUS_SANS_FILIERE'|translate}}\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <p class=\"erreur_non_blocante\" ng-show=\"(ctrl.uvc.MalusPerturbateur|| ctrl.uvc.MalusSansFiliere) && (ctrl.uvc.BonusSensibilisationId!=0 && ctrl.uvc.BonusSensibilisationId!=unll && ctrl.uvc.BonusSensibilisationId!=undefined)\"> {{'labels.declaration.uvc.formulaire.ERREUR_NON_BLOCANT'|translate}}</p>\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_NOMBRE_UVC'|translate}}\r\n                    <a class=\"infobulle_uvc\">\r\n                        <span class=\"arrow_box\">{{'labels.declaration.uvc.formulaire.INFOBULLE7'|translate}}</span>\r\n                    </a>\r\n                </h3>\r\n                <table class=\"materiaux_inputs nbembtbl\">\r\n                    <tr class=\"title_row\">\r\n                        <td style=\"width:48%\"><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.NbUvcEmballMenagers)\">{{'labels.declaration.uvc.formulaire.TITRE_EMB_MENAGER'|translate}}</label></td>\r\n                        <td style=\"width:4%\"></td>\r\n                        <td style=\"width:48%\"><label class=\"produit_exposant\" ng-hide=\"ctrl.hideExposant(ctrl.uvc.NbUvcEmballNonMenagers)\">{{'labels.declaration.uvc.formulaire.TITRE_EMB_NON_MENAGER'|translate}}</label></td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width:48%\">\r\n                            <input name=\"emb_menager\" ng-disabled=\"ctrl.uvc.Spec && (ctrl.uvc.ProduitId == '150000' ||ctrl.uvc.ProduitId == '160000')\" class=\"uvc_nombre\" type=\"number\" min=\"0\" onkeypress=\"return event.charCode >= 48\" ng-pattern=\"/^[0-9][^\\.]*$/\" placeholder=\"{{'labels.declaration.uvc.formulaire.TITRE_EMB_MENAGER'|translate}}\" ng-model=\"ctrl.uvc.NbUvcEmballMenagers\" materiau data-ng-class=\"{ 'error' : ctrl.uvc_web_form_id.emb_menager.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.emb_menager.$touched)}\" required />\r\n                        </td>\r\n                        <td style=\"width:4%\"></td>\r\n                        <td style=\"width:48%\"><input class=\"uvc_nombre\" type=\"number\" min=\"0\" onkeypress=\"return event.charCode >= 48\" ng-pattern=\"/^[0-9][^\\.]*$/\" placeholder=\"{{'labels.declaration.uvc.formulaire.TITRE_EMB_NON_MENAGER'|translate}}\" ng-model=\"ctrl.uvc.NbUvcEmballNonMenagers\" materiau /></td>\r\n                    </tr>\r\n                    <tr><td colspan=\"3\"><label class=\"control-label\" ng-show=\"ctrl.uvc_web_form_id.emb_menager.$invalid && (ctrl.submitted || ctrl.uvc_web_form_id.emb_menager.$touched)\">{{'labels.declaration.uvc.formulaire.TITRE_NB_UVC'|translate}}</label></td></tr>\r\n                </table>\r\n\r\n\r\n                <hr />\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_TOTAL_UVC'|translate}}\r\n\r\n                </h3>\r\n                <table class=\"contributions_table\">\r\n                    <tr>\r\n                        <th width=\"50%\">{{'labels.declaration.uvc.formulaire.TITRE_CONTRIBUTION_UNIT_TOTAL'|translate}}</th>\r\n                        <th width=\"50%\">{{'labels.declaration.uvc.formulaire.TITRE_CONTRIBUTION_TOTAL'|translate}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{ctrl.uvc.ContribUnitTotale | decimalSeparator}}</td>\r\n                        <td>{{ctrl.uvc.ContribTotaleLigne | decimalSeparator}}</td>\r\n                    </tr>\r\n                </table>\r\n                <br />\r\n                <br />\r\n                <!--ng-disabled=\"!uvc_web_form_id.$valid\"-->\r\n                <button class=\"btn\" ng-click=\"ctrl.ValidateUvc(ctrl.uvc_web_form_id)\">{{'labels.declaration.uvc.formulaire.BTN_VALIDER_PRODUIT'|translate}}</button>     <!--{{'uvc_web_form_id.$valid'+uvc_web_form_id.$valid}}-->\r\n            </form>\r\n            <div id=\"vue\" ng-show=\"ctrl.vue=='lecture'\">\r\n                {{'labels.declaration.uvc.formulaire.TITRE_UVC_VUE'|translate}}\r\n                <hr />\r\n                <h3>{{'labels.declaration.uvc.formulaire.TITRE_PRODUIT'|translate}}</h3>\r\n                {{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_UVC'|translate}} : <strong>{{ctrl.uvc.Libelle}}</strong><br />\r\n                {{'labels.declaration.uvc.formulaire.CODE_PRODUIT'|translate}} : <strong>{{ctrl.uvc.ProduitId}}</strong><span style=\"width:100px;display:inline-block\"></span>{{'labels.declaration.uvc.formulaire.LABEL_LIBELLE_PRODUIT'|translate}} : <strong>{{ctrl.uvc.Spec?'produits_spec.'+ctrl.uvc.ProduitId:'produits.'+ctrl.uvc.ProduitId|translate}}</strong>\r\n                <hr />\r\n                <h3>\r\n                    {{'labels.declaration.uvc.formulaire.TITRE_POIDS'|translate}}\r\n                    <SPAN>{{ctrl.uvc.Spec?'labels.declaration.uvc.formulaire.TITRE_POIDS_UNITAIRE_KG':'labels.declaration.uvc.formulaire.TITRE_POIDS_UNITAIRE'|translate}}</SPAN>\r\n                </h3>\r\n                <table class=\"materiaux_inputs\">\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.acier)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.acier'|translate}} : <strong>{{ctrl.uvc.acier | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.alum)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.alum'|translate}} : <strong>{{ctrl.uvc.alum | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.pcNonBriq)\">\r\n                        <td> {{'labels.declaration.uvc.Materiaux.pcNonBriq'|translate}} : <strong>{{ctrl.uvc.pcNonBriq | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.briq)\">\r\n                        <td> {{'labels.declaration.uvc.Materiaux.briq'|translate}} : <strong>{{ctrl.uvc.briq | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.petClair)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.petClair'|translate}} : <strong>{{ctrl.uvc.petClair | decimalSeparator}}</strong></td>\r\n\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.flacon)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.flacon'|translate}} : <strong>{{ctrl.uvc.flacon | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.autrePlas)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.autrePlas'|translate}} : <strong>{{ctrl.uvc.autrePlas | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.verre)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.verre'|translate}} : <strong>{{ctrl.uvc.verre | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-if=\"ctrl.orgaCommerciale=='adelphe'\" ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.Bois)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.bois'|translate}} : <strong>{{ctrl.uvc.Bois | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-if=\"ctrl.orgaCommerciale=='adelphe'\" ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.Textile)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.textile'|translate}} : <strong>{{ctrl.uvc.Textile | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                    <tr ng-show=\"ctrl.ShowMateriauPreview(ctrl.uvc.autre)\">\r\n                        <td>{{'labels.declaration.uvc.Materiaux.autre'|translate}} : <strong>{{ctrl.uvc.autre | decimalSeparator}}</strong></td>\r\n                    </tr>\r\n                </table>\r\n                <hr />\r\n                <h3>{{'labels.declaration.uvc.formulaire.TITRE_DECOTE'|translate}}</h3>\r\n                {{'labels.declaration.uvc.formulaire.LABEL_DECOTE'|translate}}: <strong>{{ctrl.uvc.Decote?'labels.declaration.uvc.formulaire.DECOTE_OUI':'labels.declaration.uvc.formulaire.DECOTE_NON'|translate}}</strong>\r\n                <hr />\r\n                <h3>{{'labels.declaration.uvc.formulaire.TITRE_BONUS'|translate}}</h3>\r\n                {{'bonus_reduction.0'|translate}} : <strong>{{ctrl.uvc.BonusReductionId!=null?'bonus_reduction.'+ctrl.uvc.BonusReductionId:''|translate}}</strong><br />\r\n                {{'bonus_sensibilisation.0'|translate}} : <strong>{{ctrl.uvc.BonusSensibilisationId!=null?'bonus_sensibilisation.'+ctrl.uvc.BonusSensibilisationId:''|translate}}</strong>\r\n                <hr />\r\n                <h3>{{'labels.declaration.uvc.formulaire.TITRE_MALUS'|translate}}</h3>\r\n                {{ctrl.uvc.MalusPerturbateur?'labels.declaration.uvc.formulaire.MALUS_PERTURBATEUR':''|translate}}\r\n                {{ctrl.uvc.MalusSansFiliere?'labels.declaration.uvc.formulaire.MALUS_SANS_FILIERE':''|translate}}\r\n                <hr />\r\n                <h3>{{'labels.declaration.uvc.formulaire.TITRE_NOMBRE_UVC'|translate}}</h3>\r\n                {{'labels.declaration.uvc.formulaire.TITRE_EMB_MENAGER'|translate}} : <strong>{{ctrl.uvc.NbUvcEmballMenagers | thousandSeparator}}</strong><br />\r\n                {{'labels.declaration.uvc.formulaire.TITRE_EMB_NON_MENAGER'|translate}} : <strong>{{ctrl.uvc.NbUvcEmballNonMenagers | thousandSeparator}}</strong>\r\n                <hr />\r\n                <h3>{{'labels.declaration.uvc.formulaire.TITRE_TOTAL_UVC'|translate}}</h3>\r\n                <table class=\"contributions_table\">\r\n                    <tr>\r\n                        <th width=\"50%\">{{'labels.declaration.uvc.formulaire.TITRE_CONTRIBUTION_UNIT_TOTAL'|translate}}</th>\r\n                        <th width=\"50%\">{{'labels.declaration.uvc.formulaire.TITRE_CONTRIBUTION_TOTAL'|translate}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>{{ctrl.uvc.ContribUnitTotale | decimalSeparator}}</td>\r\n                        <td>{{ctrl.uvc.ContribTotaleLigne | decimalSeparator}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div id=\"cache\" ng-show=\"ctrl.selectedUVC==undefined\"></div>\r\n        </div>\r\n    </div>\r\n    <div class=\"uvc_list_container\">\r\n        <div class=\"uvc_list\">\r\n            <div class=\"sort_div\">\r\n                {{'labels.declaration.uvc.formulaire.LABEL_TRI'|translate}} <select name=\"sort_field\" ng-model=\"ctrl.sort_field\" ng-change=\"ctrl.sort()\">\r\n                    <option value=\"date\" selected=\"selected\">{{'labels.declaration.uvc.web.DATE_AJOUT' | translate}}</option>\r\n                    <option value=\"ordre_alphabetique\">{{'labels.declaration.uvc.web.ORDRE_ALPHABETIQUE' | translate}}</option>\r\n                    <option value=\"montant_contribution_croissant\">{{'labels.declaration.uvc.web.MONTANT_CONTRIB_CROISSANT' | translate}}</option>\r\n                    <option value=\"montant_contribution_decroissant\">{{'labels.declaration.uvc.web.MONNAIE_CONTRIB_DECROISSANT' | translate}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"search_div\">\r\n                <span class=\"recherche_uvc_img\" ng-click=\"ctrl.search_field.length>0 &&ctrl.search()\"></span> <input type=\"text\" placeholder=\"{{'labels.declaration.uvc.formulaire.LABEL_Recherche'|translate}}\" ng-model=\"ctrl.search_field\" ng-keyup=\"($event.keyCode == 13 || !ctrl.search_field.length ) && ctrl.search()\" />\r\n            </div>\r\n            <table class=\"table_emballages\">\r\n                <tr ng-repeat=\"emballage in ctrl.listUvc\" ng-class=\"{'uvc_selected':ctrl.selectedUVC.LigneDeclarationId==emballage.LigneDeclarationId}\">\r\n                    <td style=\"width:10%\">\r\n                        <span ng-class=\"{'uvc_valide':emballage.Valider,'uvc_non_valide':!emballage.Valider}\"></span>\r\n                    </td>\r\n                    <td>\r\n                        <div style=\"float:left\">\r\n                            <a ng-class=\"{'uvc_lib':ctrl.valide,'uvc_lib_disabled':!ctrl.valide}\" ng-click=\"ctrl.valide && ctrl.selectUvc(emballage)\">{{emballage.Libelle!=''?emballage.Libelle:'labels.declaration.uvc.formulaire.BTN_NEW_UVC' | translate}}</a><br />\r\n                            <span>{{emballage.NbUvcEmballMenagers | thousandSeparator}}</span> UVC - <span>{{emballage.ContribTotaleLigne | decimalSeparator}} </span> {{'labels.declaration.uvc.formulaire.MONNAIE' | translate}}\r\n                        </div>\r\n                        <a ng-show=\"emballage.Valider && ctrl.valide && !(ctrl.selectedUVC!=undefined&& ctrl.vue=='ecriture')\" ng-click=\"ctrl.copyUvc(emballage.LigneDeclarationId)\" class=\"uvc_duplicate\"></a>\r\n                        <a ng-show=\"(ctrl.valide ||!emballage.Valider) && (!(ctrl.selectedUVC!=undefined && ctrl.vue=='ecriture'))\" ng-click=\"ctrl.editUvc(emballage)\" class=\"uvc_edit\"></a>\r\n                        <a ng-show=\"ctrl.valide || ctrl.selectedUVC==undefined || (ctrl.selectedUVC!=undefined && ctrl.selectedUVC.LigneDeclarationId==emballage.LigneDeclarationId)\" ng-click=\"ctrl.deleteUvc(emballage.LigneDeclarationId,$index)\" class=\"uvc_delete\"></a>\r\n                        <a ng-show=\"ctrl.selectedUVC!=undefined && ctrl.selectedUVC.LigneDeclarationId==emballage.LigneDeclarationId && ctrl.vue=='ecriture' && !emballage.Valider && emballage.Libelle!=''\" ng-click=\"ctrl.CancelEdition(ctrl.uvc_web_form_id)\" class=\"uvc_cancel\">{{'labels.declaration.uvc.formulaire.BTN_ANNULER' | translate}}</a>\r\n                        <a ng-show=\"ctrl.selectedUVC!=undefined && ctrl.selectedUVC.LigneDeclarationId==emballage.LigneDeclarationId && ctrl.vue=='ecriture' && !emballage.Valider\" ng-click=\"ctrl.ValidateUvc(ctrl.uvc_web_form_id)\" class=\"uvc_save\">{{'labels.declaration.uvc.formulaire.BTN_ENREGISTRER' | translate}}</a>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <!--<div style=\"color:red\" ng-show=\"!ctrl.valide\">Vous avez un uvc non valid�!</div>-->\r\n            <div class=\"bloc_pagination\" ng-show=\"ctrl.pages.length>1\">\r\n                <ul>\r\n                    <li ng-repeat=\"page in ctrl.pages\">\r\n                        <span ng-class=\"{'selected_page':ctrl.page_index==page}\" ng-click=\"ctrl.setPage(page);\">{{page+1}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"create_uvc_bloc\">\r\n            <button id=\"ajout\" class=\"create_uvc_btn\" ng-click=\"ctrl.AddUvc()\">{{'labels.declaration.uvc.formulaire.BTN_ADD_UVC'|translate}}</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"bottom_bar\">\r\n        {{'labels.declaration.uvc.formulaire.LABEL_CONTRIBUTION'|translate}} {{ctrl.annee}} : <span class=\"contribution\">{{ctrl.contribution_totale | decimalSeparator}} {{'labels.declaration.uvc.formulaire.MONNAIE' | translate}}</span> <span class=\"ht\">{{'labels.declaration.uvc.formulaire.LABEL_HT'|translate}}</span>\r\n        <button class=\"btn suivant\" ng-disabled=\"!ctrl.valide\" ng-click=\"ctrl.Continue()\">{{'labels.declaration.uvc.formulaire.BTN_NEXT_STEP'|translate}}</button>\r\n        <a class=\"btn_retour\" ng-click=\"ctrl.goBack()\">{{'labels.declaration.uvc.formulaire.BTN_ANNULER'|translate}}</a>\r\n    </div>\r\n</div>\r\n<div class=\"creat_declaration_web\" data-ng-if=\"ctrl.id_declaration=='' || ctrl.error\">\r\n    {{'labels.declaration.uvc.formulaire.ERREUR_DECLARATION'|translate}}\r\n</div>\r\n";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n    <div ng-hide=\"validationCtrl.loading\">\r\n        <a class=\"close-icon\" href=\"/mon-espace/declaration/accueil\"></a>\r\n        <div ng-show=\"validationCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_validation.TITLE' | translate}}</h1>\r\n            <p>{{'labels.declaration.uvc.popin_validation.RAPPEL_CONTRIB' | translate}}<span class=\"chiffre_decla\">{{validationCtrl.RecapDeclaration.ContributionTotale | decimalSeparator}} € {{'labels.declaration.uvc.popin_validation.TAXE' | translate}}</span></p>\r\n            <div class=\"list_widget\">\r\n                <a class=\"widget env_justif\" ng-show=\"{{validationCtrl.RecapDeclaration.Decote==true&&validationCtrl.RecapDeclaration.AttestationRecycleValidee==false}}\" href=\"/OldApp/Declaration/EcdJustificatifs?typeDocument=AttestRec\">\r\n                    {{'labels.declaration.uvc.popin_validation.LABEL_BTN_ATTESTATIONS' | translate}}\r\n                </a>  \r\n            </div>\r\n                <button class=\"suivant\" onclick='window.location.href=\"/mon-espace/declaration/accueil\"'>\r\n                    {{'labels.declaration.uvc.popin_validation.LABEL_BTN_ACCUEIL' | translate}}\r\n                </button>\r\n        </div>\r\n        <div ng-hide=\"validationCtrl.status_code==200\">\r\n            <h1>{{'labels.declaration.uvc.popin_validation.ERROR_MSG' | translate}}</h1>\r\n        </div>\r\n    </div>\r\n    <div class=\"loading_spinner\" ng-show=\"validationCtrl.loading\">\r\n        <loading></loading>   \r\n    </div>\r\n</div>";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"bloc_wrapper\">\r\n    <div class=\"bloc_wrapper_content\">\r\n        <form id=\"mail_form\" name=\"mail_form\" novalidate>\r\n            <h1><strong>{{'labels.declaration.uvc.send_mails.TITLE' | translate}}</strong></h1>\r\n            <p>\r\n                {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_1' | translate}} <br />\r\n                {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_2' | translate}} <br /> <br />\r\n                {{'labels.declaration.uvc.send_mails.TITLE_ADD_MSG_3' | translate}}\r\n            </p>\r\n            <table class=\"tab_declaration ajout_desti\">\r\n                <tr>\r\n                    <td>\r\n                        <img src=\"/sites/default/files/inline-images/pict_mail.png\" class=\"marg-img\" /><input type=\"email\" name=\"email\" ng-model=\"validationCtrl.mailinput\" ng-keyup=\"$event.keyCode == 13 && !mail_form.email.$invalid && !mail_form.email.$error.pattern && validationCtrl.addMails()\" ng-pattern=\"validationCtrl.email_pattern\" autocomplete=\"off\" placeholder=\"{{'labels.declaration.uvc.send_mails.PLACEHOLDER_EMAIL' | translate}}\" required>\r\n                        <span ng-show=\"mail_form.email.$invalid && !mail_form.email.$pristine && mail_form.email.$error.pattern\" class=\"help-block error\">{{'labels.declaration.uvc.send_mails.LABEL_ERROR' | translate}}</span>\r\n                    </td>\r\n                    <td></td>\r\n                </tr>\r\n                <tr ng-repeat=\"mail in validationCtrl.mails\">\r\n                    <td><input type=\"email\" name=\"email\" placeholder=\"{{mail}}\" class=\"no-border\" disabled></td>\r\n                    <td><div ng-click=\"validationCtrl.removeMail(mail)\" class=\"pict_delete\">&nbsp;</div></td>\r\n                </tr>\r\n            </table>\r\n            <input id=\"ajout\" type=\"button\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_ADD_RECIPIENTS' | translate}}\" ng-disabled=\"mail_form.$invalid\" ng-click=\"validationCtrl.addMails()\">\r\n            <br />\r\n        </form>\r\n    </div>\r\n    <div class=\"bottom_bar\">\r\n        <ul>\r\n            <li><input type=\"button\" id=\"btn-grey\" ng-click=\"validationCtrl.saveMails()\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_BTN_NO_VALIDATE' | translate}}\" /></li>\r\n            <li><input type=\"checkbox\" ng-model=\"checked\" ng-click=\"selected()\" /><label class=\"info-check\">{{'labels.declaration.uvc.send_mails.LABEL_CERTIFIE' | translate}}</label></li>\r\n            <li><input type=\"button\" class=\"btn\" ng-disabled=\"!checked\" ng-click=\"validationCtrl.valideMails()\" value=\"{{'labels.declaration.uvc.send_mails.LABEL_BTN_VALIDATE' | translate}}\" /></li>\r\n        </ul>\r\n    </div>    \r\n</div>";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports = "<div ng-if=\"widgetrpcCtrl.runRpcFlag\">\r\n\t<a class=\"slogan\">{{'labels.declaration.rpcFaqWidget.RUN_RPC' | translate}}</a>\r\n</div>\r\n\r\n<div ng-if=\"widgetrpcCtrl.faqFlag && widgetrpcCtrl.ecoContextFlag\">\r\n\t<div class=\"cursor\" onclick=\"window.location.href='/mon-espace/faq/accueil#declaration'\">\r\n\t<h3>{{'labels.declaration.rpcFaqWidget.FAQ_TITLE_1' | translate}}</h3>\r\n\r\n\t<p class=\"slogan\">{{'labels.declaration.rpcFaqWidget.FAQ_SLOGAN_1' | translate}}<br />\r\n\t{{'labels.declaration.rpcFaqWidget.FAQ_SLOGAN_2' | translate}}</p>\r\n\t<button class=\"trans suivant\" onclick=\"window.location.href='/mon-espace/faq/accueil#declaration';\">{{'labels.declaration.rpcFaqWidget.FAQ_TEXT_1' | translate}}<br />\r\n\t{{'labels.declaration.rpcFaqWidget.FAQ_TEXT_2' | translate}}</button></div>\r\n</div>\r\n\r\n<div ng-if=\"widgetrpcCtrl.faqFlag && widgetrpcCtrl.adelpheContextFlag\" class=\"cursor\" onclick=\"window.location.href='/mon-espace/faq/accueil#declaration'\">\r\n    <h3 class=\"ng-binding\">{{'labels.declaration.rpcFaqWidget.FAQ_TITLE' | translate}}</h3>\r\n    <button class=\"trans suivant\" onclick=\"window.location.href='/mon-espace/faq/accueil#declaration';\">{{'labels.declaration.rpcFaqWidget.FAQ_TEXT_1' | translate}}<br />\r\n    {{'labels.declaration.rpcFaqWidget.FAQ_TEXT_2' | translate}}</button>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"cursor\" onclick=\"window.location.href='/mon-espace/declaration/excel/uvc'\">\r\n        <h3>{{'labels.declaration.choixdeclaration.widget_upload.titre' | translate}}</h3>\r\n        <h4 class=\"slogan\">{{'labels.declaration.choixdeclaration.widget_upload.DEPOT_FICHIER' | translate}}</h4>\r\n        <p>{{'labels.declaration.choixdeclaration.widget_upload.MSG1' | translate}}</p>\r\n        <button class=\"trans suivant-noir\" onclick=\"window.location.href='/mon-espace/declaration/excel/uvc';\">\r\n            {{'labels.declaration.choixdeclaration.widget_upload.MSG2' | translate}}\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	//var validationModule = require('./validation/Validation');
	var popupsService = __webpack_require__(97);
	var moduleName = 'declaration.commons';
	angular.module(moduleName, []);

	angular.module(moduleName).factory('popupsService', ['$uibModal', '$q', popupsService]);

	module.exports = moduleName;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = function (popupsService) {

	    var _self = this;
	    this.messageError = popupsService.messageError;
	    this.contributionTotale = popupsService.contributionTotale;

	    this.closePopup = function (method) {

	        if (method == 'reject') popupsService.controlModal('reject');else popupsService.controlModal('resolve');
	    };
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function ($uibModal, $q) {

	    var _self = this;
	    var popupsCtrl = __webpack_require__(96);

	    this.controlModal = function (action) {

	        switch (action) {
	            case 'resolve':
	                console.log('resolve modal : ', action);
	                _self.modal.close();
	                _self.deferedModal.resolve();
	                break;
	            case 'reject':
	                console.log('reject modal : ', action);
	                _self.modal.close();
	                _self.deferedModal.reject('test');
	        }
	    };

	    var openPopup = function (requiredTemplate) {

	        _self.deferedModal = $q.defer();

	        console.log('into function');
	        _self.modal = $uibModal.open({
	            template: requiredTemplate,
	            controller: ['popupsService', popupsCtrl],
	            controllerAs: 'popupsCtrl',
	            backdrop: 'static',
	            keyboard: false
	        });
	        return _self.deferedModal.promise;
	    };

	    this.openDepotDeclarationFailure = function (message) {

	        _self.messageError = message;
	        var template = __webpack_require__(51);
	        return openPopup(template);
	    };

	    this.openDepotDeclarationSuccess = function (montant) {

	        _self.contributionTotale = montant;
	        var template = __webpack_require__(52);
	        return openPopup(template);
	    };

	    return this;
	};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var declarationRessource = __webpack_require__(99);
	var recommandationResource = __webpack_require__(100);
	var moduleName = 'declaration.resources';
	angular.module(moduleName, []);
	angular.module(moduleName).factory(declarationRessource.name, declarationRessource.dependencies);
	angular.module(moduleName).factory(recommandationResource.name, recommandationResource.dependencies);

	module.exports = moduleName;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	function Declaration() {
	    this.name = 'declarationResource';
	    this.dependencies = ['$http', '$window'];
	    this.resource = function ($http, $window) {
	        var self = {};

	        /***************************************** test appel ws rest drupal /content/ *************************************************/
	        self.getListTemplateDeclarationExcel = function () {
	            var url = '/content/templates_declaration_excel';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /***************************************** EXCEL *************************************************/
	        self.sendDeclarationUvcXml = function (file, ClientID, DeclarantID, annee, flag_corrective, motif, commentaire, id_declaration /*completer une dec initilisée*/) {
	            console.log('sendDeclarationUvcXml : file =', file);
	            var url = '/declarationApp/p/clients/' + ClientID + '/declarations/' + annee;
	            var fd = new FormData();
	            fd.append('file', file);
	            fd.append('flag_corrective', flag_corrective);
	            fd.append('motif', motif);
	            fd.append('commentaire', commentaire);
	            fd.append('id_declaration', id_declaration);
	            fd.append('DeclarantID', DeclarantID);
	            return $http.post(url, fd, {
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };
	        self.getAnneesDeclaration = function (ClientID) {
	            var url = '/declarationApp/p/clients/' + ClientID + '/AnneesDeclaration';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getAnneesDeclaree = function (ClientID) {
	            var url = '/declarationApp/p/clients/' + ClientID + '/AnneesDeclaree';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getMotifsCorrective = function () {
	            var url = '/declarationApp/p/declarations/motifs_correctives';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        /***************************************** HISTORIQUE*************************************************/
	        self.getHistoriqueDeclaration = function (ClientID, vue) {
	            console.log('get declaration historique');
	            var url = '/declarationApp/p/clients/' + ClientID + '/declarations?vue=' + vue;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getUrl_historique_declaration = '/mon-espace/declaration/historique';

	        /***************************************** RPC *************************************************/

	        // #region RPC file

	        //PERMET DE SAVOIR SI LE RPC EXISTE
	        self.RpcFileExist = function (idClientSAP, annee) {
	            console.log('get rpc file declaration');
	            var url = "/api/clients/" + idClientSAP + "/rpc_isExist/" + annee;
	            return $http({
	                method: "GET",
	                url: url
	            });
	        };

	        //PERMET DE TELECHARGER UN DOCUMENT RPC
	        self.getRpcFile = function (idClientSAP, annee) {

	            console.log('get rpc file attachement declaration: ' + idClientSAP + " " + annee);
	            var url = "/api/clients/" + idClientSAP + "/rpc/" + annee;
	            return $http({
	                method: "GET",
	                url: url
	            });
	        };

	        // #region CAC
	        self.GetCacByName = function (name, max_return) {
	            var url = '/externalApi/p/cacAPI/annuaire/cacpp?nom=' + name + '&max_num=' + max_return;
	            return $http({
	                method: "GET",
	                url: url
	            });
	        };

	        ///: https://ws.cncc.fr/eo-notification/missions  37f8cce3-e676-4100-b96a-d45916794fde  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
	        self.CacCreateProject = function (mydata) {
	            console.log('in service sent  ' + mydata);
	            var url = '/externalApi/p/cacAPIprojects/eo-notification/missions';

	            return $http({
	                method: "POST",
	                url: url,
	                data: mydata
	            });
	        };

	        ///: https://ws.cncc.fr/eo-notification/missions  37f8cce3-e676-4100-b96a-d45916794fde  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
	        self.CacDeleteProject = function (id) {
	            var url = '/externalApi/p/cacAPIprojects/eo-notification/missions/' + id;
	            return $http({
	                method: "DELETE",
	                url: url
	            });
	        };
	        // #endregion

	        // #region EC
	        ///https://ws-rec.experts-comptables.org:8042   : eco_d1c9e1-de2c-11e6-93b9-00163e79321a
	        self.GetExpertByName = function (name, max_return) {
	            var url = '/externalApi/p/ecAPI/csoec/getEcByName?' + 'nom=' + name + '&max_num=' + max_return;
	            return $http({
	                method: "GET",
	                url: url
	            });
	        };

	        ///: https://network-rec.experts-comptables.org  1ae7f281-dd81-11e6-80b9-00155d063d11  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
	        self.ExpertsCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
	            console.log(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
	            var url = '/externalApi/p/ecAPIprojects/api/eco-organisme/projects';

	            var myData = 'id=' + id + '&raisonSociale=' + raisonSociale + '&idClient=' + idClient + '&idSignataire=' + idSignataire + '&montant=' + montant + '&annee=' + annee + '&siren=' + siren;
	            return $http({
	                method: 'POST',
	                url: url,
	                headers: {
	                    'content-type': "application/x-www-form-urlencoded"
	                },
	                data: myData
	            });
	        };

	        ///: https://network-rec.experts-comptables.org  1ae7f281-dd81-11e6-80b9-00155d063d11  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
	        self.ExpertsDeleteProject = function (id) {
	            var url = '/externalApi/p/ecAPIprojects/api/eco-organisme/projects/' + id;

	            return $http({
	                method: 'DELETE',
	                url: url,
	                headers: {
	                    'content-type': "application/x-www-form-urlencoded"
	                }
	            });
	        };

	        ///: https://network-rec.experts-comptables.org  1ae7f281-dd81-11e6-80b9-00155d063d11  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
	        self.ExpertsGetProject = function (id) {
	            var url = '/externalApi/p/ecAPIprojects/api/eco-organisme/projects/' + id;

	            return $http({
	                method: 'GET',
	                url: url,
	                headers: {
	                    'content-type': "application/x-www-form-urlencoded"
	                }
	            });
	        };

	        // #endregion

	        // #region INTERNAL WEB API
	        // A SUPPRIMER ?????????????
	        self.getSiren = function (idSAP) {
	            var url = '/declarationApp/p/rpcs/getsiren/' + idSAP;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.SaveNewMission = function (idMission, clientNumber, annee, contribTotal, signataire, nom, civilite, email, typeexpert, statut) {
	            var url = '/declarationApp/p/rpcs/saveNewMission';
	            var fd = new FormData();
	            fd.append('idMission', idMission);
	            fd.append('clientNumber', clientNumber);
	            fd.append('annee', annee);
	            fd.append('contribTotal', contribTotal);
	            fd.append('signataire', signataire);
	            fd.append('nom', nom);
	            fd.append('civilite', civilite);
	            fd.append('email', email);
	            fd.append('typeexpert', typeexpert);
	            fd.append('statut', statut);

	            return $http({
	                method: 'POST',
	                url: url,
	                data: fd,
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };

	        self.UpdateCancelMission = function (idMission) {
	            var url = '/declarationApp/p/rpcs/UpdateCancelMission/' + idMission;
	            return $http({
	                method: 'DELETE',
	                url: url
	            });
	        };

	        self.getAmount = function (idSAP, year) {
	            var url = '/declarationApp/p/rpcs/getSimulatedAmount/' + idSAP + '/' + year;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.getSiret = function (idSAP) {
	            var url = '/PortailApp/Clients/' + idSAP;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        // #endregion

	        // #endregion

	        /***************************************** CHOIX DECLARATION*************************************************/

	        self.getChoixTypesDeclaration = function (nbreuvcdeclare, annee, ClientID) {
	            var url = '/declarationApp/p/clients/' + ClientID + '/declarationsRecommandees/' + nbreuvcdeclare + '/' + annee;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.getFichierExcelUvc = function (version, langue, ClientID) {
	            var url = '/declarationApp/p/clients/' + ClientID + '/templateUvc/' + version + '/' + langue;
	            $window.location.href = url;
	        };

	        self.getContenuBloc = function () {
	            var url = '/content/choix_type_decla';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.getDeclarationStatus = function () {

	            console.log('get declaration drupal');
	            var url = '/content/declaration_statut';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.InitialiserDeclarationUVC = function (numero_client, id_declarant, annee) {
	            var url = '/declarationApp/p/clients/' + numero_client + '/initialiser_declarations/' + annee + '?DeclarantID=' + id_declarant;

	            return $http({
	                method: "POST",
	                url: url,
	                data: { 'DeclarantID': id_declarant },
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };

	        /***************************************** DECLARATION FORFAIT*************************************************/

	        self.SaveDeclarationForfait = function (numero_client, DeclarantID, annee, flag_corrective, motif, commentaire) {
	            var url = '/declarationApp/p/clients/' + numero_client + '/declarations/forfait/' + annee;

	            var fd = new FormData();
	            fd.append('flag_corrective', flag_corrective);
	            fd.append('motif', motif);
	            fd.append('commentaire', commentaire);
	            fd.append('DeclarantID', DeclarantID);
	            return $http.post(url, fd, {
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };

	        /***************************************** SUPPRIER DECLARATION*************************************************/

	        self.SupprimerDeclaration = function (numero_client, id, annee, type, mode_saisie) {
	            if (id == null) {
	                var url = '/declarationApp/p/clients/' + numero_client + '/annee/' + annee + '/suppressionold';
	                return $http({
	                    method: 'DELETE',
	                    url: url
	                });
	            } else {
	                var url = '/declarationApp/p/declarations/' + id + '/suppressionnew';
	                return $http({
	                    method: 'DELETE',
	                    url: url
	                });
	            };
	        };

	        /***************************************** SIMULATEUR*************************************************/

	        self.getContenuSimulateurExcel = function () {
	            var url = '/content/simulateur';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.getExcelLinks = function () {
	            //var url = '/simulateur_files';
	            var url = '/content/files_excel';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /***************************************** DECLARATION EXCEL AR*************************************************/
	        self.sendDeclarationAR = function (mails, idDeclaration, idSF) {

	            console.log('sendDeclarationAR: mails =', mails);
	            console.log('idDeclaration: ', idDeclaration);
	            var url = '/declarationApp/p/declarations/' + idDeclaration + '/validation/' + idSF + '/?mails=' + mails;

	            return $http({
	                method: "POST",
	                data: { 'mails': mails },
	                url: url,
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };

	        /***************************************** DECLARATION SAVE MAILS AR*************************************************/
	        self.saveMailsAR = function (mails, idDeclaration) {

	            console.log('saveMailsAR: mails =', mails);
	            console.log('idDeclaration: ', idDeclaration);
	            var url = '/declarationApp/p/declarations/' + idDeclaration + '/mails/?mails=' + mails;

	            return $http({
	                method: "POST",
	                data: { 'mails': mails },
	                url: url,
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };

	        /***************************************** DECLARATION FIND MAILS AR*************************************************/
	        self.findMailsAR = function (idDeclaration) {

	            var url = '/declarationApp/p/declarations/' + idDeclaration + '/mails';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /***************************************** DECLARATION RECAP *************************************************/
	        self.getRecap = function (idDeclaration) {

	            var url = '/declarationApp/p/declarations/' + idDeclaration;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /******************************* Accueil declaration ****************************************/
	        self.getAnneeDeclarationAsaisir = function (ClientID) {
	            var url = '/declarationApp/p/clients/' + ClientID + '/declarations_a_saisir/';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        /********************** DECLARATION EXCEL SECTORIELLE ET DETAILLEE  ********************************/
	        self.getTemplateExcelSectDetail = function (annee, type_decla, annee_excel, langue_excel) {
	            console.log('getTemplateExcelSectDetail', annee, type_decla);
	            var isExcel2007OrMore = false;
	            if (annee_excel == '2007') isExcel2007OrMore = true;
	            var url = '';
	            if (type_decla == 'sectorielle') url = '/OldApp/Declaration/EcdExport?type=Secto&annee=' + annee + '&mode=PreRempli&isExcel2007OrMore=' + isExcel2007OrMore + '&lang=' + langue_excel;else url = '/OldApp/Declaration/EcdExport?type=Detaille&annee=' + annee + '&mode=PreRempli&isExcel2007OrMore=' + isExcel2007OrMore + '&lang=' + langue_excel;

	            var myForm = document.createElement("form");
	            myForm.method = "post";
	            myForm.action = url;
	            document.body.appendChild(myForm);
	            myForm.submit();
	        };
	        self.GetLienTelechargementSectDetail = function (TypeDecla, Annee) {
	            var url;
	            if (TypeDecla == 'DETAILLEE') url = "/OldApp/Declaration/EcdExport?type=Detaille&mode=Histo&annee=" + Annee;else url = "/OldApp/Declaration/EcdExport?type=Secto&mode=Histo&annee=" + Annee;
	            $window.location.href = url;
	        };
	        self.GetLienTelechargementUVC = function (ClientID, Annee /*,langue*/) {
	            var url = '/declarationApp/p/clients/' + ClientID + '/telechargementUvc/' + Annee + '/FR' /* + langue*/;
	            $window.location.href = url;
	        };
	        /***************************************** GetListUVC *************************************************/
	        self.getListUvc = function (declarationid, page, sort, search, lastpage) {
	            var url = '/declarationApp/p/declarations/' + declarationid + '/getListUVC/' + page + '/' + sort + '?search=' + search + '&lastpage=' + lastpage;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getListUVC_firstLoad = function (declarationid) {
	            var url = '/declarationApp/p/declarations/' + declarationid + '/getListUVC_firstLoad';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        /**********************************************************************************************************************/
	        self.goToChoixDeclaration = function (annee) {
	            var url = '/mon-espace/declaration/choix/#?annee=' + annee;
	            $window.location.href = url;
	        };
	        self.goToUploadExcel = function (id_declaration, annee) {
	            var url = '/mon-espace/declaration/excel/uvc/#?annee=' + annee + '&id_declaration=' + id_declaration;
	            $window.location.href = url;
	        };

	        self.goToUploadExcel2 = function (id_declaration, annee) {
	            var url = '/mon-espace/declaration/excel/uvc/#?annee=' + annee + '&id_declaration=' + id_declaration;

	            var myForm = document.createElement("form");
	            myForm.method = "post";
	            myForm.action = url;

	            document.body.appendChild(myForm);
	            myForm.submit();
	        };

	        self.goToDeclarationWeb = function (id_declaration, annee, type_declaration, flag_corrective, motif, commentaire) {
	            console.log('id_declaration, annee, type_declaration, flag_corrective, motif, commentaire', id_declaration + '-' + annee + '-' + type_declaration + '-' + flag_corrective + '-' + motif + '-' + commentaire);
	            var url = '';
	            if (type_declaration == 'uvc') {
	                url = '/mon-espace/declaration/web/uvc/#?annee=' + annee + '&id_declaration=' + id_declaration;
	                $window.location.href = url;
	            } else self.postDeclarationWebSectDetail(annee, type_declaration, flag_corrective, motif, commentaire);
	        };
	        self.postDeclarationWebSectDetail = function (annee, type_decla, flag_corrective, motif, commentaire) {
	            console.log('postDeclarationWebSectDetail');
	            console.log(annee, type_decla, flag_corrective, motif, commentaire);
	            var url = '';
	            if (type_decla.toLowerCase() == 'sectorielle') url = '/OldApp/Declaration/EcdSecto';else url = '/OldApp/Declaration/EcdDetaillee';

	            //var fd = new FormData();
	            //fd.append('annee', annee);
	            //fd.append('flag_corrective', flag_corrective);
	            //fd.append('motif', motif);
	            //fd.append('commentaire', commentaire);
	            //return $http.post(url, fd, {
	            //    transformRequest: angular.identity,
	            //    headers: {
	            //        'Content-Type': undefined
	            //    }
	            //});

	            //classic post
	            var myForm = document.createElement("form");
	            myForm.method = "post";
	            myForm.action = url;

	            var anneeInput = document.createElement("input");
	            anneeInput.setAttribute("name", 'annee');
	            anneeInput.setAttribute("value", annee);
	            myForm.appendChild(anneeInput);

	            var flag_correctiveInput = document.createElement("input");
	            flag_correctiveInput.setAttribute("name", 'flag_corrective');
	            flag_correctiveInput.setAttribute("value", flag_corrective);
	            myForm.appendChild(flag_correctiveInput);

	            var motifInput = document.createElement("input");
	            motifInput.setAttribute("name", 'motif');
	            motifInput.setAttribute("value", motif);
	            myForm.appendChild(motifInput);

	            var commentaireInput = document.createElement("input");
	            commentaireInput.setAttribute("name", 'commentaire');
	            commentaireInput.setAttribute("value", commentaire);
	            myForm.appendChild(commentaireInput);

	            document.body.appendChild(myForm);
	            myForm.submit();
	        };
	        self.goToDelarationForfait = function (annee) {
	            var url = '/mon-espace/declaration/forfait/#?annee=' + annee;
	            $window.location.href = url;
	        };
	        self.GetLienFinalisationForfait = function (id_declaration, annee, Etape) {
	            var url = '';
	            if (Etape == 4) url = '/mon-espace/declaration/forfait/#?annee=' + annee + '&id_declaration=' + id_declaration + '&action=control_ecart';else url = '/mon-espace/declaration/forfait/#?annee=' + annee + '&id_declaration=' + id_declaration + '&action=validation';
	            $window.location.href = url;
	        };

	        self.goToAccueilDeclaration = function () {
	            var url = '/mon-espace/declaration/accueil';
	            $window.location.href = url;
	        };
	        /***********************************getAnneesContractualisation************************************/

	        self.getAnneesContractualisation = function (ClientID) {

	            var url = '/declarationApp/p/clients/' + ClientID + '/GetAnneeContractualisation';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /********************************************************************/

	        self.goToHistoriqueDeclaration = function () {
	            var url = '/mon-espace/declaration/historique';
	            $window.location.href = url;
	        };

	        /****************************** Declaration societe et marque *******************/

	        self.SaveSocietesMarques = function (declarationid, entreprises, marques, continuer) {
	            var url = '/declarationApp/p/declarations/' + declarationid + '/societes_marques/?continue=' + continuer;
	            return $http({
	                method: "POST",
	                url: url,
	                data: angular.toJson({ 'marque': marques, 'soc': entreprises })
	            });
	        };
	        // retourne les pays
	        self.getPays = function () {
	            var url = '/declarationApp/p/pays';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        // retourne la liste des entreprise [Route("DeclarationApp/declarations/{declarationId}/getListEntreprise")]

	        self.getListEntreprise = function (declarationid) {
	            var url = '/declarationApp/p/declarations/' + declarationid + '/getListEntreprise/';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getListMarque = function (declarationid) {
	            var url = '/declarationApp/p/declarations/' + declarationid + '/getListMarque/';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /****************************** Declaration uvc web *******************/
	        self.getProduits = function () {
	            var url = '/declarationApp/p/produits';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getProduitsSpec = function () {
	            var url = '/declarationApp/p/produits_spec';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.CreateDeclarationUvcWeb = function (numero_client, id_declarant, annee, flag_corrective, motif, commentaire) {
	            var url = '/declarationApp/p/clients/' + numero_client + '/declaration_uvc_web/' + annee /*+ '?DeclarantID=' + id_declarant*/;

	            var fd = new FormData();
	            fd.append('flag_corrective', flag_corrective);
	            fd.append('motif', motif);
	            fd.append('commentaire', commentaire);
	            fd.append('DeclarantID', id_declarant);
	            return $http.post(url, fd, {
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };
	        self.goToDeclarationUvcWeb = function (id_declaration) {
	            var url = '/mon-espace/declaration/web/uvc/#?id_declaration=' + id_declaration;
	            $window.location.href = url;
	        };
	        self.AddUvcWeb = function (id_declaration) {
	            var url = '/declarationApp/p/declarations/' + id_declaration + '/add_uvc_web';

	            return $http({
	                method: "POST",
	                url: url,
	                data: { 'id_declaration': id_declaration }
	            });
	        };
	        self.copyUvc = function (uvcId) {
	            var url = '/declarationApp/p/lignesDeclaration/' + uvcId + '/copy_uvc_web';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.UpdateUvcWeb = function (uvc) {
	            var url = '/declarationApp/p/lignesDeclaration/update_uvc_web';

	            return $http({
	                method: "POST",
	                url: url,
	                data: uvc
	            });
	        };
	        self.CancelEdition = function (LigneDeclarationId) {
	            var url = '/declarationApp/p/lignesDeclaration/set_valide_uvc_web/' + LigneDeclarationId;

	            return $http({
	                method: "POST",
	                url: url,
	                data: { 'LigneDeclarationId': LigneDeclarationId }
	            });
	        };
	        self.InvalidateUvcWeb = function (LigneDeclarationId) {
	            var url = '/declarationApp/p/lignesDeclaration/invalidate_uvc_web/' + LigneDeclarationId;

	            return $http({
	                method: "POST",
	                url: url,
	                data: { 'LigneDeclarationId': LigneDeclarationId }
	            });
	        };
	        self.deleteUvc = function (uvcId) {
	            var url = '/declarationApp/p/lignesDeclaration/' + uvcId + '/delete_uvc_web';
	            return $http({
	                method: 'DELETE',
	                url: url
	            });
	        };
	        self.CalculerNbBobinesAlimentaire = function (uvc) {
	            var url = '/declarationApp/p/CalculerNbBobinesAlimentaire';
	            return $http({
	                method: 'POST',
	                url: url,
	                data: uvc
	            });
	        };

	        self.checkEtape = function (id_declaration, etape) {
	            var url = '/declarationApp/p/declarations/' + id_declaration + '/etape/' + etape;
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.ValidateDeclaWeb = function (id_declaration) {
	            var url = '/declarationApp/p/declarations/validate/' + id_declaration;

	            return $http({
	                method: "POST",
	                url: url,
	                data: { 'id_declaration': id_declaration }
	            });
	        };
	        self.goToMarquesSocietes = function (id_declaration) {
	            var url = '/mon-espace/declaration/web/uvc/entreprises-marques/#?id_declaration=' + id_declaration;
	            $window.location.href = url;
	        };
	        self.goToValidationDecWeb = function (id_declaration) {
	            var url = '/mon-espace/declaration/web/uvc/validation/#?id_declaration=' + id_declaration;
	            $window.location.href = url;
	        };
	        /***********************************getAnneesContractualisation************************************/

	        self.getAnneesContractualisation = function (ClientID) {

	            var url = '/declarationApp/p/clients/' + ClientID + '/GetAnneeContractualisation';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        /***********************************CONTROLE ECART *********************************/

	        // retourne la liste pour les motifs ecart
	        self.getMotifEcart = function () {
	            var url = '/declarationApp/p/MotifsEcart';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.SendCommentaire = function (declarationid, commentaire, go_to_next_step, selected_motif) {

	            var url = '/declarationApp/p/declarations/' + declarationid + '/ControleEcart/';
	            var fd = new FormData();

	            fd.append('go_to_next_step', go_to_next_step);
	            fd.append('selected_motif', selected_motif);
	            fd.append('commentaire', commentaire);
	            fd.append('declarationid', declarationid);

	            return $http.post(url, fd, {
	                transformRequest: angular.identity,
	                headers: {
	                    'Content-Type': undefined
	                }
	            });
	        };

	        self.getControleEcart = function (declarationId) {
	            var url = '/declarationApp/declarations/' + declarationId + '/VariationControleEcart';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        self.getMotifCommentaireControleEcart = function (declarationId) {
	            var url = '/declarationApp/p/declarations/' + declarationId + '/getControleEcart';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.getRpcs = function (clientNo) {
	            var url = '/declarationApp/p/rpcs/' + clientNo + '/getLast';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };
	        /********************************************************************/

	        self.activateCacCode = function (data) {
	            var url = '/declarationApp/p/rpcs/validatecode';
	            return $http({
	                method: 'POST',
	                url: url,
	                headers: {
	                    "content-type": 'application/json;charset=UTF-8'
	                },
	                data: data
	            });
	        };

	        self.sentDeclaration = function (form) {

	            console.log('declaration form to sent : ', form);

	            var url = '/declarationApp/p/clients/{ClientID}/DeclarationsConseiller/{Annee}';
	            var formData = new FormData();

	            formData.append('file', form.fileAttachment);
	            formData.append('id_declaration', form.declarationId);
	            formData.append('DeclarantID', form.declarantId);
	            formData.append('commentaire', form.comment);
	            formData.append('motif', form.motif);
	            formData.append('flag_corrective', form.correctiveFlag);

	            return $http({
	                method: 'POST',
	                url: url.replace('{ClientID}', form.clientId).replace('{Annee}', form.year),
	                data: formData,
	                transformRequest: angular.identity,
	                headers: { 'Content-Type': undefined }
	            });
	        };

	        self.getMotifs = function () {
	            var url = '/declarationApp/p/declarations/motifs_correctives_conseiller';
	            return $http({
	                method: 'GET',
	                url: url
	            });
	        };

	        self.goBack = function () {
	            $window.history.back();
	        };
	        return self;
	    };
	    this.dependencies.push(this.resource);
	}

	module.exports = new Declaration();

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	function Recommandation() {
	    this.name = 'recommandationResource';
	    this.dependencies = ['$http'];
	    this.resource = function ($http) {
	        var self = {};

	        // self.recommandations = $resource('/recommandations/');
	        // self.recommandation = $resource('/recommandations/:recommandationId', {recommandationId: '@id'});

	        // self.recommandations = $http({
	        //   method: 'GET',
	        //   url: ''
	        // });

	        return self;
	    };
	    this.dependencies.push(this.resource);
	}

	module.exports = new Recommandation();

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(102);
	var service = __webpack_require__(103);

	var moduleName = 'declaration.accueil';
	angular.module(moduleName, []);

	angular.module(moduleName).service('accueil_declarationService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('accueil_declarationCtrl', ['accueil_declarationService', '$window', ctrl]);
	angular.module(moduleName).component('accueilDeclaration', {
	    template: __webpack_require__(53),
	    controller: 'accueil_declarationCtrl',
	    controllerAs: 'accueil_declarationCtrl',
	    bindings: {}
	});
	module.exports = moduleName;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = function (accueil_declarationService, $window, $userService) {

	    var _self = this;
	    _self.user = accueil_declarationService.getUserInfo();

	    this.$onInit = function () {
	        console.log("initialisation status declaration");

	        accueil_declarationService.getDeclarationBloc().then(function () {

	            _self.declarationBloc = accueil_declarationService.declarationBloc;
	            _self.notDeclarationBloc = accueil_declarationService.notDeclarationBloc;
	        });

	        accueil_declarationService.getAnneesContractualisation(_self.user.numero_client).then(function (response) {
	            _self.AnneesContractualisation = response.data;
	            console.log("AnneesContractualisation :", _self.AnneesContractualisation);
	        }, function (reason) {}).finally(function () {});
	    };
	    _self.annee;
	    _self.isVisible = false;

	    var d = new Date();
	    var annee_en_cours = d.getFullYear();

	    accueil_declarationService.getAnneeDeclarationAsaisir(accueil_declarationService.getNumeroClient()).then(function (response) {

	        console.log("annee en cours:", annee_en_cours);

	        console.log('getAnneeDeclarationAsaisir: ', response);
	        _self.annee = response.data;
	        if (_self.annee != '' && annee_en_cours != _self.AnneesContractualisation) {

	            _self.isVisible = true;
	        }
	    });

	    _self.goToChoixDeclaration = function () {
	        var url = '/mon-espace/declaration/choix#?annee=' + _self.annee;

	        $window.location.href = url;
	    };
	};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	function accueil_declarationService(declarationResource, userService) {
	    var self = this;

	    const DECLARATION_TO_DO = 'declaration a faire';
	    const DECLARATION_DONE = 'pas de declaration a faire';

	    self.getAnneeDeclarationAsaisir = declarationResource.getAnneeDeclarationAsaisir;
	    self.getAnneesContractualisation = declarationResource.getAnneesContractualisation;

	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined,
	        id_SF: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    this.getNumeroClient = function () {
	        return (/*'GHJYT6565DFG';*/userService.getUserIdSAP()
	        );
	    };

	    this.getDeclarationBloc = function () {

	        console.log("Service initialisation status declaration");
	        return declarationResource.getDeclarationStatus().then(function (response) {

	            var language = userService.getLanguage();
	            console.log('success : ', response);

	            //var arrayDeclaToDo = response.data.find(getValue, { lang: language, declarationStatus: DECLARATION_TO_DO });
	            //var arrayDeclaDone = response.data.find(getValue, { lang: language, declarationStatus: DECLARATION_DONE });
	            var arrayDeclaToDo = userService.searchInArray(response.data, getValue, { lang: language, declarationStatus: DECLARATION_TO_DO });
	            var arrayDeclaDone = userService.searchInArray(response.data, getValue, { lang: language, declarationStatus: DECLARATION_DONE });
	            //console.log('testing find decla to do: ', arrayDeclaToDo);
	            //console.log('testing find decla done: ', arrayDeclaDone);

	            self.declarationBloc = arrayDeclaToDo.body[0].value;
	            self.notDeclarationBloc = arrayDeclaDone.body[0].value;

	            console.log('declaration : ', self.declarationBloc);
	            console.log('pas de declaration : ', self.notDeclarationBloc);
	        }, function (response) {

	            console.log('failure : ', response);
	        });
	    };

	    var getValue = function (data) {

	        //console.log('data value : ', data);
	        //console.log('this value : ', this);

	        return data.langcode[0].value == this.lang && data.title[0].value == this.declarationStatus;
	    };
	    return self;
	}

	module.exports = accueil_declarationService;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var ctrl = __webpack_require__(105);
	var service = __webpack_require__(106);
	var moduleName = 'declaration.choixdeclaration';
	angular.module(moduleName, []);

	angular.module(moduleName).service('choixdeclarationService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('choixdeclarationCtrl', ['choixdeclarationService', '$uibModal', '$scope', '$location', '$window', ctrl]);
	angular.module(moduleName).component('choixdeclaration', {
	    template: __webpack_require__(54),
	    controller: 'choixdeclarationCtrl',
	    controllerAs: 'choixdeclarationCtrl',
	    bindings: {}
	});
	angular.module(moduleName).value('uiSliderConfig', {}).directive('uiSlider', ['uiSliderConfig', '$timeout', function (uiSliderConfig, $timeout) {
	    uiSliderConfig = uiSliderConfig || {};
	    return {
	        require: 'ngModel',
	        compile: function () {
	            var preLink = function (scope, elm, attrs, ngModel) {

	                function parseNumber(n, decimals) {
	                    return decimals ? parseFloat(n) : parseInt(n, 10);
	                }

	                var directiveOptions = angular.copy(scope.$eval(attrs.uiSlider));
	                var options = angular.extend(directiveOptions || {}, uiSliderConfig);
	                // Object holding range values
	                var prevRangeValues = {
	                    min: null,
	                    max: null
	                };

	                // convenience properties
	                var properties = ['min', 'max', 'step', 'lowerBound', 'upperBound'];
	                var useDecimals = !angular.isUndefined(attrs.useDecimals) ? true : false;
	                var updateOn = angular.isDefined(options['updateOn']) ? options['updateOn'] : 'slide';

	                var init = function () {
	                    // When ngModel is assigned an array of values then range is expected to be true.
	                    // Warn user and change range to true else an error occurs when trying to drag handle
	                    if (angular.isArray(ngModel.$viewValue) && options.range !== true) {
	                        console.warn('Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true.');
	                        options.range = true;
	                    }

	                    // Ensure the convenience properties are passed as options if they're defined
	                    // This avoids init ordering issues where the slider's initial state (eg handle
	                    // position) is calculated using widget defaults
	                    // Note the properties take precedence over any duplicates in options
	                    angular.forEach(properties, function (property) {
	                        if (angular.isDefined(attrs[property])) {
	                            options[property] = parseNumber(attrs[property], useDecimals);
	                        }
	                    });

	                    elm.slider(options);
	                    init = angular.noop;
	                };

	                // Find out if decimals are to be used for slider
	                angular.forEach(properties, function (property) {
	                    // support {{}} and watch for updates
	                    attrs.$observe(property, function (newVal) {
	                        if (!!newVal) {
	                            init();
	                            options[property] = parseNumber(newVal, useDecimals);
	                            elm.slider('option', property, parseNumber(newVal, useDecimals));
	                            ngModel.$render();
	                        }
	                    });
	                });
	                attrs.$observe('disabled', function (newVal) {
	                    init();
	                    elm.slider('option', 'disabled', !!newVal);
	                });

	                // Watch ui-slider (byVal) for changes and update
	                scope.$watch(attrs.uiSlider, function (newVal) {
	                    init();
	                    if (newVal !== undefined) {
	                        elm.slider('option', newVal);
	                    }
	                }, true);

	                // Late-bind to prevent compiler clobbering
	                $timeout(init, 0, true);

	                // Update model value from slider
	                elm.bind(updateOn, function (event, ui) {
	                    var valuesChanged;

	                    if (ui.values) {
	                        var boundedValues = ui.values.slice();

	                        if (options.lowerBound && boundedValues[0] < options.lowerBound) {
	                            boundedValues[0] = Math.max(boundedValues[0], options.lowerBound);
	                        }
	                        if (options.upperBound && boundedValues[1] > options.upperBound) {
	                            boundedValues[1] = Math.min(boundedValues[1], options.upperBound);
	                        }

	                        if (boundedValues[0] !== ui.values[0] || boundedValues[1] !== ui.values[1]) {
	                            valuesChanged = true;
	                            ui.values = boundedValues;
	                        }
	                    } else {
	                        var boundedValue = ui.value;

	                        if (options.lowerBound && boundedValue < options.lowerBound) {
	                            boundedValue = Math.max(boundedValue, options.lowerBound);
	                        }
	                        if (options.upperBound && boundedValue > options.upperBound) {
	                            boundedValue = Math.min(boundedValue, options.upperBound);
	                        }

	                        if (boundedValue !== ui.value) {
	                            valuesChanged = true;
	                            ui.value = boundedValue;
	                        }
	                    }

	                    ngModel.$setViewValue(ui.values || ui.value);
	                    $(ui.handle).find('.ui-slider-tip').text(ui.value);
	                    scope.$apply();

	                    if (valuesChanged) {
	                        setTimeout(function () {
	                            elm.slider('value', ui.values || ui.value);
	                        }, 0);

	                        return false;
	                    }
	                });

	                // Update slider from model value
	                ngModel.$render = function () {
	                    init();
	                    var method = options.range === true ? 'values' : 'value';

	                    if (options.range !== true && isNaN(ngModel.$viewValue) && !(ngModel.$viewValue instanceof Array)) {
	                        ngModel.$viewValue = 0;
	                    } else if (options.range && !angular.isDefined(ngModel.$viewValue)) {
	                        ngModel.$viewValue = [0, 0];
	                    }

	                    // Do some sanity check of range values
	                    if (options.range === true) {
	                        // previously, the model was a string b/c it was in a text input, need to convert to a array.
	                        // make sure input exists, comma exists once, and it is a string.
	                        if (ngModel.$viewValue && angular.isString(ngModel.$viewValue) && (ngModel.$viewValue.match(/,/g) || []).length === 1) {
	                            // transform string model into array.
	                            var valueArr = ngModel.$viewValue.split(',');
	                            ngModel.$viewValue = [Number(valueArr[0]), Number(valueArr[1])];
	                        }
	                        // Check outer bounds for min and max values
	                        if (angular.isDefined(options.min) && options.min > ngModel.$viewValue[0]) {
	                            ngModel.$viewValue[0] = options.min;
	                        }
	                        if (angular.isDefined(options.max) && options.max < ngModel.$viewValue[1]) {
	                            ngModel.$viewValue[1] = options.max;
	                        }

	                        // Check min and max range values
	                        if (ngModel.$viewValue[0] > ngModel.$viewValue[1]) {
	                            // Min value should be less to equal to max value
	                            if (prevRangeValues.min >= ngModel.$viewValue[1]) {
	                                ngModel.$viewValue[1] = prevRangeValues.min;
	                            }
	                            // Max value should be less to equal to min value
	                            if (prevRangeValues.max <= ngModel.$viewValue[0]) {
	                                ngModel.$viewValue[0] = prevRangeValues.max;
	                            }
	                        }

	                        // Store values for later user
	                        prevRangeValues.min = ngModel.$viewValue[0];
	                        prevRangeValues.max = ngModel.$viewValue[1];
	                    }
	                    elm.slider(method, ngModel.$viewValue);
	                };

	                scope.$watch(attrs.ngModel, function () {
	                    if (options.range === true) {
	                        ngModel.$render();

	                        $(elm).find('.ui-slider-tip').each(function (i, tipElm) {
	                            $(tipElm).text(ngModel.$viewValue[i]);
	                        });
	                    } else {
	                        $(elm).find('.ui-slider-tip').text(ngModel.$viewValue);
	                    }
	                }, true);

	                function destroy() {
	                    if (elm.hasClass('ui-slider')) {
	                        elm.slider('destroy');
	                    }
	                }

	                scope.$on("$destroy", destroy);
	                elm.one('$destroy', destroy);
	            };

	            var postLink = function (scope, element, attrs, ngModel) {
	                // Add tick marks if 'tick' and 'step' attributes have been setted on element.
	                // Support horizontal slider bar so far. 'tick' and 'step' attributes are required.
	                var options = angular.extend({}, scope.$eval(attrs.uiSlider));
	                var properties = ['min', 'max', 'step', 'tick', 'tip'];
	                angular.forEach(properties, function (property) {
	                    if (angular.isDefined(attrs[property])) {
	                        options[property] = attrs[property];
	                    }
	                });
	                if (angular.isDefined(options['tick']) && angular.isDefined(options['step'])) {
	                    var total = parseInt((parseInt(options['max']) - parseInt(options['min'])) / parseInt(options['step']));
	                    for (var i = total; i >= 0; i--) {
	                        var left = i / total * 100 + '%';
	                        $("<div/>").addClass("ui-slider-tick").appendTo(element).css({ left: left });
	                    };
	                }
	                if (angular.isDefined(options['tip'])) {
	                    $timeout(function () {
	                        var handles = element.find('.ui-slider-handle');
	                        if (handles && handles.length > 1 && ngModel.$viewValue && angular.isArray(ngModel.$viewValue)) {
	                            $(handles[0]).append('<div class="ui-slider-tip">' + ngModel.$viewValue[0] + '</div>');
	                            $(handles[1]).append('<div class="ui-slider-tip">' + ngModel.$viewValue[1] + '</div>');
	                        } else {
	                            element.find('.ui-slider-handle').append('<div class="ui-slider-tip">' + ngModel.$viewValue + '</div>');
	                        }
	                    }, 10);
	                }
	            };

	            return {
	                pre: preLink,
	                post: postLink
	            };
	        }
	    };
	}]);

	//angular.module(moduleName).directive('slider', function () {
	//    return {
	//        restrict: 'AE',
	//        link: function (scope, element, attrs) {
	//            element.slider({
	//                value: scope[attrs.ngModel],
	//                min: parseInt(attrs.min),
	//                max: parseInt(attrs.max),
	//                step: parseFloat(attrs.step),
	//                slide: function (event, ui) {
	//                    scope.$apply(function () {
	//                        scope[attrs.ngModel] = ui.value;
	//                    });
	//                }
	//            });

	//            scope.$watch(attrs.ngModel, function (newVal, oldVal) {
	//                element.slider({ value: newVal });
	//            });
	//        }
	//    };
	//});
	module.exports = moduleName;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (choixdeclarationService, $uibModal, $scope, $location, $window) {
	    var self = this;

	    self.typesDeclarationsTextes = [];
	    self.choix = [];
	    self.html = [];
	    self.selected_type;
	    self.type_declaration;
	    self.modal_instance;

	    self.annee_excel = '';
	    self.langue_excel = '';

	    self.nbuvc;

	    self.step = 1;
	    self.RecapDeclaration;
	    self.declarationFile;
	    self.errors;

	    self.modal_instance;
	    self.status_code;
	    self.mails = [];
	    self.mailinput;
	    self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

	    self.langue = choixdeclarationService.getLanguage();
	    self.user = choixdeclarationService.getUserInfo();
	    self.annee = $location.search().annee;
	    if (self.annee >= 2016) self.nbuvc = 83;else self.nbuvc = 25;

	    this.GetChoix = function () {
	        var converted_value = self.nbuvc;
	        if (self.annee >= 2016) {
	            if (self.nbuvc < 34) converted_value = 10000;else if (self.nbuvc > 33 && self.nbuvc < 67) converted_value = 500000;else converted_value = 500001;
	        } else {
	            if (self.nbuvc < 50) converted_value = 180000;else converted_value = 180001;
	        }
	        console.log('self.nbuvc converted_value', converted_value);
	        choixdeclarationService.getChoixTypesDeclaration(converted_value, self.annee, self.user.numero_client).then(function (response) {

	            console.log("success", response);
	            self.html = [];
	            self.choix = [];
	            self.choix = response.data.split(',');

	            self.selected_type = self.choix[0];
	            for (j = 0; j < self.choix.length; j++) {
	                self.html.push(self.getTypeDeclarationParId(self.choix[j]));
	            }
	        });
	    };

	    choixdeclarationService.contenu().then(function (response) {

	        for (var index in response.data) {
	            if (response.data[index].body && response.data[index].title) {
	                console.log('response.data[index].langcode[0].value', response.data[index].langcode[0].value);
	                self.typesDeclarationsTextes.push({
	                    titre: response.data[index].title[0].value,
	                    html: response.data[index].body[0].value,
	                    type: response.data[index].field_type_decla[0].value /*,
	                                                                         langue: response.data[index].langcode[0].value*/
	                });
	            }
	        }
	        console.log('self.typesDeclarationsTextes', self.typesDeclarationsTextes);
	    });

	    this.GoToDelarationEnLigne = function () {
	        //alert('self.selected_type, self.annee:' + self.selected_type + '-' + self.annee);
	        self.selected_motif = sessionStorage.getItem("motif_corrective");
	        self.commentaire = sessionStorage.getItem("commentaire_corrective");
	        if (self.selected_motif != null) self.flag_corrective = 1;else self.flag_corrective = 0;

	        if (self.selected_type == 'forfait') {
	            choixdeclarationService.goToDelarationForfait(self.annee);
	        } else {
	            // 'sectorielle','detaillee','uvc'
	            if (self.selected_type == 'uvc') {
	                choixdeclarationService.CreateDeclarationUvcWeb(self.user.numero_client, self.user.id_declarant, self.annee, self.flag_corrective == 1 ? true : false, self.selected_motif, self.commentaire).then(function (response) {
	                    console.log('submit - ok : ' + JSON.stringify(response));
	                    choixdeclarationService.goToDeclarationWeb(response.data, self.annee, self.selected_type, self.flag_corrective, self.selected_motif, self.commentaire);
	                }, function (reason) {
	                    console.error('submit - error : ' + JSON.stringify(reason));
	                }).finally(function () {});
	            } else choixdeclarationService.goToDeclarationWeb('', self.annee, self.selected_type, self.flag_corrective, self.selected_motif, self.commentaire);
	        }
	    };

	    this.getTypeDeclarationParId = function (type) {

	        for (i = 0; i < self.typesDeclarationsTextes.length; i++) {
	            if (self.typesDeclarationsTextes[i].type == type /*&& self.langue == self.typesDeclarationsTextes[i].langue*/) return self.typesDeclarationsTextes[i];
	        }
	    };

	    this.valideChoixDeclaration = function () {
	        console.log('valideChoixDeclaration', self.vue, ',', self.selected_type);
	        if (self.selected_type != 'forfait') {
	            self.modal_instance = $uibModal.open({
	                template: __webpack_require__(55),
	                scope: $scope,
	                backdrop: 'static',
	                keyboard: false
	            });
	        } else this.GoToDelarationEnLigne();
	    };

	    this.openExcelOptionsModal = function () {
	        self.annee_excel = '';
	        self.langue_excel = '';
	        self.modal_instance.close();
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(56),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    this.closeModal = function () {
	        self.modal_instance.close();
	    };

	    this.sendDeclarationExcel = function () {
	        if (self.selected_type == 'uvc') {
	            choixdeclarationService.InitialiserDeclarationUVC(self.user.numero_client, self.user.id_declarant, self.annee).then(function (response) {
	                console.log('submit - ok : ' + JSON.stringify(response));
	            }, function (reason) {
	                console.error('submit - error : ' + JSON.stringify(reason));
	            }).finally(function () {});

	            choixdeclarationService.getFichierExcelUvc(self.annee_excel, self.langue_excel, self.user.numero_client);
	        } else {
	            console.log('excel ' + self.selected_type);
	            self.eco_langue = 'FR';
	            if (self.langue_excel == 'anglais') self.eco_langue = 'EN';
	            choixdeclarationService.getTemplateExcelSectDetail(self.annee, self.selected_type, self.annee_excel, self.eco_langue);
	        };
	    };

	    this.$onInit = function () {
	        self.selected_type = $location.search().type;
	        if (typeof self.selected_type == 'undefined') {
	            self.selected_type = '';
	        } else self.selected_type = self.selected_type.toLowerCase();

	        self.vue = $location.search().vue;
	        console.log('typeof self.vue', typeof self.vue);
	        if (self.vue == 'mode_saisie') {
	            this.valideChoixDeclaration();
	        }
	        console.log(self.vue, self.selected_type);
	    };
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	function choixdeclarationService(declarationResource, userService) {
	    var self = this;
	    self.getChoixTypesDeclaration = declarationResource.getChoixTypesDeclaration;
	    self.contenu = declarationResource.getContenuBloc;

	    self.getFichierExcelUvc = declarationResource.getFichierExcelUvc;
	    self.InitialiserDeclarationUVC = declarationResource.InitialiserDeclarationUVC;

	    self.goToDeclarationWeb = declarationResource.goToDeclarationWeb;
	    self.goToDelarationForfait = declarationResource.goToDelarationForfait;
	    self.getTemplateExcelSectDetail = declarationResource.getTemplateExcelSectDetail;

	    self.CreateDeclarationUvcWeb = declarationResource.CreateDeclarationUvcWeb;

	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP(); //'GHJYT6565DFG';
	        self.user.id_declarant = userService.getUserIdCorrespondent(); //'123'; 
	        console.log(self.user);
	        return self.user;
	    };
	    self.getLanguage = function () {
	        return userService.getLanguage;
	    };

	    return self;
	}
	module.exports = choixdeclarationService;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(108);
	var service = __webpack_require__(109);
	var moduleName = 'declaration.controleecart';
	angular.module(moduleName, []);

	var app = angular.module(moduleName, []);

	angular.module(moduleName).service('controleecartService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('controleecartCtrl', ['controleecartService', '$location', '$uibModal', '$filter', '$scope', 'userService', ctrl]);
	angular.module(moduleName).component('controleecart', {
	    template: __webpack_require__(58),
	    controller: 'controleecartCtrl',
	    controllerAs: 'controleecartCtrl',
	    bindings: {
	        declarationid: '@',
	        onvalidate: '&',
	        onback: '&'
	    }
	});

	module.exports = moduleName;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (controleecartService, $location, $uibModal, $filter, $scope, $userService) {
	    var self = this;

	    self.motifs = '';

	    self.commentaire = '';
	    self.selected_motif = '';

	    self.modal_instance;

	    self.user = controleecartService.getUserInfo();

	    self.form_submitted;

	    self.id_dec = $location.search().id_dec;
	    if (typeof self.id_dec == 'undefined') self.id_dec = $location.search().id_declaration; //on n'utilise pas toujour le m�me param�tre dans l'url
	    self.action = $location.search().action;
	    console.log('id_dec ' + self.id_dec);
	    console.log('action ' + self.action);

	    this.$onInit = function () {
	        controleecartService.getMotifEcart().then(function (response) {
	            self.MotifEcartTab = [];
	            for (var index in response.data) {
	                self.MotifEcartTab.push({
	                    EcartMotifId: response.data[index].EcartMotifId,
	                    Code: response.data[index].Code,
	                    Libelle: $filter("translate")('motifs_controle_ecart.' + response.data[index].Code)

	                });
	            }
	        }, function (reason) {}).finally(function () {});
	        if (typeof self.id_dec != 'undefined' && typeof self.action != 'undefined' && self.action == 'control_ecart') {
	            controleecartService.getMotifCommentaireControleEcart(self.id_dec).then(function (response) {
	                console.log('getMotifCommentaireControleEcart ok:', response.data);
	                self.selected_motif = response.data.motif;
	                self.commentaire = response.data.commentaire;
	            }, function (reason) {
	                console.error('erreur getMotifCommentaireControleEcart:', reason);
	            }).finally(function () {});
	        }
	    };

	    this.SendCommentaire = function (go_to_next_step) {
	        controleecartService.SendCommentaire(self.declarationid, self.commentaire, go_to_next_step, self.selected_motif).then(function (response) {
	            console.log('retour ....', response);

	            console.log('submit - ok : ' + JSON.stringify(response));
	            self.status_code = 200;
	        }, function (reason) {
	            console.error('submit - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };

	    this.submit_commentaire = function (form) {
	        self.form_submitted = true;
	        if (form.$valid) {

	            this.SendCommentaire(true);
	            self.commentaire = '';
	            this.onvalidate();
	        }
	    };

	    this.submit_commentaireSave = function (form) {
	        self.form_submitted = true;
	        if (form.$valid) {
	            this.SendCommentaire(false);
	            //self.commentaire= '';
	            //this.onvalidate();
	            this.valideEnregistrement();
	        }
	    };

	    this.goBack = function () {
	        this.onback();
	        /*controleecartService.goBack();*/
	    };

	    this.valideEnregistrement = function () {
	        if (self.modal_instance) self.modal_instance.close();

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(57),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    this.closeModal = function () {
	        self.modal_instance.close();
	    };
	};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	function controleecartService(declarationResource, userService) {
	    var self = this;

	    self.getMotifEcart = declarationResource.getMotifEcart;
	    self.SendCommentaire = declarationResource.SendCommentaire;
	    self.goBack = declarationResource.goBack;
	    self.getMotifCommentaireControleEcart = declarationResource.getMotifCommentaireControleEcart;

	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined,
	        id_SF: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    return self;
	}

	module.exports = controleecartService;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(111);
	var service = __webpack_require__(112);
	var moduleName = 'declaration.declarationforfait';
	angular.module(moduleName, []);

	angular.module(moduleName).service('declarationforfaitService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('declarationforfaitCtrl', ['declarationforfaitService', '$uibModal', '$scope', '$location', '$window', ctrl]);
	angular.module(moduleName).component('declarationforfait', {
	  template: __webpack_require__(59),
	  controller: 'declarationforfaitCtrl',
	  controllerAs: 'declarationforfaitCtrl',
	  bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (declarationforfaitService, $uibModal, $scope, $location, $window) {
	    var self = this;
	    self.step = 1;

	    self.mails = [];
	    self.mailinput;
	    self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

	    self.RecapDeclaration;
	    self.modal_instance;
	    self.status_code;
	    self.loading;
	    self.user = declarationforfaitService.getUserInfo();
	    self.annee = $location.search().annee;

	    //gestion corrective
	    self.selected_motif;
	    self.commentaire;
	    self.flag_corrective;

	    self.id_declaration = $location.search().id_declaration;
	    self.action = $location.search().action;
	    self.annee = $location.search().annee;
	    self.first_load = true;

	    //comp�lter une declaration 
	    if (typeof self.id_declaration != 'undefined') {
	        if (typeof self.action != 'undefined' && self.action == 'control_ecart') self.step = "controle_ecart";else self.step = 2;
	        //get recap 
	        declarationforfaitService.getRecap(self.id_declaration).then(function (response) {
	            self.RecapDeclaration = response.data;
	        }, function (reason) {
	            console.error('getRecap - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    }

	    this.SaveDeclarationForfait = function () {
	        self.selected_motif = sessionStorage.getItem("motif_corrective");
	        self.commentaire = sessionStorage.getItem("commentaire_corrective");
	        if (self.selected_motif != null) self.flag_corrective = true;else self.flag_corrective = false;

	        declarationforfaitService.SaveDeclarationForfait(self.user.numero_client, self.user.id_declarant, self.annee, self.flag_corrective, self.selected_motif, self.commentaire).then(function (response) {
	            self.RecapDeclaration = response.data;
	            console.log('submit - ok : ' + JSON.stringify(response));
	            self.RecapDeclaration = response.data;
	            sessionStorage.removeItem("motif_corrective");
	            sessionStorage.removeItem("commentaire_corrective");
	            //v�rifier le controle ecart
	            declarationforfaitService.getControleEcart(self.RecapDeclaration.IdDeclaration).then(function (response) {
	                self.first_load = false;
	                console.log('retour getControleEcart', response);
	                if (response.data == "OK") {
	                    self.step = "controle_ecart";
	                } else {
	                    self.step = 2;
	                }
	            }, function (reason) {
	                self.step = 2;
	            }).finally(function () {});
	        }, function (reason) {
	            console.error('submit - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };

	    this.addMails = function () {
	        console.debug(self.mailinput);
	        if (inArray(self.mailinput, self.mails) == -1) {
	            self.mails.push(self.mailinput);
	        }
	        console.debug(self.mails);
	        self.mailinput = '';
	    };

	    function inArray(elem, array) {
	        var len = array.length;
	        for (var i = 0; i < len; i++) {
	            if (array[i] == elem) {
	                return i;
	            }
	        }
	        return -1;
	    };

	    this.removeMail = function (mail) {
	        for (var i = this.mails.length - 1; i >= 0; i--) {
	            if (this.mails[i] === mail) {
	                this.mails.splice(i, 1);
	            }
	        }
	    };

	    this.valideMails = function () {
	        if (typeof self.RecapDeclaration != 'undefined') {
	            if (self.modal_instance) self.modal_instance.close();
	            self.loading = true;

	            self.modal_instance = $uibModal.open({
	                template: __webpack_require__(60),
	                scope: $scope,
	                backdrop: 'static',
	                keyboard: false
	            });

	            declarationforfaitService.sendDeclarationAR(self.mails.join(), self.RecapDeclaration.IdDeclaration, self.user.id_SF).then(function (response) {

	                console.log('SF: ' + self.user.id_SF);
	                console.debug('recap declaration join ' + self.RecapDeclaration.IdDeclaration);

	                declarationforfaitService.saveMailsAR(self.mails.join(), self.RecapDeclaration.IdDeclaration).then(function (response) {

	                    self.status_code = 200;
	                }, function (reason) {
	                    self.status_code = reason.status;
	                    self.errors = reason.data;
	                    self.mails = [];
	                }).finally(function () {
	                    self.mails = [];self.loading = false;
	                });
	            }, function (reason) {
	                if (reason.status == 403) {
	                    self.modal_instance.close();
	                } else {
	                    self.status_code = reason.status;
	                    self.errors = reason.data;
	                    self.mails = [];
	                    self.loading = false;
	                }
	            }).finally(function () {
	                self.mails = [];
	            });
	        }
	    };

	    this.saveMails = function () {

	        declarationforfaitService.saveMailsAR(self.mails.join(), self.RecapDeclaration.IdDeclaration).then(function (response) {

	            self.status_code = 200;
	            self.step = 1;
	        }, function (reason) {
	            self.status_code = reason.status;
	            self.errors = reason.data;
	            // self.mails = null;
	        }).finally(function () {/*_self.mails = null;*/});
	    };

	    this.goBackFromControlEcart = function () {

	        if (self.first_load) {
	            declarationforfaitService.goBack();
	        } else self.step = 1;
	    };
	};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	function declarationforfaitService(declarationResource, userService) {
	    var self = this;

	    self.SaveDeclarationForfait = declarationResource.SaveDeclarationForfait;
	    self.getRecap = declarationResource.getRecap;
	    self.goToChoixDeclaration = declarationResource.goToChoixDeclaration;

	    self.sendDeclarationAR = declarationResource.sendDeclarationAR;
	    self.saveMailsAR = declarationResource.saveMailsAR;
	    self.getControleEcart = declarationResource.getControleEcart;
	    self.goBack = declarationResource.goBack;

	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    return self;
	}
	module.exports = declarationforfaitService;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(114);
	var service = __webpack_require__(115);
	var moduleName = 'declaration.depotDeclaration';

	angular.module(moduleName, []);
	angular.module(moduleName).factory('depotDeclarationService', ['declarationResource', 'popupsService', service]);
	angular.module(moduleName).controller('depotDeclarationCtrl', ['depotDeclarationService', 'userService', ctrl]);
	angular.module(moduleName).component('depotDeclaration', {
	    template: __webpack_require__(61),
	    controller: 'depotDeclarationCtrl',
	    controllerAs: 'depotDeclarationCtrl',
	    bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports = function (depotDeclarationService, userService) {

	    var _self = this;

	    this.extensionsList = ['zip', 'fde'];

	    this.$onInit = function () {

	        depotDeclarationService.getMotifs().then(function (response) {
	            console.log('get motifs success : ', response);
	            _self.motifsCorrective = response.data;
	        }, function (response) {
	            console.log('get motifs failure : ', response);
	        });
	    };

	    this.submit = function (formulaire) {

	        console.log('formulaire : ', formulaire);
	        if (formulaire.$invalid || !formulaire.$valid) {
	            console.log('invalid form : show errors');
	            setTouch(formulaire);
	            focusInputWithError('depot-declaration-form');
	            console.log('complete errors showing');
	            return;
	        }

	        _self.sendingFormFlag = true;
	        console.log("submit clicked !!");

	        if (angular.isUndefined(_self.form.comment)) _self.form.comment = '';

	        if (angular.isUndefined(_self.form.motif)) _self.form.motif = '';

	        if (angular.isUndefined(_self.form.comment)) _self.form.comment = '';

	        if (angular.isUndefined(_self.form.declarantId)) _self.form.declarantId = '';

	        if (angular.isUndefined(_self.form.declarationId)) _self.form.declarationId = '';

	        depotDeclarationService.submit(_self.form).then(function () {
	            _self.sendingFormFlag = false;
	        });
	    };

	    var focusInputWithError = function (idValue) {
	        var elem = document.getElementById(idValue).querySelector('.ng-invalid');
	        if (elem.id == 'file-upload') document.getElementById('file-link').focus();else elem.focus();
	    };

	    var setTouch = function (formulaire) {

	        console.log('formulaire : ', formulaire);
	        for (var element in formulaire) {
	            if (angular.isObject(formulaire[element]) && formulaire[element].hasOwnProperty('$touched') && formulaire[element].$untouched) {
	                formulaire[element].$setTouched();
	                formulaire[element].$$parseAndValidate();
	            }
	        }
	    };

	    this.navigate = function () {
	        window.location = '/accueil-conseiller';
	    };
	};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports = function (declarationResource, popupsService) {

	    var _self = this;

	    this.submit = function (form) {

	        return declarationResource.sentDeclaration(form).then(function (response) {
	            console.log('sent declaration success : ', response);
	            popupsService.openDepotDeclarationSuccess(response.data.ContributionTotale);
	        }, function (response) {
	            console.log('sent declaration failure : ', response);
	            if (response.status == 400) popupsService.openDepotDeclarationFailure(response.data);
	        });
	    };

	    this.getMotifs = function () {
	        return declarationResource.getMotifs();
	    };

	    return this;
	};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(117);
	var service = __webpack_require__(118);
	var moduleName = 'declaration.entreprise';
	angular.module(moduleName, []);

	var app = angular.module(moduleName, []);

	//app.config(['$locationProvider', function ($locationProvider) {
	//    $locationProvider.html5Mode(
	//        {
	//            enabled:true,
	//            requireBase: false
	//        });
	//}]);

	angular.module(moduleName).service('entrepriseService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('entrepriseCtrl', ['entrepriseService', '$location', '$uibModal', '$scope', '$filter', ctrl]);
	angular.module(moduleName).component('entreprise', {
	    template: __webpack_require__(63),
	    controller: 'entrepriseCtrl',
	    controllerAs: 'entrepriseCtrl',
	    bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (entrepriseService, $location, $uibModal, $scope, $filter, $userService) {
	    var self = this;

	    self.RecapDeclaration;
	    self.entreprises = [];

	    self.marques = [];

	    self.choix = false;
	    self.choixmarque = false;

	    self.user = entrepriseService.getUserInfo();
	    console.log('self.user::', self.user);
	    this.entrepriseinput = {
	        nom: '',
	        siret: '',
	        pays: ''
	    };
	    this.marqueinput = '';
	    self.submitted;
	    self.msgErreurForMarque;
	    self.msgErreurForEntreprise;
	    self.msgerreursiret;

	    self.step = ''; // 'entreprises_marques';

	    self.loading = true;

	    self.controleEcart = false;

	    this.$onInit = function () {

	        self.id_declaration = $location.search().id_declaration;
	        self.action = $location.search().action;

	        if (typeof self.id_declaration == 'undefined') self.id_declaration = '';
	        if (typeof self.action == 'undefined') self.action = 'control_ecart';

	        entrepriseService.getRecap(self.id_declaration).then(function (response) {
	            self.RecapDeclaration = response.data;
	            //v�rifier le controle ecart
	            if (self.action == 'control_ecart') {
	                entrepriseService.getControleEcart(self.RecapDeclaration.IdDeclaration).then(function (response) {
	                    console.log('retour getControleEcart', response);
	                    if (response.data == "OK") {
	                        self.step = "controle_ecart";
	                        self.controleEcart = true;
	                    } else self.step = 'entreprises_marques';
	                }, function (reason) {
	                    self.step = 'entreprises_marques';
	                }).finally(function () {
	                    self.loading = false;
	                });
	            } else self.step = 'entreprises_marques';
	        }, function (reason) {
	            //console.error('getRecap - error : ' + JSON.stringify(reason));
	        }).finally(function () {
	            self.loading = false;
	        });

	        // retourne liste des entreprises
	        entrepriseService.getListEntreprise(self.id_declaration).then(function (response) {

	            console.log("mesentreprisesinbd :", response.data);

	            self.entreprises = response.data;
	            if (self.entreprises.length > 0) self.choix = true;

	            console.log(self.entreprises);
	        }, function (reason) {
	            console.error('mesentreprisesinbd - error : ' + JSON.stringify(reason));
	        }).finally(function () {});

	        entrepriseService.getListMarque(self.id_declaration).then(function (response) {
	            console.log("getListMarque :", response.data);
	            self.marques = response.data;
	            if (self.marques.length > 0) self.choixmarque = true;

	            console.log(self.marques);
	        }, function (reason) {
	            console.error('getListMarque - error : ' + JSON.stringify(reason));
	        }).finally(function () {});

	        // retourne les la liste des pays 

	        entrepriseService.getPays().then(function (response) {
	            self.Pays = [];
	            for (var index in response.data) {
	                self.Pays.push({
	                    Code: response.data[index].Code,
	                    Designation: $filter("translate")('pays.' + response.data[index].Code)
	                });
	            }
	        }, function (reason) {
	            //console.error('getPays - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };

	    this.valideEnregistrement = function () {
	        if (self.modal_instance) self.modal_instance.close();

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(62),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    this.closeModal = function () {
	        self.modal_instance.close();
	    };

	    this.hideExposant = function (val) {
	        if (val == '' || val == null) return true;else return false;
	    };

	    this.SaveWithoutAdd = function () {
	        if (self.entrepriseinput.nom != '' && self.entrepriseinput.pays != '') {
	            this.addEntreprise();
	            if (self.entreprises.length > 0) {
	                this.Save(true);
	            }
	        }

	        if (self.marqueinput != '') {
	            this.addMarque();
	            if (self.marques.length > 0) {
	                this.Save(true);
	            }
	        }
	    };

	    this.SaveWithoutAddfalse = function () {

	        if (self.entrepriseinput.nom != '' && self.entrepriseinput.pays != '') {
	            this.addEntreprise();
	            if (self.entreprises.length > 0) {
	                this.Save(false);
	            }
	        }

	        if (self.marqueinput != '') {
	            this.addMarque();
	            if (self.marques.length > 0) {
	                this.Save(false);
	            }
	        }
	    };

	    this.submitFromOutSide = function (form) {

	        if (self.entrepriseinput.nom != '' && self.entrepriseinput.pays != '') {
	            this.SaveWithoutAdd();
	        } else {
	            if (self.entrepriseinput.nom == '' && self.entrepriseinput.pays == '') this.Save(true);else self.submitted = true;
	        }
	    };

	    this.Save = function (etape_suivante) {
	        entrepriseService.SaveSocietesMarques(self.id_declaration, self.entreprises, self.marques, etape_suivante).then(function (response) {

	            if (etape_suivante) entrepriseService.goToValidationDecWeb(self.id_declaration);
	        }, function (reason) {
	            //console.error('Save - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };

	    this.goToDeclarationUvcWeb = function () {
	        entrepriseService.goToDeclarationUvcWeb(self.id_declaration);
	    };
	    this.goBack = function () {
	        if (self.controleEcart) self.step = "controle_ecart";else entrepriseService.goBack();
	    };

	    function inArray(elem, array) {
	        var len = array.length;
	        for (var i = 0; i < len; i++) {
	            if (array[i] == elem) {
	                return i;
	            }
	        }
	        return -1;
	    };

	    this.removeEntreprise = function (entreprise) {
	        for (var i = this.entreprises.length - 1; i >= 0; i--) {
	            if (this.entreprises[i] === entreprise) {
	                this.entreprises.splice(i, 1);
	            }
	        }
	    };

	    this.addMarque = function () {
	        if (this.inArrayMarque(self.marqueinput, self.marques) == -1) {
	            self.marques.push(self.marqueinput);
	            self.marqueinput = '';
	            self.msgErreurForMarque = false;
	        } else self.msgErreurForMarque = true;
	    };

	    this.addEntreprise = function () {
	        if (this.inArrayEntreprise(self.entrepriseinput, self.entreprises) == -1) {
	            self.entreprises.push(self.entrepriseinput);
	            self.entrepriseinput = {
	                nom: '',
	                siret: '',
	                pays: ''
	            };
	            self.msgErreurForEntreprise = false;
	        } else self.msgErreurForEntreprise = true;
	    };

	    this.inArrayMarque = function (elem, array) {
	        var len = array.length;
	        for (var i = 0; i < len; i++) {
	            if (array[i] == elem) {
	                return i;
	            }
	        }
	        return -1;
	    };

	    this.inArrayEntreprise = function (elem, array) {
	        var len = array.length;
	        self.tab2 = [];
	        angular.copy(array, self.tab2);
	        console.log("tab2:", self.tab2);
	        for (var i = 0; i < len; i++) {
	            if (JSON.stringify(self.tab2[i]) == JSON.stringify(elem)) {
	                return i;
	            }
	            console.log("mon tab", self.tab2[i]);
	            console.log("element ", elem);
	        }
	        return -1;
	    };

	    this.removeMarque = function (marque) {
	        for (var i = this.marques.length - 1; i >= 0; i--) {
	            if (this.marques[i] === marque) {
	                this.marques.splice(i, 1);
	            }
	        }
	    };
	};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	function entrepriseService(declarationResource, userService) {
	    var self = this;

	    self.getPays = declarationResource.getPays;
	    self.getRecap = declarationResource.getRecap;

	    self.SaveSocietesMarques = declarationResource.SaveSocietesMarques;
	    self.goToValidationDecWeb = declarationResource.goToValidationDecWeb;
	    self.goToDeclarationUvcWeb = declarationResource.goToDeclarationUvcWeb;
	    self.goToHistoriqueDeclaration = declarationResource.goToHistoriqueDeclaration;

	    self.checkEtape = declarationResource.checkEtape;
	    self.getListEntreprise = declarationResource.getListEntreprise;
	    self.getListMarque = declarationResource.getListMarque;
	    self.goBack = declarationResource.goBack;

	    self.getControleEcart = declarationResource.getControleEcart;

	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined,
	        id_SF: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    return self;
	}

	module.exports = entrepriseService;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(120);
	var service = __webpack_require__(121);

	var moduleName = 'declaration.historique';
	angular.module(moduleName, []);

	angular.module(moduleName).service('historiqueService', ['declarationResource', 'userService', 'unauthorizedPopInService', service]);
	angular.module(moduleName).controller('historiqueCtrl', ['historiqueService', '$uibModal', '$scope', '$window', ctrl]);
	angular.module(moduleName).component('historiqueDeclaration', {
	    template: __webpack_require__(67),
	    controller: 'historiqueCtrl',
	    controllerAs: 'historiqueCtrl',
	    bindings: {}
	});
	angular.module(moduleName).filter('decimalSeparator', function () {
	    return function (value) {
	        try {
	            var result = value.toLocaleString('fr-FR');
	            if (result.split(',').length == 1) {
	                result = result + ',00';
	            } else {
	                if (result.split(',').length == 2 && result.split(',')[1].length == 1) result = result + '0';
	            }
	            return result;
	        } catch (e) {
	            return value; /*.toLocaleString('fr-FR');*/
	        }
	    };
	});
	module.exports = moduleName;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (historiqueService, $uibModal, $scope, $window) {

	    var self = this;
	    self.selected_declaration_id;
	    self.type_declaration;
	    self.mode_saisie;
	    self.selected_annee;
	    self.modal_instance;

	    self.selected_motif = '';
	    self.motifs_corrective = {};
	    self.corrective_submitted = false;
	    self.commentaire = '';

	    self.etape_corrective = 1;
	    self.modifier_mode_type_declaration;

	    self.listdeclarations = [];
	    self.url_historique = historiqueService.getUrl_historique_declaration;
	    self.user = historiqueService.getUserInfo();

	    self.etape_choix_mode_saisie = 1;
	    self.suppresion_ok = false;;

	    historiqueService.getHistoriqueDeclaration(self.user.numero_client, 'page').then(function (response) {
	        self.listdeclarations = response.data;
	    });

	    historiqueService.getMotifsCorrective().then(function (response) {
	        self.motifs_corrective = response.data;
	        console.log('getMotifsCorrective - ok');
	    }, function (reason) {
	        console.error('getMotifsCorrective - error : ' + JSON.stringify(reason));
	    }).finally(function () {});

	    this.ModifierDeclaration = function (id, annee, type, mode_saisie) {
	        self.selected_declaration_id = id;
	        self.selected_annee = annee;
	        self.type_declaration = type;
	        self.mode_saisie = mode_saisie;

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(64),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    this.DemandeSuppressionDeclaration = function (id, annee, type, mode_saisie) {

	        self.selected_declaration_id = id;
	        self.selected_annee = annee;
	        self.type_declaration = type;
	        self.mode_saisie = mode_saisie;

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(66),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    this.SupprimerDeclaration = function () {

	        if (historiqueService.IsConseiller()) {
	            console.log("Non Authoris� Car Conseiller ");
	            self.modal_instance.close();
	            historiqueService.unAuthPopinOpen();
	        } else {
	            console.log("Pas Conseiller ");

	            self.modal_instance.close();
	            historiqueService.SupprimerDeclaration(self.user.numero_client, self.selected_declaration_id, self.selected_annee, self.type_declaration, self.mode_saisie).then(function (response) {
	                console.log('suppression ok');
	                self.suppresion_ok = true;
	                self.modal_instance = $uibModal.open({
	                    template: __webpack_require__(14),
	                    scope: $scope,
	                    backdrop: 'static',
	                    keyboard: false
	                });
	            }, function (reason) {
	                console.log('suppression erreur');
	                self.suppresion_ok = false;
	                self.modal_instance = $uibModal.open({
	                    template: __webpack_require__(14),
	                    scope: $scope,
	                    backdrop: 'static',
	                    keyboard: false
	                });
	            }).finally(function () {});
	        }
	    };
	    this.submit_corrective = function (form) {
	        self.corrective_submitted = true;
	        if (form.$valid) {
	            self.etape_corrective = 2;
	            self.corrective_submitted = false;
	        }
	    };
	    this.submit_modification = function (form) {
	        self.corrective_submitted = true;
	        if (form.$valid) {
	            sessionStorage.setItem("annee_corrective", self.selected_annee);
	            sessionStorage.setItem("motif_corrective", self.selected_motif);
	            sessionStorage.setItem("commentaire_corrective", self.commentaire);
	            if (self.modifier_mode_type_declaration == 'true') {
	                historiqueService.goToChoixDeclaration(self.selected_annee);
	            } else {
	                if (self.mode_saisie == 'EXCEL') historiqueService.goToUploadExcel(self.selected_declaration_id, self.selected_annee);else {
	                    if (self.type_declaration == 'FORFAIT') {
	                        historiqueService.goToDelarationForfait(self.selected_annee);
	                    } else {
	                        if (self.type_declaration == 'UVC') {
	                            historiqueService.CreateDeclarationUvcWeb(self.user.numero_client, self.user.id_declarant, self.selected_annee, true, self.selected_motif, self.commentaire).then(function (response) {
	                                console.log('submit - ok : ' + JSON.stringify(response));
	                                historiqueService.goToDeclarationWeb(response.data, self.selected_annee, 'uvc', true, self.selected_motif, self.commentaire);
	                            }, function (reason) {
	                                console.error('submit - error : ' + JSON.stringify(reason));
	                            }).finally(function () {});
	                        } else //sect,detail
	                            historiqueService.goToDeclarationWeb(self.selected_declaration_id, self.selected_annee, self.type_declaration, 1, self.selected_motif, self.commentaire);
	                    }
	                }
	            }
	        }
	    };
	    this.annuleModal = function () {
	        self.modal_instance.close();
	    };

	    this.closeModal = function () {
	        //clear all variables 
	        self.type_declaration = null;
	        self.selected_annee = null;
	        self.modal_instance.close();
	        self.selected_motif = '';
	        self.corrective_submitted = false;
	        self.commentaire = '';
	        self.etape_corrective = 1;
	        self.modifier_mode_type_declaration = '';
	        self.etape_choix_mode_saisie = 1;
	        self.suppresion_ok = false;
	    };

	    this.closeModalSuppression = function () {

	        //clear all variables 
	        self.type_declaration = null;
	        self.selected_annee = null;
	        self.modal_instance.close();
	        self.selected_motif = '';
	        self.corrective_submitted = false;
	        self.commentaire = '';
	        self.etape_corrective = 1;
	        self.modifier_mode_type_declaration = '';
	        self.etape_choix_mode_saisie = 1;
	        self.mode_saisie = null;
	        self.suppresion_ok = false;
	        console.log('closeModalSuppression');
	        historiqueService.getHistoriqueDeclaration(self.user.numero_client, 'page').then(function (response) {
	            self.listdeclarations = response.data;
	        });
	        historiqueService.getMotifsCorrective().then(function (response) {
	            self.motifs_corrective = response.data;
	            console.log('getMotifsCorrective - ok');
	        }, function (reason) {
	            console.error('getMotifsCorrective - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };

	    this.GetLienTelechargement = function (TypeDecla, Annee) {
	        if (TypeDecla == 'UVC') historiqueService.GetLienTelechargementUVC(self.user.numero_client, Annee);else historiqueService.GetLienTelechargementSectDetail(TypeDecla, Annee);
	    };
	    this.GetLienFinalisationUvc = function (Statut, IdDeclaration, ModeSaisie, Etape) {
	        var url;
	        console.log('ModeSaisie,etape:' + ModeSaisie + '-' + Etape);
	        if (ModeSaisie == 'EXCEL') {

	            if (Statut == 'EN_COURS') {
	                if (typeof Etape != 'undefined' && Etape == 4) url = "/mon-espace/declaration/excel/uvc/#?id_dec=" + IdDeclaration + "&action=control_ecart";else url = "/mon-espace/declaration/excel/uvc/#?id_dec=" + IdDeclaration + "&action=ajout_destinataire";
	            } else if (Statut == 'INITIALISEE') url = "/mon-espace/declaration/excel/uvc/#?id_dec=" + IdDeclaration + "&action=completer";
	        } else //web
	            {
	                url = "/mon-espace/declaration/web/uvc/#?id_declaration=" + IdDeclaration;
	                //switch (Etape) {
	                //    case 1: url = "/mon-espace/declaration/web/uvc/#?id_declaration=" + IdDeclaration; break;
	                //    case 2: url = "/mon-espace/declaration/web/uvc/entreprises-marques/#?id_declaration=" + IdDeclaration + "&action=none";; break;
	                //    case 3: url = "/mon-espace/declaration/web/uvc/validation/#?id_declaration=" + IdDeclaration; break;
	                //    case 4: url = "/mon-espace/declaration/web/uvc/entreprises-marques/#?id_declaration=" + IdDeclaration + "&action=control_ecart"; break;
	                //}
	            }
	        $window.location.href = url;
	    };
	    this.GetLienFinalisationSectDetail = function (TypeDecla, ModeSaisie, Annee) {
	        //� v�rifier
	        historiqueService.postDeclarationWebSectDetail(Annee, TypeDecla, 0, '', '').then(function (response) {}, function (reason) {
	            alert('GetLienFinalisationSectDetail - error : ' + Annee + ',' + TypeDecla);
	        });
	    };
	    this.GetLienFinalisationForfait = function (IdDeclaration, Annee, Etape) {
	        historiqueService.GetLienFinalisationForfait(IdDeclaration, Annee, Etape);
	    };
	    self.annee_excel = '';
	    self.langue_excel = '';
	    self.eco_langue = '';
	    this.ModifierModeSaisie = function (id, annee, type, mode_saisie) {
	        self.selected_declaration_id = id;
	        self.selected_annee = annee;
	        self.type_declaration = type.toLowerCase();
	        self.mode_saisie = mode_saisie;

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(65),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };
	    this.sendDeclarationExcel = function () {
	        if (self.type_declaration == 'uvc') {
	            historiqueService.InitialiserDeclarationUVC(self.user.numero_client, self.user.id_declarant, self.selected_annee).then(function (response) {
	                console.log('submit - ok : ' + JSON.stringify(response));
	            }, function (reason) {
	                console.error('submit - error : ' + JSON.stringify(reason));
	            }).finally(function () {});

	            historiqueService.getFichierExcelUvc(self.annee_excel, self.langue_excel, self.user.numero_client);
	        } else {
	            console.log('excel ' + self.type_declaration);
	            self.eco_langue = 'FR';
	            if (self.langue_excel == 'anglais') self.eco_langue = 'EN';
	            historiqueService.getTemplateExcelSectDetail(self.selected_annee, self.type_declaration, self.annee_excel, self.eco_langue);
	        };
	    };
	    this.GoToDelarationEnLigne = function () {
	        if (self.selected_motif != null) self.flag_corrective = 1;else self.flag_corrective = 0;

	        if (self.type_declaration == 'forfait') {
	            historiqueService.goToDelarationForfait(self.selected_annee);
	        } else {
	            // 'sectorielle','detaillee','uvc'
	            if (self.type_declaration == 'uvc') {
	                historiqueService.CreateDeclarationUvcWeb(self.user.numero_client, self.user.id_declarant, self.selected_annee, self.flag_corrective == 1 ? true : false, self.selected_motif, self.commentaire).then(function (response) {
	                    console.log('submit - ok : ' + JSON.stringify(response));
	                    historiqueService.goToDeclarationWeb(response.data, self.selected_annee, self.type_declaration, self.flag_corrective, self.selected_motif, self.commentaire);
	                }, function (reason) {
	                    console.error('submit - error : ' + JSON.stringify(reason));
	                }).finally(function () {});
	            } else historiqueService.goToDeclarationWeb('', self.selected_annee, self.type_declaration, self.flag_corrective, self.selected_motif, self.commentaire);
	        }
	    };
	};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	function historiqueService(declarationResource, userService, unauthorizedPopInService) {
	    var self = this;
	    self.getHistoriqueDeclaration = declarationResource.getHistoriqueDeclaration;
	    self.getUrl_historique_declaration = declarationResource.getUrl_historique_declaration;
	    self.getMotifsCorrective = declarationResource.getMotifsCorrective;

	    self.goToChoixDeclaration = declarationResource.goToChoixDeclaration;
	    self.goToUploadExcel = declarationResource.goToUploadExcel;

	    self.postDeclarationWebSectDetail = declarationResource.postDeclarationWebSectDetail;
	    self.GetLienFinalisationForfait = declarationResource.GetLienFinalisationForfait;

	    self.GetLienTelechargementSectDetail = declarationResource.GetLienTelechargementSectDetail;
	    self.GetLienTelechargementUVC = declarationResource.GetLienTelechargementUVC;

	    self.getFichierExcelUvc = declarationResource.getFichierExcelUvc;
	    self.InitialiserDeclarationUVC = declarationResource.InitialiserDeclarationUVC;

	    self.goToDeclarationWeb = declarationResource.goToDeclarationWeb;
	    self.goToDelarationForfait = declarationResource.goToDelarationForfait;
	    self.getTemplateExcelSectDetail = declarationResource.getTemplateExcelSectDetail;

	    self.CreateDeclarationUvcWeb = declarationResource.CreateDeclarationUvcWeb;
	    self.SupprimerDeclaration = declarationResource.SupprimerDeclaration;
	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined,
	        id_SF: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    self.IsConseiller = function () {
	        return userService.isConseiller();
	    };

	    self.unAuthPopinOpen = function () {
	        unauthorizedPopInService.open();
	    };

	    return self;
	}
	module.exports = historiqueService;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(123);
	var service = __webpack_require__(124);

	var moduleName = 'declaration.historique_widget';
	angular.module(moduleName, []);

	angular.module(moduleName).service('historique_widgetService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('historique_widgetCtrl', ['historique_widgetService', ctrl]);
	angular.module(moduleName).component('historiqueDeclarationWidget', {
	    template: __webpack_require__(68),
	    controller: 'historique_widgetCtrl',
	    controllerAs: 'historique_widgetCtrl',
	    bindings: {}
	});
	module.exports = moduleName;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = function (historique_widgetService) {

	        var _self = this;

	        this.$onInit = function () {

	                var d = new Date();
	                _self.annee_en_cours = d.getFullYear();

	                console.log("annee en cours historique_widget", _self.annee_en_cours);

	                historique_widgetService.getAnneesContractualisation(historique_widgetService.getNumeroClient()).then(function (response) {
	                        var i = 0;
	                        _self.AnneesContractualisation = response.data[0];

	                        console.log("AnneesContractualisation historique_widget:", _self.AnneesContractualisation);

	                        console.log("condit 1", _self.annee_en_cours == _self.AnneesContractualisation);
	                }, function (reason) {}).finally(function () {});

	                _self.listdeclarations = [];
	                _self.url_historique = historique_widgetService.getUrl_historique_declaration;
	                historique_widgetService.getHistoriqueDeclaration(historique_widgetService.getNumeroClient(), 'widget').then(function (response) {

	                        _self.listdeclarations = response.data;
	                });
	        };
	};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	function historique_widgetService(declarationResource, userService) {
	    var self = this;
	    self.getHistoriqueDeclaration = declarationResource.getHistoriqueDeclaration;
	    self.getUrl_historique_declaration = declarationResource.getUrl_historique_declaration;

	    self.getAnneesContractualisation = declarationResource.getAnneesContractualisation;

	    this.getNumeroClient = function () {
	        return userService.getUserIdSAP(); //'GHJYT6565DFG';
	    };

	    /* self.user = {
	        numero_client: undefined,
	        id_declarant:undefined,
	        id_SF:undefined
	    }
	      this.getUserInfo = function () {
	        self.user.numero_client =userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    }*/

	    return self;
	}

	module.exports = historique_widgetService;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(126);
	var service = __webpack_require__(127);
	var moduleName = 'declaration.lancementrpc';
	angular.module(moduleName, []);

	var app = angular.module(moduleName, []);

	angular.module(moduleName).service('lancementrpcService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('lancementrpcCtrl', ['lancementrpcService', '$location', '$uibModal', '$scope', '$filter', ctrl]);
	angular.module(moduleName).component('lancementrpc', {
	    template: __webpack_require__(69),
	    controller: 'lancementrpcCtrl',
	    controllerAs: 'lancementrpcCtrl',
	    bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (lancementrpcService, $location, $uibModal, $scope, $userService) {
	    lancementrpcService, $location, $uibModal, $scope, $userService;
	    var self = this;
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
	        ville: undefined
	    };
	    self.details = {
	        id: undefined,
	        idClient: undefined,
	        annee: undefined,
	        montant: undefined,
	        raisonSociale: undefined,
	        siren: undefined,
	        idSignataire: undefined, //at my level
	        iddeletion: undefined,
	        mandataireKindToDelete: undefined
	        //var id = 123;
	        //var idClient = 'A1100015';//session storage
	        //var annee = '2016';
	        //var montant = '80000';
	        //var raisonSociale = 'PINSON';
	        //var siren = '999999999';
	        //var idSignataire = 'e394d56f-3e82-d35e-07ba-53b55326d06d'; //self.eltChosen.uniquecsoecid

	    };self.IsModification = false;
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
	            template: __webpack_require__(71),
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
	            template: __webpack_require__(72),
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
	            template: __webpack_require__(70),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    // #endregion

	    // #region POPIN 2    
	    this.ChoixExpert = function () {
	        console.log('test : ' + self.ec + ' modif ? :  ' + self.IsModification);
	        if (self.modal_instance) self.modal_instance.close();
	        // self.loading = true;   
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(73),
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
	            ville: undefined //reset 
	        };self.IsModification = false;
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
	            mandataireKindToDelete: undefined
	        };
	    };

	    self.textChanged = function () {
	        self.expertsList.length = 0; //clearing array
	        self.expertsListTemp.length = 0;
	        self.diplayMoreState = false; //the more button is disabled
	        self.validerState = false; //disable validate button
	        self.eltChosen = {
	            adresse: undefined,
	            civilite: undefined,
	            code_postal: undefined,
	            email: undefined,
	            nom: undefined,
	            prenom: undefined,
	            qualite: undefined,
	            uniquecsoecid: undefined //reset 
	        };self.maxToDisplayMultiplicator = 1;

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
	                                    uniquecsoecid: response.data.contacts[index].uniquecsoecid
	                                });
	                            }
	                        } else {
	                            self.expertsList.push({
	                                adresse: response.data.contacts.adresse,
	                                civilite: response.data.contacts.civilite,
	                                code_postal: response.data.contacts.code_postal,
	                                email: response.data.contacts.email,
	                                nom: response.data.contacts.nom,
	                                prenom: response.data.contacts.prenom,
	                                qualite: response.data.contacts.qualite,
	                                uniquecsoecid: response.data.contacts.uniquecsoecid
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
	                }).finally(function () {});
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
	                                    id: response.data.data[index].id
	                                });
	                            }
	                        } else {}
	                        //display the button "display more"
	                        if (response.data.fin == false) {
	                            self.diplayMoreState = true;
	                            console.log("self.displaymorestate  " + self.diplayMoreState);
	                        }
	                    }
	                    //show no contacts found
	                    else if (response.status = 400) {
	                            console.log("Bad Request");
	                        }
	                }, function (reason) {
	                    console.error(' error : ' + JSON.stringify(response.data));
	                }).finally(function () {});
	            }
	            // #endregion
	        } else {
	            //console.log("heerer");
	            //show to enter at least 2 values
	            self.result = '';
	            self.expertsList.length = 0; //clearing array
	            self.expertsListTemp.length = 0;
	            self.diplayMoreState = false; //the more button is disabled
	            self.validerState = false; //disable validate button
	            self.eltChosen = {
	                adresse: undefined,
	                civilite: undefined,
	                code_postal: undefined,
	                email: undefined,
	                nom: undefined,
	                prenom: undefined,
	                qualite: undefined,
	                uniquecsoecid: undefined //reset 
	            };self.maxToDisplayMultiplicator = 1;
	        }
	    };

	    self.displayMore = function () {
	        self.maxToDisplayMultiplicator = self.maxToDisplayMultiplicator + 1;
	        self.diplayMoreState = false; //the more button is disabled
	        self.validerState = false; //disable validate button
	        self.eltChosen = {
	            adresse: undefined,
	            civilite: undefined,
	            code_postal: undefined,
	            email: undefined,
	            nom: undefined,
	            prenom: undefined,
	            qualite: undefined,
	            uniquecsoecid: undefined,
	            ville: undefined //reset 
	        };self.expertsListTemp.length = 0;

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
	                                    uniquecsoecid: response.data.contacts[index].uniquecsoecid
	                                });
	                            }
	                            for (var i = defaultMax * (self.maxToDisplayMultiplicator - 1); i < self.expertsListTemp.length; i++) {
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
	                }).finally(function () {});
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
	                                    id: response.data.data[index].id
	                                });
	                            }
	                            for (var i = defaultMax * (self.maxToDisplayMultiplicator - 1); i < self.expertsListTemp.length; i++) {
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
	                }).finally(function () {});
	            }
	            // #endregion
	        } else {
	            //show to enter at least 2 values
	            self.result = '';
	        }
	    };

	    self.eltSelected = function (expertchoosen) {
	        //turn on validate button
	        self.validerState = true;

	        self.eltChosen.adresse = expertchoosen.adresse, self.eltChosen.civilite = expertchoosen.civilite, self.eltChosen.code_postal = expertchoosen.code_postal, self.eltChosen.email = expertchoosen.email, self.eltChosen.nom = expertchoosen.nom, self.eltChosen.prenom = expertchoosen.prenom, self.eltChosen.qualite = expertchoosen.qualite, self.eltChosen.uniquecsoecid = expertchoosen.uniquecsoecid, self.eltChosen.ville = expertchoosen.ville, console.log("Selected is " + self.eltChosen.nom + "  " + self.eltChosen.uniquecsoecid);
	    };

	    self.modification = function () {
	        self.mandataireKindToDelete = 'EC'; //NADIA should send it as parameter 

	        if (self.mandataireKindToDelete == 'EC') {
	            lancementrpcService.ExpertsDeleteProjects(self.details.iddeletion) //Nadia gives here the id.
	            .then(function (response) {
	                if (response.status = 200) {
	                    console.log("Deleted EC " + JSON.stringify(response.data));
	                    self.DeletionOK = true;
	                    console.log('deletion OK ' + self.DeletionOK);
	                    //save into BDD
	                    lancementrpcService.UpdateCancelMissions(self.details.iddeletion).then(function (response) {
	                        if (response.status = 200) {
	                            console.log("UPDATED IN DB EC " + JSON.stringify(response.data));
	                        }
	                    }, function (reason) {
	                        if (reason.status = 404) {
	                            console.log("Bad Request EC " + JSON.stringify(reason));
	                            self.erreurConflict();
	                        }
	                        if (reason.status = 401) {
	                            console.log("Non Authoris� EC " + JSON.stringify(reason));
	                            //self.erreurAuth();
	                        }
	                        if (response.status = 500) {
	                            console.log("Erreur EC " + JSON.stringify(reason));
	                            self.erreurAuth();
	                        }
	                    }).finally(function () {});
	                }
	            }, function (reason) {
	                if (reason.status = 404) {
	                    console.log("Bad Request EC " + JSON.stringify(reason));
	                    self.erreurConflict();
	                }
	                if (reason.status = 401) {
	                    console.log("Non Authoris� EC " + JSON.stringify(reason));
	                    self.erreurAuth();
	                }
	                if (response.status = 500) {
	                    console.log("Erreur EC " + JSON.stringify(reason));
	                    self.erreurConflict();
	                }
	            }).finally(function () {});
	        } else if (self.mandataireKindToDelete == 'CAC') {
	            lancementrpcService.CacDeleteProjects(self.details.iddeletion) //Nadia gives here the id.
	            .then(function (response) {
	                if (response.status = 200) {
	                    console.log("Deleted CAC " + JSON.stringify(response.data));
	                    self.DeletionOK = true;
	                    //save into BDD
	                    lancementrpcService.UpdateCancelMissions(self.details.iddeletion).then(function (response) {
	                        if (response.status = 200) {
	                            console.log("UPDATED IN DB EC " + JSON.stringify(response.data));
	                        }
	                    }, function (reason) {
	                        if (reason.status = 404) {
	                            console.log("Bad Request EC " + JSON.stringify(reason));
	                            self.erreurConflict();
	                        }
	                        if (reason.status = 401) {
	                            console.log("Non Authoris� EC " + JSON.stringify(reason));
	                            self.erreurAuth();
	                        }
	                        if (response.status = 500) {
	                            console.log("Erreur EC " + JSON.stringify(reason));
	                            self.erreurConflict();
	                        }
	                    }).finally(function () {});
	                }
	            }, function (reason) {
	                if (reason.status = 404) {
	                    console.log("Bad Request EC " + JSON.stringify(reason));
	                    self.erreurConflict();
	                }
	                if (reason.status = 401) {
	                    console.log("Non Authoris� EC " + JSON.stringify(reason));
	                    self.erreurAuth();
	                }
	                if (response.status = 500) {
	                    console.log("Erreur EC " + JSON.stringify(reason));
	                    self.erreurConflict();
	                }
	            }).finally(function () {});
	        }
	    };

	    self.createRPCOnlyEC = function () {
	        console.log("creation EC");
	        lancementrpcService.PostExpertsCreateProject(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale, self.details.siren, self.details.idSignataire).then(function (response) {
	            if (response.status = 201) {
	                console.log("Created  " + response.data);

	                // #region SAVING INTO DB
	                /////async call to save in database : createmission or savemission 
	                lancementrpcService.SaveNewMissions(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.idSignataire, self.eltChosen.nom, self.eltChosen.email, 'EC', 1).then(function (response) {
	                    if ((response.status = 201) || (response.status = 200)) {
	                        console.log("Created in DB  " + response.data);
	                    }
	                }, function (reason) {
	                    console.log("Erreur while saving "); //+ JSON.stringify(reason));
	                }).finally(function () {});;
	                // #endregion

	                //popin thank you
	                self.successlaunch();
	            }
	        }, function (reason) {
	            if (reason.status = 409) {
	                console.log("Conflict while creating mission EC "); // + JSON.stringify(reason));
	                self.erreurConflict();
	            } else if (reason.status = 400) {
	                console.log("BAd Request while creating mission EC "); // + JSON.stringify(reason));
	            } else if (reason.status = 401) {
	                console.log("Non Authoris� while creating mission EC "); //+ JSON.stringify(reason));
	                self.erreurAuth();
	            } else if (reason.status = 500) {
	                console.log("Erreur while creating mission EC "); //+ JSON.stringify(reason));
	            }
	        }).finally(function () {});
	    };

	    self.createRPCOnlyCAC = function () {
	        console.log("creation CAC");
	        lancementrpcService.PostCacCreateProject(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.raisonSociale, self.details.siren, self.details.idSignataire).then(function (response) {
	            if (response.status = 201) {
	                console.log("Created CAC " + response.data);

	                // #region SAVING INTO DB
	                /////async call to save in database : createmission or savemission 
	                lancementrpcService.SaveNewMissions(self.details.id, self.details.idClient, self.details.annee, self.details.montant, self.details.idSignataire, self.eltChosen.nom, self.eltChosen.email, 'CAC', 1).then(function (response) {
	                    if ((response.status = 201) || (response.status = 200)) {
	                        console.log("Created in DB  " + response.data);
	                    }
	                }, function (reason) {
	                    console.log("Erreur while saving "); //+ JSON.stringify(reason));
	                }).finally(function () {});;
	                // #endregion

	                //popin thank you
	                self.successlaunch();
	            }
	        }, function (reason) {
	            if (reason.status = 409) {
	                console.log("Conflict "); // + JSON.stringify(reason));
	                self.erreurConflict();
	            }
	            if (response.status = 400) {
	                console.log("BAd Request"); // + JSON.stringify(reason));
	            }
	            if (response.status = 401) {
	                console.log("Non Authoris�"); //+ JSON.stringify(reason));
	                this.erreurAuth();
	            }
	            if (response.status = 500) {
	                console.log("Erreur"); //+ JSON.stringify(reason));
	            }
	        }).finally(function () {});
	    };

	    self.createRPC = function () {

	        // #region EXPERTSCOMPTABLE
	        if (self.ec == 'EC') {
	            self.details.id = 'ATEST12'; //self.generateId();
	            self.details.annee = '2016'; //mannee; 
	            self.details.montant = '79000'; //mmontant;
	            self.details.iddeletion = 'ATEST11';

	            self.details.idClient = lancementrpcService.getSAPCustomed();
	            self.details.raisonSociale = 'CITEO'; //lancementrpcService.getUserInfo().clientName 
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
	                console.log("creation EC");
	                self.createRPCOnlyEC();
	            }
	            // #endregion
	        }
	        // #endregion 

	        // #region CAC
	        if (self.ec == 'CAC') {
	            self.details.id = 'ATEST'; //self.generateId();
	            self.details.annee = '2016'; //mannee;
	            self.details.montant = '79000'; //mmontant;
	            self.iddeletion = 'TESTINGGG';

	            self.details.idClient = lancementrpcService.getSAPCustomed();
	            self.details.raisonSociale = 'CITEO'; //lancementrpcService.getUserInfo().clientName 
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
	    };
	    // #endregion

	    // #region POPIN 3
	    this.lancement = function () {
	        if (self.modal_instance) self.modal_instance.close();
	        self.loading = true;

	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(74),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };

	    // #endregion


	    // #region CHANGE MISSION
	    this.changeMission = function () {
	        if (self.modal_instance) self.modal_instance.close();
	        self.loading = true;
	        self.IsModification = true;
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(75),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };
	    // #endregion


	    // #region DETAILS TO SEND WHILE CREATING OR MODIFYING

	    self.fillDetails = function (mid, mannee, mmontant, msiren, middeletion) {
	        self.details.id = 'TESTINGG'; //mid;
	        self.details.annee = '2016'; //mannee;
	        self.details.montant = '79000'; //mmontant;
	        self.details.iddeletion = 'TESTINGG';
	        self.details.mandataireKindToDelete = 'EC';
	    };
	    // #endregion
	};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	function lancementrpcService(declarationResource, userService) {
	    var self = this;

	    // #region EC
	    self.GetExpertsByName = function (name, max) {
	        return declarationResource.GetExpertByName(name, max);
	    };

	    self.PostExpertsCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
	        return declarationResource.ExpertsCreateProject(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
	    };

	    self.ExpertsDeleteProjects = function (id) {
	        console.log("deleting projects id " + id);
	        return declarationResource.ExpertsDeleteProject(id);
	    };

	    self.ExpertsGetProjects = function (id) {
	        return declarationResource.ExpertsGetProject(id);
	    };
	    // #endregion


	    // #region CAC
	    self.GetCacByNames = function (name, max) {
	        return declarationResource.GetCacByName(name, max);
	    };

	    self.PostCacCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
	        return declarationResource.CacCreateProject(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
	    };

	    self.CacDeleteProjects = function (id) {
	        return declarationResource.CacDeleteProject(id);
	    };
	    // #endregion

	    self.getUserInfo = function () {
	        self.user = userService.getUser();
	        return self.user;
	    };

	    self.getSAPCustomed = function () {

	        var SapCustomed = '521846'; //self.getUserInfo().idClientSAP;
	        self.test = 'eco';
	        if (self.test.valueOf() == 'eco'.valueOf()) {
	            //(self.getUserInfo().getOrgaCommerciale().valueOf() == 'eco'.valueOf()) {
	            if (SapCustomed.toString().length < 10) {
	                var l = 10 - SapCustomed.length;
	                //complete with 0 in front 
	                for (var i = 0; i < l; i++) {
	                    SapCustomed = '0' + SapCustomed;
	                }
	            }
	        }
	        return SapCustomed;
	    };

	    self.generateId = function () {
	        var today = new Date();
	        var d = today.getDate();
	        var mmotemp = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	        var mmo = mmotemp[today.getMonth()];
	        var yyyy = today.getFullYear();
	        var h = today.getHours() > 12 ? today.getHours() - 12 : today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
	        var m = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
	        var s = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();

	        if (d < 10) {
	            d = '0' + d;
	        }
	        today = yyyy + mmo + d + h + m + s;
	        return today;
	    };

	    self.getSiren = function (idSAP) {
	        return declarationResource.getSiren(idSAP);
	    };

	    self.SaveNewMissions = function (idMission, clientNumber, annee, contribTotal, signataire, nom, email, typeexpert, statut) {
	        return declarationResource.SaveNewMission(idMission, clientNumber, annee, contribTotal, signataire, nom, email, typeexpert, statut);
	    };

	    self.UpdateCancelMissions = function (idMission) {
	        return declarationResource.UpdateCancelMission(idMission);
	    };

	    return self;
	}
	module.exports = lancementrpcService;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(129);
	var service = __webpack_require__(130);
	var moduleName = 'declaration.recommandation';
	angular.module(moduleName, []);

	angular.module(moduleName).controller('recommandationCtrl', ['recommandationService', ctrl]);
	angular.module(moduleName).factory('recommandationService', ['declarationResource', service]);
	angular.module(moduleName).component('recommandation', {
	  template: __webpack_require__(76),
	  controller: 'recommandationCtrl',
	  controllerAs: 'recommandationCtrl',
	  bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = function (recommandationService) {
	  var self = this;
	  self.typesDeclarations = [];
	  recommandationService.recommandations().then(function (response) {
	    for (var index in response.data) {
	      if (response.data[index].body && response.data[index].field_code_type_decla) {
	        //A retirer !
	        response.data[index].body[0].value = response.data[index].body[0].value.replace('src="', 'src="http://eead-dev-front.northeurope.cloudapp.azure.com/');
	        self.typesDeclarations.push({
	          html: response.data[index].body[0].value,
	          code: response.data[index].field_code_type_decla[0].value
	        });
	      }
	    }
	  });
	};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	
	function RecommandationService(declarationResource) {
	    var self = this;
	    self.recommandations = declarationResource.getListTypesDeclaration;
	    return self;
	}

	module.exports = RecommandationService;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(132);
	var service = __webpack_require__(133);
	var moduleName = 'declaration.simulateur';
	angular.module(moduleName, []);

	angular.module(moduleName).service('simulateurService', ['declarationResource', service]);
	angular.module(moduleName).controller('simulateurCtrl', ['simulateurService', 'userService', ctrl]);
	angular.module(moduleName).component('simulateur', {
	  template: __webpack_require__(81),
	  controller: 'simulateurCtrl',
	  controllerAs: 'simulateurCtrl',
	  bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = function (simulateurService, userService) {
	    var self = this;

	    self.selected_type;
	    self.typesSimulateurs = [];
	    self.typesSimulateursTextes = [];
	    self.type;

	    self.files_urls = [];

	    this.$onInit = function () {

	        self.orga = userService.getOrgaCommerciale();
	    };

	    simulateurService.getContenuSimulateurExcel().then(function (response) {

	        for (var index in response.data) {
	            if (response.data[index].body && response.data[index].title) {
	                self.typesSimulateurs.push({
	                    titre: response.data[index].title[0].value,
	                    html: response.data[index].body[0].value,
	                    type: response.data[index].field_type_simulateur[0].value
	                });
	            }
	        }
	    });
	    simulateurService.getExcelLinks().then(function (response) {

	        for (var index in response.data) {
	            if (response.data[index].field_name && response.data[index].field_upload_excel) {
	                self.files_urls.push({
	                    type: response.data[index].field_name[0].value,
	                    url: response.data[index].field_upload_excel[0].url
	                });
	            }
	        }
	        console.log('elf.files_urls', self.files_urls);
	    });

	    this.getTypeDeclarationParId = function (type) {
	        for (i = 0; i < self.typesSimulateurs.length; i++) {
	            if (self.typesSimulateurs[i].type == type) return self.typesSimulateurs[i];
	        }
	    };
	    this.getExcelLinkByType = function (type) {
	        for (i = 0; i < self.files_urls.length; i++) {
	            if (self.files_urls[i].type == type) return self.files_urls[i].url;
	        }
	        //simulateurService.getExcelLinkByType(type);
	    };
	};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	function simulateurService(declarationResource) {
	    var self = this;
	    self.getContenuSimulateurExcel = declarationResource.getContenuSimulateurExcel;
	    self.getExcelLinks = declarationResource.getExcelLinks;

	    return self;
	}
	module.exports = simulateurService;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(135);
	var service = __webpack_require__(136);

	var moduleName = 'declaration.uvc.excel';
	angular.module(moduleName, ['ui.bootstrap']);

	angular.module(moduleName).service('excelService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('excelCtrl', ['excelService', '$uibModal', '$scope', '$location', ctrl]);
	angular.module(moduleName).component('uvcExcel', {
	    template: __webpack_require__(84),
	    controller: 'excelCtrl',
	    controllerAs: 'excelCtrl',
	    bindings: {}
	});

	angular.module(moduleName).directive('fileModel', ['$parse', function ($parse) {
	    return {
	        restrict: 'A',
	        link: function (scope, element, attrs) {
	            var model = $parse(attrs.fileModel);
	            var modelSetter = model.assign;

	            element.bind('change', function () {
	                scope.$apply(function () {
	                    modelSetter(scope, element[0].files[0]);
	                });
	            });
	        }
	    };
	}]);

	angular.module(moduleName).directive('validFile', function () {
	    return {
	        require: 'ngModel',
	        link: function (scope, el, attrs, ctrl) {
	            ctrl.$setValidity('validFile', el.val() != '');
	            //change event is fired when file is selected
	            el.bind('change', function () {
	                ctrl.$setValidity('validFile', el.val() != '');
	                scope.$apply(function () {
	                    ctrl.$setViewValue(el.val());
	                    ctrl.$render();
	                });
	            });
	        }
	    };
	});

	module.exports = moduleName;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = function (excelService, $uibModal, $scope, $location) {

	    var _self = this;
	    _self.RecapDeclaration;
	    _self.declarationFile;
	    _self.errors;
	    _self.loading;
	    _self.modal_instance;
	    _self.status_code;
	    _self.mails = [];

	    _self.step = 1;
	    _self.mailinput;
	    _self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

	    _self.type_declaration;
	    _self.annees_declaration = {};
	    _self.annees_declaree = {};
	    _self.selected_annee;
	    _self.submitted;
	    _self.file_name;
	    _self.user = excelService.getUserInfo();
	    _self.id_dec;
	    _self.action;

	    /*corrective*/
	    _self.selected_motif = '';
	    _self.motifs_corrective = {};
	    _self.corrective_submitted;
	    _self.commentaire = '';
	    /*affichage choix des types de d�clarations*/
	    //_self.ancienne_detaillee;

	    _self.id_dec = $location.search().id_dec;
	    _self.action = $location.search().action;

	    console.log('id_dec ' + _self.id_dec);
	    console.log('action ' + _self.action);

	    _self.controleEcart = false;

	    this.loadData = function () {

	        excelService.getAnneesDeclaration(_self.user.numero_client).then(function (response) {
	            _self.annees_declaration = response.data;
	            //!pour selectionner par d�faut l'ann�e n-1
	            _self.selected_annee = _self.annees_declaration[0].toString();
	            console.log('getAnneesDeclaration - ok : ' + JSON.stringify(response));
	        }, function (reason) {
	            console.error('getAnneesDeclaration - error : ' + JSON.stringify(reason));
	        }).finally(function () {});

	        excelService.getAnneesDeclaree(_self.user.numero_client).then(function (response) {
	            _self.annees_declaree = response.data;
	            console.log('getAnneesDeclaree - ok : ' + JSON.stringify(response));
	        }, function (reason) {
	            console.error('getAnneesDeclaree - error : ' + JSON.stringify(reason));
	        }).finally(function () {});

	        excelService.getMotifsCorrective().then(function (response) {
	            _self.motifs_corrective = response.data;
	            console.log('getMotifsCorrective - ok : ' + JSON.stringify(response));
	        }, function (reason) {
	            console.error('getMotifsCorrective - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };

	    if (typeof _self.id_dec != 'undefined' && typeof _self.action != 'undefined') {
	        if (_self.action == 'ajout_destinataire') {
	            excelService.findMailsAR(_self.id_dec).then(function (response) {
	                console.log('id_dec findMailsAR:' + _self.id_dec);
	                console.log('action findMailsAR: ' + _self.action);

	                _self.mails = response.data;
	                console.log('findMailsAR : ' + JSON.stringify(response));
	            }, function (reason) {
	                console.error('findMailsAR - error : ' + JSON.stringify(reason));
	                _self.status_code = reason.status;
	                _self.errors = reason.data;
	            }).finally(function () {});

	            excelService.getRecap(_self.id_dec).then(function (response) {

	                console.log('id_dec getRecap :' + _self.id_dec);
	                console.log('action getRecap : ' + _self.action);

	                _self.RecapDeclaration = response.data;
	                console.log('getRecap : ' + JSON.stringify(response));
	            }, function (reason) {
	                console.error('getRecap - error : ' + JSON.stringify(reason));
	                _self.status_code = reason.status;
	                _self.errors = reason.data;
	            }).finally(function () {});

	            _self.step = 2;
	        } else if (_self.action == 'control_ecart') {
	            excelService.getRecap(_self.id_dec).then(function (response) {

	                console.log('id_dec getRecap :' + _self.id_dec);
	                console.log('action getRecap : ' + _self.action);

	                _self.RecapDeclaration = response.data;
	                console.log('getRecap : ' + JSON.stringify(response));
	            }, function (reason) {
	                console.error('getRecap - error : ' + JSON.stringify(reason));
	                _self.status_code = reason.status;
	                _self.errors = reason.data;
	            }).finally(function () {});

	            _self.step = 'controle_ecart';
	            _self.controleEcart = true;
	        } else {
	            _self.loadData();
	        }
	    } else {
	        _self.id_dec = '';
	        _self.loadData();
	    }

	    this.submit_corrective = function (form) {
	        _self.corrective_submitted = true;
	        if (form.$valid) {
	            if (_self.type_declaration == 'uvc') {
	                this.ExcelUpload(true);
	            } else {
	                //post ancienne appli
	                this.SendExcelSectDetail(true);
	            }
	        }
	    };
	    _self.custom_error = '';
	    this.submit = function (form) {
	        _self.submitted = true;
	        if (form.$valid) {
	            if (_self.selected_annee < 2016 && _self.type_declaration == 'uvc') {
	                _self.custom_error = 'ERREUR_UVC';
	                _self.modal_instance = $uibModal.open({
	                    template: __webpack_require__(83),
	                    scope: $scope,
	                    backdrop: 'static',
	                    keyboard: false
	                });
	                return false;
	            }
	            //v�rifier si c'est une corrective
	            _self.selected_motif = sessionStorage.getItem("motif_corrective");
	            _self.commentaire = sessionStorage.getItem("commentaire_corrective");
	            if (_self.selected_motif != null) _self.flag_corrective = true;else _self.flag_corrective = false;

	            if (inArray(_self.selected_annee, _self.annees_declaree) != -1 && _self.flag_corrective == false) {
	                _self.modal_instance = $uibModal.open({
	                    template: __webpack_require__(82),
	                    scope: $scope,
	                    backdrop: 'static',
	                    keyboard: false
	                });
	                return false;
	            }
	            if (_self.type_declaration == 'uvc') {
	                this.ExcelUpload(_self.flag_corrective);
	            } else {
	                //post ancienne appli 
	                this.SendExcelSectDetail(_self.flag_corrective);
	            }
	        }
	    };

	    this.ExcelUpload = function (flag_corrective) {
	        if (_self.modal_instance) {
	            _self.modal_instance.close();
	        }
	        _self.mails = [];
	        _self.loading = true;
	        _self.modal_instance = $uibModal.open({
	            template: __webpack_require__(85),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	        excelService.sendDeclarationUvcXml(_self.declarationFile, _self.user.numero_client, _self.user.id_declarant, _self.selected_annee, flag_corrective, _self.selected_motif, _self.commentaire, _self.id_dec).then(function (response) {
	            console.log('submit - ok : ' + JSON.stringify(response));
	            _self.RecapDeclaration = response.data;
	            _self.loading = false;
	            _self.status_code = 200;
	            $('#fileMobile').val('');
	            _self.declarationFile = null;
	        }, function (reason) {
	            _self.status_code = reason.status;
	            _self.loading = false;
	            console.error('submit - error : ' + JSON.stringify(reason));
	            _self.errors = reason.data;
	            $('#file_upload').val('');
	            _self.declarationFile = null;
	            if (reason.status == 403) {
	                _self.modal_instance.close();
	            }
	        }).finally(function () {});
	    };

	    this.closeModal = function () {
	        //clear all variables
	        _self.declarationFile = null;
	        $('#file_upload').val('');
	        _self.file_name = null;
	        _self.submitted = false;
	        _self.type_declaration = null;
	        _self.selected_annee = null;
	        _self.modal_instance.close();

	        _self.selected_motif = '';
	        _self.corrective_submitted = false;
	        _self.commentaire = '';
	    };

	    this.valideModal = function () {
	        //v�rifier le controle ecart
	        excelService.getControleEcart(_self.RecapDeclaration.IdDeclaration).then(function (response) {
	            console.log('retour getControleEcart', response);
	            if (response.data == "OK") {
	                _self.step = "controle_ecart";
	                _self.controleEcart = true;
	            } else {
	                _self.step = 2;
	            }
	        }, function (reason) {
	            _self.step = 2;
	        }).finally(function () {});
	        //_self.step = 2;
	        _self.modal_instance.close();
	    };

	    this.addMails = function () {
	        if (inArray(_self.mailinput, _self.mails) == -1) {
	            _self.mails.push(_self.mailinput);
	        }
	        _self.mailinput = '';
	    };
	    this.removeMail = function (mail) {
	        for (var i = this.mails.length - 1; i >= 0; i--) {
	            if (this.mails[i] === mail) {
	                this.mails.splice(i, 1);
	            }
	        }
	    };
	    function inArray(elem, array) {
	        var len = array.length;
	        for (var i = 0; i < len; i++) {
	            if (array[i] == elem) {
	                return i;
	            }
	        }
	        return -1;
	    }

	    this.valideMails = function () {
	        if (typeof _self.RecapDeclaration != 'undefined') {
	            if (_self.modal_instance) _self.modal_instance.close();
	            _self.loading = true;

	            _self.modal_instance = $uibModal.open({
	                template: __webpack_require__(86),
	                scope: $scope,
	                backdrop: 'static',
	                keyboard: false
	            });

	            excelService.sendDeclarationAR(_self.mails.join(), _self.RecapDeclaration.IdDeclaration, _self.user.id_SF).then(function (response) {

	                console.log('SF: ' + _self.user.id_SF);
	                console.debug('recap declaration 1 ' + _self.RecapDeclaration.IdDeclaration);
	                console.debug('recap declaration join ' + _self.RecapDeclaration.IdDeclaration);
	                console.debug('Decote ' + _self.RecapDeclaration.Decote);
	                console.log('submit - ok : ' + JSON.stringify(response));
	                _self.loading = false;
	                _self.status_code = 200;
	                _self.declarationMails = null;
	            }, function (reason) {
	                _self.status_code = reason.status;
	                _self.loading = false;
	                console.error('submit - error : ' + JSON.stringify(reason));
	                _self.errors = reason.data;

	                _self.mails = null;
	            }).finally(function () {/*_self.mails = null;*/});

	            excelService.saveMailsAR(_self.mails.join(), _self.RecapDeclaration.IdDeclaration).then(function (response) {

	                _self.status_code = 200;
	                // _self.step = 1;

	            }, function (reason) {
	                _self.status_code = reason.status;
	                _self.errors = reason.data;
	                _self.mails = null;
	                _self.loading = false;
	            }).finally(function () {/* _self.mails = null;*/});
	        }
	    };

	    this.saveMails = function () {

	        excelService.saveMailsAR(_self.mails.join(), _self.RecapDeclaration.IdDeclaration).then(function (response) {

	            _self.status_code = 200;
	            // _self.step = 1;
	            if (_self.controleEcart) _self.step = "controle_ecart";else excelService.goToHistoriqueDeclaration();
	        }, function (reason) {
	            _self.status_code = reason.status;
	            _self.errors = reason.data;
	            _self.mails = null;
	            _self.loading = false;
	        }).finally(function () {/*_self.mails = null;*/});
	    };

	    this.SendExcelSectDetail = function (corrective) {
	        var action = '';
	        if (_self.type_declaration == 'sectorielle') action = '/OldApp/Declaration/EcdUpload?type=Secto&annee=' + _self.selected_annee;else action = '/OldApp/Declaration/EcdUpload?type=Detaille&annee=' + _self.selected_annee;
	        var form2 = document.getElementById("excel_upload_form_id");
	        form2.action = action;
	        form2.method = "post";
	        form2.enctype = "multipart/form-data";

	        var flag_correctiveInput = document.createElement("input");
	        flag_correctiveInput.setAttribute("name", 'flag_corrective');
	        flag_correctiveInput.setAttribute("value", corrective);
	        flag_correctiveInput.setAttribute("type", 'hidden');
	        form2.appendChild(flag_correctiveInput);

	        var motifInput = document.createElement("input");
	        motifInput.setAttribute("name", 'motif');
	        motifInput.setAttribute("value", _self.selected_motif);
	        motifInput.setAttribute("type", 'hidden');
	        form2.appendChild(motifInput);

	        var commentaireInput = document.createElement("input");
	        commentaireInput.setAttribute("name", 'commentaire');
	        commentaireInput.setAttribute("value", _self.commentaire);
	        commentaireInput.setAttribute("type", 'hidden');
	        form2.appendChild(commentaireInput);

	        form2.submit();
	    };

	    this.goBackFromControlEcart = function () {
	        var oldURL = document.referrer;

	        if (oldURL.indexOf('historique') !== -1) {
	            excelService.goBack();
	        } else excelService.goToUploadExcel2(_self.RecapDeclaration.IdDeclaration, _self.RecapDeclaration.Annee);
	    };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	function ExcelService(declarationResource, userService) {
	    var self = this;

	    self.sendDeclarationUvcXml = declarationResource.sendDeclarationUvcXml;
	    self.sendDeclarationAR = declarationResource.sendDeclarationAR;
	    self.saveMailsAR = declarationResource.saveMailsAR;
	    self.findMailsAR = declarationResource.findMailsAR;
	    self.getRecap = declarationResource.getRecap;
	    self.getAnneesDeclaration = declarationResource.getAnneesDeclaration;
	    self.getAnneesDeclaree = declarationResource.getAnneesDeclaree;
	    self.getMotifsCorrective = declarationResource.getMotifsCorrective;
	    self.sendExcelSectDetail = declarationResource.sendExcelSectDetail;
	    self.goToHistoriqueDeclaration = declarationResource.goToHistoriqueDeclaration;

	    self.getControleEcart = declarationResource.getControleEcart;
	    self.goToUploadExcel = declarationResource.goToUploadExcel;
	    self.goToUploadExcel2 = declarationResource.goToUploadExcel2;
	    self.goBack = declarationResource.goBack;
	    this.user = {
	        numero_client: undefined,
	        id_declarant: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    return self;
	}

	module.exports = ExcelService;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var web = __webpack_require__(138);
	var excel = __webpack_require__(134);

	var moduleName = 'declaration.uvc';
	angular.module(moduleName, [web, excel]);

	module.exports = moduleName;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	//var listeEmballage = require('./listeEmballage/listeEmballage');
	//var remplirProduit = require('./remplirProduit/remplirProduit'); 

	var ctrl = __webpack_require__(139);
	var service = __webpack_require__(140);

	var moduleName = 'declaration.uvc.web';
	var app = angular.module(moduleName, ['ui.bootstrap']);

	//app.config(['$locationProvider', function ($locationProvider) {
	//    $locationProvider.html5Mode(
	//        {
	//            enabled:true,
	//            requireBase: false
	//        });
	//}]);


	angular.module(moduleName).service('webService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('webCtrl', ['webService', '$uibModal', '$filter', '$location', '$scope', ctrl]);
	angular.module(moduleName).component('uvcWeb', {
	    template: __webpack_require__(90),
	    controller: 'webCtrl',
	    controllerAs: 'ctrl'
	});
	angular.module(moduleName).filter('decimalSeparator', function () {
	    return function (value) {
	        try {
	            var result = value.toLocaleString('fr-FR');
	            if (result.split(',').length == 1) {
	                result = result + ',00';
	            } else {
	                if (result.split(',').length == 2 && result.split(',')[1].length == 1) result = result + '0';
	            }
	            return result;
	        } catch (e) {
	            return value; /*.toLocaleString('fr-FR');*/
	        }
	    };
	});
	angular.module(moduleName).filter('thousandSeparator', function () {
	    return function (value) {
	        try {
	            var result = value.toLocaleString('fr-FR');
	            return result;
	        } catch (e) {
	            return value;
	        }
	    };
	});
	module.exports = moduleName;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (webService, $uibModal, $filter, $location, $scope) {

	    var self = this;
	    self.error = false;

	    self.search_field = '';
	    self.sort_field = 'date'; //date
	    self.page_index = 0;

	    self.decote_touched = false;
	    self.erreurs = false;
	    self.selectedUVC = undefined;
	    self.uvc = undefined;
	    self.modal_instance;
	    self.submitted = false;
	    self.contribution_totale = 0;
	    self.orgaCommerciale = webService.orgaCommerciale;

	    this.$onInit = function () {
	        self.id_declaration = $location.search().id_declaration;
	        self.valide = false;
	        if (typeof self.id_declaration == 'undefined') self.id_declaration = '';else {
	            //webService.checkEtape(self.id_declaration, 1).then(function (response) { 
	            //    self.annee = response.data.Annee;
	            //    self.contribution_totale = response.data.ContribTotal;
	            //        self.hideForm(); 
	            //        self.getListUVC_firstLoad(); 
	            //}, function (reason) {
	            //    self.error = true;
	            //    console.log('self.error = true');
	            //}).finally(function () { });

	            webService.getRecap(self.id_declaration).then(function (response) {
	                self.annee = response.data.Annee;
	                self.contribution_totale = response.data.ContributionTotale;
	                self.hideForm();
	                self.getListUVC_firstLoad();
	            }, function (reason) {
	                self.error = true;
	                console.log('self.error = true');
	            }).finally(function () {});
	        }
	    };

	    self.getListUVC_firstLoad = function () {
	        webService.getListUVC_firstLoad(self.id_declaration).then(function (response) {
	            console.log('getListUVC_firstLoad - ok', response.data);
	            self.listUvc = response.data.lignes_uvc;
	            self.valide = response.data.valide;
	            self.uvc_en_cours = response.data.uvc_en_cours;
	            self.pages = [];
	            for (var i = 0; i < response.data.pages; i++) {
	                self.pages.push(i);
	            }
	            if (!self.valide) {
	                //uvc en cours
	                self.page_index = response.data.page - 1;
	                console.log('response.data.uvc_en_cours', response.data.uvc_en_cours);
	                for (var i = 0, iLen = response.data.lignes_uvc.length; i < iLen; i++) {

	                    if (response.data.lignes_uvc[i].LigneDeclarationId == response.data.id_uvc_en_cours) self.selectedUVC = response.data.lignes_uvc[i];
	                }
	                console.log('self.selectedUVC', self.selectedUVC);
	                self.uvc = angular.copy(self.selectedUVC);

	                //self.selectUvc(uvc);
	                self.vue = 'ecriture';
	            } else {
	                if (response.data.lignes_uvc.length > 0) {
	                    self.selectedUVC = response.data.lignes_uvc[0];
	                    self.uvc = angular.copy(self.selectedUVC);
	                    self.vue = 'lecture';
	                }
	            }
	        }, function (reason) {
	            console.error('getListUVC_firstLoad - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };
	    self.getlistUvc = function (selected_uvc, select_last) {
	        var el = document.querySelector('div.uvc_form');
	        el.scrollTop = 0;
	        webService.getlistUvcService(self.id_declaration, self.page_index, self.sort_field, self.search_field, select_last).then(function (response) {
	            console.log('getlistUvc - ok', response.data);
	            self.listUvc = response.data.lignes_uvc;
	            self.valide = response.data.valide;
	            self.uvc_en_cours = response.data.uvc_en_cours;
	            self.pages = [];
	            for (var i = 0; i < response.data.pages; i++) {
	                self.pages.push(i);
	            }

	            if (select_last) {
	                self.page_index = self.pages.length - 1;
	                self.selectedUVC = response.data.lignes_uvc[response.data.lignes_uvc.length - 1];
	                self.uvc = angular.copy(self.selectedUVC);
	            } else {
	                if (selected_uvc != null) {
	                    self.selectedUVC = selected_uvc;
	                    self.uvc = angular.copy(selected_uvc);
	                }
	            }
	            console.log('self.selectedUVC', self.selectedUVC);
	            console.log('self.uvc', self.uvc);
	        }, function (reason) {
	            console.error('getlistUvcService - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };
	    self.editUvc = function (uvc) {
	        webService.InvalidateUvcWeb(uvc.LigneDeclarationId).then(function (response) {

	            self.selectUvc(uvc);
	            self.vue = 'ecriture';
	            self.selectedUVC.Valider = false;
	            self.valide = false;
	            self.uvc_en_cours = true;
	        }, function (reason) {
	            console.error('selectUvc - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };
	    self.selectUvc = function (uvc) {

	        self.vue = 'lecture';
	        var el = document.querySelector('div.uvc_form');
	        el.scrollTop = 0;
	        self.submitted = false;
	        self.selectedUVC = uvc;
	        self.selectedUVC.valider = false;
	        self.uvc = angular.copy(uvc);
	    };
	    self.AddUvc = function () {
	        if (self.uvc_en_cours) {
	            this.Alert(); //("Vous avez une uvc en cours, veuillez la valider!");
	        } else {
	            self.vue = 'ecriture';
	            webService.AddUvcWeb(self.id_declaration).then(function (response) {
	                self.sort_field = 'date';
	                self.search_field = ''; //tri par defaut,date_creation
	                self.getlistUvc(response.data, true); //select last page
	                //self.valide = false;
	                console.log('AddUvc - ok');
	            }, function (reason) {
	                console.error('AddUvc - error : ' + JSON.stringify(reason));
	            }).finally(function () {});
	        }
	    };

	    self.copyUvc = function (id) {
	        if (!self.valide) {
	            alert($filter("translate")('errors.declaration.UVC_ENCOURS'));
	        } else {
	            self.vue = 'ecriture';
	            webService.copyUvcService(id).then(function (response) {
	                self.sort_field = 'date';
	                self.search_field = ''; //tri par defaut,date_creation
	                self.getlistUvc(response.data, true); //select last page
	                //self.valide = false;
	                console.log('copyUvc - ok');
	            }, function (reason) {
	                console.error('copyUvc - error : ' + JSON.stringify(reason));
	            }).finally(function () {});
	        }
	    };

	    self.search = function () {
	        self.hideForm();
	        self.page_index = 0;
	        self.getlistUvc(null, false);
	    };
	    self.sort = function () {
	        self.hideForm();
	        self.page_index = 0;
	        self.getlistUvc(null, false);
	    };
	    self.setPage = function (page) {
	        self.hideForm();
	        self.page_index = page;
	        self.getlistUvc(null, false);
	    };
	    self.deleteUvc = function (id_ligne, index) {
	        self.id_ligne_to_delete = id_ligne;
	        self.index_ligne_to_delete = index;
	        this.openDeleteModal();
	    };
	    self.confirmDeleteUvc = function () {
	        this.closeModal();
	        var index = self.index_ligne_to_delete;
	        var id_ligne = self.id_ligne_to_delete;
	        console.log('delete ok', index);
	        self.hideForm();
	        webService.deleteUvc(id_ligne).then(function (response) {
	            console.debug("response " + response.data);
	            self.contribution_totale = response.data.Contribution_Totale;
	            if (index == 0 && self.listUvc.length == 1 && self.page_index > 0) self.page_index = self.page_index - 1;
	            self.getlistUvc(null, false);
	        }, function (reason) {}).finally(function () {});
	    };

	    webService.getProduits().then(function (response) {
	        self.produits = [];
	        for (var index in response.data) {

	            self.produits.push({
	                code: response.data[index],
	                libelle: $filter("translate")('produits.' + response.data[index])
	            });
	        }
	        // self.produits = response.data;
	        console.log('getProduits - ok');
	    }, function (reason) {
	        console.error('getProduits - error : ' + JSON.stringify(reason));
	    }).finally(function () {});

	    this.openModal = function () {
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(89),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });
	    };
	    this.closeModal = function () {
	        self.code_produit_tmp = '';
	        self.modal_instance.close();
	    };
	    this.openDeleteModal = function () {
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(88),
	            scope: $scope,
	            backdrop: 'static',
	            animation: false,
	            keyboard: false
	        });
	    };
	    this.Alert = function () {
	        self.modal_instance = $uibModal.open({
	            template: __webpack_require__(87),
	            scope: $scope,
	            backdrop: 'static',
	            animation: false,
	            keyboard: false
	        });
	    };
	    this.setProduit = function () {
	        self.uvc.ProduitId = self.code_produit_tmp;
	        self.code_produit_tmp = '';
	        self.modal_instance.close();
	    };
	    this.CalculerNbBobinesAlimentaire = function () {
	        if (self.uvc.Spec && (self.uvc.ProduitId == '150000' || self.uvc.ProduitId == '160000') /* && self.uvc_web_form_id.produits_spec_valide.$valid*/) {
	                webService.CalculerNbBobinesAlimentaire(self.uvc).then(function (response) {
	                    self.uvc.NbUvcEmballMenagers = response.data.NbUvcEmballMenagers;
	                    //self.uvc.NbUvcEmballNonMenagers = response.data.NbUvcEmballNonMenagers;
	                    console.log('CalculerNbBobinesAlimentaire:', response.data);
	                }, function (reason) {
	                    console.error('CalculerNbBobinesAlimentaire - error : ' + JSON.stringify(reason));
	                }).finally(function () {});
	            }
	    };
	    this.ValidateUvc = function (form) {
	        self.submitted = true;
	        if (form.$valid) {
	            self.erreurs = false;
	            console.log('self.uvc', self.uvc);
	            webService.UpdateUvcWeb(self.uvc).then(function (response) {
	                self.uvc.Valider = true;
	                self.uvc_en_cours = false;
	                self.contribution_totale = response.data.Contribution_Totale;
	                self.uvc.ContribTotaleLigne = response.data.Contribution_Totale_ligne;
	                self.uvc.ContribUnitTotale = response.data.Contribution_Untaire_Totale_ligne;
	                //copy propoerties
	                self.selectedUVC.Libelle = self.uvc.Libelle;
	                self.selectedUVC.ContribTotaleLigne = self.uvc.ContribTotaleLigne;
	                self.selectedUVC.ContribUnitTotale = self.uvc.ContribUnitTotale;
	                self.selectedUVC.Valider = true;

	                self.selectedUVC.ProduitId = self.uvc.ProduitId;
	                self.selectedUVC.Spec = self.uvc.Spec;
	                self.selectedUVC.Decote = self.uvc.Decote;
	                self.selectedUVC.MalusPerturbateur = self.uvc.MalusPerturbateur;
	                self.selectedUVC.MalusSansFiliere = self.uvc.MalusSansFiliere;
	                self.selectedUVC.NbUvcEmballMenagers = self.uvc.NbUvcEmballMenagers;
	                self.selectedUVC.NbUvcEmballNonMenagers = self.uvc.NbUvcEmballNonMenagers;
	                self.selectedUVC.BonusReductionId = self.uvc.BonusReductionId;
	                self.selectedUVC.BonusSensibilisationId = self.uvc.BonusSensibilisationId;

	                self.selectedUVC.acier = self.uvc.acier;
	                self.selectedUVC.alum = self.uvc.alum;
	                self.selectedUVC.pcNonBriq = self.uvc.pcNonBriq;
	                self.selectedUVC.briq = self.uvc.briq;
	                self.selectedUVC.autrePlas = self.uvc.autrePlas;
	                self.selectedUVC.flacon = self.uvc.flacon;
	                self.selectedUVC.petClair = self.uvc.petClair;
	                self.selectedUVC.verre = self.uvc.verre;
	                self.selectedUVC.autre = self.uvc.autre;

	                if (self.orgaCommerciale == 'adelphe') {
	                    self.selectedUVC.Bois = self.uvc.Bois;
	                    self.selectedUVC.Textile = self.uvc.Textile;
	                }

	                console.log('UpdateUvcWeb - ok', response.data);
	                self.valide = true;
	                self.vue = 'lecture';
	                self.submitted = false;

	                self.uvc_web_form_id.uvc_libelle.$touched = false;

	                self.uvc_web_form_id.autre.$touched = false;
	                self.uvc_web_form_id.verre.$touched = false;
	                self.uvc_web_form_id.autrePlas.$touched = false;
	                self.uvc_web_form_id.flacon.$touched = false;
	                self.uvc_web_form_id.petClair.$touched = false;
	                self.uvc_web_form_id.briq.$touched = false;
	                self.uvc_web_form_id.pcNonBriq.$touched = false;
	                self.uvc_web_form_id.alum.$touched = false;
	                self.uvc_web_form_id.acier.$touched = false;

	                var el = document.querySelector('div.uvc_form');
	                el.scrollTop = 0;
	            }, function (reason) {
	                console.error('UpdateUvcWeb - error : ' + JSON.stringify(reason));
	            }).finally(function () {});
	        } else {
	            var el = document.querySelector('div.uvc_form');
	            el.scrollTop = 0;
	            self.erreurs = true;
	        }
	    };
	    this.goBack = function () {
	        webService.goBack();
	    };
	    this.CancelEdition = function () {
	        webService.CancelEdition(self.uvc.LigneDeclarationId).then(function (response) {
	            console.log('CancelEdition - ok', response.data);
	            self.selectedUVC.Valider = true;
	            //self.uvc.Valider = true;
	            self.uvc = angular.copy(self.selectedUVC);
	            self.valide = true;
	            self.uvc_en_cours = false;
	            self.vue = 'lecture';
	            self.submitted = false;

	            self.uvc_web_form_id.uvc_libelle.$touched = false;

	            self.uvc_web_form_id.autre.$touched = false;
	            self.uvc_web_form_id.verre.$touched = false;
	            self.uvc_web_form_id.autrePlas.$touched = false;
	            self.uvc_web_form_id.flacon.$touched = false;
	            self.uvc_web_form_id.petClair.$touched = false;
	            self.uvc_web_form_id.briq.$touched = false;
	            self.uvc_web_form_id.pcNonBriq.$touched = false;
	            self.uvc_web_form_id.alum.$touched = false;
	            self.uvc_web_form_id.acier.$touched = false;

	            var el = document.querySelector('div.uvc_form');
	            el.scrollTop = 0;
	        }, function (reason) {
	            console.error('CancelEdition - error : ' + JSON.stringify(reason));
	        }).finally(function () {});
	    };
	    this.hideForm = function () {
	        self.uvc = {
	            Libelle: '',
	            ProduitId: '',
	            Spec: false,
	            Decote: false,
	            MalusPerturbateur: false,
	            MalusSansFiliere: false,
	            NbUvcEmballMenagers: '',
	            NbUvcEmballNonMenagers: '',
	            BonusReductionId: 0,
	            BonusSensibilisationId: 0,
	            acier: 0,
	            alum: 0,
	            pcNonBriq: 0,
	            briq: 0,
	            autrePlas: 0,
	            flacon: 0,
	            petClair: 0,
	            verre: 0,
	            autre: 0,
	            Textile: 0,
	            Bois: 0,
	            ContribUnitTotale: 0,
	            ContribTotaleLigne: 0,
	            Valider: false
	        };
	        self.selectedUVC = undefined;
	        self.vue = 'ecriture';
	        self.submitted = false;
	        //console.log('uvc_web_form_id.uvc_libelle.$touched:',self.uvc_web_form_id.uvc_libelle.$touched);
	        self.uvc_web_form_id.uvc_libelle.$setUntouched();
	        //console.log('uvc_web_form_id.uvc_libelle.$touched:', self.uvc_web_form_id.uvc_libelle.$touched);
	    };
	    this.hideExposant = function (val) {
	        if (self.uvc == undefined || val == '' || val == null) return true;else return false;
	    };

	    this.Continue = function () {
	        webService.ValidateDeclaWeb(self.id_declaration).then(function (response) {
	            webService.goToMarquesSocietes(self.id_declaration);
	        }, function (reason) {}).finally(function () {});
	    };

	    this.list_bonus_reduction = [
	    //{ id: "", libelle: $filter("translate")('bonus_reduction.0') },
	    { id: 1, libelle: $filter("translate")('bonus_reduction.1') }, { id: 4, libelle: $filter("translate")('bonus_reduction.4') }, { id: 5, libelle: $filter("translate")('bonus_reduction.5') }, { id: 6, libelle: $filter("translate")('bonus_reduction.6') }, { id: 61, libelle: $filter("translate")('bonus_reduction.61') }, { id: 64, libelle: $filter("translate")('bonus_reduction.64') }, { id: 65, libelle: $filter("translate")('bonus_reduction.65') }, { id: 66, libelle: $filter("translate")('bonus_reduction.66') }];
	    this.list_bonus_sensibilisation = [
	    //{ id: "", libelle: $filter("translate")('bonus_sensibilisation.0') },
	    { id: 1, libelle: $filter("translate")('bonus_sensibilisation.1') }, { id: 2, libelle: $filter("translate")('bonus_sensibilisation.2') }, { id: 3, libelle: $filter("translate")('bonus_sensibilisation.3') }, { id: 4, libelle: $filter("translate")('bonus_sensibilisation.4') }, { id: 5, libelle: $filter("translate")('bonus_sensibilisation.5') }, { id: 6, libelle: $filter("translate")('bonus_sensibilisation.6') }, { id: 7, libelle: $filter("translate")('bonus_sensibilisation.7') }];

	    this.list_produits_spec = [{ id: "130000", libelle: $filter("translate")('produits_spec.130000') }, { id: "140000", libelle: $filter("translate")('produits_spec.140000') }, { id: "150000", libelle: $filter("translate")('produits_spec.150000') }, { id: "160000", libelle: $filter("translate")('produits_spec.160000') }];
	    this.MateriauxValide = function () {
	        if (self.uvc != undefined) return self.uvc.acier != '' && self.uvc.acier != 0 && self.uvc.acier != null || self.uvc.alum != '' && self.uvc.alum != 0 && self.uvc.alum != null || self.uvc.pcNonBriq != '' && self.uvc.pcNonBriq != 0 && self.uvc.pcNonBriq != null || self.uvc.briq != '' && self.uvc.briq != 0 && self.uvc.briq != null || self.uvc.autrePlas != '' && self.uvc.autrePlas != 0 && self.uvc.autrePlas != null || self.uvc.flacon != '' && self.uvc.flacon != 0 && self.uvc.flacon != null || self.uvc.petClair != '' && self.uvc.petClair != 0 && self.uvc.petClair != null || self.uvc.verre != '' && self.uvc.verre != 0 && self.uvc.verre != null || self.uvc.autre != '' && self.uvc.autre != 0 && self.uvc.autre != null || self.orgaCommerciale == 'adelphe' && self.uvc.Bois != '' && self.uvc.Bois != 0 && self.uvc.Bois != null || self.orgaCommerciale == 'adelphe' && self.uvc.Textile != '' && self.uvc.Textile != 0 && self.uvc.Textile != null;else return false;
	    };
	    this.ProduitSpecValide = function () {
	        if (self.uvc != undefined && (self.uvc.ProduitId == '150000' || self.uvc.ProduitId == '160000')) {
	            var nb_produits = 0;

	            if (self.uvc.alum != '' && self.uvc.alum != 0 && self.uvc.alum != null) nb_produits++;
	            if (self.uvc.pcNonBriq != '' && self.uvc.pcNonBriq != 0 && self.uvc.pcNonBriq != null) nb_produits++;
	            if (self.uvc.autrePlas != '' && self.uvc.autrePlas != 0 && self.uvc.autrePlas != null) nb_produits++;

	            //console.log('nb_produits:', nb_produits);
	            if (nb_produits > 1) {
	                self.ProduitSpecError = '1'; // 'un seul mat�riau peut �tre renseign� avec ce code produit';
	                return false;
	            } else {
	                if (nb_produits == 0) {
	                    self.ProduitSpecError = '2'; // "Aucun mat�riau de type 'papier-carton autre que brique', 'autres emballages plastique' et 'aluminium' n'est renseign� avec ce code produit";
	                    return false;
	                } else {
	                    if (self.uvc.acier != '' && self.uvc.acier != 0 && self.uvc.acier != null || self.uvc.acier != '' && self.uvc.acier != 0 && self.uvc.acier != null || self.uvc.briq != '' && self.uvc.briq != 0 && self.uvc.briq != null || self.uvc.flacon != '' && self.uvc.flacon != 0 && self.uvc.flacon != null || self.uvc.petClair != '' && self.uvc.petClair != 0 && self.uvc.petClair != null || self.uvc.verre != '' && self.uvc.verre != 0 && self.uvc.verre != null || self.orgaCommerciale == 'adelphe' && self.uvc.Bois != '' && self.uvc.Bois != 0 && self.uvc.Bois != null || self.orgaCommerciale == 'adelphe' && self.uvc.Textile != '' && self.uvc.Textile != 0 && self.uvc.Textile != null) {
	                        self.ProduitSpecError = '3'; // "Vous ne pouvez pas renseigner un mat�riau autre que 'papier-carton autre que brique, autres emballages plastique et aluminium' avec ce code produit";
	                        return false;
	                    } else return true;
	                }
	            }
	        } else return true;
	    };

	    this.ShowMateriauPreview = function (materiau) {
	        console.log('materiau:', materiau);
	        console.log('ShowMateriauPreview:', self.uvc != undefined && materiau != '' && materiau != 0 && materiau != null);
	        return self.uvc != undefined && materiau != '' && materiau != 0 && materiau != null;
	    };
	};

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	function webService(declarationResource, userService) {
	    var self = this;
	    self.getListUVC_firstLoad = declarationResource.getListUVC_firstLoad;
	    self.getlistUvcService = declarationResource.getListUvc;
	    self.AddUvcWeb = declarationResource.AddUvcWeb;
	    self.copyUvcService = declarationResource.copyUvc;
	    self.deleteUvc = declarationResource.deleteUvc;

	    self.goBack = declarationResource.goBack;

	    self.checkEtape = declarationResource.checkEtape;

	    self.getProduits = declarationResource.getProduits;
	    self.getProduitsSpec = declarationResource.getProduitsSpec;
	    self.UpdateUvcWeb = declarationResource.UpdateUvcWeb;
	    self.CancelEdition = declarationResource.CancelEdition;
	    self.InvalidateUvcWeb = declarationResource.InvalidateUvcWeb;

	    self.ValidateDeclaWeb = declarationResource.ValidateDeclaWeb;
	    self.goToMarquesSocietes = declarationResource.goToMarquesSocietes;

	    self.getRecap = declarationResource.getRecap;

	    self.CalculerNbBobinesAlimentaire = declarationResource.CalculerNbBobinesAlimentaire;

	    this.orgaCommerciale = userService.getOrgaCommerciale();

	    this.user = {
	        numero_client: undefined,
	        id_declarant: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        return self.user;
	    };

	    return self;
	}
	module.exports = webService;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(142);
	var service = __webpack_require__(143);
	var moduleName = 'declaration.validation';
	angular.module(moduleName, ['ui.bootstrap']);

	angular.module(moduleName).service('validationService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('validationCtrl', ['validationService', '$uibModal', '$scope', '$location', ctrl]);
	angular.module(moduleName).component('validation', {
	    template: __webpack_require__(92),
	    controller: 'validationCtrl',
	    controllerAs: 'validationCtrl',
	    bindings: {}
	});
	angular.module(moduleName).directive('materiau', function () {
	    return {
	        require: 'ngModel',

	        link: function (scope, element, attrs, ngModelController) {
	            //ngModelController.$parsers.push(function (data) {
	            //    //convert data from view format to model format
	            //    if (data === '')
	            //        return 0; //converted
	            //    else return data;
	            //});

	            ngModelController.$formatters.push(function (data) {
	                //convert data from model format to view format
	                if (data == 0) return ''; //converted
	                else return data;
	            });
	        }
	    };
	});
	module.exports = moduleName;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function (validationService, $uibModal, $scope, $location) {

	    var _self = this;
	    _self.RecapDeclaration;

	    _self.errors;
	    _self.loading = true;
	    _self.modal_instance;
	    _self.status_code;
	    _self.mails = [];

	    _self.step = 1;
	    _self.mailinput;
	    _self.email_pattern = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

	    _self.user = validationService.getUserInfo();

	    _self.id_declaration = $location.search().id_declaration;

	    if (typeof _self.id_declaration == 'undefined') _self.id_declaration = '';
	    console.log('IF self.id_declaration', _self.id_declaration);

	    this.$onInit = function () {

	        //validationService.checkEtape(_self.id_declaration, 3).then(function (response) {

	        //console.log('id declaration: ' + _self.id_declaration);
	        //console.log('etape_declaration: ' + response.data);

	        //if (!response.data)
	        //    validationService.goToHistoriqueDeclaration();
	        //else {

	        validationService.getRecap(_self.id_declaration).then(function (response) {

	            console.log('id_dec getRecap :' + _self.id_declaration);
	            _self.RecapDeclaration = response.data;
	            console.log('getRecap : ' + JSON.stringify(response));
	        }, function (reason) {
	            console.error('getRecap - error : ' + JSON.stringify(reason));
	            _self.status_code = reason.status;
	            console.log('On init status_code: ' + _self.status_code);
	            console.log('getRecap: ' + _self.status_code);
	            _self.errors = reason.data;
	        }).finally(function () {});
	        //}
	        //}, function (reason) {
	        //       validationService.goToHistoriqueDeclaration();
	        //}).finally(function () { });
	    };

	    this.addMails = function () {
	        if (inArray(_self.mailinput, _self.mails) == -1) {
	            _self.mails.push(_self.mailinput);
	        }
	        _self.mailinput = '';
	    };
	    this.removeMail = function (mail) {
	        for (var i = this.mails.length - 1; i >= 0; i--) {
	            if (this.mails[i] === mail) {
	                this.mails.splice(i, 1);
	            }
	        }
	    };
	    function inArray(elem, array) {
	        var len = array.length;
	        for (var i = 0; i < len; i++) {
	            if (array[i] == elem) {
	                return i;
	            }
	        }
	        return -1;
	    }

	    this.valideMails = function () {

	        _self.modal_instance = $uibModal.open({
	            template: __webpack_require__(91),
	            scope: $scope,
	            backdrop: 'static',
	            keyboard: false
	        });

	        validationService.sendDeclarationAR(_self.mails.join(), _self.id_declaration, _self.user.id_SF).then(function (response) {

	            validationService.saveMailsAR(_self.mails.join(), _self.id_declaration).then(function (response) {

	                _self.status_code = 200;
	                _self.loading = false;
	                _self.declarationMails = null;
	            }, function (reason) {
	                _self.status_code = reason.status;
	                console.log('Validemails saveMailsAR status code: ' + _self.status_code);
	                _self.errors = reason.data;
	                _self.mails = null;
	                _self.loading = false;
	            }).finally(function () {});
	        }, function (reason) {
	            if (reason.status == 403) {
	                _self.modal_instance.close();
	            } else {
	                _self.status_code = reason.status;
	                console.log('Validemails sendDeclarationAR status code: ' + _self.status_code);
	                _self.loading = false;
	                console.error('submit - error : ' + JSON.stringify(reason));
	                _self.errors = reason.data;
	                _self.mails = null;
	            }
	        }).finally(function () {});
	    };

	    this.saveMails = function () {
	        validationService.saveMailsAR(_self.mails.join(), _self.id_declaration).then(function (response) {
	            _self.status_code = 200;
	            console.log('saveMails status code: ' + _self.status_code);
	            validationService.goBack();
	            //validationService.goToHistoriqueDeclaration();
	        }, function (reason) {
	            _self.status_code = reason.status;
	            console.log('saveMails: ' + _self.status_code);
	            _self.errors = reason.data;
	            _self.mails = null;
	        }).finally(function () {});
	    };
	};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	function validationService(declarationResource, userService) {
	    var self = this;

	    self.sendDeclarationUvcXml = declarationResource.sendDeclarationUvcXml;
	    self.sendDeclarationAR = declarationResource.sendDeclarationAR;
	    self.saveMailsAR = declarationResource.saveMailsAR;
	    self.findMailsAR = declarationResource.findMailsAR;
	    self.getRecap = declarationResource.getRecap;
	    self.getAnneesDeclaration = declarationResource.getAnneesDeclaration;
	    self.getAnneesDeclaree = declarationResource.getAnneesDeclaree;
	    self.getMotifsCorrective = declarationResource.getMotifsCorrective;
	    self.sendExcelSectDetail = declarationResource.sendExcelSectDetail;
	    self.goToHistoriqueDeclaration = declarationResource.goToHistoriqueDeclaration;
	    self.checkEtape = declarationResource.checkEtape;
	    self.goBack = declarationResource.goBack;

	    this.user = {
	        numero_client: undefined,
	        id_declarant: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    return self;
	}

	module.exports = validationService;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	var recommandationModule = __webpack_require__(128);
	var uvcModule = __webpack_require__(137);
	var choixdeclarationModule = __webpack_require__(104);
	var historiqueDeclarationModule = __webpack_require__(119);
	var historiqueWidgetModule = __webpack_require__(122);
	var accueilDeclarationModule = __webpack_require__(101);
	var simulateurModule = __webpack_require__(131);
	var entrepriseModule = __webpack_require__(116);
	var declarationforfaitModule = __webpack_require__(110);
	var widgetuploadModule = __webpack_require__(148);
	var lancementrpcModule = __webpack_require__(125);
	var validationModule = __webpack_require__(141);
	var controleEcartModule = __webpack_require__(107);
	var rpcModule = __webpack_require__(3);
	var widgetrpcModule = __webpack_require__(145);
	var depotDeclarationModule = __webpack_require__(113);

	angular.module('declaration.views', [historiqueDeclarationModule, recommandationModule, uvcModule, choixdeclarationModule, historiqueWidgetModule, accueilDeclarationModule, simulateurModule, declarationforfaitModule, widgetuploadModule, lancementrpcModule, validationModule, entrepriseModule, controleEcartModule, widgetrpcModule, rpcModule, depotDeclarationModule]);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(146);
	var service = __webpack_require__(147);
	var moduleName = 'declaration.widgetrpc';
	angular.module(moduleName, []);

	var app = angular.module(moduleName, []);

	angular.module(moduleName).service('widgetrpcService', ['declarationResource', 'userService', '$q', service]);
	angular.module(moduleName).controller('widgetrpcCtrl', ['widgetrpcService', 'userService', ctrl]);
	angular.module(moduleName).component('widgetrpc', {
	    template: __webpack_require__(93),
	    controller: 'widgetrpcCtrl',
	    controllerAs: 'widgetrpcCtrl',
	    bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	module.exports = function (widgetrpcService, userService) {
	    var _self = this;
	    const INITIAL_ID = 'block-bloc-4-declaration-faq-declaration';
	    const RPC_ID = 'bloc-widgetrpc-modified';
	    const FAQ_ID = 'bloc-widgetfaq-modified';
	    const ADELPHE_ORGA = 'adelphe';
	    const POINTER_CLASS = 'pointer';
	    const RPC_NAVIGATE = '/mon-espace/declaration/documents/rpc';

	    //this.user = widgetrpcService.getUserInfo();

	    //this.listdeclarations = [];

	    //var idClient="539F732E-33CC-4F72-842A-004D5927ADF0";

	    //this.test= "4648";
	    var _self = this;

	    this.$onInit = function () {

	        //var d = new Date();
	        //_self.annee_en_cours = d.getFullYear();

	        //changeId(INITIAL_ID, MODIFIED_ID);
	        if (userService.getOrgaCommerciale() == ADELPHE_ORGA) _self.adelpheContextFlag = true;else _self.ecoContextFlag = true;

	        console.log('on Init widget rpc !!');
	        widgetrpcService.checkRPC().then(function () {

	            _self.runRpcFlag = widgetrpcService.runRpcFlag;
	            changeBackground(_self.runRpcFlag);
	            _self.faqFlag = !_self.runRpcFlag;
	            console.log('rpc widget controller flag : ', _self.runRpcFlag);
	        });
	    };

	    var changeBackground = function (isRpc) {

	        if (isRpc) changeId(INITIAL_ID, RPC_ID, isRpc);else changeId(INITIAL_ID, FAQ_ID);
	    };

	    var changeId = function (first, second, isRpc) {

	        var elem = document.getElementById(first);
	        if (elem) elem.id = second;

	        if (isRpc) {
	            elem.classList.add(POINTER_CLASS);
	            elem.onclick = function () {
	                window.location = RPC_NAVIGATE;
	            };
	        }
	    };
	};

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	function widgetrpcService(declarationResource, userService, $q) {

	    const VALID_STATUS = 'VALIDEE';
	    const AMOUNT_MAX = 60000;
	    const IN_PROGRESS = 1;
	    const DONE = 2;

	    var _self = this;
	    var idClient = userService.getUserIdSAP();

	    this.checkRPC = function () {

	        var defered = $q.defer();
	        declarationResource.getHistoriqueDeclaration(idClient, 'page').then(function (response) {

	            var year = new Date().getFullYear() - 1;

	            //_self.lastDeclaration = response.data.find(function(data){return data.Annee == year && data.Statut == VALID_STATUS}); 
	            _self.lastDeclaration = userService.searchInArray(response.data, function (data) {
	                return data.Annee == year && data.Statut == VALID_STATUS;
	            });
	            console.log("declaration historique : ", response, _self.lastDeclaration, year);

	            declarationResource.getRpcs(idClient).then(function (response) {

	                var listRpc = response.data;
	                console.log('get rpcs success : ', listRpc);
	                _self.runRpcFlag = verifydataForRpc(_self.lastDeclaration, listRpc);
	                console.log('rpc widget Service flag : ', _self.runRpcFlag);
	            }, function (response) {

	                _self.runRpcFlag = false;
	                console.log('get rpcs failure : ', response);
	            }).finally(function () {
	                defered.resolve();
	            });;
	        }, function (response) {

	            _self.runRpcFlag = false;
	            console.log('get declaration historique failure : ', response);
	            defered.resolve();
	        });

	        return defered.promise;
	    };

	    var verifydataForRpc = function (declaration, rpcList) {

	        console.log('in verify data for rpc function : ', declaration, rpcList);
	        console.log('valid status : ', VALID_STATUS, 'montant max : ', AMOUNT_MAX);

	        if (!declaration || declaration.ContributionTotale < AMOUNT_MAX) return false;

	        for (var i = 0; i < rpcList.length; i++) {

	            var rpc = rpcList[i];
	            console.log('rpc value : ', rpc);
	            if (rpc.Statut == IN_PROGRESS || rpc.Statut == DONE) return false;
	        }

	        return true;
	    };

	    _self.user = {
	        numero_client: undefined,
	        id_declarant: undefined,
	        id_SF: undefined
	    };

	    this.getUserInfo = function () {
	        _self.user.numero_client = userService.getUserIdSAP();
	        _self.user.id_declarant = userService.getUserIdCorrespondent();
	        _self.user.id_SF = userService.getUserIdSF();
	        return _self.user;
	    };

	    return _self;
	}

	module.exports = widgetrpcService;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(149);
	var service = __webpack_require__(150);
	var moduleName = 'declaration.widgetupload';
	angular.module(moduleName, []);

	var app = angular.module(moduleName, []);

	angular.module(moduleName).service('widgetuploadService', ['declarationResource', 'userService', service]);
	angular.module(moduleName).controller('widgetuploadCtrl', ['widgetuploadService', '$location', '$uibModal', '$scope', '$document', ctrl]);
	angular.module(moduleName).component('widgetupload', {
	    template: __webpack_require__(94),
	    controller: 'widgetuploadCtrl',
	    controllerAs: 'widgetuploadCtrl',
	    bindings: {}
	});

	module.exports = moduleName;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = function (widgetuploadService, $location, $uibModal, $scope, $document, $userService) {
	    var self = this;

	    self.modal_instance;

	    self.AnneesContractualisation;

	    self.user = widgetuploadService.getUserInfo();

	    const BLOC_ID = 'block-bloc-6-declaration-depot-fichier-excel';

	    this.$onInit = function () {

	        var d = new Date();
	        var annee_en_cours = d.getFullYear();

	        widgetuploadService.getAnneesContractualisation(self.user.numero_client).then(function (response) {
	            self.AnneesContractualisation = response.data;

	            console.log("$onInit : annee en cours:", annee_en_cours);
	            console.log("$onInit _ promise : AnneesContractualisation :", self.AnneesContractualisation);

	            //var parentNode2 = $document.find('#block-bloc-6-declaration-depot-fichier-excel');
	            //console.log('parentNode', parentNode2);

	            //var parentNode = document.getElementById('block-bloc-6-declaration-depot-fichier-excel');
	            //console.log('parentNode', parentNode);

	            if ( /*parentNode2 && */self.AnneesContractualisation < annee_en_cours) {
	                console.log('$onInit _ promise : display block-bloc-6-declaration-depot-fichier-excel');
	                //parentNode2.style = 'display:block!important';
	                //parentNode2.css('display', 'block!important');
	                //var elem = angular.element(document.querySelector("#block-bloc-6-declaration-depot-fichier-excel"))[0];

	                var elem = document.getElementById(BLOC_ID);
	                if (elem) elem.style.cssText = "display: block !important";
	                console.log(elem);
	            } else {
	                console.log('$onInit _ promise : hidde block-bloc-6-declaration-depot-fichier-excel');
	            }
	        }, function (reason) {
	            console.error("$onInit _ promise : error", reason);
	        }).finally(function () {});
	    };
	};

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	function widgetuploadService(declarationResource, userService) {
	    var self = this;

	    self.getAnneesContractualisation = declarationResource.getAnneesContractualisation;

	    self.user = {
	        numero_client: undefined,
	        id_declarant: undefined,
	        id_SF: undefined
	    };

	    this.getUserInfo = function () {
	        self.user.numero_client = userService.getUserIdSAP();
	        self.user.id_declarant = userService.getUserIdCorrespondent();
	        self.user.id_SF = userService.getUserIdSF();
	        return self.user;
	    };

	    return self;
	}

	module.exports = widgetuploadService;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	/*require('./style/main.css');*/
	__webpack_require__(144);
	var resources = __webpack_require__(98);
	var commons = __webpack_require__(95);

	angular.module('declaration', ['declaration.views', resources, commons]);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(152)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!./bootstrap-toggle.css", function() {
				var newContent = require("!!../../css-loader/index.js!./bootstrap-toggle.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./popInCodeActivationError.html": 77,
		"./popInCodeActivationExpired.html": 78,
		"./popInCodeActivationLocked.html": 79,
		"./popInCodeActivationSuccess.html": 80,
		"./popin1.html": 15,
		"./popin1AuthenticationProblem.html": 16,
		"./popin1erreur.html": 17,
		"./popin1erreurErreurSurvenue.html": 18,
		"./popin1erreurImpossibleModifier.html": 19,
		"./popin2.html": 20,
		"./popin3.html": 21,
		"./popin4ChangeMission.html": 22,
		"./popinCodeActivation.html": 23,
		"./rpc": 3,
		"./rpc.html": 24,
		"./rpc.js": 3,
		"./rpcCtrl": 4,
		"./rpcCtrl.js": 4,
		"./rpcService": 5,
		"./rpcService.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 154;


/***/ })
]);