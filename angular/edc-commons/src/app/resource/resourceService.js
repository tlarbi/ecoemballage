
module.exports = function($http) {

    var urlCheckEmail = '/PortailApp/utilisateurs/exists';
    var urlCheckSiret = '/PortailApp/AdhesionSimplifiee/{siret}';
    var urlCheckCode = '/PortailApp/adhesionsimplifiee/ckeckcode';

    this.checkIfEmailExist = function(email) {

        return $http({
            method: 'GET',
            url: urlCheckEmail,
            params: {email: email}
        });
    }

    this.checkIfSiretExist = function(siret) {

        return $http({
            method: 'GET',
            url: urlCheckSiret.replace('{siret}', siret)
        });
    }

    this.checkCodeValidity = function(form) {

        return $http({
            method: 'POST',
            url: urlCheckCode,
            data: form
        });
    }

    return this;
}
