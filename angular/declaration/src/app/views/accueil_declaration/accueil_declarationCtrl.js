module.exports = function (accueil_declarationService, $window, $userService) {

    var _self = this;
    _self.user = accueil_declarationService.getUserInfo();
    
    this.$onInit = function(){
        console.log("initialisation status declaration");
        
        accueil_declarationService.getDeclarationBloc().then(function(){
            
            _self.declarationBloc = accueil_declarationService.declarationBloc;
            _self.notDeclarationBloc = accueil_declarationService.notDeclarationBloc;
            
        });


        accueil_declarationService.getAnneesContractualisation(_self.user.numero_client).then(function (response) {
            _self.AnneesContractualisation = response.data;
            console.log("AnneesContractualisation :", _self.AnneesContractualisation);

        }, function (reason) {

        }).finally(function () { });

    }
    _self.annee;
    _self.isVisible = false;

    var d = new Date();
    var annee_en_cours = d.getFullYear();

    accueil_declarationService.getAnneeDeclarationAsaisir(accueil_declarationService.getNumeroClient()).then(function (response) {
     
        console.log("annee en cours:", annee_en_cours);

        console.log('getAnneeDeclarationAsaisir: ', response);
        _self.annee = response.data;
        if ((_self.annee != '') && (annee_en_cours != _self.AnneesContractualisation)) {

          _self.isVisible = true;
        }



    
    
    });

    _self.goToChoixDeclaration = function() { 
        var url = '/mon-espace/declaration/choix#?annee=' + _self.annee;
       
        $window.location.href = url;
     }; 
};