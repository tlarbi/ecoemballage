module.exports = function compteWeb($http, $window) {


    var _self = this;

    const HEADER_VALUE_FILE_NAME = 'file-name';
    const HEADER_VALUE_FILE_TYPE = 'file-content-type';

    // LISTE DES URI WEB SERVICES
    this.urlCheckMail = '/PortailApp/utilisateurs/exists';
    this.urlSubscribe = '/PortailApp/utilisateurs';
    this.urlLogIn = '/PortailApp/utilisateurs/login';
    this.urlCheckClientNumber = '/PortailApp/Clients/{idClientSF}/exists';

    this.urlGetPersonnalData = '/PortailApp/p/Utilisateurs/';
    this.urlUpdatePersonnalData = '/PortailApp/p/Utilisateurs/';

    this.urlGetPrincipalFromId = '/PortailApp/p/clients/{idCorrespondent}/correspondants';

    this.urlGetCorrespondants = '/PortailApp/p/clients/{idEntreprise}/correspondants';

    this.urlGetEntreprises = '/PortailApp/p/utilisateurs/{idUtilisateur}/clients';

    this.urlLogout = '/PortailApp/utilisateurs/logout';

    this.urlUpdateProfilesCorrespondants = '/PortailApp/p/clients/{idClient}/correspondants';

    this.urlRemoveCompanyFromCorrespondant = '/PortailApp/p/utilisateurs/{idCorrespondant}/clients/{idClient}';

    this.urlGetBusinessFunctions = '/PortailApp/utilisateurs/fonctions';

    this.urlCheckCompanyToAdd = '/PortailApp/clients/check';

    this.urlAddCompanyToUser = '/PortailApp/p/utilisateurs/clients';

    this.urlCheckRemovalRight = '/PortailApp/p/utilisateurs/{idCorrespondant}/clients/{idClient}/canremove';

    this.urlUpdatePassword = '/PortailApp/p/utilisateurs/password';

    this.urlGetCompanyInfo = '/PortailApp/Clients/{idClientSAP}';

    this.urlDrupalLogout = '/user/logout';

    this.urlResetPassword = '/PortailApp/utilisateurs/reset_password'

    this.urlGetFactures = '/PortailApp/p/Clients/{idClientSF}/factures';

    this.urlGetAttestation = '/PortailApp/p/Clients/{idClientSF}/attestation';

    this.urlGetContrat = '/PortailApp/p/Clients/{idClientSF}/contrat';

    this.urlGetContratFile = '/PortailApp/p/Clients/{idClientSF}/contratFile';

    this.urlDrupalRecheckRoles = '/mon-espace/recheck_roles';

    var urlDrupalRecheckLanguage = '/recheck_language';

    this.urlDrupalClearSession = '/clearSession';

    this.urlValidateUserPassword = '/PortailApp/p/utilisateurs/password/check';

    this.urlDeleteUserAccount = '/PortailApp/p/utilisateurs';

    this.urlCanDeleteAccount = '/PortailApp/p/utilisateurs/candelete';

    this.urlRestoreSession = '/PortailApp/utilisateurs/session/info';

    this.urlCheckSiret = '/PortailApp/AdhesionSimplifiee/{siret}';

    var urlAdhesion = '/PortailApp/adhesionsimplifiee';
    var urlGetAdhesionContract = '/PortailApp/adhesionsimplifiee/contrat';
    var urlGetAdhesionDelegate = '/PortailApp/adhesionsimplifiee/delegation';
    var urlSignAdhesion = '/PortailApp/adhesionsimplifiee/sign';
    var urlGetCountries = '/declarationApp/pays';
    var urlCheckCode = '/portailapp/adhesionsimplifiee/ckeckcode';
    var urlGetAdhesionFileAttachment = '/PortailApp/adhesionSimplifiee/fileAttachment';
    var urlGetRecontractualisation = '/PortailApp/AdhesionSimplifiee/Recontractualisation/{clientIdSF}/{clientIdSAP}';
    var urlAdhesionContract = '/PortailApp/adhesionsimplifiee/projetcontrat'

    this.urlGetDelegationFile = '/PortailApp/p/Clients/{idClientSF}/delegationFile';

    this.urlGetDelegation = '/PortailApp/p/Clients/{idClientSF}/delegation';

    this.urlConseillerGetUserInfo = '/PortailApp/p/utilisateur/conseiller';
    var urlConseillerGetUserCookie = '/PortailApp/p/utilisateur/conseillercookie'
    this.urlConseillerGetUserUid = '/PortailApp/p/utilisateur/conseiller/uid';


    // APPEL WEB SERVICE VERIFICATION EMAIL
    this.checkEmail = function(mail) {

        return $http({

            method: 'GET',
            url: _self.urlCheckMail,
            params: {email: mail}
        });
    }

    // APPEL WEB SERVICE RECUPERATION INFOS DU PRINCIPAL
    this.GetPrincipalFromId = function (id) {
        // this.urlGetCorrespondants
        return $http({

            method: 'GET',
            url: _self.urlGetPrincipalFromId.replace('{idCorrespondent}', id),
            params: { roles: 'PRINCIPAL' }
        });
    }

    // APPEL WEB SERVICE AUTHENTIFICATION
    this.logIn = function(form) {

        console.log("login method : ", form);
        return $http({

            method: 'POST',
            url: _self.urlLogIn,
            data: form
        });
    }

    // APPEL WEB SERVIUCE VERIFICATION NUMERO CLIENT
    this.checkClientNumber = function(clientNumber) {

        return $http({

            method: 'GET',
            url: _self.urlCheckClientNumber.replace('{idClientSF}', clientNumber)
        });
    }

    // APPEL WEB SERVICE INSCRIPTION
    this.subscribe = function(form) {
        return $http({
            method: 'POST',
            url: _self.urlSubscribe,
            data: form
        });
    }

    // Web service de récupération des données personnelles
    this.getPersonnalData = function (idEntreprise, idCorrespondant) {
        return $http({
            method: 'GET',
            url: _self.urlGetPersonnalData + idCorrespondant
        });
    }

    // Web service de mise à jour des données personnelles
    this.updatePersonnalData = function (idEntreprise, idCorrespondant, form) {
        return $http({
            method: 'PUT',
            url: _self.urlUpdatePersonnalData + idCorrespondant,
            data: form
        });
    }

    // Web service de récupération des correspondants d'une entreprise
    this.getCorrespondants = function (idEntreprise, roles) {
        return $http({
            method: 'GET',
            url: _self.urlGetCorrespondants.replace('{idEntreprise}', idEntreprise),
            params: { roles: roles }
        });
    }

    // Web service de récupération des entrprises d'un utilisateur
    this.getEntreprises = function (idUtilisateur) {
        return $http({
            method: 'GET',
            url: _self.urlGetEntreprises.replace('{idUtilisateur}', idUtilisateur)
        });
    }

    // APPEL WEB SERVICE DECONNEXION
    this.logout = function() {

        return $http({

            method: 'GET',
            url: _self.urlLogout
        });
    }

    // Service de mise à jour des profiles correspondants
    this.updateProfilesCorrespondants = function (idClient, form) {
      return $http({
        method: 'PUT',
        url: _self.urlUpdateProfilesCorrespondants.replace('{idClient}', idClient),
        data: form
      });
    }

    // Service de suppression du rattachement à l'entreprise
    this.removeCompanyFromCorrespondant = function (idCorrespondant, idClient) {
      return $http({
        method: 'DELETE',
        url: _self.urlRemoveCompanyFromCorrespondant.replace('{idCorrespondant}', idCorrespondant).replace('{idClient}', idClient),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };

    // Service de récupération des fonctions dans l'entreprise
    this.getAllBusinessFunctions = function () {
      return $http({
        method: 'GET',
        url: _self.urlGetBusinessFunctions
      });
    }

    // Service de vérification du n° client pour la demande de rattachement
    this.checkClientNumberToAdd = function (clientNumber) {
      return $http({
        method: 'GET',
        url: _self.urlCheckCompanyToAdd,
        params: { numeroClientSap: clientNumber }
      });
    };

    // Service de demande de rattachement d'un utilisateur à une société
    this.addCompanyToUser = function (form) {
      return $http({
        method: 'POST',
        url: _self.urlAddCompanyToUser,
        data: form
      });
    }

    // Service qui vérifie si l'utilisateur peut supprimer son rattachement à l'entreprise
    this.checkRemovalRight = function (idCorrespondant, idClient) {
      return $http({
        method: 'GET',
        url: _self.urlCheckRemovalRight.replace('{idCorrespondant}', idCorrespondant).replace('{idClient}', idClient)
      });
    }

    // Service de modification du mot de passe
    this.updatePassword = function (form) {
      return $http({
        method: 'POST',
        url: _self.urlUpdatePassword,
        data: form
      });
    }

    // Service de restauration des informations de session
    this.restoreSession = function() {
        return $http({
            method: 'GET',
            url: _self.urlRestoreSession
        });
    }

    // Appel Service de récupération des informations client par l'identifiant SAP
    this.getCompanyInfo = function (idClientSAP) {
        return $http({
            method: 'GET',
            url: _self.urlGetCompanyInfo.replace('{idClientSAP}', idClientSAP)
        });
    }

    // DECONNEXION DE DRUPAL
    this.logoutDrupal = function () {
        return $http({
            method: 'GET',
            url: _self.urlDrupalLogout
        });
    }

    this.clearSessionDrupal = function () {
        return $http({
            method: 'GET',
            url: _self.urlDrupalClearSession
        });
    }

    // DEMANDE REINITIALISATION DU MOT DE PASSE
    this.resetPasswordAsk = function(email, locked) {
        return $http({
            method: 'GET',
            url: _self.urlResetPassword,
            params: {
                email: email,
                locked: angular.isDefined(locked) ? locked : 'false'
                    }
        })
    }

    // REINITIALISATION DU MOT DE PASSE
    this.resetPassword = function(form) {
        return $http({
            method: 'PUT',
            url: _self.urlResetPassword,
            data: form
        });
    }

	// VERIFICATION VALIDIDTE URL CHANGEMENT MOT DE PASSE
    this.resetPasswordCheckToken = function (form) {
        return $http({
            method: 'POST',
            url: _self.urlResetPassword,
            data: form
        });
    }

    //RECUPERATION DES FACTURES DU CLIENT
    this.getFactures = function (idClientSF) {
        return $http({
            method: 'GET',
            url: _self.urlGetFactures.replace('{idClientSF}', idClientSF)
        });
    }

    //PERMET DE SAVOIR SI L'ADHERENT PEUT TELECHARGER L'ATTESTATION
    this.getAttestation = function (idClientSF) {
        return $http({
            method: 'GET',
            url: _self.urlGetAttestation.replace('{idClientSF}', idClientSF)
        });
    }

    this.drupalRecheckRoles = function() {
        return $http({

            method: 'GET',
            url: _self.urlDrupalRecheckRoles
        });
    }

    this.drupalRecheckLanguage = function() {
        return $http({

            method: 'GET',
            url: urlDrupalRecheckLanguage
        });
    }

    //PERMET DE SAVOIR SI L'ADHERENT A UN CONTRAT ACTIF
    this.getContrat = function (idClientSF) {
        return $http({
            method: 'GET',
            url: _self.urlGetContrat.replace('{idClientSF}', idClientSF)
        });
    }

    //PERMET DE VISUALISER UN CONTRACT ACTIF DANS UN NOUVEL ONGLET
    this.getContratFile = function (idClientSF) {
        $window.open(_self.urlGetContratFile.replace('{idClientSF}', idClientSF)+ "?display=inline");
    }

    //PERMET DE TELECHARGER UN CONTRAT ACTIF
    this.getContratFileAttachement = function (idClientSF) {
        $window.location.href = _self.urlGetContratFile.replace('{idClientSF}', idClientSF)+"?display=attachement";
    }

    // Service de validation de l'utilisateur connecté
    this.validateUserPassword = function (form) {
      return $http({
        method: 'POST',
        url: _self.urlValidateUserPassword,
        data: form
      });
    }


    // Service de suppression d'un compte
    this.deleteUserAccount = function (form) {
      return $http({
        method: 'DELETE',
        url: _self.urlDeleteUserAccount,
        data: form,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };

    // Service déterminant si l'utilisateur connecté a le droit de supprimer son compte
    this.canDeleteUserAccount = function () {
      return $http({
        method: 'GET',
        url: _self.urlCanDeleteAccount
      });
    };



    // Service qui recupere les Documents administratifs guides , attestations et autres documents

      this.getDocsLinks = function () {
           var url = '/content/administratifs/guides';
           return $http({
               method: 'GET',
               url: url
           });
      };


      this.getDocsAttestation = function () {

           var url = '/content/administratifs/attestation';
           return $http({
               method: 'GET',
               url: url
           });
      };


      this.getDocsAutres = function () {

           var url = '/content/administratifs/autres';
           return $http({
               method: 'GET',
               url: url
           });
      };

      this.getDocsAnnexes = function () {

          var url = '/content/annexe/contrat';
          return $http({
              method: 'GET',
              url: url
          });
      };



    //THIS IS FOR FAQ

      this.getFaq = function () {

          var url = '/content/faq_export';
          return $http({
              method: 'GET',
              url: url
          });
      };

    //THIS IS FOR ADHESION

      this.goToNonConcerne = function () {
          var url = '/adhesion/non-concerne-rep';
          $window.location.href = url;
      };

      this.goToConcerne = function () {
          var url = '/adhesion/concerne-resultat';
          $window.location.href = url;
      };

      this.checkSiret = function (siret) {
           return $http({
               method: 'GET',
               url: _self.urlCheckSiret.replace('{siret}', siret)
            });
      };

      this.postAdhesion = function (form, file) {
          var formData = new FormData();
          if(file)
            form.fileName = file.name;
          formData.append('file', file);
          formData.append('form', JSON.stringify(form));

          //console.log('post adhesion form : ', formData.get('form'));
          //console.log('post adhesion formdata : ', formData.get('file'));
          return $http({
              method: 'POST',
              url: urlAdhesion,
              data: formData,
              transformRequest: angular.identity,
              headers: { 'Content-Type': undefined }
          });
      };

      this.getAdhesionObject = function (link) {
          return $http({
              method: 'GET',
              url: urlAdhesion,
              params: {f: link}
          });
      }

      this.getAdhesionContract = function (form, lang) {
          return $http({
              method: 'POST',
              headers: {
                accept: 'application/pdf'
              },
              params: {language: lang},
              responseType: 'arraybuffer',
              url: urlGetAdhesionContract,
              data: form,
              transformResponse: function (data) {
                  //console.log('brut datat : ', data, headers(''));
                  var pdf;
                  if (data)
                      pdf = new Blob([data], { type: 'application/pdf' });
                  return pdf;
              }
          });
      };

      this.getAdhesionDelegate = function (form, lang) {
          return $http({
              method: 'POST',
              headers: {
                accept: 'application/pdf'
              },
              params: {language: lang},
              responseType: 'arraybuffer',
              url: urlGetAdhesionDelegate,
              data: form,
              transformResponse: function (data) {
                  var pdf;
                  if (data)
                      pdf = new Blob([data], { type: 'application/pdf' });
                  return pdf;
              }
          });
      };

      this.getAdhesionFileAttachment = function (traceId) {
          return $http({
              method: 'GET',
            //   headers: {
            //     accept: 'application/pdf'
            //   },
              params: {trace: traceId},
              responseType: 'arraybuffer',
              url: urlGetAdhesionFileAttachment,
              transformResponse: function (data, headers) {
                  console.log('brut data : ', data);

                  var file;
                  var fileName = decodeURI(escape(headers(HEADER_VALUE_FILE_NAME)));
                  var fileType = headers(HEADER_VALUE_FILE_TYPE);
                  console.log('header value : ', headers(''), fileName, fileType);
                  if (data) {
                        if(window.navigator.msSaveOrOpenBlob)
                            file = Object.defineProperties(new Blob([data], {type: fileType}), {name: {value: fileName, writable: true}});
                        else
                            file = new File([data], fileName, { type: fileType });
                  }

                  return file;
              }
          });
      };

      this.signAdhesion = function (form, file) {
          var formData = new FormData();
          formData.append('file', file);
          formData.append('form', JSON.stringify(form));
          return $http({
              method: 'POST',
              url: urlSignAdhesion,
              data: formData,
              transformRequest: angular.identity,
              headers: { 'Content-Type': undefined }
          });
      };

    //PERMET DE SAVOIR SI L'ADHERENT A UNE DELEGATION
      this.getDelegation = function (idClientSF) {
          return $http({
              method: 'GET',
              url: _self.urlGetDelegation.replace('{idClientSF}', idClientSF)
          });
      };

    //PERMET DE VISUALISER UNE DELEGATION ACTIVE DANS UN NOUVEL ONGLET
      this.getDelegationFile = function (idClientSF) {
          $window.open(_self.urlGetDelegationFile.replace('{idClientSF}', idClientSF) + "?display=inline");
      };

    //PERMET DE TELECHARGER  UNE DELEGATION ACTIVE
      this.getDelegationFileAttachement = function (idClientSF) {
          $window.location.href = _self.urlGetDelegationFile.replace('{idClientSF}', idClientSF) + "?display=attachement";
      };


    this.conseillerGetUserInfo = function (uid) {

        console.log('conseiller getting info')
      return $http({
        method: 'GET',
        url: _self.urlConseillerGetUserInfo,
        params: {UID: uid}
      });
    };

    this.conseillerUpdateCookie = function (uid, idClientSF) {

        console.log('update cookie conseiller');
        console.log('client id sales force : ', idClientSF);
      return $http({
        method: 'GET',
        url: urlConseillerGetUserCookie,
        params: {UID: uid, idSF: idClientSF}
      });
    };

    this.conseillerGetUserUid = function (email) {
      return $http({
        method: 'GET',
        url: _self.urlConseillerGetUserUid,
        params: {email: email}
      });
    };

    this.getCountries = function() {
      return $http({
            method: 'GET',
            url: urlGetCountries
        });
    }

    this.checkCode = function() {
      return $http({
          method: 'POST',
          url: urlCheckCode
      });
    }

    this.getRecontractualisation = function(clientNumberSF, clientNumberSAP) {

        return $http({

            method: 'GET',
            url: urlGetRecontractualisation.replace('{clientIdSF}', clientNumberSF).replace('{clientIdSAP}', clientNumberSAP)
        });
    }

    this.getAdhesionContractMail = function(lang, token) {

        return $http({

            method: 'GET',
            url: urlAdhesionContract,
            params : {
                language: lang,
                f: token
            },
            responseType: 'arraybuffer',
            transformResponse: function (data) {
                var pdf;
                if (data)
                    pdf = new Blob([data], { type: 'application/pdf' });
                return pdf;
            }
        });
    }

    return this;
}
