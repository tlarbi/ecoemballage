module.exports = function (controleecartService, $location,$uibModal,$filter, $scope, $userService) {
    var self = this;

    self.motifs = '';

    self.commentaire= '';
    self.selected_motif = '';

    self.modal_instance;
    
    self.user = controleecartService.getUserInfo();

    self.form_submitted;
    
    self.id_dec = $location.search().id_dec;
    if (typeof self.id_dec == 'undefined')
        self.id_dec = $location.search().id_declaration;//on n'utilise pas toujour le même paramètre dans l'url
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
            }, function (reason) {
               
            }).finally(function () { });
           if (typeof self.id_dec != 'undefined' && typeof self.action != 'undefined' && self.action == 'control_ecart') {
               controleecartService.getMotifCommentaireControleEcart(self.id_dec).then(function (response) {
                   console.log('getMotifCommentaireControleEcart ok:', response.data);
                   self.selected_motif = response.data.motif;
                   self.commentaire = response.data.commentaire;
               }, function (reason) {
                   console.error('erreur getMotifCommentaireControleEcart:', reason)
               }).finally(function () { });
           }
    };


    this.SendCommentaire = function (go_to_next_step) {
        controleecartService.SendCommentaire(self.declarationid, self.commentaire, go_to_next_step, self.selected_motif).then(function (response) {
        console.log('retour ....',response);
     
            console.log('submit - ok : ' + JSON.stringify(response));
            self.status_code = 200;
        }, function (reason) {
            console.error('submit - error : ' + JSON.stringify(reason));
        }).finally(function () { });
    };

    this.submit_commentaire = function (form) {       
        self.form_submitted = true
        if(form.$valid){
           
          this.SendCommentaire(true);
          self.commentaire= '';
          this.onvalidate();
          

        }     
    }

    this.submit_commentaireSave = function (form) {       
        self.form_submitted = true
        if(form.$valid){ 
          this.SendCommentaire(false);
          //self.commentaire= '';
          //this.onvalidate();
          this.valideEnregistrement();

        }     
    }

    this.goBack = function () {
        this.onback();
        /*controleecartService.goBack();*/
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
        self.modal_instance.close();
    };

  


};

