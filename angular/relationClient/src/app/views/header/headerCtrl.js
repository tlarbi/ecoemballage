module.exports = function(headerService) {
    var _self = this;

    this.personalInfoUrl = "/mon-espace/mon-compte";
    this.companiesUrl = '/mon-espace/mon-compte/entreprises';
    //this.emailContact = "conseillers.entreprises@ecoemballages.fr";
    //this.myAccountUrl = '/mon-espace/mon-compte/coordonnees-entreprise';
    this.myAccountUrl = '/OldApp/Profil/EcdCoordEntreprise';
    this.homeUrl = '/';

    this.urlRestrictRegEx = /choix-entreprise/i;

    this.ecoContextFlag = false;
    this.adelpheContextFlag = false;

    this.$onInit = function() {

        //if(headerService.checkSession)
          //  headerService.restoreSession();

        headerService.checkSession().then(function(){

            _self.userInfo = headerService.getUserInfo();
            console.log('user info : ', _self.userInfo);

            console.log('orga ctrl : ',  headerService.getOrgaCommerciale());

            if(headerService.getOrgaCommerciale() == 'eco') {
                _self.ecoContextFlag = true;
                _self.emailContact = 'clients.emballages@citeo.com';
                _self.redirectionUrl = 'http://www.ecoemballages.fr/bienvenue-dans-votre-espace-entreprises';
            }
            else {
                _self.adelpheContextFlag = true;
                _self.emailContact = 'entreprises@adelphe.fr';
                _self.redirectionUrl = '/';
            }

            // sous menu a ne pas affficher pour les urls correspendantes
            _self.isNotRestrictedUrl = window.location.pathname.match(_self.urlRestrictRegEx) == null;


            //$scope.$digest();
        }, function(){

            console.log('page not found');
            _self.pageNotFoundFlag = true;
            var orgaRexEx = /(ecoemballages)|(ee\.e-fil)|(citeo)/;
            if(orgaRexEx.test(window.location.hostname)) {
                _self.ecoContextFlag = true;
                _self.emailContact = 'clients.emballages@citeo.com';
                _self.redirectionUrl = 'http://www.ecoemballages.fr/bienvenue-dans-votre-espace-entreprises';
            }
            else {
                _self.adelpheContextFlag = true;
                _self.emailContact = 'entreprises@adelphe.fr';
                _self.redirectionUrl = '/';
            }
        });

    }

    this.logout = function() {

        headerService.disconnect(_self.redirectionUrl);
    }

    this.route = function(url) {

        switch(url) {
            case 'personalInfo':
                window.location = _self.personalInfoUrl;
                break;
            case 'companies':
                window.location = _self.companiesUrl;
                break;
            case 'myAccount':
                window.location = _self.myAccountUrl;
                break;
            case 'home':
                if(_self.isNotRestrictedUrl)
                    window.location = _self.homeUrl;
                break;
        }
    }
}
