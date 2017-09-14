/*
        * getUser( )
renvoie l'objet utilisateur stocké en session l'objet utilisateur contient pour le moment les champs suivants 
{lastName, firstName, civility, idSAP, idSF, idCorrespondent}

la méthode add(key, value) est toujours présente pour pouvoir faire vos tests il faut enregistrer l'objet utilisateur sous la clé userInfo

n'oubliez pas de builder le projet edc-common pour que le nouveau service soit pris en compte.
 this.userInfo = {
        lastName : "hamid",
        firstName : "altintop",
        civility : "M",
        idSF : "HGY456FDRET",
        idSAP : "GHJYT6565DFG",
        idCorrespondent : "GHTRDSKIYOIE"
    }
        */

module.exports = function (compteWebResource, userService) {

    var _self = this;
    
    this.$onInit = function(){
        
        var orga = userService.getOrgaCommerciale();
        
        console.log('accueil portail orga : ', orga);
        
        if(orga=='adelphe'){
            _self.urlNavigation = 'http://www.adelphe.fr/entreprises/outils-et-services';
            _self.adelpheContextFlag = true;
        }    
        else{
            _self.urlNavigation = 'http://www.ecoemballages.fr/bienvenue-dans-votre-espace-entreprises';
            _self.adelpheContextFlag = false;
        }
            
    }
    
    this.LastNameFirstName = "";//userService.getLastName();//userService.getLastName();
    this.civility = "";//userService.getCivility(); //userService.getCivility();
    this.sFid = userService.getUserIdSF();//userService.getUserIdSF();


    compteWebResource.getCorrespondants(_self.sFid, 'PRINCIPAL').then(function (response) {
        console.log("Accueil Portail Ctrl : get principal from id : success ", response);
        
                
        _self.LastNameFirstName = response.data[0].FirstName + " " + response.data[0].LastName;
        _self.civility = response.data[0].civility;
        console.log("last first civility ", response.data[0].FirstName);

    }, function (response) {
        console.log("Accueil Portail Ctrl : get principal from id : failure");        
    });


    this.submit = function () {
        
        console.log("acceuilPortail  Ctrl : entering submit function");
               
        window.location = "/mon-espace/mon-compte";

       
    };

};