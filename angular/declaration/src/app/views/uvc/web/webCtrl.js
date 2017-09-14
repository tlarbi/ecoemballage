module.exports = function (webService, $uibModal, $filter, $location, $scope) {

    var self = this;
    self.error = false;

    self.search_field = '';
    self.sort_field = 'date';//date
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
        if (typeof self.id_declaration == 'undefined')
            self.id_declaration = '';
        else {
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
            }).finally(function () { });
            
        }
    }
     
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
            if (!self.valide) {//uvc en cours
                self.page_index = response.data.page - 1;
                console.log('response.data.uvc_en_cours', response.data.uvc_en_cours);
                for (var i = 0, iLen = response.data.lignes_uvc.length; i < iLen; i++) {

                    if (response.data.lignes_uvc[i].LigneDeclarationId == response.data.id_uvc_en_cours)
                        self.selectedUVC = response.data.lignes_uvc[i];
                }
                console.log('self.selectedUVC', self.selectedUVC);
                self.uvc = angular.copy(self.selectedUVC);

                //self.selectUvc(uvc);
                self.vue = 'ecriture'; 
            } else {
                if (response.data.lignes_uvc.length > 0) {
                    self.selectedUVC = response.data.lignes_uvc[0]
                    self.uvc = angular.copy(self.selectedUVC);
                    self.vue = 'lecture';
                }
            }
        }, function (reason) {
            console.error('getListUVC_firstLoad - error : ' + JSON.stringify(reason));
        }).finally(function () { });
    }
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
        }).finally(function () { });
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
        }).finally(function () { });
    
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
            this.Alert();//("Vous avez une uvc en cours, veuillez la valider!");
        }
        else {
            self.vue = 'ecriture';
            webService.AddUvcWeb(self.id_declaration).then(function (response) {
                self.sort_field = 'date';
                self.search_field = '';//tri par defaut,date_creation
                self.getlistUvc(response.data, true);//select last page
                //self.valide = false;
                console.log('AddUvc - ok');
            }, function (reason) {
                console.error('AddUvc - error : ' + JSON.stringify(reason));
            }).finally(function () { });
        }
    };

    self.copyUvc = function (id) {
        if (!self.valide) {
            alert($filter("translate")('errors.declaration.UVC_ENCOURS') );
        }
        else {
            self.vue = 'ecriture';
            webService.copyUvcService(id).then(function (response) {
                self.sort_field = 'date';
                self.search_field = '';//tri par defaut,date_creation
                self.getlistUvc(response.data, true);//select last page
                //self.valide = false;
                console.log('copyUvc - ok');
            }, function (reason) {
                console.error('copyUvc - error : ' + JSON.stringify(reason));
            }).finally(function () { });
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
                if (index == 0 && self.listUvc.length == 1 && self.page_index > 0)
                    self.page_index = self.page_index - 1;
                self.getlistUvc(null, false);
            }, function (reason) {
            }).finally(function () { });
       
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
    }).finally(function () { });



    this.openModal = function () {
        self.modal_instance = $uibModal.open({
            template: require('./ProduitsModal.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    }
    this.closeModal = function () {
        self.code_produit_tmp = '';
        self.modal_instance.close();
    };
    this.openDeleteModal = function () {
        self.modal_instance = $uibModal.open({
            template: require('./ConfirmationModal.html'),
            scope: $scope,
            backdrop: 'static',
            animation :false,
            keyboard: false
        });
    }
    this.Alert = function () {
        self.modal_instance = $uibModal.open({
            template: require('./Alert.html'),
            scope: $scope,
            backdrop: 'static',
            animation: false,
            keyboard: false
        });
    }
    this.setProduit = function () {
        self.uvc.ProduitId = self.code_produit_tmp;
        self.code_produit_tmp = '';
        self.modal_instance.close()
    };
    this.CalculerNbBobinesAlimentaire = function () {
        if (self.uvc.Spec && (self.uvc.ProduitId == '150000' || self.uvc.ProduitId == '160000')/* && self.uvc_web_form_id.produits_spec_valide.$valid*/) {
            webService.CalculerNbBobinesAlimentaire(self.uvc).then(function (response) {
                self.uvc.NbUvcEmballMenagers = response.data.NbUvcEmballMenagers;
                //self.uvc.NbUvcEmballNonMenagers = response.data.NbUvcEmballNonMenagers;
                console.log('CalculerNbBobinesAlimentaire:', response.data);
            }, function (reason) {
                console.error('CalculerNbBobinesAlimentaire - error : ' + JSON.stringify(reason));
            }).finally(function () { });
        }
    }
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
                self.uvc.ContribUnitTotale = response.data.Contribution_Untaire_Totale_ligne
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
            }).finally(function () { });
        }
        else {
            var el = document.querySelector('div.uvc_form');
            el.scrollTop = 0;
            self.erreurs = true;
        }
    };
    this.goBack = function () {
        webService.goBack();
    }
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
        }).finally(function () { });
    }
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
            Valider: false,
        };
        self.selectedUVC = undefined;
        self.vue = 'ecriture'; 
        self.submitted = false;
        //console.log('uvc_web_form_id.uvc_libelle.$touched:',self.uvc_web_form_id.uvc_libelle.$touched);
        self.uvc_web_form_id.uvc_libelle.$setUntouched();
        //console.log('uvc_web_form_id.uvc_libelle.$touched:', self.uvc_web_form_id.uvc_libelle.$touched);
    }
    this.hideExposant = function (val) { 
        if (self.uvc == undefined || val == '' || val == null)
            return true;
        else return false;
    }
     
    this.Continue = function () {
        webService.ValidateDeclaWeb(self.id_declaration).then(function (response) {
            webService.goToMarquesSocietes(self.id_declaration);
        }, function (reason) {
        }).finally(function () { });
    }
    
    this.list_bonus_reduction = [
        //{ id: "", libelle: $filter("translate")('bonus_reduction.0') },
        { id: 1, libelle: $filter("translate")('bonus_reduction.1') },
        { id: 4, libelle: $filter("translate")('bonus_reduction.4') },
        { id: 5, libelle: $filter("translate")('bonus_reduction.5') },
        { id: 6, libelle: $filter("translate")('bonus_reduction.6') },
        { id: 61, libelle: $filter("translate")('bonus_reduction.61') },
        { id: 64, libelle: $filter("translate")('bonus_reduction.64') },
        { id: 65, libelle: $filter("translate")('bonus_reduction.65') },
        { id: 66, libelle: $filter("translate")('bonus_reduction.66') }
    ];
    this.list_bonus_sensibilisation = [
        //{ id: "", libelle: $filter("translate")('bonus_sensibilisation.0') },
        { id: 1, libelle: $filter("translate")('bonus_sensibilisation.1') },
        { id: 2, libelle: $filter("translate")('bonus_sensibilisation.2') },
        { id: 3, libelle: $filter("translate")('bonus_sensibilisation.3') },
        { id: 4, libelle: $filter("translate")('bonus_sensibilisation.4') },
        { id: 5, libelle: $filter("translate")('bonus_sensibilisation.5') },
        { id: 6, libelle: $filter("translate")('bonus_sensibilisation.6') },
        { id: 7, libelle: $filter("translate")('bonus_sensibilisation.7') }
    ];

    this.list_produits_spec = [
        { id: "130000", libelle: $filter("translate")('produits_spec.130000') },
        { id: "140000", libelle: $filter("translate")('produits_spec.140000') },
        { id: "150000", libelle: $filter("translate")('produits_spec.150000') },
        { id: "160000", libelle: $filter("translate")('produits_spec.160000') }
    ];
    this.MateriauxValide = function () {
        if (self.uvc != undefined)
            return (self.uvc.acier != '' && self.uvc.acier != 0 && self.uvc.acier != null)
            || (self.uvc.alum != '' && self.uvc.alum != 0 && self.uvc.alum != null)
            || (self.uvc.pcNonBriq != '' && self.uvc.pcNonBriq != 0 && self.uvc.pcNonBriq != null)
            || (self.uvc.briq != '' && self.uvc.briq != 0 && self.uvc.briq != null)
            || (self.uvc.autrePlas != '' && self.uvc.autrePlas != 0 && self.uvc.autrePlas != null)
            || (self.uvc.flacon != '' && self.uvc.flacon != 0 && self.uvc.flacon != null)
            || (self.uvc.petClair != '' && self.uvc.petClair != 0 && self.uvc.petClair != null)
            || (self.uvc.verre != '' && self.uvc.verre != 0 && self.uvc.verre != null)
            || (self.uvc.autre != '' && self.uvc.autre != 0 && self.uvc.autre != null) 
            || (self.orgaCommerciale == 'adelphe' && self.uvc.Bois!= '' && self.uvc.Bois != 0 && self.uvc.Bois != null)
            || (self.orgaCommerciale == 'adelphe' && self.uvc.Textile != '' && self.uvc.Textile != 0 && self.uvc.Textile != null);

        else return false;
    }
    this.ProduitSpecValide = function () { 
        if (self.uvc != undefined && (self.uvc.ProduitId == '150000' || self.uvc.ProduitId == '160000')) { 
            var nb_produits=0;
            
            if (self.uvc.alum != '' && self.uvc.alum != 0 && self.uvc.alum != null) nb_produits++;
            if (self.uvc.pcNonBriq != '' && self.uvc.pcNonBriq != 0 && self.uvc.pcNonBriq != null) nb_produits++; 
            if (self.uvc.autrePlas != '' && self.uvc.autrePlas != 0 && self.uvc.autrePlas != null) nb_produits++;
           
            //console.log('nb_produits:', nb_produits);
            if (nb_produits > 1) {
                self.ProduitSpecError = '1';// 'un seul matériau peut être renseigné avec ce code produit';
                return false;
            } else {
                if (nb_produits == 0) {
                    self.ProduitSpecError = '2';// "Aucun matériau de type 'papier-carton autre que brique', 'autres emballages plastique' et 'aluminium' n'est renseigné avec ce code produit";
                    return false;
                } else {
                    if ((self.uvc.acier != '' && self.uvc.acier != 0 && self.uvc.acier != null) || (self.uvc.acier != '' && self.uvc.acier != 0 && self.uvc.acier != null)
                        || (self.uvc.briq != '' && self.uvc.briq != 0 && self.uvc.briq != null) || (self.uvc.flacon != '' && self.uvc.flacon != 0 && self.uvc.flacon != null)
                        || (self.uvc.petClair != '' && self.uvc.petClair != 0 && self.uvc.petClair != null) || (self.uvc.verre != '' && self.uvc.verre != 0 && self.uvc.verre != null)
                        || (self.orgaCommerciale == 'adelphe' && self.uvc.Bois != '' && self.uvc.Bois != 0 && self.uvc.Bois != null)
                        || (self.orgaCommerciale == 'adelphe' && self.uvc.Textile != '' && self.uvc.Textile != 0 && self.uvc.Textile != null)) {
                        self.ProduitSpecError = '3';// "Vous ne pouvez pas renseigner un matériau autre que 'papier-carton autre que brique, autres emballages plastique et aluminium' avec ce code produit";
                        return false;
                    }
                    else return true;
                }
            }
        }
        else return true;
    }
  
    this.ShowMateriauPreview = function (materiau) {
        console.log('materiau:', materiau);
            console.log('ShowMateriauPreview:', self.uvc != undefined && materiau != '' && materiau != 0 && materiau != null);
        return self.uvc != undefined && materiau != '' && materiau != 0 && materiau != null;
    }
};