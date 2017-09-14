module.exports = function(resourceService, $q) {

    const SIRET_LENGTH = 14;

    this.isValidSiret = function(siret) {

        if(angular.isUndefined(siret) || !siret)
            return true;
        if(siret.length != SIRET_LENGTH)
            return false;

        var siretIntTab = [];

        for(var i=0, p=SIRET_LENGTH-1; i<SIRET_LENGTH; i++, p--) {

            siretIntTab[p] = parseInt(siret[i]);
            if(isNaN(siretIntTab[p])) {
                console.log('invalid format');
                return false;
            }
        }

        console.log('sirent Tab after life : ', siretIntTab);

        for(var i=0; i<SIRET_LENGTH; i++) {

            if((i+1)%2 == 0) {
                siretIntTab[i] *= 2;
                if(siretIntTab[i] > 9)
                    siretIntTab[i] -= 9;
            }
        }

        console.log('siret tab after transformation : ', siretIntTab);

        var sumOfValues = siretIntTab.reduce(function(a, b) {return a+b;});

        console.log('sum of values : ', sumOfValues);

        if(sumOfValues%10 == 0){
            console.log('siret control : valid');
            return true;
        } else {
            console.log('siret control : invalid');
            return false;
        }
    }

    this.checkSiret = function(siret)
    {
        return resourceService.checkIfSiretExist(siret).then(function(){
            return $q.reject('siret already exist');
        }, function(){
            return true;
        });
    }

    return this;
}
