Développement des applications web avec Anuglar
===============
### <a name="sommaire"></a> Sommaire

- [Get started](#get-started) 
- [Webb application intégrée à Drupal](#webapp-drupal) 
- [Conception générale](#conception-generale)
    - [applications modulaires](#applications-modulaires)
    - [Contenu d'un module](#contenu-module)
- [Création d'un component](#creation-component) 
    - [Initialisation d'un component](#init-component)
- [Bonnes pratiques](#bonnes-pratiques) 
- [Configuration](#configuration) 


#### <a name="get-started"></a> Get started

> **prérecquis**   
Installer la dernière version de nodejs ([lien](#https://nodejs.org/en/))  
Puis installer le client gulp  : 
```javascript
    npm install --global gulp-cli
```


1. **Installer les dépendances du projet** :  

>Ouvrir une invite de commande windows à la racine du projet et lancer les commandes :   
```javascript
    npm install gulp // A executer uniquement la première fois
    npm install
```

2. **Lancer l'application en mode développement** :

>Il faut ouvrir une invite de commande à la racine du projet et executer la commande suivante :
```javascript
    gulp serve
```
>Vous pouvez ainsi accéder à l'application dans votre navigateur avec l'adresse : localhost:3000  
A chaque modification de code le navigateur se met à jour.

3. **Génération des fichiers api** 

>Il faut ouvrir une invite de commande à la racine du projet et executer la commande suivante :
```javascript
    gulp build
```
>Cela permet la génération des fichiers js qui seront importés par les autres modules.

4. **l'ensemble des commandes gulp** :

>Voici la liste des commandes que l'on peut exécuter pour tester ou générer les fichiers js de chaque projet.  
Pour les utiliser il faut ouvrir une invite de commande à la racine du projet et executer les commandes suivantes :
- **gulp build** : *génération des fichiers*
- **gulp serve** : *lancement d'un serveur http avec l'application mis à jour à chaque modification de code*
- **gulp serve:dist** : *lancement d'un serveur http avec le js versionné*
- **gulp test** : *lancement des tests (fichier .spec)*
- **gulp test:auto** : *lancement des tests en continue à chaque modification de code*


>Note :  Pour développer sur plusieurs modules en même sans avoir à versionner et publier les modifications il faut utiliser la commande "npm link". 
```javascript
exemple pour le module edc-commons :
Exécuter la commande suivante à la racine de edc-commons :
    npm link
Puis exécuter la commande suivante à la racine de edc-declaration :
    npm link edc-commons
```
Cela a pour effet d'ajouter un lien symbolique dans edc-declaration vers edc-commons. Ainsi chaque modification de code du projet edc-commons sera visible par edc-declaration.


### <a name="webapp-drupal"></a> Webb application intégrée à Drupal

>Les applications EDC sont intégrées au CMS Drupal. Le CMS va gérer l'affichage du contenu static et dynamique.
Deux types de comportements sont prévus :

1. Drupal affiche un composant angular :  
- *Importer le js généré*
- *Import du css*
- *Ajouter ng-app avec le nom du module désiré*
- *Ajouter le composant angular que l'on désire visualiser.*


2. Angular affiche un template Drupal :   
*Utilisation de l'api REST Drupal pour récupérer des fragments html à inclure dans la page avec angular.*


### <a name="conception-generale"></a> Conception générale 


##### <a name="applications-modulaires"></a> applications modulaires  


>L'application est décomposée en plusieurs modules fonctionnelles. Ce choix de modularité s'est fait avant tout pour séparer les responsabilité et minimiser les impacts des modifications de code. De plus cela permet de travailler plus facilement en équipe.  
voici  la liste des modules :
- **edc** : *point d'entré de l'application web edc (contient l'ensemble des sous-modules)*
    -   **edc-commons** : *contient l'ensemble des composants communs des modules* 
    -   **edc-declaration** : *module du dommaine fonctionnel declaration*
    -   **edc-gestion-client** : *module du dommaine fonctionnel gestion-client*

##### <a name="contenu-module"></a> Contenu d'un module


>chaque module est composé des répertoires suivants :

- **/conf** : *fichier de configuration des différents outils*
- **/gulp tasks** : *tâche gulp que l'on peut excécuter*
- **/src** : *répertoire qui contient tout l'applicatif*
    - **/resources** : *contient les appels aux resources REST*
    - **/commons** : *contient tout ce qui est commun à l'application*
    - **/views** : *contient tous les composants de l'application*
       - **/component** : *vue sous forme de component angular*
            - **component.html** : *écran du component*
            - **Component.js** : *initialisation du component angular dans l'application*
            - **ComponentCtrl.js** : *controller du component*
            - **CompoenntService.js** : *service du component*
- **gulpfile.js** : *point d'entrée de la configuration de gulp*
- **package.json** : *fichier qui décrit l'application - nom,  version, dependances, etc... ([lien vers la documentation officielle](https://docs.npmjs.com/files/package.json))*


### <a name='creation-component'></a> Création d'un component 

>Un component est un template d'html associé à du code javascript. Cela permet de faire des morceaux d'écran ***autonomes*** ([lien vers la doc](#https://docs.angularjs.org/guide/component).  
 La bonne pratique veut qu'un component ne doit avoir qu'une seule responsabilité et doit être autonome. Il ne faut donc pas avoir peur d'en créer un dès que nécessaire.  
 
##### <a name="init-component"></a> Initialisation d'un component

***Création du component***  
>Le nommage du fichier doit être : NomDuComposant.js
```javascript
//NomDuComposant.js
var ctrl = require('./RecommandationCtrl'); // récupération du controller
var service = require('./RecommandationService'); //récupération du service
var moduleName = 'declaration.recommandation'; // nom du module qui va contenir le component
angular.module(moduleName, []); // initialisation du module

//initialisation du controller dans le module
angular.module(moduleName).controller('recommandationCtrl', ['recommandationService',ctrl]);
//initialisation du service dans le module
angular.module(moduleName).factory('recommandationService', ['declarationResource', service]);

angular.module('moduleName').component('componentName', { // nom du component
  template: require('./html-name.html'), // lien vers le html lié au composant
  controller: 'controllerName', //nom du controller lié au component
  controllerAs: 'controllerAlias', //alias utilisé dans le html pour faire appel au controller
});
```
***Création du controller associé***
>Le controller est codé dans un fichier séparé du component (pour améliorer la lisibilité). Il a uniquement pour responsabilité de gérer l'affichage des données. Tout ce qui est règle fonctionnelle doit être portée par le service.   
Le nommage du fichier doit être :  NomDuComposantCtrl.js

```javascript
//NomDuComposantCtrl.js
     module.exports = function (recommandationService) { 
         var self = this; // On met dans une variable "this" pour pouvoir y faire appel dans les fonctions.
         self.typesDeclarations = []; // ajout des variables dans le controller directement et non dans le scope
         //...
    });
};
```

***Création du service associé***
>Le service est également codé dans un fichier spécifique. Le nommage du fichier doit être :  NomDuComposantService.js
```javascript
//NomDuComposantService.js
module.exports = function(declarationResource){ 
    var self = this;
    self.recommandations = declarationResource.getListTypesDeclaration;
   return self;
}
```
***Création du fichier html associé***
>Le service est également codé dans un fichier spécifique. Le nommage du fichier doit être :  nomDuComposant.html
```html
<div>{{aliasCtrl.variable}}<div>
```

##### <a name="bonnes-pratiques"></a> Bonnes pratiques

>Dans la documentation officelle d'angular nous pouvons retrouver une grande partie des bonnes pratiques à appliquer ([lien vers la doc officielle](#https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)).  
Les bases sont : 
- Le développement modulaire : *Créer un module par responsabilité*
- Séparer les fichiers en fonction de leur contenu : *créer un fichier spécifique pour le controller, le service etc...*
- Séparation des dossiers par composant fonctionnel
- Ne pas utiliser le "$scope" dans les controllers
- Faire des directives réutilisables plutôt que dupliquer le code.
- Eviter les dépendances entre module fonctionnel

##### <a name="Configuration"></a> Configuration

>Pour la gestion des dépendances et des packages nous utilisons webpack ([lien](#http://webpack.github.io/docs/what-is-webpack.html)).  
Celui-ci permet de modulariser le code comme nous le souhaitons. Pour cela il y a les fichiers de configuration dans le répertoire "/conf".   
Nous générons 3 fichiers js à chaque build : 
- **standelone-version.js** : fichier js pouvant être importé seul dans une page html
- **api.js** : fichier js que l'on peut prendre en dépendance d'un autre projet
- **vendor-version.js** : fichier js contenant toutes les librairies externe

