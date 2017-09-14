var authentificationModule = require('./authentification/authentification');
var inscriptionModule = require('./inscription/inscription');
var donneesPersonnellesModule = require('./donneesPersonnelles/donneesPersonnelles');
var modifMotDePasseModule = require('./modifMotDePasse/modifMotDePasse');
var acceuilPortailModule = require('./acceuilPortail/acceuilPortail');
var headerModule = require('./header/header');
var choixEntrepriseModule = require('./choixEntreprise/choixEntreprise');
var profilesCorrespondantsModule = require('./profilesCorrespondants/profilesCorrespondants');
var visualisationEntreprisesModule = require('./visualisationEntreprises/visualisationEntreprises');
var suppressionCompteModule = require('./suppressionCompte/suppressionCompte');
var attestationsModule = require('./attestations/attestations');
var facturesModule = require('./factures/factures');
var docsContractuels = require('./docsContractuels/docsContractuels');
var docsadministratifs = require('./docsadministratifs/docsadministratifs');
var docsannexecontrat = require('./docsannexecontrat/docsannexecontrat');
var docsAttestations = require('./docsAttestations/docsAttestations');
var docsAutres = require('./docsAutres/docsAutres');
var faq = require('./faq/faq');
var oubliMotDePasseModule = require('./oubliMotDePasse/oubliMotDePasse');
var reinitialisationMotDePasseModule = require('./reinitialisationMotDePasse/reinitialisationMotDePasse');
var adhesionRepModule = require('./adhesionRep/adhesionRep');
var adhesionModule = require('./adhesionSimplifiee/adhesionSimplifiee');
var rechercheUtilisateurModule = require('./rechercheUtilisateur/rechercheUtilisateur');
var adhesionContractModule = require('./adhesionContract/adhesionContract');

angular.module('relationClient.views', [authentificationModule,
                                        inscriptionModule,
                                        donneesPersonnellesModule,
                                        modifMotDePasseModule,
                                        acceuilPortailModule,
                                        headerModule,
                                        choixEntrepriseModule,
                                        profilesCorrespondantsModule,
                                        visualisationEntreprisesModule,
                                        suppressionCompteModule,
                                        attestationsModule,
                                        facturesModule,
                                        docsContractuels,
                                        docsadministratifs,
                                        docsannexecontrat,
                                        docsAttestations,
                                        faq,
                                        docsAutres,
                                        oubliMotDePasseModule,
                                        reinitialisationMotDePasseModule,
                                        adhesionRepModule,
                                        adhesionModule,
                                        rechercheUtilisateurModule,
                                        adhesionContractModule
                                        ]);
