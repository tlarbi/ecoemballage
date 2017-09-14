module.exports = function(adhesionContractService, userService, $location){

    var fileName = 'contrat.pdf';
    var _self = this;
    this.$onInit = function(){

        console.log('contract adhesion url params : ', $location.search());
        var token = $location.search().f;
        var language = userService.getLanguage();
        console.log('contract adhesion language : ', language);
        adhesionContractService.getContract(language, token).then(function() {
            if(adhesionContractService.contractFile)
                openFile();
        });
    }

    var openFile = function() {

        if (window.navigator.msSaveOrOpenBlob)
           navigator.msSaveOrOpenBlob(adhesionContractService.contractFile, fileName);
        else {
            var fileURL = window.URL.createObjectURL(adhesionContractService.contractFile);
            var view = document.createElement('a');
            view.href = fileURL;
            //view.target = '_blank';
            //view.view = fileName;
            //view.download = 'test.pdf'
            document.body.appendChild(view);
            console.log('genrated file link : ', view);
            view.click();
        }
    }
}
