module.exports = function (choixdeclarationService, $uibModal, $scope, $location,$window) {
    var self = this;

    self.typesDeclarationsTextes = [];
    self.choix = [];
    self.html=[];
    self.selected_type;
    self.type_declaration;
    self.modal_instance;

    self.annee_excel='';
    self.langue_excel='';
   
   

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
    if (self.annee >= 2016)
        self.nbuvc = 83;
    else self.nbuvc = 25;
     
     
    this.GetChoix = function () { 
        var converted_value = self.nbuvc;
        if (self.annee >= 2016) {
            if (self.nbuvc < 34)
                converted_value = 10000;
            else if (self.nbuvc > 33 && self.nbuvc < 67)
                converted_value = 500000;
            else converted_value = 500001;
        }
        else {
              if (self.nbuvc < 50)
                converted_value = 180000; 
            else converted_value = 180001;
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
                    type: response.data[index].field_type_decla[0].value/*,
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
        if (self.selected_motif != null)
            self.flag_corrective = 1;
        else self.flag_corrective = 0;


        if (self.selected_type == 'forfait') {
            choixdeclarationService.goToDelarationForfait(self.annee);
        } else {
            // 'sectorielle','detaillee','uvc'
            if (self.selected_type == 'uvc') {
                choixdeclarationService.CreateDeclarationUvcWeb(self.user.numero_client, self.user.id_declarant, self.annee, self.flag_corrective==1?true:false, self.selected_motif, self.commentaire).then(function (response) {
                    console.log('submit - ok : ' + JSON.stringify(response));
                    choixdeclarationService.goToDeclarationWeb(response.data,self.annee, self.selected_type, self.flag_corrective, self.selected_motif, self.commentaire);
                }, function (reason) {
                    console.error('submit - error : ' + JSON.stringify(reason));
                }).finally(function () { });
              
            }
            else choixdeclarationService.goToDeclarationWeb('', self.annee, self.selected_type, self.flag_corrective, self.selected_motif, self.commentaire);
        }
    };
    

    this.getTypeDeclarationParId = function (type) {
        
        for (i = 0; i < self.typesDeclarationsTextes.length; i++) {
            if (self.typesDeclarationsTextes[i].type == type /*&& self.langue == self.typesDeclarationsTextes[i].langue*/)
                return self.typesDeclarationsTextes[i];
        }
    };

    this.valideChoixDeclaration = function () {
        console.log('valideChoixDeclaration', self.vue,',', self.selected_type);
        if (self.selected_type != 'forfait') {
            self.modal_instance = $uibModal.open({
                template: require('./myModalSaisi.html'),
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
                template: require('./optionexcel.html'),
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
            }).finally(function () { });

            choixdeclarationService.getFichierExcelUvc(self.annee_excel, self.langue_excel, self.user.numero_client);
        } 
        else {
            console.log('excel ' + self.selected_type);
            self.eco_langue = 'FR';
            if (self.langue_excel == 'anglais')
                self.eco_langue = 'EN';
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






 

