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

            console.log("condit 1", _self.annee_en_cours == _self.AnneesContractualisation)


        }, function (reason) {

        }).finally(function () { });


        _self.listdeclarations = [];
        _self.url_historique = historique_widgetService.getUrl_historique_declaration;
        historique_widgetService.getHistoriqueDeclaration(historique_widgetService.getNumeroClient(), 'widget').then(function (response) {

        _self.listdeclarations = response.data;  

             });



    };



};