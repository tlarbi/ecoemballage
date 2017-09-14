module.exports = function (widgetuploadService, $location, $uibModal, $scope,$document, $userService) {
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

            if (/*parentNode2 && */self.AnneesContractualisation < annee_en_cours) {
                console.log('$onInit _ promise : display block-bloc-6-declaration-depot-fichier-excel');
                //parentNode2.style = 'display:block!important';
                //parentNode2.css('display', 'block!important');
                //var elem = angular.element(document.querySelector("#block-bloc-6-declaration-depot-fichier-excel"))[0];
                
                var elem = document.getElementById(BLOC_ID);
                if(elem)
                    elem.style.cssText = "display: block !important";
                console.log(elem);
            }
            else {
                console.log('$onInit _ promise : hidde block-bloc-6-declaration-depot-fichier-excel');
            }
        }, function (reason) {
            console.error("$onInit _ promise : error", reason);
        }).finally(function () { });
    };
};
