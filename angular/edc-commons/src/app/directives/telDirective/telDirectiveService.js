module.exports = function($http) {

    // default tel RegEx if RexEx is wrong or regEx is not setted
    const defaultelRegEx = /^(\+[1-9]{3}|0[1-9])([\s]?\d{2}){4}$/;

    // Validation de l'expression régulière
    this.initialize = function(telRegEx) {

        console.log('in initialize function', telRegEx);
        if(angular.isDefined(telRegEx)) {
            try {
                ''.match(telRegEx);
                console.log('valid tel regEx');
                return telRegEx;
            }
            catch(err) {
                console.log('invalid tel regEx');
                return defaultelRegEx;
            }
        }
        else {
            console.log('no tel regEx set');
            return defaultelRegEx;
        }
    }

    this.checkValidity = function(tel, telRegEx) {
        //console.log('test tel validity : ', tel);
        return (tel=='' || angular.isUndefined(tel) || telRegEx.test(tel));
    }

    return this;
}
