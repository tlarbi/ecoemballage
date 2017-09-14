function accueil_declarationService(declarationResource, userService) {
    var self = this;

    const DECLARATION_TO_DO = 'declaration a faire';
    const DECLARATION_DONE = 'pas de declaration a faire';

    self.getAnneeDeclarationAsaisir = declarationResource.getAnneeDeclarationAsaisir;
    self.getAnneesContractualisation = declarationResource.getAnneesContractualisation;

    self.user = {
        numero_client: undefined,
        id_declarant: undefined,
        id_SF: undefined
    }

    this.getUserInfo = function () {
        self.user.numero_client = userService.getUserIdSAP();
        self.user.id_declarant = userService.getUserIdCorrespondent();
        self.user.id_SF = userService.getUserIdSF();
        return self.user;
    }

    this.getNumeroClient = function () {
        return /*'GHJYT6565DFG';*/userService.getUserIdSAP();
    }

    this.getDeclarationBloc = function () {

        console.log("Service initialisation status declaration");
        return declarationResource.getDeclarationStatus().then(function (response) {

            var language = userService.getLanguage();
            console.log('success : ', response);

            //var arrayDeclaToDo = response.data.find(getValue, { lang: language, declarationStatus: DECLARATION_TO_DO });
            //var arrayDeclaDone = response.data.find(getValue, { lang: language, declarationStatus: DECLARATION_DONE });
            var arrayDeclaToDo = userService.searchInArray(response.data, getValue, { lang: language, declarationStatus: DECLARATION_TO_DO });
            var arrayDeclaDone = userService.searchInArray(response.data, getValue, { lang: language, declarationStatus: DECLARATION_DONE });
            //console.log('testing find decla to do: ', arrayDeclaToDo);
            //console.log('testing find decla done: ', arrayDeclaDone);

            self.declarationBloc = arrayDeclaToDo.body[0].value;
            self.notDeclarationBloc = arrayDeclaDone.body[0].value;

            console.log('declaration : ', self.declarationBloc);
            console.log('pas de declaration : ', self.notDeclarationBloc);

        }, function (response) {

            console.log('failure : ', response);
        });
    }

    var getValue = function (data) {

        //console.log('data value : ', data);
        //console.log('this value : ', this);

        return data.langcode[0].value == this.lang && data.title[0].value == this.declarationStatus;
    }
    return self;
}



module.exports = accueil_declarationService;