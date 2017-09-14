webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(4);
	__webpack_require__(2);
	__webpack_require__(3);

	angular.module('edc-commons-libs', ['pascalprecht.translate']);
	__webpack_require__(79);
	angular.module('edc-commons').requires.push('edc-commons-libs');

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	var messagesFr = {
	    "errors": {
	        "transverse": {
	            "TECHNICAL": "A technical error has occurred.",
	            "PAGE_NOT_FOUND": "Page not found",
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in an e-mail address.",
	            "ERROR_AMOUNT_INVALID": "Incorrect amount",
	            "ERROR_TEL_INVALID": "This telephone number is not valid.",
	            "ERROR_ADRESS_REQUIRED": "Please fill in an address.",
	            "ERROR_AMOUNT_REQUIRED": "Please fill in the amount.",
	            "ERROR_COUNTRY_REQUIRED": "Please select a country.",
	            "ERROR_CITY_REQUIRED": "Please fill in a city.",
	            "ERROR_CIVILITY_REQUIRED": "Please select a title",
	            "ERROR_LASTNAME_REQUIRED": "Please fill in a last name",
	            "ERROR_FIRSTNAME_REQUIRED": "Please fill in a first name",
	            "ERROR_FUNCTION_REQUIRED": "Please select a function",
	            "ERROR_COMPANY_NAME_REQUIRED": "Please fill in a company name",
	            "ERROR_ZIPCODE_REQUIRED": "Please fill in a zip code."
	        },
	        "authentification": {
	            "ECHEC": "Authentication error",
	            "LOGIN_OBLIGATOIRE": "Please fill in your user name.",
	            "PASSWORD_OBLIGATOIRE": "Please fill in your password.",
	            "IDENTIFIANT_TAILLE_MIN": "Your user name must contain at least three characters.",
	            "ERROR_EMAIL_ACCOUNT": "This e-mail address is not registered.",
	            "ERROR_EMAIL_CREATE_ACCOUNT": "Create your account",
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_WRONG_PASSWORD": "Password incorrect",
	            "ERROR_TECHNICAL": "A technical error has occurred.",
	            "WARNING_ATTEMPT_COUNT": "You have #attemptCount# log-in attempt(s) remaining.",
	            "WARNING_ACCOUNT_BLOCKED": "Your account #orgaContext# has been blocked. To unblock it, reset your password by clicking on",
	            "WARNING_ACCOUNT_BLOCKED_LINK": " this link."

	        },
	        "adhesionSimplifiee": {
	            "ERROR_SIRET_INVALID": "This SIRET is not valid.",
	            "EXPIRED_LINK": "Link expired",
	            "EXPIRED_LINK_INSTRUCTION": "You must do a new contract",
	            "WARNING_CONTRACT_SIGNED": "Warning",
	            "WARNING_CONTRACT_SIGNED_INSTRUCTION": " This contract has already been signed.",
	            "TECHNICAL": "Error",
	            "TECHNICAL_INSTRUCTION": "Impossible to get Adhesion object.",
	            "WARNING_CONTRACT_ECSIGNED_INSTRUCTION": " This contract is signing "
	        },
	        "declaration": {
	            "LIBELLE_MIN_LENGHT": "The entered text is too short.",
	            "LIBELLE_MAX_LENGHT": "The entered text is too long.",
	            "VERIFY_FILE_BEFORE_UPLOAD": "Check your file before you load it.",
	            "BAD_FILE_TYPE": "The loaded file must be in zip or fde format",
	            "BAD_CLIENT_NO": "The client number of the excel file is different from the client number identified.",
	            "BAD_YEAR": "The reporting year of the excel file is different from the one chosen in the form.",
	            "UVC_ENCOURS": "You have a CSU submission in progress, please validate it!"
	        },
	        "inscription": {
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_EMAIL_USED_YET": "An account already exists with the same e-mail address.",
	            "ERROR_EMAIL_LOGIN": "Identification",
	            "ERROR_FIRSTNAME_REQUIRED": "Please fill in your first name.",
	            "ERROR_LASTNAME_REQUIRED": "Please fill in your last name.",
	            "ERROR_PASSWORD_REQUIRED": "Please fill in a password.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Please confirm your password.",
	            "ERROR_TELEPHONE_REQUIRED": "Please fill in your telephone number.",
	            "ERROR_TELEPHONE_INVALID": "This telephone number is not valid",
	            "ERROR_PASSWORD_INVALID": "Your password is invalid.",
	            "ERROR_PASSWORD_MISMATCH": "The two passwords do not match.",
	            "ERROR_CLIENT_NUMBER_INVALID": "The client number is not valid.",
	            "ERROR_CLIENT_NUMBER_REQUIRED": "Please fill in your client number.",
	            "ERROR_CLIENT_NUMBER_NOT_EXIST": "This client number is not registered.",
	            "ERROR_CIVILITY_REQUIRED": "Please specify your title.",
	            "ERROR_FUNCTION_REQUIRED": "Please fill in your function."

	        },
	        "donneesPersonnelles": {
	            "ERROR_LASTNAME_REQUIRED": "Please fill in your last name.",
	            "ERROR_FIRSTNAME_REQUIRED": "Please fill in your first name.",
	            "ERROR_POSITION_REQUIRED": "Please fill in your function.",
	            "EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_PHONE_REQUIRED": "Please fill in a telephone number.",
	            "ERROR_TELEPHONE_INVALID": "This telephone number is not valid",
	            "ERROR_MOBILEPHONE_INVALID": "Other telephone number not valid"
	        },
	        "modifMotDePasse": {
	            "ERROR_OLDPASSWORD_REQUIRED": "Please fill in your previous password.",
	            "ERROR_NEWPASSWORD_REQUIRED": "Please fill in a password.",
	            "ERROR_NEWPASSWORDCONFIRM_REQUIRED": "Please confirm your new password.",
	            "ERROR_NEWPASSWORD_INVALID": "The new password is not valid",
	            "ERROR_PASSWORD_MISMATCH": "The two passwords do not match.",
	            "ERROR_OLDPASSWORD_INCORRECT": "Your password is invalid."
	        },
	        "formulaire_upload": {
	            "TYPE_DECLARATION_REQUIRED": "Please select your type of data submission.",
	            "ANNEE_REQUIRED": "Please select the year of your data submission.",
	            "FILE_REQUIRED": "Please select a file to download.",
	            "ERREUR_DETAILLEE": "You cannot complete a detailed data submission.",
	            "ERREUR_UVC": "You cannot complete a CSU data submission until 2016."
	        },
	        "visualisationEntreprises": {
	            "CLIENT_NUMBER_REQUIRED": "Please fill in your client number.",
	            "COMPANY_NOT_FOUND": "This client number is not registered.",
	            "COMPANY_ALREADY_BOUND": "You already have access to this account."
	        },
	        "ajoutCompteClient": {
	            "CLIENT_NUMBER_REQUIRED": "Please fill in your client number.",
	            "COMPANY_NOT_FOUND": "This client number is not registered.",
	            "COMPANY_ALREADY_BOUND": "You already have an account with this client number."
	        },
	        "suppressionCompte": {
	            "REASON_REQUIRED": "Please tell us why you would like to delete your account.",
	            "PASSWORD_REQUIRED": "To confirm that you would like to delete your account, please enter your password.",
	            "INVALID_PASSWORD": "Password incorrect, you have #attemptCount# log-in attempt(s) remaining.",
	            "ACCOUNT_LOCKED": "Your account #orgaContext# has been blocked. To unblock it, please reset your password by clicking on <a href='/oubli-mot-de-passe'>ce lien</a>"
	        },
	        "reinitialisationMotDePasse": {
	            "ERROR_PASSWORD_REQUIRED": "Please fill in a password.",
	            "ERROR_PASSWORD_INVALID": "Your password is invalid.",
	            "ERROR_CONFIRM_PASSWORD_MISMATCH": "The two passwords do not match.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Please confirm your new password."
	        },
	        "oubliMotDePasse": {
	            "ERROR_ID_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_ID_INVALID": "This e-mail address is not valid.",
	            "ERROR_ID_NOT_FOUND": "This e-mail address is not registered."
	        },
	        "adhesionRestreinte": {
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_SIRET_INVALID": "This SIRET No is not valid.",
	            "ERROR_COMPANY_NAME_REQUIRED": "Please fill in your company's registered name.",
	            "ERROR_ACTIVATION_CODE_REQUIRED": "Please fill in your activation code.",
	            "ERROR_ACTIVATION_CODE_INVALID": "Your activation code is not valid.",
	            "ERROR_REP_REQUIRED": "Please let us know if your company has paid a financial contribution to an eco-organism in the past for EPR on household packaging in France.",
	            "ERROR_COMPANY_INVOICE_REQUIRED": "Please let us know if the company to be invoiced is different from your company.",
	            "ERROR_ADRESS_BILLING_REQUIRED": "Please fill in your company invoicing mailing adress.",
	            "ERROR_ADRESS_SEND_BILL_REQUIRED": "Please let us know if the invoice mailing address is different from the invoicing address.",
	            "ERROR_BILL_DEMAT_REQUIRED": "Please let us know if you want to opt for the electronic invoice",
	            "ERROR_PROVIDER_REQUIRED": "Please let us know if you are a service provider.",
	            "ERROR_SIGNER_REQUIRED": "Please let us know if you are the signatory.",
	            "ERROR_SIRET_EXIST": "This SIRET number is already part of our customers.",
	            "ERROR_SIRET_EXIST_LOGIN": "Log in to your Portal",
	            "ERROR_DATA_CERTIFICATION_REQUIRED": "You must certify the accuracy of the data entered in this contract.",
	            "ERROR_DELEGATE_VALIDATION_REQUIRED": "You must validate the management mandat(s) for the informed provider(s).",
	            "ERROR_CONTRACT_ACCEPT_REQUIRED": "You must read and accept the terms of the Citeo contract.",
	            "ERROR_FILE_REQUIRED": "Atachment required.",
	            "ERROR_FILE_TYPE": "Your file format must be: PDF, Excel, Word, PNG or JPEG.",
	            "ERROR_FILE_SIZE": "Your file should not exceed 2 MB.",
	            "ERROR_SIRET_REQUIRED": "Please fill in your company siret.",
	            "ERROR_TVA_REQUIRED": "Please fill in the Intra-Community VAT number."
	        },
	        "rechercheUtilisateur": {
	            "ERROR_EMAIL_MISSING": "Please fill in your e-mail address.",
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_NOTFOUND": "There is no user registered with this e-mail address."
	        }
	    },
	    "labels": {
	        "loaders": {
	            "VALIDATION": "Validation in progress...",
	            "SIGNING": "Signing in progress...",
	            "GETTING_DATA": "Getting your data...",
	            "GETTING_CONTRACT": "Getting your contract..."
	        },
	        "orgaContext": {
	            "PHONE_NUMBER_ECO": "+33 808 80 00 50",
	            "PHONE_NUMBER_ADELPHE": "0 810 00 86 90",
	            "EMAIL_CONTACT_ECO": "clients.emballages@citeo.com",
	            "EMAIL_CONTACT_ADELPHE": "entreprises@adelphe.fr",
	            "EMAIL_CIL": "cil@citeo.com",
	            "NAME": "Citeo"
	        },
	        "transverse": {
	            "BTN_SAUVEGARDER": "Validate",
	            "BTN_ANNULER": "Cancel",
	            "BTN_LOGOUT": "Log off",
	            "BTN_RETOUR": "Back",
	            "BTN_COMFIRM": "Confirm",
	            "BTN_OK": "OK",
	            "BTN_ADD": "Add",
	            "BTN_REMOVE": "Delete",
	            "BTN_CLOSE": "Close",
	            "SAVE_SUCCESS": "Your changes have been saved.",
	            "TECHNICAL_ERROR": "A technical error has occurred.",
	            "SAVE_CHANGES": "Save changes",
	            "BTN_NEXT_STEP": "Go to next step",
	            "BTN_VALIDER": "Validate",
	            "BTN_SUIVANT": "Next",
	            "BTN_SEND": "Send",
	            "OPERATION_NOT_ALLOWED": "You are not authorized to perform this action.",
	            "VOIR_TOUT": "View all",
	            "DOWNLOAD": "Download"
	        },
	        "mode_declaration": {
	            "WEB": "Online",
	            "EXCEL": "Excel"
	        },
	        "type_declaration": {
	            "DETAILLEE": "Detailed",
	            "SECTORIELLE": "Sector-specific",
	            "UVC": "By CSU",
	            "FORFAIT": "Flat-fee"
	        },
	        "statut_declaration": {
	            "EN_COURS": "In progress",
	            "VALIDEE": "Finalised",
	            "ANNULEE": "Cancelled",
	            "A_SAISIR": "Pending entry",
	            "INITIALISEE": "In progress"
	        },
	        "relationClient": {
	            "transverse": {
	                "PASSWORD_RULES": "Your password must contain:",
	                "PASSWORD_RULE_LENGTH": "- At least 9 characters",
	                "PASSWORD_RULE_MAJ": "- At least one upper-case letter",
	                "PASSWORD_RULE_MIN": "- At least one lower-case letter",
	                "PASSWORD_RULE_NUM": "- At least one figure",
	                "PASSWORD_RULE_SPECIAL_CAR": "- At least one of the following special characters: ",
	                "GET_NEW_PASSWORD": "Request a new password",
	                "NEW_PASSWORD_REQUEST_SENT": "Your new password request has been sent."
	            },
	            "authentification": {
	                "TITLE": "Log in",
	                "MESSAGE": "Log in to access your Client Portal.",
	                "VALIDER": "Log in ",
	                "PLACEHOLDER_LOGIN": "Login (e-mail address)",
	                "PLACEHOLDER_PASSWORD": "Password",
	                "FORGOTTEN_PASSWORD": "1st log-in / forgot your password?  ",
	                "LOGIN": "Log in",
	                "CREATE_ACCOUNT": "Create your account",
	                "DONT_HAVE_ACCOUNT_YET": "Don't have an account yet?"
	            },
	            "inscription": {
	                "PLACEHOLDER_LASTNAME": "Last name *",
	                "PLACEHOLDER_FIRSTNAME": "First name *",
	                "PLACEHOLDER_PASSWORD": "Password *",
	                "PLACEHOLDER_CONFIRM_PASSWORD": "Confirm password *",
	                "PLACEHOLDER_TELEPHONE": "Telephone number (main) *",
	                "PLACEHOLDER_EMAIL": "E-mail address *",
	                "PLACEHOLDER_FUNCTION": "Function *",
	                "PLACEHOLDER_CLIENT_NUMBER": "Client number *",
	                "PLACEHOLDER_OTHER_FUNCTION": "Other function",
	                "CREATION_ACCOUNT_TITLE": "CREATE MY ACCOUNT",
	                "CREATION_ACCOUNT_ALERT_CLIENT_NUMBER_REQUIRED": "You must have a client number to create your account.",
	                "CREATION_ACCOUNT_INSTRUCTION": "Fill in all the fields below in order to create your account.",
	                "CREATION_ACCOUNT_ACTION": "Create my account",
	                "ACCOUNT_EXIST_YET": "Already have an account?",
	                "LOGIN": "Identification",
	                "REQUIRED_FIELDS": "*Mandatory fields",
	                "ACCOUNT_ALREADY_EXIST": "Already have an account?",
	                "LINK_SIGN_UP": "IDENTIFICATION",
	                "RADIO_BUTTON_CIVILITY": "Title *: ",
	                "RADIO_BUTTON_MR": " Mr ",
	                "RADIO_BUTTON_MISS": " Mrs/Ms",
	                "INFORMATION": "Information pertaining to you has been gathered in line with the CNIL Directives and are processed by the company #orgaContext# for the purposes of its client database. In accordance with the French Informatique et Libertés Law (Data Protection Act) of 6 January 1978, amended in 2004, you have the right to access and correct data pertaining to you. These rights may be exercised by sending a request to the address #linkMail#.  You may also oppose the processing of data pertaining to you by providing adequate grounds.",
	                "LANGUE_CAPTCHA": "en"
	            },
	            "donneesPersonnelles": {
	                "PERSONAL_DATA_TITLE": "My personal data",
	                "CIVILITY_FIELD": "Title *: ",
	                "MSG_MONSIEUR": " Mr ",
	                "MSG_MADAME": " Mrs/Ms",
	                "PLACEHOLDER_LASTNAME": "Last name *",
	                "PLACEHOLDER_FIRSTNAME": "First name *",
	                "PLACEHOLDER_POSITION": "Function *",
	                "PLACEHOLDER_EMAIL": "Work e-mail *",
	                "PLACEHOLDER_PHONE": "Main telephone number",
	                "PLACEHOLDER_MOBILEPHONE": "Other telephone number",
	                "PLACEHOLDER_ACCESS": "Features I have access to in My Client Portal",
	                "PLACEHOLDER_PRINCIPAL": "Key contact at my company",
	                "FUNCTION": "Function",
	                "OTHER_FUNCTION": "Other function",
	                "BTN_SAVE_CHANGES": "Save changes"
	            },
	            "modifMotDePasse": {
	                "INFORMATION": "You may modify your password at any time. For your information, in accordance with our data security policy, we will ask you to change your password every 12 months.",
	                "SECURITY_TITLE": "Password",
	                "PLACEHOLDER_OLDPASSWORD": "Previous password",
	                "PLACEHOLDER_NEWPASSWORD": "New password",
	                "PLACEHOLDER_NEWPASSWORD_CONFIRM": "Confirm the new password",
	                "SAVE_SUCCESS": "Your password has been modified."
	            },

	            "acceuilPortail": {
	                "TITLE_1": "WELCOME TO",
	                "TITLE_2": "YOUR CLIENT PORTAL",
	                "TEXT_PART_1": "Your account has been created. A message has been sent to ",
	                "TEXT_PART_2": "the person responsible for opening your access points.",
	                "TEXT_PART_3": "To access our services ",
	                "ACCESS_ACCOUNT": "CLICK HERE ",
	                "LINK": "www.ecoemballages.fr"
	            },

	            "profilesCorrespondants": {
	                "TABLE_HEADER_NAME": "Profiles",
	                "TABLE_HEADER_ADDED_DATE": "Date of addition",
	                "TABLE_HEADER_LAST_CONNECTION_DATE": "Last login date",
	                "TABLE_HEADER_ACCESS": "Access",
	                "THE": "The"
	            },

	            "choixEntreprise": {
	                "WELCOME": "Welcome",
	                "CHOOSE_ACCOUNT": "Choose the client account you would like to access to:",
	                "SEARCH": "Search",
	                "ADD_CLIENT_ACCOUNT": "Add another client number"
	            },

	            "access": {
	                "SERVICES": "Tools and Services",
	                "FACTURATION": "Invoicing",
	                "DECLARATION": "Data submission"
	            },

	            "visualisationEntreprises": {
	                "BTN_ADD_COMPANY": "Add a client account",
	                "COMFIRM_REMOVE_COMPANY": "Do you really want to delete this account from your Client Portal?  If you delete it, you will no longer be able to access the data it contains.",
	                "BTN_REMOVE": "Delete",
	                "TITLE_ADD_COMPANY": "Add a client account",
	                "TEXT_ADD_COMPANY": "Fill in the client number of the company you wish to add.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Client number *",
	                "BTN_ADD": "Add",
	                "DELETION_DENIED": "You are the key contact for this client account. If you wish to delete this account from your portfolio, send a message to clients.emballages@citeo.com or call us at +33 808 80 00 50 (free service + call price).",
	                "BTN_CONNECT": "Log in"
	            },

	            "header": {
	                "PHONE_NUMBER": "+33 808 80 00 50",
	                "SEND_EMAIL": "Send an e-mail",
	                "MAKE_AN_APPOINTMENT": "Request an appointment",
	                "MY_ACCOUNT": "My Client Account",
	                "PERSONAL_INFO": "My personal data",
	                "MANAGE_MY_ACCOUNTS": "Manage my client accounts",
	                "LOGOUT": "Log off",
	                "LEGAL_MENTIONS": "Legal Notices",
	                "CGU": "GTCU"
	            },

	            "ajoutCompteClient": {
	                "TITLE_ADD_COMPANY": "Add a client account",
	                "TEXT_ADD_COMPANY": "Fill in the client number of the company you wish to add.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Client number *",
	                "BTN_ADD": "Add"
	            },

	            "functions": [{
	                "label": "Administrative, finance and accounting - Director",
	                "code": "0x1'"
	            }, {
	                "label": "Administrative, finance and accounting - Employee",
	                "code": "0x2"
	            }, {
	                "label": "Administrative, finance and accounting - Supervisor/Manager",
	                "code": "0x3"
	            }, {
	                "label": "Supply and purchasing - Director",
	                "code": "0x4"
	            }, {
	                "label": "Supply and purchasing - Employee",
	                "code": "0x5"
	            }, {
	                "label": "Supply and purchasing - Supervisor/Manager",
	                "code": "0x6"
	            }, {
	                "label": "Other - Assistant",
	                "code": "0x7"
	            }, {
	                "label": "Other - Director",
	                "code": "0x8"
	            }, {
	                "label": "Other - Employee",
	                "code": "0x9"
	            }, {
	                "label": "Other - Engineer",
	                "code": "0x10"
	            }, {
	                "label": "Other - Supervisor/Manager",
	                "code": "0x11"
	            }, {
	                "label": "Sales and advertising - Assistant",
	                "code": "0x12"
	            }, {
	                "label": "Sales and advertising - Director",
	                "code": "0x13"
	            }, {
	                "label": "Sales and advertising - Supervisor/Manager",
	                "code": "0x14"
	            }, {
	                "label": "Communication - Assistant",
	                "code": "0x15"
	            }, {
	                "label": "Communication - Director",
	                "code": "0x16"
	            }, {
	                "label": "Communication - Engineer",
	                "code": "0x17"
	            }, {
	                "label": "Communication - Supervisor/Manager",
	                "code": "0x18"
	            }, {
	                "label": "Advising/consulting  - Director",
	                "code": "0x19"
	            }, {
	                "label": "Advising/consulting - Supervisor/Manager",
	                "code": "0x20"
	            }, {
	                "label": "General and strategic management",
	                "code": "0x21"
	            }, {
	                "label": "Executive - Other",
	                "code": "0x22"
	            }, {
	                "label": "Executive - Delegate general",
	                "code": "0x23"
	            }, {
	                "label": "Executive - Managing director",
	                "code": "0x24"
	            }, {
	                "label": "Executive - Manager/operator",
	                "code": "0x25"
	            }, {
	                "label": "Executive - Chairman",
	                "code": "0x26"
	            }, {
	                "label": "Executive - Chairman and Chief Executive",
	                "code": "0x27"
	            }, {
	                "label": "Executive - Secretary General",
	                "code": "0x28"
	            }, {
	                "label": "Executive - Vice-President",
	                "code": "0x29"
	            }, {
	                "label": "Packaging - Assistant",
	                "code": "0x30"
	            }, {
	                "label": "Packaging - Director",
	                "code": "0x31"
	            }, {
	                "label": "Packaging - Ingénieur",
	                "code": "0x32"
	            }, {
	                "label": "Packaging - Supervisor/Manager",
	                "code": "0x33"
	            }, {
	                "label": "Management",
	                "code": "0x34"
	            }, {
	                "label": "Legal and Regulatory - Assistant",
	                "code": "0x35"
	            }, {
	                "label": "Legal and Regulatory - Director",
	                "code": "0x36"
	            }, {
	                "label": "Legal and Regulatory - Supervisor/Manager",
	                "code": "0x37"
	            }, {
	                "label": "Marketing - Assistant",
	                "code": "0x38"
	            }, {
	                "label": "Marketing - Director ",
	                "code": "0x39"
	            }, {
	                "label": "Marketing - Supervisor/Manager",
	                "code": "0x40"
	            }, {
	                "label": "Chairmanship",
	                "code": "0x41"
	            }, {
	                "label": "Service provider",
	                "code": "0x42"
	            }, {
	                "label": "Production - Assistant",
	                "code": "0x43"
	            }, {
	                "label": "Production - Director",
	                "code": "0x44"
	            }, {
	                "label": "Production - Employee",
	                "code": "0x45"
	            }, {
	                "label": "Production - Supervisor/Manager",
	                "code": "0x46"
	            }, {
	                "label": "Quality and environment  - Assistant",
	                "code": "0x47"
	            }, {
	                "label": "Quality and environment  - Director",
	                "code": "0x48"
	            }, {
	                "label": "Quality and environment  - Employee",
	                "code": "0x49"
	            }, {
	                "label": "Quality and environment  - Engineer",
	                "code": "0x50"
	            }, {
	                "label": "Quality and environment  - Supervisor/Manager",
	                "code": "0x51"
	            }, {
	                "label": "Research and development - Assistant",
	                "code": "0x52"
	            }, {
	                "label": "Research and development - Director",
	                "code": "0x53"
	            }, {
	                "label": "Research and development - Employee",
	                "code": "0x54"
	            }, {
	                "label": "Research and development - Engineer",
	                "code": "0x55"
	            }, {
	                "label": "Research and development - Supervisor/Manager",
	                "code": "0x56"
	            }, {
	                "label": "Human resources - Assistant",
	                "code": "0x57"
	            }, {
	                "label": "Human resources - Director ",
	                "code": "0x58"
	            }, {
	                "label": "Human resources - Supervisor/Manager",
	                "code": "0x59"
	            }, {
	                "label": "General services  - Assistant",
	                "code": "0x60"
	            }, {
	                "label": "General services  - Director",
	                "code": "0x61"
	            }, {
	                "label": "General services  - Employee",
	                "code": "0x62"
	            }, {
	                "label": "General services  - Supervisor/Manager",
	                "code": "0x63"
	            }, {
	                "label": "Information system  - Assistant",
	                "code": "0x64"
	            }, {
	                "label": "Information system  - Director",
	                "code": "0x65"
	            }, {
	                "label": "Information system  - Engineer",
	                "code": "0x66"
	            }, {
	                "label": "Information system  - Supervisor/Manager",
	                "code": "0x67"
	            }, {
	                "label": "To be determined",
	                "code": "0x68"
	            }],

	            "suppressionCompte": {
	                "DELETE_MY_ACCOUNT": "Delete my account",
	                "ATTENTION": "Warning!",
	                "EXPLAINATION": "You are about to delete your account. Once deleted, your personal data will be lost.",
	                "GIVE_REASON": "Please tell us why you would like to delete your account",
	                "PLACEHOLDER_PASSWORD": "Enter your password to confirm",
	                "CANNOT_DELETE": "You are the key contact for this client account. If you wish to delete this account from your portfolio, send a message to clients.emballages@citeo.com or call us at +33 808 80 00 50 (free service + call price)."
	            },

	            "reinitialisationMotDePasse": {
	                "TITLE": "Forgot your password?",
	                "INSTRUCTION": "Please fill in the fields below in order to reset your password.",
	                "NEW_PASSWORD_PLACEHOLDER": "New password",
	                "CONFIRM_NEW_PASSWORD_PLACEHOLDER": "Confirm your new password"
	            },

	            "oubliMotDePasse": {
	                "TITLE": "Forgot your password?",
	                "INSTRUCTION": "Please enter the e-mail address linked to your account to reset your password.",
	                "ID_PLACEHOLDER": "Login (e-mail address)"
	            },

	            "attestation": {
	                "ATTESTATION_TITLE": "YOUR REGISTRATION CERTIFICATES",
	                "ATTESTATION_NAME": "Registration certificate",
	                "ATTESTATION_NON_DISPONIBLE": "Registration certificate not available",
	                "ATTESTATION_ETAT_1": "Unavailable - data submission not sent",
	                "ATTESTATION_ETAT_2": "Unavailable - invoice due outstanding",
	                "ATTESTATION_ETAT_3": "Unavailable - data submission not sent "
	            },
	            "facture": {
	                "FACTURE_TITLE": "YOUR INVOICES"
	            },
	            "mois": {
	                "01": "January",
	                "02": "February",
	                "03": "March",
	                "04": "April",
	                "05": "May",
	                "06": "June",
	                "07": "July",
	                "08": "August",
	                "09": "September",
	                "10": "October",
	                "11": "November",
	                "12": "December"
	            },
	            "contrat": {
	                "CONTRAT_NAME": "Contract",
	                "DELEGATION_NAME": "Delegation"
	            },
	            "adhesionRep": {
	                "ETAPE_1": "STEP N°1/4",
	                "ETAPE_1_QUESTION_1": "Are the products you market - in part or in full - consumed or used by households in France? ",
	                "INTITULE_ETAPE_1": "COUNTRY IN WHICH THE PACKAGED PRODUCTS ARE CONSUMED",
	                "REP_OUI": "Yes",
	                "REP_NON": "No",
	                "RETOUR": "Back",
	                "SUIVANT": "Next question",
	                "ETAPE_2": "STEP N°2/4",
	                "INTITULE_ETAPE_2": "MANUFACTURING OF PACKAGED PRODUCTS",
	                "ETAPE_2_QUESTION_A": "Do you manufacture (for your own company or for another) or does another company manufacture for your company packaged products that are sold in France?",
	                "ETAPE_2_QUESTION_B": "In what context?",
	                "ETAPE_2_QUESTION_B_REP_1": "I manufacture my own products",
	                "ETAPE_2_QUESTION_B_REP_2": "I have my products manufactured",
	                "ETAPE_2_QUESTION_C": "If your packaged products are manufactured by a third party and then are sold in France, do you own the products when they are packaged?",
	                "ETAPE_3": "STEP N°3/4",
	                "INTITULE_ETAPE_3": "IMPORT OF PACKAGED PRODUCTS",
	                "ETAPE_3_QUESTION_1": "Do you import (from the European Union or outside the European Union) packaged products that are sold in France?",
	                "ETAPE_4_QUESTION_1": "Do you ship products to your customers, or do you provide them with service packaging (bags, wrapping paper, etc.)?",
	                "ETAPE_4": "STEP N°4/4",
	                "INTITULE_ETAPE_4": "SHIPPING OF PACKAGED PRODUCTS",
	                "ETAPE_4_QUESTION_1_REP_1": "Yes, I ship my products to my customers.",
	                "ETAPE_4_QUESTION_1_REP_2": "Yes, I provide my customers with service packaging.",
	                "ETAPE_4_QUESTION_1_REP_3": "No, neither statement applies.",
	                "RESULTATS": "View results"

	            },
	            "accountDeletionReason": [{
	                "code": "CHANGEMENT_FONCTION",
	                "label": "Change of function"
	            }, {
	                "code": "DEPART_ENTREPRISE",
	                "label": "Left the company"
	            }, {
	                "code": "AUTRE",
	                "label": "Other"
	            }],
	            "adhesionRestreinte": {
	                "TITLE": "Enter your special conditions",
	                "TITLE_RECONTRACT": "Enter your special condition recontract",
	                "transverse": {
	                    "RADIO_YES": "Yes",
	                    "RADIO_NO": "No",
	                    "SIRET": "SIRET",
	                    "ADRESS": "Address (Street name and number) *",
	                    "ADRESS_COMPLEMENT": "Additional address details",
	                    "ADD_ADRESS_COMPLEMENT": "Add an additional address details",
	                    "ZIPCODE": "Zip code *",
	                    "CITY": "City *",
	                    "COUNTRY": "Country",
	                    "COMPANY_NAME": "Registered name *",
	                    "RADIO_MR": " Mr ",
	                    "RADIO_MISS": " Mrs/Ms",
	                    "EMAIL": "E-mail address *",
	                    "CIVILITY": "Title *",
	                    "FIRST_NAME": "First name *",
	                    "LAST_NAME": "Last name *",
	                    "FUNCTION": "Function *",
	                    "POSITION": "Position title",
	                    "TEL": "Telephone number (main)"
	                },

	                "popupDone": {

	                    "title": "YOU HAVE SIGNED YOUR Citeo CONTRACT",
	                    "MSG1": "Citeo thanks you for your trust. We have received your contract.",
	                    "MSG2": "Within 8 days, you will receive your final contract, your registration certificate and your access details to your Citeo Portal.",

	                    "MSG4": "If you want to contact one of our advisors, please call us at +33 808 80 00 50 (free service + call price)",
	                    "BTN": "BACK TO PORTAL"
	                },

	                "popupDoneNotSigner": {
	                    "title": "THANK YOU!",
	                    "MSG1": "Citeo thanks you for your trust. We have received your contract. We sent a message to the signatory you identified so that he can access his signature space and validate the Citeo contract.",

	                    "BTN": "HOME"
	                },

	                "popupValidationContrat": {
	                    "title": "YOU ARE ABOUT TO SIGN YOUR Citeo CONTRACT",
	                    "MSG1": "SIGN MY CONTRACT",
	                    "MSG2": "CANCEL",
	                    "MSG3": "A technical error has occurred.",
	                    "MSG4": "The code is invalid",
	                    "MSG5": "The link has expired"
	                },
	                "popupMailSent": {
	                    "TITLE": "Your data have been validated",
	                    "MSG": "Check your mailbox to get your activation code"
	                },

	                "informationsAdministratives": {
	                    "LEGEND": "Administrative information",
	                    "INSTRUCTION": "Please inform us of the administrative details regarding your company.",
	                    "INSTRUCTION_RECONTRACT": "Please inform us of the administrative details regarding your company recontract.",
	                    "COMPANY_NAME": "Registered name *",
	                    "COMERCIAL_NAME": "Trade name",
	                    "APE": "APE Code",
	                    "HEAD_OFFICE_ADRESS": "Address of company head office:",
	                    "REP": "Did your company pay a financial contribution to an eco-organism in the past for EPR on household packaging in France?",
	                    "AMOUNT": "Amount in euros of the last contribution paid*",
	                    "ATTACHMENT": "Please provide us with an up-to-date K-Bis excerpt or other official document containing the main legal information concerning your company (legal form, registered office, identification number etc.)",
	                    "ADD_FILE": "UPLOAD YOUR FILE ",
	                    "ADD_FILE_LEGEND": "max 2MB; accepted formats: PDF, Excel, Word, PNG or JPEG"
	                },
	                "informationsAdministrativesComplementaires": {
	                    "LEGEND": "Additional administrative information",
	                    "INSTRUCTION": "To get to know you better, we invite you to fill in the companies and brands covered by the contract, and tell us if you are part of a professional organization.",
	                    "INSTRUCTION_RECONTRACT": "To get to know you better, we invite you to fill in the companies and brands covered by the contract, and tell us if you are part of a professional organization recontract.",
	                    "COMPANIES_IN_CONTRACT": "Which companies are covered by the contract?",
	                    "COMPANIES_IN_RECONTRACT": "Which companies are covered by the recontract?",
	                    "COMPANY_NAME": "Company name",
	                    "COMERCIAL_NAME": "Trade name",
	                    "COUNTRY": "Country",
	                    "ADD_COMPANY": "Add another company",
	                    "BRANDS_IN_CONTRACT": "Which brands are covered by the contract?",
	                    "BRANDS_IN_RECONTRACT": "Which brands are covered by the contract recontract ?",
	                    "BRAND_NAME": "Name of brand",
	                    "ADD_BRAND": "Add another brand",
	                    "IS_PRO_ORGANISATION": "Is your company part of a professional organization?",
	                    "PRO_ORGANISATION_NAME": "Name of the professional organization"
	                },
	                "informationsDeFacturation": {
	                    "LEGEND": "Invoicing information",
	                    "BILLING_ADRESS_CONDITION": "Is the invoicing address different from the company address?",
	                    "BILLING_ADRESS": "Invoicing address",
	                    "TVA": "Intra-Community VAT",
	                    "COMPANY_TO_INVOICE_QUESTION": "Is the company to be invoiced different from your company?",
	                    "COMPANY_TO_INVOICE_NAME": "Name of the company to be invoiced*",
	                    "BILL_SEND_ADRESS": "Invoice mailing address",
	                    "BILLING_ADRESS_SEND_QUESTION": "Is the invoice mailing address different from the invoicing address?",
	                    "BILLING_DEMAT_QUESTION": "Would you like to opt for the electronic invoice?",
	                    "BILLING_DEMAT_LEGEND": "(By default, the key contact will receive the electronic invoices. You can change this setting in your Client portail.)"
	                },
	                "correspondantPrincipal": {
	                    "LEGEND": "Key contact",
	                    "INSTRUCTION": "Please fill in the key contact information",
	                    "INSTRUCTION_RECONTRACT": "Please fill in the key contact information recontract.",
	                    "INDICATION": "In any event, the contracting company remains liable for the extended producer responsability for household packaging waste.",
	                    "IS_PROVIDER": "Are you a service provider?",
	                    "IS_PROVIDER_RECONTRACT": "Are you a service provider recontract ?"
	                },
	                "signataire": {
	                    "LEGEND": "Identity of the signatory ",
	                    "DESCRIPTION_1": "You have filled out all the data required for Citeo registration.",
	                    "DESCRIPTION_2": "We now need to identify the person who will sign your contract. The signing party must be empowered to make binding commitments in your organisation’s name.",
	                    "DESCRIPTION_3": "If you are the signatory, you will have to enter the activation code received by e-mail to sign your contract.",
	                    "DESCRIPTION_4": "If you are not the signatory, once you have validated your contract, the signatory will receive the log-in link to his signature space with an activation code allowing him/her to validate the data and sign the contract.",
	                    "INSTRUCTION": "Fill in the signatory's details"
	                },
	                "signataire_recontract": {
	                    "LEGEND": "Identity of the signatory recontract",
	                    "DESCRIPTION_1": "You have filled out all the data required for Citeo registration recontract.",
	                    "DESCRIPTION_2": "We now need to identify the person who will sign your contract. The signing party must be empowered to make binding commitments in your organisation’s name recontract.",
	                    "DESCRIPTION_3": "If you are the signatory, you will have to enter the activation code received by e-mail to sign your contract recontract.",
	                    "DESCRIPTION_4": "If you are not the signatory, once you have validated your contract, the signatory will receive the log-in link to his signature space with an activation code allowing him/her to validate the data and sign the contract recontract.",
	                    "INSTRUCTION": "Fill in the signatory's details recontract"
	                },
	                "visualisation": {
	                    "LEGEND": "Download your contract documents",
	                    "DOWNLOAD_CONTRACT_FR": "Conditions particulières",
	                    "DOWNLOAD_GENERAL_CONDITIONS_FR": "Conditions générales de services",
	                    "DOWNLOAD_MANDATE_FR": "Mandat de gestion",
	                    "DOWNLOAD_MANUEL_FR": "Annexe 1 - Guide de la Déclaration",
	                    "DOWNLOAD_RATES_FR": "Annexe 2 - Tarifs Citeo",
	                    "DOWNLOAD_GRAPHIC_CHART_FR": "Annexe 3 - Charte graphique du Point Vert",
	                    "DOWNLOAD_CODE_FR": "Annexe 4 - Code de l'environnement",
	                    "DOWNLOAD_CONTRACT_EN": "Specific conditions",
	                    "DOWNLOAD_GENERAL_CONDITIONS_EN": "Terms and conditions",
	                    "DOWNLOAD_MANDATE_EN": "Management mandate",
	                    "DOWNLOAD_MANUEL_EN": "Annex 1 - Data submission manual",
	                    "DOWNLOAD_RATES_EN": "Annex 2 - Citeo rates",
	                    "DOWNLOAD_GRAPHIC_CHART_EN": "Annex 3 - Graphical charter of the Green Dot",
	                    "DOWNLOAD_CODE_EN": "Annex 4 - The French Environmental law"
	                },
	                "validation": {
	                    "LEGEND": "Validation of data",
	                    "IS_SIGNER": "Are you the signatory?",
	                    "VALIDATE_DATA": "VALIDATE THE DATA"
	                },
	                "signature": {
	                    "LEGEND": "Sign your Citeo contract",
	                    "INDICATION": "An email has just been sent to you with your activation code. As soon as you have received it, you can sign your contract and validate your Citeo membership.",
	                    "CODE_ACTIVATION": "Please fill in your activation code",
	                    "DATA_VALIDATION": "I certify the accuracy of the data entered in this contract.",
	                    "PROVIDER_VALIDATION": "I validate the management mandate for the informed provider.",
	                    "CONTRACT_ACCEPT": "I declare that I have read and accept the terms of the Citeo contract.",
	                    "SIGN": "SIGN MY CONTRACT"
	                }
	            },
	            "rechercheUtilisateur": {
	                "LABEL_EMAIL": "E-mail address",
	                "SEARCH_USER": "Search user"
	            }
	        },
	        "declaration": {
	            "uvc": {
	                "formulaire": {
	                    "ALERT": "Warning",
	                    "WARNING": "Warning",
	                    "TYPE_DECLARATION": "TYPE OF DATA SUBMISSION",
	                    "TITRE_PRODUIT": "1. Product",
	                    "CODE_PRODUIT": "Product Code",
	                    "TITRE_POIDS": "2. UNIT WEIGHT BY MATERIAL ",
	                    "TITRE_POIDS_UNITAIRE": "(IN GRAMS)",
	                    "TITRE_POIDS_UNITAIRE_KG": "(IN KILOGRAMS)",
	                    "TITRE_DECOTE": "3. Discount",
	                    "TITRE_BONUS": "4. Bonus",
	                    "TITRE_MALUS": "5. Malus",
	                    "TITRE_NOMBRE_UVC": "6. NUMBER OF CSUs PUT ON THE MARKET",
	                    "LABEL_PAPIER_CARTON_RECYCLE": "Recycled cardboard",
	                    "LABEL_LIBELLE_PRODUIT": "Product name",
	                    "LABEL_LIBELLE_UVC": "Name of your CSU",
	                    "LABEL_ADD_UVC": "Submit your CSU",
	                    "LABEL_ADD_SPEC": "Submit a distinct case",
	                    "MONNAIE": "€",
	                    "ERROR_LIBELLE": "Please fill in the product name",
	                    "ERROR_PRODUIT": "Please enter a product code using the nomenclature",
	                    "ERROR_MATERIAUX": "Please fill in at least a weight number in one of the material columns (a positive number)",
	                    "LABEL_REMPLIR_PRODUITS": "Don't forget to fill in all the materials used in your packaging",
	                    "DECOTE_OUI": "Yes",
	                    "DECOTE_NON": "No",
	                    "ERROR_DECOTE": "The 'Discount' can be selected only if you filled in a weignt for the material 'Paper/cardboard other than cartons'",
	                    "MALUS_PERTURBATEUR": "Disruptive packaging",
	                    "MALUS_SANS_FILIERE": "Without a recycling channel",
	                    "TITRE_EMB_MENAGER": "Household packaging",
	                    "TITRE_EMB_NON_MENAGER": "Non-household packaging",
	                    "TITRE_NB_UVC": "Fill in a number of CSU (a whole positive number)",
	                    "TITRE_TOTAL_UVC": "Total of your CSU",
	                    "TITRE_CONTRIBUTION_UNIT_TOTAL": "Total financial contribution for one unit (euro cent)",
	                    "TITRE_CONTRIBUTION_TOTAL": "Total financial contribution for your CSU (euro)",
	                    "BTN_VALIDER_PRODUIT": "validate the entered product",
	                    "LABEL_TRI": "Sort by",
	                    "LABEL_Recherche": "Search",
	                    "BTN_ADD_UVC": "Add a CSU",
	                    "LABEL_CONTRIBUTION": "Financial contribution",
	                    "LABEL_HT": "plus tax",
	                    "BTN_NEXT_STEP": "NEXT STEP",
	                    "ERREUR_DECLARATION": "Error in processing the data submission",
	                    "LABEL_DECOTE": "Recycled cardboard",
	                    "TITRE_UVC_VUE": "Data submission : CSU",
	                    "ERREUR_PRODUIT_SPEC1": "only one material can be entered for this product code",
	                    "ERREUR_PRODUIT_SPEC2": "There is no material of the type 'paper/cardboard other than cartons', 'other plastic packaging' and 'aluminium' entered for this product code",
	                    "ERREUR_PRODUIT_SPEC3": "You cannot enter a material other than 'paper/cardboard other than cartons', 'other plastic packaging' and 'aluminium' for this product code",
	                    "ERREUR_NON_BLOCANT": "Disruptive packagings cannot benefit from the 'awareness-raising' bonus",
	                    "INFOBULLE1": "For these specific packagings, you can submit on a single line packagings of different sizes or weight. These packagings must be submitted in kilograms.",
	                    "INFOBULLE2": "Enter the product code closest to your product in the list below.",
	                    "INFOBULLE3": "Enter the weight of each component of your packaging.",
	                    "INFOBULLE4": "Indicate whether your paper/cardboard packaging contains more than 50% recycled material. To get the 10% discount on the weight contribution, you must also attach the form made available by Citeo, duly completed by your packaging suppliers.",
	                    "INFOBULLE5": "The bonuses include reduction at source, improved recyclability and raising consumer awareness. For more information, download the 2017 Bonuses Guide ",
	                    "INFOBULLE6": "Indicate whether your packaging is on the list of disruptive packagings or whether it is included in sorting instructions but does not have a recycling solution. For more information, see the list of disruptive packagings.",
	                    "INFOBULLE7": "Household packaging are put on the market for the consumption or use of the product they contain by households.",
	                    "INFOBULLE8": "INFOBULLE8...",
	                    "INFOBULLE9": "INFOBULLE9...",
	                    "ERREUR_FORMULAIRE": "Please correct the errors in the form",
	                    "BTN_RETOUR": "Back",
	                    "BTN_ENREGISTRER": "Save",
	                    "BTN_ANNULER": "Cancel",
	                    "BTN_NEW_UVC": "New CSU"
	                },
	                "Materiaux": {
	                    "acier": "Steel",
	                    "alum": "Aluminium",
	                    "pcNonBriq": "Paper/cardboard (other than cartons)",
	                    "briq": "Cartons",
	                    "petClair": "Clear PET bottles",
	                    "flacon": "Other bottles",
	                    "autrePlas": "Other plastic packaging",
	                    "verre": "Glass",
	                    "autre": "Other materials",
	                    "bois": "Wood",
	                    "textile": "Textile"
	                },
	                "formulaire_upload": {
	                    "TITLE": "FOLLOW THIS PROCEDURE TO COMPLETE YOUR DATA SUBMISSION",
	                    "TITLE_SELECT_DECLARATION_TYPE": "Select the type of your data submission:",
	                    "TITLE_SELECT_YEAR": "Choose the year of your data submission:",
	                    "TITLE_SELECT_FILE": "Upload your file",
	                    "LABEL_BTN_VALIDATE": "Next step"
	                },
	                "send_mails": {
	                    "TITLE": "RECIPIENTS OF THE ACKNOWLEDGEMENT OF RECEIPT",
	                    "TITLE_ADD_MSG_1": "Once your data submission has been sent, you will receive an acknowledgement of receipt by mail. The said acknowledgement of receipt will be sent by default to all persons with access to your data submission.",
	                    "TITLE_ADD_MSG_2": "",
	                    "TITLE_ADD_MSG_3": "If you wish, you may send the acknowledgement of receipt to other persons.",
	                    "PLACEHOLDER_EMAIL": "Recipient e-mail address",
	                    "LABEL_ADD_RECIPIENTS": "Confirm this recipient",
	                    "LABEL_ERROR": "This e-mail address is not valid.",
	                    "LABEL_CERTIFIE": "I hereby certify that the data provided are accurate.",
	                    "LABEL_BTN_VALIDATE": "SEND MY DATA SUBMISSION",
	                    "LABEL_BTN_NO_VALIDATE": "Back"
	                },
	                "popin_validation": {
	                    "TITLE": "YOUR DATA SUBMISSION IS COMPLETE",
	                    "RAPPEL_ANNEE": "Your total financial contribution amounts to: ",
	                    "RAPPEL_CONTRIB": "Your total financial contribution amounts to: ",
	                    "TAXE": "plus tax",
	                    "LABEL_BTN_ATTESTATIONS": "Send my certifications",
	                    "LABEL_BTN_ACCUEIL": "Go back to my Client Portal",
	                    "ERROR_MSG": "Error in processing e-mails"
	                },
	                "popin_suppression": {
	                    "TITLE": "DELETE A DATA SUBMISSION",
	                    "ERREUR": "A  error has occurred.",
	                    "SUCCES": "Your data submission has been deleted",
	                    "COMFIRM_REMOVE_DECLARATION": "Do you wish to delete your data submission?"
	                },
	                "modal": {
	                    "LOADING_MODAL": "Loading"
	                },
	                "popin_confirmation": {
	                    "TITRE": "Your data submission is complete.",
	                    "LABEL1": "Your total financial contribution",
	                    "LABEL2": "amounts to: ",
	                    "ERROR_MSG": "Error in processing the data submission:",
	                    "HT": "plus tax"
	                },
	                "popin_corrective": {
	                    "TITRE": "Correct a data submission",
	                    "TITRE2": "Correct my data submission",
	                    "LABEL1": "You wish to correct the",
	                    "LABEL2": "Data submission",
	                    "LABEL3": "Please tell us why you wish to correct your data submission",
	                    "LABEL4": "You have completed the data submission",
	                    "QUESTION": "Why do you wish to edit your data submission?",
	                    "QUESTION2": "Do you wish to change your data submission type or entry mode? *",
	                    "REPONSE_OUI": "Yes",
	                    "REPONSE_NON": "No",
	                    "CHAMPS_OBLIGATOIRE": "* Mandatory fields",
	                    "LABEL_MOTIF": "Please tell us why you wish to correct your data submission",
	                    "LABEL_COMMENTAIRE": "COMMENT (OPTIONAL)"
	                },
	                "popin_produits": {
	                    "TITRE": "Select your product from the list below",
	                    "DESCRIPTION": "We have listed below a selection of existing products (product codes and names); you may select the code that matches your product and add it to your data submission: ",
	                    "SEARCH_LABEL": "Search for a product code or name",
	                    "CODE_PRODUIT": "Product Code",
	                    "LIBELLE_PRODUIT": "Product name",
	                    "BTN_ADD": "Add to the data submission",
	                    "BTN_ANNULER": "Cancel",
	                    "MSG_CONFIRMATION": "Do you wish to delete this CSU? ",
	                    "REPONSE_OUI": "Yes",
	                    "REPONSE_NON": "No"
	                },
	                "web": {
	                    "DATE_AJOUT": "Date of addition",
	                    "ORDRE_ALPHABETIQUE": "Alphabetical order",
	                    "MONTANT_CONTRIB_CROISSANT": "Amount of the financial contribution in increasing order",
	                    "MONNAIE_CONTRIB_DECROISSANT": "Amount of the financial contribution in decreasing order"
	                }
	            },
	            "historique": {
	                "TITRE": "TRACK YOUR DATA SUBMISSIONS",
	                "DESCRIPTION": "View your data submissions over the past five years here. From this tracking tool, you may complete new data submissions, edit data submissions in progress and correct finalised data submissions.",
	                "COL1": "Your data submissions",
	                "COL2": "Type",
	                "COL3": "Entry mode",
	                "COL4": "Status",
	                "COL5": "Amount",
	                "LABEL_DECLARATION": "Data submission",
	                "LABEL_SAISIR": "Enter",
	                "LABEL_CORRIGER": "Correct",
	                "LABEL_TELECHARGER": "Download",
	                "LABEL_COMPLETER": "Fill in",
	                "LABEL_MODIFIER": "Edit",
	                "LIEN_VOIR_TOUT": "See all",
	                "TITRE_WIDGET": "Your data submissions",
	                "CORRECTIVE": "Correction",
	                "LIEN_A_VENIR": "Coming soon",
	                "LABEL_ANNULER": "Remove"
	            },
	            "choixdeclaration": {
	                "choix_type_declaration": {
	                    "TITLE": "WELCOME TO YOUR DATA SUBMISSION",
	                    "TITLE_DECLARATION_UVC": " ESTIMATE THE NUMBER OF CSUs TO BE SUBMITTED ",
	                    "LABEL_DECLARATION_UVC_SUR_MARCHE": "To determine which data submission is best suited to you, move the cursor to indicate how many CSUs you put on the market in #year#, then click on Validate.",
	                    "LABEL_DECLARATION_CHOIX_DU_TYPE": " SELECT YOUR TYPE OF DATA SUBMISSION ",
	                    "LABEL_MOINS_10000": "Less than 10,000 CSUs",
	                    "LABEL_ENTRE_10000_50000": "Between 10,000 CSUs and 500,000 CSUs",
	                    "LABEL_SUP_500000": "More than 500,000 CSUs",
	                    "LABEL_MOINS_180000": "Less than 180,000 CSUs",
	                    "LABEL_SUP_180000": "More than 180,000 CSUs",
	                    "LABEL_DECLARATION_CONSEILLE": "Based on the number of CSUs you wish to declare, we suggest:",
	                    "LABEL_DECLARATION_AUTRE_CONSEILLE": "You can also opt for:",
	                    "LABEL_DECLARATION_VALIDER": "CONTINUE",
	                    "LABEL_DECLARATION_CONTINUER": "CONTINUE",
	                    "LABEL_BTN_NO_VALIDATE": "BACK"
	                },
	                "choix_mode_saisi": {
	                    "TITLE": "CHOOSE A DATA SUBMISSION METHOD",
	                    "TITLE_DECLARATION_LIGNE": "I WOULD LIKE TO COMPLETE MY DATA SUBMISSION ON-LINE",
	                    "TITLE_DECLARATION_EXCEL": "I WOULD LIKE TO COMPLETE MY DATA SUBMISSION USING EXCEL",
	                    "TITLE_DECLARATION_FORFAIT": "FLAT-FEE DATA SUBMISSION",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_UN": "I have",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_DEUX": "few",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_TROIS": "references and/or different types of packaging to submit.",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_UN": "I have a ",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_DEUX": "large number",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_TROIS": "of references and/or different types of packaging to submit.",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "You put less than 10 000 CSUs on the market in ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Your financial contribution for this year amounts to:",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "€80 plus tax",
	                    "TITLE_CHOIX_OPTION_EXCEL": "YOUR EXCEL FILE OPTIONS",
	                    "LABEL_LANGUE": "LANGUAGE : ",
	                    "LABEL_LANGUE_FRANCAIS": "FRENCH",
	                    "LABEL_LANGUE_ANGLAIS": "ENGLISH",
	                    "LABEL_ANNEE": "YEAR (versions)",
	                    "LABEL_ANNEE_EXCEL2007": "EXCEL 2007 and later",
	                    "LABEL_ANNEE_EXCEL2003": "EXCEL 2003 and earlier",
	                    "LABEL_DECLARATION_FORFAIT_MSG1": "Once the file has been uploaded,",
	                    "LABEL_DECLARATION_FORFAIT_MSG2": "click here",
	                    "LABEL_DECLARATION_FORFAIT_MSG3": "to go back to your Client Portal."
	                },
	                "declarationforfait": {
	                    "TITLE_DECLARATION_FORFAIT": "FLAT-FEE DATA SUBMISSION ",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "You put less than 10,000 CSUs on the market in ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Your financial contribution for this year amounts to:",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "€80 plus tax",
	                    "LABEL_DECLARATION_FORFAIT_BTN": "NEXT STEP",
	                    "LABEL_DECLARATION_FORFAIT_SEND_MAILS": "Once your data submission has been sent, you will receive an acknowledgement of receipt by mail",
	                    "LABEL_DECLARATION_FORFAIT_PAIEMENT": ""
	                },

	                "societes_marques": {
	                    "titre": "BRANDS AND COMPANIES COVERED BY THE CONTRACT",
	                    "societe_MSG1": "COMPANIES COVERED BY THE CONTRACT",
	                    "societe_MSG2": "Other companies covered by this contract",
	                    "societe_PAYS": "COUNTRY",
	                    "PLACEHOLDER_SOCIETE": "Name of the company ",
	                    "PLACEHOLDER_SIRET": "SIRET number",
	                    "PLACEHOLDER_PAYS": "Country",
	                    "PLACEHOLDER_MARQUE": "Brand name ",
	                    "societe_AJOUTER_ENTREPRISE": "Add a company",

	                    "marque_MSG1": "BRANDS COVERED BY THE CONTRACT",
	                    "marque_MSG2": "Other brands covered by this contract ",
	                    "marque_AJOUTER_MARQUE": "Add a brand",

	                    "MSG3": "Yes",
	                    "MSG4": "No",
	                    "MSG5": "Your data submission has been registered.",
	                    "MSG6": "OK",
	                    "BTN_ETAPE_RETOUR": "Back",
	                    "BTN_ETAPE_SUIVANTE": "Next Step",
	                    "BTN_ETAPE_SAUVEGARDER": "Save",
	                    "LABEL_ERROR_SOCIETE": "The company name is mandatory",
	                    "LABEL_ERROR_PAYS": "Please fill in the country",
	                    "LABEL_ERROR_MARQUE": "You already entered this brand",
	                    "LABEL_ERROR_ENTREPRISE": "You already entered this company"
	                },
	                "widget_upload": {
	                    "titre": "You have filled in your data submission via the Excel file?",
	                    "DEPOT_FICHIER": "Upload it!",
	                    "MSG1": "For detailed and CSUs data submission, consider converting your file as shown in the Excel file summary. For sector-specific data submission, you can upload your Excel file directly.",
	                    "MSG2": "Upload my file"
	                },

	                "simulateur": {
	                    "TITLE_SIMULATEUR": "WELCOME TO THE DATA SUBMISSION SIMULATOR",
	                    "TITLE_SIMULATEUR_CHOIX": "CHOOSE THE TYPE OF DATA SUBMISSION",
	                    "LABEL_SIMULATEUR_TELECHARGER": "DOWNLOAD THE EXCEL FILE"
	                }

	            },
	            "accueil_declaration": {
	                "TITRE": "Submit my packaging",
	                "DESCRIPTION": "Click to quick-submit your packaging.",
	                "BOUTON": "Complete my data submission",
	                "TEXTE_PAS_DECLARATION": "You have completed all your data submissions."
	            },
	            "controle_ecart": {
	                "title": "Your contribution has evolved significantly since last year ",
	                "MSG1": "Our mission is to assist you in your data submission in order to ensure your fair billing.",
	                "MSG2": "To do this, we need to know more about your business, please tell us what has caused this evolution.",
	                "MSG3": "Please fill in a cause.",
	                "MSG4": "Fill in a cause",
	                "BTN_SUIVANT": "NEXT",
	                "BTN_RETOUR": "Back",
	                "BTN_ENREGISTRER": "Save",
	                "INFOBULLE": "Specify the reason for this evolution."
	            },
	            "rpc": {
	                "RPC_INTITULE": " Report compliant with specified auditing procedures ",
	                "BUTTON_LANCER_MISSION": "Order a report",
	                "BUTTON_MODIFIER": "Edit",
	                "CODE_ACTIVATION": " Enter the activation code",
	                "RPC_STATUT_1": "In progress",
	                "RPC_STATUT_2": "Received",
	                "RPC_STATUT_A_FAIRE": "To do",
	                "RPC_STATUT_A_VENIR": "Upcoming",
	                "RPC_CONFIRMATION_1": "An e-mail has just been sent confirming your RCSAP mission request,",
	                "RPC_CONFIRMATION_2": "the date of the data submission concerned and the contact of the professional you have choosen.",
	                "RPC_CONFIRMATION_3": "Find your application in ",
	                "RPC_CONFIRMATION_4": "your data submission documents.",
	                "RPC_ERREUR_1": "You have already launched a mission RCSAP",
	                "RPC_ERREUR_2": "Authentification error!",
	                "RPC_ERREUR_3": "You have already started an RCSAP mission. If you want to change it  ",
	                "RPC_ERREUR_4": "click here.",
	                "RPC_LAUNCH_1": "CHOOSE YOUR EXPERT",
	                "RPC_LAUNCH_2": "CHANGE THE RCSAP MISSION",
	                "RPC_LAUNCH_3": "Name",
	                "RPC_LAUNCH_4": "Adress",
	                "RPC_LAUNCH_5": "E-mail",
	                "RPC_LAUNCH_6": "See more",
	                "RPC_CHANGE_1": "CHANGE THE RCSAP MISSION",
	                "RPC_CHANGE_2": "Choose the expert who will carry out the report:",
	                "RPC_CHANGE_3": "Accountant",
	                "RPC_CHANGE_4": "Auditor",
	                "RPC_ERROR_OCCUR": "An error has occurred. Please contact us at +33 808 80 00 50 (free service + call price)",
	                "RPC_NO_RESULT_FOUND": "No expert found",
	                "RPC_SEARCH_BAR": "Name (please fill at least 2 letters)",
	                "RPC_TEXT_TOP_BAR": "Choose the expert who will carry out the report: ",
	                "RPC_MERCI": "Your request is confirmed",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER": "You can no longer modify this mission",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER_MSG": "Your RCSAP is being transmitted. You can no longer modify this mission.",
	                "RPC_ERREUR_SURVENUE": "An error has occurred. Please contact us at +33 808 80 00 50 (free service + call price)."
	            },
	            "rpc_popins": {
	                "LANCER_MISSION_TITLE": "ORDER A REPORT COMPLIANT WITH SPECIFIED AUDITING PROCEDURES ",
	                "LANCER_MISSION_TEXT_1": "The Report compliant with specified auditing procedures (RCSAP) is a diagnostic and accompanying tool that allows you to evaluate your declarative process and the quality of your data.",
	                "LANCER_MISSION_TEXT_2": "RCSAPs are produced by your accountant or auditor.",
	                "LANCER_MISSION_TEXT_3": " As of the 2016 declaration, the RCSAP is to be carried out every 3 years ",
	                "LANCER_MISSION_CHOIX_EXPERT": " Choose the expert who will carry out the report: ",
	                "EC": "Accountant",
	                "CAC": "Auditor",
	                "CODE_ACTIVATION_TITLE": "ENTER YOUR ACTIVATION CODE ",
	                "CODE_ACTIVATION_TEXT": " This code is forwarded to you by your Auditor by email. Your RCSAP data will be safely sent to us.",
	                "CODE_ACTIVATION_INVALID": "Incorrect activation code",
	                "CODE_ACTIVATION_ERROR_TITLE": "Error!",
	                "CODE_ACTIVATION_ERROR_TEXT": " An error has occurred. Please contact us at +33 808 80 00 50 (free service + call price).",
	                "CODE_ACTIVATION_EXIPRED_TITLE": " Code expired ",
	                "CODE_ACTIVATION_EXIPRED_TEXT": " The activation code has expired. Please contact your auditor for a new one.",
	                "CODE_ACTIVATION_LOCKED_TITLE": " Error!",
	                "CODE_ACTIVATION_LOCKED_TEXT": " You have entered an incorrect code 5 times, please contact us at +33 808 80 00 50 (free service + call price).",
	                "CODE_ACTIVATION_SUCCESS_TITLE": "Thank you!",
	                "CODE_ACTIVATION_SUCCESS_TEXT": " Your RCSAP is now available in your Data submission documents."
	            },
	            "rpcFaqWidget": {
	                "RUN_RPC": "RUN RCSAP",
	                "FAQ_TITLE_1": "F.A.Q.",
	                "FAQ_SLOGAN_1": "Data submission F.A.Q.",
	                "FAQ_SLOGAN_2": "",
	                "FAQ_TEXT_1": "View the Q&A",
	                "FAQ_TEXT_2": ""
	            }
	        }
	    },
	    "produits": {
	        "010100": "Rusks and toasted breads",
	        "010101": "Similar toasted products",
	        "010201": "Savoury crackers and snacks",
	        "010202": "Sweet biscuits and cookies",
	        "010203": "Gingerbreads, preserved pastry goods and Viennese pastries",
	        "010301": "Whole grains coffee, chicory, malt",
	        "010302": "Ground coffee, chicory, malt",
	        "010303": "Soluble coffee, chicory, malt",
	        "010401": "Chocolate powder",
	        "010402": "Breakfast and instant drinks",
	        "010403": "Ready-to-eat/Ready-to-cook cereal",
	        "010404": "Spreads",
	        "010501": "Leaf teas and infusions",
	        "010502": "Soluble teas and infusions",
	        "010601": "Chocolate slabs",
	        "010602": "Chocolate confectionery",
	        "010603": "Chocolate bars",
	        "010701": "Candies and jelly candies",
	        "010702": "Sugared almonds and tablets",
	        "010703": "Fruit paste, candied fruit, marrons glacés",
	        "010704": "Chewing gum and bubble gum",
	        "010705": "Lollipops and candy canes",
	        "010706": "Other confectionery products",
	        "010801": "Ready-to-eat desserts",
	        "010802": "Baking products",
	        "010803": "Preparations for desserts and puddings",
	        "010901": "Condensed milk",
	        "010902": "Milk powder",
	        "011001": "Flours",
	        "011002": "Instant mashed potatoes",
	        "011003": "Semolina and similar products",
	        "011100": "Pasta",
	        "011201": "Dried fruits",
	        "011202": "Dried pulses, tapioca, other starches",
	        "011203": "Rice",
	        "011204": "Freeze-dried and dehydrated fruits and vegetables",
	        "011205": "Salted seeds",
	        "011301": "Stock cubes and culinary aids",
	        "011302": "Dehydrated soups",
	        "011303": "Instant soups",
	        "011304": "Liquid soups",
	        "011401": "Condiments",
	        "011402": "Mayonnaises",
	        "011403": "Mustards",
	        "011404": "Dehydrated sauces",
	        "011405": "Ready-to-use sauces",
	        "011406": "Tomato sauces and tomato concentrates",
	        "011407": "Salad dressings",
	        "011500": "Spices and peppers",
	        "011601": "Fine salt",
	        "011602": "Coarse salt",
	        "011700": "Food oils",
	        "011800": "Vinegars",
	        "011901": "Sugar cubes",
	        "011902": "Caster sugar",
	        "011903": "Granulated sugar",
	        "011904": "Various sugars (candy sugar, brown sugar)",
	        "012001": "Fruit purees",
	        "012002": "Jams",
	        "012003": "Chestnut creams",
	        "012004": "Jellies",
	        "012005": "Marmalades",
	        "012006": "Honey",
	        "012007": "Fruit in syrup",
	        "012100": "Canned vegetables",
	        "012200": "Canned fish",
	        "012300": "Preserved meats, cooked meats and cured meats",
	        "012401": "Crisps",
	        "012402": "Cassoulets",
	        "012403": "Sauerkrauts served with meat",
	        "012404": "Snails",
	        "012405": "Quenelles",
	        "012406": "Ready-to-cook dishes",
	        "012407": "Ready-to-eat dishes",
	        "012501": "Infant milk",
	        "012502": "Health foods for children",
	        "012600": "Health and diet products",
	        "012601": "Clinical nutrition products",
	        "012801": "Wet foods for dogs and cats",
	        "012802": "Dry foods for dogs and cats",
	        "012803": "Canned pet food",
	        "012804": "Other foods for other animals",
	        "023001": "Lemonades, limes",
	        "023002": "Sodas, colas and tonic waters",
	        "023003": "Fruit juices and concentrates",
	        "023004": "Nectars",
	        "023005": "Fruit drinks",
	        "023006": "Syrups and sugar cane",
	        "023007": "Extracts for beverages and effervescent salts",
	        "023101": "Beers",
	        "023102": "Ciders",
	        "023103": "Shandies",
	        "023200": "Waters",
	        "023400": "Wines",
	        "023500": "Champagne and sparkling wines",
	        "023600": "Aperitifs",
	        "023700": "Spirits and liqueurs",
	        "023900": "Beverage multipack packaging",
	        "034001": "Breads",
	        "034002": "Bakery items",
	        "034003": "Fresh pastries and ready-to-eat desserts",
	        "034101": "Family ice creams",
	        "034102": "Individual ice creams",
	        "034103": "Ice cream in bulk",
	        "034104": "Frozen starters – cured meats",
	        "034105": "Frozen vegetables",
	        "034106": "Frozen offal – meats – poultry",
	        "034107": "Frozen fish – shellfishes – crustaceans",
	        "034108": "Frozen ready-to-eat dishes – sauces – soups",
	        "034109": "Frozen pastries – Viennese pastries – frozen pasta",
	        "034110": "Frozen fruit and fruit juices",
	        "034111": "Frozen dairy products",
	        "034112": "Frozen food for animals",
	        "034201": "Milks",
	        "034202": "Yogurts and similar products",
	        "034203": "Creams and greek-style yogurts",
	        "034204": "Butters",
	        "034205": "Margarines or vegetable fats",
	        "034206": "Eggs",
	        "034207": "Dairy desserts and desserts",
	        "034301": "Soft cheeses with mould or washed rind",
	        "034302": "Cooked or uncooked pressed cheeses",
	        "034303": "Goat and sheep cheeses",
	        "034304": "Blue-veined cheeses",
	        "034305": "Processed cheeses",
	        "034306": "Fresh cheeses and similar products",
	        "034400": "Fresh fruits",
	        "034500": "Fresh vegetables",
	        "034510": "Flowers and plants",
	        "034601": "Poultry and game",
	        "034700": "Delicatessen products",
	        "034701": "Hors d’œuvres",
	        "034702": "Doughs",
	        "034703": "Ready-to-eat dishes and meats to re-heat",
	        "034704": "Sandwiches",
	        "034800": "Red meats and offal",
	        "034900": "Fish – crustaceans – shellfish",
	        "046401": "Shampoos",
	        "046402": "Conditioners, beautifying balms",
	        "046403": "Lotions and revitalisers",
	        "046404": "Fixatives and oils",
	        "046405": "Hair dyes",
	        "046406": "Wave set and permanent",
	        "046407": "Laquers",
	        "046408": "Hair accessories",
	        "046501": "Solid and liquid toilet soaps",
	        "046502": "Bathroom and shower products",
	        "046503": "Tooth care",
	        "046504": "Razors, blades, shaving products",
	        "046505": "Deodorants",
	        "046506": "Eaux de toilette and eaux de Cologne",
	        "046507": "Perfumes and fragrances",
	        "046508": "Body products",
	        "046509": "Nail beauty and care",
	        "046510": "Sun products",
	        "046601": "Skin cleansing milks",
	        "046602": "Lotions and tonics",
	        "046603": "Beauty creams",
	        "046604": "Cleansers and exfoliating creams",
	        "046605": "Specific face care products",
	        "046606": "Lip care",
	        "046607": "Make-up removers",
	        "046608": "Water sprays",
	        "046609": "Make-up products",
	        "046621": "Childcare items",
	        "046701": "Cottons",
	        "046702": "Handkerchiefs",
	        "046703": "Kitchen and toilet paper",
	        "046704": "Babies’ nappies",
	        "046705": "Feminine hygiene",
	        "046706": "Cleansing and beauty accessories",
	        "046712": "Oral and dental care",
	        "046713": "Foot care",
	        "046714": "Intimate hygiene",
	        "046715": "Protective products",
	        "046716": "Nutritional supplements",
	        "046717": "Care products for babies",
	        "046718": "Parapharmacy accessories",
	        "046719": "Medical accessories",
	        "046720": "Optics",
	        "046721": "Non-medical optics",
	        "046722": "Eyewear",
	        "046723": "Measuring instruments (thermometer, barometer, etc.)",
	        "055001": "Soaps",
	        "055002": "Laundry powders and liquids",
	        "055003": "Products for delicate washes, fabric softeners",
	        "055004": "Bleach and laundry disinfectants",
	        "055005": "Stain removers, primers, dyes",
	        "055006": "Laundry products",
	        "055007": "Dish-washing products",
	        "055008": "Washing accessories",
	        "055101": "Leather and footwear care products",
	        "055102": "Wood and floors care products",
	        "055103": "Metals and windows care products",
	        "055104": "Ovens and furnaces care products",
	        "055105": "Scouring, descaling, uncloging, cleaning and disinfecting products",
	        "055106": "Deodorants and insecticides",
	        "055107": "Cellar items and various ingredients",
	        "055108": "Brushware, brooms",
	        "055109": "Household sponges, tea towels and similar items",
	        "055401": "Kitchenware",
	        "055402": "Kitchen utensils",
	        "055403": "Cutlery and tableware",
	        "055404": "Table accessories",
	        "055405": "Containers, bowls",
	        "055406": "Cleaning accessories",
	        "055407": "Packaging and packing films",
	        "055408": "Cellar equipment",
	        "055501": "Heating devices",
	        "055502": "Refrigerators and home freezers",
	        "055503": "Dishwashers, washing machines, dryers",
	        "055504": "Hoods and fans",
	        "055505": "Electrical and gas stoves",
	        "055506": "Ovens, microwave ovens",
	        "055507": "Electrical devices for household cleaning",
	        "055508": "Electric mixers and kitchen utensils",
	        "055609": "Small electrothermal household appliances",
	        "055610": "Electrical devices and utensils for cleansing-beauty",
	        "055611": "Electrical devices for sewing and knitting",
	        "055701": "Crockery",
	        "055702": "Decorative crockery",
	        "055703": "Glassware",
	        "055704": "Crystal glassware",
	        "055705": "Cutlery ",
	        "055801": "Plants",
	        "055802": "Garden products",
	        "055803": "Agricultural tools and horticulture",
	        "055804": "Garden furniture",
	        "055805": "Planters and containers",
	        "055806": "Protective equipment",
	        "055901": "Tools",
	        "055902": "General hardware and furnishing",
	        "055903": "Plumbing – taps – sanitary ware",
	        "055904": "Electrical equipment",
	        "055905": "Wooden boards and carpentry",
	        "055906": "Structural work, building equipment and building materials",
	        "055907": "Paints and varnishes",
	        "055908": "Hardwares and painting accessories",
	        "055909": "Glues and adhesives",
	        "055910": "Wall coverings",
	        "055911": "Floor coverings",
	        "055912": "Tiling",
	        "055913": "Locks, fittings",
	        "055914": "Screws, nuts and bolts",
	        "056001": "Kitchen furniture ",
	        "056002": "Dining room furniture",
	        "056003": "Bathroom and toilet furniture",
	        "056004": "Living room furniture",
	        "056005": "Bedroom furniture",
	        "056006": "Occasional furniture – accessories",
	        "056007": "Office furniture",
	        "056008": "Basketry",
	        "056101": "Lighting devices",
	        "056102": "Batteries",
	        "056103": "Electric lamps",
	        "056201": "Decorative fabrics and accessories",
	        "056202": "Bedding",
	        "056203": "Decorative objects and accessories",
	        "056204": "Table, kitchen, bathroom, bed linen",
	        "066800": "Papers",
	        "066801": "Cards",
	        "066802": "Writing materials",
	        "066803": "Writing and office items",
	        "066804": "Drawing accessories",
	        "066805": "Filing accessories",
	        "066806": "School, office and various accessories",
	        "066807": "Offices supplies",
	        "066808": "IT supplies",
	        "066809": "Office automation",
	        "066810": "Computers – IT",
	        "066901": "Books",
	        "066902": "Dictionaries – encyclopaedias",
	        "066903": "Newspapers – specialised periodicals and journals",
	        "067001": "Jewellery",
	        "067002": "Gold and silverware (other than table)",
	        "067003": "Clocks and watches",
	        "067004": "Souvenirs, gifts, knick-knacks",
	        "067005": "Smoking items",
	        "067101": "Leather goods",
	        "067102": "Travel bags",
	        "067103": "Sport bags",
	        "067104": "Suitcases, trunks and briefcases",
	        "067201": "Radio and accessories",
	        "067202": "Television and accessories",
	        "067203": "Hi Fi Stereo, audio and video players",
	        "067204": "Photo, cinema and accessories",
	        "067205": "Disks, magnetic tapes, cassettes",
	        "067206": "Films",
	        "067207": "Musical instruments",
	        "067208": "Telephone and remote communications",
	        "067301": "Toys",
	        "067302": "Games",
	        "067400": "Accessories for animals",
	        "067501": "Camping and beach furniture",
	        "067502": "Camping and beach items",
	        "067503": "Trailers",
	        "067504": "Cycles, mopeds, motorcycles",
	        "067505": "Cycle, moped and motorcycle equipment",
	        "067506": "Cleaning products for cycles and mopeds, motorcycles",
	        "067507": "Spare parts",
	        "067601": "Lubricants",
	        "067602": "Automotive cleaning products",
	        "067603": "Electrical items (battery, light)",
	        "067604": "Technical spare parts",
	        "067605": "Interior equipment items",
	        "067606": "Exterior equipment items",
	        "067607": "Automotive tools",
	        "067608": "Tyres",
	        "067609": "Automotive sound systems",
	        "067701": "Hunting items",
	        "067702": "Fishing items",
	        "067703": "Hiking and climbing items",
	        "067704": "Sailiing items",
	        "067705": "Physical fitness items",
	        "067706": "Other sports items",
	        "067800": "Quick services (keys, shoe repairs)",
	        "068101": "Sewing supplies",
	        "068102": "Lingerie and trimmings supplies",
	        "068103": "Patterns",
	        "068104": "Sewing accessories",
	        "078201": "Stockings",
	        "078202": "Tights",
	        "078203": "Liner socks",
	        "078301": "Shoes",
	        "078302": "Soles – laces",
	        "078501": "Hats and headgears",
	        "078502": "Umbrellas",
	        "078503": "Gloves",
	        "078504": "Ties",
	        "078505": "Glasses",
	        "078506": "Track suits and sport clothing",
	        "078507": "Work clothing",
	        "078508": "Belts and braces",
	        "078509": "Scarves, squares, scarves",
	        "078510": "Handkerchiefs",
	        "078511": "Pyjamas and night dresses",
	        "078512": "Shirts, blouses, bodices",
	        "078513": "Underwear",
	        "078514": "Trousers",
	        "078515": "Skirts, dresses",
	        "078516": "Indoor clothing, aprons",
	        "078517": "Suits, ensembles",
	        "078518": "Jackets, anoraks, parkas",
	        "078519": "Coats, overcoats",
	        "078520": "Raincoats",
	        "078521": "Socks, ankle socks",
	        "078522": "T-shirts, polo shirts",
	        "078523": "Sweaters, cardigans, sweat-shirts",
	        "078524": "Baby knitwear",
	        "078525": "Baby clothing accessories",
	        "078526": "Baby hygiene accessories",
	        "079901": "Fabrics by the metre",
	        "085201": "Cigarettes",
	        "085202": "Cigars, cigarillos",
	        "085203": "Tobacco to roll and for pipes",
	        "085204": "Chewing tobacco and snuff",
	        "085301": "Matches and fire-lighters",
	        "085302": "Lighters",
	        "085303": "Solid fuels",
	        "085304": "Gaseous fuels",
	        "085305": "Domestic liquid fuels",
	        "096731": "Allergology",
	        "096732": "Anaesthesiology",
	        "096733": "Cancer research",
	        "096734": "Cardio-angiology",
	        "096735": "Dermatology",
	        "096736": "Diagnosis",
	        "096737": "Pharmaceutical dietetics",
	        "096738": "Endocrinology and hormones",
	        "096739": "Gastroenterology",
	        "096740": "Gynaecology",
	        "096741": "Haematology",
	        "096742": "Hepatology",
	        "096743": "Infections",
	        "096744": "Metabolism, nutrition and vitamins",
	        "096745": "Neurology and psyche",
	        "096746": "Ophthalmology",
	        "096747": "Otology",
	        "096748": "Parasitology",
	        "096749": "Respirology",
	        "096750": "Rhinology",
	        "096751": "Rheumatology and musculoskeletal health",
	        "096752": "Stomatology",
	        "096753": "Toxicology",
	        "096754": "Urology and nephrology",
	        "096755": "Acupuncture",
	        "096756": "Herbal medicine",
	        "096757": "Homeopathy",
	        "096758": "Various pharmacy (painkillers, etc.)",
	        "10100": "Rusks and toasted breads",
	        "120000": "POS packaging "
	    },
	    "produits_spec": {
	        "130000": "Submit shipping packaging",
	        "140000": "Submit samples",
	        "150000": "Submit alimentary spools",
	        "160000": "Submit non-alimentary spools"
	    },
	    "bonus_reduction": {
	        "0": "Reduction / recyclability actions",
	        "1": "Refills",
	        "4": "Weight and volume reduction",
	        "5": "Removal of a packaging unit",
	        "6": "Recyclability",
	        "61": "Refills + good practice catalogue",
	        "64": "Weight and volume reduction + good practice catalogue",
	        "65": "Removal of a packaging unit + good practice catalogue",
	        "66": "Recyclability + good practice catalogue"
	    },
	    "bonus_sensibilisation": {
	        "0": "Awareness-raising actions",
	        "1": "Manual",
	        "2": "On-Pack",
	        "3": "In-Pack",
	        "4": "Off-Pack",
	        "5": "QR Code",
	        "6": "On-Pack/In-Pack/Manual + Off-Pack",
	        "7": "QR Code + Off-Pack"
	    },
	    "pays": {
	        "AF": "Afghanistan",
	        "ZA": "South Africa",
	        "AL": "Albania",
	        "DZ": "Algeria",
	        "DE": "Germany",
	        "AD": "Andorra",
	        "AO": "Angola",
	        "AI": "Anguilla",
	        "AQ": "Antarctica",
	        "AG": "Antigua/Barbados",
	        "AN": "Dutch Caribbean",
	        "STL": "Stateless",
	        "SA": "Saudi Arabia",
	        "AR": "Argentina",
	        "AM": "Armenia",
	        "AW": "Aruba",
	        "AU": "Australia",
	        "AT": "Austria",
	        "AZ": "Azerbaijan",
	        "BS": "Bahamas",
	        "BH": "Bahrain",
	        "BD": "Bangladesh",
	        "BB": "Barbados",
	        "BE": "Belgium",
	        "BZ": "Belize",
	        "BJ": "Benin",
	        "BM": "Bermuda",
	        "BT": "Bhutan",
	        "BY": "Belarus",
	        "BO": "Bolivia",
	        "BA": "Bosnia-Herz.",
	        "BW": "Botswana",
	        "BR": "Brazil",
	        "BN": "Brunei Darussal",
	        "BG": "Bulgaria",
	        "BF": "Burkina Faso",
	        "BI": "Burundi",
	        "KH": "Cambodia",
	        "CM": "Cameroon",
	        "CA": "Canada",
	        "CV": "Capo Verde",
	        "CL": "Chile",
	        "CN": "China",
	        "CX": "Christmas I.",
	        "CY": "Cyprus",
	        "CO": "Colombia",
	        "KM": "Comorrean Islands",
	        "CG": "Congo",
	        "KP": "North Korea",
	        "KR": "South Korea",
	        "CR": "Costa Rica",
	        "CI": "Ivory Coast",
	        "HR": "Croatia",
	        "CU": "Cuba",
	        "DK": "Denmark",
	        "DJ": "Djibouti",
	        "EG": "Egypt",
	        "SV": "El Salvador",
	        "AE": "United Arab Emirates",
	        "EC": "Ecuador",
	        "ER": "Eritrea",
	        "ES": "Spain",
	        "EE": "Estonia",
	        "ET": "Ethiopia",
	        "RU": "Russian Federation",
	        "FO": "Faroe Islands",
	        "FJ": "Fiji",
	        "FI": "Finland",
	        "FR": "France",
	        "GA": "Gabon",
	        "GM": "Gambia",
	        "GE": "Georgia",
	        "GH": "Ghana",
	        "GI": "Gibraltar",
	        "GB": "Great Britain",
	        "GR": "Greece",
	        "GD": "Grenada",
	        "GL": "Greenland",
	        "GP": "Guadeloupe",
	        "GU": "Guam",
	        "GT": "Guatemala",
	        "GF": "Guinea",
	        "GN": "Guinea",
	        "GQ": "Equatorial Guinea",
	        "GW": "Guinea-Bissau",
	        "GY": "Guyana",
	        "HT": "Haiti",
	        "HN": "Honduras",
	        "HK": "Hong Kong",
	        "HU": "Hungary ",
	        "VI": "US Virgin Islands",
	        "VG": "British Virgin Islands",
	        "HM": "Heard/McDon. Islands",
	        "MU": "Mauritius",
	        "MP": "N.Mariana Islands",
	        "BV": "Bouvet Islands",
	        "KY": "Cayman Islands",
	        "CC": "Coco Islands",
	        "CK": "Cook Islands",
	        "MH": "Marshall Islands",
	        "UM": "Minor Outl Islands",
	        "NU": "Niue Islands",
	        "NF": "Norfolk Islands",
	        "PN": "Pitcairn Islands",
	        "TK": "Tokelau Islands",
	        "IO": "BIOT",
	        "IN": "India",
	        "ID": "Indonesia",
	        "IR": "Iran",
	        "IQ": "Iraq",
	        "IE": "Ireland",
	        "IS": "Iceland",
	        "IL": "Israel",
	        "IT": "Italy",
	        "JM": "Jamaica",
	        "JP": "Japan",
	        "JO": "Jordan",
	        "KZ": "Kazakhstan",
	        "KE": "Kenya",
	        "KG": "Kirghiz",
	        "KI": "Kiribati",
	        "KW": "Kuwait",
	        "DM": "Dominica",
	        "LA": "Laos",
	        "LS": "Lesotho",
	        "LV": "Latvia",
	        "LB": "Lebanon",
	        "LR": "Liberia",
	        "LY": "Libya",
	        "LI": "Liechtenstein",
	        "LT": "Lithuania",
	        "LU": "Luxembourg",
	        "MO": "Macao",
	        "MK": "Macedonia",
	        "MG": "Madagascar",
	        "MY": "Malaysia",
	        "MW": "Malawi",
	        "MV": "Maldives",
	        "ML": "Mali",
	        "FK": "Falkland Islands",
	        "MT": "Malta",
	        "MA": "Morocco",
	        "MQ": "Martinique",
	        "MR": "Mauritania",
	        "YT": "Mayotte",
	        "MX": "Mexico",
	        "FM": "Micronesia",
	        "MD": "Moldavia",
	        "MC": "Monaco",
	        "MN": "Mongolia",
	        "MS": "Montserrat",
	        "MZ": "Mozambique",
	        "MM": "Myanmar",
	        "NZ": "New Zealand",
	        "NC": "N.Caledonia",
	        "NA": "Namibia",
	        "NR": "Nauru",
	        "NP": "Nepal",
	        "NI": "Nicaragua",
	        "NE": "Niger",
	        "NG": "Nigeria",
	        "NO": "Norway",
	        "OM": "Oman",
	        "UG": "Uganda",
	        "UZ": "Uzbekistan",
	        "PK": "Pakistan",
	        "PW": "Palau",
	        "PA": "Panama",
	        "PG": "Papua New Guinea",
	        "PY": "Paraguay",
	        "NL": "Netherlands",
	        "PE": "Peru",
	        "PH": "Philippines",
	        "PL": "Poland",
	        "PF": "French Polynesia",
	        "PR": "Porto Rico",
	        "PT": "Portugal",
	        "QA": "Qatar",
	        "CF": "Central African Republic",
	        "CZ": "Czech Republic",
	        "DO": "Dominican Republic",
	        "RE": "Reunion Island",
	        "RO": "Romania",
	        "RW": "Rwanda",
	        "ST": "Sao Tomé and Prin",
	        "SM": "Saint-Marin",
	        "SH": "Saint-Helena",
	        "SB": "Salomon",
	        "WS": "Western Samoa ",
	        "AS": "American Samoa",
	        "SN": "Senegal",
	        "SC": "Seychelles",
	        "SL": "Sierra Leone",
	        "SG": "Singapore",
	        "SK": "Slovakia",
	        "SI": "Slovenia",
	        "SO": "Somalia",
	        "SD": "Sudan",
	        "LK": "Sri Lanka",
	        "LC": "Sainte-Lucie",
	        "VC": "St. Vincent",
	        "KN": "St.Chr.,Nevis",
	        "PM": "St.Pierre,Miqu.",
	        "SE": "Sweden",
	        "CH": "Switzerland",
	        "SR": "Suriname",
	        "SJ": "Svalbard",
	        "SZ": "Swaziland",
	        "SY": "Syria",
	        "TJ": "Tajikistan",
	        "TW": "Taiwan",
	        "TZ": "Tanzania",
	        "TD": "Chad",
	        "TH": "Thailand",
	        "TP": "East Timur",
	        "TG": "Togo",
	        "TO": "Tonga",
	        "TT": "Trinidad,Tobago",
	        "TN": "Tunisia",
	        "TM": "Turkmenistan",
	        "TC": "Turks and Caicos",
	        "TR": "Turkey",
	        "TV": "Tuvalu",
	        "UA": "Ukraine",
	        "UY": "Uruguay",
	        "US": "USA",
	        "VU": "Vanuatu",
	        "VA": "Vatican",
	        "VE": "Venezuela",
	        "VN": "Viêt Nam",
	        "WF": "Wallis,Futuna",
	        "YE": "Yemen",
	        "YU": "Yugoslavia",
	        "ZR": "Zaire",
	        "ZM": "Zambia",
	        "ZW": "Zimbabwe"
	    },
	    "motifs_correctives": {
	        "AUTRE": "Other",
	        "BONUS_MALUS": "Bonus / Malus",
	        "ERREUR_SAISIE": "Input error",
	        "MATERIAU": "Material",
	        "POIDS": "Weight",
	        "QUANTITE": "Quantity",
	        "RECYCLE": "Recycled"
	    },
	    "motifs_controle_ecart": {
	        "AUTRES": "Other",
	        "EVOL_POIDS_EMB": " Weight/packaging evolution",
	        "EVOL": "Strong evolution of the revenues",
	        "FUSION": "Merger/Takeover",
	        "PERTE_MARCHE": "Loss of market share",
	        "PERIMETRE": "Contributory scope"

	    }
	};

	module.exports = messagesFr;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var messagesFr = {
	    "errors": {
	        "transverse": {
	            "TECHNICAL": "Une erreur technique est survenue.",
	            "PAGE_NOT_FOUND": "Page introuvable",
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner l'adresse e-mail.",
	            "ERROR_AMOUNT_INVALID": "Montant incorrect",
	            "ERROR_TEL_INVALID": "Ce N° de téléphone n'est pas valide",
	            "ERROR_ADRESS_REQUIRED": "Vous devez renseigner l'adresse",
	            "ERROR_AMOUNT_REQUIRED": "Vous devez renseigner le montant",
	            "ERROR_COUNTRY_REQUIRED": "Vous devez sélectionner un pays",
	            "ERROR_CITY_REQUIRED": "Vous devez renseigner la ville",
	            "ERROR_CIVILITY_REQUIRED": "Vous devez indiquer la civilité",
	            "ERROR_LASTNAME_REQUIRED": "Vous devez renseigner le nom",
	            "ERROR_FIRSTNAME_REQUIRED": "Vous devez renseigner le prénom",
	            "ERROR_FUNCTION_REQUIRED": "Vous devez sélectionner une fonction",
	            "ERROR_COMPANY_NAME_REQUIRED": "Vous devez renseigner le nom de l'entreprise",
	            "ERROR_ZIPCODE_REQUIRED": "Vous devez renseigner un code postal."
	        },
	        "authentification": {
	            "ECHEC": "Erreur lors de l'authentification",
	            "LOGIN_OBLIGATOIRE": "Vous devez renseigner votre identifiant.",
	            "PASSWORD_OBLIGATOIRE": "Vous devez renseigner votre mot de passe.",
	            "IDENTIFIANT_TAILLE_MIN": "L'identifiant doit contenir au moins 3 caractères.",
	            "ERROR_EMAIL_ACCOUNT": "Cette adresse e-mail n'est pas reconnue.",
	            "ERROR_EMAIL_CREATE_ACCOUNT": "Créez votre compte",
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre adresse e-mail.",
	            "ERROR_WRONG_PASSWORD": "Mot de passe incorrect",
	            "ERROR_TECHNICAL": "Une erreur technique est survenue.",
	            "WARNING_ATTEMPT_COUNT": "Il vous reste #attemptCount# tentative(s) de connexion.",
	            "WARNING_ACCOUNT_BLOCKED": "Votre compte #orgaContext# est bloqué. Pour le débloquer, vous devez réinitialiser votre mot de passe en cliquant sur",
	            "WARNING_ACCOUNT_BLOCKED_LINK": "ce lien."

	        },
	        "adhesionSimplifiee": {
	            "ERROR_SIRET_INVALID": "Ce SIRET n'est pas valide.",
	            "EXPIRED_LINK": "Lien expiré !",
	            "EXPIRED_LINK_INSTRUCTION": " Vous devez refaire une demande d'adhésion.",
	            "WARNING_CONTRACT_SIGNED": "Attention !",
	            "WARNING_CONTRACT_SIGNED_INSTRUCTION": " Ce contrat a déjà été signé.",
	            "TECHNICAL": "Erreur technique !",
	            "TECHNICAL_INSTRUCTION": " Impossible de récupérer l'objet adhésion.",
	            "WARNING_CONTRACT_ECSIGNED_INSTRUCTION": " Ce contrat est en cours de signature."
	        },
	        "declaration": {
	            "LIBELLE_MIN_LENGHT": "Le libellé est trop court.",
	            "LIBELLE_MAX_LENGHT": "Le libellé est trop long.",
	            "VERIFY_FILE_BEFORE_UPLOAD": "Vérifiez votre fichier avant de le déposer.",
	            "BAD_FILE_TYPE": "Le fichier chargé doit être en format zip ou fde",
	            "BAD_CLIENT_NO": "le numéro client du fichier excel est différent du numéro client identifié",
	            "BAD_YEAR": "l'année de déclaration du fichier excel est différent de celle choisie dans le formulaire",
	            "UVC_ENCOURS": "Vous avez une uvc en cours, veuillez la valider!"
	        },
	        "inscription": {
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre adresse e-mail.",
	            "ERROR_EMAIL_USED_YET": "Un compte existe déjà pour cette adresse e-mail.",
	            "ERROR_EMAIL_LOGIN": "Identifiez-vous",
	            "ERROR_FIRSTNAME_REQUIRED": "Vous devez renseigner votre prénom.",
	            "ERROR_LASTNAME_REQUIRED": "Vous devez renseigner votre nom.",
	            "ERROR_PASSWORD_REQUIRED": "Vous devez renseigner un mot de passe.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Vous devez confirmer votre mot de passe.",
	            "ERROR_TELEPHONE_REQUIRED": "Vous devez renseigner votre numéro de téléphone.",
	            "ERROR_TELEPHONE_INVALID": "Numéro de téléphone non valide",
	            "ERROR_PASSWORD_INVALID": "Votre mot de passe est invalide.",
	            "ERROR_PASSWORD_MISMATCH": "Les deux mots de passe sont différents.",
	            "ERROR_CLIENT_NUMBER_INVALID": "Le numéro client n'est pas valide.",
	            "ERROR_CLIENT_NUMBER_REQUIRED": "Vous devez renseigner votre numéro client.",
	            "ERROR_CLIENT_NUMBER_NOT_EXIST": "Ce numéro client est inconnu.",
	            "ERROR_CIVILITY_REQUIRED": "Vous devez préciser votre civilité.",
	            "ERROR_FUNCTION_REQUIRED": "Vous devez renseigner votre fonction."

	        },
	        "donneesPersonnelles": {
	            "ERROR_LASTNAME_REQUIRED": "Vous devez renseigner votre nom.",
	            "ERROR_FIRSTNAME_REQUIRED": "Vous devez renseigner votre prénom.",
	            "ERROR_POSITION_REQUIRED": "Vous devez renseigner votre fonction.",
	            "EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre e-mail.",
	            "ERROR_PHONE_REQUIRED": "Vous devez renseigner un numéro de téléphone.",
	            "ERROR_TELEPHONE_INVALID": "Numéro de téléphone non valide",
	            "ERROR_MOBILEPHONE_INVALID": "Autre numéro de téléphone non valide"
	        },
	        "modifMotDePasse": {
	            "ERROR_OLDPASSWORD_REQUIRED": "Vous devez renseigner votre ancien mot de passe.",
	            "ERROR_NEWPASSWORD_REQUIRED": "Vous devez renseigner un mot de passe.",
	            "ERROR_NEWPASSWORDCONFIRM_REQUIRED": "Vous devez confirmer votre nouveau mot de passe.",
	            "ERROR_NEWPASSWORD_INVALID": "Nouveau mot de passe non valide",
	            "ERROR_PASSWORD_MISMATCH": "Les deux mots de passe sont différents.",
	            "ERROR_OLDPASSWORD_INCORRECT": "Votre mot de passe est invalide."
	        },
	        "formulaire_upload": {
	            "TYPE_DECLARATION_REQUIRED": "Veuillez sélectionner votre type de déclaration.",
	            "ANNEE_REQUIRED": "Veuillez sélectionner l'année de votre déclaration.",
	            "FILE_REQUIRED": "Veuillez sélectionner le fichier à télécharger.",
	            "ERREUR_DETAILLEE": "Vous ne pouvez pas faire une déclaration détaillée.",
	            "ERREUR_UVC": "Vous ne pouvez pas faire une déclaration par UVC avant 2016."
	        },
	        "visualisationEntreprises": {
	            "CLIENT_NUMBER_REQUIRED": "Vous devez renseigner votre numéro client.",
	            "COMPANY_NOT_FOUND": "Ce numéro client est inconnu.",
	            "COMPANY_ALREADY_BOUND": "Vous avez déjà accès à ce compte."
	        },
	        "ajoutCompteClient": {
	            "CLIENT_NUMBER_REQUIRED": "Vous devez renseigner votre numéro client.",
	            "COMPANY_NOT_FOUND": "Ce numéro client est inconnu.",
	            "COMPANY_ALREADY_BOUND": "Vous avez déjà un compte pour ce numéro client."
	        },
	        "suppressionCompte": {
	            "REASON_REQUIRED": "Vous devez renseigner un motif de suppression.",
	            "PASSWORD_REQUIRED": "Vous devez confirmer la suppression avec votre mot de passe.",
	            "INVALID_PASSWORD": "Mot de passe incorrect, il vous reste #attemptCount# tentative(s) de connexion.",
	            "ACCOUNT_LOCKED": "Votre compte #orgaContext# est bloqué. Pour le débloquer, vous devez réinitialiser votre mot de passe en cliquant sur <a href='/oubli-mot-de-passe'>ce lien</a>"
	        },
	        "reinitialisationMotDePasse": {
	            "ERROR_PASSWORD_REQUIRED": "Vous devez renseigner un mot de passe.",
	            "ERROR_PASSWORD_INVALID": "Votre mot de passe est invalide.",
	            "ERROR_CONFIRM_PASSWORD_MISMATCH": "Les deux mots de passe sont différents.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Vous devez confirmer votre nouveau mot de passe."
	        },
	        "oubliMotDePasse": {
	            "ERROR_ID_REQUIRED": "Vous devez renseigner votre e-mail.",
	            "ERROR_ID_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_ID_NOT_FOUND": "Cette adresse e-mail n'est pas reconnue."
	        },
	        "adhesionRestreinte": {
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre adresse e-mail.",
	            "ERROR_SIRET_INVALID": "Ce SIRET n'est pas valide.",
	            "ERROR_COMPANY_NAME_REQUIRED": "Vous devez renseigner la raison sociale.",
	            "ERROR_ACTIVATION_CODE_REQUIRED": "Vous devez renseigner le code d'activation.",
	            "ERROR_ACTIVATION_CODE_INVALID": "Ce code d'activation n'est pas valide.",
	            "ERROR_REP_REQUIRED": "Vous devez indiquer si vous avez déjà contribué pour la REP emballages ménagers en France.",
	            "ERROR_COMPANY_INVOICE_REQUIRED": "Vous devez indiquer si la société à facturer est la même entreprise.",
	            "ERROR_ADRESS_BILLING_REQUIRED": "Vous devez indiquer une adresse de facturation.",
	            "ERROR_ADRESS_SEND_BILL_REQUIRED": "Vous devez indiquer si l'adresse d'envoi des factures est différente de l'adresse de facturation",
	            "ERROR_BILL_DEMAT_REQUIRED": "Vous devez indiquer si vous optez pour la facture dématérialisée",
	            "ERROR_PROVIDER_REQUIRED": "Vous devez indiquer si vous êtes prestataire.",
	            "ERROR_SIGNER_REQUIRED": "Vous devez indiquer si vous êtes le signataire.",
	            "ERROR_SIRET_EXIST": "Ce numéro SIRET fait déjà partie de nos clients.",
	            "ERROR_SIRET_EXIST_LOGIN": "Connectez-vous à votre espace",
	            "ERROR_DATA_CERTIFICATION_REQUIRED": "Vous devez certifier l'exactitude des données renseignées.",
	            "ERROR_DELEGATE_VALIDATION_REQUIRED": "Vous devez valider le(s) mandat(s) de gestion pour le(s) prestataire(s).",
	            "ERROR_CONTRACT_ACCEPT_REQUIRED": "Vous devez lire et accepter les termes du contrat.",
	            "ERROR_FILE_REQUIRED": "Pièce jointe requise.",
	            "ERROR_FILE_TYPE": "Votre fichier doit être au format : PDF, Excel, Word, PNG ou JPEG.",
	            "ERROR_FILE_SIZE": "Votre fichier ne doit pas dépasser 2 Mo.",
	            "ERROR_SIRET_REQUIRED": "Vous devez renseigner le siret de votre entreprise.",
	            "ERROR_TVA_REQUIRED": "Vous devez renseigner le numéro TVA intracommunautaire."
	        },
	        "rechercheUtilisateur": {
	            "ERROR_EMAIL_MISSING": "E-mail obligatoire",
	            "ERROR_EMAIL_INVALID": "Format de l'e-mail non valide",
	            "ERROR_EMAIL_NOTFOUND": "Aucun utilisateur ne correspond à cet e-mail"
	        }
	    },
	    "labels": {
	        "loaders": {
	            "VALIDATION": "Validation en cours...",
	            "SIGNING": "Signature en cours...",
	            "GETTING_DATA": "Récupération de vos données...",
	            "GETTING_CONTRACT": "Récupération de votre contrat..."
	        },
	        "orgaContext": {
	            "PHONE_NUMBER_ECO": "0 808 80 00 50",
	            "PHONE_NUMBER_ADELPHE": "0 810 00 86 90",
	            "EMAIL_CONTACT_ECO": "clients.emballages@citeo.com",
	            "EMAIL_CONTACT_ADELPHE": "entreprises@adelphe.fr",
	            "EMAIL_CIL": "cil@citeo.com",
	            "NAME": "Citeo"
	        },
	        "transverse": {
	            "BTN_SAUVEGARDER": "Valider",
	            "BTN_ANNULER": "Annuler",
	            "BTN_LOGOUT": "Déconnexion",
	            "BTN_RETOUR": "Retour",
	            "BTN_COMFIRM": "Confirmer",
	            "BTN_OK": "OK",
	            "BTN_ADD": "Ajouter",
	            "BTN_REMOVE": "Supprimer",
	            "BTN_CLOSE": "Fermer",
	            "SAVE_SUCCESS": "Vos modifications ont bien été prises en compte.",
	            "TECHNICAL_ERROR": "Une erreur technique est survenue.",
	            "SAVE_CHANGES": "Enregistrer les modifications",
	            "BTN_NEXT_STEP": "Passer à l'étape suivante",
	            "BTN_VALIDER": "Valider",
	            "BTN_SUIVANT": "Suivant",
	            "BTN_SEND": "Envoyer",
	            "OPERATION_NOT_ALLOWED": "Vous n'êtes pas autorisé à effectuer cette action.",
	            "VOIR_TOUT": "Voir tout",
	            "DOWNLOAD": "Télécharger"
	        },
	        "mode_declaration": {
	            "WEB": "En ligne",
	            "EXCEL": "Excel"
	        },
	        "type_declaration": {
	            "DETAILLEE": "Détaillée",
	            "SECTORIELLE": "Sectorielle",
	            "UVC": "Par UVC",
	            "FORFAIT": "Au forfait"
	        },
	        "statut_declaration": {
	            "EN_COURS": "En cours",
	            "VALIDEE": "Finalisée",
	            "ANNULEE": "Annulée",
	            "A_SAISIR": "À saisir",
	            "INITIALISEE": "En cours"
	        },
	        "relationClient": {
	            "transverse": {
	                "PASSWORD_RULES": "Votre mot de passe doit contenir :",
	                "PASSWORD_RULE_LENGTH": "- Au moins 9 caractères",
	                "PASSWORD_RULE_MAJ": "- Au moins une majuscule",
	                "PASSWORD_RULE_MIN": "- Au moins une minuscule",
	                "PASSWORD_RULE_NUM": "- Au moins un chiffre",
	                "PASSWORD_RULE_SPECIAL_CAR": "- Au moins un caractère spécial figurant dans la liste suivante : ",
	                "GET_NEW_PASSWORD": "Demande d'un nouveau mot de passe",
	                "NEW_PASSWORD_REQUEST_SENT": "Votre demande de réinitialisation de mot de passe a bien été envoyée.",
	                "CNIL_INFORMATION": "Les informations vous concernant ont été collectées en conformité avec les directives de la CNIL et font l’objet d’un traitement par la société Citeo dans le cadre de son fichier client. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès, de rectification aux données qui vous concernent, que vous pouvez exercer en vous adressant à <a href=\"cil@citeo.com\">cil@citeo.com</a>. Vous pouvez également pour un motif légitime vous opposer au traitement des données vous concernant."
	            },
	            "authentification": {
	                "TITLE": "Connexion",
	                "MESSAGE": "Identifiez-vous pour accéder à votre Espace.",
	                "VALIDER": "Me connecter",
	                "PLACEHOLDER_LOGIN": "Identifiant (adresse e-mail)",
	                "PLACEHOLDER_PASSWORD": "Mot de passe",
	                "FORGOTTEN_PASSWORD": "1ère connexion / mot de passe oublié ?",
	                "LOGIN": "Me connecter",
	                "CREATE_ACCOUNT": "Créez votre compte",
	                "DONT_HAVE_ACCOUNT_YET": "Vous n'avez pas encore de compte ?"

	            },
	            "inscription": {
	                "PLACEHOLDER_LASTNAME": "Nom *",
	                "PLACEHOLDER_FIRSTNAME": "Prénom *",
	                "PLACEHOLDER_PASSWORD": "Mot de passe *",
	                "PLACEHOLDER_CONFIRM_PASSWORD": "Confirmez le mot de passe *",
	                "PLACEHOLDER_TELEPHONE": "N° téléphone (principal) *",
	                "PLACEHOLDER_EMAIL": "Adresse e-mail *",
	                "PLACEHOLDER_FUNCTION": "Fonction *",
	                "PLACEHOLDER_CLIENT_NUMBER": "Numéro client *",
	                "PLACEHOLDER_OTHER_FUNCTION": "Autre fonction",
	                "CREATION_ACCOUNT_TITLE": "CRÉER MON COMPTE",
	                "CREATION_ACCOUNT_ALERT_CLIENT_NUMBER_REQUIRED": "Vous devez disposer d'un numéro client pour créer votre compte.",
	                "CREATION_ACCOUNT_INSTRUCTION": "Renseignez tous les champs ci-dessous afin de créer votre compte.",
	                "CREATION_ACCOUNT_ACTION": "Créer mon compte",
	                "ACCOUNT_EXIST_YET": "Vous avez déjà un compte ?",
	                "LOGIN": "Identifiez-vous",
	                "REQUIRED_FIELDS": "*Champs obligatoires",
	                "ACCOUNT_ALREADY_EXIST": "Vous avez déjà un compte ?",
	                "LINK_SIGN_UP": "IDENTIFIEZ-VOUS",
	                "RADIO_BUTTON_CIVILITY": "Civilité * : ",
	                "RADIO_BUTTON_MR": " M. ",
	                "RADIO_BUTTON_MISS": " Mme",
	                "INFORMATION": "Les informations vous concernant ont été collectées en conformité avec les directives de la CNIL et font l’objet d’un traitement par la société #orgaContext# dans le cadre de son fichier client. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès, de rectification aux données qui vous concernent, que vous pouvez exercer en vous adressant à #linkMail#. Vous pouvez également pour un motif légitime vous opposer au traitement des données vous concernant. ",
	                "LANGUE_CAPTCHA": "fr"
	            },
	            "donneesPersonnelles": {
	                "PERSONAL_DATA_TITLE": "Mes informations personnelles",
	                "CIVILITY_FIELD": "Civilité * : ",
	                "MSG_MONSIEUR": "M.",
	                "MSG_MADAME": "Mme",
	                "PLACEHOLDER_LASTNAME": "Nom *",
	                "PLACEHOLDER_FIRSTNAME": "Prénom *",
	                "PLACEHOLDER_POSITION": "Fonction *",
	                "PLACEHOLDER_EMAIL": "E-mail professionnel *",
	                "PLACEHOLDER_PHONE": "N° téléphone principal",
	                "PLACEHOLDER_MOBILEPHONE": "Autre n° téléphone",
	                "PLACEHOLDER_ACCESS": "Mes accès sur Mon Espace",
	                "PLACEHOLDER_PRINCIPAL": "Correspondant principal pour mon entreprise",
	                "FUNCTION": "Fonction",
	                "OTHER_FUNCTION": "Autre fonction",
	                "BTN_SAVE_CHANGES": "Enregistrer les modifications"
	            },
	            "modifMotDePasse": {
	                "INFORMATION": "Vous pouvez modifier votre mot de passe à tout moment. Pour information, dans le cadre de notre politique de sécurité des données, nous vous demanderons de changer de mot de passe tous les 12 mois.",
	                "SECURITY_TITLE": "Mot de passe",
	                "PLACEHOLDER_OLDPASSWORD": "Ancien mot de passe",
	                "PLACEHOLDER_NEWPASSWORD": "Nouveau mot de passe",
	                "PLACEHOLDER_NEWPASSWORD_CONFIRM": "Confirmez le nouveau mot de passe",
	                "SAVE_SUCCESS": "Votre mot de passe a bien été modifié."
	            },

	            "acceuilPortail": {
	                "TITLE_1": "BIENVENUE SUR",
	                "TITLE_2": "VOTRE ESPACE",
	                "TEXT_PART_1": "Votre compte a bien été créé. Un message a été envoyé à ",
	                "TEXT_PART_2": "qui définira vos accès.",
	                "TEXT_PART_3": "Pour accéder à nos services ",
	                "ACCESS_ACCOUNT": "CLIQUEZ ICI ",
	                "LINK": "www.ecoemballages.fr"
	            },

	            "profilesCorrespondants": {
	                "TABLE_HEADER_NAME": "Profils",
	                "TABLE_HEADER_ADDED_DATE": "Date de l'ajout",
	                "TABLE_HEADER_LAST_CONNECTION_DATE": "Date de dernière connexion",
	                "TABLE_HEADER_ACCESS": "Accès",
	                "THE": "Le"
	            },

	            "choixEntreprise": {
	                "WELCOME": "Bienvenue",
	                "CHOOSE_ACCOUNT": "Choisissez le compte client auquel vous souhaitez accéder :",
	                "SEARCH": "Rechercher",
	                "ADD_CLIENT_ACCOUNT": "Ajouter un autre numéro client"
	            },

	            "access": {
	                "SERVICES": "Services",
	                "FACTURATION": "Facturation",
	                "DECLARATION": "Déclaration"
	            },

	            "visualisationEntreprises": {
	                "BTN_ADD_COMPANY": "Ajouter un compte client",
	                "COMFIRM_REMOVE_COMPANY": "Voulez-vous vraiment supprimer ce compte de votre espace ? En le supprimant, vous n'aurez plus accès à ses données.",
	                "BTN_REMOVE": "Supprimer",
	                "TITLE_ADD_COMPANY": "Ajouter un compte client",
	                "TEXT_ADD_COMPANY": "Renseignez le numéro client de l'entreprise que vous souhaitez ajouter.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Numéro client *",
	                "BTN_ADD": "Ajouter",
	                "DELETION_DENIED": "Vous êtes le correspondant principal pour ce compte client. Si vous souhaitez supprimer ce compte de votre portefeuille, envoyez un message à clients.emballages@citeo.com ou appelez-nous au 0 808 80 00 50  (service gratuit + prix appel).",
	                "BTN_CONNECT": "Me connecter"
	            },

	            "header": {
	                "PHONE_NUMBER": "0 808 80 00 50",
	                "SEND_EMAIL": "Envoyer un e-mail",
	                "MAKE_AN_APPOINTMENT": "Prendre rdv",
	                "MY_ACCOUNT": "Mon compte client",
	                "PERSONAL_INFO": "Mes informations personnelles",
	                "MANAGE_MY_ACCOUNTS": "Gérer mes comptes client",
	                "LOGOUT": "Me déconnecter",
	                "LEGAL_MENTIONS": "Mentions légales",
	                "CGU": "CGU"
	            },

	            "ajoutCompteClient": {
	                "TITLE_ADD_COMPANY": "Ajouter un autre compte client",
	                "TEXT_ADD_COMPANY": "Renseignez le numéro client de l'entreprise que vous souhaitez ajouter.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Numéro client *",
	                "BTN_ADD": "Ajouter"
	            },

	            "functions": [{
	                "label": "Administratif, fi et compt - Directeur",
	                "code": "0x1"
	            }, {
	                "label": "Administratif, fi et compt - Employé",
	                "code": "0x2"
	            }, {
	                "label": "Administratif, fi et compt - Resp/Manager",
	                "code": "0x3"
	            }, {
	                "label": "Approvisionnement et achat - Directeur",
	                "code": "0x4"
	            }, {
	                "label": "Approvisionnement et achat - Employé",
	                "code": "0x5"
	            }, {
	                "label": "Approvisionnement et achat - Resp/Manager",
	                "code": "0x6"
	            }, {
	                "label": "Autre - Assistant",
	                "code": "0x7"
	            }, {
	                "label": "Autre - Directeur",
	                "code": "0x8"
	            }, {
	                "label": "Autre - Employé",
	                "code": "0x9"
	            }, {
	                "label": "Autre - Ingénieur",
	                "code": "0x10"
	            }, {
	                "label": "Autre - Responsable/Manager",
	                "code": "0x11"
	            }, {
	                "label": "Commercial et ADV - Assistant",
	                "code": "0x12"
	            }, {
	                "label": "Commercial et ADV - Directeur",
	                "code": "0x13"
	            }, {
	                "label": "Commercial et ADV - Resp/Manager",
	                "code": "0x14"
	            }, {
	                "label": "Communication - Assistant",
	                "code": "0x15"
	            }, {
	                "label": "Communication - Directeur",
	                "code": "0x16"
	            }, {
	                "label": "Communication - Ingénieur",
	                "code": "0x17"
	            }, {
	                "label": "Communication - Responsable/Manager",
	                "code": "0x18"
	            }, {
	                "label": "Conseil/consultant - Directeur",
	                "code": "0x19"
	            }, {
	                "label": "Conseil/consultant - Resp/Manager",
	                "code": "0x20"
	            }, {
	                "label": "Direction générale et stratégique",
	                "code": "0x21"
	            }, {
	                "label": "Dirigeant - Autre",
	                "code": "0x22"
	            }, {
	                "label": "Dirigeant - Délégué Général",
	                "code": "0x23"
	            }, {
	                "label": "Dirigeant - Directeur Général",
	                "code": "0x24"
	            }, {
	                "label": "Dirigeant - Gérant/Exploitant",
	                "code": "0x25"
	            }, {
	                "label": "Dirigeant - Président",
	                "code": "0x26"
	            }, {
	                "label": "Dirigeant - Président Directeur Général",
	                "code": "0x27"
	            }, {
	                "label": "Dirigeant - Secrétaire Général",
	                "code": "0x28"
	            }, {
	                "label": "Dirigeant - Vice-Président",
	                "code": "0x29"
	            }, {
	                "label": "Emballage - Assistant",
	                "code": "0x30"
	            }, {
	                "label": "Emballage - Directeur",
	                "code": "0x31"
	            }, {
	                "label": "Emballage - Ingénieur",
	                "code": "0x32"
	            }, {
	                "label": "Emballage - Responsable/Manager",
	                "code": "0x33"
	            }, {
	                "label": "Gérance",
	                "code": "0x34"
	            }, {
	                "label": "Juridique et réglementation - Assistant",
	                "code": "0x35"
	            }, {
	                "label": "Juridique et réglementation - Directeur",
	                "code": "0x36"
	            }, {
	                "label": "Juridique et réglementation - Resp/Manager",
	                "code": "0x37"
	            }, {
	                "label": "Marketing - Assistant",
	                "code": "0x38"
	            }, {
	                "label": "Marketing - Directeur ",
	                "code": "0x39"
	            }, {
	                "label": "Marketing - Responsable/Manager",
	                "code": "0x40"
	            }, {
	                "label": "Présidence",
	                "code": "0x41"
	            }, {
	                "label": "Prestataire de service",
	                "code": "0x42"
	            }, {
	                "label": "Production - Assistant",
	                "code": "0x43"
	            }, {
	                "label": "Production - Directeur",
	                "code": "0x44"
	            }, {
	                "label": "Production - Employé",
	                "code": "0x45"
	            }, {
	                "label": "Production - Responsable/Manager",
	                "code": "0x46"
	            }, {
	                "label": "Qualité et environnement - Assistant",
	                "code": "0x47"
	            }, {
	                "label": "Qualité et environnement - Directeur",
	                "code": "0x48"
	            }, {
	                "label": "Qualité et environnement - Employé",
	                "code": "0x49"
	            }, {
	                "label": "Qualité et environnement - Ingénieur",
	                "code": "0x50"
	            }, {
	                "label": "Qualité et environnement - Resp/Manager",
	                "code": "0x51"
	            }, {
	                "label": "Recherche et développement - Assistant",
	                "code": "0x52"
	            }, {
	                "label": "Recherche et développement - Directeur",
	                "code": "0x53"
	            }, {
	                "label": "Recherche et développement - Employé",
	                "code": "0x54"
	            }, {
	                "label": "Recherche et développement - Ingénieur",
	                "code": "0x55"
	            }, {
	                "label": "Recherche et développement - Resp/Manager",
	                "code": "0x56"
	            }, {
	                "label": "Ressources humaines - Assistant",
	                "code": "0x57"
	            }, {
	                "label": "Ressources humaines - Directeur ",
	                "code": "0x58"
	            }, {
	                "label": "Ressources humaines - Resp/Manager",
	                "code": "0x59"
	            }, {
	                "label": "Services généraux - Assistant",
	                "code": "0x60"
	            }, {
	                "label": "Services généraux - Directeur",
	                "code": "0x61"
	            }, {
	                "label": "Services généraux - Employé",
	                "code": "0x62"
	            }, {
	                "label": "Services généraux - Resp/Manager",
	                "code": "0x63"
	            }, {
	                "label": "Système d’information - Assistant",
	                "code": "0x64"
	            }, {
	                "label": "Système d’information - Directeur",
	                "code": "0x65"
	            }, {
	                "label": "Système d’information - Ingénieur",
	                "code": "0x66"
	            }, {
	                "label": "Système d’information - Resp/Manager",
	                "code": "0x67"
	            }, {
	                "label": "à définir",
	                "code": "0x68"
	            }],

	            "suppressionCompte": {
	                "DELETE_MY_ACCOUNT": "Supprimer mon compte",
	                "ATTENTION": "Attention !",
	                "EXPLAINATION": "Vous vous apprêtez à supprimer votre compte. Cette suppression entraînera la perte de vos données personnelles.",
	                "GIVE_REASON": "Renseignez un motif de suppression",
	                "PLACEHOLDER_PASSWORD": "Renseignez votre mot de passe pour confirmer",
	                "CANNOT_DELETE": "Vous êtes le correspondant principal pour un ou plusieurs comptes client. Si vous souhaitez supprimer votre compte, envoyez un message à clients.emballages@citeo.com ou appelez-nous au 0 808 80 00 50  (service gratuit + prix appel)."
	            },

	            "reinitialisationMotDePasse": {
	                "TITLE": "Mot de passe oublié",
	                "INSTRUCTION": "Merci de renseigner les champs ci-dessous pour réinitialiser votre mot de passe.",
	                "NEW_PASSWORD_PLACEHOLDER": "Nouveau mot de passe",
	                "CONFIRM_NEW_PASSWORD_PLACEHOLDER": "Confirmez votre nouveau mot de passe"
	            },

	            "oubliMotDePasse": {
	                "TITLE": "Mot de passe oublié",
	                "INSTRUCTION": "Merci de renseigner l'adresse e-mail associée à votre compte pour réinitialiser votre mot de passe.",
	                "ID_PLACEHOLDER": "Identifiant (adresse e-mail)"
	            },

	            "attestation": {
	                "ATTESTATION_TITLE": "VOTRE ATTESTATION D'ADHÉSION",
	                "ATTESTATION_NAME": "Attestation d'adhésion",
	                "ATTESTATION_NON_DISPONIBLE": "Attestation d'adhésion indisponible",
	                "ATTESTATION_ETAT_1": "Indisponible - Déclaration non transmise",
	                "ATTESTATION_ETAT_2": "Indisponible - Facture à échéance non réglée",
	                "ATTESTATION_ETAT_3": "Indisponible - Déclaration non transmise "
	            },
	            "facture": {
	                "FACTURE_TITLE": "VOS FACTURES"
	            },
	            "mois": {
	                "01": "Janvier",
	                "02": "Février",
	                "03": "Mars",
	                "04": "Avril",
	                "05": "Mai",
	                "06": "Juin",
	                "07": "Juillet",
	                "08": "Août",
	                "09": "Septembre",
	                "10": "Octobre",
	                "11": "Novembre",
	                "12": "Décembre"
	            },
	            "contrat": {
	                "CONTRAT_NAME": "Contrat",
	                "DELEGATION_NAME": "Autorisation de mandat"
	            },
	            "adhesionRep": {
	                "ETAPE_1": "ÉTAPE N°1/4",
	                "ETAPE_1_QUESTION_1": "Les produits - ou une partie des produits - que vous commercialisez sont-ils consommés ou utilisés par des ménages en France ?",
	                "INTITULE_ETAPE_1": "PAYS DE COMMERCIALISATION DES PRODUITS EMBALLÉS",
	                "REP_OUI": "Oui",
	                "REP_NON": "Non",
	                "RETOUR": "Retour",
	                "SUIVANT": "Suivant",
	                "ETAPE_2": "ÉTAPE N°2/4",
	                "INTITULE_ETAPE_2": "FABRICATION DES PRODUITS EMBALLÉS",
	                "ETAPE_2_QUESTION_A": "Fabriquez-vous (pour votre compte ou pour le compte d'un tiers) ou faites-vous fabriquer des produits emballés qui sont mis sur le marché français ?",
	                "ETAPE_2_QUESTION_B": "Dans quel contexte ?",
	                "ETAPE_2_QUESTION_B_REP_1": "Je fabrique mes produits.",
	                "ETAPE_2_QUESTION_B_REP_2": "Je fais fabriquer mes produits.",
	                "ETAPE_2_QUESTION_C": "Si vous faites fabriquer des produits emballés qui sont mis sur le marché français, êtes-vous propriétaire des produits au moment de leur emballage ?",
	                "ETAPE_3": "ÉTAPE N°3/4",
	                "INTITULE_ETAPE_3": "IMPORTATION DES PRODUITS EMBALLÉS",
	                "ETAPE_3_QUESTION_1": "Importez-vous (de l'Union Européenne ou hors Union Européenne) des produits emballés qui sont mis sur le marché français ?",
	                "ETAPE_4": "ÉTAPE N°4/4",
	                "INTITULE_ETAPE_4": "EXPÉDITION DES PRODUITS EMBALLÉS",
	                "ETAPE_4_QUESTION_1": "Expédiez-vous vos produits à vos clients, ou mettez-vous à leur disposition des emballages de service (sachets, papier cadeau, etc.) ?",
	                "ETAPE_4_QUESTION_1_REP_1": "Oui, j'expédie mes produits à mes clients.",
	                "ETAPE_4_QUESTION_1_REP_2": "Oui, je mets à disposition de mes clients des emballages de service.",
	                "ETAPE_4_QUESTION_1_REP_3": "Non, ni l'un ni l'autre.",
	                "RESULTATS": "Voir les résultats"
	            },
	            "accountDeletionReason": [{
	                "code": "CHANGEMENT_FONCTION",
	                "label": "Changement de fonction"
	            }, {
	                "code": "DEPART_ENTREPRISE",
	                "label": "Départ de l'entreprise"
	            }, {
	                "code": "AUTRE",
	                "label": "Autre"
	            }],
	            "adhesionRestreinte": {
	                "TITLE": "Saisissez vos conditions particulières",
	                "TITLE_RECONTRACT": "Saisissez vos conditions particulières recontract",
	                "transverse": {
	                    "RADIO_YES": "Oui",
	                    "RADIO_NO": "Non",
	                    "SIRET": "SIRET",
	                    "ADRESS": "Adresse (N° et nom de rue) *",
	                    "ADRESS_COMPLEMENT": "Complément adresse",
	                    "ADD_ADRESS_COMPLEMENT": "Ajouter un complément d'adresse",
	                    "ZIPCODE": "Code postal *",
	                    "CITY": "Ville *",
	                    "COUNTRY": "Pays",
	                    "COMPANY_NAME": "Raison Sociale *",
	                    "RADIO_MR": " M. ",
	                    "RADIO_MISS": " Mme",
	                    "EMAIL": "E-mail *",
	                    "CIVILITY": "Civilité *",
	                    "FIRST_NAME": "Prénom *",
	                    "LAST_NAME": "Nom *",
	                    "FUNCTION": "Fonction *",
	                    "POSITION": "Intitulé du poste",
	                    "TEL": "N° téléphone (principal)"
	                },
	                "informationsAdministratives": {
	                    "LEGEND": "Informations administratives",
	                    "INSTRUCTION": "Veuillez nous indiquer les informations administratives de votre entreprise.",
	                    "INSTRUCTION_RECONTRACT": "Veuillez nous indiquer les informations administratives de votre entreprise recontract.",
	                    "COMPANY_NAME": "Raison Sociale *",
	                    "COMERCIAL_NAME": "Nom commercial",
	                    "APE": "Code APE",
	                    "HEAD_OFFICE_ADRESS": "Adresse du siège social :",
	                    "REP": "Votre entreprise a-t-elle déjà contribué à un éco-organisme pour la REP emballages ménagers en France ?",
	                    "AMOUNT": "Montant de la dernière contribution en Euros *",
	                    "ATTACHMENT": "Veuillez nous fournir un extrait K-Bis à jour ou tout autre document officiel reprenant les principales informations juridiques concernant votre entreprise (forme juridique, siège social, numéro d’identification etc.)",
	                    "ADD_FILE": "DÉPOSEZ VOTRE FICHIER",
	                    "ADD_FILE_LEGEND": "2Mo max. ; formats acceptés : PDF, Excel, Word, PNG ou JPEG"
	                },
	                "informationsAdministrativesComplementaires": {
	                    "LEGEND": "Informations administratives complémentaires",
	                    "INSTRUCTION": "Pour mieux vous connaître, nous vous invitons à renseigner les entreprises et marques couvertes par le contrat, et si vous faites partie d'une organisation professionnelle.",
	                    "INSTRUCTION_RECONTRACT": "Pour mieux vous connaître, nous vous invitons à renseigner les entreprises et marques couvertes par le contrat, et si vous faites partie d'une organisation professionnelle recontract.",
	                    "COMPANIES_IN_CONTRACT": "Quelles sont les entreprises couvertes par le contrat ?",
	                    "COMPANIES_IN_RECONTRACT": "Quelles sont les entreprises couvertes par le recontrat ?",
	                    "COMPANY_NAME": "Nom de l'entreprise",
	                    "COMERCIAL_NAME": "Nom commercial",
	                    "COUNTRY": "Pays",
	                    "ADD_COMPANY": "Ajouter une autre entreprise",
	                    "BRANDS_IN_CONTRACT": "Quelles sont les marques couvertes par le contrat ?",
	                    "BRANDS_IN_RECONTRACT": "Quelles sont les marques couvertes par le contrat recontract ?",
	                    "BRAND_NAME": "Nom de la marque",
	                    "ADD_BRAND": "Ajouter une autre marque",
	                    "IS_PRO_ORGANISATION": "Votre entreprise fait-elle partie d'une organisation professionnelle ?",
	                    "PRO_ORGANISATION_NAME": "Nom de l'organisation professionnelle"
	                },
	                "informationsDeFacturation": {
	                    "LEGEND": "Informations générales de facturation",
	                    "BILLING_ADRESS_CONDITION": "L'adresse de facturation est-elle différente de l'adresse de l'entreprise ?",
	                    "BILLING_ADRESS": "Adresse de facturation",
	                    "TVA": "N° TVA intracommunautaire",
	                    "COMPANY_TO_INVOICE_QUESTION": "La société à facturer est-elle différente de votre entreprise ?",
	                    "COMPANY_TO_INVOICE_NAME": "Nom de la société à facturer *",
	                    "BILL_SEND_ADRESS": "Adresse d'envoi des factures",
	                    "BILLING_ADRESS_SEND_QUESTION": "L'adresse d'envoi des factures est-elle différente de l'adresse de facturation ?",
	                    "BILLING_DEMAT_QUESTION": "Souhaitez-vous opter pour la facture dématérialisée ?",
	                    "BILLING_DEMAT_LEGEND": "(Par défaut, le correspondant principal recevra les factures dématérialisées. Vous pourrez modifier ce paramètre dans votre Espace client.)"
	                },
	                "correspondantPrincipal": {
	                    "LEGEND": "Correspondant principal",
	                    "INSTRUCTION": "Renseignez les informations du correspondant principal.",
	                    "INSTRUCTION_RECONTRACT": "Renseignez les informations du correspondant principal recontract.",
	                    "INDICATION": "Quoiqu'il en soit, la société contractante reste seule redevable de la responsabilité élargie du producteur pour les déchets d'emballages ménagers.",
	                    "IS_PROVIDER": "Êtes-vous prestataire ?",
	                    "IS_PROVIDER_RECONTRACT": "Êtes-vous prestataire recontract ?"
	                },
	                "signataire": {
	                    "LEGEND": "Identification du signataire",
	                    "DESCRIPTION_1": "Vous avez rempli l'ensemble des données nécessaires à votre adhésion Citeo.",
	                    "DESCRIPTION_2": "Nous avons maintenant besoin d'identifier la personne qui signera le contrat. Le signataire doit avoir le pouvoir d'engager votre entreprise.",
	                    "DESCRIPTION_3": "Si vous êtes le signataire, vous devrez saisir le code d'activation reçu par e-mail afin de procéder à la signature de votre contrat.",
	                    "DESCRIPTION_4": "Si vous n'êtes pas le signataire, lorsque vous validerez votre contrat, le signataire recevra par e-mail le lien d'accès à ce formulaire. Il pourra alors relire le contrat puis le valider grâce au code d'activation qui lui sera envoyé.",
	                    "INSTRUCTION": "Renseignez les informations du signataire du contrat"
	                },
	                "signataire_recontract": {
	                    "LEGEND": "Identification du signataire reconctract",
	                    "DESCRIPTION_1": "Vous avez rempli l'ensemble des données nécessaires à votre adhésion Citeo reconctract.",
	                    "DESCRIPTION_2": "Nous avons maintenant besoin d'identifier la personne qui signera le contrat. Le signataire doit avoir le pouvoir d'engager votre entreprise reconctract.",
	                    "DESCRIPTION_3": "Si vous êtes le signataire, vous devrez saisir le code d'activation reçu par e-mail afin de procéder à la signature de votre contrat reconctract.",
	                    "DESCRIPTION_4": "Si vous n'êtes pas le signataire, lorsque vous validerez votre contrat, le signataire recevra par e-mail le lien d'accès à ce formulaire. Il pourra alors relire le contrat puis le valider grâce au code d'activation qui lui sera envoyé reconctract.",
	                    "INSTRUCTION": "Renseignez les informations du signataire du contrat reconctract"
	                },
	                "visualisation": {
	                    "LEGEND": "Télécharger vos documents contractuels",
	                    "DOWNLOAD_CONTRACT_FR": "Conditions particulières",
	                    "DOWNLOAD_GENERAL_CONDITIONS_FR": "Conditions générales de services",
	                    "DOWNLOAD_MANDATE_FR": "Mandat de gestion",
	                    "DOWNLOAD_MANUEL_FR": "Annexe 1 - Guide de la Déclaration",
	                    "DOWNLOAD_RATES_FR": "Annexe 2 - Tarifs Citeo",
	                    "DOWNLOAD_GRAPHIC_CHART_FR": "Annexe 3 - Charte graphique du Point Vert",
	                    "DOWNLOAD_CODE_FR": "Annexe 4 - Code de l'environnement",
	                    "DOWNLOAD_CONTRACT_EN": "Specific conditions",
	                    "DOWNLOAD_GENERAL_CONDITIONS_EN": "Terms and conditions",
	                    "DOWNLOAD_MANDATE_EN": "Management mandate",
	                    "DOWNLOAD_MANUEL_EN": "Annex 1 - Data submission manual",
	                    "DOWNLOAD_RATES_EN": "Annex 2 - Citeo rates",
	                    "DOWNLOAD_GRAPHIC_CHART_EN": "Annex 3 - Graphical charter of the Green Dot",
	                    "DOWNLOAD_CODE_EN": "Annex 4 - The French Environmental law"
	                },
	                "validation": {
	                    "LEGEND": "Validation des données",
	                    "IS_SIGNER": "Êtes-vous le signataire du contrat ?",
	                    "VALIDATE_DATA": "VALIDER LES DONNÉES"
	                },
	                "signature": {
	                    "LEGEND": "Signez votre contrat Citeo",
	                    "INDICATION": "Un mail vient de vous être envoyé avec votre code d'activation. Dès que vous l'aurez récupéré, vous pourrez signer votre contrat et valider votre adhésion à Citeo.",
	                    "CODE_ACTIVATION": "Veuillez saisir votre code d'activation",
	                    "DATA_VALIDATION": "Je certifie l'exactitude des données renseignées dans le présent contrat.",
	                    "PROVIDER_VALIDATION": "Je valide le mandat de gestion pour le prestataire renseigné.",
	                    "CONTRACT_ACCEPT": "Je déclare avoir pris connaissance et accepter les termes du contrat Citeo",
	                    "SIGN": "SIGNER MON CONTRAT"
	                },

	                "popupDone": {

	                    "title": "Vous avez signé votre contrat Citeo",
	                    "MSG1": "Citeo vous remercie de votre confiance. Nous avons bien reçu votre contrat.",
	                    "MSG2": "Vous recevrez sous 8 jours votre contrat validé, votre attestation d'adhésion et vos accès à Mon Espace Citeo.",

	                    "MSG4": "Vous pouvez contacter nos conseillers au 0 808 80 00 50  (service gratuit + prix appel).",
	                    "BTN": "RETOUR À L'ACCUEIL"
	                },

	                "popupDoneNotSigner": {
	                    "title": "MERCI !",
	                    "MSG1": " Citeo vous remercie de votre confiance. Nous avons envoyé un message au signataire que vous avez identifié afin qu'il accède à son espace de signature et valide le contrat Citeo.",
	                    "BTN": "RETOUR À L'ACCUEIL"
	                },

	                "popupValidationContrat": {
	                    "title": "Vous êtes sur le point de signer votre contrat Citeo ",
	                    "MSG1": "SIGNER MON CONTRAT ",
	                    "MSG2": "ANNULER",
	                    "MSG3": "Une erreur technique est survenue.",
	                    "MSG4": "Le code entré est invalide.",
	                    "MSG5": "Le lien suivi a expiré."
	                },
	                "popupMailSent": {
	                    "TITLE": "Vos données ont été validées",
	                    "MSG": "Vérifiez votre boîte mail pour obtenir le code d'activation"
	                }
	            },
	            "rechercheUtilisateur": {
	                "LABEL_EMAIL": "E-mail",
	                "SEARCH_USER": "Rechercher l'utilisateur"
	            }
	        },
	        "declaration": {
	            "uvc": {
	                "formulaire": {
	                    "ALERT": "Alerte",
	                    "WARNING": "Attention",
	                    "TYPE_DECLARATION": "TYPE DE DÉCLARATION",
	                    "TITRE_PRODUIT": "1. Produit",
	                    "CODE_PRODUIT": "Code produit",
	                    "TITRE_POIDS": "2. POIDS UNITAIRE PAR MATÉRIAU ",
	                    "TITRE_POIDS_UNITAIRE": "(EN GRAMMES)",
	                    "TITRE_POIDS_UNITAIRE_KG": "(EN KILOGRAMMES)",
	                    "TITRE_DECOTE": "3. Décote",
	                    "TITRE_BONUS": "4. Bonus",
	                    "TITRE_MALUS": "5. Malus",
	                    "TITRE_NOMBRE_UVC": "6. NOMBRE D'UVC MISES EN MARCHÉ",
	                    "LABEL_PAPIER_CARTON_RECYCLE": "Papier-carton recyclé",
	                    "LABEL_LIBELLE_PRODUIT": "Libellé du produit",
	                    "LABEL_LIBELLE_UVC": "Libellé de votre UVC",
	                    "LABEL_ADD_UVC": "Déclarer votre UVC",
	                    "LABEL_ADD_SPEC": "Déclarer un cas spécifique",
	                    "MONNAIE": "€",
	                    "ERROR_LIBELLE": "Veuillez saisir le libellé.",
	                    "ERROR_PRODUIT": "Renseignez un code produit à l'aide de la nomenclature.",
	                    "ERROR_MATERIAUX": "Renseignez au moins un poids dans une des colonnes matériau (numérique et positif).",
	                    "LABEL_REMPLIR_PRODUITS": "Pensez à renseigner tous les matériaux qui composent votre emballage.",
	                    "DECOTE_OUI": "Oui",
	                    "DECOTE_NON": "Non",
	                    "ERROR_DECOTE": "La décote ne peut être cochée que si un poids a été renseigné pour le matériau \"Papier-carton autre que brique\".",
	                    "MALUS_PERTURBATEUR": "Perturbateur",
	                    "MALUS_SANS_FILIERE": "Sans filière",
	                    "TITRE_EMB_MENAGER": "Emballages ménagers",
	                    "TITRE_EMB_NON_MENAGER": "Emballages non ménagers",
	                    "TITRE_NB_UVC": "Renseignez un nombre d'UVC (numérique, positif et entier)",
	                    "TITRE_TOTAL_UVC": "Total de votre UVC",
	                    "TITRE_CONTRIBUTION_UNIT_TOTAL": "Contribution unitaire total (ct euro)",
	                    "TITRE_CONTRIBUTION_TOTAL": "Total de la contribution pour votre UVC (euro)",
	                    "BTN_VALIDER_PRODUIT": "Valider la saisie produit",
	                    "LABEL_TRI": "Trier par",
	                    "LABEL_Recherche": "Recherche",
	                    "BTN_ADD_UVC": "Ajouter une UVC",
	                    "LABEL_CONTRIBUTION": "Contribution",
	                    "LABEL_HT": "HT",
	                    "BTN_NEXT_STEP": "ÉTAPE SUIVANTE",
	                    "ERREUR_DECLARATION": "Erreur dans la récupération de la déclaration",
	                    "LABEL_DECOTE": "Papier carton recyclé",
	                    "TITRE_UVC_VUE": "Déclaration : UVC",
	                    "ERREUR_PRODUIT_SPEC1": "Un seul matériau peut être renseigné avec ce code produit.",
	                    "ERREUR_PRODUIT_SPEC2": "Aucun matériau de type \"papier-carton autre que brique\", \"autres emballages plastique\" et \"aluminium\" n'est renseigné avec ce code produit.",
	                    "ERREUR_PRODUIT_SPEC3": "Vous ne pouvez pas renseigner un matériau autre que \"papier-carton autre que brique\", \"autres emballages plastique\" et \"aluminium\" avec ce code produit.",
	                    "ERREUR_NON_BLOCANT": "Les emballages perturbateurs ou sans filière ne bénéficient pas du Bonus \"action de sensibilisation\".",
	                    "INFOBULLE1": "Pour ces emballages spécifiques, vous pouvez déclarer sur une seule ligne des emballages de formats, poids ou conditionnements différents. La déclaration de ces emballages se fait en kilogramme.",
	                    "INFOBULLE2": "Indiquez dans \"libellé\" le nom de votre produit. Dans \"code produit\", sélectionnez le code qui se rapproche le plus de votre produit dans la liste proposée.",
	                    "INFOBULLE3": "Indiquez le poids de chacun des matériaux composant votre emballage.",
	                    "INFOBULLE4": "Indiquez si votre emballage en papier-carton contient plus de 50 % de recyclé. Pour bénéficier de la décote de 10 % sur la contribution au poids, vous devez également joindre le formulaire mis à disposition par Citeo, dûment complété par vos fournisseurs d’emballages.",
	                    "INFOBULLE5": "Les Bonus portent sur la réduction à la source, l'amélioration de la recyclabilité et la sensibilisation. Pour en savoir plus, téléchargez le Guide des Bonus 2017 dans vos Documents Utiles.",
	                    "INFOBULLE6": "Indiquez si votre emballage fait partie de la liste des emballages perturbateurs ou s’il est dans les consignes de tri, mais sans filière de recyclage. Pour en savoir plus, consultez la liste des emballages perturbateurs dans vos Documents Utiles.",
	                    "INFOBULLE7": "Les emballages ménagers sont mis sur le marché en vue de la consommation ou de l'utilisation du produit qu'il contient à des fins privées.",
	                    "INFOBULLE8": "INFOBULLE8...",
	                    "INFOBULLE9": "INFOBULLE9...",
	                    "ERREUR_FORMULAIRE": "Veuillez corriger les erreurs dans le formulaire.",
	                    "BTN_RETOUR": "Retour",
	                    "BTN_ENREGISTRER": "Enregistrer",
	                    "BTN_ANNULER": "Annuler",
	                    "BTN_NEW_UVC": "nouvelle uvc"
	                },
	                "Materiaux": {
	                    "acier": "Acier",
	                    "alum": "Aluminium",
	                    "pcNonBriq": "Papier - carton (autre que brique)",
	                    "briq": "Briques",
	                    "petClair": "Bouteilles et flacons PET clair",
	                    "flacon": "Autres bouteilles et flacons",
	                    "autrePlas": "Autres emballages plastique",
	                    "verre": "Verre",
	                    "autre": "Autres matériaux",
	                    "bois": "Bois",
	                    "textile": "Textile"
	                },
	                "formulaire_upload": {
	                    "TITLE": "VOUS SOUHAITEZ DÉPOSER VOTRE FICHIER DE DÉCLARATION",
	                    "TITLE_SELECT_DECLARATION_TYPE": "Sélectionnez votre type de déclaration :",
	                    "TITLE_SELECT_YEAR": "Choisissez votre année de déclaration :",
	                    "TITLE_SELECT_FILE": "Déposez votre fichier",
	                    "LABEL_BTN_VALIDATE": "Étape suivante"
	                },
	                "send_mails": {
	                    "TITLE": "DESTINATAIRES DE L'ACCUSÉ DE RÉCEPTION",
	                    "TITLE_ADD_MSG_1": "Une fois votre déclaration envoyée, vous recevrez l'accusé de réception par mail. Cet accusé de réception sera envoyé par défaut à toutes les personnes ayant accès à votre déclaration.",
	                    "TITLE_ADD_MSG_2": "",
	                    "TITLE_ADD_MSG_3": "Vous pouvez, si vous le souhaitez, envoyer l'accusé de réception à d'autres personnes.",
	                    "PLACEHOLDER_EMAIL": "Adresse e-mail du destinataire",
	                    "LABEL_ADD_RECIPIENTS": "Valider ce destinataire",
	                    "LABEL_ERROR": "Cette adresse e-mail n'est pas valide.",
	                    "LABEL_CERTIFIE": "Je certifie l'exactitude des données renseignées.",
	                    "LABEL_BTN_VALIDATE": "ENVOYER MA DÉCLARATION",
	                    "LABEL_BTN_NO_VALIDATE": "Retour"
	                },
	                "popin_validation": {
	                    "TITLE": "VOTRE DÉCLARATION EST BIEN FINALISÉE",
	                    "RAPPEL_ANNEE": "Pour rappel, le total de votre contribution est de : ",
	                    "RAPPEL_CONTRIB": "Pour rappel, le total de votre contribution est de : ",
	                    "TAXE": "HT",
	                    "LABEL_BTN_ATTESTATIONS": "Envoyer mes attestations",
	                    "LABEL_BTN_ACCUEIL": "Retour à mon Espace",
	                    "ERROR_MSG": "Erreur dans le traitement des e-mails."
	                },
	                "popin_suppression": {
	                    "TITLE": "SUPPRESSION D'UNE DECLARATION",
	                    "ERREUR": "Une erreur est survenue",
	                    "SUCCES": "Votre déclaration a bien été supprimée",
	                    "COMFIRM_REMOVE_DECLARATION": "Voulez-vous vraiment supprimer cette déclaration?"
	                },
	                "modal": {
	                    "LOADING_MODAL": "Chargement en cours"
	                },
	                "popin_confirmation": {
	                    "TITRE": "Votre déclaration est bien finalisée.",
	                    "LABEL1": "Pour rappel le total de votre contribution",
	                    "LABEL2": "s'élève à : ",
	                    "ERROR_MSG": "Erreur dans le traitement de la déclaration :",
	                    "HT": "HT"
	                },
	                "popin_corrective": {
	                    "TITRE": "Corriger une déclaration",
	                    "TITRE2": "Corriger ma déclaration",
	                    "LABEL1": "Vous souhaitez corriger la",
	                    "LABEL2": "Déclaration",
	                    "LABEL3": "Veuillez préciser le motif de votre correction",
	                    "LABEL4": "Vous aviez fait la déclaration",
	                    "QUESTION": "Pour quelle raison souhaitez-vous modifier votre déclaration ?",
	                    "QUESTION2": "Souhaitez vous modifier le type ou le mode de saisie de votre déclaration ? *",
	                    "REPONSE_OUI": "Oui",
	                    "REPONSE_NON": "Non",
	                    "CHAMPS_OBLIGATOIRE": "* Champs obligatoires",
	                    "LABEL_MOTIF": "Renseignez un motif de correction",
	                    "LABEL_COMMENTAIRE": "COMMENTAIRE (FACULTATIF)"
	                },
	                "popin_produits": {
	                    "TITRE": "Sélectionnez votre produit parmi la liste ci-dessous",
	                    "DESCRIPTION": "Nous vous proposons une liste de différents produits existants (codes produit et libellés), vous pouvez sélectionner le code qui correspond à votre produit et l'ajouter à votre déclaration : ",
	                    "SEARCH_LABEL": "Rechercher un code ou libellé produit",
	                    "CODE_PRODUIT": "Code produit",
	                    "LIBELLE_PRODUIT": "Libellé produit",
	                    "BTN_ADD": "Ajouter à la déclaration",
	                    "BTN_ANNULER": "Annuler",
	                    "MSG_CONFIRMATION": "Êtes-vous sur de vouloir supprimer cette uvc? ",
	                    "REPONSE_OUI": "Oui",
	                    "REPONSE_NON": "Non"
	                },
	                "web": {
	                    "DATE_AJOUT": "Date d'ajout",
	                    "ORDRE_ALPHABETIQUE": "Ordre alphabétique",
	                    "MONTANT_CONTRIB_CROISSANT": "Montant de contribution croissant",
	                    "MONNAIE_CONTRIB_DECROISSANT": "Montant de contribution décroissant"
	                }
	            },
	            "historique": {
	                "TITRE": "SUIVI DE VOS DÉCLARATIONS",
	                "DESCRIPTION": "Vous pouvez voir vos déclarations sur les 5 dernières années. Depuis ce suivi, vous pouvez remplir vos nouvelles déclarations, modifier des déclarations en cours et corriger des déclarations finalisées.",
	                "COL1": "Vos déclarations",
	                "COL2": "Type",
	                "COL3": "Mode de saisie",
	                "COL4": "Statut",
	                "COL5": "Montant",
	                "LABEL_DECLARATION": "Déclaration",
	                "LABEL_SAISIR": "Saisir",
	                "LABEL_CORRIGER": "Corriger",
	                "LABEL_TELECHARGER": "Télécharger",
	                "LABEL_COMPLETER": "Compléter",
	                "LABEL_MODIFIER": "Modifier",
	                "LIEN_VOIR_TOUT": "Voir tout",
	                "TITRE_WIDGET": "Vos déclarations",
	                "CORRECTIVE": "Correction",
	                "LIEN_A_VENIR": "A VENIR",
	                "LABEL_ANNULER": "Supprimer"
	            },
	            "choixdeclaration": {
	                "choix_type_declaration": {
	                    "TITLE": "BIENVENUE SUR VOTRE DÉCLARATION",
	                    "TITLE_DECLARATION_UVC": " ESTIMEZ LE NOMBRE D'UVC À DÉCLARER ",
	                    "LABEL_DECLARATION_UVC_SUR_MARCHE": "Pour savoir quelle déclaration vous convient le mieux, déplacez le curseur pour indiquer combien d'UVC vous avez mis en marché en #year#, puis cliquez sur Valider.",
	                    "LABEL_DECLARATION_CHOIX_DU_TYPE": " SÉLECTIONNEZ VOTRE TYPE DE DÉCLARATION ",
	                    "LABEL_MOINS_10000": "Moins de 10 000 UVC",
	                    "LABEL_ENTRE_10000_50000": "Entre 10 000 UVC et 500 000 UVC",
	                    "LABEL_SUP_500000": "Plus de 500 000 UVC",
	                    "LABEL_MOINS_180000": "Moins de 180 000 UVC",
	                    "LABEL_SUP_180000": "Plus de 180 000 UVC",
	                    "LABEL_DECLARATION_CONSEILLE": "D'après le nombre d'UVC que vous souhaitez déclarer, nous vous conseillons :",
	                    "LABEL_DECLARATION_AUTRE_CONSEILLE": "Vous pouvez aussi opter pour :",
	                    "LABEL_DECLARATION_VALIDER": "CONTINUER",
	                    "LABEL_DECLARATION_CONTINUER": "CONTINUER",
	                    "LABEL_BTN_NO_VALIDATE": "RETOUR"
	                },
	                "choix_mode_saisi": {
	                    "TITLE": "CHOISIR COMMENT DÉCLARER",
	                    "TITLE_DECLARATION_LIGNE": "JE FAIS MA DÉCLARATION EN LIGNE",
	                    "TITLE_DECLARATION_EXCEL": "JE FAIS MA DÉCLARATION SUR EXCEL",
	                    "TITLE_DECLARATION_FORFAIT": "DÉCLARATION AU FORFAIT",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_UN": "J'ai",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_DEUX": "peu",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_TROIS": "de références et/ou types d'emballage différents à déclarer.",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_UN": "J'ai un ",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_DEUX": "nombre important",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_TROIS": "de références et/ou types d'emballage différents à déclarer.",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "Vous avez mis en marché moins de 10 000 UVC en ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Votre contribution pour cette année s'éléve à :",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "80 € HT",
	                    "TITLE_CHOIX_OPTION_EXCEL": "VOS OPTIONS POUR LE FICHIER EXCEL",
	                    "LABEL_LANGUE": "LANGUE : ",
	                    "LABEL_LANGUE_FRANCAIS": "FRANCAIS",
	                    "LABEL_LANGUE_ANGLAIS": "ANGLAIS",
	                    "LABEL_ANNEE": "ANNÉE (versions)",
	                    "LABEL_ANNEE_EXCEL2007": "EXCEL 2007 et supérieur",
	                    "LABEL_ANNEE_EXCEL2003": "EXCEL 2003 et inférieur",
	                    "LABEL_DECLARATION_FORFAIT_MSG1": "Une fois le fichier téléchargé,",
	                    "LABEL_DECLARATION_FORFAIT_MSG2": "cliquez ici",
	                    "LABEL_DECLARATION_FORFAIT_MSG3": "pour retourner sur votre Espace."
	                },
	                "declarationforfait": {
	                    "TITLE_DECLARATION_FORFAIT": "DÉCLARATION AU FORFAIT ",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "Vous avez mis en marché moins de 10 000 UVC en ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Votre contribution pour cette année s'éléve à :",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "80 € HT",
	                    "LABEL_DECLARATION_FORFAIT_BTN": "ÉTAPE SUIVANTE",
	                    "LABEL_DECLARATION_FORFAIT_SEND_MAILS": "Une fois votre déclaration envoyée, vous recevrez l'accusé de réception par e-mail.",
	                    "LABEL_DECLARATION_FORFAIT_PAIEMENT": ""
	                },

	                "societes_marques": {
	                    "titre": "ENTREPRISES ET MARQUES COUVERTES PAR LE CONTRAT",
	                    "societe_MSG1": "ENTREPRISES COUVERTES PAR LE CONTRAT",
	                    "societe_MSG2": "Autres entreprises couvertes par le contrat",
	                    "societe_PAYS": "PAYS",
	                    "PLACEHOLDER_SOCIETE": "Nom de l'entreprise ",
	                    "PLACEHOLDER_SIRET": "N° SIRET",
	                    "PLACEHOLDER_PAYS": "Pays",
	                    "PLACEHOLDER_MARQUE": "Nom de la marque ",
	                    "societe_AJOUTER_ENTREPRISE": "Ajouter une entreprise",

	                    "marque_MSG1": "MARQUES COUVERTES PAR LE CONTRAT",
	                    "marque_MSG2": "Autres marques couvertes par le contrat",
	                    "marque_AJOUTER_MARQUE": "Ajouter une marque",

	                    "MSG3": "Oui",
	                    "MSG4": "Non",
	                    "MSG5": "Votre déclaration a été enregistrée.",
	                    "MSG6": "OK",
	                    "BTN_ETAPE_RETOUR": "Retour",
	                    "BTN_ETAPE_SUIVANTE": "Étape Suivante",
	                    "BTN_ETAPE_SAUVEGARDER": "Sauvegarder",
	                    "LABEL_ERROR_SOCIETE": "Le nom de l'entreprise est obligatoire.",
	                    "LABEL_ERROR_PAYS": "Vous devez renseigner le pays.",
	                    "LABEL_ERROR_MARQUE": "Vous avez déjà renseigné cette marque.",
	                    "LABEL_ERROR_ENTREPRISE": "Vous avez déjà renseigné cette entreprise."
	                },
	                "widget_upload": {
	                    "titre": "Vous avez rempli votre déclaration via le fichier Excel ?",
	                    "DEPOT_FICHIER": "Déposez-la !",
	                    "MSG1": "Pour les déclarations détaillée et par UVC, pensez à convertir votre fichier comme indiqué dans le sommaire du fichier Excel. Pour les déclarations sectorielles, vous pouvez déposer votre fichier Excel directement. ",
	                    "MSG2": "Déposer mon fichier"
	                },

	                "simulateur": {
	                    "TITLE_SIMULATEUR": "BIENVENUE SUR LE SIMULATEUR DE DÉCLARATION",
	                    "TITLE_SIMULATEUR_CHOIX": "CHOISISSEZ LE TYPE DE DÉCLARATION",
	                    "LABEL_SIMULATEUR_TELECHARGER": "TÉLÉCHARGER LE FICHIER EXCEL"
	                }

	            },
	            "accueil_declaration": {
	                "TITRE": "Déclarer mes emballages",
	                "DESCRIPTION": "Cliquez pour déclarer rapidement vos emballages.",
	                "BOUTON": "Faire ma déclaration",
	                "TEXTE_PAS_DECLARATION": "Vous avez fait toutes vos déclarations."
	            },

	            "rpc": {
	                "RPC_INTITULE": "Rapport de procédures convenues",
	                "BUTTON_LANCER_MISSION": "Lancer une mission",
	                "BUTTON_MODIFIER": "Modifier",
	                "CODE_ACTIVATION": "Saisir le code d'activation",
	                "RPC_STATUT_1": "En cours",
	                "RPC_STATUT_2": "Reçu",
	                "RPC_STATUT_A_FAIRE": "A faire",
	                "RPC_STATUT_A_VENIR": "A venir",
	                "RPC_CONFIRMATION_1": "Un e-mail vient de vous être envoyé confirmant votre demande de mission RPC, ",
	                "RPC_CONFIRMATION_2": "l’année de déclaration concernée et le nom du professsionnel que vous avez missionné. ",
	                "RPC_CONFIRMATION_3": "Retrouvez votre demande dans ",
	                "RPC_CONFIRMATION_4": "Vos documents de déclaration.",
	                "RPC_ERREUR_1": "Vous avez déjà lancé une mission",
	                "RPC_ERREUR_2": "Erreur D'Authentification !",
	                "RPC_ERREUR_3": "Vous avez déjà lancé une mission RPC. Si vous souhaitez la modifier ",
	                "RPC_ERREUR_4": "cliquez ici",
	                "RPC_LAUNCH_1": "CHOISIR VOTRE PROFESSIONNEL",
	                "RPC_LAUNCH_2": "MODIFIER LA MISSION RPC",
	                "RPC_LAUNCH_3": "Nom",
	                "RPC_LAUNCH_4": "Adresse",
	                "RPC_LAUNCH_5": "E-mail",
	                "RPC_LAUNCH_6": "Afficher plus",
	                "RPC_CHANGE_1": "MODIFIER LA MISSION RPC",
	                "RPC_CHANGE_2": "Choisissez le professionnel qui réalisera la mission :",
	                "RPC_CHANGE_3": "Expert comptable",
	                "RPC_CHANGE_4": "Commissaire aux comptes",
	                "RPC_ERROR_OCCUR": "Une erreur est survenue. Merci de nous contacter au 0 808 80 00 50  (service gratuit + prix appel).",
	                "RPC_NO_RESULT_FOUND": "Aucun contact trouvé",
	                "RPC_SEARCH_BAR": "Nom de la personne (Renseigner au moins 2 caractères)",
	                "RPC_TEXT_TOP_BAR": "Identifier le professionnel qui réalisera la mission : ",
	                "RPC_MERCI": "Votre demande est confirmée",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER": "Vous ne pouvez plus modifier cette mission",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER_MSG": "Votre rapport de procédures convenues est en cours de transmission. Vous ne pouvez plus modifier cette mission.",
	                "RPC_ERREUR_SURVENUE": "Une erreur est survenue. Merci de nous contacter au 0 808 80 00 50  (service gratuit + prix appel)."
	            },
	            "rpc_popins": {
	                "LANCER_MISSION_TITLE": "LANCER LA MISSION DE RAPPORT DE PROCÉDURES CONVENUES",
	                "LANCER_MISSION_TEXT_1": "Le Rapport de Procédures Convenues (RPC) est un outil de diagnostic et d’accompagnement qui vous permet d’évaluer votre processus déclaratif et la qualité de vos données.",
	                "LANCER_MISSION_TEXT_2": " Les RPC sont produits par votre expert-comptable ou votre commissaire aux comptes.",
	                "LANCER_MISSION_TEXT_3": "A compter de la déclaration 2016, le RPC est à réaliser tous les 3 ans.",
	                "LANCER_MISSION_CHOIX_EXPERT": "Choisissez le professionnel qui réalisera la mission :",
	                "EC": "Expert comptable",
	                "CAC": "Commissaire aux comptes",
	                "CODE_ACTIVATION_TITLE": "SAISIR VOTRE CODE DE VALIDATION DU RPC",
	                "CODE_ACTIVATION_TEXT": "Ce code vous a été transmis par votre Commissaire aux comptes par e-mail. Il vous permet de nous transmettre votre RPC en toute sécurité.",
	                "CODE_ACTIVATION_INVALID": "Le code d'activation est erroné",
	                "CODE_ACTIVATION_ERROR_TITLE": "Erreur !",
	                "CODE_ACTIVATION_ERROR_TEXT": "Une erreur est survenue. Merci de nous contacter au 0 808 80 00 50  (service gratuit + prix appel).",
	                "CODE_ACTIVATION_EXIPRED_TITLE": "Code expiré",
	                "CODE_ACTIVATION_EXIPRED_TEXT": "Le code d'activation a expiré. Veuillez contacter votre commissaire aux comptes pour qu'il vous en envoie un nouveau.",
	                "CODE_ACTIVATION_LOCKED_TITLE": "Votre demande est bloquée",
	                "CODE_ACTIVATION_LOCKED_TEXT": "Vous avez saisi 5 fois un code erroné, veuillez nous contacter au 0 808 80 00 50  (service gratuit + prix appel).",
	                "CODE_ACTIVATION_SUCCESS_TITLE": "Votre demande est confirmée",
	                "CODE_ACTIVATION_SUCCESS_TEXT": "Votre rapport de procédures convenues est désormais disponible dans vos documents."
	            },
	            "rpcFaqWidget": {
	                "RUN_RPC": "Lancer une mission RPC",
	                "FAQ_TITLE_1": "F.A.Q.",
	                "FAQ_SLOGAN_1": "F.A.Q.",
	                "FAQ_SLOGAN_2": "Déclaration",
	                "FAQ_TEXT_1": "lire les",
	                "FAQ_TEXT_2": "questions / réponses"
	            },
	            "controle_ecart": {
	                "title": "Votre contribution a nettement évolué depuis l’année dernière ",
	                "MSG1": "Notre mission est de vous accompagner au mieux dans votre déclaration afin de nous assurer de votre juste facturation.",
	                "MSG2": "Nous avons besoin, pour cela, d’en savoir plus sur votre activité en précisant le motif de cette évolution.",
	                "MSG3": "Veuillez renseigner un motif",
	                "MSG4": "Renseignez un motif",
	                "BTN_SUIVANT": "ÉTAPE SUIVANTE",
	                "BTN_RETOUR": "Retour",
	                "BTN_ENREGISTRER": "Sauvegarder",
	                "INFOBULLE": "Précisez le motif de votre évolution"
	            }
	        }
	    },
	    "produits": {
	        "010100": "Biscottes et pains grillés",
	        "010101": "Produits similaires grillés",
	        "010201": "Biscuits et snacks salés",
	        "010202": "Biscuits sucrés",
	        "010203": "Pains d’épices, pâtisseries, viennoiseries de conservation",
	        "010301": "Café, chicorée, malt en grain",
	        "010302": "Café, chicorée, malt moulus",
	        "010303": "Café, chicorée, malt solubles",
	        "010401": "Chocolat poudre",
	        "010402": "Petits déjeuners et boissons instantanées",
	        "010403": "Céréales prêtes à consommer ou à préparer",
	        "010404": "Pâtes à tartiner",
	        "010501": "Thés et infusions en feuilles",
	        "010502": "Thés et infusions solubles",
	        "010601": "Chocolat en tablettes",
	        "010602": "Confiseries de chocolat",
	        "010603": "Barres de chocolat",
	        "010701": "Bonbons et gélifiés",
	        "010702": "Dragées et pastilles",
	        "010703": "Pâtes de fruits, fruits confits, marrons glacés",
	        "010704": "Chewing-gum et bubble gum",
	        "010705": "Sucettes et sucres d’orge",
	        "010706": "Autres confiseries",
	        "010801": "Desserts prêts à être consommés",
	        "010802": "Produits pour la pâtisserie",
	        "010803": "Préparations pour entremets et desserts",
	        "010901": "Lait concentré",
	        "010902": "Lait en poudre",
	        "011001": "Farines",
	        "011002": "Purées en flocons",
	        "011003": "Semoules et assimilés",
	        "011100": "Pâtes alimentaires",
	        "011201": "Fruits secs",
	        "011202": "Légumes secs, tapioca, autres amidons et fécules",
	        "011203": "Riz",
	        "011204": "Fruits et légumes lyophilisés et déshydratés",
	        "011205": "Graines salées",
	        "011301": "Bouillons et aides culinaires",
	        "011302": "Potages déshydratés à préparer",
	        "011303": "Potages instantanés",
	        "011304": "Potages liquides",
	        "011401": "Condiments",
	        "011402": "Mayonnaises",
	        "011403": "Moutardes",
	        "011404": "Sauces déshydratées",
	        "011405": "Sauces prêtes à l’emploi",
	        "011406": "Sauces tomate et concentrés de tomates",
	        "011407": "Vinaigrettes",
	        "011500": "Epices et poivres",
	        "011601": "Sel fin",
	        "011602": "Gros sel",
	        "011700": "Huiles alimentaires",
	        "011800": "Vinaigres",
	        "011901": "Sucre en morceaux",
	        "011902": "Sucre semoule",
	        "011903": "Sucre cristallisé",
	        "011904": "Sucres divers (sucre candi, sucre roux)",
	        "012001": "Compotes",
	        "012002": "Confitures",
	        "012003": "Crèmes de marrons",
	        "012004": "Gelées",
	        "012005": "Marmelades",
	        "012006": "Miel",
	        "012007": "Fruits au sirop",
	        "012100": "Conserves de légumes",
	        "012200": "Conserves de poissons",
	        "012300": "Conserves de viandes, charcuterie et salaisons",
	        "012401": "Chips",
	        "012402": "Cassoulets",
	        "012403": "Choucroutes garnies",
	        "012404": "Escargots",
	        "012405": "Quenelles",
	        "012406": "Plats cuisinés à préparer",
	        "012407": "Plats cuisinés prêts à être consommés",
	        "012501": "Laits infantiles",
	        "012502": "Aliments diététiques pour enfant",
	        "012600": "Produits diététiques et de régime",
	        "012601": "Produits de nutrition clinique",
	        "012801": "Aliments humides pour chiens et chats",
	        "012802": "Aliments secs pour chiens et chats",
	        "012803": "Conserves pour animaux",
	        "012804": "Autres nourritures pour autres animaux",
	        "023001": "Limonades, limes",
	        "023002": "Sodas, colas et tonics",
	        "023003": "Jus de fruits et concentrés",
	        "023004": "Nectars",
	        "023005": "Boissons aux fruits",
	        "023006": "Sirops et sucre de canne",
	        "023007": "Extraits pour boissons et sels effervescents",
	        "023101": "Bières",
	        "023102": "Cidres",
	        "023103": "Panachés",
	        "023200": "Eaux",
	        "023400": "Vins",
	        "023500": "Champagnes et mousseux",
	        "023600": "Apéritifs",
	        "023700": "Alcools et eaux de vie",
	        "023900": "Film de regroupement des boissons",
	        "034001": "Pains",
	        "034002": "Articles de boulangerie",
	        "034003": "Pâtisseries fraîches et entremets prêts à être consommés",
	        "034101": "Glaces familiales",
	        "034102": "Glaces individuelles",
	        "034103": "Glaces en vrac",
	        "034104": "Surgelés entrées – charcuterie",
	        "034105": "Surgelés légumes",
	        "034106": "Surgelés abats – viandes – volailles",
	        "034107": "Surgelés poissons – mollusques – crustacés",
	        "034108": "Surgelés plats cuisinés – sauces – potages",
	        "034109": "Surgelés pâtisseries – viennoiseries – pâtes surgelées",
	        "034110": "Surgelés fruits et jus de fruits",
	        "034111": "Surgelés produits laitiers",
	        "034112": "Surgelés aliments pour animaux",
	        "034201": "Laits",
	        "034202": "Yaourts et assimilés",
	        "034203": "Crèmes et fromages blancs",
	        "034204": "Beurres",
	        "034205": "Margarines ou graisses végétales",
	        "034206": "Œufs",
	        "034207": "Desserts lactés et entremets",
	        "034301": "Pâtes molles à croûte fleurie ou lavée",
	        "034302": "Pâtes pressées, cuites ou non cuites",
	        "034303": "Fromages de chèvre et de brebis",
	        "034304": "Pâtes persillées",
	        "034305": "Fromages fondus",
	        "034306": "Fromages frais et assimilés",
	        "034400": "Fruits frais",
	        "034500": "Légumes frais",
	        "034510": "Fleurs et plantes",
	        "034601": "Volailles et gibiers",
	        "034700": "Produits traiteur",
	        "034701": "Hors d’œuvres",
	        "034702": "Produits en pâte",
	        "034703": "Plats cuisinés et viandes à réchauffer",
	        "034704": "Sandwichs",
	        "034800": "Boucherie et triperie",
	        "034900": "Poissons – crustacés – coquillages",
	        "046401": "Shampooings",
	        "046402": "Après shampooings, baumes embellisseurs",
	        "046403": "Lotions et vitaliseurs",
	        "046404": "Fixateurs et brillantines",
	        "046405": "Coloration capillaire",
	        "046406": "Mise en plis et permanente",
	        "046407": "Laques",
	        "046408": "Accessoires capillaires",
	        "046501": "Savons de toilette solides et liquides",
	        "046502": "Produits de bains et douches",
	        "046503": "Soins des dents",
	        "046504": "Rasoirs, lames, produits de rasage",
	        "046505": "Déodorants",
	        "046506": "Eaux de toilette et eaux de cologne",
	        "046507": "Parfums et eaux de parfums",
	        "046508": "Produits pour le corps",
	        "046509": "Beauté et soins des ongles",
	        "046510": "Produits solaires",
	        "046601": "Laits de toilette",
	        "046602": "Lotions et toniques",
	        "046603": "Crèmes de beauté",
	        "046604": "Nettoyants et crèmes gommantes",
	        "046605": "Soins spécifiques du visage",
	        "046606": "Soins des lèvres",
	        "046607": "Démaquillants",
	        "046608": "Atomiseurs d’eau",
	        "046609": "Produits de maquillage",
	        "046621": "Articles de puériculture",
	        "046701": "Cotons",
	        "046702": "Mouchoirs",
	        "046703": "Papier d’entretien et hygiénique",
	        "046704": "Couches bébés",
	        "046705": "Hygiène féminine",
	        "046706": "Accessoires de toilette et de beauté",
	        "046712": "Soins bucco-dentaires",
	        "046713": "Soins des pieds",
	        "046714": "Hygiène intime",
	        "046715": "Produits de protection",
	        "046716": "Compléments nutritionnels",
	        "046717": "Produits de soins pour bébés",
	        "046718": "Accessoires de parapharmacie",
	        "046719": "Accessoires médicaux",
	        "046720": "Optique",
	        "046721": "Optique non médicale",
	        "046722": "Lunetterie",
	        "046723": "Instruments de mesure (thermomètre, baromètre…)",
	        "055001": "Savons",
	        "055002": "Poudres et liquides de lavage du linge",
	        "055003": "Produits pour lavages délicats, adoucissants et assouplissants",
	        "055004": "Eau de Javel et désinfectants pour linge",
	        "055005": "Détachants, apprêts, teintures",
	        "055006": "Produits de lessivage",
	        "055007": "Produits à vaisselle",
	        "055008": "Accessoires de lavage",
	        "055101": "Entretien des cuirs et chaussures",
	        "055102": "Entretien des bois et des revêtements de sols",
	        "055103": "Entretien des métaux et des vitres",
	        "055104": "Entretien des fours et fourneaux",
	        "055105": "Produits à récurer, détartrer, déboucher, nettoyer et désinfecter",
	        "055106": "Désodorisants et insecticides",
	        "055107": "Articles de cave et ingrédients divers",
	        "055108": "Brosserie, balais",
	        "055109": "Eponges de ménage, torchons, assimilés",
	        "055401": "Batterie de cuisine",
	        "055402": "Ustensiles de cuisine",
	        "055403": "Coutellerie et couverts",
	        "055404": "Accessoires de table",
	        "055405": "Récipients, bassines",
	        "055406": "Accessoires de ménage",
	        "055407": "Pellicules d’emballage et de conditionnement",
	        "055408": "Matériel de cave",
	        "055501": "Appareils de chauffage",
	        "055502": "Réfrigérateurs et congélateurs domestiques",
	        "055503": "Lave-vaisselle, lave-linge, sèche-linge",
	        "055504": "Hottes aspirantes et ventilateurs",
	        "055505": "Plaques de cuisson électriques et à gaz",
	        "055506": "Fours, fours à micro-ondes",
	        "055507": "Appareils électriques pour l’entretien ménager",
	        "055508": "Robots et ustensiles de cuisine électriques",
	        "055609": "Petits appareils électrothermiques ménagers",
	        "055610": "Appareils et ustensiles électriques pour la toilette-beauté",
	        "055611": "Appareils électriques pour la couture et le tricot",
	        "055701": "Vaisselle",
	        "055702": "Vaisselle orfévrée",
	        "055703": "Verrerie",
	        "055704": "Verrerie cristal",
	        "055705": "Coutellerie",
	        "055801": "Végétaux",
	        "055802": "Produits pour jardins",
	        "055803": "Outillage agricole et horticole",
	        "055804": "Mobilier de jardin",
	        "055805": "Bacs et contenants",
	        "055806": "Équipements de protection",
	        "055901": "Outillage",
	        "055902": "Quincaillerie générale et d’ameublement",
	        "055903": "Plomberie – robinetterie – sanitaire",
	        "055904": "Equipement électrique",
	        "055905": "Bois panneaux et menuiserie",
	        "055906": "Gros œuvre, équipement du bâtiment et matériaux de construction",
	        "055907": "Peintures et vernis",
	        "055908": "Droguerie et accessoires de peinture",
	        "055909": "Colles et adhésifs",
	        "055910": "Revêtements muraux",
	        "055911": "Revêtements de sols",
	        "055912": "Carrelages",
	        "055913": "Serrures, ferrures",
	        "055914": "Visserie, boulonnerie",
	        "056001": "Mobilier de cuisine",
	        "056002": "Mobilier de salle à manger",
	        "056003": "Mobilier de salle de bains et WC",
	        "056004": "Mobilier de salon, living",
	        "056005": "Mobilier de chambre",
	        "056006": "Mobilier d’appoint – accessoires",
	        "056007": "Mobilier de bureau",
	        "056008": "Vannerie",
	        "056101": "Appareils d’éclairage",
	        "056102": "Piles",
	        "056103": "Lampes électriques",
	        "056201": "Tissus décoratifs et accessoires",
	        "056202": "Literie",
	        "056203": "Objets et accessoires de décoration",
	        "056204": "Linge de table, cuisine, toilette, lit",
	        "066800": "Papiers",
	        "066801": "Carterie",
	        "066802": "Supports d’écriture",
	        "066803": "Articles d’écriture et de bureau",
	        "066804": "Accessoires de dessin",
	        "066805": "Accessoires de classement",
	        "066806": "Accessoires scolaires, de bureaux et divers",
	        "066807": "Consommables bureaux",
	        "066808": "Consommables informatiques",
	        "066809": "Bureautique",
	        "066810": "Ordinateurs – informatique",
	        "066901": "Livres",
	        "066902": "Dictionnaires – encyclopédies",
	        "066903": "Journaux – périodiques revues spécialisées",
	        "067001": "Bijouterie, joaillerie",
	        "067002": "Orfèvrerie (autre que de table)",
	        "067003": "Horlogerie",
	        "067004": "Souvenirs, cadeaux, bimbeloterie",
	        "067005": "Articles pour fumeurs",
	        "067101": "Maroquinerie",
	        "067102": "Sacs de voyage",
	        "067103": "Sacs de sport",
	        "067104": "Valises, malles et mallettes",
	        "067201": "Radio et accessoires",
	        "067202": "Télévision et accessoires",
	        "067203": "Chaîne Hi Fi, lecteurs audio et vidéo",
	        "067204": "Photo, cinéma et accessoires",
	        "067205": "Disques, bandes magnétiques, cassettes",
	        "067206": "Films, pellicules",
	        "067207": "Instruments de musique",
	        "067208": "Téléphone et communication à distance",
	        "067301": "Jouets",
	        "067302": "Jeux",
	        "067400": "Accessoires pour animaux",
	        "067501": "Mobilier de camping et de plage",
	        "067502": "Articles et accessoires de camping et de plage",
	        "067503": "Remorques",
	        "067504": "Cycles, cyclomoteurs, motos",
	        "067505": "Équipements des cycles, cyclomoteurs, motos",
	        "067506": "Produits d’entretien pour cycles, cyclomoteurs, motos",
	        "067507": "Pièces de rechange",
	        "067601": "Lubrifiants",
	        "067602": "Produits d’entretien auto",
	        "067603": "Articles d’électricité (batterie, phare)",
	        "067604": "Pièces détachées techniques",
	        "067605": "Articles d’équipement intérieur",
	        "067606": "Articles d’équipement extérieur",
	        "067607": "Outillage auto",
	        "067608": "Pneumatiques",
	        "067609": "Auto-son",
	        "067701": "Articles de chasse",
	        "067702": "Articles de pêche",
	        "067703": "Articles de montagne",
	        "067704": "Articles de nautisme",
	        "067705": "Articles de culture physique",
	        "067706": "Articles d’autres sports",
	        "067800": "Service minute (clés, cordonnerie…)",
	        "068101": "Fournitures de couture",
	        "068102": "Fournitures de lingerie et passementerie",
	        "068103": "Patrons",
	        "068104": "Accessoires de couture",
	        "078201": "Bas",
	        "078202": "Collants",
	        "078203": "Protège-bas",
	        "078301": "Chaussures",
	        "078302": "Semelles – lacets",
	        "078501": "Chapeaux coiffures",
	        "078502": "Parapluies",
	        "078503": "Gants",
	        "078504": "Cravates",
	        "078505": "Lunettes",
	        "078506": "Survêtements et vêtements de sport",
	        "078507": "Vêtements de travail",
	        "078508": "Ceintures et bretelles",
	        "078509": "Écharpes, carrés, foulards",
	        "078510": "Mouchoirs",
	        "078511": "Pyjamas et chemises de nuit",
	        "078512": "Chemises, chemisiers, corsages",
	        "078513": "Sous-vêtements",
	        "078514": "Pantalons",
	        "078515": "Jupes, robes",
	        "078516": "Vêtements d’intérieur, tabliers",
	        "078517": "Costumes, tailleurs, ensembles",
	        "078518": "Vestes, blousons, anoraks, parkas",
	        "078519": "Manteaux, pardessus",
	        "078520": "Imperméables",
	        "078521": "Chaussettes, socquettes",
	        "078522": "Tee-shirts, polos",
	        "078523": "Pulls, cardigans, sweat-shirts",
	        "078524": "Bonneterie baby",
	        "078525": "Accessoires d’habillement baby",
	        "078526": "Accessoires d’hygiène baby",
	        "079901": "Tissus au mètre",
	        "085201": "Cigarettes",
	        "085202": "Cigares, cigarillos",
	        "085203": "Tabac pour pipes et à rouler",
	        "085204": "Tabac à mâcher et à priser",
	        "085301": "Allumettes et allume-feu",
	        "085302": "Briquets",
	        "085303": "Combustibles solides",
	        "085304": "Combustibles gazeux",
	        "085305": "Combustibles liquides domestiques",
	        "096731": "Allergologie",
	        "096732": "Anesthésiologie",
	        "096733": "Cancérologie",
	        "096734": "Cardio-angéiologie",
	        "096735": "Dermatologie",
	        "096736": "Diagnostic",
	        "096737": "Diététique pharmaceutique",
	        "096738": "Endocrinologie et hormones",
	        "096739": "Gastro-entérologie",
	        "096740": "Gynécologie",
	        "096741": "Hématologie",
	        "096742": "Hépatologie",
	        "096743": "Infections",
	        "096744": "Métabolisme, nutrition et vitamines",
	        "096745": "Neurologie et psychisme",
	        "096746": "Ophtalmologie",
	        "096747": "Otologie",
	        "096748": "Parasitologie",
	        "096749": "Pneumologie",
	        "096750": "Rhinologie",
	        "096751": "Rhumatologie et appareil locomoteur",
	        "096752": "Stomatologie",
	        "096753": "Toxicologie",
	        "096754": "Urologie et néphrologie",
	        "096755": "Acupuncture",
	        "096756": "Phytothérapie",
	        "096757": "Homéopathie",
	        "096758": "Divers pharmacie (antalgiques, etc.)",
	        "10100": "Biscottes et pains grillés",
	        "120000": "Économat "
	    },
	    "produits_spec": {
	        "130000": "Déclarer des emballages d'expédition",
	        "140000": "Déclarer des échantillons",
	        "150000": "Déclarer des bobines alimentaires",
	        "160000": "Déclarer des bobines non alimentaires"
	    },
	    "bonus_reduction": {
	        "0": "Action de réduction / recyclabilité",
	        "1": "Recharge",
	        "4": "Réduction de poids et volume",
	        "5": "Suppression d’une unité",
	        "6": "Recyclabilité",
	        "61": "Recharge + catalogue",
	        "64": "Réduction de poids et volume + catalogue",
	        "65": "Suppression d’une unité + catalogue",
	        "66": "Recyclabilité + catalogue"
	    },
	    "bonus_sensibilisation": {
	        "0": "Action de sensibilisation",
	        "1": "Notice",
	        "2": "On-Pack",
	        "3": "In-Pack",
	        "4": "Off-Pack",
	        "5": "QR Code",
	        "6": "On-Pack/In-Pack/Notice + Off-Pack",
	        "7": "QR Code + Off-Pack"
	    },
	    "pays": {
	        "AF": "Afghanistan",
	        "ZA": "Afrique du Sud",
	        "AL": "Albanie",
	        "DZ": "Algérie",
	        "DE": "Allemagne",
	        "AD": "Andorre",
	        "AO": "Angola",
	        "AI": "Anguilla",
	        "AQ": "Antarctique",
	        "AG": "Antigua/Barbuda",
	        "AN": "Antilles néerl.",
	        "STL": "apatride",
	        "SA": "Arabie saoudite",
	        "AR": "Argentine",
	        "AM": "Arménie",
	        "AW": "Aruba",
	        "AU": "Australie",
	        "AT": "Autriche",
	        "AZ": "Azerbaïdjan",
	        "BS": "Bahamas",
	        "BH": "Bahreïn",
	        "BD": "Bangladesh",
	        "BB": "Barbades",
	        "BE": "Belgique",
	        "BZ": "Belize",
	        "BJ": "Bénin",
	        "BM": "Bermudes",
	        "BT": "Bhoutan",
	        "BY": "Biélorussie",
	        "BO": "Bolivie",
	        "BA": "Bosnie-Herz.",
	        "BW": "Botswana",
	        "BR": "Brésil",
	        "BN": "Brunei Darussal",
	        "BG": "Bulgarie",
	        "BF": "Burkina Faso",
	        "BI": "Burundi",
	        "KH": "Cambodge",
	        "CM": "Cameroun",
	        "CA": "Canada",
	        "CV": "Cap-Vert",
	        "CL": "Chili",
	        "CN": "Chine",
	        "CX": "Christmas I.",
	        "CY": "Chypre",
	        "CO": "Colombie",
	        "KM": "Comores",
	        "CG": "Congo",
	        "KP": "Corée du Nord",
	        "KR": "Corée du Sud",
	        "CR": "Costa Rica",
	        "CI": "Côte d'Ivoire",
	        "HR": "Croatie",
	        "CU": "Cuba",
	        "DK": "Danemark",
	        "DJ": "Djibouti",
	        "EG": "Égypte",
	        "SV": "El Salvador",
	        "AE": "Emir.arab.unis",
	        "EC": "Équateur",
	        "ER": "Érythrée",
	        "ES": "Espagne",
	        "EE": "Estonie",
	        "ET": "Éthiopie",
	        "RU": "Féd. russe",
	        "FO": "Féroé",
	        "FJ": "Fidji",
	        "FI": "Finlande",
	        "FR": "France",
	        "GA": "Gabon",
	        "GM": "Gambie",
	        "GE": "Géorgie",
	        "GH": "Ghana",
	        "GI": "Gibraltar",
	        "GB": "Grande Bretagne",
	        "GR": "Grèce",
	        "GD": "Grenade",
	        "GL": "Groenland",
	        "GP": "Guadeloupe",
	        "GU": "Guam",
	        "GT": "Guatémala",
	        "GF": "Guinée",
	        "GN": "Guinée",
	        "GQ": "Guinée Equator.",
	        "GW": "Guinée-Bissao",
	        "GY": "Guyane",
	        "HT": "Haïti",
	        "HN": "Honduras",
	        "HK": "Hong Kong",
	        "HU": "Hongrie",
	        "VI": "I. vierges amér",
	        "VG": "I. vierges brit",
	        "HM": "Il.Heard/McDon.",
	        "MU": "Ile Maurice",
	        "MP": "Ile N.Mariana",
	        "BV": "Iles Bouvet",
	        "KY": "Iles caïmans",
	        "CC": "Iles Cocos",
	        "CK": "Iles Cook",
	        "MH": "Iles Marshall",
	        "UM": "Iles Minor Outl",
	        "NU": "Iles Niue",
	        "NF": "Iles Norfolk",
	        "PN": "Iles Pitcairn",
	        "TK": "Iles Tokelau",
	        "IO": "Ind.occ.ter.br.",
	        "IN": "Inde",
	        "ID": "Indonésie",
	        "IR": "Iran",
	        "IQ": "Iraq",
	        "IE": "Irlande",
	        "IS": "Islande",
	        "IL": "Israël",
	        "IT": "Italie",
	        "JM": "Jamaïque",
	        "JP": "Japon",
	        "JO": "Jordanie",
	        "KZ": "Kazakhstan",
	        "KE": "Kenya",
	        "KG": "Kirghiztan",
	        "KI": "Kiribati",
	        "KW": "Koweït",
	        "DM": "La Dominique",
	        "LA": "Laos",
	        "LS": "Lesotho",
	        "LV": "Lettonie",
	        "LB": "Liban",
	        "LR": "Liberia",
	        "LY": "Libye",
	        "LI": "Liechtenstein",
	        "LT": "Lituanie",
	        "LU": "Luxembourg",
	        "MO": "Macao",
	        "MK": "Macédoine",
	        "MG": "Madagascar",
	        "MY": "Malaisie",
	        "MW": "Malawi",
	        "MV": "Maldives",
	        "ML": "Mali",
	        "FK": "Malouines",
	        "MT": "Malte",
	        "MA": "Maroc",
	        "MQ": "Martinique",
	        "MR": "Mauritanie",
	        "YT": "Mayotte",
	        "MX": "Mexique",
	        "FM": "Micronésie",
	        "MD": "Moldavie",
	        "MC": "Monaco",
	        "MN": "Mongolie",
	        "MS": "Montserrat",
	        "MZ": "Mozambique",
	        "MM": "Myanmar",
	        "NZ": "N. Zélande",
	        "NC": "N.Calédonie",
	        "NA": "Namibie",
	        "NR": "Nauru",
	        "NP": "Népal",
	        "NI": "Nicaragua",
	        "NE": "Niger",
	        "NG": "Nigéria",
	        "NO": "Norvège",
	        "OM": "Oman",
	        "UG": "Ouganda",
	        "UZ": "Ouzbékistan",
	        "PK": "Pakistan",
	        "PW": "Palauan",
	        "PA": "Panama",
	        "PG": "Pap.Nouv.Guinée",
	        "PY": "Paraguay",
	        "NL": "Pays-Bas",
	        "PE": "Pérou",
	        "PH": "Philippines",
	        "PL": "Pologne",
	        "PF": "Polynésie fran.",
	        "PR": "Porto Rico",
	        "PT": "Portugal",
	        "QA": "Qatar",
	        "CF": "Rép. centrafr.",
	        "CZ": "Rép. tchèque",
	        "DO": "Rép.Dominicaine",
	        "RE": "Réunion",
	        "RO": "Roumanie",
	        "RW": "Rwanda",
	        "ST": "S.Tomé-et-princ",
	        "SM": "Saint-Marin",
	        "SH": "Sainte-Hélène",
	        "SB": "Salomon",
	        "WS": "Samoa occident.",
	        "AS": "Samoa, améric.",
	        "SN": "Sénégal",
	        "SC": "Seychelles",
	        "SL": "Sierra Leone",
	        "SG": "Singapour",
	        "SK": "Slovaquie",
	        "SI": "Slovénie",
	        "SO": "Somalie",
	        "SD": "Soudan",
	        "LK": "Sri Lanka",
	        "LC": "St. Lucie",
	        "VC": "St. Vincent",
	        "KN": "St.Chr.,Nevis",
	        "PM": "St.Pierre,Miqu.",
	        "SE": "Suède",
	        "CH": "Suisse",
	        "SR": "Suriname",
	        "SJ": "Svalbard",
	        "SZ": "Swaziland",
	        "SY": "Syrie",
	        "TJ": "Tadjikistan",
	        "TW": "Taiwan",
	        "TZ": "Tanzanie",
	        "TD": "Tchad",
	        "TH": "Thaïland",
	        "TP": "Timor orient.",
	        "TG": "Togo",
	        "TO": "Tonga",
	        "TT": "Trinidad,Tobago",
	        "TN": "Tunisie",
	        "TM": "Turkménistan",
	        "TC": "Turks et Caicos",
	        "TR": "Turquie",
	        "TV": "Tuvalu",
	        "UA": "Ukraine",
	        "UY": "Uruguay",
	        "US": "USA",
	        "VU": "Vanuatu",
	        "VA": "Vatican",
	        "VE": "Vénézuéla",
	        "VN": "Viêt Nam",
	        "WF": "Wallis,Futuna",
	        "YE": "Yémen",
	        "YU": "Yougoslavie",
	        "ZR": "Zaïre",
	        "ZM": "Zambie",
	        "ZW": "Zimbabwe"
	    },
	    "motifs_correctives": {
	        "AUTRE": "Autres",
	        "BONUS_MALUS": "Bonus / Malus",
	        "ERREUR_SAISIE": "Erreur saisie",
	        "MATERIAU": "Matériau",
	        "POIDS": "Poids",
	        "QUANTITE": "Quantité",
	        "RECYCLE": "Recyclé"
	    },
	    "motifs_controle_ecart": {
	        "AUTRES": "Autres",
	        "EVOL_POIDS_EMB": "Evolution poids/emballages",
	        "EVOL": "Forte évolution du CA",
	        "FUSION": "Fusion/Absorption",
	        "PERTE_MARCHE": "Perte de marché",
	        "PERIMETRE": "Périmètre contributif"
	    }
	};

	module.exports = messagesFr;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function ($filter) {
	  var _self = this;

	  _self.getErrorMessage = function (statusCode) {
	    var errorMessage = '';

	    switch (statusCode) {
	      case 403:
	        errorMessage = $filter('translate')('labels.transverse.OPERATION_NOT_ALLOWED');
	        break;
	      default:
	        errorMessage = $filter('translate')('errors.transverse.TECHNICAL');
	    }

	    return errorMessage;
	  };

	  return _self;
	};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports


	// module
	exports.push([module.id, "#loaders {\r\n    position: fixed;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tleft:50%;\r\n\ttop:50%;\r\n    moz-transform:translateX(-50%) translateY(-50%);\r\n\twebkit-transform:translateX(-50%) translateY(-50%);\r\n\to-transform:translateX(-50%) translateY(-50%);\r\n\tms-transform:translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n    text-align: center;\r\n    z-index: 2001;\r\n}\r\n\r\n#lizar {\r\n    background-color: rgba(221, 221, 221, 0.46);\r\n    position: fixed;\r\n    margin: auto;\r\n    z-index: 2000;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n}\r\n\r\n#transclude{ margin-top: 10px; }\r\n\r\n#transclude span { font-size: 30px; }\r\n\r\n#loadballs {\r\n    width:100px;\r\n\theight:100px;\r\n\t-webkit-border-radius: 100px!important;\r\n\t-moz-border-radius: 100px!important;\r\n\tborder-radius: 100px!important;\r\n\tmoz-transform:scaleX(0.50) scaleY(0.50);\r\n\twebkit-transform:scaleX(0.50) scaleY(0.50);\r\n\to-transform:scaleX(0.50) scaleY(0.50);\r\n\tms-transform:scaleX(0.50) scaleY(0.50);\r\n\ttransform:scaleX(0.50) scaleY(0.50);\r\n\tanimation-name:rotateThisBals;\r\n\tanimation-duration:2s;\r\n\tanimation-iteration-count:infinite;\r\n\tanimation-timing-function:linear;\r\n\tz-index:1000;\r\n}\r\n\r\n#loadballs div {\r\n\twidth:20px;\r\n\theight:20px;\r\n\tbackground-color:#3a3b3e;\r\n\t-webkit-border-radius: 40px!important;\r\n\t-moz-border-radius: 40px!important;\r\n\tborder-radius: 40px!important;\r\n\tposition:absolute;\r\n}\r\n.bal0 {\r\n\tmoz-transform:rotate(0deg) translate(0,40px);\r\n\twebkit-transform:rotate(0deg) translate(0,40px);\r\n\tmoz-transform:scaleX(0.2) scaleY(0.2);\r\n\twebkit-transform:scaleX(0.2) scaleY(0.2);\r\n\to-transform:scaleX(0.2) scaleY(0.2);\r\n\tms-transform:scaleX(0.2) scaleY(0.2);\r\n\ttransform:scaleX(0.2) scaleY(0.2);\r\n\topacity:0;\r\n\tleft:4px;\r\n\ttop:66px;\r\n}\r\n.bal1 {\r\n\tmoz-transform:rotate(45deg) translate(0,40px);\r\n\twebkit-transform:rotate(45deg) translate(0,40px);\r\n\tmoz-transform:scaleX(0.4) scaleY(0.4);\r\n\twebkit-transform:scaleX(0.4) scaleY(0.4);\r\n\to-transform:scaleX(0.4) scaleY(0.4);\r\n\tms-transform:scaleX(0.4) scaleY(0.4);\r\n\ttransform:scaleX(0.4) scaleY(0.4);\r\n\topacity:0.12;\r\n\tleft:19px;\r\n\ttop:81px;\r\n}\r\n.bal2 {\r\n\tmoz-transform:rotate(90deg) translate(0,40px);\r\n\twebkit-transform:rotate(90deg) translate(0,40px);\r\n\tmoz-transform:scaleX(0.6) scaleY(0.6);\r\n\twebkit-transform:scaleX(0.6) scaleY(0.6);\r\n\to-transform:scaleX(0.6) scaleY(0.6);\r\n\tms-transform:scaleX(0.6) scaleY(0.6);\r\n\ttransform:scaleX(0.6) scaleY(0.6);\r\n\topacity:0.25;\r\n\tleft:46px;\r\n\ttop:85px;\r\n}\r\n.bal3 {\r\n\tmoz-transform:rotate(135deg) translate(0,40px);\r\n\twebkit-transform:rotate(135deg) translate(0,40px);\r\n\tmoz-transform:scaleX(0.8) scaleY(0.8);\r\n\twebkit-transform:scaleX(0.8) scaleY(0.8);\r\n\to-transform:scaleX(0.8) scaleY(0.8);\r\n\tms-transform:scaleX(0.8) scaleY(0.8);\r\n\ttransform:scaleX(0.8) scaleY(0.8);\r\n\topacity:0.37;\r\n\tleft:72px;\r\n\ttop:69px;\r\n}\r\n.bal4 {\r\n\tmoz-transform:rotate(180deg) translate(0,40px);\r\n\twebkit-transform:rotate(180deg) translate(0,40px);\r\n\tmoz-transform:scaleX(1) scaleY(1);\r\n\twebkit-transform:scaleX(1) scaleY(1);\r\n\to-transform:scaleX(1) scaleY(1);\r\n\tms-transform:scaleX(1) scaleY(1);\r\n\ttransform:scaleX(1) scaleY(1);\r\n\topacity:0.50;\r\n\tleft:82px;\r\n\ttop:40px;\r\n}\r\n.bal5 {\r\n\tmoz-transform:rotate(225deg) translate(0,40px);\r\n\twebkit-transform:rotate(225deg) translate(0,40px);\r\n\topacity:0.62;\r\n\tleft:70px;\r\n\ttop:10px;\r\n}\r\n.bal6 {\r\n\tmoz-transform:rotate(270deg) translate(0,40px);\r\n\twebkit-transform:rotate(270deg) translate(0,40px);\r\n\topacity:0.75;\r\n\tleft:40px;\r\n\ttop:-2px;\r\n}\r\n.bal7 {\r\n\tmoz-transform:rotate(315deg) translate(0,40px);\r\n\twebkit-transform:rotate(315deg) translate(0,40px);\r\n\topacity:0.87;\r\n\tleft:10px;\r\n\ttop:10px;\r\n}\r\n.bal8 {\r\n\tmoz-transform:rotate(360deg) translate(0,40px);\r\n\twebkit-transform:rotate(360deg) translate(0,40px);\r\n\topacity:1;\r\n\tleft:0px;\r\n\ttop:41px;\r\n}\r\n\r\n    /****************************ANIMATION*******************************/\r\n/****************** load ******************/\r\n@keyframes rotateThisBals {\r\n  0% {\r\n    transform:  translate(40px,40px)  rotate(0deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n  100% {\r\n\ttransform:  translate(40px,40px)  rotate(360deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n}\r\n\r\n@-moz-keyframes rotateThisBals{\r\n  0% {\r\n    -moz-transform:  translate(40px,40px)  rotate(0deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n  100% {\r\n    -moz-transform:  translate(40px,40px)  rotate(360deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes rotateThisBals {\r\n  0% {\r\n    -webkit-transform:  translate(40px,40px)  rotate(0deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n  100% {\r\n    -webkit-transform:  translate(40px,40px)  rotate(360deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n}\r\n\r\n@-o-keyframes rotateThisBals {\r\n  0% {\r\n    -o-transform:  translate(40px,40px)  rotate(0deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n  100% {\r\n    -o-transform:  translate(40px,40px)  rotate(360deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n}\r\n\r\n@-ms-keyframes rotateThisBals {\r\n  0% {\r\n    -ms-transform:  translate(40px,40px)  rotate(0deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n  100% {\r\n    -ms-transform:  translate(40px,40px)  rotate(360deg) scaleX(0.50) scaleY(0.50) ;\r\n  }\r\n}\r\n\r\n/************** QUARTER *******************/\r\n.loader {\r\n    width: 50px;\r\n    height: 50px;\r\n    display: inline-block;;\r\n    vertical-align: middle;\r\n    position: relative;\r\n}\r\n#quarter{\r\n    border-radius: 50px;\r\n    border: 6px solid rgba(83, 87, 94, 0.4);\r\n}\r\n#quarter:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: -6px;\r\n    left: -6px;\r\n    bottom: -6px;\r\n    right: -6px;\r\n    border-radius: 50px;\r\n    border: 6px solid transparent;\r\n    border-top-color: rgb(83, 87, 94);\r\n    animation: spin 1s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0%{transform: rotate(0deg);}\r\n    100%{transform: rotate(360deg);}\r\n}\r\n\r\n@@keyframes spin {\r\n    0%{-webkit-transform: rotate(0deg);}\r\n    100%{-webkit-transform: rotate(360deg);}\r\n}\r\n\r\n.overflow-hidden {\r\n    overflow: hidden;\r\n}\r\n\r\n.filter-blur {\r\n    filter: blur(1.5px);\r\n    -ms-filter: blur(1.5px);\r\n    -moz-filter: blur(1.5px);\r\n    -webkit-filter: blur(1.5px);\r\n}\r\n", ""]);

	// exports


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"loaders\">\r\n    <div id=\"loadballs\" ng-if=\"loadersCtrl.loadballsFlag\">\r\n    \t<div class=\"bal0\"></div>\r\n        <div class=\"bal1\"></div>\r\n        <div class=\"bal2\"></div>\r\n        <div class=\"bal3\"></div>\r\n        <div class=\"bal4\"></div>\r\n        <div class=\"bal5\"></div>\r\n        <div class=\"bal6\"></div>\r\n        <div class=\"bal7\"></div>\r\n        <div class=\"bal8\"></div>\r\n    </div>\r\n\r\n    <div id=\"quarter\" class=\"loader\" ng-if=\"loadersCtrl.quarterFlag\"></div>\r\n\r\n    <div id=\"transclude\" ng-transclude></div>\r\n</div>\r\n";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "<!-- <select>\r\n    <option class=\"gris\" value=\"\" disabled selected ng-transclude></option>\r\n    <option class=\"option\" data-ng-repeat=\"country in selectCountriesCtrl.countries\" data-ng-value=\"country.code\">{{country.label}}</option>\r\n</select>\r\n-->\r\n\r\n<select data-ng-options=\"country.code as country.label for country in selectCountriesCtrl.countries | orderBy: 'label'\">\r\n    <option class=\"gris\" value=\"\" data-ng-disabled=\"elementBis.required\" selected>{{replace}}{{elementBis.required ? '*' : ''}}</option>\r\n</select>\r\n";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"mymodal\">\r\n  <div>{{'labels.transverse.OPERATION_NOT_ALLOWED' | translate}}</div>\r\n  <button class=\"btn btn-default\" ng-click=\"unauthorizedPopInCtrl.close()\">{{'labels.transverse.BTN_OK' | translate}}</button>\r\n</div>\r\n";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = "<!-- gestion des erreurs après click sur le bouton -->\r\n<div class=\"alert alert-warning\" data-ng-show=\"errorCtrl.errors && errorCtrl.errors.length!=0\">\r\n    <span class=\"help-block\" data-ng-repeat=\"error in errorCtrl.errors track by $index\">{{error |\r\n\t\ttranslate}}</span>\r\n</div>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"loadbals\">\r\n\t<div class=\"bar0\"></div>\r\n    <div class=\"bar1\"></div>\r\n    <div class=\"bar2\"></div>\r\n    <div class=\"bar3\"></div>\r\n    <div class=\"bar4\"></div>\r\n    <div class=\"bar5\"></div>\r\n    <div class=\"bar6\"></div>\r\n    <div class=\"bar7\"></div>\r\n    <div class=\"bar8\"></div>\r\n</div>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	var messagesFr = {
	    "errors": {
	        "transverse": {
	            "TECHNICAL": "A technical error has occurred.",
	            "PAGE_NOT_FOUND": "Page not found",
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in an e-mail address.",
	            "ERROR_AMOUNT_INVALID": "Incorrect amount",
	            "ERROR_TEL_INVALID": "This telephone number is not valid.",
	            "ERROR_ADRESS_REQUIRED": "Please fill in an address.",
	            "ERROR_AMOUNT_REQUIRED": "Please fill in the amount.",
	            "ERROR_COUNTRY_REQUIRED": "Please select a country.",
	            "ERROR_CITY_REQUIRED": "Please fill in a city.",
	            "ERROR_CIVILITY_REQUIRED": "Please select a title",
	            "ERROR_LASTNAME_REQUIRED": "Please fill in a last name",
	            "ERROR_FIRSTNAME_REQUIRED": "Please fill in a first name",
	            "ERROR_FUNCTION_REQUIRED": "Please select a function",
	            "ERROR_COMPANY_NAME_REQUIRED": "Please fill in a company name",
	            "ERROR_ZIPCODE_REQUIRED": "Please fill in a zip code."
	        },
	        "authentification": {
	            "ECHEC": "Authentication error",
	            "LOGIN_OBLIGATOIRE": "Please fill in your user name.",
	            "PASSWORD_OBLIGATOIRE": "Please fill in your password.",
	            "IDENTIFIANT_TAILLE_MIN": "Your user name must contain at least three characters.",
	            "ERROR_EMAIL_ACCOUNT": "This e-mail address is not registered.",
	            "ERROR_EMAIL_CREATE_ACCOUNT": "Create your account",
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_WRONG_PASSWORD": "Password incorrect",
	            "ERROR_TECHNICAL": "A technical error has occurred.",
	            "WARNING_ATTEMPT_COUNT": "You have #attemptCount# log-in attempt(s) remaining.",
	            "WARNING_ACCOUNT_BLOCKED": "Your account #orgaContext# has been blocked. To unblock it, reset your password by clicking on",
	            "WARNING_ACCOUNT_BLOCKED_LINK": " this link."

	        },
	        "adhesionSimplifiee": {
	            "ERROR_SIRET_INVALID": "This SIRET is not valid.",
	            "EXPIRED_LINK": "Link expired",
	            "EXPIRED_LINK_INSTRUCTION": "You must do a new contract",
	            "WARNING_CONTRACT_SIGNED": "Warning",
	            "WARNING_CONTRACT_SIGNED_INSTRUCTION": " This contract has already been signed.",
	            "TECHNICAL": "Error",
	            "TECHNICAL_INSTRUCTION": "Impossible to get Adhesion object.",
	            "WARNING_CONTRACT_ECSIGNED_INSTRUCTION": " This contract is signing "
	        },
	        "declaration": {
	            "LIBELLE_MIN_LENGHT": "The entered text is too short.",
	            "LIBELLE_MAX_LENGHT": "The entered text is too long.",
	            "VERIFY_FILE_BEFORE_UPLOAD": "Check your file before you load it.",
	            "BAD_FILE_TYPE": "The loaded file must be in zip or fde format",
	            "BAD_CLIENT_NO": "The client number of the excel file is different from the client number identified.",
	            "BAD_YEAR": "The reporting year of the excel file is different from the one chosen in the form.",
	            "UVC_ENCOURS": "You have a CSU submission in progress, please validate it!"
	        },
	        "inscription": {
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_EMAIL_USED_YET": "An account already exists with the same e-mail address.",
	            "ERROR_EMAIL_LOGIN": "Identification",
	            "ERROR_FIRSTNAME_REQUIRED": "Please fill in your first name.",
	            "ERROR_LASTNAME_REQUIRED": "Please fill in your last name.",
	            "ERROR_PASSWORD_REQUIRED": "Please fill in a password.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Please confirm your password.",
	            "ERROR_TELEPHONE_REQUIRED": "Please fill in your telephone number.",
	            "ERROR_TELEPHONE_INVALID": "This telephone number is not valid",
	            "ERROR_PASSWORD_INVALID": "Your password is invalid.",
	            "ERROR_PASSWORD_MISMATCH": "The two passwords do not match.",
	            "ERROR_CLIENT_NUMBER_INVALID": "The client number is not valid.",
	            "ERROR_CLIENT_NUMBER_REQUIRED": "Please fill in your client number.",
	            "ERROR_CLIENT_NUMBER_NOT_EXIST": "This client number is not registered.",
	            "ERROR_CIVILITY_REQUIRED": "Please specify your title.",
	            "ERROR_FUNCTION_REQUIRED": "Please fill in your function."

	        },
	        "donneesPersonnelles": {
	            "ERROR_LASTNAME_REQUIRED": "Please fill in your last name.",
	            "ERROR_FIRSTNAME_REQUIRED": "Please fill in your first name.",
	            "ERROR_POSITION_REQUIRED": "Please fill in your function.",
	            "EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_PHONE_REQUIRED": "Please fill in a telephone number.",
	            "ERROR_TELEPHONE_INVALID": "This telephone number is not valid",
	            "ERROR_MOBILEPHONE_INVALID": "Other telephone number not valid"
	        },
	        "modifMotDePasse": {
	            "ERROR_OLDPASSWORD_REQUIRED": "Please fill in your previous password.",
	            "ERROR_NEWPASSWORD_REQUIRED": "Please fill in a password.",
	            "ERROR_NEWPASSWORDCONFIRM_REQUIRED": "Please confirm your new password.",
	            "ERROR_NEWPASSWORD_INVALID": "The new password is not valid",
	            "ERROR_PASSWORD_MISMATCH": "The two passwords do not match.",
	            "ERROR_OLDPASSWORD_INCORRECT": "Your password is invalid."
	        },
	        "formulaire_upload": {
	            "TYPE_DECLARATION_REQUIRED": "Please select your type of data submission.",
	            "ANNEE_REQUIRED": "Please select the year of your data submission.",
	            "FILE_REQUIRED": "Please select a file to download.",
	            "ERREUR_DETAILLEE": "You cannot complete a detailed data submission.",
	            "ERREUR_UVC": "You cannot complete a CSU data submission until 2016."
	        },
	        "visualisationEntreprises": {
	            "CLIENT_NUMBER_REQUIRED": "Please fill in your client number.",
	            "COMPANY_NOT_FOUND": "This client number is not registered.",
	            "COMPANY_ALREADY_BOUND": "You already have access to this account."
	        },
	        "ajoutCompteClient": {
	            "CLIENT_NUMBER_REQUIRED": "Please fill in your client number.",
	            "COMPANY_NOT_FOUND": "This client number is not registered.",
	            "COMPANY_ALREADY_BOUND": "You already have an account with this client number."
	        },
	        "suppressionCompte": {
	            "REASON_REQUIRED": "Please tell us why you would like to delete your account.",
	            "PASSWORD_REQUIRED": "To confirm that you would like to delete your account, please enter your password.",
	            "INVALID_PASSWORD": "Password incorrect, you have #attemptCount# log-in attempt(s) remaining.",
	            "ACCOUNT_LOCKED": "Your account #orgaContext# has been blocked. To unblock it, please reset your password by clicking on <a href='/oubli-mot-de-passe'>ce lien</a>"
	        },
	        "reinitialisationMotDePasse": {
	            "ERROR_PASSWORD_REQUIRED": "Please fill in a password.",
	            "ERROR_PASSWORD_INVALID": "Your password is invalid.",
	            "ERROR_CONFIRM_PASSWORD_MISMATCH": "The two passwords do not match.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Please confirm your new password."
	        },
	        "oubliMotDePasse": {
	            "ERROR_ID_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_ID_INVALID": "This e-mail address is not valid.",
	            "ERROR_ID_NOT_FOUND": "This e-mail address is not registered."
	        },
	        "adhesionRestreinte": {
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_REQUIRED": "Please fill in your e-mail address.",
	            "ERROR_SIRET_INVALID": "This SIRET No is not valid.",
	            "ERROR_COMPANY_NAME_REQUIRED": "Please fill in your company's registered name.",
	            "ERROR_ACTIVATION_CODE_REQUIRED": "Please fill in your activation code.",
	            "ERROR_ACTIVATION_CODE_INVALID": "Your activation code is not valid.",
	            "ERROR_REP_REQUIRED": "Please let us know if your company has paid a financial contribution to an eco-organism in the past for EPR on household packaging in France.",
	            "ERROR_COMPANY_INVOICE_REQUIRED": "Please let us know if the company to be invoiced is different from your company.",
	            "ERROR_ADRESS_BILLING_REQUIRED": "Please fill in your company invoicing mailing adress.",
	            "ERROR_ADRESS_SEND_BILL_REQUIRED": "Please let us know if the invoice mailing address is different from the invoicing address.",
	            "ERROR_BILL_DEMAT_REQUIRED": "Please let us know if you want to opt for the electronic invoice",
	            "ERROR_PROVIDER_REQUIRED": "Please let us know if you are a service provider.",
	            "ERROR_SIGNER_REQUIRED": "Please let us know if you are the signatory.",
	            "ERROR_SIRET_EXIST": "This SIRET number is already part of our customers.",
	            "ERROR_SIRET_EXIST_LOGIN": "Log in to your Portal",
	            "ERROR_DATA_CERTIFICATION_REQUIRED": "You must certify the accuracy of the data entered in this contract.",
	            "ERROR_DELEGATE_VALIDATION_REQUIRED": "You must validate the management mandat(s) for the informed provider(s).",
	            "ERROR_CONTRACT_ACCEPT_REQUIRED": "You must read and accept the terms of the Adelphe contract.",
	            "ERROR_FILE_REQUIRED": "Atachment required.",
	            "ERROR_FILE_TYPE": "Your file format must be: PDF, Excel, Word, PNG or JPEG.",
	            "ERROR_FILE_SIZE": "Your file should not exceed 2 MB.",
	            "ERROR_SIRET_REQUIRED": "Please fill in your company siret.",
	            "ERROR_TVA_REQUIRED": "Please fill in the Intra-Community VAT number."
	        },
	        "rechercheUtilisateur": {
	            "ERROR_EMAIL_MISSING": "Please fill in your e-mail address.",
	            "ERROR_EMAIL_INVALID": "This e-mail address is not valid.",
	            "ERROR_EMAIL_NOTFOUND": "There is no user registered with this e-mail address."
	        }
	    },
	    "labels": {
	        "loaders": {
	            "VALIDATION": "Validation in progress...",
	            "SIGNING": "Signing in progress...",
	            "GETTING_DATA": "Getting your data...",
	            "GETTING_CONTRACT": "Getting your contract..."
	        },
	        "orgaContext": {
	            "PHONE_NUMBER_ECO": "0 810 00 17 23",
	            "PHONE_NUMBER_ADELPHE": "0 810 00 86 90 (service 0,06€/mn + price of a call)",
	            "EMAIL_CONTACT_ECO": "conseillers.entreprises@ecoemballages.fr",
	            "EMAIL_CONTACT_ADELPHE": "entreprises@adelphe.fr",
	            "EMAIL_CIL": "entreprises@adelphe.fr",
	            "NAME": "Adelphe"
	        },
	        "transverse": {
	            "BTN_SAUVEGARDER": "Validate",
	            "BTN_ANNULER": "Cancel",
	            "BTN_LOGOUT": "Log off",
	            "BTN_RETOUR": "Back",
	            "BTN_COMFIRM": "Confirm",
	            "BTN_OK": "OK",
	            "BTN_ADD": "Add",
	            "BTN_REMOVE": "Delete",
	            "BTN_CLOSE": "Close",
	            "SAVE_SUCCESS": "Your changes have been saved.",
	            "TECHNICAL_ERROR": "A technical error has occurred.",
	            "SAVE_CHANGES": "Save changes",
	            "BTN_NEXT_STEP": "Go to next step",
	            "BTN_VALIDER": "Validate",
	            "BTN_SUIVANT": "Next",
	            "BTN_SEND": "Send",
	            "OPERATION_NOT_ALLOWED": "You are not authorized to perform this action.",
	            "VOIR_TOUT": "View all",
	            "DOWNLOAD": "Download"
	        },
	        "mode_declaration": {
	            "WEB": "Online",
	            "EXCEL": "Excel"
	        },
	        "type_declaration": {
	            "DETAILLEE": "Detailed",
	            "SECTORIELLE": "Sector-specific",
	            "UVC": "By CSU",
	            "FORFAIT": "Flat-fee"
	        },
	        "statut_declaration": {
	            "EN_COURS": "In progress",
	            "VALIDEE": "Finalised",
	            "ANNULEE": "Cancelled",
	            "A_SAISIR": "Pending entry",
	            "INITIALISEE": "In progress"
	        },
	        "relationClient": {
	            "transverse": {
	                "PASSWORD_RULES": "Your password must contain:",
	                "PASSWORD_RULE_LENGTH": "- At least 9 characters",
	                "PASSWORD_RULE_MAJ": "- At least one upper-case letter",
	                "PASSWORD_RULE_MIN": "- At least one lower-case letter",
	                "PASSWORD_RULE_NUM": "- At least one figure",
	                "PASSWORD_RULE_SPECIAL_CAR": "- At least one of the following special characters: ",
	                "GET_NEW_PASSWORD": "Request a new password",
	                "NEW_PASSWORD_REQUEST_SENT": "Your new password request has been sent."
	            },
	            "authentification": {
	                "TITLE": "Log in",
	                "MESSAGE": "Log in to access your Client Portal.",
	                "VALIDER": "Log in ",
	                "PLACEHOLDER_LOGIN": "Login (e-mail address)",
	                "PLACEHOLDER_PASSWORD": "Password",
	                "FORGOTTEN_PASSWORD": "1st log-in / forgot your password?  ",
	                "LOGIN": "Log in",
	                "CREATE_ACCOUNT": "Create your account",
	                "DONT_HAVE_ACCOUNT_YET": "Don't have an account yet?"
	            },
	            "inscription": {
	                "PLACEHOLDER_LASTNAME": "Last name *",
	                "PLACEHOLDER_FIRSTNAME": "First name *",
	                "PLACEHOLDER_PASSWORD": "Password *",
	                "PLACEHOLDER_CONFIRM_PASSWORD": "Confirm password *",
	                "PLACEHOLDER_TELEPHONE": "Telephone number (main) *",
	                "PLACEHOLDER_EMAIL": "E-mail address *",
	                "PLACEHOLDER_FUNCTION": "Function *",
	                "PLACEHOLDER_CLIENT_NUMBER": "Client number *",
	                "PLACEHOLDER_OTHER_FUNCTION": "Other function",
	                "CREATION_ACCOUNT_TITLE": "CREATE MY ACCOUNT",
	                "CREATION_ACCOUNT_ALERT_CLIENT_NUMBER_REQUIRED": "You must have a client number to create your account.",
	                "CREATION_ACCOUNT_INSTRUCTION": "Fill in all the fields below in order to create your account.",
	                "CREATION_ACCOUNT_ACTION": "Create my account",
	                "ACCOUNT_EXIST_YET": "Already have an account?",
	                "LOGIN": "Identification",
	                "REQUIRED_FIELDS": "*Mandatory fields",
	                "ACCOUNT_ALREADY_EXIST": "Already have an account?",
	                "LINK_SIGN_UP": "IDENTIFICATION",
	                "RADIO_BUTTON_CIVILITY": "Title *: ",
	                "RADIO_BUTTON_MR": " Mr ",
	                "RADIO_BUTTON_MISS": " Mrs/Ms",
	                "INFORMATION": "Information pertaining to you has been gathered in line with the CNIL Directives and are processed by the company #orgaContext# for the purposes of its client database. In accordance with the French Informatique et Libertés Law (Data Protection Act) of 6 January 1978, amended in 2004, you have the right to access and correct data pertaining to you. These rights may be exercised by sending a request to the address #linkMail#.  You may also oppose the processing of data pertaining to you by providing adequate grounds.",
	                "LANGUE_CAPTCHA": "en"
	            },
	            "donneesPersonnelles": {
	                "PERSONAL_DATA_TITLE": "My personal data",
	                "CIVILITY_FIELD": "Title *: ",
	                "MSG_MONSIEUR": " Mr ",
	                "MSG_MADAME": " Mrs/Ms",
	                "PLACEHOLDER_LASTNAME": "Last name *",
	                "PLACEHOLDER_FIRSTNAME": "First name *",
	                "PLACEHOLDER_POSITION": "Function *",
	                "PLACEHOLDER_EMAIL": "Work e-mail *",
	                "PLACEHOLDER_PHONE": "Main telephone number",
	                "PLACEHOLDER_MOBILEPHONE": "Other telephone number",
	                "PLACEHOLDER_ACCESS": "Features I have access to in My Client Portal",
	                "PLACEHOLDER_PRINCIPAL": "Key contact at my company",
	                "FUNCTION": "Function",
	                "OTHER_FUNCTION": "Other function",
	                "BTN_SAVE_CHANGES": "Save changes"
	            },
	            "modifMotDePasse": {
	                "INFORMATION": "You may modify your password at any time. For your information, in accordance with our data security policy, we will ask you to change your password every 12 months.",
	                "SECURITY_TITLE": "Password",
	                "PLACEHOLDER_OLDPASSWORD": "Previous password",
	                "PLACEHOLDER_NEWPASSWORD": "New password",
	                "PLACEHOLDER_NEWPASSWORD_CONFIRM": "Confirm the new password",
	                "SAVE_SUCCESS": "Your password has been modified."
	            },

	            "acceuilPortail": {
	                "TITLE_1": "WELCOME TO",
	                "TITLE_2": "YOUR CLIENT PORTAL",
	                "TEXT_PART_1": "A message has been sent to ",
	                "TEXT_PART_2": ", your key contact, who will define your access points.",
	                "TEXT_PART_3": "To access Adelphe tools and services, go on the Website ",
	                "ACCESS_ACCOUNT": "Access my personal account ",
	                "LINK": "www.adelphe.fr"
	            },

	            "profilesCorrespondants": {
	                "TABLE_HEADER_NAME": "Profiles",
	                "TABLE_HEADER_ADDED_DATE": "Date of addition",
	                "TABLE_HEADER_LAST_CONNECTION_DATE": "Last login date",
	                "TABLE_HEADER_ACCESS": "Access",
	                "THE": "The"
	            },

	            "choixEntreprise": {
	                "WELCOME": "Welcome",
	                "CHOOSE_ACCOUNT": "Choose the client account you would like to access to:",
	                "SEARCH": "Search",
	                "ADD_CLIENT_ACCOUNT": "Add another client number"
	            },

	            "access": {
	                "SERVICES": "Tools and Services",
	                "FACTURATION": "Invoicing",
	                "DECLARATION": "Data submission"
	            },

	            "visualisationEntreprises": {
	                "BTN_ADD_COMPANY": "Add a client account",
	                "COMFIRM_REMOVE_COMPANY": "Do you really want to delete this account from your Client Portal?  If you delete it, you will no longer be able to access the data it contains.",
	                "BTN_REMOVE": "Delete",
	                "TITLE_ADD_COMPANY": "Add a client account",
	                "TEXT_ADD_COMPANY": "Fill in the client number of the company you wish to add.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Client number *",
	                "BTN_ADD": "Add",
	                "DELETION_DENIED": "You are the key contact for this client account. If you wish to delete this account from your portfolio, send a message to #ADRESSE# or call us at #TEL#.",
	                "BTN_CONNECT": "Log in"
	            },

	            "header": {
	                "PHONE_NUMBER": "0 810 00 86 90",
	                "PHONE_RATE": "(service 0,06€/mn + price of a call)",
	                "SEND_EMAIL": "Send an e-mail",
	                "MAKE_AN_APPOINTMENT": "Request an appointment",
	                "MY_ACCOUNT": "My Client Account",
	                "PERSONAL_INFO": "My personal data",
	                "MANAGE_MY_ACCOUNTS": "Manage my client accounts",
	                "LOGOUT": "Log off",
	                "LEGAL_MENTIONS": "Legal Notices",
	                "CGU": "GTCU"
	            },

	            "ajoutCompteClient": {
	                "TITLE_ADD_COMPANY": "Add a client account",
	                "TEXT_ADD_COMPANY": "Fill in the client number of the company you wish to add.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Client number *",
	                "BTN_ADD": "Add"
	            },

	            "functions": [{
	                "label": "Administrative, finance and accounting - Director",
	                "code": "0x1'"
	            }, {
	                "label": "Administrative, finance and accounting - Employee",
	                "code": "0x2"
	            }, {
	                "label": "Administrative, finance and accounting - Supervisor/Manager",
	                "code": "0x3"
	            }, {
	                "label": "Supply and purchasing - Director",
	                "code": "0x4"
	            }, {
	                "label": "Supply and purchasing - Employee",
	                "code": "0x5"
	            }, {
	                "label": "Supply and purchasing - Supervisor/Manager",
	                "code": "0x6"
	            }, {
	                "label": "Other - Assistant",
	                "code": "0x7"
	            }, {
	                "label": "Other - Director",
	                "code": "0x8"
	            }, {
	                "label": "Other - Employee",
	                "code": "0x9"
	            }, {
	                "label": "Other - Engineer",
	                "code": "0x10"
	            }, {
	                "label": "Other - Supervisor/Manager",
	                "code": "0x11"
	            }, {
	                "label": "Sales and advertising - Assistant",
	                "code": "0x12"
	            }, {
	                "label": "Sales and advertising - Director",
	                "code": "0x13"
	            }, {
	                "label": "Sales and advertising - Supervisor/Manager",
	                "code": "0x14"
	            }, {
	                "label": "Communication - Assistant",
	                "code": "0x15"
	            }, {
	                "label": "Communication - Director",
	                "code": "0x16"
	            }, {
	                "label": "Communication - Engineer",
	                "code": "0x17"
	            }, {
	                "label": "Communication - Supervisor/Manager",
	                "code": "0x18"
	            }, {
	                "label": "Advising/consulting  - Director",
	                "code": "0x19"
	            }, {
	                "label": "Advising/consulting - Supervisor/Manager",
	                "code": "0x20"
	            }, {
	                "label": "General and strategic management",
	                "code": "0x21"
	            }, {
	                "label": "Executive - Other",
	                "code": "0x22"
	            }, {
	                "label": "Executive - Delegate general",
	                "code": "0x23"
	            }, {
	                "label": "Executive - Managing director",
	                "code": "0x24"
	            }, {
	                "label": "Executive - Manager/operator",
	                "code": "0x25"
	            }, {
	                "label": "Executive - Chairman",
	                "code": "0x26"
	            }, {
	                "label": "Executive - Chairman and Chief Executive",
	                "code": "0x27"
	            }, {
	                "label": "Executive - Secretary General",
	                "code": "0x28"
	            }, {
	                "label": "Executive - Vice-President",
	                "code": "0x29"
	            }, {
	                "label": "Packaging - Assistant",
	                "code": "0x30"
	            }, {
	                "label": "Packaging - Director",
	                "code": "0x31"
	            }, {
	                "label": "Packaging - Ingénieur",
	                "code": "0x32"
	            }, {
	                "label": "Packaging - Supervisor/Manager",
	                "code": "0x33"
	            }, {
	                "label": "Management",
	                "code": "0x34"
	            }, {
	                "label": "Legal and Regulatory - Assistant",
	                "code": "0x35"
	            }, {
	                "label": "Legal and Regulatory - Director",
	                "code": "0x36"
	            }, {
	                "label": "Legal and Regulatory - Supervisor/Manager",
	                "code": "0x37"
	            }, {
	                "label": "Marketing - Assistant",
	                "code": "0x38"
	            }, {
	                "label": "Marketing - Director ",
	                "code": "0x39"
	            }, {
	                "label": "Marketing - Supervisor/Manager",
	                "code": "0x40"
	            }, {
	                "label": "Chairmanship",
	                "code": "0x41"
	            }, {
	                "label": "Service provider",
	                "code": "0x42"
	            }, {
	                "label": "Production - Assistant",
	                "code": "0x43"
	            }, {
	                "label": "Production - Director",
	                "code": "0x44"
	            }, {
	                "label": "Production - Employee",
	                "code": "0x45"
	            }, {
	                "label": "Production - Supervisor/Manager",
	                "code": "0x46"
	            }, {
	                "label": "Quality and environment  - Assistant",
	                "code": "0x47"
	            }, {
	                "label": "Quality and environment  - Director",
	                "code": "0x48"
	            }, {
	                "label": "Quality and environment  - Employee",
	                "code": "0x49"
	            }, {
	                "label": "Quality and environment  - Engineer",
	                "code": "0x50"
	            }, {
	                "label": "Quality and environment  - Supervisor/Manager",
	                "code": "0x51"
	            }, {
	                "label": "Research and development - Assistant",
	                "code": "0x52"
	            }, {
	                "label": "Research and development - Director",
	                "code": "0x53"
	            }, {
	                "label": "Research and development - Employee",
	                "code": "0x54"
	            }, {
	                "label": "Research and development - Engineer",
	                "code": "0x55"
	            }, {
	                "label": "Research and development - Supervisor/Manager",
	                "code": "0x56"
	            }, {
	                "label": "Human resources - Assistant",
	                "code": "0x57"
	            }, {
	                "label": "Human resources - Director ",
	                "code": "0x58"
	            }, {
	                "label": "Human resources - Supervisor/Manager",
	                "code": "0x59"
	            }, {
	                "label": "General services  - Assistant",
	                "code": "0x60"
	            }, {
	                "label": "General services  - Director",
	                "code": "0x61"
	            }, {
	                "label": "General services  - Employee",
	                "code": "0x62"
	            }, {
	                "label": "General services  - Supervisor/Manager",
	                "code": "0x63"
	            }, {
	                "label": "Information system  - Assistant",
	                "code": "0x64"
	            }, {
	                "label": "Information system  - Director",
	                "code": "0x65"
	            }, {
	                "label": "Information system  - Engineer",
	                "code": "0x66"
	            }, {
	                "label": "Information system  - Supervisor/Manager",
	                "code": "0x67"
	            }, {
	                "label": "To be determined",
	                "code": "0x68"
	            }],

	            "suppressionCompte": {
	                "DELETE_MY_ACCOUNT": "Delete my account",
	                "ATTENTION": "Warning!",
	                "EXPLAINATION": "You are about to delete your account. Once deleted, your personal data will be lost.",
	                "GIVE_REASON": "Please tell us why you would like to delete your account",
	                "PLACEHOLDER_PASSWORD": "Enter your password to confirm",
	                "CANNOT_DELETE": "You are the key contact for this client account. If you wish to delete this account from your portfolio, send a message to #ADDRESS# or call us at #TEL#."
	            },

	            "reinitialisationMotDePasse": {
	                "TITLE": "Forgot your password?",
	                "INSTRUCTION": "Please fill in the fields below in order to reset your password.",
	                "NEW_PASSWORD_PLACEHOLDER": "New password",
	                "CONFIRM_NEW_PASSWORD_PLACEHOLDER": "Confirm your new password"
	            },

	            "oubliMotDePasse": {
	                "TITLE": "Forgot your password?",
	                "INSTRUCTION": "Please enter the e-mail address linked to your account to reset your password.",
	                "ID_PLACEHOLDER": "Login (e-mail address)"
	            },

	            "attestation": {
	                "ATTESTATION_TITLE": "YOUR REGISTRATION CERTIFICATES",
	                "ATTESTATION_NAME": "Registration certificate",
	                "ATTESTATION_NON_DISPONIBLE": "Registration certificate not available",
	                "ATTESTATION_ETAT_1": "Unavailable - data submission not sent",
	                "ATTESTATION_ETAT_2": "Unavailable - invoice due outstanding",
	                "ATTESTATION_ETAT_3": "Unavailable - data submission not sent "
	            },
	            "facture": {
	                "FACTURE_TITLE": "YOUR INVOICES"
	            },
	            "mois": {
	                "01": "January",
	                "02": "February",
	                "03": "March",
	                "04": "April",
	                "05": "May",
	                "06": "June",
	                "07": "July",
	                "08": "August",
	                "09": "September",
	                "10": "October",
	                "11": "November",
	                "12": "December"
	            },
	            "contrat": {
	                "CONTRAT_NAME": "Contract",
	                "DELEGATION_NAME": "Delegation"
	            },
	            "adhesionRep": {
	                "ETAPE_1": "STEP N°1/4",
	                "ETAPE_1_QUESTION_1": "Are the products you market - in part or in full - consumed or used by households in France? ",
	                "INTITULE_ETAPE_1": "COUNTRY IN WHICH THE PACKAGED PRODUCTS ARE CONSUMED",
	                "REP_OUI": "Yes",
	                "REP_NON": "No",
	                "RETOUR": "Back",
	                "SUIVANT": "Next question",
	                "ETAPE_2": "STEP N°2/4",
	                "INTITULE_ETAPE_2": "MANUFACTURING OF PACKAGED PRODUCTS",
	                "ETAPE_2_QUESTION_A": "Do you manufacture (for your own company or for another) or does another company manufacture for your company packaged products that are sold in France?",
	                "ETAPE_2_QUESTION_B": "In what context?",
	                "ETAPE_2_QUESTION_B_REP_1": "I manufacture my own products",
	                "ETAPE_2_QUESTION_B_REP_2": "I have my products manufactured",
	                "ETAPE_2_QUESTION_C": "If your packaged products are manufactured by a third party and then are sold in France, do you own the products when they are packaged?",
	                "ETAPE_3": "STEP N°3/4",
	                "INTITULE_ETAPE_3": "IMPORT OF PACKAGED PRODUCTS",
	                "ETAPE_3_QUESTION_1": "Do you import (from the European Union or outside the European Union) packaged products that are sold in France?",
	                "ETAPE_4": "STEP N°4/4",
	                "INTITULE_ETAPE_4": "SHIPPING OF PACKAGED PRODUCTS",
	                "ETAPE_4_QUESTION_1": "Do you ship products to your customers, or do you provide them with service packaging (bags, wrapping paper, etc.)?",
	                "ETAPE_4_QUESTION_1_REP_1": "Yes, I ship my products to my customers",
	                "ETAPE_4_QUESTION_1_REP_2": "Yes, I provide my customers with service packaging",
	                "ETAPE_4_QUESTION_1_REP_3": "No, neither statement applies",
	                "RESULTATS": "View results"

	            },
	            "accountDeletionReason": [{
	                "code": "CHANGEMENT_FONCTION",
	                "label": "Change of function"
	            }, {
	                "code": "DEPART_ENTREPRISE",
	                "label": "Left the company"
	            }, {
	                "code": "AUTRE",
	                "label": "Other"
	            }],
	            "adhesionRestreinte": {
	                "TITLE": "Enter your special conditions",
	                "TITLE_RECONTRACT": "Enter your special conditions recontract",
	                "transverse": {
	                    "RADIO_YES": "Yes",
	                    "RADIO_NO": "No",
	                    "SIRET": "SIRET",
	                    "ADRESS": "Address (Street name and number) *",
	                    "ADRESS_COMPLEMENT": "Additional address details",
	                    "ADD_ADRESS_COMPLEMENT": "Add an additional address details",
	                    "ZIPCODE": "Zip code *",
	                    "CITY": "City *",
	                    "COUNTRY": "Country",
	                    "COMPANY_NAME": "Registered name *",
	                    "RADIO_MR": " Mr ",
	                    "RADIO_MISS": " Mrs/Ms",
	                    "EMAIL": "E-mail address *",
	                    "CIVILITY": "Title *",
	                    "FIRST_NAME": "First name *",
	                    "LAST_NAME": "Last name *",
	                    "FUNCTION": "Function *",
	                    "POSITION": "Position title",
	                    "TEL": "Telephone number (main)"
	                },

	                "popupDone": {

	                    "title": "You have signed your Adelphe Contract",
	                    "MSG1": "Adelphe thanks you for your trust. We have received your contract.",
	                    "MSG2": "Within 8 days, you will receive your final contract, your registration certificate and your access details to your Adelphe Portal.",

	                    "MSG4": "If you want to contact one of our advisors, please call us at 0 810 00 86 90",
	                    "BTN": "BACK TO PORTAL"

	                },

	                "popupDoneNotSigner": {
	                    "title": "THANK YOU!",
	                    "MSG1": "Adelphe thanks you for your trust. We have received your contract. We sent a message to the signatory you identified so that he can access his signature space and validate the Adelphe contract.",

	                    "BTN": "HOME"
	                },

	                "popupValidationContrat": {
	                    "title": "YOU ARE ABOUT TO SIGN YOUR ADELPHE CONTRACT",
	                    "MSG1": "SIGN MY CONTRACT",
	                    "MSG2": "CANCEL",
	                    "MSG3": "A technical error has occurred.",
	                    "MSG4": "The code is invalid",
	                    "MSG5": "The link has expired"
	                },
	                "popupMailSent": {
	                    "TITLE": "Your data have been validated",
	                    "MSG": "Check your mailbox to get your activation code"
	                },
	                "informationsAdministratives": {
	                    "LEGEND": "Administrative information",
	                    "INSTRUCTION": "Please inform us of the administrative details regarding your company.",
	                    "INSTRUCTION_RECONTRACT": "Please inform us of the administrative details regarding your company recontract.",
	                    "COMPANY_NAME": "Registered name *",
	                    "COMERCIAL_NAME": "Trade name",
	                    "APE": "APE Code",
	                    "HEAD_OFFICE_ADRESS": "Address of company head office:",
	                    "REP": "Did your company pay a financial contribution to an eco-organism in the past for EPR on household packaging in France?",
	                    "AMOUNT": "Amount in euros of the last contribution paid*",
	                    "ATTACHMENT": "Please provide us with an up-to-date K-Bis excerpt or other official document containing the main legal information concerning your company (legal form, registered office, identification number etc.)",
	                    "ADD_FILE": "UPLOAD YOUR FILE ",
	                    "ADD_FILE_LEGEND": "max 2MB; accepted formats: PDF, Excel, Word, PNG or JPEG"
	                },
	                "informationsAdministrativesComplementaires": {
	                    "LEGEND": "Additional administrative information",
	                    "INSTRUCTION": "To get to know you better, we invite you to fill in the companies and brands covered by the contract, and tell us if you are part of a professional organization.",
	                    "INSTRUCTION_RECONTRACT": "To get to know you better, we invite you to fill in the companies and brands covered by the contract, and tell us if you are part of a professional organization recontract.",
	                    "COMPANIES_IN_CONTRACT": "Which companies are covered by the contract?",
	                    "COMPANIES_IN_RECONTRACT": "Which companies are covered by the recontract?",
	                    "COMPANY_NAME": "Company name",
	                    "COMERCIAL_NAME": "Trade name",
	                    "COUNTRY": "Country",
	                    "ADD_COMPANY": "Add another company",
	                    "BRANDS_IN_CONTRACT": "Which brands are covered by the contract?",
	                    "BRANDS_IN_RECONTRACT": "Which brands are covered by the contract recontract ?",
	                    "BRAND_NAME": "Name of brand",
	                    "ADD_BRAND": "Add another brand",
	                    "IS_PRO_ORGANISATION": "Is your company part of a professional organization?",
	                    "PRO_ORGANISATION_NAME": "Name of the professional organization"
	                },
	                "informationsDeFacturation": {
	                    "LEGEND": "Invoicing information",
	                    "BILLING_ADRESS_CONDITION": "Is the invoicing address different from the company address?",
	                    "BILLING_ADRESS": "Invoicing address",
	                    "TVA": "Intra-Community VAT",
	                    "COMPANY_TO_INVOICE_QUESTION": "Is the company to be invoiced different from your company?",
	                    "COMPANY_TO_INVOICE_NAME": "Name of the company to be invoiced*",
	                    "BILL_SEND_ADRESS": "Invoice mailing address",
	                    "BILLING_ADRESS_SEND_QUESTION": "Is the invoice mailing address different from the invoicing address?",
	                    "BILLING_DEMAT_QUESTION": "Would you like to opt for the electronic invoice?",
	                    "BILLING_DEMAT_LEGEND": "(By default, the key contact will receive the electronic invoices. You can change this setting in your Client portail.)"
	                },
	                "correspondantPrincipal": {
	                    "LEGEND": "Key contact",
	                    "INSTRUCTION": "Please fill in the key contact information",
	                    "INSTRUCTION_RECONTRACT": "Please fill in the key contact information recontract.",
	                    "INDICATION": "In any event, the contracting company remains liable for the extended producer responsability for household packaging waste.",
	                    "IS_PROVIDER": "Are you a service provider?",
	                    "IS_PROVIDER_RECONTRACT": "Are you a service provider recontract ?"
	                },
	                "signataire": {
	                    "LEGEND": "Identity of the signatory ",
	                    "DESCRIPTION_1": "You have filled out all the data required for Adelphe registration.",
	                    "DESCRIPTION_2": "We now need to identify the person who will sign your contract. The signing party must be empowered to make binding commitments in your organisation’s name.",
	                    "DESCRIPTION_3": "If you are the signatory, you will have to enter the activation code received by e-mail to sign your contract.",
	                    "DESCRIPTION_4": "If you are not the signatory, once you have validated your contract, the signatory will receive the log-in link to his signature space with an activation code allowing him/her to validate the data and sign the contract.",
	                    "INSTRUCTION": "Fill in the signatory's details"
	                },
	                "signataire_recontract": {
	                    "LEGEND": "Identity of the signatory recontract ",
	                    "DESCRIPTION_1": "You have filled out all the data required for Adelphe registration recontract.",
	                    "DESCRIPTION_2": "We now need to identify the person who will sign your contract. The signing party must be empowered to make binding commitments in your organisation’s name recontract.",
	                    "DESCRIPTION_3": "If you are the signatory, you will have to enter the activation code received by e-mail to sign your contract recontract.",
	                    "DESCRIPTION_4": "If you are not the signatory, once you have validated your contract, the signatory will receive the log-in link to his signature space with an activation code allowing him/her to validate the data and sign the contract recontract.",
	                    "INSTRUCTION": "Fill in the signatory's details recontract"
	                },
	                "visualisation": {
	                    "LEGEND": "Download your contract documents",
	                    "DOWNLOAD_CONTRACT_FR": "Conditions particulières",
	                    "DOWNLOAD_GENERAL_CONDITIONS_FR": "Conditions générales de services",
	                    "DOWNLOAD_MANDATE_FR": "Mandat de gestion",
	                    "DOWNLOAD_MANUEL_FR": "Annexe 1 - Guide de la Déclaration",
	                    "DOWNLOAD_RATES_FR": "Annexe 2 - Tarifs Adelphe",
	                    "DOWNLOAD_GRAPHIC_CHART_FR": "Annexe 3 - Charte graphique du Point Vert",
	                    "DOWNLOAD_CODE_FR": "Annexe 4 - Code de l'environnement",
	                    "DOWNLOAD_CONTRACT_EN": "Specific conditions",
	                    "DOWNLOAD_GENERAL_CONDITIONS_EN": "Terms and conditions",
	                    "DOWNLOAD_MANDATE_EN": "Management mandate",
	                    "DOWNLOAD_MANUEL_EN": "Annex 1 - Data submission manual",
	                    "DOWNLOAD_RATES_EN": "Annex 2 - Adelphe rates",
	                    "DOWNLOAD_GRAPHIC_CHART_EN": "Annex 3 - Graphical charter of the Green Dot",
	                    "DOWNLOAD_CODE_EN": "Annex 4 - The Environmental law"
	                },
	                "validation": {
	                    "LEGEND": "Validation of data",
	                    "IS_SIGNER": "Are you the signatory?",
	                    "VALIDATE_DATA": "VALIDATE THE DATA"
	                },
	                "signature": {
	                    "LEGEND": "Sign your Adelphe contract",
	                    "INDICATION": "An email has just been sent to you with your activation code. As soon as you have received it, you can sign your contract and validate your Adelphe membership.",
	                    "CODE_ACTIVATION": "Please fill in your activation code",
	                    "DATA_VALIDATION": "I certify the accuracy of the data entered in this contract.",
	                    "PROVIDER_VALIDATION": "I validate the management mandat for the informed provider.",
	                    "CONTRACT_ACCEPT": "I declare that I have read and accept the terms of the Adelphe contract.",
	                    "SIGN": "SIGN MY CONTRACT"
	                }
	            },
	            "rechercheUtilisateur": {
	                "LABEL_EMAIL": "E-mail address",
	                "SEARCH_USER": "Search user"
	            }
	        },
	        "declaration": {
	            "uvc": {
	                "formulaire": {
	                    "ALERT": "Warning",
	                    "WARNING": "Warning",
	                    "TYPE_DECLARATION": "TYPE OF DATA SUBMISSION",
	                    "TITRE_PRODUIT": "1. Product",
	                    "CODE_PRODUIT": "Product Code",
	                    "TITRE_POIDS": "2. UNIT WEIGHT BY MATERIAL ",
	                    "TITRE_POIDS_UNITAIRE": "(IN GRAMS)",
	                    "TITRE_POIDS_UNITAIRE_KG": "(IN KILOGRAMS)",
	                    "TITRE_DECOTE": "3. Discount",
	                    "TITRE_BONUS": "4. Bonus",
	                    "TITRE_MALUS": "5. Malus",
	                    "TITRE_NOMBRE_UVC": "6. NUMBER OF CSUs PUT ON THE MARKET",
	                    "LABEL_PAPIER_CARTON_RECYCLE": "Recycled cardboard",
	                    "LABEL_LIBELLE_PRODUIT": "Product name",
	                    "LABEL_LIBELLE_UVC": "Name of your CSU",
	                    "LABEL_ADD_UVC": "Submit your CSU",
	                    "LABEL_ADD_SPEC": "Submit a distinct case",
	                    "MONNAIE": "€",
	                    "ERROR_LIBELLE": "Please fill in the product name",
	                    "ERROR_PRODUIT": "Please enter a product code using the nomenclature",
	                    "ERROR_MATERIAUX": "Please fill in at least a weight number in one of the material columns (a positive number)",
	                    "LABEL_REMPLIR_PRODUITS": "Don't forget to fill in all the materials used in your packaging",
	                    "DECOTE_OUI": "Yes",
	                    "DECOTE_NON": "No",
	                    "ERROR_DECOTE": "The 'Discount' can be selected only if you filled in a weignt for the material 'Paper/cardboard other than cartons'",
	                    "MALUS_PERTURBATEUR": "Disruptive packaging",
	                    "MALUS_SANS_FILIERE": "Without a recycling channel",
	                    "TITRE_EMB_MENAGER": "Household packaging",
	                    "TITRE_EMB_NON_MENAGER": "Non-household packaging",
	                    "TITRE_NB_UVC": "Fill in a number of CSU (a whole positive number)",
	                    "TITRE_TOTAL_UVC": "Total of your CSU",
	                    "TITRE_CONTRIBUTION_UNIT_TOTAL": "Total financial contribution for one unit (euro cent)",
	                    "TITRE_CONTRIBUTION_TOTAL": "Total financial contribution for your CSU (euro)",
	                    "BTN_VALIDER_PRODUIT": "validate the entered product",
	                    "LABEL_TRI": "Sort by",
	                    "LABEL_Recherche": "Search",
	                    "BTN_ADD_UVC": "Add a CSU",
	                    "LABEL_CONTRIBUTION": "Financial contribution",
	                    "LABEL_HT": "plus tax",
	                    "BTN_NEXT_STEP": "NEXT STEP",
	                    "ERREUR_DECLARATION": "Error in processing the data submission",
	                    "LABEL_DECOTE": "Recycled cardboard",
	                    "TITRE_UVC_VUE": "Data submission:CSU",
	                    "ERREUR_PRODUIT_SPEC1": "only one material can be entered for this product code",
	                    "ERREUR_PRODUIT_SPEC2": "There is no material of the type 'paper/cardboard other than cartons', 'other plastic packaging' and 'aluminium' entered for this product code",
	                    "ERREUR_PRODUIT_SPEC3": "You cannot enter a material other than 'paper/cardboard other than cartons', 'other plastic packaging' and 'aluminium' for this product code",
	                    "ERREUR_NON_BLOCANT": "Disruptive packagings cannot benefit from the 'awareness-raising' bonus",
	                    "INFOBULLE1": "For these specific packagings, you can submit on a single line packagings of different sizes or weight. These packagings must be submitted in kilograms.",
	                    "INFOBULLE2": "Enter the product code closest to your product in the list below.",
	                    "INFOBULLE3": "Enter the weight of each component of your packaging.",
	                    "INFOBULLE4": "Indicate whether your paper/cardboard packaging contains more than 50% recycled material. To get the 10% discount on the weight contribution, you must also attach the form made available by Adelphe, duly completed by your packaging suppliers.",
	                    "INFOBULLE5": "The bonuses include reduction at source, improved recyclability and raising consumer awareness. For more information, download the 2017 Bonuses Guide ",
	                    "INFOBULLE6": "Indicate whether your packaging is on the list of disruptive packagings or whether it is included in sorting instructions but does not have a recycling solution. For more information, see the list of disruptive packagings.",
	                    "INFOBULLE7": "Household packaging are put on the market for the consumption or use of the product they contain by households.",
	                    "INFOBULLE8": "INFOBULLE8...",
	                    "INFOBULLE9": "INFOBULLE9...",
	                    "ERREUR_FORMULAIRE": "Please correct the errors in the form",
	                    "BTN_RETOUR": "Back",
	                    "BTN_ENREGISTRER": "Save",
	                    "BTN_ANNULER": "Cancel",
	                    "BTN_NEW_UVC": "New CSU"
	                },
	                "Materiaux": {
	                    "acier": "Steel",
	                    "alum": "Aluminium",
	                    "pcNonBriq": "Paper/cardboard (other than cartons)",
	                    "briq": "Cartons",
	                    "petClair": "Clear PET bottles",
	                    "flacon": "Other bottles",
	                    "autrePlas": "Other plastic packaging",
	                    "verre": "Glass",
	                    "autre": "Other materials",
	                    "bois": "Wood",
	                    "textile": "Textile"
	                },
	                "formulaire_upload": {
	                    "TITLE": "FOLLOW THIS PROCEDURE TO COMPLETE YOUR DATA SUBMISSION",
	                    "TITLE_SELECT_DECLARATION_TYPE": "Select the type of your data submission:",
	                    "TITLE_SELECT_YEAR": "Choose the year of your data submission:",
	                    "TITLE_SELECT_FILE": "Upload your file",
	                    "LABEL_BTN_VALIDATE": "Next step"
	                },
	                "send_mails": {
	                    "TITLE": "RECIPIENTS OF THE ACKNOWLEDGEMENT OF RECEIPT",
	                    "TITLE_ADD_MSG_1": "Once your data submission has been sent, you will receive an acknowledgement of receipt by mail. The said acknowledgement of receipt will be sent by default to all persons with access to your data submission.",
	                    "TITLE_ADD_MSG_2": "",
	                    "TITLE_ADD_MSG_3": "If you wish, you may send the acknowledgement of receipt to other persons.",
	                    "PLACEHOLDER_EMAIL": "Recipient e-mail address",
	                    "LABEL_ADD_RECIPIENTS": "Confirm this recipient",
	                    "LABEL_ERROR": "This e-mail address is not valid.",
	                    "LABEL_CERTIFIE": "I hereby certify that the data provided are accurate.",
	                    "LABEL_BTN_VALIDATE": "SEND MY DATA SUBMISSION",
	                    "LABEL_BTN_NO_VALIDATE": "Back"
	                },
	                "popin_validation": {
	                    "TITLE": "YOUR DATA SUBMISSION IS COMPLETE",
	                    "RAPPEL_ANNEE": "Your total financial contribution amounts to: ",
	                    "RAPPEL_CONTRIB": "Your total financial contribution amounts to: ",
	                    "TAXE": "plus tax",
	                    "LABEL_BTN_ATTESTATIONS": "Send my certifications",
	                    "LABEL_BTN_ACCUEIL": "Go back to my Client Portal",
	                    "ERROR_MSG": "Error in processing e-mails"
	                },
	                "popin_suppression": {
	                    "TITLE": "DELETE A DATA SUBMISSION",
	                    "ERREUR": "A  error has occurred.",
	                    "SUCCES": "Your data submission has been deleted",
	                    "COMFIRM_REMOVE_DECLARATION": "Do you wish to delete your data submission?"
	                },
	                "modal": {
	                    "LOADING_MODAL": "Loading"
	                },
	                "popin_confirmation": {
	                    "TITRE": "Your data submission is complete.",
	                    "LABEL1": "Your total financial contribution",
	                    "LABEL2": "amounts to: ",
	                    "ERROR_MSG": "Error in processing the data submission:",
	                    "HT": "plus tax"
	                },
	                "popin_corrective": {
	                    "TITRE": "Correct a data submission",
	                    "TITRE2": "Correct my data submission",
	                    "LABEL1": "You wish to correct the",
	                    "LABEL2": "Data submission",
	                    "LABEL3": "Please tell us why you wish to correct your data submission",
	                    "LABEL4": "You have completed the data submission",
	                    "QUESTION": "Why do you wish to edit your data submission?",
	                    "QUESTION2": "Do you wish to change your data submission type or entry mode? *",
	                    "REPONSE_OUI": "Yes",
	                    "REPONSE_NON": "No",
	                    "CHAMPS_OBLIGATOIRE": "* Mandatory fields",
	                    "LABEL_MOTIF": "Please tell us why you wish to correct your data submission",
	                    "LABEL_COMMENTAIRE": "COMMENT (OPTIONAL)"
	                },
	                "popin_produits": {
	                    "TITRE": "Select your product from the list below",
	                    "DESCRIPTION": "We have listed below a selection of existing products (product codes and names); you may select the code that matches your product and add it to your data submission: ",
	                    "SEARCH_LABEL": "Search for a product code or name",
	                    "CODE_PRODUIT": "Product Code",
	                    "LIBELLE_PRODUIT": "Product name",
	                    "BTN_ADD": "Add to the data submission",
	                    "BTN_ANNULER": "Cancel",
	                    "MSG_CONFIRMATION": "Do you wish to delete this CSU? ",
	                    "REPONSE_OUI": "Yes",
	                    "REPONSE_NON": "No"
	                },
	                "web": {
	                    "DATE_AJOUT": "Date of addition",
	                    "ORDRE_ALPHABETIQUE": "Alphabetical order",
	                    "MONTANT_CONTRIB_CROISSANT": "Amount of the financial contribution in increasing order",
	                    "MONNAIE_CONTRIB_DECROISSANT": "Amount of the financial contribution in decreasing order"
	                }
	            },
	            "historique": {
	                "TITRE": "TRACK YOUR DATA SUBMISSIONS",
	                "DESCRIPTION": "View your data submissions over the past five years here. From this tracking tool, you may complete new data submissions, edit data submissions in progress and correct finalised data submissions.",
	                "COL1": "Your data submissions",
	                "COL2": "Type",
	                "COL3": "Entry mode",
	                "COL4": "Status",
	                "COL5": "Amount",
	                "LABEL_DECLARATION": "Data submission",
	                "LABEL_SAISIR": "Enter",
	                "LABEL_CORRIGER": "Correct",
	                "LABEL_TELECHARGER": "Download",
	                "LABEL_COMPLETER": "Fill in",
	                "LABEL_MODIFIER": "Edit",
	                "LIEN_VOIR_TOUT": "See all",
	                "TITRE_WIDGET": "Your data submissions",
	                "CORRECTIVE": "Correction",
	                "LIEN_A_VENIR": "Coming soon",
	                "LABEL_ANNULER": "Remove"
	            },
	            "choixdeclaration": {
	                "choix_type_declaration": {
	                    "TITLE": "WELCOME TO YOUR DATA SUBMISSION",
	                    "TITLE_DECLARATION_UVC": " ESTIMATE THE NUMBER OF CSUs TO BE SUBMITTED ",
	                    "LABEL_DECLARATION_UVC_SUR_MARCHE": "To determine which data submission is best suited to you, move the cursor to indicate how many CSUs you put on the market in #year#, then click on Validate.",
	                    "LABEL_DECLARATION_CHOIX_DU_TYPE": " SELECT YOUR TYPE OF DATA SUBMISSION ",
	                    "LABEL_MOINS_10000": "Less than 10,000 CSUs",
	                    "LABEL_ENTRE_10000_50000": "Between 10,000 CSUs and 500,000 CSUs",
	                    "LABEL_SUP_500000": "More than 500,000 CSUs",
	                    "LABEL_MOINS_180000": "Less than 180,000 CSUs",
	                    "LABEL_SUP_180000": "More than 180,000 CSUs",
	                    "LABEL_DECLARATION_CONSEILLE": "Based on the number of CSUs you wish to declare, we suggest:",
	                    "LABEL_DECLARATION_AUTRE_CONSEILLE": "You can also opt for:",
	                    "LABEL_DECLARATION_VALIDER": "CONTINUE",
	                    "LABEL_DECLARATION_CONTINUER": "CONTINUE",
	                    "LABEL_BTN_NO_VALIDATE": "BACK"
	                },
	                "choix_mode_saisi": {
	                    "TITLE": "CHOOSE A DATA SUBMISSION METHOD",
	                    "TITLE_DECLARATION_LIGNE": "I WOULD LIKE TO COMPLETE MY DATA SUBMISSION ON-LINE",
	                    "TITLE_DECLARATION_EXCEL": "I WOULD LIKE TO COMPLETE MY DATA SUBMISSION USING EXCEL",
	                    "TITLE_DECLARATION_FORFAIT": "FLAT-FEE DATA SUBMISSION",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_UN": "I have",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_DEUX": "few",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_TROIS": "references and/or different types of packaging to submit.",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_UN": "I have a ",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_DEUX": "large number",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_TROIS": "of references and/or different types of packaging to submit.",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "You put less than 10 000 CSUs on the market in ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Your financial contribution for this year amounts to:",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "€80 plus tax",
	                    "TITLE_CHOIX_OPTION_EXCEL": "YOUR EXCEL FILE OPTIONS",
	                    "LABEL_LANGUE": "LANGUAGE : ",
	                    "LABEL_LANGUE_FRANCAIS": "FRENCH",
	                    "LABEL_LANGUE_ANGLAIS": "ENGLISH",
	                    "LABEL_ANNEE": "YEAR (versions)",
	                    "LABEL_ANNEE_EXCEL2007": "EXCEL 2007 and later",
	                    "LABEL_ANNEE_EXCEL2003": "EXCEL 2003 and earlier",
	                    "LABEL_DECLARATION_FORFAIT_MSG1": "Once the file has been uploaded,",
	                    "LABEL_DECLARATION_FORFAIT_MSG2": "click here",
	                    "LABEL_DECLARATION_FORFAIT_MSG3": "to go back to your Client Portal."
	                },
	                "declarationforfait": {
	                    "TITLE_DECLARATION_FORFAIT": "FLAT-FEE DATA SUBMISSION ",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "You put less than 10,000 CSUs on the market in ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Your financial contribution for this year amounts to:",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "€80 plus tax",
	                    "LABEL_DECLARATION_FORFAIT_BTN": "NEXT STEP",
	                    "LABEL_DECLARATION_FORFAIT_SEND_MAILS": "Once your data submission has been sent, you will receive an acknowledgement of receipt by mail",
	                    "LABEL_DECLARATION_FORFAIT_PAIEMENT": ""
	                },

	                "societes_marques": {
	                    "titre": "BRANDS AND COMPANIES COVERED BY THE CONTRACT",
	                    "societe_MSG1": "COMPANIES COVERED BY THE CONTRACT",
	                    "societe_MSG2": "Other companies covered by this contract",
	                    "societe_PAYS": "COUNTRY",
	                    "PLACEHOLDER_SOCIETE": "Name of the company ",
	                    "PLACEHOLDER_SIRET": "SIRET number",
	                    "PLACEHOLDER_PAYS": "Country",
	                    "PLACEHOLDER_MARQUE": "Brand name ",
	                    "societe_AJOUTER_ENTREPRISE": "Add a company",

	                    "marque_MSG1": "BRANDS COVERED BY THE CONTRACT",
	                    "marque_MSG2": "Other brands covered by this contract ",
	                    "marque_AJOUTER_MARQUE": "Add a brand",

	                    "MSG3": "Yes",
	                    "MSG4": "No",
	                    "MSG5": "Your data submission has been registered.",
	                    "MSG6": "OK",
	                    "BTN_ETAPE_RETOUR": "Back",
	                    "BTN_ETAPE_SUIVANTE": "Next Step",
	                    "BTN_ETAPE_SAUVEGARDER": "Save",
	                    "LABEL_ERROR_SOCIETE": "The company name is mandatory",
	                    "LABEL_ERROR_PAYS": "Please fill in the country",
	                    "LABEL_ERROR_MARQUE": "You already entered this brand",
	                    "LABEL_ERROR_ENTREPRISE": "You already entered this company"
	                },
	                "widget_upload": {
	                    "titre": "You have filled in your data submission via the Excel file?",
	                    "DEPOT_FICHIER": "Upload it!",
	                    "MSG1": "For detailed and CSUs data submission, consider converting your file as shown in the Excel file summary. For sector-specific data submission, you can upload your Excel file directly.",
	                    "MSG2": "Upload my file"
	                },
	                "simulateur": {
	                    "TITLE_SIMULATEUR": "WELCOME TO THE DATA SUBMISSION SIMULATOR",
	                    "TITLE_SIMULATEUR_CHOIX": "CHOOSE THE TYPE OF DATA SUBMISSION",
	                    "LABEL_SIMULATEUR_TELECHARGER": "DOWNLOAD THE EXCEL FILE"
	                }

	            },
	            "accueil_declaration": {
	                "TITRE": "Submit my packaging",
	                "DESCRIPTION": "Click to quick-submit your packaging.",
	                "BOUTON": "Complete my data submission",
	                "TEXTE_PAS_DECLARATION": "You have completed all your data submissions."
	            },
	            "rpc": {
	                "RPC_INTITULE": " Report compliant with specified auditing procedures ",
	                "BUTTON_LANCER_MISSION": "Order a report",
	                "BUTTON_MODIFIER": "Edit",
	                "CODE_ACTIVATION": " Enter the activation code",
	                "RPC_STATUT_1": "In progress",
	                "RPC_STATUT_2": "Received",
	                "RPC_STATUT_A_FAIRE": "To do",
	                "RPC_STATUT_A_VENIR": "Upcoming",
	                "RPC_CONFIRMATION_1": "An e-mail has just been sent confirming your RCSAP mission request,",
	                "RPC_CONFIRMATION_2": "the date of the data submission concerned and the contact of the professional you have choosen.",
	                "RPC_CONFIRMATION_3": "Find your application in ",
	                "RPC_CONFIRMATION_4": "your data submission documents.",
	                "RPC_ERREUR_1": "You have already launched a mission RCSAP",
	                "RPC_ERREUR_2": "Authentification error!",
	                "RPC_ERREUR_3": "You have already started an RCSAP mission. If you want to change it  ",
	                "RPC_ERREUR_4": "click here.",
	                "RPC_LAUNCH_1": "CHOOSE YOUR EXPERT",
	                "RPC_LAUNCH_2": "CHANGE THE RCSAP MISSION",
	                "RPC_LAUNCH_3": "Name",
	                "RPC_LAUNCH_4": "Adress",
	                "RPC_LAUNCH_5": "E-mail",
	                "RPC_LAUNCH_6": "See more",
	                "RPC_CHANGE_1": "CHANGE THE RCSAP MISSION",
	                "RPC_CHANGE_2": "Choose the expert who will carry out the report:",
	                "RPC_CHANGE_3": "Accountant",
	                "RPC_CHANGE_4": "Auditor",
	                "RPC_ERROR_OCCUR": "An error has occurred. Please contact us at 0 810 00 86 90",
	                "RPC_NO_RESULT_FOUND": "No expert found",
	                "RPC_SEARCH_BAR": "Name (please fill at least 2 letters)",
	                "RPC_TEXT_TOP_BAR": "Choose the expert who will carry out the report: ",
	                "RPC_MERCI": "Your request is confirmed",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER": "You can no longer modify this mission",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER_MSG": "Your RCSAP is being transmitted. You can no longer modify this mission.",
	                "RPC_ERREUR_SURVENUE": "An error has occurred. Please contact us at 0 810 00 86 90."
	            },
	            "rpc_popins": {
	                "LANCER_MISSION_TITLE": "ORDER A REPORT COMPLIANT WITH SPECIFIED AUDITING PROCEDURES ",
	                "LANCER_MISSION_TEXT_1": "The Report compliant with specified auditing procedures (RCSAP) is a diagnostic and accompanying tool that allows you to evaluate your declarative process and the quality of your data.",
	                "LANCER_MISSION_TEXT_2": "RCSAPs are produced by your accountant or auditor.",
	                "LANCER_MISSION_TEXT_3": " As of the 2016 declaration, the RCSAP is to be carried out every 3 years ",
	                "LANCER_MISSION_CHOIX_EXPERT": " Choose the expert who will carry out the report: ",
	                "EC": "Accountant",
	                "CAC": "Auditor",
	                "CODE_ACTIVATION_TITLE": "ENTER YOUR ACTIVATION CODE ",
	                "CODE_ACTIVATION_TEXT": " This code is forwarded to you by your Auditor by email. Your RCSAP data will be safely sent to us.",
	                "CODE_ACTIVATION_INVALID": "Incorrect activation code",
	                "CODE_ACTIVATION_ERROR_TITLE": "Error!",
	                "CODE_ACTIVATION_ERROR_TEXT": " An error has occurred. Please contact us at 0 810 00 86 90.",
	                "CODE_ACTIVATION_EXIPRED_TITLE": " Code expired ",
	                "CODE_ACTIVATION_EXIPRED_TEXT": " The activation code has expired. Please contact your auditor for a new one.",
	                "CODE_ACTIVATION_LOCKED_TITLE": " Error!",
	                "CODE_ACTIVATION_LOCKED_TEXT": " You have entered an incorrect code 5 times, please contact us at 0 810 00 86 90.",
	                "CODE_ACTIVATION_SUCCESS_TITLE": "Thank you!",
	                "CODE_ACTIVATION_SUCCESS_TEXT": " Your RCSAP is now available in your Data submission documents."
	            },
	            "rpcFaqWidget": {
	                "RUN_RPC": "RUN RCSAP",
	                "FAQ_TITLE": "DATA SUBMISSION F.A.Q.",
	                "FAQ_TEXT_1": "YOUR QUESTIONS /",
	                "FAQ_TEXT_2": "OUR ANSWERS"
	            },
	            "controle_ecart": {
	                "title": "Your contribution has evolved significantly since last year ",
	                "MSG1": "Our mission is to assist you in your data submission in order to ensure your fair billing.",
	                "MSG2": "To do this, we need to know more about your business, please tell us what has caused this evolution.",
	                "MSG3": "Please fill in a cause.",
	                "MSG4": "Fill in a cause",
	                "BTN_SUIVANT": "NEXT",
	                "BTN_RETOUR": "Back",
	                "BTN_ENREGISTRER": "Save",
	                "INFOBULLE": "Specify the reason for this evolution."
	            }
	        }
	    },
	    "produits": {
	        "010100": "Rusks and toasted breads",
	        "010101": "Similar toasted products",
	        "010201": "Savoury crackers and snacks",
	        "010202": "Sweet biscuits and cookies",
	        "010203": "Gingerbreads, preserved pastry goods and Viennese pastries",
	        "010301": "Whole grains coffee, chicory, malt",
	        "010302": "Ground coffee, chicory, malt",
	        "010303": "Soluble coffee, chicory, malt",
	        "010401": "Chocolate powder",
	        "010402": "Breakfast and instant drinks",
	        "010403": "Ready-to-eat/Ready-to-cook cereal",
	        "010404": "Spreads",
	        "010501": "Leaf teas and infusions",
	        "010502": "Soluble teas and infusions",
	        "010601": "Chocolate slabs",
	        "010602": "Chocolate confectionery",
	        "010603": "Chocolate bars",
	        "010701": "Candies and jelly candies",
	        "010702": "Sugared almonds and tablets",
	        "010703": "Fruit paste, candied fruit, marrons glacés",
	        "010704": "Chewing gum and bubble gum",
	        "010705": "Lollipops and candy canes",
	        "010706": "Other confectionery products",
	        "010801": "Ready-to-eat desserts",
	        "010802": "Baking products",
	        "010803": "Preparations for desserts and puddings",
	        "010901": "Condensed milk",
	        "010902": "Milk powder",
	        "011001": "Flours",
	        "011002": "Instant mashed potatoes",
	        "011003": "Semolina and similar products",
	        "011100": "Pasta",
	        "011201": "Dried fruits",
	        "011202": "Dried pulses, tapioca, other starches",
	        "011203": "Rice",
	        "011204": "Freeze-dried and dehydrated fruits and vegetables",
	        "011205": "Salted seeds",
	        "011301": "Stock cubes and culinary aids",
	        "011302": "Dehydrated soups",
	        "011303": "Instant soups",
	        "011304": "Liquid soups",
	        "011401": "Condiments",
	        "011402": "Mayonnaises",
	        "011403": "Mustards",
	        "011404": "Dehydrated sauces",
	        "011405": "Ready-to-use sauces",
	        "011406": "Tomato sauces and tomato concentrates",
	        "011407": "Salad dressings",
	        "011500": "Spices and peppers",
	        "011601": "Fine salt",
	        "011602": "Coarse salt",
	        "011700": "Food oils",
	        "011800": "Vinegars",
	        "011901": "Sugar cubes",
	        "011902": "Caster sugar",
	        "011903": "Granulated sugar",
	        "011904": "Various sugars (candy sugar, brown sugar)",
	        "012001": "Fruit purees",
	        "012002": "Jams",
	        "012003": "Chestnut creams",
	        "012004": "Jellies",
	        "012005": "Marmalades",
	        "012006": "Honey",
	        "012007": "Fruit in syrup",
	        "012100": "Canned vegetables",
	        "012200": "Canned fish",
	        "012300": "Preserved meats, cooked meats and cured meats",
	        "012401": "Crisps",
	        "012402": "Cassoulets",
	        "012403": "Sauerkrauts served with meat",
	        "012404": "Snails",
	        "012405": "Quenelles",
	        "012406": "Ready-to-cook dishes",
	        "012407": "Ready-to-eat dishes",
	        "012501": "Infant milk",
	        "012502": "Health foods for children",
	        "012600": "Health and diet products",
	        "012601": "Clinical nutrition products",
	        "012801": "Wet foods for dogs and cats",
	        "012802": "Dry foods for dogs and cats",
	        "012803": "Canned pet food",
	        "012804": "Other foods for other animals",
	        "023001": "Lemonades, limes",
	        "023002": "Sodas, colas and tonic waters",
	        "023003": "Fruit juices and concentrates",
	        "023004": "Nectars",
	        "023005": "Fruit drinks",
	        "023006": "Syrups and sugar cane",
	        "023007": "Extracts for beverages and effervescent salts",
	        "023101": "Beers",
	        "023102": "Ciders",
	        "023103": "Shandies",
	        "023200": "Waters",
	        "023400": "Wines",
	        "023500": "Champagne and sparkling wines",
	        "023600": "Aperitifs",
	        "023700": "Spirits and liqueurs",
	        "023900": "Beverage multipack packaging",
	        "034001": "Breads",
	        "034002": "Bakery items",
	        "034003": "Fresh pastries and ready-to-eat desserts",
	        "034101": "Family ice creams",
	        "034102": "Individual ice creams",
	        "034103": "Ice cream in bulk",
	        "034104": "Frozen starters – cured meats",
	        "034105": "Frozen vegetables",
	        "034106": "Frozen offal – meats – poultry",
	        "034107": "Frozen fish – shellfishes – crustaceans",
	        "034108": "Frozen ready-to-eat dishes – sauces – soups",
	        "034109": "Frozen pastries – Viennese pastries – frozen pasta",
	        "034110": "Frozen fruit and fruit juices",
	        "034111": "Frozen dairy products",
	        "034112": "Frozen food for animals",
	        "034201": "Milks",
	        "034202": "Yogurts and similar products",
	        "034203": "Creams and greek-style yogurts",
	        "034204": "Butters",
	        "034205": "Margarines or vegetable fats",
	        "034206": "Eggs",
	        "034207": "Dairy desserts and desserts",
	        "034301": "Soft cheeses with mould or washed rind",
	        "034302": "Cooked or uncooked pressed cheeses",
	        "034303": "Goat and sheep cheeses",
	        "034304": "Blue-veined cheeses",
	        "034305": "Processed cheeses",
	        "034306": "Fresh cheeses and similar products",
	        "034400": "Fresh fruits",
	        "034500": "Fresh vegetables",
	        "034510": "Flowers and plants",
	        "034601": "Poultry and game",
	        "034700": "Delicatessen products",
	        "034701": "Hors d’œuvres",
	        "034702": "Doughs",
	        "034703": "Ready-to-eat dishes and meats to re-heat",
	        "034704": "Sandwiches",
	        "034800": "Red meats and offal",
	        "034900": "Fish – crustaceans – shellfish",
	        "046401": "Shampoos",
	        "046402": "Conditioners, beautifying balms",
	        "046403": "Lotions and revitalisers",
	        "046404": "Fixatives and oils",
	        "046405": "Hair dyes",
	        "046406": "Wave set and permanent",
	        "046407": "Laquers",
	        "046408": "Hair accessories",
	        "046501": "Solid and liquid toilet soaps",
	        "046502": "Bathroom and shower products",
	        "046503": "Tooth care",
	        "046504": "Razors, blades, shaving products",
	        "046505": "Deodorants",
	        "046506": "Eaux de toilette and eaux de Cologne",
	        "046507": "Perfumes and fragrances",
	        "046508": "Body products",
	        "046509": "Nail beauty and care",
	        "046510": "Sun products",
	        "046601": "Skin cleansing milks",
	        "046602": "Lotions and tonics",
	        "046603": "Beauty creams",
	        "046604": "Cleansers and exfoliating creams",
	        "046605": "Specific face care products",
	        "046606": "Lip care",
	        "046607": "Make-up removers",
	        "046608": "Water sprays",
	        "046609": "Make-up products",
	        "046621": "Childcare items",
	        "046701": "Cottons",
	        "046702": "Handkerchiefs",
	        "046703": "Kitchen and toilet paper",
	        "046704": "Babies’ nappies",
	        "046705": "Feminine hygiene",
	        "046706": "Cleansing and beauty accessories",
	        "046712": "Oral and dental care",
	        "046713": "Foot care",
	        "046714": "Intimate hygiene",
	        "046715": "Protective products",
	        "046716": "Nutritional supplements",
	        "046717": "Care products for babies",
	        "046718": "Parapharmacy accessories",
	        "046719": "Medical accessories",
	        "046720": "Optics",
	        "046721": "Non-medical optics",
	        "046722": "Eyewear",
	        "046723": "Measuring instruments (thermometer, barometer, etc.)",
	        "055001": "Soaps",
	        "055002": "Laundry powders and liquids",
	        "055003": "Products for delicate washes, fabric softeners",
	        "055004": "Bleach and laundry disinfectants",
	        "055005": "Stain removers, primers, dyes",
	        "055006": "Laundry products",
	        "055007": "Dish-washing products",
	        "055008": "Washing accessories",
	        "055101": "Leather and footwear care products",
	        "055102": "Wood and floors care products",
	        "055103": "Metals and windows care products",
	        "055104": "Ovens and furnaces care products",
	        "055105": "Scouring, descaling, uncloging, cleaning and disinfecting products",
	        "055106": "Deodorants and insecticides",
	        "055107": "Cellar items and various ingredients",
	        "055108": "Brushware, brooms",
	        "055109": "Household sponges, tea towels and similar items",
	        "055401": "Kitchenware",
	        "055402": "Kitchen utensils",
	        "055403": "Cutlery and tableware",
	        "055404": "Table accessories",
	        "055405": "Containers, bowls",
	        "055406": "Cleaning accessories",
	        "055407": "Packaging and packing films",
	        "055408": "Cellar equipment",
	        "055501": "Heating devices",
	        "055502": "Refrigerators and home freezers",
	        "055503": "Dishwashers, washing machines, dryers",
	        "055504": "Hoods and fans",
	        "055505": "Electrical and gas stoves",
	        "055506": "Ovens, microwave ovens",
	        "055507": "Electrical devices for household cleaning",
	        "055508": "Electric mixers and kitchen utensils",
	        "055609": "Small electrothermal household appliances",
	        "055610": "Electrical devices and utensils for cleansing-beauty",
	        "055611": "Electrical devices for sewing and knitting",
	        "055701": "Crockery",
	        "055702": "Decorative crockery",
	        "055703": "Glassware",
	        "055704": "Crystal glassware",
	        "055705": "Cutlery ",
	        "055801": "Plants",
	        "055802": "Garden products",
	        "055803": "Agricultural tools and horticulture",
	        "055804": "Garden furniture",
	        "055805": "Planters and containers",
	        "055806": "Protective equipment",
	        "055901": "Tools",
	        "055902": "General hardware and furnishing",
	        "055903": "Plumbing – taps – sanitary ware",
	        "055904": "Electrical equipment",
	        "055905": "Wooden boards and carpentry",
	        "055906": "Structural work, building equipment and building materials",
	        "055907": "Paints and varnishes",
	        "055908": "Hardwares and painting accessories",
	        "055909": "Glues and adhesives",
	        "055910": "Wall coverings",
	        "055911": "Floor coverings",
	        "055912": "Tiling",
	        "055913": "Locks, fittings",
	        "055914": "Screws, nuts and bolts",
	        "056001": "Kitchen furniture ",
	        "056002": "Dining room furniture",
	        "056003": "Bathroom and toilet furniture",
	        "056004": "Living room furniture",
	        "056005": "Bedroom furniture",
	        "056006": "Occasional furniture – accessories",
	        "056007": "Office furniture",
	        "056008": "Basketry",
	        "056101": "Lighting devices",
	        "056102": "Batteries",
	        "056103": "Electric lamps",
	        "056201": "Decorative fabrics and accessories",
	        "056202": "Bedding",
	        "056203": "Decorative objects and accessories",
	        "056204": "Table, kitchen, bathroom, bed linen",
	        "066800": "Papers",
	        "066801": "Cards",
	        "066802": "Writing materials",
	        "066803": "Writing and office items",
	        "066804": "Drawing accessories",
	        "066805": "Filing accessories",
	        "066806": "School, office and various accessories",
	        "066807": "Offices supplies",
	        "066808": "IT supplies",
	        "066809": "Office automation",
	        "066810": "Computers – IT",
	        "066901": "Books",
	        "066902": "Dictionaries – encyclopaedias",
	        "066903": "Newspapers – specialised periodicals and journals",
	        "067001": "Jewellery",
	        "067002": "Gold and silverware (other than table)",
	        "067003": "Clocks and watches",
	        "067004": "Souvenirs, gifts, knick-knacks",
	        "067005": "Smoking items",
	        "067101": "Leather goods",
	        "067102": "Travel bags",
	        "067103": "Sport bags",
	        "067104": "Suitcases, trunks and briefcases",
	        "067201": "Radio and accessories",
	        "067202": "Television and accessories",
	        "067203": "Hi Fi Stereo, audio and video players",
	        "067204": "Photo, cinema and accessories",
	        "067205": "Disks, magnetic tapes, cassettes",
	        "067206": "Films",
	        "067207": "Musical instruments",
	        "067208": "Telephone and remote communications",
	        "067301": "Toys",
	        "067302": "Games",
	        "067400": "Accessories for animals",
	        "067501": "Camping and beach furniture",
	        "067502": "Camping and beach items",
	        "067503": "Trailers",
	        "067504": "Cycles, mopeds, motorcycles",
	        "067505": "Cycle, moped and motorcycle equipment",
	        "067506": "Cleaning products for cycles and mopeds, motorcycles",
	        "067507": "Spare parts",
	        "067601": "Lubricants",
	        "067602": "Automotive cleaning products",
	        "067603": "Electrical items (battery, light)",
	        "067604": "Technical spare parts",
	        "067605": "Interior equipment items",
	        "067606": "Exterior equipment items",
	        "067607": "Automotive tools",
	        "067608": "Tyres",
	        "067609": "Automotive sound systems",
	        "067701": "Hunting items",
	        "067702": "Fishing items",
	        "067703": "Hiking and climbing items",
	        "067704": "Sailiing items",
	        "067705": "Physical fitness items",
	        "067706": "Other sports items",
	        "067800": "Quick services (keys, shoe repairs)",
	        "068101": "Sewing supplies",
	        "068102": "Lingerie and trimmings supplies",
	        "068103": "Patterns",
	        "068104": "Sewing accessories",
	        "078201": "Stockings",
	        "078202": "Tights",
	        "078203": "Liner socks",
	        "078301": "Shoes",
	        "078302": "Soles – laces",
	        "078501": "Hats and headgears",
	        "078502": "Umbrellas",
	        "078503": "Gloves",
	        "078504": "Ties",
	        "078505": "Glasses",
	        "078506": "Track suits and sport clothing",
	        "078507": "Work clothing",
	        "078508": "Belts and braces",
	        "078509": "Scarves, squares, scarves",
	        "078510": "Handkerchiefs",
	        "078511": "Pyjamas and night dresses",
	        "078512": "Shirts, blouses, bodices",
	        "078513": "Underwear",
	        "078514": "Trousers",
	        "078515": "Skirts, dresses",
	        "078516": "Indoor clothing, aprons",
	        "078517": "Suits, ensembles",
	        "078518": "Jackets, anoraks, parkas",
	        "078519": "Coats, overcoats",
	        "078520": "Raincoats",
	        "078521": "Socks, ankle socks",
	        "078522": "T-shirts, polo shirts",
	        "078523": "Sweaters, cardigans, sweat-shirts",
	        "078524": "Baby knitwear",
	        "078525": "Baby clothing accessories",
	        "078526": "Baby hygiene accessories",
	        "079901": "Fabrics by the metre",
	        "085201": "Cigarettes",
	        "085202": "Cigars, cigarillos",
	        "085203": "Tobacco to roll and for pipes",
	        "085204": "Chewing tobacco and snuff",
	        "085301": "Matches and fire-lighters",
	        "085302": "Lighters",
	        "085303": "Solid fuels",
	        "085304": "Gaseous fuels",
	        "085305": "Domestic liquid fuels",
	        "096731": "Allergology",
	        "096732": "Anaesthesiology",
	        "096733": "Cancer research",
	        "096734": "Cardio-angiology",
	        "096735": "Dermatology",
	        "096736": "Diagnosis",
	        "096737": "Pharmaceutical dietetics",
	        "096738": "Endocrinology and hormones",
	        "096739": "Gastroenterology",
	        "096740": "Gynaecology",
	        "096741": "Haematology",
	        "096742": "Hepatology",
	        "096743": "Infections",
	        "096744": "Metabolism, nutrition and vitamins",
	        "096745": "Neurology and psyche",
	        "096746": "Ophthalmology",
	        "096747": "Otology",
	        "096748": "Parasitology",
	        "096749": "Respirology",
	        "096750": "Rhinology",
	        "096751": "Rheumatology and musculoskeletal health",
	        "096752": "Stomatology",
	        "096753": "Toxicology",
	        "096754": "Urology and nephrology",
	        "096755": "Acupuncture",
	        "096756": "Herbal medicine",
	        "096757": "Homeopathy",
	        "096758": "Various pharmacy (painkillers, etc.)",
	        "10100": "Rusks and toasted breads",
	        "120000": "POS packaging "
	    },
	    "produits_spec": {
	        "130000": "Submit shipping packaging",
	        "140000": "Submit samples",
	        "150000": "Submit alimentary spools",
	        "160000": "Submit non-alimentary spools"
	    },
	    "bonus_reduction": {
	        "0": "Reduction / recyclability actions",
	        "1": "Refills",
	        "4": "Weight and volume reduction",
	        "5": "Removal of a packaging unit",
	        "6": "Recyclability",
	        "61": "Refills + good practice catalogue",
	        "64": "Weight and volume reduction + good practice catalogue",
	        "65": "Removal of a packaging unit + good practice catalogue",
	        "66": "Recyclability + good practice catalogue"
	    },
	    "bonus_sensibilisation": {
	        "0": "Awareness-raising actions",
	        "1": "Manual",
	        "2": "On-Pack",
	        "3": "In-Pack",
	        "4": "Off-Pack",
	        "5": "QR Code",
	        "6": "On-Pack/In-Pack/Manual + Off-Pack",
	        "7": "QR Code + Off-Pack"
	    },
	    "pays": {
	        "AF": "Afghanistan",
	        "ZA": "South Africa",
	        "AL": "Albania",
	        "DZ": "Algeria",
	        "DE": "Germany",
	        "AD": "Andorra",
	        "AO": "Angola",
	        "AI": "Anguilla",
	        "AQ": "Antarctica",
	        "AG": "Antigua/Barbados",
	        "AN": "Dutch Caribbean",
	        "STL": "Stateless",
	        "SA": "Saudi Arabia",
	        "AR": "Argentina",
	        "AM": "Armenia",
	        "AW": "Aruba",
	        "AU": "Australia",
	        "AT": "Austria",
	        "AZ": "Azerbaijan",
	        "BS": "Bahamas",
	        "BH": "Bahrain",
	        "BD": "Bangladesh",
	        "BB": "Barbados",
	        "BE": "Belgium",
	        "BZ": "Belize",
	        "BJ": "Benin",
	        "BM": "Bermuda",
	        "BT": "Bhutan",
	        "BY": "Belarus",
	        "BO": "Bolivia",
	        "BA": "Bosnia-Herz.",
	        "BW": "Botswana",
	        "BR": "Brazil",
	        "BN": "Brunei Darussal",
	        "BG": "Bulgaria",
	        "BF": "Burkina Faso",
	        "BI": "Burundi",
	        "KH": "Cambodia",
	        "CM": "Cameroon",
	        "CA": "Canada",
	        "CV": "Capo Verde",
	        "CL": "Chile",
	        "CN": "China",
	        "CX": "Christmas I.",
	        "CY": "Cyprus",
	        "CO": "Colombia",
	        "KM": "Comorrean Islands",
	        "CG": "Congo",
	        "KP": "North Korea",
	        "KR": "South Korea",
	        "CR": "Costa Rica",
	        "CI": "Ivory Coast",
	        "HR": "Croatia",
	        "CU": "Cuba",
	        "DK": "Denmark",
	        "DJ": "Djibouti",
	        "EG": "Egypt",
	        "SV": "El Salvador",
	        "AE": "United Arab Emirates",
	        "EC": "Ecuador",
	        "ER": "Eritrea",
	        "ES": "Spain",
	        "EE": "Estonia",
	        "ET": "Ethiopia",
	        "RU": "Russian Federation",
	        "FO": "Faroe Islands",
	        "FJ": "Fiji",
	        "FI": "Finland",
	        "FR": "France",
	        "GA": "Gabon",
	        "GM": "Gambia",
	        "GE": "Georgia",
	        "GH": "Ghana",
	        "GI": "Gibraltar",
	        "GB": "Great Britain",
	        "GR": "Greece",
	        "GD": "Grenada",
	        "GL": "Greenland",
	        "GP": "Guadeloupe",
	        "GU": "Guam",
	        "GT": "Guatemala",
	        "GF": "Guinea",
	        "GN": "Guinea",
	        "GQ": "Equatorial Guinea",
	        "GW": "Guinea-Bissau",
	        "GY": "Guyana",
	        "HT": "Haiti",
	        "HN": "Honduras",
	        "HK": "Hong Kong",
	        "HU": "Hungary ",
	        "VI": "US Virgin Islands",
	        "VG": "British Virgin Islands",
	        "HM": "Heard/McDon. Islands",
	        "MU": "Mauritius",
	        "MP": "N.Mariana Islands",
	        "BV": "Bouvet Islands",
	        "KY": "Cayman Islands",
	        "CC": "Coco Islands",
	        "CK": "Cook Islands",
	        "MH": "Marshall Islands",
	        "UM": "Minor Outl Islands",
	        "NU": "Niue Islands",
	        "NF": "Norfolk Islands",
	        "PN": "Pitcairn Islands",
	        "TK": "Tokelau Islands",
	        "IO": "BIOT",
	        "IN": "India",
	        "ID": "Indonesia",
	        "IR": "Iran",
	        "IQ": "Iraq",
	        "IE": "Ireland",
	        "IS": "Iceland",
	        "IL": "Israel",
	        "IT": "Italy",
	        "JM": "Jamaica",
	        "JP": "Japan",
	        "JO": "Jordan",
	        "KZ": "Kazakhstan",
	        "KE": "Kenya",
	        "KG": "Kirghiz",
	        "KI": "Kiribati",
	        "KW": "Kuwait",
	        "DM": "Dominica",
	        "LA": "Laos",
	        "LS": "Lesotho",
	        "LV": "Latvia",
	        "LB": "Lebanon",
	        "LR": "Liberia",
	        "LY": "Libya",
	        "LI": "Liechtenstein",
	        "LT": "Lithuania",
	        "LU": "Luxembourg",
	        "MO": "Macao",
	        "MK": "Macedonia",
	        "MG": "Madagascar",
	        "MY": "Malaysia",
	        "MW": "Malawi",
	        "MV": "Maldives",
	        "ML": "Mali",
	        "FK": "Falkland Islands",
	        "MT": "Malta",
	        "MA": "Morocco",
	        "MQ": "Martinique",
	        "MR": "Mauritania",
	        "YT": "Mayotte",
	        "MX": "Mexico",
	        "FM": "Micronesia",
	        "MD": "Moldavia",
	        "MC": "Monaco",
	        "MN": "Mongolia",
	        "MS": "Montserrat",
	        "MZ": "Mozambique",
	        "MM": "Myanmar",
	        "NZ": "New Zealand",
	        "NC": "N.Caledonia",
	        "NA": "Namibia",
	        "NR": "Nauru",
	        "NP": "Nepal",
	        "NI": "Nicaragua",
	        "NE": "Niger",
	        "NG": "Nigeria",
	        "NO": "Norway",
	        "OM": "Oman",
	        "UG": "Uganda",
	        "UZ": "Uzbekistan",
	        "PK": "Pakistan",
	        "PW": "Palau",
	        "PA": "Panama",
	        "PG": "Papua New Guinea",
	        "PY": "Paraguay",
	        "NL": "Netherlands",
	        "PE": "Peru",
	        "PH": "Philippines",
	        "PL": "Poland",
	        "PF": "French Polynesia",
	        "PR": "Porto Rico",
	        "PT": "Portugal",
	        "QA": "Qatar",
	        "CF": "Central African Republic",
	        "CZ": "Czech Republic",
	        "DO": "Dominican Republic",
	        "RE": "Reunion Island",
	        "RO": "Romania",
	        "RW": "Rwanda",
	        "ST": "Sao Tomé and Prin",
	        "SM": "Saint-Marin",
	        "SH": "Saint-Helena",
	        "SB": "Salomon",
	        "WS": "Western Samoa ",
	        "AS": "American Samoa",
	        "SN": "Senegal",
	        "SC": "Seychelles",
	        "SL": "Sierra Leone",
	        "SG": "Singapore",
	        "SK": "Slovakia",
	        "SI": "Slovenia",
	        "SO": "Somalia",
	        "SD": "Sudan",
	        "LK": "Sri Lanka",
	        "LC": "Sainte-Lucie",
	        "VC": "St. Vincent",
	        "KN": "St.Chr.,Nevis",
	        "PM": "St.Pierre,Miqu.",
	        "SE": "Sweden",
	        "CH": "Switzerland",
	        "SR": "Suriname",
	        "SJ": "Svalbard",
	        "SZ": "Swaziland",
	        "SY": "Syria",
	        "TJ": "Tajikistan",
	        "TW": "Taiwan",
	        "TZ": "Tanzania",
	        "TD": "Chad",
	        "TH": "Thailand",
	        "TP": "East Timur",
	        "TG": "Togo",
	        "TO": "Tonga",
	        "TT": "Trinidad,Tobago",
	        "TN": "Tunisia",
	        "TM": "Turkmenistan",
	        "TC": "Turks and Caicos",
	        "TR": "Turkey",
	        "TV": "Tuvalu",
	        "UA": "Ukraine",
	        "UY": "Uruguay",
	        "US": "USA",
	        "VU": "Vanuatu",
	        "VA": "Vatican",
	        "VE": "Venezuela",
	        "VN": "Viêt Nam",
	        "WF": "Wallis,Futuna",
	        "YE": "Yemen",
	        "YU": "Yugoslavia",
	        "ZR": "Zaire",
	        "ZM": "Zambia",
	        "ZW": "Zimbabwe"
	    },
	    "motifs_correctives": {
	        "AUTRE": "Other",
	        "BONUS_MALUS": "Bonus / Malus",
	        "ERREUR_SAISIE": "Input error",
	        "MATERIAU": "Material",
	        "POIDS": "Weight",
	        "QUANTITE": "Quantity",
	        "RECYCLE": "Recycled"
	    },
	    "motifs_controle_ecart": {

	        "AUTRES": "Other",
	        "EVOL_POIDS_EMB": " Weight/packaging evolution",
	        "EVOL": "Strong evolution of the revenues",
	        "FUSION": "Merger/Takeover",
	        "PERTE_MARCHE": "Loss of market share",
	        "PERIMETRE": "Contributory scope"

	    }
	};

	module.exports = messagesFr;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	var messagesFr = {
	    "errors": {
	        "transverse": {
	            "TECHNICAL": "Une erreur technique est survenue.",
	            "PAGE_NOT_FOUND": "Page introuvable",
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner l'adresse e-mail.",
	            "ERROR_AMOUNT_INVALID": "Montant incorrect",
	            "ERROR_TEL_INVALID": "Ce N° de téléphone n'est pas valide",
	            "ERROR_ADRESS_REQUIRED": "Vous devez renseigner l'adresse",
	            "ERROR_AMOUNT_REQUIRED": "Vous devez renseigner le montant",
	            "ERROR_COUNTRY_REQUIRED": "Vous devez sélectionner un pays",
	            "ERROR_CITY_REQUIRED": "Vous devez renseigner la ville",
	            "ERROR_CIVILITY_REQUIRED": "Vous devez indiquer la civilité",
	            "ERROR_LASTNAME_REQUIRED": "Vous devez renseigner le nom",
	            "ERROR_FIRSTNAME_REQUIRED": "Vous devez renseigner le prénom",
	            "ERROR_FUNCTION_REQUIRED": "Vous devez sélectionner une fonction",
	            "ERROR_COMPANY_NAME_REQUIRED": "Vous devez renseigner le nom de l'entreprise",
	            "ERROR_ZIPCODE_REQUIRED": "Vous devez renseigner un code postal."

	        },
	        "authentification": {
	            "ECHEC": "Erreur lors de l'authentification",
	            "LOGIN_OBLIGATOIRE": "Vous devez renseigner votre identifiant.",
	            "PASSWORD_OBLIGATOIRE": "Vous devez renseigner votre mot de passe.",
	            "IDENTIFIANT_TAILLE_MIN": "L'identifiant doit contenir au moins 3 caractères.",
	            "ERROR_EMAIL_ACCOUNT": "Cette adresse e-mail n'est pas reconnue.",
	            "ERROR_EMAIL_CREATE_ACCOUNT": "Créez votre compte",
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre adresse e-mail.",
	            "ERROR_WRONG_PASSWORD": "Mot de passe incorrect",
	            "ERROR_TECHNICAL": "Une erreur technique est survenue.",
	            "WARNING_ATTEMPT_COUNT": "Il vous reste #attemptCount# tentative(s) de connexion.",
	            "WARNING_ACCOUNT_BLOCKED": "Votre compte #orgaContext# est bloqué. Pour le débloquer, vous devez réinitialiser votre mot de passe en cliquant sur",
	            "WARNING_ACCOUNT_BLOCKED_LINK": "ce lien."

	        },
	        "adhesionSimplifiee": {
	            "ERROR_SIRET_INVALID": "Ce SIRET n'est pas valide.",
	            "EXPIRED_LINK": "Lien expiré !",
	            "EXPIRED_LINK_INSTRUCTION": " Vous devez refaire une demande d'adhésion.",
	            "WARNING_CONTRACT_SIGNED": "Attention !",
	            "WARNING_CONTRACT_SIGNED_INSTRUCTION": " Ce contrat a déjà été signé.",
	            "TECHNICAL": "Erreur technique !",
	            "TECHNICAL_INSTRUCTION": " Impossible de récupérer l'objet adhésion.",
	            "WARNING_CONTRACT_ECSIGNED_INSTRUCTION": " Ce contrat est en cours de signature."
	        },
	        "declaration": {
	            "LIBELLE_MIN_LENGHT": "Le libellé est trop court.",
	            "LIBELLE_MAX_LENGHT": "Le libellé est trop long.",
	            "VERIFY_FILE_BEFORE_UPLOAD": "Vérifiez votre fichier avant de le déposer.",
	            "BAD_FILE_TYPE": "Le fichier chargé doit être en format zip ou fde",
	            "BAD_CLIENT_NO": "le numéro client du fichier excel est différent du numéro client identifié",
	            "BAD_YEAR": "l'année de déclaration du fichier excel est différent de celle choisie dans le formulaire",
	            "UVC_ENCOURS": "Vous avez une uvc en cours, veuillez la valider!"
	        },
	        "inscription": {
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre adresse e-mail.",
	            "ERROR_EMAIL_USED_YET": "Un compte existe déjà pour cette adresse e-mail.",
	            "ERROR_EMAIL_LOGIN": "Identifiez-vous",
	            "ERROR_FIRSTNAME_REQUIRED": "Vous devez renseigner votre prénom.",
	            "ERROR_LASTNAME_REQUIRED": "Vous devez renseigner votre nom.",
	            "ERROR_PASSWORD_REQUIRED": "Vous devez renseigner un mot de passe.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Vous devez confirmer votre mot de passe.",
	            "ERROR_TELEPHONE_REQUIRED": "Vous devez renseigner votre numéro de téléphone.",
	            "ERROR_TELEPHONE_INVALID": "Numéro de téléphone non valide",
	            "ERROR_PASSWORD_INVALID": "Votre mot de passe est invalide.",
	            "ERROR_PASSWORD_MISMATCH": "Les deux mots de passe sont différents.",
	            "ERROR_CLIENT_NUMBER_INVALID": "Le numéro client n'est pas valide.",
	            "ERROR_CLIENT_NUMBER_REQUIRED": "Vous devez renseigner votre numéro client.",
	            "ERROR_CLIENT_NUMBER_NOT_EXIST": "Ce numéro client est inconnu.",
	            "ERROR_CIVILITY_REQUIRED": "Vous devez préciser votre civilité.",
	            "ERROR_FUNCTION_REQUIRED": "Vous devez renseigner votre fonction."

	        },
	        "donneesPersonnelles": {
	            "ERROR_LASTNAME_REQUIRED": "Vous devez renseigner votre nom.",
	            "ERROR_FIRSTNAME_REQUIRED": "Vous devez renseigner votre prénom.",
	            "ERROR_POSITION_REQUIRED": "Vous devez renseigner votre fonction.",
	            "EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Vous devez renseigner votre e-mail.",
	            "ERROR_PHONE_REQUIRED": "Vous devez renseigner un numéro de téléphone.",
	            "ERROR_TELEPHONE_INVALID": "Numéro de téléphone non valide",
	            "ERROR_MOBILEPHONE_INVALID": "Autre numéro de téléphone non valide"
	        },
	        "modifMotDePasse": {
	            "ERROR_OLDPASSWORD_REQUIRED": "Vous devez renseigner votre ancien mot de passe.",
	            "ERROR_NEWPASSWORD_REQUIRED": "Vous devez renseigner un mot de passe.",
	            "ERROR_NEWPASSWORDCONFIRM_REQUIRED": "Vous devez confirmer votre nouveau mot de passe.",
	            "ERROR_NEWPASSWORD_INVALID": "Nouveau mot de passe non valide",
	            "ERROR_PASSWORD_MISMATCH": "Les deux mots de passe sont différents.",
	            "ERROR_OLDPASSWORD_INCORRECT": "Votre mot de passe est invalide."
	        },
	        "formulaire_upload": {
	            "TYPE_DECLARATION_REQUIRED": "Veuillez sélectionner votre type de déclaration.",
	            "ANNEE_REQUIRED": "Veuillez sélectionner l'année de votre déclaration.",
	            "FILE_REQUIRED": "Veuillez sélectionner le fichier à télécharger.",
	            "ERREUR_DETAILLEE": "Vous ne pouvez pas faire une déclaration détaillée.",
	            "ERREUR_UVC": "Vous ne pouvez pas faire une déclaration par UVC avant 2016."
	        },
	        "visualisationEntreprises": {
	            "CLIENT_NUMBER_REQUIRED": "Vous devez renseigner votre numéro client.",
	            "COMPANY_NOT_FOUND": "Ce numéro client est inconnu.",
	            "COMPANY_ALREADY_BOUND": "Vous avez déjà accès à ce compte."
	        },
	        "ajoutCompteClient": {
	            "CLIENT_NUMBER_REQUIRED": "Vous devez renseigner votre numéro client.",
	            "COMPANY_NOT_FOUND": "Ce numéro client est inconnu.",
	            "COMPANY_ALREADY_BOUND": "Vous avez déjà un compte pour ce numéro client."
	        },
	        "suppressionCompte": {
	            "REASON_REQUIRED": "Vous devez renseigner un motif de suppression.",
	            "PASSWORD_REQUIRED": "Vous devez confirmer la suppression avec votre mot de passe.",
	            "INVALID_PASSWORD": "Mot de passe incorrect, il vous reste #attemptCount# tentative(s) de connexion.",
	            "ACCOUNT_LOCKED": "Votre compte #orgaContext# est bloqué. Pour le débloquer, vous devez réinitialiser votre mot de passe en cliquant sur <a href='/oubli-mot-de-passe'>ce lien</a>"
	        },
	        "reinitialisationMotDePasse": {
	            "ERROR_PASSWORD_REQUIRED": "Vous devez renseigner un mot de passe.",
	            "ERROR_PASSWORD_INVALID": "Votre mot de passe est invalide.",
	            "ERROR_CONFIRM_PASSWORD_MISMATCH": "Les deux mots de passe sont différents.",
	            "ERROR_CONFIRM_PASSWORD_REQUIRED": "Vous devez confirmer votre nouveau mot de passe."
	        },
	        "oubliMotDePasse": {
	            "ERROR_ID_REQUIRED": "Vous devez renseigner votre e-mail.",
	            "ERROR_ID_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_ID_NOT_FOUND": "Cette adresse e-mail n'est pas reconnue."
	        },
	        "adhesionRestreinte": {
	            "ERROR_EMAIL_INVALID": "Cette adresse e-mail n'est pas valide.",
	            "ERROR_EMAIL_REQUIRED": "Veuillez renseigner votre adresse e-mail.",
	            "ERROR_SIRET_INVALID": "Ce SIRET n'est pas valide.",
	            "ERROR_COMPANY_NAME_REQUIRED": "Veuillez renseigner la raison sociale.",
	            "ERROR_ACTIVATION_CODE_REQUIRED": "Veuillez renseigner le code d'activation.",
	            "ERROR_ACTIVATION_CODE_INVALID": "Ce code d'activation n'est pas valide.",
	            "ERROR_REP_REQUIRED": "Veuillez indiquer si vous avez déjà contribué pour la REP emballages ménagers en France.",
	            "ERROR_COMPANY_INVOICE_REQUIRED": "Veuillez indiquer si la société à facturer est la même entreprise.",
	            "ERROR_ADRESS_BILLING_REQUIRED": "Veuillez indiquer une adresse de facturation.",
	            "ERROR_ADRESS_SEND_BILL_REQUIRED": "Veuillez indiquer si l'adresse d'envoi des factures est différente de l'adresse de facturation.",
	            "ERROR_BILL_DEMAT_REQUIRED": "Vous devez indiquer si vous optez pour la facture dématérialisée",
	            "ERROR_PROVIDER_REQUIRED": "Veuillez indiquer si vous êtes prestataire.",
	            "ERROR_SIGNER_REQUIRED": "Veuillez indiquer si vous êtes le signataire.",
	            "ERROR_SIRET_EXIST": "Ce numéro SIRET fait déjà partie de nos clients.",
	            "ERROR_SIRET_EXIST_LOGIN": "Connectez-vous à votre espace",
	            "ERROR_DATA_CERTIFICATION_REQUIRED": "Vous devez certifier l'exactitude des données renseignées.",
	            "ERROR_DELEGATE_VALIDATION_REQUIRED": "Vous devez valider le(s) mandat(s) de gestion pour le(s) prestataire(s).",
	            "ERROR_CONTRACT_ACCEPT_REQUIRED": "Vous devez lire et accepter les termes du contrat.",
	            "ERROR_FILE_REQUIRED": "Pièce jointe requise.",
	            "ERROR_FILE_TYPE": "Votre fichier doit être au format : PDF, Excel, Word, PNG ou JPEG.",
	            "ERROR_FILE_SIZE": "Votre fichier ne doit pas dépasser 2 Mo.",
	            "ERROR_SIRET_REQUIRED": "Vous devez renseigner le siret de votre entreprise.",
	            "ERROR_TVA_REQUIRED": "Vous devez renseigner le numéro TVA intracommunautaire."
	        },
	        "rechercheUtilisateur": {
	            "ERROR_EMAIL_MISSING": "E-mail obligatoire",
	            "ERROR_EMAIL_INVALID": "Format de l'e-mail non valide",
	            "ERROR_EMAIL_NOTFOUND": "Aucun utilisateur ne correspond à cet e-mail"
	        }
	    },
	    "labels": {
	        "loaders": {
	            "VALIDATION": "Validation en cours...",
	            "SIGNING": "Signature en cours...",
	            "GETTING_DATA": "Récupération de vos données...",
	            "GETTING_CONTRACT": "Récupération de votre contrat..."
	        },
	        "orgaContext": {
	            "PHONE_NUMBER_ECO": "0 810 00 17 23",
	            "PHONE_NUMBER_ADELPHE": "0 810 00 86 90 (service 0,06€/mn + prix appel)",
	            "EMAIL_CONTACT_ECO": "conseillers.entreprises@ecoemballages.fr",
	            "EMAIL_CONTACT_ADELPHE": "entreprises@adelphe.fr",
	            "EMAIL_CIL": "entreprises@adelphe.fr",
	            "NAME": "Adelphe"
	        },
	        "transverse": {
	            "BTN_SAUVEGARDER": "Valider",
	            "BTN_ANNULER": "Annuler",
	            "BTN_LOGOUT": "Déconnexion",
	            "BTN_RETOUR": "Retour",
	            "BTN_COMFIRM": "Confirmer",
	            "BTN_OK": "OK",
	            "BTN_ADD": "Ajouter",
	            "BTN_REMOVE": "Supprimer",
	            "BTN_CLOSE": "Fermer",
	            "SAVE_SUCCESS": "Vos modifications ont bien été prises en compte.",
	            "TECHNICAL_ERROR": "Une erreur technique est survenue.",
	            "SAVE_CHANGES": "Enregistrer les modifications",
	            "BTN_NEXT_STEP": "Passer à l'étape suivante",
	            "BTN_VALIDER": "Valider",
	            "BTN_SUIVANT": "Suivant",
	            "BTN_SEND": "Envoyer",
	            "OPERATION_NOT_ALLOWED": "Vous n'êtes pas autorisé à effectuer cette action.",
	            "VOIR_TOUT": "Voir tout",
	            "DOWNLOAD": "Télécharger"
	        },
	        "mode_declaration": {
	            "WEB": "En ligne",
	            "EXCEL": "Excel"
	        },
	        "type_declaration": {
	            "DETAILLEE": "Détaillée",
	            "SECTORIELLE": "Sectorielle",
	            "UVC": "Par UVC",
	            "FORFAIT": "Au forfait"
	        },
	        "statut_declaration": {
	            "EN_COURS": "En cours",
	            "VALIDEE": "Finalisée",
	            "ANNULEE": "Annulée",
	            "A_SAISIR": "À saisir",
	            "INITIALISEE": "En cours"
	        },
	        "relationClient": {
	            "transverse": {
	                "PASSWORD_RULES": "Votre mot de passe doit contenir :",
	                "PASSWORD_RULE_LENGTH": "- Au moins 9 caractères",
	                "PASSWORD_RULE_MAJ": "- Au moins une majuscule",
	                "PASSWORD_RULE_MIN": "- Au moins une minuscule",
	                "PASSWORD_RULE_NUM": "- Au moins un chiffre",
	                "PASSWORD_RULE_SPECIAL_CAR": "- Au moins un caractère spécial figurant dans la liste suivante : ",
	                "GET_NEW_PASSWORD": "Demande d'un nouveau mot de passe",
	                "NEW_PASSWORD_REQUEST_SENT": "Votre demande de réinitialisation de mot de passe a bien été envoyée."
	            },
	            "authentification": {
	                "TITLE": "Connexion",
	                "MESSAGE": "Identifiez-vous pour accéder à votre Espace.",
	                "VALIDER": "Me connecter",
	                "PLACEHOLDER_LOGIN": "Identifiant (adresse e-mail)",
	                "PLACEHOLDER_PASSWORD": "Mot de passe",
	                "FORGOTTEN_PASSWORD": "1ère connexion / mot de passe oublié ?",
	                "LOGIN": "Me connecter",
	                "CREATE_ACCOUNT": "Créez votre compte",
	                "DONT_HAVE_ACCOUNT_YET": "Vous n'avez pas encore de compte ?"

	            },
	            "inscription": {
	                "PLACEHOLDER_LASTNAME": "Nom *",
	                "PLACEHOLDER_FIRSTNAME": "Prénom *",
	                "PLACEHOLDER_PASSWORD": "Mot de passe *",
	                "PLACEHOLDER_CONFIRM_PASSWORD": "Confirmez le mot de passe *",
	                "PLACEHOLDER_TELEPHONE": "N° téléphone (principal) *",
	                "PLACEHOLDER_EMAIL": "Adresse e-mail *",
	                "PLACEHOLDER_FUNCTION": "Fonction *",
	                "PLACEHOLDER_CLIENT_NUMBER": "Numéro client *",
	                "PLACEHOLDER_OTHER_FUNCTION": "Autre fonction",
	                "CREATION_ACCOUNT_TITLE": "CRÉER MON COMPTE",
	                "CREATION_ACCOUNT_ALERT_CLIENT_NUMBER_REQUIRED": "Vous devez disposer d'un numéro client pour créer votre compte.",
	                "CREATION_ACCOUNT_INSTRUCTION": "Renseignez tous les champs ci-dessous afin de créer votre compte.",
	                "CREATION_ACCOUNT_ACTION": "Créer mon compte",
	                "ACCOUNT_EXIST_YET": "Vous avez déjà un compte ?",
	                "LOGIN": "Identifiez-vous",
	                "REQUIRED_FIELDS": "*Champs obligatoires",
	                "ACCOUNT_ALREADY_EXIST": "Vous avez déjà un compte ?",
	                "LINK_SIGN_UP": "IDENTIFIEZ-VOUS",
	                "RADIO_BUTTON_CIVILITY": "Civilité * : ",
	                "RADIO_BUTTON_MR": " M. ",
	                "RADIO_BUTTON_MISS": " Mme",
	                "INFORMATION": "Les informations vous concernant ont été collectées en conformité avec les directives de la CNIL et font l’objet d’un traitement par la société #orgaContext# dans le cadre de son fichier client. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès, de rectification aux données qui vous concernent, que vous pouvez exercer en vous adressant à #linkMail#. Vous pouvez également pour un motif légitime vous opposer au traitement des données vous concernant. ",
	                "LANGUE_CAPTCHA": "fr"
	            },
	            "donneesPersonnelles": {
	                "PERSONAL_DATA_TITLE": "Mes informations personnelles",
	                "CIVILITY_FIELD": "Civilité * : ",
	                "MSG_MONSIEUR": "M.",
	                "MSG_MADAME": "Mme",
	                "PLACEHOLDER_LASTNAME": "Nom *",
	                "PLACEHOLDER_FIRSTNAME": "Prénom *",
	                "PLACEHOLDER_POSITION": "Fonction *",
	                "PLACEHOLDER_EMAIL": "E-mail professionnel *",
	                "PLACEHOLDER_PHONE": "N° téléphone principal",
	                "PLACEHOLDER_MOBILEPHONE": "Autre n° téléphone",
	                "PLACEHOLDER_ACCESS": "Mes accès sur Mon Espace",
	                "PLACEHOLDER_PRINCIPAL": "Correspondant principal pour mon entreprise",
	                "FUNCTION": "Fonction",
	                "OTHER_FUNCTION": "Autre fonction",
	                "BTN_SAVE_CHANGES": "Enregistrer les modifications"
	            },
	            "modifMotDePasse": {
	                "INFORMATION": "Vous pouvez modifier votre mot de passe à tout moment. Pour information, dans le cadre de notre politique de sécurité des données, nous vous demanderons de changer de mot de passe tous les 12 mois.",
	                "SECURITY_TITLE": "Mot de passe",
	                "PLACEHOLDER_OLDPASSWORD": "Ancien mot de passe",
	                "PLACEHOLDER_NEWPASSWORD": "Nouveau mot de passe",
	                "PLACEHOLDER_NEWPASSWORD_CONFIRM": "Confirmez le nouveau mot de passe",
	                "SAVE_SUCCESS": "Votre mot de passe a bien été modifié."
	            },

	            "acceuilPortail": {
	                "TITLE_1": "BIENVENUE SUR",
	                "TITLE_2": "VOTRE ESPACE",
	                "TEXT_PART_1": "Un message a été envoyé à ",
	                "TEXT_PART_2": ", votre correspondant principal, qui définira vos accès.",
	                "TEXT_PART_3": "Pour accéder aux outils et services Adelphe, rendez-vous sur le site ",
	                "ACCESS_ACCOUNT": "Accéder à mon compte personnel ",
	                "LINK": "www.adelphe.fr"
	            },

	            "profilesCorrespondants": {
	                "TABLE_HEADER_NAME": "Profils",
	                "TABLE_HEADER_ADDED_DATE": "Date de l'ajout",
	                "TABLE_HEADER_LAST_CONNECTION_DATE": "Date de dernière connexion",
	                "TABLE_HEADER_ACCESS": "Accès",
	                "THE": "Le"
	            },

	            "choixEntreprise": {
	                "WELCOME": "Bienvenue",
	                "CHOOSE_ACCOUNT": "Choisissez le compte client auquel vous souhaitez accéder :",
	                "SEARCH": "Rechercher",
	                "ADD_CLIENT_ACCOUNT": "Ajouter un autre numéro client"
	            },

	            "access": {
	                "SERVICES": "Services",
	                "FACTURATION": "Facturation",
	                "DECLARATION": "Déclaration"
	            },

	            "visualisationEntreprises": {
	                "BTN_ADD_COMPANY": "Ajouter un compte client",
	                "COMFIRM_REMOVE_COMPANY": "Voulez-vous vraiment supprimer ce compte de votre espace ? En le supprimant, vous n'aurez plus accès à ses données.",
	                "BTN_REMOVE": "Supprimer",
	                "TITLE_ADD_COMPANY": "Ajouter un compte client",
	                "TEXT_ADD_COMPANY": "Renseignez le numéro client de l'entreprise que vous souhaitez ajouter.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Numéro client *",
	                "BTN_ADD": "Ajouter",
	                "DELETION_DENIED": "Vous êtes le correspondant principal pour ce compte client. Si vous souhaitez supprimer ce compte de votre portefeuille, envoyez un message à #ADRESSE# ou appelez-nous au #TEL#.",
	                "BTN_CONNECT": "Me connecter"
	            },

	            "header": {
	                "PHONE_NUMBER": "0 810 00 86 90",
	                "PHONE_RATE": "(service 0,06€/mn + prix appel)",
	                "SEND_EMAIL": "Envoyer un e-mail",
	                "MAKE_AN_APPOINTMENT": "Prendre rdv",
	                "MY_ACCOUNT": "Mon compte client",
	                "PERSONAL_INFO": "Mes informations personnelles",
	                "MANAGE_MY_ACCOUNTS": "Gérer mes comptes client",
	                "LOGOUT": "Me déconnecter",
	                "LEGAL_MENTIONS": "Mentions légales",
	                "CGU": "CGU"
	            },

	            "ajoutCompteClient": {
	                "TITLE_ADD_COMPANY": "Ajouter un autre compte client",
	                "TEXT_ADD_COMPANY": "Renseignez le numéro client de l'entreprise que vous souhaitez ajouter.",
	                "PLACEHOLDER_CLIENT_NUMBER": "Numéro client *",
	                "BTN_ADD": "Ajouter"
	            },

	            "functions": [{
	                "label": "Administratif, fi et compt - Directeur",
	                "code": "0x1'"
	            }, {
	                "label": "Administratif, fi et compt - Employé",
	                "code": "0x2"
	            }, {
	                "label": "Administratif, fi et compt - Resp/Manager",
	                "code": "0x3"
	            }, {
	                "label": "Approvisionnement et achat - Directeur",
	                "code": "0x4"
	            }, {
	                "label": "Approvisionnement et achat - Employé",
	                "code": "0x5"
	            }, {
	                "label": "Approvisionnement et achat - Resp/Manager",
	                "code": "0x6"
	            }, {
	                "label": "Autre - Assistant",
	                "code": "0x7"
	            }, {
	                "label": "Autre - Directeur",
	                "code": "0x8"
	            }, {
	                "label": "Autre - Employé",
	                "code": "0x9"
	            }, {
	                "label": "Autre - Ingénieur",
	                "code": "0x10"
	            }, {
	                "label": "Autre - Responsable/Manager",
	                "code": "0x11"
	            }, {
	                "label": "Commercial et ADV - Assistant",
	                "code": "0x12"
	            }, {
	                "label": "Commercial et ADV - Directeur",
	                "code": "0x13"
	            }, {
	                "label": "Commercial et ADV - Resp/Manager",
	                "code": "0x14"
	            }, {
	                "label": "Communication - Assistant",
	                "code": "0x15"
	            }, {
	                "label": "Communication - Directeur",
	                "code": "0x16"
	            }, {
	                "label": "Communication - Ingénieur",
	                "code": "0x17"
	            }, {
	                "label": "Communication - Responsable/Manager",
	                "code": "0x18"
	            }, {
	                "label": "Conseil/consultant - Directeur",
	                "code": "0x19"
	            }, {
	                "label": "Conseil/consultant - Resp/Manager",
	                "code": "0x20"
	            }, {
	                "label": "Direction générale et stratégique",
	                "code": "0x21"
	            }, {
	                "label": "Dirigeant - Autre",
	                "code": "0x22"
	            }, {
	                "label": "Dirigeant - Délégué Général",
	                "code": "0x23"
	            }, {
	                "label": "Dirigeant - Directeur Général",
	                "code": "0x24"
	            }, {
	                "label": "Dirigeant - Gérant/Exploitant",
	                "code": "0x25"
	            }, {
	                "label": "Dirigeant - Président",
	                "code": "0x26"
	            }, {
	                "label": "Dirigeant - Président Directeur Général",
	                "code": "0x27"
	            }, {
	                "label": "Dirigeant - Secrétaire Général",
	                "code": "0x28"
	            }, {
	                "label": "Dirigeant - Vice-Président",
	                "code": "0x29"
	            }, {
	                "label": "Emballage - Assistant",
	                "code": "0x30"
	            }, {
	                "label": "Emballage - Directeur",
	                "code": "0x31"
	            }, {
	                "label": "Emballage - Ingénieur",
	                "code": "0x32"
	            }, {
	                "label": "Emballage - Responsable/Manager",
	                "code": "0x33"
	            }, {
	                "label": "Gérance",
	                "code": "0x34"
	            }, {
	                "label": "Juridique et réglementation - Assistant",
	                "code": "0x35"
	            }, {
	                "label": "Juridique et réglementation - Directeur",
	                "code": "0x36"
	            }, {
	                "label": "Juridique et réglementation - Resp/Manager",
	                "code": "0x37"
	            }, {
	                "label": "Marketing - Assistant",
	                "code": "0x38"
	            }, {
	                "label": "Marketing - Directeur ",
	                "code": "0x39"
	            }, {
	                "label": "Marketing - Responsable/Manager",
	                "code": "0x40"
	            }, {
	                "label": "Présidence",
	                "code": "0x41"
	            }, {
	                "label": "Prestataire de service",
	                "code": "0x42"
	            }, {
	                "label": "Production - Assistant",
	                "code": "0x43"
	            }, {
	                "label": "Production - Directeur",
	                "code": "0x44"
	            }, {
	                "label": "Production - Employé",
	                "code": "0x45"
	            }, {
	                "label": "Production - Responsable/Manager",
	                "code": "0x46"
	            }, {
	                "label": "Qualité et environnement - Assistant",
	                "code": "0x47"
	            }, {
	                "label": "Qualité et environnement - Directeur",
	                "code": "0x48"
	            }, {
	                "label": "Qualité et environnement - Employé",
	                "code": "0x49"
	            }, {
	                "label": "Qualité et environnement - Ingénieur",
	                "code": "0x50"
	            }, {
	                "label": "Qualité et environnement - Resp/Manager",
	                "code": "0x51"
	            }, {
	                "label": "Recherche et développement - Assistant",
	                "code": "0x52"
	            }, {
	                "label": "Recherche et développement - Directeur",
	                "code": "0x53"
	            }, {
	                "label": "Recherche et développement - Employé",
	                "code": "0x54"
	            }, {
	                "label": "Recherche et développement - Ingénieur",
	                "code": "0x55"
	            }, {
	                "label": "Recherche et développement - Resp/Manager",
	                "code": "0x56"
	            }, {
	                "label": "Ressources humaines - Assistant",
	                "code": "0x57"
	            }, {
	                "label": "Ressources humaines - Directeur ",
	                "code": "0x58"
	            }, {
	                "label": "Ressources humaines - Resp/Manager",
	                "code": "0x59"
	            }, {
	                "label": "Services généraux - Assistant",
	                "code": "0x60"
	            }, {
	                "label": "Services généraux - Directeur",
	                "code": "0x61"
	            }, {
	                "label": "Services généraux - Employé",
	                "code": "0x62"
	            }, {
	                "label": "Services généraux - Resp/Manager",
	                "code": "0x63"
	            }, {
	                "label": "Système d’information - Assistant",
	                "code": "0x64"
	            }, {
	                "label": "Système d’information - Directeur",
	                "code": "0x65"
	            }, {
	                "label": "Système d’information - Ingénieur",
	                "code": "0x66"
	            }, {
	                "label": "Système d’information - Resp/Manager",
	                "code": "0x67"
	            }, {
	                "label": "à définir",
	                "code": "0x68"
	            }],

	            "suppressionCompte": {
	                "DELETE_MY_ACCOUNT": "Supprimer mon compte",
	                "ATTENTION": "Attention !",
	                "EXPLAINATION": "Vous vous apprêtez à supprimer votre compte. Cette suppression entraînera la perte de vos données personnelles.",
	                "GIVE_REASON": "Renseignez un motif de suppression",
	                "PLACEHOLDER_PASSWORD": "Renseignez votre mot de passe pour confirmer",
	                "CANNOT_DELETE": "Vous êtes le correspondant principal pour un ou plusieurs comptes client. Si vous souhaitez supprimer votre compte, envoyez un message à entreprises@adelphe.fr ou appelez-nous au 0 810 00 86 90."
	            },

	            "reinitialisationMotDePasse": {
	                "TITLE": "Mot de passe oublié",
	                "INSTRUCTION": "Merci de renseigner les champs ci-dessous pour réinitialiser votre mot de passe.",
	                "NEW_PASSWORD_PLACEHOLDER": "Nouveau mot de passe",
	                "CONFIRM_NEW_PASSWORD_PLACEHOLDER": "Confirmez votre nouveau mot de passe"
	            },

	            "oubliMotDePasse": {
	                "TITLE": "Mot de passe oublié",
	                "INSTRUCTION": "Merci de renseigner l'adresse e-mail associée à votre compte pour réinitialiser votre mot de passe.",
	                "ID_PLACEHOLDER": "Identifiant (adresse e-mail)"
	            },

	            "attestation": {
	                "ATTESTATION_TITLE": "VOTRE ATTESTATION D'ADHÉSION",
	                "ATTESTATION_NAME": "Attestation d'adhésion",
	                "ATTESTATION_NON_DISPONIBLE": "Attestation d'adhésion indisponible",
	                "ATTESTATION_ETAT_1": "Indisponible - Déclaration non transmise",
	                "ATTESTATION_ETAT_2": "Indisponible - Facture à échéance non réglée",
	                "ATTESTATION_ETAT_3": "Indisponible - Déclaration non transmise "
	            },
	            "facture": {
	                "FACTURE_TITLE": "VOS FACTURES"
	            },
	            "mois": {
	                "01": "Janvier",
	                "02": "Février",
	                "03": "Mars",
	                "04": "Avril",
	                "05": "Mai",
	                "06": "Juin",
	                "07": "Juillet",
	                "08": "Août",
	                "09": "Septembre",
	                "10": "Octobre",
	                "11": "Novembre",
	                "12": "Décembre"
	            },
	            "contrat": {
	                "CONTRAT_NAME": "Contrat",
	                "DELEGATION_NAME": "Autorisation de mandat"
	            },
	            "adhesionRep": {
	                "ETAPE_1": "ÉTAPE N°1/4",
	                "ETAPE_1_QUESTION_1": "Les produits - ou une partie des produits - que vous commercialisez sont-ils consommés ou utilisés par des ménages en France ?",
	                "INTITULE_ETAPE_1": "PAYS DE COMMERCIALISATION DES PRODUITS EMBALLÉS",
	                "REP_OUI": "Oui",
	                "REP_NON": "Non",
	                "RETOUR": "Retour",
	                "SUIVANT": "Suivant",
	                "ETAPE_2": "ÉTAPE N°2/4",
	                "INTITULE_ETAPE_2": "FABRICATION DES PRODUITS EMBALLÉS",
	                "ETAPE_2_QUESTION_A": "Fabriquez-vous (pour votre compte ou pour le compte d'un tiers) ou faites-vous fabriquer des produits emballés qui sont mis sur le marché français ?",
	                "ETAPE_2_QUESTION_B": "Dans quel contexte ?",
	                "ETAPE_2_QUESTION_B_REP_1": "Je fabrique mes produits.",
	                "ETAPE_2_QUESTION_B_REP_2": "Je fais fabriquer mes produits.",
	                "ETAPE_2_QUESTION_C": "Si vous faites fabriquer des produits emballés qui sont mis sur le marché français, êtes-vous propriétaire des produits au moment de leur emballage ?",
	                "ETAPE_3": "ÉTAPE N°3/4",
	                "ETAPE_3_QUESTION_1": "Importez-vous (de l'Union Européenne ou hors Union Européenne) des produits emballés qui sont mis sur le marché français ?",
	                "INTITULE_ETAPE_3": "IMPORTATION DES PRODUITS EMBALLÉS",
	                "ETAPE_4": "ÉTAPE N°4/4",
	                "INTITULE_ETAPE_4": "EXPÉDITION DES PRODUITS EMBALLÉS",
	                "ETAPE_4_QUESTION_1": "Expédiez-vous vos produits à vos clients, ou mettez-vous à leur disposition des emballages de service (sachets, papier cadeau, etc.) ?",
	                "ETAPE_4_QUESTION_1_REP_1": "Oui, j'expédie mes produits à mes clients.",
	                "ETAPE_4_QUESTION_1_REP_2": "Oui, je mets à disposition de mes clients des emballages de service.",
	                "ETAPE_4_QUESTION_1_REP_3": "Non, ni l'un ni l'autre.",
	                "RESULTATS": "Voir les résultats"
	            },
	            "accountDeletionReason": [{
	                "code": "CHANGEMENT_FONCTION",
	                "label": "Changement de fonction"
	            }, {
	                "code": "DEPART_ENTREPRISE",
	                "label": "Départ de l'entreprise"
	            }, {
	                "code": "AUTRE",
	                "label": "Autre"
	            }],
	            "adhesionRestreinte": {
	                "TITLE": "Saisissez vos conditions particulières",
	                "TITLE_RECONTRACT": "Saisissez vos conditions particulières recontract",
	                "transverse": {
	                    "RADIO_YES": "Oui",
	                    "RADIO_NO": "Non",
	                    "SIRET": "SIRET",
	                    "ADRESS": "Adresse (N° et nom de rue) *",
	                    "ADRESS_COMPLEMENT": "Complément adresse",
	                    "ADD_ADRESS_COMPLEMENT": "Ajouter un complément d'adresse",
	                    "ZIPCODE": "Code postal *",
	                    "CITY": "Ville *",
	                    "COUNTRY": "Pays",
	                    "COMPANY_NAME": "Raison Sociale *",
	                    "RADIO_MR": " M. ",
	                    "RADIO_MISS": " Mme",
	                    "EMAIL": "E-mail *",
	                    "CIVILITY": "Civilité *",
	                    "FIRST_NAME": "Prénom *",
	                    "LAST_NAME": "Nom *",
	                    "FUNCTION": "Fonction *",
	                    "POSITION": "Intitulé du poste",
	                    "TEL": "N° téléphone (principal)"
	                },
	                "informationsAdministratives": {
	                    "LEGEND": "Informations administratives",
	                    "INSTRUCTION": "Veuillez nous indiquer les informations administratives de votre entreprise.",
	                    "INSTRUCTION_RECONTRACT": "Veuillez nous indiquer les informations administratives de votre entreprise recontract.",
	                    "COMPANY_NAME": "Raison Sociale *",
	                    "COMERCIAL_NAME": "Nom commercial",
	                    "APE": "Code APE",
	                    "HEAD_OFFICE_ADRESS": "Adresse du siège social :",
	                    "REP": "Votre entreprise a-t-elle déjà contribué à un éco-organisme pour la REP emballages ménagers en France ?",
	                    "AMOUNT": "Montant de la dernière contribution en Euros *",
	                    "ATTACHMENT": "Veuillez nous fournir un extrait K-Bis à jour ou tout autre document officiel reprenant les principales informations juridiques concernant votre entreprise (forme juridique, siège social, numéro d’identification etc.)",
	                    "ADD_FILE": "DÉPOSEZ VOTRE FICHIER",
	                    "ADD_FILE_LEGEND": "2Mo max. ; formats acceptés : PDF, Excel, Word, PNG ou JPEG"
	                },
	                "informationsAdministrativesComplementaires": {
	                    "LEGEND": "Informations administratives complémentaires",
	                    "INSTRUCTION": "Pour mieux vous connaître, nous vous invitons à renseigner les entreprises et marques couvertes par le contrat, et si vous faites partie d'une organisation professionnelle.",
	                    "INSTRUCTION_RECONTRACT": "Pour mieux vous connaître, nous vous invitons à renseigner les entreprises et marques couvertes par le contrat, et si vous faites partie d'une organisation professionnelle recontract.",
	                    "COMPANIES_IN_CONTRACT": "Quelles sont les entreprises couvertes par le contrat ?",
	                    "COMPANIES_IN_RECONTRACT": "Quelles sont les entreprises couvertes par le recontrat ?",
	                    "COMPANY_NAME": "Nom de l'entreprise",
	                    "COMERCIAL_NAME": "Nom commercial",
	                    "COUNTRY": "Pays",
	                    "ADD_COMPANY": "Ajouter une autre entreprise",
	                    "BRANDS_IN_CONTRACT": "Quelles sont les marques couvertes par le contrat ?",
	                    "BRANDS_IN_RECONTRACT": "Quelles sont les marques couvertes par le contrat recontract ?",
	                    "BRAND_NAME": "Nom de la marque",
	                    "ADD_BRAND": "Ajouter une autre marque",
	                    "IS_PRO_ORGANISATION": "Votre entreprise fait-elle partie d'une organisation professionnelle ?",
	                    "PRO_ORGANISATION_NAME": "Nom de l'organisation professionnelle"
	                },
	                "informationsDeFacturation": {
	                    "LEGEND": "Informations générales de facturation",
	                    "BILLING_ADRESS_CONDITION": "L'adresse de facturation est-elle différente de l'adresse de l'entreprise ?",
	                    "BILLING_ADRESS": "Adresse de facturation",
	                    "TVA": "N° TVA intracommunautaire",
	                    "COMPANY_TO_INVOICE_QUESTION": "La société à facturer est-elle différente de votre entreprise ?",
	                    "COMPANY_TO_INVOICE_NAME": "Nom de la société à facturer *",
	                    "BILL_SEND_ADRESS": "Adresse d'envoi des factures",
	                    "BILLING_ADRESS_SEND_QUESTION": "L'adresse d'envoi des factures est-elle différente de l'adresse de facturation ?",
	                    "BILLING_DEMAT_QUESTION": "Souhaitez-vous opter pour la facture dématérialisée ?",
	                    "BILLING_DEMAT_LEGEND": "(Par défaut, le correspondant principal recevra les factures dématérialisées. Vous pourrez modifier ce paramètre dans votre Espace client.)"
	                },
	                "correspondantPrincipal": {
	                    "LEGEND": "Correspondant principal",
	                    "INSTRUCTION": "Renseignez les informations du correspondant principal.",
	                    "INSTRUCTION_RECONTRACT": "Renseignez les informations du correspondant principal recontract.",
	                    "INDICATION": "Quoiqu'il en soit, la société contractante reste seule redevable de la responsabilité élargie du producteur pour les déchets d'emballages ménagers.",
	                    "IS_PROVIDER": "Êtes-vous prestataire ?",
	                    "IS_PROVIDER_RECONTRACT": "Êtes-vous prestataire recontract ?"
	                },
	                "signataire": {
	                    "LEGEND": "Identification du signataire",
	                    "DESCRIPTION_1": "Vous avez rempli l'ensemble des données nécessaires à votre adhésion Adelphe.",
	                    "DESCRIPTION_2": "Nous avons maintenant besoin d'identifier la personne qui signera le contrat. Le signataire doit avoir le pouvoir d'engager votre entreprise.",
	                    "DESCRIPTION_3": "Si vous êtes le signataire, vous devrez saisir le code d'activation reçu par e-mail afin de procéder à la signature de votre contrat.",
	                    "DESCRIPTION_4": "Si vous n'êtes pas le signataire, lorsque vous validerez votre contrat, le signataire recevra par e-mail le lien d'accès à ce formulaire. Il pourra alors relire le contrat puis le valider grâce au code d'activation qui lui sera envoyé.",
	                    "INSTRUCTION": "Renseignez les informations du signataire du contrat"
	                },
	                "signataire_recontract": {
	                    "LEGEND": "Identification du signataire recontract",
	                    "DESCRIPTION_1": "Vous avez rempli l'ensemble des données nécessaires à votre adhésion Adelphe recontract.",
	                    "DESCRIPTION_2": "Nous avons maintenant besoin d'identifier la personne qui signera le contrat. Le signataire doit avoir le pouvoir d'engager votre entreprise recontract.",
	                    "DESCRIPTION_3": "Si vous êtes le signataire, vous devrez saisir le code d'activation reçu par e-mail afin de procéder à la signature de votre contrat recontract.",
	                    "DESCRIPTION_4": "Si vous n'êtes pas le signataire, lorsque vous validerez votre contrat, le signataire recevra par e-mail le lien d'accès à ce formulaire. Il pourra alors relire le contrat puis le valider grâce au code d'activation qui lui sera envoyé recontract.",
	                    "INSTRUCTION": "Renseignez les informations du signataire du contrat recontract"
	                },
	                "visualisation": {
	                    "LEGEND": "Télécharger vos documents contractuels",
	                    "DOWNLOAD_CONTRACT_FR": "Conditions particulières",
	                    "DOWNLOAD_GENERAL_CONDITIONS_FR": "Conditions générales de services",
	                    "DOWNLOAD_MANDATE_FR": "Mandat de gestion",
	                    "DOWNLOAD_MANUEL_FR": "Annexe 1 - Guide de la Déclaration",
	                    "DOWNLOAD_RATES_FR": "Annexe 2 - Tarifs Adelphe",
	                    "DOWNLOAD_GRAPHIC_CHART_FR": "Annexe 3 - Charte graphique du Point Vert",
	                    "DOWNLOAD_CODE_FR": "Annexe 4 - Code de l'environnement",
	                    "DOWNLOAD_CONTRACT_EN": "Specific conditions",
	                    "DOWNLOAD_GENERAL_CONDITIONS_EN": "Terms and conditions",
	                    "DOWNLOAD_MANDATE_EN": "Management mandate",
	                    "DOWNLOAD_MANUEL_EN": "Annex 1 - Data submission manual",
	                    "DOWNLOAD_RATES_EN": "Annex 2 - Adelphe rates",
	                    "DOWNLOAD_GRAPHIC_CHART_EN": "Annex 3 - Graphical charter of the Green Dot",
	                    "DOWNLOAD_CODE_EN": "Annex 4 - The Environmental law"
	                },
	                "validation": {
	                    "LEGEND": "Validation des données",
	                    "IS_SIGNER": "Êtes-vous le signataire du contrat ?",
	                    "VALIDATE_DATA": "VALIDER LES DONNÉES"
	                },
	                "signature": {
	                    "LEGEND": "Signez votre contrat Adelphe",
	                    "INDICATION": "Un mail vient de vous être envoyé avec votre code d'activation. Dès que vous l'aurez récupéré, vous pourrez signer votre contrat et valider votre adhésion à Adelphe.",
	                    "CODE_ACTIVATION": "Veuillez saisir votre code d'activation",
	                    "DATA_VALIDATION": "Je certifie l'exactitude des données renseignées dans le présent contrat.",
	                    "PROVIDER_VALIDATION": "Je valide le mandat de gestion pour le prestataire renseigné.",
	                    "CONTRACT_ACCEPT": "Je déclare avoir pris connaissance et accepter les termes du contrat Adelphe.",
	                    "SIGN": "SIGNER MON CONTRAT"
	                },

	                "popupDone": {

	                    "title": "Vous avez signé votre contrat Adelphe",
	                    "MSG1": "Adelphe vous remercie de votre confiance. Nous avons bien reçu votre contrat.",
	                    "MSG2": "Vous recevrez sous 8 jours votre contrat validé, votre attestation d'adhésion, votre accès à Mon Espace Adelphe ainsi que votre facture d'adhésion.",

	                    "MSG4": "Si vous souhaitez contacter l'un de nos conseillers, vous pouvez nous joindre au 0 810 00 86 90 ",
	                    "BTN": "RETOUR ACCUEIL"
	                },

	                "popupDoneNotSigner": {
	                    "title": "MERCI !",
	                    "MSG1": "Adelphe vous remercie de votre confiance. Nous avons envoyé un message au signataire que vous avez identifié afin qu'il accède à son espace de signature et valide le contrat Adelphe.",
	                    "BTN": "RETOUR ACCUEIL"
	                },

	                "popupValidationContrat": {
	                    "title": "Vous êtes sur le point de signer votre contrat Adelphe ",
	                    "MSG1": "SIGNER MON CONTRAT ",
	                    "MSG2": "ANNULER",
	                    "MSG3": "Une erreur technique est survenue.",
	                    "MSG4": "Le code entré est invalide.",
	                    "MSG5": "Le lien suivi a expiré."
	                },
	                "popupMailSent": {
	                    "TITLE": "Vos données ont été validées",
	                    "MSG": "Vérifiez votre boîte mail pour obtenir le code d'activation"
	                }
	            },
	            "rechercheUtilisateur": {
	                "LABEL_EMAIL": "E-mail",
	                "SEARCH_USER": "Rechercher l'utilisateur"
	            }
	        },
	        "declaration": {
	            "uvc": {
	                "formulaire": {
	                    "ALERT": "Alerte",
	                    "WARNING": "Attention",
	                    "TYPE_DECLARATION": "TYPE DE DÉCLARATION",
	                    "TITRE_PRODUIT": "1. Produit",
	                    "CODE_PRODUIT": "Code produit",
	                    "TITRE_POIDS": "2. POIDS UNITAIRE PAR MATÉRIAU ",
	                    "TITRE_POIDS_UNITAIRE": "(EN GRAMMES)",
	                    "TITRE_POIDS_UNITAIRE_KG": "(EN KILOGRAMMES)",
	                    "TITRE_DECOTE": "3. Décote",
	                    "TITRE_BONUS": "4. Bonus",
	                    "TITRE_MALUS": "5. Malus",
	                    "TITRE_NOMBRE_UVC": "6. NOMBRE D'UVC MISES EN MARCHÉ",
	                    "LABEL_PAPIER_CARTON_RECYCLE": "Papier-carton recyclé",
	                    "LABEL_LIBELLE_PRODUIT": "Libellé du produit",
	                    "LABEL_LIBELLE_UVC": "Libellé de votre UVC",
	                    "LABEL_ADD_UVC": "Déclarer votre UVC",
	                    "LABEL_ADD_SPEC": "Déclarer un cas spécifique",
	                    "MONNAIE": "€",
	                    "ERROR_LIBELLE": "Veuillez saisir le libellé.",
	                    "ERROR_PRODUIT": "Renseignez un code produit à l'aide de la nomenclature.",
	                    "ERROR_MATERIAUX": "Renseignez au moins un poids dans une des colonnes matériau (numérique et positif).",
	                    "LABEL_REMPLIR_PRODUITS": "Pensez à renseigner tous les matériaux qui composent votre emballage.",
	                    "DECOTE_OUI": "Oui",
	                    "DECOTE_NON": "Non",
	                    "ERROR_DECOTE": "La décote ne peut être cochée que si un poids a été renseigné pour le matériau \"Papier-carton autre que brique\".",
	                    "MALUS_PERTURBATEUR": "Perturbateur",
	                    "MALUS_SANS_FILIERE": "Sans filière",
	                    "TITRE_EMB_MENAGER": "Emballages ménagers",
	                    "TITRE_EMB_NON_MENAGER": "Emballages non ménagers",
	                    "TITRE_NB_UVC": "Renseignez un nombre d'UVC (numérique, positif et entier)",
	                    "TITRE_TOTAL_UVC": "Total de votre UVC",
	                    "TITRE_CONTRIBUTION_UNIT_TOTAL": "Contribution unitaire total (ct euro)",
	                    "TITRE_CONTRIBUTION_TOTAL": "Total de la contribution pour votre UVC (euro)",
	                    "BTN_VALIDER_PRODUIT": "Valider la saisie produit",
	                    "LABEL_TRI": "Trier par",
	                    "LABEL_Recherche": "Recherche",
	                    "BTN_ADD_UVC": "Ajouter une UVC",
	                    "LABEL_CONTRIBUTION": "Contribution",
	                    "LABEL_HT": "HT",
	                    "BTN_NEXT_STEP": "ÉTAPE SUIVANTE",
	                    "ERREUR_DECLARATION": "Erreur dans la récupération de la déclaration",
	                    "LABEL_DECOTE": "Papier carton recyclé",
	                    "TITRE_UVC_VUE": "Déclaration : UVC",
	                    "ERREUR_PRODUIT_SPEC1": "Un seul matériau peut être renseigné avec ce code produit.",
	                    "ERREUR_PRODUIT_SPEC2": "Aucun matériau de type \"papier-carton autre que brique\", \"autres emballages plastique\" et \"aluminium\" n'est renseigné avec ce code produit.",
	                    "ERREUR_PRODUIT_SPEC3": "Vous ne pouvez pas renseigner un matériau autre que \"papier-carton autre que brique\", \"autres emballages plastique\" et \"aluminium\" avec ce code produit.",
	                    "ERREUR_NON_BLOCANT": "Les emballages perturbateurs ou sans filière ne bénéficient pas du Bonus \"action de sensibilisation\".",
	                    "INFOBULLE1": "Pour ces emballages spécifiques, vous pouvez déclarer sur une seule ligne des emballages de formats, poids ou conditionnements différents. La déclaration de ces emballages se fait en kilogramme.",
	                    "INFOBULLE2": "Indiquez dans \"libellé\" le nom de votre produit. Dans \"code produit\", sélectionnez le code qui se rapproche le plus de votre produit dans la liste proposée.",
	                    "INFOBULLE3": "Indiquez le poids de chacun des matériaux composant votre emballage.",
	                    "INFOBULLE4": "Indiquez si votre emballage en papier-carton contient plus de 50 % de recyclé. Pour bénéficier de la décote de 10 % sur la contribution au poids, vous devez également joindre le formulaire mis à disposition par Adelphe, dûment complété par vos fournisseurs d’emballages.",
	                    "INFOBULLE5": "Les Bonus portent sur la réduction à la source, l'amélioration de la recyclabilité et la sensibilisation. Pour en savoir plus, téléchargez le Guide des Bonus 2017",
	                    "INFOBULLE6": "Indiquez si votre emballage fait partie de la liste des emballages perturbateurs ou s’il est dans les consignes de tri, mais sans filière de recyclage. Pour en savoir plus, consultez la liste des emballages perturbateurs.",
	                    "INFOBULLE7": "Les emballages ménagers sont mis sur le marché en vue de la consommation ou de l'utilisation du produit qu'il contient à des fins privées.",
	                    "INFOBULLE8": "INFOBULLE8...",
	                    "INFOBULLE9": "INFOBULLE9...",
	                    "ERREUR_FORMULAIRE": "Veuillez corriger les erreurs dans le formulaire.",
	                    "BTN_RETOUR": "Retour",
	                    "BTN_ENREGISTRER": "Enregistrer",
	                    "BTN_ANNULER": "Annuler",
	                    "BTN_NEW_UVC": "nouvelle uvc"
	                },
	                "Materiaux": {
	                    "acier": "Acier",
	                    "alum": "Aluminium",
	                    "pcNonBriq": "Papier - carton (autre que brique)",
	                    "briq": "Briques",
	                    "petClair": "Bouteilles et flacons PET clair",
	                    "flacon": "Autres bouteilles et flacons",
	                    "autrePlas": "Autres emballages plastique",
	                    "verre": "Verre",
	                    "autre": "Autres matériaux",
	                    "bois": "Bois",
	                    "textile": "Textile"
	                },
	                "formulaire_upload": {
	                    "TITLE": "VOUS SOUHAITEZ DÉPOSER VOTRE FICHIER DE DÉCLARATION",
	                    "TITLE_SELECT_DECLARATION_TYPE": "Sélectionnez votre type de déclaration :",
	                    "TITLE_SELECT_YEAR": "Choisissez votre année de déclaration :",
	                    "TITLE_SELECT_FILE": "Déposez votre fichier",
	                    "LABEL_BTN_VALIDATE": "Étape suivante"
	                },
	                "send_mails": {
	                    "TITLE": "DESTINATAIRES DE L'ACCUSÉ DE RÉCEPTION",
	                    "TITLE_ADD_MSG_1": "Une fois votre déclaration envoyée, vous recevrez l'accusé de réception par mail. Cet accusé de réception sera envoyé par défaut à toutes les personnes ayant accès à votre déclaration.",
	                    "TITLE_ADD_MSG_2": "",
	                    "TITLE_ADD_MSG_3": "Vous pouvez, si vous le souhaitez, envoyer l'accusé de réception à d'autres personnes.",
	                    "PLACEHOLDER_EMAIL": "Adresse e-mail du destinataire",
	                    "LABEL_ADD_RECIPIENTS": "Valider ce destinataire",
	                    "LABEL_ERROR": "Cette adresse e-mail n'est pas valide.",
	                    "LABEL_CERTIFIE": "Je certifie l'exactitude des données renseignées.",
	                    "LABEL_BTN_VALIDATE": "ENVOYER MA DÉCLARATION",
	                    "LABEL_BTN_NO_VALIDATE": "Retour"
	                },
	                "popin_validation": {
	                    "TITLE": "VOTRE DÉCLARATION EST BIEN FINALISÉE",
	                    "RAPPEL_ANNEE": "Pour rappel, le total de votre contribution est de : ",
	                    "RAPPEL_CONTRIB": "Pour rappel, le total de votre contribution est de : ",
	                    "TAXE": "HT",
	                    "LABEL_BTN_ATTESTATIONS": "Envoyer mes attestations",
	                    "LABEL_BTN_ACCUEIL": "Retour à mon Espace",
	                    "ERROR_MSG": "Erreur dans le traitement des e-mails."
	                },
	                "popin_suppression": {
	                    "TITLE": "SUPPRESSION D'UNE DECLARATION",
	                    "ERREUR": "Une erreur est survenue",
	                    "SUCCES": "Votre déclaration a bien été supprimée",
	                    "COMFIRM_REMOVE_DECLARATION": "Voulez-vous vraiment supprimer cette déclaration?"
	                },
	                "modal": {
	                    "LOADING_MODAL": "Chargement en cours"
	                },
	                "popin_confirmation": {
	                    "TITRE": "Votre déclaration est bien finalisée.",
	                    "LABEL1": "Pour rappel le total de votre contribution",
	                    "LABEL2": "s'élève à : ",
	                    "ERROR_MSG": "Erreur dans le traitement de la déclaration :",
	                    "HT": "HT"
	                },
	                "popin_corrective": {
	                    "TITRE": "Corriger une déclaration",
	                    "TITRE2": "Corriger ma déclaration",
	                    "LABEL1": "Vous souhaitez corriger la",
	                    "LABEL2": "Déclaration",
	                    "LABEL3": "Veuillez préciser le motif de votre correction",
	                    "LABEL4": "Vous aviez fait la déclaration",
	                    "QUESTION": "Pour quelle raison souhaitez-vous modifier votre déclaration ?",
	                    "QUESTION2": "Souhaitez vous modifier le type ou le mode de saisie de votre déclaration ? *",
	                    "REPONSE_OUI": "Oui",
	                    "REPONSE_NON": "Non",
	                    "CHAMPS_OBLIGATOIRE": "* Champs obligatoires",
	                    "LABEL_MOTIF": "Renseignez un motif de correction",
	                    "LABEL_COMMENTAIRE": "COMMENTAIRE (FACULTATIF)"
	                },
	                "popin_produits": {
	                    "TITRE": "Sélectionnez votre produit parmi la liste ci-dessous",
	                    "DESCRIPTION": "Nous vous proposons une liste de différents produits existants (codes produit et libellés), vous pouvez sélectionner le code qui correspond à votre produit et l'ajouter à votre déclaration : ",
	                    "SEARCH_LABEL": "Rechercher un code ou libellé produit",
	                    "CODE_PRODUIT": "Code produit",
	                    "LIBELLE_PRODUIT": "Libellé produit",
	                    "BTN_ADD": "Ajouter à la déclaration",
	                    "BTN_ANNULER": "Annuler",
	                    "MSG_CONFIRMATION": "Êtes-vous sur de vouloir supprimer cette uvc? ",
	                    "REPONSE_OUI": "Oui",
	                    "REPONSE_NON": "Non"
	                },
	                "web": {
	                    "DATE_AJOUT": "Date d'ajout",
	                    "ORDRE_ALPHABETIQUE": "Ordre alphabétique",
	                    "MONTANT_CONTRIB_CROISSANT": "Montant de contribution croissant",
	                    "MONNAIE_CONTRIB_DECROISSANT": "Montant de contribution décroissant"
	                }
	            },
	            "historique": {
	                "TITRE": "SUIVI DE VOS DÉCLARATIONS",
	                "DESCRIPTION": "Vous pouvez voir vos déclarations sur les 5 dernières années. Depuis ce suivi, vous pouvez remplir vos nouvelles déclarations, modifier des déclarations en cours et corriger des déclarations finalisées.",
	                "COL1": "Vos déclarations",
	                "COL2": "Type",
	                "COL3": "Mode de saisie",
	                "COL4": "Statut",
	                "COL5": "Montant",
	                "LABEL_DECLARATION": "Déclaration",
	                "LABEL_SAISIR": "Saisir",
	                "LABEL_CORRIGER": "Corriger",
	                "LABEL_TELECHARGER": "Télécharger",
	                "LABEL_COMPLETER": "Compléter",
	                "LABEL_MODIFIER": "Modifier",
	                "LIEN_VOIR_TOUT": "Voir tout",
	                "TITRE_WIDGET": "Vos déclarations",
	                "CORRECTIVE": "Correction",
	                "LIEN_A_VENIR": "A VENIR",
	                "LABEL_ANNULER": "Supprimer"
	            },
	            "choixdeclaration": {
	                "choix_type_declaration": {
	                    "TITLE": "BIENVENUE SUR VOTRE DÉCLARATION",
	                    "TITLE_DECLARATION_UVC": " ESTIMEZ LE NOMBRE D'UVC À DÉCLARER ",
	                    "LABEL_DECLARATION_UVC_SUR_MARCHE": "Pour savoir quelle déclaration vous convient le mieux, déplacez le curseur pour indiquer combien d'UVC vous avez mis en marché en #year#, puis cliquez sur Valider.",
	                    "LABEL_DECLARATION_CHOIX_DU_TYPE": " SÉLECTIONNEZ VOTRE TYPE DE DÉCLARATION ",
	                    "LABEL_MOINS_10000": "Moins de 10 000 UVC",
	                    "LABEL_ENTRE_10000_50000": "Entre 10 000 UVC et 500 000 UVC",
	                    "LABEL_SUP_500000": "Plus de 500 000 UVC",
	                    "LABEL_MOINS_180000": "Moins de 180 000 UVC",
	                    "LABEL_SUP_180000": "Plus de 180 000 UVC",
	                    "LABEL_DECLARATION_CONSEILLE": "D'après le nombre d'UVC que vous souhaitez déclarer, nous vous conseillons :",
	                    "LABEL_DECLARATION_AUTRE_CONSEILLE": "Vous pouvez aussi opter pour :",
	                    "LABEL_DECLARATION_VALIDER": "CONTINUER",
	                    "LABEL_DECLARATION_CONTINUER": "CONTINUER",
	                    "LABEL_BTN_NO_VALIDATE": "RETOUR"
	                },
	                "choix_mode_saisi": {
	                    "TITLE": "CHOISIR COMMENT DÉCLARER",
	                    "TITLE_DECLARATION_LIGNE": "JE FAIS MA DÉCLARATION EN LIGNE",
	                    "TITLE_DECLARATION_EXCEL": "JE FAIS MA DÉCLARATION SUR EXCEL",
	                    "TITLE_DECLARATION_FORFAIT": "DÉCLARATION AU FORFAIT",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_UN": "J'ai",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_DEUX": "peu",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_EN_LIGNE_TROIS": "de références et/ou types d'emballage différents à déclarer.",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_UN": "J'ai un ",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_DEUX": "nombre important",
	                    "LABEL_DECLARATION_FORFAIT_DECLARATION_SUR_EXCEL_TROIS": "de références et/ou types d'emballage différents à déclarer.",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "Vous avez mis en marché moins de 10 000 UVC en ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Votre contribution pour cette année s'éléve à :",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "80 € HT",
	                    "TITLE_CHOIX_OPTION_EXCEL": "VOS OPTIONS POUR LE FICHIER EXCEL",
	                    "LABEL_LANGUE": "LANGUE : ",
	                    "LABEL_LANGUE_FRANCAIS": "FRANCAIS",
	                    "LABEL_LANGUE_ANGLAIS": "ANGLAIS",
	                    "LABEL_ANNEE": "ANNÉE (versions)",
	                    "LABEL_ANNEE_EXCEL2007": "EXCEL 2007 et supérieur",
	                    "LABEL_ANNEE_EXCEL2003": "EXCEL 2003 et inférieur",
	                    "LABEL_DECLARATION_FORFAIT_MSG1": "Une fois le fichier téléchargé,",
	                    "LABEL_DECLARATION_FORFAIT_MSG2": "cliquez ici",
	                    "LABEL_DECLARATION_FORFAIT_MSG3": "pour retourner sur votre Espace."
	                },
	                "declarationforfait": {
	                    "TITLE_DECLARATION_FORFAIT": "DÉCLARATION AU FORFAIT ",
	                    "LABEL_DECLARATION_FORFAIT_INFO": "Vous avez mis en marché moins de 10 000 UVC en ",
	                    "LABEL_DECLARATION_FORFAIT_CONT": "Votre contribution pour cette année s'éléve à :",
	                    "LABEL_DECLARATION_FORFAIT_MONTANT": "80 € HT",
	                    "LABEL_DECLARATION_FORFAIT_BTN": "ÉTAPE SUIVANTE",
	                    "LABEL_DECLARATION_FORFAIT_SEND_MAILS": "Une fois votre déclaration envoyée, vous recevrez l'accusé de réception par e-mail.",
	                    "LABEL_DECLARATION_FORFAIT_PAIEMENT": ""
	                },

	                "societes_marques": {
	                    "titre": "ENTREPRISES ET MARQUES COUVERTES PAR LE CONTRAT",
	                    "societe_MSG1": "ENTREPRISES COUVERTES PAR LE CONTRAT",
	                    "societe_MSG2": "Autres entreprises couvertes par le contrat",
	                    "societe_PAYS": "PAYS",
	                    "PLACEHOLDER_SOCIETE": "Nom de l'entreprise ",
	                    "PLACEHOLDER_SIRET": "N° SIRET",
	                    "PLACEHOLDER_PAYS": "Pays",
	                    "PLACEHOLDER_MARQUE": "Nom de la marque ",
	                    "societe_AJOUTER_ENTREPRISE": "Ajouter une entreprise",

	                    "marque_MSG1": "MARQUES COUVERTES PAR LE CONTRAT",
	                    "marque_MSG2": "Autres marques couvertes par le contrat",
	                    "marque_AJOUTER_MARQUE": "Ajouter une marque",

	                    "MSG3": "Oui",
	                    "MSG4": "Non",
	                    "MSG5": "Votre déclaration a été enregistrée.",
	                    "MSG6": "OK",
	                    "BTN_ETAPE_RETOUR": "Retour",
	                    "BTN_ETAPE_SUIVANTE": "Étape Suivante",
	                    "BTN_ETAPE_SAUVEGARDER": "Sauvegarder",
	                    "LABEL_ERROR_SOCIETE": "Le nom de l'entreprise est obligatoire.",
	                    "LABEL_ERROR_PAYS": "Vous devez renseigner le pays.",
	                    "LABEL_ERROR_MARQUE": "Vous avez déjà renseigné cette marque.",
	                    "LABEL_ERROR_ENTREPRISE": "Vous avez déjà renseigné cette entreprise."
	                },
	                "widget_upload": {
	                    "titre": "Vous avez rempli votre déclaration via le fichier Excel ?",
	                    "DEPOT_FICHIER": "Déposez-la !",
	                    "MSG1": "Pour les déclarations détaillée et par UVC, pensez à convertir votre fichier comme indiqué dans le sommaire du fichier Excel. Pour les déclarations sectorielles, vous pouvez déposer votre fichier Excel directement. ",
	                    "MSG2": "Déposer mon fichier"
	                },
	                "simulateur": {
	                    "TITLE_SIMULATEUR": "BIENVENUE SUR LE SIMULATEUR DE DÉCLARATION",
	                    "TITLE_SIMULATEUR_CHOIX": "CHOISISSEZ LE TYPE DE DÉCLARATION",
	                    "LABEL_SIMULATEUR_TELECHARGER": "TÉLÉCHARGER LE FICHIER EXCEL"
	                }

	            },
	            "accueil_declaration": {
	                "TITRE": "Déclarer mes emballages",
	                "DESCRIPTION": "Cliquez pour déclarer rapidement vos emballages.",
	                "BOUTON": "Faire ma déclaration",
	                "TEXTE_PAS_DECLARATION": "Vous avez fait toutes vos déclarations."
	            },
	            "rpc": {
	                "RPC_INTITULE": "Rapport de procédures convenues",
	                "BUTTON_LANCER_MISSION": "Lancer une mission",
	                "BUTTON_MODIFIER": "Modifier",
	                "CODE_ACTIVATION": "Saisir le code d'activation",
	                "RPC_STATUT_1": "En cours",
	                "RPC_STATUT_2": "Reçu",
	                "RPC_STATUT_A_FAIRE": "A faire",
	                "RPC_STATUT_A_VENIR": "A venir",
	                "RPC_CONFIRMATION_1": "Un e-mail vient de vous être envoyé confirmant votre demande de mission RPC, ",
	                "RPC_CONFIRMATION_2": "l’année de déclaration concernée et le nom du professsionnel que vous avez missionné. ",
	                "RPC_CONFIRMATION_3": "Retrouvez votre demande dans ",
	                "RPC_CONFIRMATION_4": "Vos documents de déclaration.",
	                "RPC_ERREUR_1": "Vous avez déjà lancé une mission",
	                "RPC_ERREUR_2": "Erreur D'Authentification !",
	                "RPC_ERREUR_3": "Vous avez déjà lancé une mission RPC. Si vous souhaitez la modifier ",
	                "RPC_ERREUR_4": "cliquez ici",
	                "RPC_LAUNCH_1": "CHOISIR VOTRE PROFESSIONNEL",
	                "RPC_LAUNCH_2": "MODIFIER LA MISSION RPC",
	                "RPC_LAUNCH_3": "Nom",
	                "RPC_LAUNCH_4": "Adresse",
	                "RPC_LAUNCH_5": "E-mail",
	                "RPC_LAUNCH_6": "Afficher plus",
	                "RPC_CHANGE_1": "MODIFIER LA MISSION RPC",
	                "RPC_CHANGE_2": "Choisissez le professionnel qui réalisera la mission :",
	                "RPC_CHANGE_3": "Expert comptable",
	                "RPC_CHANGE_4": "Commissaire aux comptes",
	                "RPC_ERROR_OCCUR": "Une erreur est survenue. Merci de nous contacter au 0 810 00 86 90.",
	                "RPC_NO_RESULT_FOUND": "Aucun contact trouvé",
	                "RPC_SEARCH_BAR": "Nom de la personne (Renseigner au moins 2 caractères)",
	                "RPC_TEXT_TOP_BAR": "Identifier le professionnel qui réalisera la mission : ",
	                "RPC_MERCI": "Votre demande est confirmée",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER": "Vous ne pouvez plus modifier cette mission",
	                "RPC_ERREUR_IMPOSSIBLE_DE_MODIFIER_MSG": "Votre rapport de procédures convenues est en cours de transmission. Vous ne pouvez plus modifier cette mission.",
	                "RPC_ERREUR_SURVENUE": "Une erreur est survenue. Merci de nous contacter au 0 810 00 86 90."
	            },
	            "rpc_popins": {
	                "LANCER_MISSION_TITLE": "LANCER LA MISSION DE RAPPORT DE PROCÉDURES CONVENUES",
	                "LANCER_MISSION_TEXT_1": "Le Rapport de Procédures Convenues (RPC) est un outil de diagnostic et d’accompagnement qui vous permet d’évaluer votre processus déclaratif et la qualité de vos données.",
	                "LANCER_MISSION_TEXT_2": " Les RPC sont produits par votre expert-comptable ou votre commissaire aux comptes.",
	                "LANCER_MISSION_TEXT_3": "A compter de la déclaration 2016, le RPC est à réaliser tous les 3 ans.",
	                "LANCER_MISSION_CHOIX_EXPERT": "Choisissez le professionnel qui réalisera la mission :",
	                "EC": "Expert comptable",
	                "CAC": "Commissaire aux comptes",
	                "CODE_ACTIVATION_TITLE": "SAISIR VOTRE CODE DE VALIDATION DU RPC",
	                "CODE_ACTIVATION_TEXT": "Ce code vous a été transmis par votre Commissaire aux comptes par e-mail. Il vous permet de nous transmettre votre RPC en toute sécurité.",
	                "CODE_ACTIVATION_INVALID": "Le code d'activation est erroné",
	                "CODE_ACTIVATION_ERROR_TITLE": "Erreur !",
	                "CODE_ACTIVATION_ERROR_TEXT": "Une erreur est survenue. Merci de nous contacter au 0 810 00 86 90.",
	                "CODE_ACTIVATION_EXIPRED_TITLE": "Code expiré",
	                "CODE_ACTIVATION_EXIPRED_TEXT": "Le code d'activation a expiré. Veuillez contacter votre commissaire aux comptes pour qu'il vous en envoie un nouveau.",
	                "CODE_ACTIVATION_LOCKED_TITLE": "Votre demande est bloquée",
	                "CODE_ACTIVATION_LOCKED_TEXT": "Vous avez saisi 5 fois un code erroné, veuillez nous contacter au 0 810 00 86 90.",
	                "CODE_ACTIVATION_SUCCESS_TITLE": "Votre demande est confirmée",
	                "CODE_ACTIVATION_SUCCESS_TEXT": "Votre rapport de procédures convenues est désormais disponible dans vos documents."
	            },
	            "rpcFaqWidget": {
	                "RUN_RPC": "Lancer une mission RPC",
	                "FAQ_TITLE": "F.A.Q. DÉCLARATION",
	                "FAQ_TEXT_1": "VOS QUESTIONS /",
	                "FAQ_TEXT_2": "NOS RÉPONSES"
	            },
	            "controle_ecart": {
	                "title": "Votre contribution a nettement évolué depuis l’année dernière ",
	                "MSG1": "Notre mission est de vous accompagner au mieux dans votre déclaration afin de nous assurer de votre juste facturation.",
	                "MSG2": "Nous avons besoin, pour cela, d’en savoir plus sur votre activité en précisant le motif de cette évolution.",
	                "MSG3": "Veuillez renseigner un motif",
	                "MSG4": "Renseignez un motif",
	                "BTN_SUIVANT": "ETAPE SUIVANTE",
	                "BTN_RETOUR": "Retour",
	                "BTN_ENREGISTRER": "Sauvegarder",
	                "INFOBULLE": "Précisez le motif de votre évolution"
	            }
	        }
	    },
	    "produits": {
	        "010100": "Biscottes et pains grillés",
	        "010101": "Produits similaires grillés",
	        "010201": "Biscuits et snacks salés",
	        "010202": "Biscuits sucrés",
	        "010203": "Pains d’épices, pâtisseries, viennoiseries de conservation",
	        "010301": "Café, chicorée, malt en grain",
	        "010302": "Café, chicorée, malt moulus",
	        "010303": "Café, chicorée, malt solubles",
	        "010401": "Chocolat poudre",
	        "010402": "Petits déjeuners et boissons instantanées",
	        "010403": "Céréales prêtes à consommer ou à préparer",
	        "010404": "Pâtes à tartiner",
	        "010501": "Thés et infusions en feuilles",
	        "010502": "Thés et infusions solubles",
	        "010601": "Chocolat en tablettes",
	        "010602": "Confiseries de chocolat",
	        "010603": "Barres de chocolat",
	        "010701": "Bonbons et gélifiés",
	        "010702": "Dragées et pastilles",
	        "010703": "Pâtes de fruits, fruits confits, marrons glacés",
	        "010704": "Chewing-gum et bubble gum",
	        "010705": "Sucettes et sucres d’orge",
	        "010706": "Autres confiseries",
	        "010801": "Desserts prêts à être consommés",
	        "010802": "Produits pour la pâtisserie",
	        "010803": "Préparations pour entremets et desserts",
	        "010901": "Lait concentré",
	        "010902": "Lait en poudre",
	        "011001": "Farines",
	        "011002": "Purées en flocons",
	        "011003": "Semoules et assimilés",
	        "011100": "Pâtes alimentaires",
	        "011201": "Fruits secs",
	        "011202": "Légumes secs, tapioca, autres amidons et fécules",
	        "011203": "Riz",
	        "011204": "Fruits et légumes lyophilisés et déshydratés",
	        "011205": "Graines salées",
	        "011301": "Bouillons et aides culinaires",
	        "011302": "Potages déshydratés à préparer",
	        "011303": "Potages instantanés",
	        "011304": "Potages liquides",
	        "011401": "Condiments",
	        "011402": "Mayonnaises",
	        "011403": "Moutardes",
	        "011404": "Sauces déshydratées",
	        "011405": "Sauces prêtes à l’emploi",
	        "011406": "Sauces tomate et concentrés de tomates",
	        "011407": "Vinaigrettes",
	        "011500": "Epices et poivres",
	        "011601": "Sel fin",
	        "011602": "Gros sel",
	        "011700": "Huiles alimentaires",
	        "011800": "Vinaigres",
	        "011901": "Sucre en morceaux",
	        "011902": "Sucre semoule",
	        "011903": "Sucre cristallisé",
	        "011904": "Sucres divers (sucre candi, sucre roux)",
	        "012001": "Compotes",
	        "012002": "Confitures",
	        "012003": "Crèmes de marrons",
	        "012004": "Gelées",
	        "012005": "Marmelades",
	        "012006": "Miel",
	        "012007": "Fruits au sirop",
	        "012100": "Conserves de légumes",
	        "012200": "Conserves de poissons",
	        "012300": "Conserves de viandes, charcuterie et salaisons",
	        "012401": "Chips",
	        "012402": "Cassoulets",
	        "012403": "Choucroutes garnies",
	        "012404": "Escargots",
	        "012405": "Quenelles",
	        "012406": "Plats cuisinés à préparer",
	        "012407": "Plats cuisinés prêts à être consommés",
	        "012501": "Laits infantiles",
	        "012502": "Aliments diététiques pour enfant",
	        "012600": "Produits diététiques et de régime",
	        "012601": "Produits de nutrition clinique",
	        "012801": "Aliments humides pour chiens et chats",
	        "012802": "Aliments secs pour chiens et chats",
	        "012803": "Conserves pour animaux",
	        "012804": "Autres nourritures pour autres animaux",
	        "023001": "Limonades, limes",
	        "023002": "Sodas, colas et tonics",
	        "023003": "Jus de fruits et concentrés",
	        "023004": "Nectars",
	        "023005": "Boissons aux fruits",
	        "023006": "Sirops et sucre de canne",
	        "023007": "Extraits pour boissons et sels effervescents",
	        "023101": "Bières",
	        "023102": "Cidres",
	        "023103": "Panachés",
	        "023200": "Eaux",
	        "023400": "Vins",
	        "023500": "Champagnes et mousseux",
	        "023600": "Apéritifs",
	        "023700": "Alcools et eaux de vie",
	        "023900": "Film de regroupement des boissons",
	        "034001": "Pains",
	        "034002": "Articles de boulangerie",
	        "034003": "Pâtisseries fraîches et entremets prêts à être consommés",
	        "034101": "Glaces familiales",
	        "034102": "Glaces individuelles",
	        "034103": "Glaces en vrac",
	        "034104": "Surgelés entrées – charcuterie",
	        "034105": "Surgelés légumes",
	        "034106": "Surgelés abats – viandes – volailles",
	        "034107": "Surgelés poissons – mollusques – crustacés",
	        "034108": "Surgelés plats cuisinés – sauces – potages",
	        "034109": "Surgelés pâtisseries – viennoiseries – pâtes surgelées",
	        "034110": "Surgelés fruits et jus de fruits",
	        "034111": "Surgelés produits laitiers",
	        "034112": "Surgelés aliments pour animaux",
	        "034201": "Laits",
	        "034202": "Yaourts et assimilés",
	        "034203": "Crèmes et fromages blancs",
	        "034204": "Beurres",
	        "034205": "Margarines ou graisses végétales",
	        "034206": "Œufs",
	        "034207": "Desserts lactés et entremets",
	        "034301": "Pâtes molles à croûte fleurie ou lavée",
	        "034302": "Pâtes pressées, cuites ou non cuites",
	        "034303": "Fromages de chèvre et de brebis",
	        "034304": "Pâtes persillées",
	        "034305": "Fromages fondus",
	        "034306": "Fromages frais et assimilés",
	        "034400": "Fruits frais",
	        "034500": "Légumes frais",
	        "034510": "Fleurs et plantes",
	        "034601": "Volailles et gibiers",
	        "034700": "Produits traiteur",
	        "034701": "Hors d’œuvres",
	        "034702": "Produits en pâte",
	        "034703": "Plats cuisinés et viandes à réchauffer",
	        "034704": "Sandwichs",
	        "034800": "Boucherie et triperie",
	        "034900": "Poissons – crustacés – coquillages",
	        "046401": "Shampooings",
	        "046402": "Après shampooings, baumes embellisseurs",
	        "046403": "Lotions et vitaliseurs",
	        "046404": "Fixateurs et brillantines",
	        "046405": "Coloration capillaire",
	        "046406": "Mise en plis et permanente",
	        "046407": "Laques",
	        "046408": "Accessoires capillaires",
	        "046501": "Savons de toilette solides et liquides",
	        "046502": "Produits de bains et douches",
	        "046503": "Soins des dents",
	        "046504": "Rasoirs, lames, produits de rasage",
	        "046505": "Déodorants",
	        "046506": "Eaux de toilette et eaux de cologne",
	        "046507": "Parfums et eaux de parfums",
	        "046508": "Produits pour le corps",
	        "046509": "Beauté et soins des ongles",
	        "046510": "Produits solaires",
	        "046601": "Laits de toilette",
	        "046602": "Lotions et toniques",
	        "046603": "Crèmes de beauté",
	        "046604": "Nettoyants et crèmes gommantes",
	        "046605": "Soins spécifiques du visage",
	        "046606": "Soins des lèvres",
	        "046607": "Démaquillants",
	        "046608": "Atomiseurs d’eau",
	        "046609": "Produits de maquillage",
	        "046621": "Articles de puériculture",
	        "046701": "Cotons",
	        "046702": "Mouchoirs",
	        "046703": "Papier d’entretien et hygiénique",
	        "046704": "Couches bébés",
	        "046705": "Hygiène féminine",
	        "046706": "Accessoires de toilette et de beauté",
	        "046712": "Soins bucco-dentaires",
	        "046713": "Soins des pieds",
	        "046714": "Hygiène intime",
	        "046715": "Produits de protection",
	        "046716": "Compléments nutritionnels",
	        "046717": "Produits de soins pour bébés",
	        "046718": "Accessoires de parapharmacie",
	        "046719": "Accessoires médicaux",
	        "046720": "Optique",
	        "046721": "Optique non médicale",
	        "046722": "Lunetterie",
	        "046723": "Instruments de mesure (thermomètre, baromètre…)",
	        "055001": "Savons",
	        "055002": "Poudres et liquides de lavage du linge",
	        "055003": "Produits pour lavages délicats, adoucissants et assouplissants",
	        "055004": "Eau de Javel et désinfectants pour linge",
	        "055005": "Détachants, apprêts, teintures",
	        "055006": "Produits de lessivage",
	        "055007": "Produits à vaisselle",
	        "055008": "Accessoires de lavage",
	        "055101": "Entretien des cuirs et chaussures",
	        "055102": "Entretien des bois et des revêtements de sols",
	        "055103": "Entretien des métaux et des vitres",
	        "055104": "Entretien des fours et fourneaux",
	        "055105": "Produits à récurer, détartrer, déboucher, nettoyer et désinfecter",
	        "055106": "Désodorisants et insecticides",
	        "055107": "Articles de cave et ingrédients divers",
	        "055108": "Brosserie, balais",
	        "055109": "Eponges de ménage, torchons, assimilés",
	        "055401": "Batterie de cuisine",
	        "055402": "Ustensiles de cuisine",
	        "055403": "Coutellerie et couverts",
	        "055404": "Accessoires de table",
	        "055405": "Récipients, bassines",
	        "055406": "Accessoires de ménage",
	        "055407": "Pellicules d’emballage et de conditionnement",
	        "055408": "Matériel de cave",
	        "055501": "Appareils de chauffage",
	        "055502": "Réfrigérateurs et congélateurs domestiques",
	        "055503": "Lave-vaisselle, lave-linge, sèche-linge",
	        "055504": "Hottes aspirantes et ventilateurs",
	        "055505": "Plaques de cuisson électriques et à gaz",
	        "055506": "Fours, fours à micro-ondes",
	        "055507": "Appareils électriques pour l’entretien ménager",
	        "055508": "Robots et ustensiles de cuisine électriques",
	        "055609": "Petits appareils électrothermiques ménagers",
	        "055610": "Appareils et ustensiles électriques pour la toilette-beauté",
	        "055611": "Appareils électriques pour la couture et le tricot",
	        "055701": "Vaisselle",
	        "055702": "Vaisselle orfévrée",
	        "055703": "Verrerie",
	        "055704": "Verrerie cristal",
	        "055705": "Coutellerie",
	        "055801": "Végétaux",
	        "055802": "Produits pour jardins",
	        "055803": "Outillage agricole et horticole",
	        "055804": "Mobilier de jardin",
	        "055805": "Bacs et contenants",
	        "055806": "Équipements de protection",
	        "055901": "Outillage",
	        "055902": "Quincaillerie générale et d’ameublement",
	        "055903": "Plomberie – robinetterie – sanitaire",
	        "055904": "Equipement électrique",
	        "055905": "Bois panneaux et menuiserie",
	        "055906": "Gros œuvre, équipement du bâtiment et matériaux de construction",
	        "055907": "Peintures et vernis",
	        "055908": "Droguerie et accessoires de peinture",
	        "055909": "Colles et adhésifs",
	        "055910": "Revêtements muraux",
	        "055911": "Revêtements de sols",
	        "055912": "Carrelages",
	        "055913": "Serrures, ferrures",
	        "055914": "Visserie, boulonnerie",
	        "056001": "Mobilier de cuisine",
	        "056002": "Mobilier de salle à manger",
	        "056003": "Mobilier de salle de bains et WC",
	        "056004": "Mobilier de salon, living",
	        "056005": "Mobilier de chambre",
	        "056006": "Mobilier d’appoint – accessoires",
	        "056007": "Mobilier de bureau",
	        "056008": "Vannerie",
	        "056101": "Appareils d’éclairage",
	        "056102": "Piles",
	        "056103": "Lampes électriques",
	        "056201": "Tissus décoratifs et accessoires",
	        "056202": "Literie",
	        "056203": "Objets et accessoires de décoration",
	        "056204": "Linge de table, cuisine, toilette, lit",
	        "066800": "Papiers",
	        "066801": "Carterie",
	        "066802": "Supports d’écriture",
	        "066803": "Articles d’écriture et de bureau",
	        "066804": "Accessoires de dessin",
	        "066805": "Accessoires de classement",
	        "066806": "Accessoires scolaires, de bureaux et divers",
	        "066807": "Consommables bureaux",
	        "066808": "Consommables informatiques",
	        "066809": "Bureautique",
	        "066810": "Ordinateurs – informatique",
	        "066901": "Livres",
	        "066902": "Dictionnaires – encyclopédies",
	        "066903": "Journaux – périodiques revues spécialisées",
	        "067001": "Bijouterie, joaillerie",
	        "067002": "Orfèvrerie (autre que de table)",
	        "067003": "Horlogerie",
	        "067004": "Souvenirs, cadeaux, bimbeloterie",
	        "067005": "Articles pour fumeurs",
	        "067101": "Maroquinerie",
	        "067102": "Sacs de voyage",
	        "067103": "Sacs de sport",
	        "067104": "Valises, malles et mallettes",
	        "067201": "Radio et accessoires",
	        "067202": "Télévision et accessoires",
	        "067203": "Chaîne Hi Fi, lecteurs audio et vidéo",
	        "067204": "Photo, cinéma et accessoires",
	        "067205": "Disques, bandes magnétiques, cassettes",
	        "067206": "Films, pellicules",
	        "067207": "Instruments de musique",
	        "067208": "Téléphone et communication à distance",
	        "067301": "Jouets",
	        "067302": "Jeux",
	        "067400": "Accessoires pour animaux",
	        "067501": "Mobilier de camping et de plage",
	        "067502": "Articles et accessoires de camping et de plage",
	        "067503": "Remorques",
	        "067504": "Cycles, cyclomoteurs, motos",
	        "067505": "Équipements des cycles, cyclomoteurs, motos",
	        "067506": "Produits d’entretien pour cycles, cyclomoteurs, motos",
	        "067507": "Pièces de rechange",
	        "067601": "Lubrifiants",
	        "067602": "Produits d’entretien auto",
	        "067603": "Articles d’électricité (batterie, phare)",
	        "067604": "Pièces détachées techniques",
	        "067605": "Articles d’équipement intérieur",
	        "067606": "Articles d’équipement extérieur",
	        "067607": "Outillage auto",
	        "067608": "Pneumatiques",
	        "067609": "Auto-son",
	        "067701": "Articles de chasse",
	        "067702": "Articles de pêche",
	        "067703": "Articles de montagne",
	        "067704": "Articles de nautisme",
	        "067705": "Articles de culture physique",
	        "067706": "Articles d’autres sports",
	        "067800": "Service minute (clés, cordonnerie…)",
	        "068101": "Fournitures de couture",
	        "068102": "Fournitures de lingerie et passementerie",
	        "068103": "Patrons",
	        "068104": "Accessoires de couture",
	        "078201": "Bas",
	        "078202": "Collants",
	        "078203": "Protège-bas",
	        "078301": "Chaussures",
	        "078302": "Semelles – lacets",
	        "078501": "Chapeaux coiffures",
	        "078502": "Parapluies",
	        "078503": "Gants",
	        "078504": "Cravates",
	        "078505": "Lunettes",
	        "078506": "Survêtements et vêtements de sport",
	        "078507": "Vêtements de travail",
	        "078508": "Ceintures et bretelles",
	        "078509": "Écharpes, carrés, foulards",
	        "078510": "Mouchoirs",
	        "078511": "Pyjamas et chemises de nuit",
	        "078512": "Chemises, chemisiers, corsages",
	        "078513": "Sous-vêtements",
	        "078514": "Pantalons",
	        "078515": "Jupes, robes",
	        "078516": "Vêtements d’intérieur, tabliers",
	        "078517": "Costumes, tailleurs, ensembles",
	        "078518": "Vestes, blousons, anoraks, parkas",
	        "078519": "Manteaux, pardessus",
	        "078520": "Imperméables",
	        "078521": "Chaussettes, socquettes",
	        "078522": "Tee-shirts, polos",
	        "078523": "Pulls, cardigans, sweat-shirts",
	        "078524": "Bonneterie baby",
	        "078525": "Accessoires d’habillement baby",
	        "078526": "Accessoires d’hygiène baby",
	        "079901": "Tissus au mètre",
	        "085201": "Cigarettes",
	        "085202": "Cigares, cigarillos",
	        "085203": "Tabac pour pipes et à rouler",
	        "085204": "Tabac à mâcher et à priser",
	        "085301": "Allumettes et allume-feu",
	        "085302": "Briquets",
	        "085303": "Combustibles solides",
	        "085304": "Combustibles gazeux",
	        "085305": "Combustibles liquides domestiques",
	        "096731": "Allergologie",
	        "096732": "Anesthésiologie",
	        "096733": "Cancérologie",
	        "096734": "Cardio-angéiologie",
	        "096735": "Dermatologie",
	        "096736": "Diagnostic",
	        "096737": "Diététique pharmaceutique",
	        "096738": "Endocrinologie et hormones",
	        "096739": "Gastro-entérologie",
	        "096740": "Gynécologie",
	        "096741": "Hématologie",
	        "096742": "Hépatologie",
	        "096743": "Infections",
	        "096744": "Métabolisme, nutrition et vitamines",
	        "096745": "Neurologie et psychisme",
	        "096746": "Ophtalmologie",
	        "096747": "Otologie",
	        "096748": "Parasitologie",
	        "096749": "Pneumologie",
	        "096750": "Rhinologie",
	        "096751": "Rhumatologie et appareil locomoteur",
	        "096752": "Stomatologie",
	        "096753": "Toxicologie",
	        "096754": "Urologie et néphrologie",
	        "096755": "Acupuncture",
	        "096756": "Phytothérapie",
	        "096757": "Homéopathie",
	        "096758": "Divers pharmacie (antalgiques, etc.)",
	        "10100": "Biscottes et pains grillés",
	        "120000": "Économat "
	    },
	    "produits_spec": {
	        "130000": "Déclarer des emballages d'expédition",
	        "140000": "Déclarer des échantillons",
	        "150000": "Déclarer des bobines alimentaires",
	        "160000": "Déclarer des bobines non alimentaires"
	    },
	    "bonus_reduction": {
	        "0": "Action de réduction / recyclabilité",
	        "1": "Recharge",
	        "4": "Réduction de poids et volume",
	        "5": "Suppression d’une unité",
	        "6": "Recyclabilité",
	        "61": "Recharge + catalogue",
	        "64": "Réduction de poids et volume + catalogue",
	        "65": "Suppression d’une unité + catalogue",
	        "66": "Recyclabilité + catalogue"
	    },
	    "bonus_sensibilisation": {
	        "0": "Action de sensibilisation",
	        "1": "Notice",
	        "2": "On-Pack",
	        "3": "In-Pack",
	        "4": "Off-Pack",
	        "5": "QR Code",
	        "6": "On-Pack/In-Pack/Notice + Off-Pack",
	        "7": "QR Code + Off-Pack"
	    },
	    "pays": {
	        "AF": "Afghanistan",
	        "ZA": "Afrique du Sud",
	        "AL": "Albanie",
	        "DZ": "Algérie",
	        "DE": "Allemagne",
	        "AD": "Andorre",
	        "AO": "Angola",
	        "AI": "Anguilla",
	        "AQ": "Antarctique",
	        "AG": "Antigua/Barbuda",
	        "AN": "Antilles néerl.",
	        "STL": "apatride",
	        "SA": "Arabie saoudite",
	        "AR": "Argentine",
	        "AM": "Arménie",
	        "AW": "Aruba",
	        "AU": "Australie",
	        "AT": "Autriche",
	        "AZ": "Azerbaïdjan",
	        "BS": "Bahamas",
	        "BH": "Bahreïn",
	        "BD": "Bangladesh",
	        "BB": "Barbades",
	        "BE": "Belgique",
	        "BZ": "Belize",
	        "BJ": "Bénin",
	        "BM": "Bermudes",
	        "BT": "Bhoutan",
	        "BY": "Biélorussie",
	        "BO": "Bolivie",
	        "BA": "Bosnie-Herz.",
	        "BW": "Botswana",
	        "BR": "Brésil",
	        "BN": "Brunei Darussal",
	        "BG": "Bulgarie",
	        "BF": "Burkina Faso",
	        "BI": "Burundi",
	        "KH": "Cambodge",
	        "CM": "Cameroun",
	        "CA": "Canada",
	        "CV": "Cap-Vert",
	        "CL": "Chili",
	        "CN": "Chine",
	        "CX": "Christmas I.",
	        "CY": "Chypre",
	        "CO": "Colombie",
	        "KM": "Comores",
	        "CG": "Congo",
	        "KP": "Corée du Nord",
	        "KR": "Corée du Sud",
	        "CR": "Costa Rica",
	        "CI": "Côte d'Ivoire",
	        "HR": "Croatie",
	        "CU": "Cuba",
	        "DK": "Danemark",
	        "DJ": "Djibouti",
	        "EG": "Égypte",
	        "SV": "El Salvador",
	        "AE": "Emir.arab.unis",
	        "EC": "Équateur",
	        "ER": "Érythrée",
	        "ES": "Espagne",
	        "EE": "Estonie",
	        "ET": "Éthiopie",
	        "RU": "Féd. russe",
	        "FO": "Féroé",
	        "FJ": "Fidji",
	        "FI": "Finlande",
	        "FR": "France",
	        "GA": "Gabon",
	        "GM": "Gambie",
	        "GE": "Géorgie",
	        "GH": "Ghana",
	        "GI": "Gibraltar",
	        "GB": "Grande Bretagne",
	        "GR": "Grèce",
	        "GD": "Grenade",
	        "GL": "Groenland",
	        "GP": "Guadeloupe",
	        "GU": "Guam",
	        "GT": "Guatémala",
	        "GF": "Guinée",
	        "GN": "Guinée",
	        "GQ": "Guinée Equator.",
	        "GW": "Guinée-Bissao",
	        "GY": "Guyane",
	        "HT": "Haïti",
	        "HN": "Honduras",
	        "HK": "Hong Kong",
	        "HU": "Hongrie",
	        "VI": "I. vierges amér",
	        "VG": "I. vierges brit",
	        "HM": "Il.Heard/McDon.",
	        "MU": "Ile Maurice",
	        "MP": "Ile N.Mariana",
	        "BV": "Iles Bouvet",
	        "KY": "Iles caïmans",
	        "CC": "Iles Cocos",
	        "CK": "Iles Cook",
	        "MH": "Iles Marshall",
	        "UM": "Iles Minor Outl",
	        "NU": "Iles Niue",
	        "NF": "Iles Norfolk",
	        "PN": "Iles Pitcairn",
	        "TK": "Iles Tokelau",
	        "IO": "Ind.occ.ter.br.",
	        "IN": "Inde",
	        "ID": "Indonésie",
	        "IR": "Iran",
	        "IQ": "Iraq",
	        "IE": "Irlande",
	        "IS": "Islande",
	        "IL": "Israël",
	        "IT": "Italie",
	        "JM": "Jamaïque",
	        "JP": "Japon",
	        "JO": "Jordanie",
	        "KZ": "Kazakhstan",
	        "KE": "Kenya",
	        "KG": "Kirghiztan",
	        "KI": "Kiribati",
	        "KW": "Koweït",
	        "DM": "La Dominique",
	        "LA": "Laos",
	        "LS": "Lesotho",
	        "LV": "Lettonie",
	        "LB": "Liban",
	        "LR": "Liberia",
	        "LY": "Libye",
	        "LI": "Liechtenstein",
	        "LT": "Lituanie",
	        "LU": "Luxembourg",
	        "MO": "Macao",
	        "MK": "Macédoine",
	        "MG": "Madagascar",
	        "MY": "Malaisie",
	        "MW": "Malawi",
	        "MV": "Maldives",
	        "ML": "Mali",
	        "FK": "Malouines",
	        "MT": "Malte",
	        "MA": "Maroc",
	        "MQ": "Martinique",
	        "MR": "Mauritanie",
	        "YT": "Mayotte",
	        "MX": "Mexique",
	        "FM": "Micronésie",
	        "MD": "Moldavie",
	        "MC": "Monaco",
	        "MN": "Mongolie",
	        "MS": "Montserrat",
	        "MZ": "Mozambique",
	        "MM": "Myanmar",
	        "NZ": "N. Zélande",
	        "NC": "N.Calédonie",
	        "NA": "Namibie",
	        "NR": "Nauru",
	        "NP": "Népal",
	        "NI": "Nicaragua",
	        "NE": "Niger",
	        "NG": "Nigéria",
	        "NO": "Norvège",
	        "OM": "Oman",
	        "UG": "Ouganda",
	        "UZ": "Ouzbékistan",
	        "PK": "Pakistan",
	        "PW": "Palauan",
	        "PA": "Panama",
	        "PG": "Pap.Nouv.Guinée",
	        "PY": "Paraguay",
	        "NL": "Pays-Bas",
	        "PE": "Pérou",
	        "PH": "Philippines",
	        "PL": "Pologne",
	        "PF": "Polynésie fran.",
	        "PR": "Porto Rico",
	        "PT": "Portugal",
	        "QA": "Qatar",
	        "CF": "Rép. centrafr.",
	        "CZ": "Rép. tchèque",
	        "DO": "Rép.Dominicaine",
	        "RE": "Réunion",
	        "RO": "Roumanie",
	        "RW": "Rwanda",
	        "ST": "S.Tomé-et-princ",
	        "SM": "Saint-Marin",
	        "SH": "Sainte-Hélène",
	        "SB": "Salomon",
	        "WS": "Samoa occident.",
	        "AS": "Samoa, améric.",
	        "SN": "Sénégal",
	        "SC": "Seychelles",
	        "SL": "Sierra Leone",
	        "SG": "Singapour",
	        "SK": "Slovaquie",
	        "SI": "Slovénie",
	        "SO": "Somalie",
	        "SD": "Soudan",
	        "LK": "Sri Lanka",
	        "LC": "St. Lucie",
	        "VC": "St. Vincent",
	        "KN": "St.Chr.,Nevis",
	        "PM": "St.Pierre,Miqu.",
	        "SE": "Suède",
	        "CH": "Suisse",
	        "SR": "Suriname",
	        "SJ": "Svalbard",
	        "SZ": "Swaziland",
	        "SY": "Syrie",
	        "TJ": "Tadjikistan",
	        "TW": "Taiwan",
	        "TZ": "Tanzanie",
	        "TD": "Tchad",
	        "TH": "Thaïland",
	        "TP": "Timor orient.",
	        "TG": "Togo",
	        "TO": "Tonga",
	        "TT": "Trinidad,Tobago",
	        "TN": "Tunisie",
	        "TM": "Turkménistan",
	        "TC": "Turks et Caicos",
	        "TR": "Turquie",
	        "TV": "Tuvalu",
	        "UA": "Ukraine",
	        "UY": "Uruguay",
	        "US": "USA",
	        "VU": "Vanuatu",
	        "VA": "Vatican",
	        "VE": "Vénézuéla",
	        "VN": "Viêt Nam",
	        "WF": "Wallis,Futuna",
	        "YE": "Yémen",
	        "YU": "Yougoslavie",
	        "ZR": "Zaïre",
	        "ZM": "Zambie",
	        "ZW": "Zimbabwe"
	    },
	    "motifs_correctives": {
	        "AUTRE": "Autres",
	        "BONUS_MALUS": "Bonus / Malus",
	        "ERREUR_SAISIE": "Erreur saisie",
	        "MATERIAU": "Matériau",
	        "POIDS": "Poids",
	        "QUANTITE": "Quantité",
	        "RECYCLE": "Recyclé"
	    },
	    "motifs_controle_ecart": {
	        "AUTRES": "Autres",
	        "EVOL_POIDS_EMB": "Evolution poids/emballages",
	        "EVOL": "Forte évolution du CA",
	        "FUSION": "Fusion/Absorption",
	        "PERTE_MARCHE": "Perte de marché",
	        "PERIMETRE": "Périmètre contributif"
	    }
	};

	module.exports = messagesFr;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	var paysEn = [{
		"code": "AF",
		"label": "Afghanistan"
	}, {
		"code": "ZA",
		"label": "South Africa"
	}, {
		"code": "AL",
		"label": "Albania"
	}, {
		"code": "DZ",
		"label": "Algeria"
	}, {
		"code": "DE",
		"label": "Germany"
	}, {
		"code": "AD",
		"label": "Andorra"
	}, {
		"code": "AO",
		"label": "Angola"
	}, {
		"code": "AI",
		"label": "Anguilla"
	}, {
		"code": "AQ",
		"label": "Antarctica"
	}, {
		"code": "AG",
		"label": "Antigua/Barbados"
	}, {
		"code": "AN",
		"label": "Dutch Caribbean"
	}, {
		"code": "STL",
		"label": "Stateless"
	}, {
		"code": "SA",
		"label": "Saudi Arabia"
	}, {
		"code": "AR",
		"label": "Argentina"
	}, {
		"code": "AM",
		"label": "Armenia"
	}, {
		"code": "AW",
		"label": "Aruba"
	}, {
		"code": "AU",
		"label": "Australia"
	}, {
		"code": "AT",
		"label": "Austria"
	}, {
		"code": "AZ",
		"label": "Azerbaijan"
	}, {
		"code": "BS",
		"label": "Bahamas"
	}, {
		"code": "BH",
		"label": "Bahrain"
	}, {
		"code": "BD",
		"label": "Bangladesh"
	}, {
		"code": "BB",
		"label": "Barbados"
	}, {
		"code": "BE",
		"label": "Belgium"
	}, {
		"code": "BZ",
		"label": "Belize"
	}, {
		"code": "BJ",
		"label": "Benin"
	}, {
		"code": "BM",
		"label": "Bermuda"
	}, {
		"code": "BT",
		"label": "Bhutan"
	}, {
		"code": "BY",
		"label": "Belarus"
	}, {
		"code": "BO",
		"label": "Bolivia"
	}, {
		"code": "BA",
		"label": "Bosnia-Herz."
	}, {
		"code": "BW",
		"label": "Botswana"
	}, {
		"code": "BR",
		"label": "Brazil"
	}, {
		"code": "BN",
		"label": "Brunei Darussal"
	}, {
		"code": "BG",
		"label": "Bulgaria"
	}, {
		"code": "BF",
		"label": "Burkina Faso"
	}, {
		"code": "BI",
		"label": "Burundi"
	}, {
		"code": "KH",
		"label": "Cambodia"
	}, {
		"code": "CM",
		"label": "Cameroon"
	}, {
		"code": "CA",
		"label": "Canada"
	}, {
		"code": "CV",
		"label": "Capo Verde"
	}, {
		"code": "CL",
		"label": "Chile"
	}, {
		"code": "CN",
		"label": "China"
	}, {
		"code": "CX",
		"label": "Christmas I."
	}, {
		"code": "CY",
		"label": "Cyprus"
	}, {
		"code": "CO",
		"label": "Colombia"
	}, {
		"code": "KM",
		"label": "Comorrean Islands"
	}, {
		"code": "CG",
		"label": "Congo"
	}, {
		"code": "KP",
		"label": "North Korea"
	}, {
		"code": "KR",
		"label": "South Korea"
	}, {
		"code": "CR",
		"label": "Costa Rica"
	}, {
		"code": "CI",
		"label": "Ivory Coast"
	}, {
		"code": "HR",
		"label": "Croatia"
	}, {
		"code": "CU",
		"label": "Cuba"
	}, {
		"code": "DK",
		"label": "Denmark"
	}, {
		"code": "DJ",
		"label": "Djibouti"
	}, {
		"code": "EG",
		"label": "Egypt"
	}, {
		"code": "SV",
		"label": "El Salvador"
	}, {
		"code": "AE",
		"label": "United Arab Emirates"
	}, {
		"code": "EC",
		"label": "Ecuador"
	}, {
		"code": "ER",
		"label": "Eritrea"
	}, {
		"code": "ES",
		"label": "Spain"
	}, {
		"code": "EE",
		"label": "Estonia"
	}, {
		"code": "ET",
		"label": "Ethiopia"
	}, {
		"code": "RU",
		"label": "Russian Federation"
	}, {
		"code": "FO",
		"label": "Faroe Islands"
	}, {
		"code": "FJ",
		"label": "Fiji"
	}, {
		"code": "FI",
		"label": "Finland"
	}, {
		"code": "FR",
		"label": "France"
	}, {
		"code": "GA",
		"label": "Gabon"
	}, {
		"code": "GM",
		"label": "Gambia"
	}, {
		"code": "GE",
		"label": "Georgia"
	}, {
		"code": "GH",
		"label": "Ghana"
	}, {
		"code": "GI",
		"label": "Gibraltar"
	}, {
		"code": "GB",
		"label": "Great Britain"
	}, {
		"code": "GR",
		"label": "Greece"
	}, {
		"code": "GD",
		"label": "Grenada"
	}, {
		"code": "GL",
		"label": "Greenland"
	}, {
		"code": "GP",
		"label": "Guadeloupe"
	}, {
		"code": "GU",
		"label": "Guam"
	}, {
		"code": "GT",
		"label": "Guatemala"
	}, {
		"code": "GF",
		"label": "Guinea"
	}, {
		"code": "GQ",
		"label": "Equatorial Guinea"
	}, {
		"code": "GW",
		"label": "Guinea-Bissau"
	}, {
		"code": "GY",
		"label": "Guyana"
	}, {
		"code": "HT",
		"label": "Haiti"
	}, {
		"code": "HN",
		"label": "Honduras"
	}, {
		"code": "HK",
		"label": "Hong Kong"
	}, {
		"code": "HU",
		"label": "Hungary "
	}, {
		"code": "VI",
		"label": "US Virgin Islands"
	}, {
		"code": "VG",
		"label": "British Virgin Islands"
	}, {
		"code": "HM",
		"label": "Heard/McDon. Islands"
	}, {
		"code": "MU",
		"label": "Mauritius"
	}, {
		"code": "MP",
		"label": "N.Mariana Islands"
	}, {
		"code": "BV",
		"label": "Bouvet Islands"
	}, {
		"code": "KY",
		"label": "Cayman Islands"
	}, {
		"code": "CC",
		"label": "Coco Islands"
	}, {
		"code": "CK",
		"label": "Cook Islands"
	}, {
		"code": "MH",
		"label": "Marshall Islands"
	}, {
		"code": "UM",
		"label": "Minor Outl Islands"
	}, {
		"code": "NU",
		"label": "Niue Islands"
	}, {
		"code": "NF",
		"label": "Norfolk Islands"
	}, {
		"code": "PN",
		"label": "Pitcairn Islands"
	}, {
		"code": "TK",
		"label": "Tokelau Islands"
	}, {
		"code": "IO",
		"label": "BIOT"
	}, {
		"code": "IN",
		"label": "India"
	}, {
		"code": "ID",
		"label": "Indonesia"
	}, {
		"code": "IR",
		"label": "Iran"
	}, {
		"code": "IQ",
		"label": "Iraq"
	}, {
		"code": "IE",
		"label": "Ireland"
	}, {
		"code": "IS\t",
		"label": "Iceland"
	}, {
		"code": "IL",
		"label": "Israel"
	}, {
		"code": "IT",
		"label": "Italy"
	}, {
		"code": "JM",
		"label": "Jamaica"
	}, {
		"code": "JP",
		"label": "Japan"
	}, {
		"code": "JO",
		"label": "Jordan"
	}, {
		"code": "KZ",
		"label": "Kazakhstan"
	}, {
		"code": "KE",
		"label": "Kenya"
	}, {
		"code": "KG",
		"label": "Kirghiz"
	}, {
		"code": "KI",
		"label": "Kiribati"
	}, {
		"code": "KW",
		"label": "Kuwait"
	}, {
		"code": "DM",
		"label": "Dominica"
	}, {
		"code": "LA",
		"label": "Laos"
	}, {
		"code": "LS",
		"label": "Lesotho"
	}, {
		"code": "LV",
		"label": "Latvia"
	}, {
		"code": "LB",
		"label": "Lebanon"
	}, {
		"code": "LR",
		"label": "Liberia"
	}, {
		"code": "LY",
		"label": "Libya"
	}, {
		"code": "LI",
		"label": "Liechtenstein"
	}, {
		"code": "LT",
		"label": "Lithuania"
	}, {
		"code": "LU",
		"label": "Luxembourg"
	}, {
		"code": "MO",
		"label": "Macao"
	}, {
		"code": "MK",
		"label": "Macedonia"
	}, {
		"code": "MG",
		"label": "Madagascar"
	}, {
		"code": "MY",
		"label": "Malaysia"
	}, {
		"code": "MW",
		"label": "Malawi"
	}, {
		"code": "MV",
		"label": "Maldives"
	}, {
		"code": "ML",
		"label": "Mali"
	}, {
		"code": "FK",
		"label": "Falkland Islands"
	}, {
		"code": "MT",
		"label": "Malta"
	}, {
		"code": "MA",
		"label": "Morocco"
	}, {
		"code": "MQ",
		"label": "Martinique"
	}, {
		"code": "MR",
		"label": "Mauritania"
	}, {
		"code": "YT",
		"label": "Mayotte"
	}, {
		"code": "MX",
		"label": "Mexico"
	}, {
		"code": "FM",
		"label": "Micronesia"
	}, {
		"code": "MD",
		"label": "Moldavia"
	}, {
		"code": "MC",
		"label": "Monaco"
	}, {
		"code": "MN",
		"label": "Mongolia"
	}, {
		"code": "MS",
		"label": "Montserrat"
	}, {
		"code": "MZ",
		"label": "Mozambique"
	}, {
		"code": "MM",
		"label": "Myanmar"
	}, {
		"code": "NZ",
		"label": "New Zealand"
	}, {
		"code": "NC\t",
		"label": "N.Caledonia"
	}, {
		"code": "NA",
		"label": "Namibia"
	}, {
		"code": "NR",
		"label": "Nauru"
	}, {
		"code": "NP",
		"label": "Nepal"
	}, {
		"code": "NI",
		"label": "Nicaragua"
	}, {
		"code": "NE",
		"label": "Niger"
	}, {
		"code": "NG",
		"label": "Nigeria"
	}, {
		"code": "NO",
		"label": "Norway"
	}, {
		"code": "OM",
		"label": "Oman"
	}, {
		"code": "UG",
		"label": "Uganda"
	}, {
		"code": "UZ",
		"label": "Uzbekistan"
	}, {
		"code": "PK",
		"label": "Pakistan"
	}, {
		"code": "PW",
		"label": "Palau"
	}, {
		"code": "PA",
		"label": "Panama"
	}, {
		"code": "PG\t",
		"label": "Papua New Guinea"
	}, {
		"code": "PY",
		"label": "Paraguay"
	}, {
		"code": "NL",
		"label": "Netherlands"
	}, {
		"code": "PE",
		"label": "Peru"
	}, {
		"code": "PH",
		"label": "Philippines"
	}, {
		"code": "PL",
		"label": "Poland"
	}, {
		"code": "PF",
		"label": "French Polynesia"
	}, {
		"code": "PR",
		"label": "Porto Rico"
	}, {
		"code": "PT",
		"label": "Portugal"
	}, {
		"code": "QA",
		"label": "Qatar"
	}, {
		"code": "CF",
		"label": "Central African Republic"
	}, {
		"code": "CZ",
		"label": "Czech Republic"
	}, {
		"code": "DO",
		"label": "Dominican Republic"
	}, {
		"code": "RE",
		"label": "Reunion Island"
	}, {
		"code": "RO\t",
		"label": "Romania"
	}, {
		"code": "RW",
		"label": "Rwanda"
	}, {
		"code": "ST",
		"label": "Sao Tomé and Prin"
	}, {
		"code": "SM",
		"label": "Saint-Marin"
	}, {
		"code": "SH",
		"label": "Saint-Helena"
	}, {
		"code": "SB",
		"label": "Salomon"
	}, {
		"code": "WS",
		"label": "Western Samoa "
	}, {
		"code": "AS",
		"label": "American Samoa"
	}, {
		"code": "SN",
		"label": "Senegal"
	}, {
		"code": "SC",
		"label": "Seychelles"
	}, {
		"code": "SL",
		"label": "Sierra Leone"
	}, {
		"code": "SG",
		"label": "Singapore"
	}, {
		"code": "SK",
		"label": "Slovakia"
	}, {
		"code": "SI",
		"label": "Slovenia"
	}, {
		"code": "SO",
		"label": "Somalia"
	}, {
		"code": "SD",
		"label": "Sudan"
	}, {
		"code": "LK",
		"label": "Sri Lanka"
	}, {
		"code": "LC\t",
		"label": "Sainte-Lucie"
	}, {
		"code": "VC",
		"label": "St. Vincent"
	}, {
		"code": "KN",
		"label": "St.Chr.,Nevis"
	}, {
		"code": "PM",
		"label": "St.Pierre,Miqu."
	}, {
		"code": "SE",
		"label": "Sweden"
	}, {
		"code": "CH",
		"label": "Switzerland"
	}, {
		"code": "SR",
		"label": "Suriname"
	}, {
		"code": "SJ",
		"label": "Svalbard"
	}, {
		"code": "SZ",
		"label": "Swaziland"
	}, {
		"code": "SY",
		"label": "Syria"
	}, {
		"code": "TJ",
		"label": "Tajikistan"
	}, {
		"code": "TW",
		"label": "Taiwan"
	}, {
		"code": "TZ",
		"label": "Tanzania"
	}, {
		"code": "TD",
		"label": "Chad"
	}, {
		"code": "TH\t",
		"label": "Thailand"
	}, {
		"code": "TP",
		"label": "East Timur"
	}, {
		"code": "TG",
		"label": "Togo"
	}, {
		"code": "TO",
		"label": "Tonga"
	}, {
		"code": "TT",
		"label": "Trinidad,Tobago"
	}, {
		"code": "TN",
		"label": "Tunisia"
	}, {
		"code": "TM",
		"label": "Turkmenistan"
	}, {
		"code": "TC\t",
		"label": "Turks & Caicos"
	}, {
		"code": "TR",
		"label": "Turkey"
	}, {
		"code": "TV",
		"label": "Tuvalu"
	}, {
		"code": "UA",
		"label": "Ukraine"
	}, {
		"code": "UY",
		"label": "Uruguay"
	}, {
		"code": "US",
		"label": "USA"
	}, {
		"code": "VU",
		"label": "Vanuatu"
	}, {
		"code": "VA",
		"label": "Vatican"
	}, {
		"code": "VE",
		"label": "Venezuela"
	}, {
		"code": "VN",
		"label": "Viêt Nam"
	}, {
		"code": "WF",
		"label": "Wallis,Futuna"
	}, {
		"code": "YE",
		"label": "Yemen"
	}, {
		"code": "YU",
		"label": "Yugoslavia"
	}, {
		"code": "ZR",
		"label": "Zaire"
	}, {
		"code": "ZM",
		"label": "Zambia"
	}, {
		"code": "ZW",
		"label": "Zimbabwe"
	}];

	module.exports = paysEn;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	var paysFr = [{
		"code": "AF",
		"label": "Afghanistan"
	}, {
		"code": "ZA",
		"label": "Afrique du Sud"
	}, {
		"code": "AL",
		"label": "Albanie"
	}, {
		"code": "DZ",
		"label": "Algérie"
	}, {
		"code": "DE",
		"label": "Allemagne"
	}, {
		"code": "AD",
		"label": "Andorre"
	}, {
		"code": "AO",
		"label": "Angola"
	}, {
		"code": "AI",
		"label": "Anguilla"
	}, {
		"code": "AQ",
		"label": "Antarctique"
	}, {
		"code": "AG",
		"label": "Antigua/Barbuda"
	}, {
		"code": "AN",
		"label": "Antilles néerl."
	}, {
		"code": "STL",
		"label": "apatride"
	}, {
		"code": "SA",
		"label": "Arabie saoudite"
	}, {
		"code": "AR",
		"label": "Argentine"
	}, {
		"code": "AM",
		"label": "Arménie"
	}, {
		"code": "AW",
		"label": "Aruba"
	}, {
		"code": "AU",
		"label": "Australie"
	}, {
		"code": "AT",
		"label": "Autriche"
	}, {
		"code": "AZ",
		"label": "Azerbaïdjan"
	}, {
		"code": "BS",
		"label": "Bahamas"
	}, {
		"code": "BH",
		"label": "Bahreïn"
	}, {
		"code": "BD",
		"label": "Bangladesh"
	}, {
		"code": "BB",
		"label": "Barbades"
	}, {
		"code": "BE",
		"label": "Belgique"
	}, {
		"code": "BZ",
		"label": "Belize"
	}, {
		"code": "BJ",
		"label": "Bénin"
	}, {
		"code": "BM",
		"label": "Bermudes"
	}, {
		"code": "BT",
		"label": "Bhoutan"
	}, {
		"code": "BY",
		"label": "Biélorussie"
	}, {
		"code": "BO",
		"label": "Bolivie"
	}, {
		"code": "BA",
		"label": "Bosnie-Herz."
	}, {
		"code": "BW",
		"label": "Botswana"
	}, {
		"code": "BR",
		"label": "Brésil"
	}, {
		"code": "BN",
		"label": "Brunei Darussal"
	}, {
		"code": "BG",
		"label": "Bulgarie"
	}, {
		"code": "BF",
		"label": "Burkina Faso"
	}, {
		"code": "BI",
		"label": "Burundi"
	}, {
		"code": "KH",
		"label": "Cambodge"
	}, {
		"code": "CM",
		"label": "Cameroun"
	}, {
		"code": "CA",
		"label": "Canada"
	}, {
		"code": "CV",
		"label": "Cap-Vert"
	}, {
		"code": "CL",
		"label": "Chili"
	}, {
		"code": "CN",
		"label": "Chine"
	}, {
		"code": "CX",
		"label": "Christmas I."
	}, {
		"code": "CY",
		"label": "Chypre"
	}, {
		"code": "CO",
		"label": "Colombie"
	}, {
		"code": "KM",
		"label": "Comores"
	}, {
		"code": "CG",
		"label": "Congo"
	}, {
		"code": "KP",
		"label": "Corée du Nord"
	}, {
		"code": "KR",
		"label": "Corée du Sud"
	}, {
		"code": "CR",
		"label": "Costa Rica"
	}, {
		"code": "CI",
		"label": "Côte Ivoire"
	}, {
		"code": "HR",
		"label": "Croatie"
	}, {
		"code": "CU",
		"label": "Cuba"
	}, {
		"code": "DK",
		"label": "Danemark"
	}, {
		"code": "DJ",
		"label": "Djibouti"
	}, {
		"code": "EG",
		"label": "Egypte"
	}, {
		"code": "SV",
		"label": "El Salvador"
	}, {
		"code": "AE",
		"label": "Emir.arab.unis"
	}, {
		"code": "EC",
		"label": "Equateur"
	}, {
		"code": "ER",
		"label": "Erythrée"
	}, {
		"code": "ES",
		"label": "Espagne"
	}, {
		"code": "EE",
		"label": "Estonie"
	}, {
		"code": "ET",
		"label": "Ethiopie"
	}, {
		"code": "RU",
		"label": "Féd. russe"
	}, {
		"code": "FO",
		"label": "Féroé"
	}, {
		"code": "FJ",
		"label": "Fidji"
	}, {
		"code": "FI",
		"label": "Finlande"
	}, {
		"code": "FR",
		"label": "France"
	}, {
		"code": "GA",
		"label": "Gabon"
	}, {
		"code": "GM",
		"label": "Gambie"
	}, {
		"code": "GE",
		"label": "Géorgie"
	}, {
		"code": "GH",
		"label": "Ghana"
	}, {
		"code": "GI",
		"label": "Gibraltar"
	}, {
		"code": "GB",
		"label": "Grande Bretagne"
	}, {
		"code": "GR",
		"label": "Grèce"
	}, {
		"code": "GD",
		"label": "Grenade"
	}, {
		"code": "GL",
		"label": "Groenland"
	}, {
		"code": "GP",
		"label": "Guadeloupe"
	}, {
		"code": "GU",
		"label": "Guam"
	}, {
		"code": "GT",
		"label": "Guatémala"
	}, {
		"code": "GF",
		"label": "Guinée"
	}, {
		"code": "GQ",
		"label": "Guinée Equator."
	}, {
		"code": "GW",
		"label": "Guinée-Bissao"
	}, {
		"code": "GY",
		"label": "Guyane"
	}, {
		"code": "HT",
		"label": "Haïti"
	}, {
		"code": "HN",
		"label": "Honduras"
	}, {
		"code": "HK",
		"label": "Hong Kong"
	}, {
		"code": "HU",
		"label": "Hongrie"
	}, {
		"code": "VI",
		"label": "I. vierges amér"
	}, {
		"code": "VG",
		"label": "I. vierges brit"
	}, {
		"code": "HM",
		"label": "Il.Heard/McDon."
	}, {
		"code": "MU",
		"label": "Ile Maurice"
	}, {
		"code": "MP",
		"label": "Ile N.Mariana"
	}, {
		"code": "BV",
		"label": "Iles Bouvet"
	}, {
		"code": "KY",
		"label": "Iles caïmans"
	}, {
		"code": "CC",
		"label": "Iles Cocos"
	}, {
		"code": "CK",
		"label": "Iles Cook"
	}, {
		"code": "MH",
		"label": "Iles Marshall"
	}, {
		"code": "UM",
		"label": "Iles Minor Outl"
	}, {
		"code": "NU",
		"label": "Iles Niue"
	}, {
		"code": "NF",
		"label": "Iles Norfolk"
	}, {
		"code": "PN",
		"label": "Iles Pitcairn"
	}, {
		"code": "TK",
		"label": "Iles Tokelau"
	}, {
		"code": "IO",
		"label": "Ind.occ.ter.br."
	}, {
		"code": "IN",
		"label": "Inde"
	}, {
		"code": "ID",
		"label": "Indonésie"
	}, {
		"code": "IR",
		"label": "Iran"
	}, {
		"code": "IQ",
		"label": "Iraq"
	}, {
		"code": "IE",
		"label": "Irlande"
	}, {
		"code": "IS\t",
		"label": "Islande"
	}, {
		"code": "IL",
		"label": "Israël"
	}, {
		"code": "IT",
		"label": "Italie"
	}, {
		"code": "JM",
		"label": "Jamaïque"
	}, {
		"code": "JP",
		"label": "Japon"
	}, {
		"code": "JO",
		"label": "Jordanie"
	}, {
		"code": "KZ",
		"label": "Kazakhstan"
	}, {
		"code": "KE",
		"label": "Kenya"
	}, {
		"code": "KG",
		"label": "Kirghiztan"
	}, {
		"code": "KI",
		"label": "Kiribati"
	}, {
		"code": "KW",
		"label": "Koweït"
	}, {
		"code": "DM",
		"label": "La Dominique"
	}, {
		"code": "LA",
		"label": "Laos"
	}, {
		"code": "LS",
		"label": "Lesotho"
	}, {
		"code": "LV",
		"label": "Lettonie"
	}, {
		"code": "LB",
		"label": "Liban"
	}, {
		"code": "LR",
		"label": "Liberia"
	}, {
		"code": "LY",
		"label": "Libye"
	}, {
		"code": "LI",
		"label": "Liechtenstein"
	}, {
		"code": "LT",
		"label": "Lituanie"
	}, {
		"code": "LU",
		"label": "Luxembourg"
	}, {
		"code": "MO",
		"label": "Macao"
	}, {
		"code": "MK",
		"label": "Macédoine"
	}, {
		"code": "MG",
		"label": "Madagascar"
	}, {
		"code": "MY",
		"label": "Malaisie"
	}, {
		"code": "MW",
		"label": "Malawi"
	}, {
		"code": "MV",
		"label": "Maldives"
	}, {
		"code": "ML",
		"label": "Mali"
	}, {
		"code": "FK",
		"label": "Malouines"
	}, {
		"code": "MT",
		"label": "Malte"
	}, {
		"code": "MA",
		"label": "Maroc"
	}, {
		"code": "MQ",
		"label": "Martinique"
	}, {
		"code": "MR",
		"label": "Mauritanie"
	}, {
		"code": "YT",
		"label": "Mayotte"
	}, {
		"code": "MX",
		"label": "Mexique"
	}, {
		"code": "FM",
		"label": "Micronésie"
	}, {
		"code": "MD",
		"label": "Moldavie"
	}, {
		"code": "MC",
		"label": "Monaco"
	}, {
		"code": "MN",
		"label": "Mongolie"
	}, {
		"code": "MS",
		"label": "Montserrat"
	}, {
		"code": "MZ",
		"label": "Mozambique"
	}, {
		"code": "MM",
		"label": "Myanmar"
	}, {
		"code": "NZ",
		"label": "N. Zélande"
	}, {
		"code": "NC\t",
		"label": "N.Calédonie"
	}, {
		"code": "NA",
		"label": "Namibie"
	}, {
		"code": "NR",
		"label": "Nauru"
	}, {
		"code": "NP",
		"label": "Népal"
	}, {
		"code": "NI",
		"label": "Nicaragua"
	}, {
		"code": "NE",
		"label": "Niger"
	}, {
		"code": "NG",
		"label": "Nigéria"
	}, {
		"code": "NO",
		"label": "Norvège"
	}, {
		"code": "OM",
		"label": "Oman"
	}, {
		"code": "UG",
		"label": "Ouganda"
	}, {
		"code": "UZ",
		"label": "Ouzbékistan"
	}, {
		"code": "PK",
		"label": "Pakistan"
	}, {
		"code": "PW",
		"label": "Palauan"
	}, {
		"code": "PA",
		"label": "Panama"
	}, {
		"code": "PG\t",
		"label": "Pap.Nouv.Guinée"
	}, {
		"code": "PY",
		"label": "Paraguay"
	}, {
		"code": "NL",
		"label": "Pays-Bas"
	}, {
		"code": "PE",
		"label": "Pérou"
	}, {
		"code": "PH",
		"label": "Philippines"
	}, {
		"code": "PL",
		"label": "Pologne"
	}, {
		"code": "PF",
		"label": "Polynésie fran."
	}, {
		"code": "PR",
		"label": "Porto Rico"
	}, {
		"code": "PT",
		"label": "Portugal"
	}, {
		"code": "QA",
		"label": "Qatar"
	}, {
		"code": "CF",
		"label": "Rép. centrafr."
	}, {
		"code": "CZ",
		"label": "Rép. tchèque"
	}, {
		"code": "DO",
		"label": "Rép.Dominicaine"
	}, {
		"code": "RE",
		"label": "Réunion"
	}, {
		"code": "RO\t",
		"label": "Roumanie"
	}, {
		"code": "RW",
		"label": "Rwanda"
	}, {
		"code": "ST",
		"label": "S.Tomé-et-princ"
	}, {
		"code": "SM",
		"label": "Saint-Marin"
	}, {
		"code": "SH",
		"label": "Sainte-Hélène"
	}, {
		"code": "SB",
		"label": "Salomon"
	}, {
		"code": "WS",
		"label": "Samoa occident."
	}, {
		"code": "AS",
		"label": "Samoa, améric."
	}, {
		"code": "SN",
		"label": "Sénégal"
	}, {
		"code": "SC",
		"label": "Seychelles"
	}, {
		"code": "SL",
		"label": "Sierra Leone"
	}, {
		"code": "SG",
		"label": "Singapour"
	}, {
		"code": "SK",
		"label": "Slovaquie"
	}, {
		"code": "SI",
		"label": "Slovénie"
	}, {
		"code": "SO",
		"label": "Somalie"
	}, {
		"code": "SD",
		"label": "Soudan"
	}, {
		"code": "LK",
		"label": "Sri Lanka"
	}, {
		"code": "LC\t",
		"label": "St. Lucie"
	}, {
		"code": "VC",
		"label": "St. Vincent"
	}, {
		"code": "KN",
		"label": "St.Chr.,Nevis"
	}, {
		"code": "PM",
		"label": "St.Pierre,Miqu."
	}, {
		"code": "SE",
		"label": "Suède"
	}, {
		"code": "CH",
		"label": "Suisse"
	}, {
		"code": "SR",
		"label": "Suriname"
	}, {
		"code": "SJ",
		"label": "Svalbard"
	}, {
		"code": "SZ",
		"label": "Swaziland"
	}, {
		"code": "SY",
		"label": "Syrie"
	}, {
		"code": "TJ",
		"label": "Tadjikistan"
	}, {
		"code": "TW",
		"label": "Taiwan"
	}, {
		"code": "TZ",
		"label": "Tanzanie"
	}, {
		"code": "TD",
		"label": "Tchad"
	}, {
		"code": "TH\t",
		"label": "Thaïland"
	}, {
		"code": "TP",
		"label": "Timor orient."
	}, {
		"code": "TG",
		"label": "Togo"
	}, {
		"code": "TO",
		"label": "Tonga"
	}, {
		"code": "TT",
		"label": "Trinidad,Tobago"
	}, {
		"code": "TN",
		"label": "Tunisie"
	}, {
		"code": "TM",
		"label": "Turkménistan"
	}, {
		"code": "TC\t",
		"label": "Turks & Caicos"
	}, {
		"code": "TR",
		"label": "Turquie"
	}, {
		"code": "TV",
		"label": "Tuvalu"
	}, {
		"code": "UA",
		"label": "Ukraine"
	}, {
		"code": "UY",
		"label": "Uruguay"
	}, {
		"code": "US",
		"label": "USA"
	}, {
		"code": "VU",
		"label": "Vanuatu"
	}, {
		"code": "VA",
		"label": "Vatican"
	}, {
		"code": "VE",
		"label": "Vénézuéla"
	}, {
		"code": "VN",
		"label": "Viêt Nam"
	}, {
		"code": "WF",
		"label": "Wallis,Futuna"
	}, {
		"code": "YE",
		"label": "Yémen"
	}, {
		"code": "YU",
		"label": "Yougoslavie"
	}, {
		"code": "ZR",
		"label": "Zaïre"
	}, {
		"code": "ZM",
		"label": "Zambie"
	}, {
		"code": "ZW",
		"label": "Zimbabwe"
	}];

	module.exports = paysFr;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = function () {

	    var _self = this;

	    var errorClass = 'error';
	    var successClass = 'success';

	    this.setClasses = function (isValid, classList, value) {

	        //console.log('setting classes in common services : ', isValid, classList, value)
	        if (isValid) {
	            classList.remove(errorClass);
	            classList.add(successClass);
	            if (angular.isUndefined(value) || value == '') classList.remove(successClass);
	        } else {
	            classList.remove(successClass);
	            classList.add(errorClass);
	        }
	    };

	    this.setClassValid = function (classList, value) {
	        classList.remove(errorClass);
	        if (angular.isDefined(value) && value != '') classList.add(successClass);
	    };

	    this.setClassInvalid = function (classList) {
	        classList.remove(successClass);
	        classList.add(errorClass);
	    };

	    this.unsetClasses = function (classList) {
	        classList.remove(successClass);
	        classList.remove(errorClass);
	    };

	    this.setBlurFunction = function (element) {

	        element.onblur = function (element) {
	            console.log('grap blur : ', element);

	            var isValid = element.target.classList.contains('ng-valid');
	            _self.setClasses(isValid, element.target.classList, element.target.value);

	            element.target.onblur = null;
	        };
	    };

	    return this;
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.controlInputDirective';
	angular.module(moduleName, []);

	var controlInputDirectiveBody = __webpack_require__(44);
	var controlInputDirectiveService = __webpack_require__(45);

	angular.module(moduleName).factory('controlInputDirectiveService', ['resourceService', controlInputDirectiveService]);
	angular.module(moduleName).directive('controlInput', ['controlInputDirectiveService', 'commonService', '$q', controlInputDirectiveBody]);

	module.exports = moduleName;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = function (controlInputDirectiveService, commonService, $q) {

	    return {
	        restrict: 'A',
	        scope: {
	            controlInput: '@',
	            idTrace: '=',
	            ngDisabled: '='
	        },
	        require: 'ngModel',
	        replace: false,
	        link: function (scope, element, attrs, ngModel) {

	            //console.log('controlInput : ', scope.controlInput, element, attrs, ngModel);
	            console.log('TraceId : ', scope.idTrace);
	            //controlInputDirectiveService.setBlurFunction(element[0]);
	            commonService.setBlurFunction(element[0]);

	            switch (scope.controlInput) {
	                case 'amount':
	                    ngModel.$validators.amountPattern = function (value) {
	                        console.log('control amount format : ', value);
	                        return controlInputDirectiveService.isValidAmount(value);
	                    };
	                    break;

	                case 'tel':
	                    ngModel.$validators.telPattern = function (value) {
	                        console.log('control tel format : ', value);
	                        return controlInputDirectiveService.isValidTel(value);
	                    };
	                    break;

	                case 'activation-code':
	                    console.log('activation code : ', scope);
	                    ngModel.$validators.activationCodePattern = function (value) {
	                        console.log('control code format :', value, scope.idTrace);
	                        return controlInputDirectiveService.isValidActivationCode(value);
	                    };

	                    ngModel.$asyncValidators.activationCode = function (value) {

	                        ngModel.$setValidity('invalidCode', true);
	                        ngModel.$setValidity('expiredCode', true);
	                        ngModel.$setValidity('technicalError', true);

	                        if (value == '' || angular.isUndefined(value)) return $q.resolve();

	                        return controlInputDirectiveService.checkCode(value, scope.idTrace).then(function () {

	                            switch (controlInputDirectiveService.statusCode) {
	                                case 1:
	                                    ngModel.$setValidity('invalidCode', true);
	                                    ngModel.$setValidity('expiredCode', true);
	                                    ngModel.$setValidity('technicalError', true);
	                                    var isValid = true;
	                                    break;
	                                case 2:
	                                    ngModel.$setValidity('invalidCode', false);
	                                    break;
	                                case 3:
	                                    ngModel.$setValidity('expiredCode', false);
	                                    break;
	                                case 4:
	                                    ngModel.$setValidity('technicalError', false);

	                            }

	                            //console.log('hcecking code element : ', ngModel, element, ngModel.$valid);
	                            if (ngModel.$touched) commonService.setClasses(isValid, element[0].classList, value);

	                            return true;
	                        });
	                    };
	                default:
	            }

	            if (!scope.ngDisabled) {
	                ngModel.$validators.setClasses = function (value) {

	                    console.log('setting class');
	                    if (ngModel.$touched && !scope.ngDisabled) commonService.setClasses(ngModel.$valid, element[0].classList, value);

	                    return true;
	                };
	            }
	        }
	    };
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = function (resourceService) {

	    var _self = this;

	    var amountRegEx = /^\d{1,8}((\.|,)\d{1,2})?$/;
	    var codeRegEx = /^\d{4}$/;
	    var telRegEx = /^(\+[1-9]{3}|0[1-9])([\s]?\d{2}){4}$/;

	    const TECHNICAL_ERROR_CODE = 4;

	    this.isValidAmount = function (amount) {

	        return angular.isUndefined(amount) || !amount || amountRegEx.test(amount);
	    };

	    this.isValidActivationCode = function (code) {

	        return angular.isUndefined(code) || !code || codeRegEx.test(code);
	    };

	    this.isValidTel = function (tel) {

	        return angular.isUndefined(tel) || !tel || telRegEx.test(tel);
	    };

	    this.checkCode = function (codeValue, id) {

	        var form = {
	            Code: codeValue,
	            TraceId: id
	        };

	        console.log('send code to check : ', form);

	        return resourceService.checkCodeValidity(form).then(function (response) {
	            console.log('check code success : ', response);
	            _self.statusCode = response.data.StatusCode;
	            console.log('status code : ', _self.statusCode);
	        }, function (response) {
	            console.log('ckeck code failure : ', response);
	            _self.statusCode = TECHNICAL_ERROR_CODE;
	        });
	    };

	    return this;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var emailDirectiveModule = __webpack_require__(47);
	var siretDirectiveModule = __webpack_require__(59);
	var selectCountriesModule = __webpack_require__(56);
	var controlInputModule = __webpack_require__(43);
	var telDirectiveModule = __webpack_require__(62);
	var fileUploadDirectiveModule = __webpack_require__(50);
	var loadersModule = __webpack_require__(53);

	var commonService = __webpack_require__(42);
	var moduleName = 'common.directives';

	angular.module(moduleName, [emailDirectiveModule, siretDirectiveModule, selectCountriesModule, controlInputModule, telDirectiveModule, fileUploadDirectiveModule, loadersModule]);

	angular.module(moduleName).factory('commonService', commonService);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.emailDirective';
	//var directiveName = 'emailControl'
	angular.module(moduleName, []);

	var emailDirectiveBody = __webpack_require__(48);
	var emailDirectiveService = __webpack_require__(49);

	angular.module(moduleName).factory('emailDirectiveService', ['resourceService', emailDirectiveService]);
	angular.module(moduleName).directive('emailControl', ['emailDirectiveService', 'commonService', emailDirectiveBody]);

	module.exports = moduleName;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function (emailDirectiveService, commonService) {

	    return {
	        restrict: 'A',
	        scope: {
	            emailControl: '=',
	            verify: '@'
	        },
	        require: 'ngModel',
	        replace: false,
	        link: function (scope, element, attrs, ngModel) {
	            console.log('this is the directive link : ', scope.verify, scope.emailControl, attrs, ngModel);

	            commonService.setBlurFunction(element[0]);

	            var emailRegEx = emailDirectiveService.initialize(scope.emailControl);

	            ngModel.$validators.emailPattern = function (value) {
	                console.log('value : ', value);
	                return emailRegEx.test(value) || !value;
	            };

	            ngModel.$validators.setClasses = function (value) {

	                console.log('setting class');
	                if (ngModel.$touched) commonService.setClasses(ngModel.$valid, element[0].classList, value);

	                return true;
	            };

	            if (scope.verify == 'if-exist' || scope.verify == 'if-not-exist') {
	                ngModel.$asyncValidators.emailVerify = function (value) {
	                    return emailDirectiveService.verifyEmail(value, scope.verify);
	                };
	            }
	        }
	    };
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = function (resourceService) {

	    // default email RegEx if RexEx is wrong or regEx is not setted
	    const defaulEmailRegEx = /^[a-zA-Z0-9_.-]*@[a-zA-Z0-9_.-]*\.[a-zA-Z]{2,}$/;

	    // Validation de l'expression régulière
	    this.initialize = function (emailRegEx) {

	        console.log('in initialize function', emailRegEx);
	        if (angular.isDefined(emailRegEx)) {
	            try {
	                ''.match(emailRegEx);
	                console.log('valid email regEx');
	                return emailRegEx;
	            } catch (err) {
	                console.log('invalid email regEx');
	                return defaulEmailRegEx;
	            }
	        } else {
	            console.log('no email regEx set');
	            return defaulEmailRegEx;
	        }
	    };

	    this.checkValidity = function (model, emailRegEx, verify) {

	        var email = model.$modelValue;
	        console.log('verify check : ', verify);
	        if (angular.isDefined(email) && email != '') {

	            if (emailRegEx.test(email)) model.$setValidity('email-pattern', true);else model.$setValidity('email-pattern', false);
	        } else model.$setValidity('email-pattern', true);
	    };

	    this.verifyEmail = function (value, verify) {

	        if (verify == 'if-exist') {

	            return resourceService.checkIfEmailExist(value).then(function () {
	                return true;
	            }, function () {
	                return $q.reject('not exist');
	            });
	        } else if (verify == 'if-not-exist') {

	            return resourceService.checkIfEmailExist(value).then(function () {
	                return $q.reject('exist');
	            }, function () {
	                return true;
	            });
	        }
	    };

	    return this;
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.fileUploadDirective';
	//var directiveName = 'fileUploadControl'
	angular.module(moduleName, []);

	var fileUploadDirectiveBody = __webpack_require__(51);
	var fileUploadDirectiveService = __webpack_require__(52);

	angular.module(moduleName).factory('fileUploadDirectiveService', fileUploadDirectiveService);
	angular.module(moduleName).directive('fileUploadControl', ['fileUploadDirectiveService', 'commonService', '$parse', fileUploadDirectiveBody]);

	module.exports = moduleName;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = function (fileUploadDirectiveService, commonService, $parse) {
	    return {
	        restrict: 'A',
	        scope: {
	            fileUploadControl: '=',
	            notRequired: '=',
	            extensionControl: '='
	        },
	        require: 'ngModel',
	        replace: false,
	        link: function (scope, element, attrs, ngModel) {
	            /*    var model = $parse(attrs.fileModel);
	                var modelSetter = model.assign;
	                  element.bind('change', function () {
	                    scope.$apply(function () {
	                        modelSetter(scope, element[0].files[0]);
	                    });
	                });*/

	            console.log('this is the upload file directive : ');
	            console.log('scope : ', scope);
	            console.log('element : ', element);
	            console.log('attrs : ', attrs);
	            console.log('ngModel : ', ngModel);

	            element.bind('change', function () {
	                console.log('change function');
	                /*
	                $parse(attrs.fileUploadControl).assign(scope, element[0].files[0]);
	                scope.$apply();
	                */
	                scope.fileUploadControl = element[0].files[0];
	                console.log('apply function', element.val(), scope.fileUploadControl);

	                ngModel.$validate();
	                if (!ngModel.$touched) ngModel.$setTouched();
	                scope.$apply();
	            });

	            fileUploadDirectiveService.addValidators(ngModel, scope, element);
	        }
	    };
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = function () {

	    const FILE_TYPE = ['application/pdf', 'image/png', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
	    const FILE_SIZE_MAX = 2097152;

	    this.addValidators = function (model, scope, element) {

	        model.$validators.fileType = function () {

	            //scope.fileUploadControl = element[0].files[0];
	            var file = scope.fileUploadControl;
	            console.log('file value : ', file);
	            if (!file) return true;else if (angular.isDefined(scope.extensionControl) && angular.isArray(scope.extensionControl)) for (var i = 0; i < scope.extensionControl.length; i++) {
	                if (checkExtension(file.name, scope.extensionControl[i])) return true;
	            } else for (var i = 0; i < FILE_TYPE.length; i++) {
	                if (FILE_TYPE[i] == file.type) return true;
	            }

	            return false;
	        };

	        model.$validators.fileSize = function () {

	            //scope.fileUploadControl = element[0].files[0];
	            var file = scope.fileUploadControl;
	            if (!file) return true;else return file.size <= FILE_SIZE_MAX;
	        };

	        if (!scope.notRequired) {
	            model.$validators.fileEmpty = function () {

	                //scope.fileUploadControl = element[0].files[0];
	                var file = scope.fileUploadControl;
	                console.log('upload file empty validator : ', file);
	                if (!scope.notRequired && !file) return false;else return true;
	            };
	        }
	    };

	    var checkExtension = function (name, extension) {

	        return name.substr(name.lastIndexOf('.') + 1) == extension;
	    };

	    return this;
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.loaders';
	angular.module(moduleName, []);

	var loadersBody = __webpack_require__(54);
	angular.module(moduleName).directive('loader', loadersBody);

	module.exports = moduleName;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function () {
	    return {
	        restrict: 'E',
	        scope: {
	            type: '@'
	        },
	        controller: ['$scope', '$attrs', __webpack_require__(55)],
	        controllerAs: 'loadersCtrl',
	        template: __webpack_require__(33),
	        css: __webpack_require__(81),
	        replace: true,
	        transclude: true,
	        link: function (scope, element, attrs, ctrl) {
	            console.log('loaders directive injections : ', scope, element, attrs, ctrl);
	            ctrl.pasteLoadersToBody();
	            if (attrs.$attr.hasOwnProperty('covered')) {
	                ctrl.showFilter();
	                scope.$on('$destroy', function () {
	                    ctrl.hideFilter();
	                });
	            }
	        }
	    };
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = function ($scope, $attrs) {

	    var contentClass = 'main-container';
	    var classOverflowHidden = 'overflow-hidden';
	    var classFilterBlur = 'filter-blur';
	    var modalClass = 'modal';
	    var _self = this;

	    this.$onInit = function () {

	        console.log('passed scope to controller : ', $scope, $attrs);
	        selectType($scope.type);
	    };

	    this.showFilter = function () {

	        console.log('show filter !!');

	        body = document.getElementsByTagName('body');
	        filter = document.createElement('div');
	        content = document.getElementsByClassName(contentClass);
	        modal = document.getElementsByClassName(modalClass);
	        filter.id = 'lizar';
	        if (body[0]) {
	            body[0].appendChild(filter);
	            body[0].classList.add(classOverflowHidden);
	        }
	        if (content[0]) content[0].classList.add(classFilterBlur);
	        if (modal[0]) modal[0].classList.add(classFilterBlur);
	    };

	    this.hideFilter = function () {
	        console.log('hide filter !!');

	        body = document.getElementsByTagName('body');
	        filter = document.getElementById('lizar');
	        content = document.getElementsByClassName(contentClass);
	        modal = document.getElementsByClassName(modalClass);
	        if (body[0]) {
	            body[0].removeChild(filter);
	            body[0].classList.remove(classOverflowHidden);
	        }
	        if (content[0]) content[0].classList.remove(classFilterBlur);
	        if (modal[0]) modal[0].classList.remove(classFilterBlur);
	    };

	    this.pasteLoadersToBody = function () {
	        var body = document.getElementsByTagName('body');
	        var loaders = document.getElementById('loaders');
	        body[0].appendChild(loaders);
	    };

	    var selectType = function (type) {
	        switch (type) {
	            case 'balls':
	                _self.loadballsFlag = true;
	                break;
	            case 'quarter':
	                _self.quarterFlag = true;
	                break;
	            default:

	        }
	    };
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.selectCountries';
	angular.module(moduleName, []);

	var selectCountriesBody = __webpack_require__(57);
	var selectCountriesCtrl = __webpack_require__(58);

	angular.module(moduleName).directive('selectCountries', [selectCountriesBody]);
	angular.module(moduleName).controller('selectCountriesCtrl', ['userService', selectCountriesCtrl]);

	module.exports = moduleName;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function () {

	    return {
	        restrict: 'AE',
	        scope: {
	            replace: '@'
	        },
	        replace: true,
	        transclude: true,
	        template: __webpack_require__(34),
	        controller: 'selectCountriesCtrl',
	        controllerAs: 'selectCountriesCtrl',
	        link: function (scope, element, attrs) {

	            console.log('countries directive', scope, element, attrs);

	            scope.elementBis = element[0];
	        }
	    };
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = function (userService) {

	    var _self = this;

	    this.$onInit = function () {
	        _self.countries = userService.getCountries();
	        //console.log('initialize countries controller : ', _self.countries);
	    };
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.siretDirective';
	//var directiveName = 'siretControl'
	angular.module(moduleName, []);

	var siretDirectiveBody = __webpack_require__(60);
	var siretDirectiveService = __webpack_require__(61);

	angular.module(moduleName).factory('siretDirectiveService', ['resourceService', '$q', siretDirectiveService]);
	angular.module(moduleName).directive('siretControl', ['siretDirectiveService', 'commonService', '$q', siretDirectiveBody]);

	module.exports = moduleName;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = function (siretDirectiveService, commonService, $q) {

	    return {
	        restrict: 'A',
	        scope: {
	            ngDisabled: '='
	        },
	        require: 'ngModel',
	        replace: false,
	        link: function (scope, element, attrs, ngModel) {

	            if (!scope.ngDisabled) {
	                commonService.setBlurFunction(element[0]);

	                ngModel.$validators.siretPattern = function (value) {
	                    console.log('siret value : ', value);
	                    var isValidSiret = siretDirectiveService.isValidSiret(value);

	                    if (!scope.ngDisabled && ngModel.$touched) commonService.setClasses(isValidSiret, element[0].classList, value);

	                    return isValidSiret;
	                };

	                console.log('verify attribute : ', attrs.hasOwnProperty('verify'));

	                if (attrs.hasOwnProperty('verify')) ngModel.$asyncValidators.siretVerify = function (value) {
	                    console.log('if siret exist : ', value);
	                    //commonService.unsetClasses(element[0].classList);
	                    if (value == '' || angular.isUndefined(value) || scope.ngDisabled) return $q.resolve();

	                    return siretDirectiveService.checkSiret(value).then(function () {
	                        console.log('what happened there');
	                        if (ngModel.$touched) commonService.setClassValid(element[0].classList, value);
	                        return true;
	                    }, function () {
	                        console.log('what happened there to ? ');
	                        if (ngModel.$touched) commonService.setClassInvalid(element[0].classList);
	                        return $q.reject();
	                    });

	                    //return isValidSiret;
	                };
	            }
	        }
	    };
	};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function (resourceService, $q) {

	    const SIRET_LENGTH = 14;

	    this.isValidSiret = function (siret) {

	        if (angular.isUndefined(siret) || !siret) return true;
	        if (siret.length != SIRET_LENGTH) return false;

	        var siretIntTab = [];

	        for (var i = 0, p = SIRET_LENGTH - 1; i < SIRET_LENGTH; i++, p--) {

	            siretIntTab[p] = parseInt(siret[i]);
	            if (isNaN(siretIntTab[p])) {
	                console.log('invalid format');
	                return false;
	            }
	        }

	        console.log('sirent Tab after life : ', siretIntTab);

	        for (var i = 0; i < SIRET_LENGTH; i++) {

	            if ((i + 1) % 2 == 0) {
	                siretIntTab[i] *= 2;
	                if (siretIntTab[i] > 9) siretIntTab[i] -= 9;
	            }
	        }

	        console.log('siret tab after transformation : ', siretIntTab);

	        var sumOfValues = siretIntTab.reduce(function (a, b) {
	            return a + b;
	        });

	        console.log('sum of values : ', sumOfValues);

	        if (sumOfValues % 10 == 0) {
	            console.log('siret control : valid');
	            return true;
	        } else {
	            console.log('siret control : invalid');
	            return false;
	        }
	    };

	    this.checkSiret = function (siret) {
	        return resourceService.checkIfSiretExist(siret).then(function () {
	            return $q.reject('siret already exist');
	        }, function () {
	            return true;
	        });
	    };

	    return this;
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var moduleName = 'common.telDirective';
	//var directiveName = 'telControl'
	angular.module(moduleName, []);

	var telDirectiveBody = __webpack_require__(63);
	var telDirectiveService = __webpack_require__(64);

	angular.module(moduleName).factory('telDirectiveService', ['$http', telDirectiveService]);
	angular.module(moduleName).directive('telControl', ['telDirectiveService', telDirectiveBody]);

	module.exports = moduleName;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function (telDirectiveService, $http, $q) {

	    return {
	        restrict: 'A',
	        scope: {
	            telControl: '='
	        },
	        require: 'ngModel',
	        replace: false,
	        link: function (scope, element, attrs, ngModel) {
	            console.log('this is the directive link : ', scope.verify, scope.telControl, attrs, ngModel);

	            var telRegEx = telDirectiveService.initialize(scope.telControl);

	            ngModel.$validators.telPattern = function (value) {
	                return telDirectiveService.checkValidity(value, telRegEx);
	            };
	        }
	    };
	};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = function ($http) {

	    // default tel RegEx if RexEx is wrong or regEx is not setted
	    const defaultelRegEx = /^(\+[1-9]{3}|0[1-9])([\s]?\d{2}){4}$/;

	    // Validation de l'expression régulière
	    this.initialize = function (telRegEx) {

	        console.log('in initialize function', telRegEx);
	        if (angular.isDefined(telRegEx)) {
	            try {
	                ''.match(telRegEx);
	                console.log('valid tel regEx');
	                return telRegEx;
	            } catch (err) {
	                console.log('invalid tel regEx');
	                return defaultelRegEx;
	            }
	        } else {
	            console.log('no tel regEx set');
	            return defaultelRegEx;
	        }
	    };

	    this.checkValidity = function (tel, telRegEx) {
	        //console.log('test tel validity : ', tel);
	        return tel == '' || angular.isUndefined(tel) || telRegEx.test(tel);
	    };

	    return this;
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var errorMessagesService = __webpack_require__(8);

	var moduleName = 'common.errorMessages';
	angular.module(moduleName, []);
	angular.module(moduleName).factory('errorMessagesService', ['$filter', errorMessagesService]);

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = function ($httpProvider) {
	  $httpProvider.interceptors.push('httpInterceptorService');
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	function httpInterceptorService($cookies, $q, unauthorizedPopInService, userService) {
	  var _self = this;

	  _self.userTokenHeader = 'user-token';

	  _self.request = function (config) {
	    var openAmCookie = $cookies.get(userService.cookieOpenAM);
	    config.headers[_self.userTokenHeader] = openAmCookie;

	    return config;
	  };

	  _self.responseError = function (response) {
	    var fromUrl = response.config.url.toLowerCase();
	    var fromWebApi = fromUrl.indexOf('/portailapp/') >= 0 || fromUrl.indexOf('/declarationapp/') >= 0;
	    var httpMethod = response.config.method.toLowerCase();
	    var writeHttpMethod = httpMethod == 'post' || httpMethod == 'put' || httpMethod == 'delete';

	    // console.log('fromUrl', fromUrl);
	    // console.log('fromWebApi', fromWebApi);
	    // console.log('httpMethod', httpMethod);
	    // console.log('writeHttpMethod', writeHttpMethod);

	    if (fromWebApi && writeHttpMethod && response.status == 403) {
	      unauthorizedPopInService.open();
	    }

	    return $q.reject(response);
	  };

	  return _self;
	}

	module.exports = httpInterceptorService;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var resourceService = __webpack_require__(69);

	var moduleName = 'common.resource';
	angular.module(moduleName, []);
	angular.module(moduleName).factory('resourceService', ['$http', resourceService]);

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	
	module.exports = function ($http) {

	    var urlCheckEmail = '/PortailApp/utilisateurs/exists';
	    var urlCheckSiret = '/PortailApp/AdhesionSimplifiee/{siret}';
	    var urlCheckCode = '/PortailApp/adhesionsimplifiee/ckeckcode';

	    this.checkIfEmailExist = function (email) {

	        return $http({
	            method: 'GET',
	            url: urlCheckEmail,
	            params: { email: email }
	        });
	    };

	    this.checkIfSiretExist = function (siret) {

	        return $http({
	            method: 'GET',
	            url: urlCheckSiret.replace('{siret}', siret)
	        });
	    };

	    this.checkCodeValidity = function (form) {

	        return $http({
	            method: 'POST',
	            url: urlCheckCode,
	            data: form
	        });
	    };

	    return this;
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var messageFr;
	var messageEn;

	function getCookie(name) {
		var value = "; " + document.cookie;
		var parts = value.split("; " + name + "=");
		if (parts.length == 2) return parts.pop().split(";").shift();
	}

	var charge = function () {
		console.log('test filter', decodeURIComponent(document.cookie));
		var cookie = decodeURIComponent(document.cookie);
		var cookieRegEx = /site=adelphe/;
		var baseFile;
		if (cookieRegEx.test(cookie)) {
			messageFr = __webpack_require__(39);
			messageEn = __webpack_require__(38);
		} else {
			messageFr = __webpack_require__(7);
			messageEn = __webpack_require__(6);
		}
	};

	var getLangage = function () {
		console.debug('getLangage : begin');
		var result = "fr";
		var cookie = getCookie('language');
		console.debug('cookie language = ', cookie);
		if (cookie && cookie == "en") {
			result = "en";
			console.debug('activation anglais');
		} else {
			console.debug('activation francais');
		}

		console.debug('getLangage : result = ', result);
		return result;
	};

	charge();

	module.exports = function ($translateProvider) {
		var languages = {
			fr: 'fr',
			en: 'en'
		};

		var langage = getLangage();
		console.warn('config : translate. langage = ', langage);

		$translateProvider.translations(languages.fr, messageFr);
		$translateProvider.translations(languages.en, messageEn);
		//$translateProvider.translations(languages.en, messageEn);

		$translateProvider.preferredLanguage(langage);

		$translateProvider.useSanitizeValueStrategy('escape');
	};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var unauthorizedPopInService = __webpack_require__(73);

	var moduleName = 'common.unauthorizedPopIn';
	angular.module(moduleName, []);
	angular.module(moduleName).factory('unauthorizedPopInService', ['$injector', unauthorizedPopInService]);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = function (unauthorizedPopInService) {
	  var _self = this;

	  _self.close = function () {
	    unauthorizedPopInService.close();
	  };
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function ($injector) {
	  var _self = this;
	  var unauthorizedPopInCtrl = __webpack_require__(72);

	  _self.modal = null;

	  _self.open = function () {
	    var uibModal = $injector.get('$uibModal');
	    _self.modal = uibModal.open({
	      template: __webpack_require__(35),
	      backdrop: 'static',
	      keyboard: false,
	      controller: ['unauthorizedPopInService', unauthorizedPopInCtrl],
	      controllerAs: 'unauthorizedPopInCtrl'
	    });
	  };

	  _self.close = function () {
	    _self.modal.close();
	  };

	  return _self;
	};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var session = __webpack_require__(75);

	var moduleName = 'common.user';
	angular.module(moduleName, []);
	angular.module(moduleName).factory('userService', ['$cookies', session]);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var messageFr = __webpack_require__(7);
	var messageEn = __webpack_require__(6);

	var paysFr = __webpack_require__(41);
	var paysEn = __webpack_require__(40);

	module.exports = function ($cookies) {

	    //this.add = function(key, value) {}


	    var _self = this;
	    this.userObjectName = 'userInfo';
	    this.listClientsObjectName = 'listClients';
	    this.errorMessage = 'undefined';
	    this.emptyMessage = '';
	    this.facticeIdCorrespondent = 'factice';
	    this.orgaCommercialeName = 'orgaCommerciale';

	    this.cookieClientSFname = 'idClientSF';
	    this.cookieClientSAPname = 'idClientSAP';
	    this.cookieOpenAM = 'iPlanetDirectoryPro';

	    var cookieLanguageName = 'language';
	    var cookieConseillerUidName = 'conseillerUid';
	    var cookieConseillerName = 'CookieConseiller';

	    //this.functions = messageFr.labels.relationClient.functions;

	    this.userDeletionReasons = messageFr.labels.relationClient.accountDeletionReason;

	    const languageCookieName = 'language';

	    //************** A RETIRER ************
	    this.urlChooseClient = '/choix-entreprise';
	    this.urlHome = '/mon-espace/accueil';
	    //*************************************
	    this.urlConseillerHome = '/accueil-conseiller';

	    this.getFunctions = function () {

	        var language = $cookies.get(cookieLanguageName);
	        console.log('language cookie : ', language);
	        if (angular.isDefined(language) && language.trim() == 'en') return messageEn.labels.relationClient.functions;else return messageFr.labels.relationClient.functions;
	    };

	    this.getLanguage = function () {
	        var language = $cookies.get(cookieLanguageName);
	        return language ? language : 'fr';
	    };

	    this.getCountries = function () {

	        var language = $cookies.get(languageCookieName);
	        console.log('language cookie : ', language);
	        if (angular.isDefined(language) && language.trim() == 'en') return paysEn;else return paysFr;
	    };

	    this.userInfo = {
	        lastName: undefined,
	        firstName: undefined,
	        initials: undefined,
	        civility: undefined,
	        idClientSF: undefined,
	        idClientSAP: undefined,
	        clientName: undefined,
	        idCorrespondentSF: undefined
	    };

	    this.listClients = undefined;

	    // AJOUTER UNE NOUVELLE
	    this.add = function (key, value) {

	        sessionStorage.setItem(key, JSON.stringify(value));
	    };

	    // AJOUTER OBJET USER DANS LA SESSION
	    this.addUser = function (value) {

	        sessionStorage.setItem(_self.userObjectName, JSON.stringify(value));
	    };

	    // RECUPERER OBJET USER DANS LA SESSION
	    this.getUser = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null ? user : _self.errorMessage;
	    };

	    // RECUPERER NUMERO CLIENT SAP
	    this.getUserIdSAP = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.idClientSAP) ? user.idClientSAP : _self.errorMessage;
	    };

	    // RECUPERER NUMERO CLIENT SALES FORCE
	    this.getUserIdSF = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.idClientSF) ? user.idClientSF : _self.emptyMessage;
	    };

	    // RECUPERER NUMERO CORRESPONDANT
	    this.getUserIdCorrespondent = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.idCorrespondentSF) && user.idCorrespondentSF != null ? user.idCorrespondentSF : _self.facticeIdCorrespondent;
	    };

	    // RECUPERER NOM CORRESPONDANT
	    this.getLastName = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.lastName) ? user.lastName : _self.errorMessage;
	    };

	    // RECUPERER PRENOM CORRESPONDANT
	    this.getFirstName = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.firstName) ? user.firstName : _self.errorMessage;
	    };

	    // RECUPERER CIVILITE CORRESPONDANT
	    this.getCivility = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.civility) ? user.civility : _self.errorMessage;
	    };

	    // RECUPERER LE NOM DU CLIENT (ENTREPRISE)
	    this.getClientName = function () {

	        var user = JSON.parse(sessionStorage.getItem(_self.userObjectName));
	        return user != null && angular.isDefined(user.clientName) ? user.clientName : _self.errorMessage;
	    };

	    this.getValue = function (key) {

	        return JSON.parse(sessionStorage.getItem(key));
	    };

	    this.getUserIdClientSF = function () {
	        return _self.getUserIdSF();
	    };

	    this.getUserIdClientSAP = function () {
	        return _self.getUserIdSAP();
	    };

	    this.getUserIdCorrespondentSF = function () {
	        return _self.getUserIdCorrespondent();
	    };

	    // SUPPRESSION DES DONNEES UTILISATEUR
	    this.clearUserInfo = function () {
	        sessionStorage.clear();
	        var cookiesList = $cookies.getAll();
	        for (var key in cookiesList) {
	            console.log("The key is : ", key);
	            console.log("The value is : ", cookiesList[key]);

	            if (key != languageCookieName) {

	                console.log("remove cookie : ", key);
	                $cookies.remove(key, { path: '/' });
	            }
	        }
	        $cookies.remove(_self.cookieClientSFname, { path: '/' });
	        $cookies.remove(_self.cookieClientSAPname, { path: '/' });

	        //A MODIFIER
	        $cookies.remove(_self.cookieOpenAM, {
	            domain: '.' + window.location.hostname,
	            path: '/'
	        });
	    };

	    this.addClientSFcookie = function (cookieValue) {
	        $cookies.put(_self.cookieClientSFname, cookieValue);
	    };

	    this.addClientSAPcookie = function (cookieValue) {
	        $cookies.put(_self.cookieClientSAPname, cookieValue);
	    };

	    this.addOrgaCommercialeToSession = function (orgaCommerciale) {

	        sessionStorage.setItem(_self.orgaCommercialeName, orgaCommerciale);
	    };

	    this.getOrgaCommerciale = function () {

	        return sessionStorage.getItem(_self.orgaCommercialeName);
	    };

	    this.getFilesContext = function () {
	        var contextRegEx = /(adelphe)|(ad)/;
	        var hostname = window.location.hostname;
	        if (contextRegEx.test(hostname)) return 'adelphe';else return 'default';
	    };

	    // ENREGISTREMENT DES DONNEES UTILISATEURS DANS LA SESSION ET CREATION DES COOKIES
	    this.setSessionStorageAndCookies = function (data) {

	        //ENREGISTREMENT DU NOM PRENOM ET CIVILITE
	        if (angular.isDefined(data.lastName) && data.lastName != null) _self.userInfo.lastName = data.lastName[0];
	        if (angular.isDefined(data.firstName) && data.firstName != null) _self.userInfo.firstName = data.firstName[0];

	        if (angular.isDefined(data.title) && data.title != null) _self.userInfo.civility = data.title[0];

	        // ENREGISTREMENT DES INITIALS
	        if (angular.isDefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName)) _self.userInfo.initials = _self.userInfo.firstName.substring(0, 1).toUpperCase() + _self.userInfo.lastName.substring(0, 1).toUpperCase();else if (angular.isDefined(_self.userInfo.firstName) && angular.isUndefined(_self.userInfo.lastName)) _self.userInfo.initials = _self.userInfo.firstName.substring(0, 1).toUpperCase();else if (angular.isUndefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName)) _self.userInfo.initials = _self.userInfo.lastName.substring(0, 1).toUpperCase();

	        if (data.listCompany != null && data.listCompany[0] != null) _self.listClients = data.listCompany;

	        _self.addOrgaCommercialeToSession(data.orgaCommerciale);

	        _self.addUser(_self.userInfo);
	        _self.add(_self.listClientsObjectName, _self.listClients);

	        if (data.Conseiller) {
	            return _self.urlConseillerHome;
	        }

	        if (angular.isDefined(_self.listClients) && _self.listClients.length == 1) {

	            _self.addClientInfosToSession(_self.listClients[0]);
	            return _self.urlHome;
	        } else {

	            return _self.urlChooseClient;
	        }
	    };

	    // resoration des informations de session après une ouverture d'un nouvel onglet
	    this.restoreSession = function (data) {

	        // recuperer l'ID sales force du cookie
	        var clientIdSf = $cookies.get(_self.cookieClientSFname);
	        console.log('test cookie id Client SF : ', clientIdSf);

	        //ENREGISTREMENT DU NOM PRENOM ET CIVILITE
	        if (angular.isDefined(data.lastName) && data.lastName != null) _self.userInfo.lastName = data.lastName[0];
	        if (angular.isDefined(data.firstName) && data.firstName != null) _self.userInfo.firstName = data.firstName[0];

	        if (angular.isDefined(data.title) && data.title != null) _self.userInfo.civility = data.title[0];

	        // ENREGISTREMENT DES INITIALS
	        if (angular.isDefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName)) _self.userInfo.initials = _self.userInfo.firstName.substring(0, 1).toUpperCase() + _self.userInfo.lastName.substring(0, 1).toUpperCase();else if (angular.isDefined(_self.userInfo.firstName) && angular.isUndefined(_self.userInfo.lastName)) _self.userInfo.initials = _self.userInfo.firstName.substring(0, 1).toUpperCase();else if (angular.isUndefined(_self.userInfo.firstName) && angular.isDefined(_self.userInfo.lastName)) _self.userInfo.initials = _self.userInfo.lastName.substring(0, 1).toUpperCase();

	        if (data.listCompany[0] != null) _self.listClients = data.listCompany;

	        _self.addOrgaCommercialeToSession(data.orgaCommerciale);

	        _self.addUser(_self.userInfo);
	        _self.add(_self.listClientsObjectName, _self.listClients);

	        if (angular.isDefined(clientIdSf)) {

	            console.log(_self.listClients);
	            var cInfo = _self.listClients.filter(function (data) {
	                return data.idSF == clientIdSf;
	            });

	            console.log('object user : ', cInfo[0]);

	            _self.addClientInfosToSession(cInfo[0], false);
	        }
	    };

	    // AJOUT DES INFORMATIONS RELATIVES AU CLIENT DANS LA SESSION
	    this.addClientInfosToSession = function (clientInfo, createCookie) {

	        createCookie = angular.isDefined(createCookie) ? createCookie : 'true';

	        console.log('ACTS - clientInfo : ', clientInfo);
	        console.log('ACTS - createCookie : ', createCookie);

	        _self.userInfo = _self.getUser();

	        _self.userInfo.idClientSAP = clientInfo.idSAP;
	        _self.userInfo.idClientSF = clientInfo.idSF;
	        _self.userInfo.clientName = clientInfo.libelle;
	        _self.userInfo.idCorrespondentSF = clientInfo.idCorespondant;

	        if (createCookie) {
	            $cookies.put(_self.cookieClientSFname, _self.userInfo.idClientSF, { path: '/' });
	            $cookies.put(_self.cookieClientSAPname, _self.userInfo.idClientSAP, { path: '/' });
	        }

	        _self.addUser(_self.userInfo);
	    };

	    // VERIFICATION SI UN NUMERO CLIENT EXIST BIEN EN SESSION
	    this.isClientNumberExistInSession = function (clientNumber) {

	        _self.listClients = _self.getListClients();

	        var clientNumberRegEx = new RegExp('^' + clientNumber + '$', 'i');

	        if (!Array.isArray(_self.listClients)) return false;

	        for (var i = 0; i < _self.listClients.length; i++) if (_self.listClients[i].idSAP.match(clientNumberRegEx) != null) return true;

	        return false;
	    };

	    // AJOUTER UN CLIENT A LA SESSION
	    this.addClientToSession = function (clientInfo) {

	        _self.listClients = _self.getListClients();
	        _self.listClients.push(clientInfo);
	        //_self.listClients.sort(function(a, b){});
	        _self.add(_self.listClientsObjectName, _self.listClients);
	    };

	    // RECUPERER LA LISTE DES ENTREPRISES RATTACCHCEES A UN UTILISATEURS
	    this.getListClients = function () {

	        var listClients = JSON.parse(sessionStorage.getItem(_self.listClientsObjectName));
	        return listClients != null ? listClients : _self.errorMessage;
	    };

	    // Supprime un client de la liste
	    this.removeClient = function (idSf) {
	        var indexToRemove = -1;
	        _self.listClients = _self.getListClients();
	        for (var index = 0; index < _self.listClients.length; index++) {
	            if (_self.listClients[index].idSF == idSf) {
	                indexToRemove = index;
	                break;
	            }
	        }

	        if (indexToRemove >= 0) {
	            _self.listClients.splice(indexToRemove, 1);
	        }
	        _self.add(_self.listClientsObjectName, _self.listClients);
	    };

	    // Supprime les information liées à l'nentreprise de la session
	    this.resetCompany = function () {
	        _self.userInfo = _self.getUser();

	        _self.userInfo.idClientSAP = undefined;
	        _self.userInfo.idClientSF = undefined;
	        _self.userInfo.clientName = undefined;
	        _self.userInfo.idCorrespondentSF = undefined;

	        $cookies.remove(_self.cookieClientSFname);
	        $cookies.remove(_self.cookieClientSAPname);

	        _self.addUser(_self.userInfo);
	    };

	    // fonction qui permet de rechercher dans un tableau à la manière de .find() de javascript (non disponnible sur IE)
	    this.searchInArray = function (array, searchFunction, dataObject) {

	        if (!angular.isArray(array) || array.length == 0 || !angular.isFunction(searchFunction)) {
	            console.log('searchInArray function : inccorect arguments');
	            return;
	        }

	        for (var i = 0; i < array.length; i++) {
	            if (searchFunction.call(dataObject, array[i])) return array[i];
	        }
	    };

	    this.findInArray = function (array, searchFunction, dataObject) {

	        if (!angular.isArray(array) || array.length == 0 || !angular.isFunction(searchFunction)) {
	            console.log('findInArray function : inccorect arguments');
	            return;
	        }

	        for (var i = 0; i < array.length; i++) {
	            if (searchFunction.call(dataObject, array[i])) return true;
	        }

	        return false;
	    };

	    this.createCookieConseiller = function (uid) {

	        console.log('create cookie Conseiller uid ....');
	        $cookies.put(cookieConseillerUidName, uid, { path: '/' });
	        console.log('cookie conseiller uid created');
	    };

	    this.isConseiller = function () {

	        var cookieConseillerUid = $cookies.get(cookieConseillerUidName);

	        console.log('le cookie conseiller : ', cookieConseillerUid);

	        if (cookieConseillerUid) return true;else return false;
	    };

	    this.getCookieConseiller = function () {
	        return $cookies.get(cookieConseillerUidName);
	    };

	    return this;
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var ctrl = __webpack_require__(77);
	var moduleName = 'common.error';

	angular.module(moduleName, []);
	angular.module(moduleName).controller('errorCtrl', [ctrl]);
	angular.module(moduleName).component('commonerror', {
	    template: __webpack_require__(36),
	    controller: 'errorCtrl',
	    controllerAs: 'errorCtrl',
	    bindings: {
	        errors: '='
	    }
	});

	module.exports = moduleName;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = function () {
	    this.errors = [];
	};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var errorModule = __webpack_require__(76);

	angular.module('common.views', [errorModule]);

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var translateProvider = __webpack_require__(70);
	var httpInterceptorService = __webpack_require__(67);
	var httpInterceptorProvider = __webpack_require__(66);
	var errorMessagesService = __webpack_require__(8);
	var loadingTemplate = __webpack_require__(37);

	__webpack_require__(78);
	__webpack_require__(74);
	__webpack_require__(71);
	__webpack_require__(65);
	__webpack_require__(46);
	__webpack_require__(68);
	//require('./app/directives/common/common');

	angular.module('edc-commons', ['common.views', 'common.user', 'common.unauthorizedPopIn', 'common.errorMessages', 'common.directives', 'common.resource']);
	angular.module('edc-commons').config(['$translateProvider', translateProvider]);
	angular.module('edc-commons').factory('httpInterceptorService', ['$cookies', '$q', 'unauthorizedPopInService', 'userService', httpInterceptorService]);
	angular.module('edc-commons').config(['$httpProvider', httpInterceptorProvider]);

	angular.module('edc-commons').component('loading', {
		template: loadingTemplate,
		bindings: {}
	});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(80)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!./loaders.css", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!./loaders.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ })
]);