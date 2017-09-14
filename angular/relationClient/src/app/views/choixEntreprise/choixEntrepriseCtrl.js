module.exports = function(choixEntrepriseService) {
    
    var _self = this;
    
    this.$onInit = function() {
        
        _self.userInfo = choixEntrepriseService.getUserInfo();
        _self.clients = choixEntrepriseService.getClients();
        
        console.log('lise de clients : ', _self.clients);
        
        if(_self.clients == 'undefined')
            _self.clients = [];
        
        _self.research = ''; // data binding avec la vue 
        
        console.log('user info : ', _self.userInfo);
    }
    
    //FILTRE DE RECHERCHE ENTREPRISE
    this.checkMatching = function(client) {
        
        var research = _self.research.replace(/\*/g,'\\*');
        var researchRegEx;
        console.log('research field', research);
        if(angular.isDefined(client.idSAP) && angular.isDefined(client.libelle)) {
            
            try {
                researchRegEx = new RegExp(research, "i");
                
            }catch(e){
                
                console.log('invalid regEx');
                researchRegEx = /^$/;
                
            }finally{
                //console.log('reg ex : ', researchRegEx);
                return (researchRegEx.test(client.idSAP) || researchRegEx.test(client.libelle));
            }
            
            
            
        }
        
    }
    
    this.goHome = function(client) {
        
        choixEntrepriseService.goHome(client);
    }
    
    this.addClientAccount = function() {
        
        console.log('choix entreprise controller method');
        
        choixEntrepriseService.addClient().then(function(){
            
            console.log('test add client promise : resolved');
            _self.clients = choixEntrepriseService.getClients();
        }, function(){
            
            console.log('test add client promise : rejected');
        });
    }
}