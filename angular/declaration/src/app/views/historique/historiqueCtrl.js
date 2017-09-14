module.exports = function (historiqueService, $uibModal, $scope, $window) {

    var self = this;
    self.selected_declaration_id;
    self.type_declaration;
    self.mode_saisie;
    self.selected_annee;
    self.modal_instance;


    self.selected_motif = '';
    self.motifs_corrective = {};
    self.corrective_submitted=false;
    self.commentaire = '';

    self.etape_corrective = 1;
    self.modifier_mode_type_declaration;

    self.listdeclarations = [];
    self.url_historique = historiqueService.getUrl_historique_declaration;
    self.user = historiqueService.getUserInfo();

    self.etape_choix_mode_saisie = 1;
	self.suppresion_ok=false;;

    historiqueService.getHistoriqueDeclaration(self.user.numero_client, 'page').then(function (response) {
        self.listdeclarations = response.data;
    });

    historiqueService.getMotifsCorrective().then(function (response) {
        self.motifs_corrective = response.data;
        console.log('getMotifsCorrective - ok');
    }, function (reason) {
        console.error('getMotifsCorrective - error : ' + JSON.stringify(reason));
    }).finally(function () { });

    this.ModifierDeclaration = function (id,annee,type,mode_saisie) {
        self.selected_declaration_id = id;
        self.selected_annee = annee;
        self.type_declaration = type;
        self.mode_saisie = mode_saisie;

        self.modal_instance = $uibModal.open({
            template: require('./CorrectiveModal.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };
	
	this.DemandeSuppressionDeclaration = function (id,annee,type,mode_saisie) {
		
		self.selected_declaration_id = id;
        self.selected_annee = annee;
        self.type_declaration = type;
        self.mode_saisie = mode_saisie;
		
		self.modal_instance = $uibModal.open({
        template: require('./confirmSuppressionCorrective.html'),
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });	 
    };
	
	this.SupprimerDeclaration = function () {
		
			
		if (historiqueService.IsConseiller()) {
            console.log("Non Authorisé Car Conseiller ");
			self.modal_instance.close();
            historiqueService.unAuthPopinOpen();
        }
        else {
            console.log("Pas Conseiller ");
			
		    self.modal_instance.close();
         historiqueService.SupprimerDeclaration(self.user.numero_client,self.selected_declaration_id,self.selected_annee,self.type_declaration ,self.mode_saisie).then(function (response) {
			  console.log('suppression ok');
			 self.suppresion_ok = true;					 
			 self.modal_instance = $uibModal.open({
            template: require('./popinsuppression.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
		 }
		 , function (reason) {
			 console.log('suppression erreur');
			 self.suppresion_ok = false;
			 self.modal_instance = $uibModal.open({
            template: require('./popinsuppression.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
		 }).finally(function () { });
		}
    };
    this.submit_corrective = function (form) {
        self.corrective_submitted = true;
        if (form.$valid) { 
            self.etape_corrective = 2;
            self.corrective_submitted = false;
        }
    }
    this.submit_modification = function (form) { 
        self.corrective_submitted = true;
        if (form.$valid) {
            sessionStorage.setItem("annee_corrective", self.selected_annee);
            sessionStorage.setItem("motif_corrective", self.selected_motif);
            sessionStorage.setItem("commentaire_corrective", self.commentaire);
            if (self.modifier_mode_type_declaration == 'true') {
                historiqueService.goToChoixDeclaration(self.selected_annee);
            }
            else {
                if (self.mode_saisie == 'EXCEL')
                    historiqueService.goToUploadExcel(self.selected_declaration_id, self.selected_annee);
                else {
                    if (self.type_declaration == 'FORFAIT') {
                        historiqueService.goToDelarationForfait(self.selected_annee);
                    }
                    else {
                        if (self.type_declaration == 'UVC') {
                            historiqueService.CreateDeclarationUvcWeb(self.user.numero_client, self.user.id_declarant, self.selected_annee,true, self.selected_motif, self.commentaire).then(function (response) {
                                console.log('submit - ok : ' + JSON.stringify(response));
                                historiqueService.goToDeclarationWeb(response.data, self.selected_annee, 'uvc', true, self.selected_motif, self.commentaire);
                            }, function (reason) {
                                console.error('submit - error : ' + JSON.stringify(reason));
                            }).finally(function () { });
                        }
                        else //sect,detail
                        historiqueService.goToDeclarationWeb(self.selected_declaration_id, self.selected_annee, self.type_declaration, 1, self.selected_motif, self.commentaire);
                    }
                }
            }
        }
    }
    this.annuleModal = function() {
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
		self.suppresion_ok=false;
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
			self.mode_saisie=null;
			self.suppresion_ok=false;
			console.log('closeModalSuppression');
			historiqueService.getHistoriqueDeclaration(self.user.numero_client, 'page').then(function (response) {
				   self.listdeclarations = response.data;
			 });
			historiqueService.getMotifsCorrective().then(function (response) {
				self.motifs_corrective = response.data;
				console.log('getMotifsCorrective - ok');
			}, function (reason) {
				console.error('getMotifsCorrective - error : ' + JSON.stringify(reason));
			}).finally(function () { });
	};
	
	
    this.GetLienTelechargement = function (TypeDecla, Annee) {
        if (TypeDecla == 'UVC')
            historiqueService.GetLienTelechargementUVC(self.user.numero_client, Annee);
            else
                historiqueService.GetLienTelechargementSectDetail(TypeDecla, Annee);
    }
    this.GetLienFinalisationUvc = function (Statut, IdDeclaration, ModeSaisie, Etape) {
        var url;
        console.log('ModeSaisie,etape:' + ModeSaisie + '-' + Etape)
        if (ModeSaisie == 'EXCEL') {
            
            if (Statut == 'EN_COURS') {
                if (typeof Etape != 'undefined' && Etape == 4)
                    url = "/mon-espace/declaration/excel/uvc/#?id_dec=" + IdDeclaration + "&action=control_ecart";
                else
                    url = "/mon-espace/declaration/excel/uvc/#?id_dec=" + IdDeclaration + "&action=ajout_destinataire"; 
            }
            else
                if (Statut == 'INITIALISEE')
                    url = "/mon-espace/declaration/excel/uvc/#?id_dec=" + IdDeclaration + "&action=completer";
        }
        else//web
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
    }
    this.GetLienFinalisationSectDetail = function (TypeDecla, ModeSaisie, Annee) {
        //à vérifier
        historiqueService.postDeclarationWebSectDetail(Annee, TypeDecla, 0, '', '').then(function (response) {
        }, function (reason) {
            alert('GetLienFinalisationSectDetail - error : ' + Annee + ',' + TypeDecla);
        })
    }
    this.GetLienFinalisationForfait = function (IdDeclaration, Annee, Etape) {
        historiqueService.GetLienFinalisationForfait(IdDeclaration, Annee, Etape);
    }
    self.annee_excel = '';
    self.langue_excel = '';
    self.eco_langue = '';
    this.ModifierModeSaisie = function (id, annee, type, mode_saisie) {
        self.selected_declaration_id = id;
        self.selected_annee = annee;
        self.type_declaration = type.toLowerCase();
        self.mode_saisie = mode_saisie;

        self.modal_instance = $uibModal.open({
            template: require('./ModeSaisieModal.html'),
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
            }).finally(function () { });

            historiqueService.getFichierExcelUvc(self.annee_excel, self.langue_excel, self.user.numero_client);
        }
        else {
            console.log('excel ' + self.type_declaration);
            self.eco_langue = 'FR';
            if (self.langue_excel == 'anglais')
                self.eco_langue = 'EN';
            historiqueService.getTemplateExcelSectDetail(self.selected_annee, self.type_declaration, self.annee_excel, self.eco_langue);
        };
    };
    this.GoToDelarationEnLigne = function () { 
        if (self.selected_motif != null)
            self.flag_corrective = 1;
        else self.flag_corrective = 0;
         
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
                }).finally(function () { });
            }
            else historiqueService.goToDeclarationWeb('', self.selected_annee, self.type_declaration, self.flag_corrective, self.selected_motif, self.commentaire);
        }
    };
};