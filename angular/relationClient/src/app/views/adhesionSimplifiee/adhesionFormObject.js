module.exports = {
    IA: {
        adress: {
            city: 'IA ville',
            complements: [{field: 'IA complement 1'}, {field: 'IA complement 1'}],
            country: 'AF',
            street: 'IA adress',
            zipcode: '01000'
        },
        amount: '17,45',
        ape: 'IA code APE',
        comercialName: 'IA Nom Commerciale',
        companyName: 'IA Nom Entreprise',
        radioContributionREP: true,
        siret: '40483304800345'
    },
    IAC: {
        brands: [{name: 'IAC marque 1'}, {name: 'IAC marque 2'}, {name: 'IAC marque 3'}, {name: 'IAC marque 4'}],
        companies: [{country: 'ZA', name: 'IAC nom 1', siret: '40483304800022'}, {country: 'DE', name: 'IAC nom 2', siret: '40483304800022'}],
        proOrganisationName: 'IAC orga professionelle'

    },
    IDF: {
        adressInvoice: {
            city: "ville facturation",
            complements: [{}],
            country: "AF",
            street: "adresse facturation",
            zipcode: "01000"
        },
        adressSendingBill: {
            city: "ville envoie facture",
            complements: [{}],
            country: "DE",
            street: "adresse envoie facture",
            zipcode: "01000"
        },
        companyInvoiceName: "nom entreprise à facturer",
        tva: "num TVA",
        radioBillingAdress: true,
        radioCompanyInvoice: true,
        radioDistinctBillingCompany: undefined,
        radioDemat: true
    },
    CP: {
        adress: {
            city: "ville CP",
            complements: [{}],
            country: 'DE',
            street: "adresse CP",
            zipcode: '01000'
        },
        civility: "Monsieur",
        companyName: "rasion sociale CP",
        email: "principal@email.fr",
        firstName: "prenom CP",
        function: "0x10",
        lastName: "nom CP",
        position: "poste CP",
        radioProvider: true,
        siret: "40483304800022",
        tel: "0100000000"
    },
    IS: {
        adress: {
            city: "ville signataire",
            complements: [{}],
            country: 'FR',
            street: "adresse signataire",
            zipcode: '01000'
        },
        civility: "Madame",
        email: "lamtik1991@gmail.coma",
        firstName: "prenom signataire",
        function: "0x10",
        lastName: "nom signataire",
        position: "poste signataire",
        tel: "0100000000"
    }
};
