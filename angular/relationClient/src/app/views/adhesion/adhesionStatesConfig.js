module.exports = function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');



    //console.log('state configuration', $stateProvider);

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        template: '<adhesiontest></adhesiontest>'
        //controller: function () { }
        //component: 'relationClient.adhesion.adhesiontest'
    });

    $stateProvider.state('step', {
        url: '/step',
        template: require('./step.html'),
        resolve: { test: function () { return {value: 'nihao'}; } }
        //template: '<div>List Steps</div><ui-view></ui-view>'
    });

    $stateProvider.state('step.step1', {
        url: '/1',
        template: '<comp1></comp1>'
        //component: 'relationClient.comp1.comp1'
    });

    $stateProvider.state('step.step2', {
        url: '/2',
        template: '<comp2></comp2>'
    });
}
