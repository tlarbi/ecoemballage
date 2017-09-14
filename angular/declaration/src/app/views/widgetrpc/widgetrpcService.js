function widgetrpcService(declarationResource, userService, $q) {
    
    
    const VALID_STATUS = 'VALIDEE';
    const AMOUNT_MAX = 60000;
    const IN_PROGRESS = 1;
    const DONE = 2;
    
    var _self = this;
    var idClient = userService.getUserIdSAP();
    
    
    this.checkRPC = function() {
        
        var defered = $q.defer();
        declarationResource.getHistoriqueDeclaration(idClient, 'page').then(function (response) {
            
            var year = new Date().getFullYear() - 1;
            
            //_self.lastDeclaration = response.data.find(function(data){return data.Annee == year && data.Statut == VALID_STATUS}); 
            _self.lastDeclaration = userService.searchInArray(response.data, function(data){return data.Annee == year && data.Statut == VALID_STATUS});
            console.log("declaration historique : ", response, _self.lastDeclaration, year);
            
            declarationResource.getRpcs(idClient).then(function(response) {
                
                var listRpc = response.data;
                console.log('get rpcs success : ', listRpc);
                _self.runRpcFlag = verifydataForRpc(_self.lastDeclaration, listRpc);
                console.log('rpc widget Service flag : ', _self.runRpcFlag);
                
                
            }, function(response) {
                
                _self.runRpcFlag = false;
                console.log('get rpcs failure : ', response);
                
            }).finally(function() {
            defered.resolve();
        });;
            
        }, function (response) {
            
            _self.runRpcFlag = false;
            console.log('get declaration historique failure : ', response);
            defered.resolve();
        });
        
        return defered.promise;
    }
    
    
    
    
    var verifydataForRpc = function(declaration, rpcList) {
        
        console.log('in verify data for rpc function : ', declaration, rpcList);
        console.log('valid status : ', VALID_STATUS, 'montant max : ',AMOUNT_MAX);
        
        if(!declaration || declaration.ContributionTotale < AMOUNT_MAX)
            return false;
        
        for (var i=0; i<rpcList.length; i++) {
            
            var rpc = rpcList[i];
            console.log('rpc value : ', rpc);
            if(rpc.Statut == IN_PROGRESS || rpc.Statut == DONE)
                return false;
        }
        
        return true;
    }
   
   
   
    _self.user = {
        numero_client: undefined,
        id_declarant:undefined,
        id_SF:undefined
    }

    this.getUserInfo = function () {
        _self.user.numero_client =userService.getUserIdSAP();
        _self.user.id_declarant = userService.getUserIdCorrespondent();
        _self.user.id_SF = userService.getUserIdSF();
        return _self.user;
    }

    return _self;
}


module.exports = widgetrpcService;
