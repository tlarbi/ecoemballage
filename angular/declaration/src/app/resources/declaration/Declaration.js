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
        self.sendDeclarationUvcXml = function (file, ClientID, DeclarantID, annee, flag_corrective, motif, commentaire, id_declaration/*completer une dec initilisée*/) {
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
        }
        self.getAnneesDeclaration = function (ClientID) {
            var url = '/declarationApp/p/clients/' + ClientID + '/AnneesDeclaration';
            return $http({
                method: 'GET',
                url: url
            });
        }
        self.getAnneesDeclaree = function (ClientID) {
            var url = '/declarationApp/p/clients/' + ClientID + '/AnneesDeclaree';
            return $http({
                method: 'GET',
                url: url
            });
        }
        self.getMotifsCorrective = function () {
            var url = '/declarationApp/p/declarations/motifs_correctives';
            return $http({
                method: 'GET',
                url: url
            });
        }
        /***************************************** HISTORIQUE*************************************************/
        self.getHistoriqueDeclaration = function (ClientID,vue) {
			 console.log('get declaration historique');
            var url = '/declarationApp/p/clients/' + ClientID + '/declarations?vue=' + vue;
            return $http({
                method: 'GET',
                url: url
            });
        }
        self.getUrl_historique_declaration = '/mon-espace/declaration/historique';

        /***************************************** RPC *************************************************/
        
        // #region RPC file

        //PERMET DE SAVOIR SI LE RPC EXISTE
        self.RpcFileExist = function (idClientSAP, annee) {
            console.log('get rpc file declaration');
            var url = "/api/clients/"+ idClientSAP +"/rpc_isExist/"+annee;
            return $http({
                method: "GET",
                url: url
            });

        };

        //PERMET DE TELECHARGER UN DOCUMENT RPC
        self.getRpcFile = function (idClientSAP, annee) {

            console.log('get rpc file attachement declaration: ' + idClientSAP+ " " + annee);
            var url = "/api/clients/"+ idClientSAP +"/rpc/"+ annee;
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
        }

        ///: https://ws.cncc.fr/eo-notification/missions  37f8cce3-e676-4100-b96a-d45916794fde  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
        self.CacCreateProject = function (mydata) {
            console.log('in service sent  ' + mydata);
            var url = '/externalApi/p/cacAPIprojects/eo-notification/missions';
           

            return $http({
                method: "POST",
                url: url,
                data: mydata                
            });
        }

        ///: https://ws.cncc.fr/eo-notification/missions  37f8cce3-e676-4100-b96a-d45916794fde  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
        self.CacDeleteProject = function (id) {
            var url = '/externalApi/p/cacAPIprojects/eo-notification/missions/'+ id;
            return $http({
                method: "DELETE",
                url: url
            });
        }
        // #endregion

        // #region EC
        ///https://ws-rec.experts-comptables.org:8042   : eco_d1c9e1-de2c-11e6-93b9-00163e79321a
        self.GetExpertByName = function (name, max_return) {
            var url = '/externalApi/p/ecAPI/csoec/getEcByName?' + 'nom=' + name + '&max_num=' + max_return;
            return $http({
                method: "GET",
                url: url
            });
        }

        ///: https://network-rec.experts-comptables.org  1ae7f281-dd81-11e6-80b9-00155d063d11  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
        self.ExpertsCreateProject = function (id, idClient, annee, montant, raisonSociale, siren, idSignataire) {
            console.log(id, idClient, annee, montant, raisonSociale, siren, idSignataire);
            var url = '/externalApi/p/ecAPIprojects/api/eco-organisme/projects';

            var myData =
            'id='+ id+
            '&raisonSociale='+ raisonSociale+
            '&idClient='+ idClient+
            '&idSignataire='+ idSignataire+
            '&montant=' + montant+
            '&annee='+ annee+
            '&siren=' + siren;
            return $http({
                method: 'POST',
                url: url,
                headers : {
                    'content-type': "application/x-www-form-urlencoded"
                },
                data: myData,
            });
        }

        ///: https://network-rec.experts-comptables.org  1ae7f281-dd81-11e6-80b9-00155d063d11  e394d56f-3e82-d35e-07ba-53b55326d06d(scoeid test)
        self.ExpertsDeleteProject = function (id) {
            var url = '/externalApi/p/ecAPIprojects/api/eco-organisme/projects/'+id;

            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    'content-type': "application/x-www-form-urlencoded"
                }
            });
        }

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
        }

        // #endregion

        // #region INTERNAL WEB API
        // A SUPPRIMER ?????????????
        self.getSiren = function (idSAP) {
            var url = '/declarationApp/p/rpcs/getsiren/'+idSAP;
            return $http({
                method: 'GET',
                url: url
            });
        }

        self.SaveNewMission = function (idMission,  clientNumber,  annee,  contribTotal, signataire,  nom, civilite, email,  typeexpert,  statut) {
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
                },
            });
        }


        self.UpdateCancelMission = function (idMission) {
            var url = '/declarationApp/p/rpcs/UpdateCancelMission/' + idMission;
            return $http({
                method: 'DELETE',
                url: url
            });
        }

        self.getAmount = function (idSAP,year) {
            var url = '/declarationApp/p/rpcs/getSimulatedAmount/'+idSAP+'/'+year;
            return $http({
                method: 'GET',
                url: url
            });
        }

        self.getSiret = function (idSAP) {
            var url = '/PortailApp/Clients/' + idSAP;
            return $http({
                method: 'GET',
                url: url
            });
        }

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

        self.getDeclarationStatus = function() {

            console.log('get declaration drupal');
            var url = '/content/declaration_statut';
            return $http({
                method: 'GET',
                url: url
            });
        };


    self.InitialiserDeclarationUVC = function (numero_client, id_declarant, annee){
        var url = '/declarationApp/p/clients/' + numero_client + '/initialiser_declarations/' + annee + '?DeclarantID=' + id_declarant;

            return $http({
                method: "POST",
                url: url,
                data: { 'DeclarantID': id_declarant },
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                },
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

    self.SupprimerDeclaration = function (numero_client,id,annee,type,mode_saisie) {
		if(id==null)
		{
			var url = '/declarationApp/p/clients/'+numero_client+'/annee/'+annee+'/suppressionold';
			return $http({
				method: 'DELETE',
				url: url
			});	
		}
		else
		{
			var url = '/declarationApp/p/declarations/'+id+'/suppressionnew';
				return $http({
					method: 'DELETE',
					url: url
			});
        };
	}
		
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
            var url = '/declarationApp/p/declarations/' + idDeclaration + '/validation/'+ idSF +'/?mails=' + mails;

            return $http({
                method: "POST",
                data: { 'mails': mails },
                url: url,
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                },
            });
        }

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
                },
            });
        }

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
            if (type_decla == 'sectorielle')
                url = '/OldApp/Declaration/EcdExport?type=Secto&annee=' + annee + '&mode=PreRempli&isExcel2007OrMore=' + isExcel2007OrMore + '&lang=' + langue_excel;
            else url = '/OldApp/Declaration/EcdExport?type=Detaille&annee=' + annee + '&mode=PreRempli&isExcel2007OrMore=' + isExcel2007OrMore + '&lang=' + langue_excel;

            var myForm = document.createElement("form");
            myForm.method = "post";
            myForm.action = url;
            document.body.appendChild(myForm);
            myForm.submit();
        }
        self.GetLienTelechargementSectDetail = function (TypeDecla, Annee) {
            var url;
            if (TypeDecla == 'DETAILLEE')
                url = "/OldApp/Declaration/EcdExport?type=Detaille&mode=Histo&annee=" + Annee;
            else url = "/OldApp/Declaration/EcdExport?type=Secto&mode=Histo&annee=" + Annee;
            $window.location.href = url;
        }
        self.GetLienTelechargementUVC = function (ClientID, Annee/*,langue*/) {
            var url = '/declarationApp/p/clients/' + ClientID + '/telechargementUvc/' + Annee + '/FR'/* + langue*/;
            $window.location.href = url;
        }
        /***************************************** GetListUVC *************************************************/
        self.getListUvc = function (declarationid, page, sort, search,lastpage) {
            var url = '/declarationApp/p/declarations/' + declarationid + '/getListUVC/' + page + '/' + sort + '?search=' + search + '&lastpage=' + lastpage;
            return $http({
                method: 'GET',
                url: url
            });
        }
        self.getListUVC_firstLoad = function (declarationid) {
            var url = '/declarationApp/p/declarations/' + declarationid + '/getListUVC_firstLoad';
            return $http({
                method: 'GET',
                url: url
            });
        }
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
            if (type_decla.toLowerCase() == 'sectorielle')
                url = '/OldApp/Declaration/EcdSecto';
            else url = '/OldApp/Declaration/EcdDetaillee';

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



        }
        self.goToDelarationForfait = function (annee) {
            var url = '/mon-espace/declaration/forfait/#?annee=' + annee;
            $window.location.href = url;
        }
        self.GetLienFinalisationForfait = function (id_declaration, annee, Etape) {
            var url = '';
            if(Etape==4)
                url = '/mon-espace/declaration/forfait/#?annee=' + annee + '&id_declaration=' + id_declaration + '&action=control_ecart';
            else url = '/mon-espace/declaration/forfait/#?annee=' + annee + '&id_declaration=' + id_declaration + '&action=validation';
            $window.location.href = url;
        }

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
                data: angular.toJson({'marque':marques, 'soc':entreprises})
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
            var url = '/declarationApp/p/declarations/' + declarationid + '/getListEntreprise/' ;
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
                data:uvc
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
        }
        self.ValidateDeclaWeb = function (id_declaration) {
            var url = '/declarationApp/p/declarations/validate/' + id_declaration;

            return $http({
                method: "POST",
                url: url,
                data: { 'id_declaration': id_declaration }
            });
        };
        self.goToMarquesSocietes = function (id_declaration) {
            var url = '/mon-espace/declaration/web/uvc/entreprises-marques/#?id_declaration='+ id_declaration;
            $window.location.href = url;
        }
        self.goToValidationDecWeb = function (id_declaration) {
            var url = '/mon-espace/declaration/web/uvc/validation/#?id_declaration=' + id_declaration;
            $window.location.href = url;
        }
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

        self.SendCommentaire = function (declarationid, commentaire,go_to_next_step, selected_motif) {

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
            var url = '/declarationApp/declarations/'+ declarationId + '/VariationControleEcart';
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
        }
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
        }
        
        self.sentDeclaration = function(form) {
            
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
        }
        
        self.getMotifs = function() {
            var url = '/declarationApp/p/declarations/motifs_correctives_conseiller';
            return $http({
                method: 'GET',
                url: url
            });
        }

        self.goBack = function () {
            $window.history.back();
        }
        return self;
    };
    this.dependencies.push(this.resource);
}

module.exports = new Declaration();
