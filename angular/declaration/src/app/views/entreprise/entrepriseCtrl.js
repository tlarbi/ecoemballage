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
    self.submitted ;
    self.msgErreurForMarque ;
    self.msgErreurForEntreprise;
    self.msgerreursiret;
    
    self.step = '';// 'entreprises_marques';

    self.loading = true;

    self.controleEcart = false;

    this.$onInit = function () {

        self.id_declaration = $location.search().id_declaration;
        self.action = $location.search().action;

        if (typeof self.id_declaration == 'undefined')
            self.id_declaration = '';
        if (typeof self.action == 'undefined')
            self.action = 'control_ecart';
         
 
        entrepriseService.getRecap(self.id_declaration).then(function (response) {
            self.RecapDeclaration = response.data;
            //vérifier le controle ecart
            if (self.action == 'control_ecart') {
                entrepriseService.getControleEcart(self.RecapDeclaration.IdDeclaration).then(function (response) {
                    console.log('retour getControleEcart', response)
                    if (response.data == "OK") {
                        self.step = "controle_ecart";
                        self.controleEcart = true;
                    } else self.step = 'entreprises_marques';
                },
                function (reason) { self.step = 'entreprises_marques'; })
                    .finally(function () { self.loading = false; });
            } else self.step = 'entreprises_marques';
        }, function (reason) {
            //console.error('getRecap - error : ' + JSON.stringify(reason));
        }).finally(function () { self.loading = false; });

        // retourne liste des entreprises
        entrepriseService.getListEntreprise(self.id_declaration).then(function (response) {
 
            console.log("mesentreprisesinbd :", response.data);
          
            self.entreprises = response.data;
            if (self.entreprises.length>0)
                self.choix = true;
            
            console.log(self.entreprises);
        }, function (reason) {
            console.error('mesentreprisesinbd - error : ' + JSON.stringify(reason));
        }).finally(function () { });

        entrepriseService.getListMarque(self.id_declaration).then(function (response) {
            console.log("getListMarque :", response.data);
            self.marques = response.data;
            if (self.marques.length>0)
                self.choixmarque = true;

            console.log(self.marques);
        }, function (reason) {
            console.error('getListMarque - error : ' + JSON.stringify(reason));
        }).finally(function () { });

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
        }).finally(function () { });
    };

    this.valideEnregistrement = function () { 
        if (self.modal_instance)
            self.modal_instance.close();
   
            self.modal_instance = $uibModal.open({
            template: require('./confirmation.html'),
            scope: $scope,
            backdrop: 'static',
            keyboard: false
        });
    };

    this.closeModal = function () {
        self.modal_instance.close() 
    };

    this.hideExposant = function (val) {
        if (val == '' || val == null)
            return true;
        else return false;
    }

    this.SaveWithoutAdd = function() {
        if (self.entrepriseinput.nom != '' && self.entrepriseinput.pays !='' ) {
             this.addEntreprise();
                if (self.entreprises.length>0) {
                    this.Save(true);
                    }
        }

         if (self.marqueinput!= '' ) {
             this.addMarque();
                if (self.marques.length>0) {
                    this.Save(true);
                    }
        }
    };

    this.SaveWithoutAddfalse = function() {

        if (self.entrepriseinput.nom != '' && self.entrepriseinput.pays !='' ) {
             this.addEntreprise();
                if (self.entreprises.length>0) {
                    this.Save(false);
                    }
        }

         if (self.marqueinput!= '' ) {
             this.addMarque();
                if (self.marques.length>0) {
                    this.Save(false);
                    }
        }
    };
   
    this.submitFromOutSide = function(form){
        
        if (self.entrepriseinput.nom != '' && self.entrepriseinput.pays != '') {
                this.SaveWithoutAdd();      
        }
        else {
            if (self.entrepriseinput.nom == '' && self.entrepriseinput.pays == '')
                    this.Save(true);
             
            else self.submitted = true;
            }
   
    };

    this.Save= function (etape_suivante) {
        entrepriseService.SaveSocietesMarques(self.id_declaration, self.entreprises, self.marques, etape_suivante).then(function (response) {
        
            if (etape_suivante)
                entrepriseService.goToValidationDecWeb(self.id_declaration);
           
         }, function (reason) {
             //console.error('Save - error : ' + JSON.stringify(reason));
         }).finally(function () { });
     };
    
    this.goToDeclarationUvcWeb = function () {
        entrepriseService.goToDeclarationUvcWeb(self.id_declaration);
    }
    this.goBack = function () {
        if (self.controleEcart)
            self.step = "controle_ecart";
        else 
            entrepriseService.goBack();
    };

    function inArray(elem, array) {
        var len = array.length;
        for (var i = 0 ; i < len; i++) {
            if (array[i] == elem) { return i; }
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
        if (this.inArrayMarque(self.marqueinput, self.marques)==-1) {
            self.marques.push(self.marqueinput);
            self.marqueinput = '';
            self.msgErreurForMarque = false;
        } else
        self.msgErreurForMarque = true;
    };

    this.addEntreprise = function () {
        if (this.inArrayEntreprise(self.entrepriseinput,self.entreprises)==-1) {
            self.entreprises.push(self.entrepriseinput);
            self.entrepriseinput = {
            nom: '',
            siret: '',
            pays: ''
            };
            self.msgErreurForEntreprise = false; 
        } else
        self.msgErreurForEntreprise = true;
    };

    this.inArrayMarque = function (elem, array) {
        var len = array.length;
        for (var i = 0 ; i < len; i++) {
            if (array[i] == elem) { return i; }
        }
        return -1;
    };

    this.inArrayEntreprise = function (elem, array) {
        var len = array.length;
        self.tab2=[];
        angular.copy(array, self.tab2);
        console.log("tab2:",self.tab2);
        for (var i = 0 ; i < len; i++) {
            if(JSON.stringify(self.tab2[i]) == JSON.stringify(elem)) {return i;}
            console.log("mon tab",self.tab2[i]);
            console.log("element ",elem);
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
