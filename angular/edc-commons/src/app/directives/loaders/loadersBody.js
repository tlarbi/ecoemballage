module.exports =  function () {
    return {
        restrict: 'E',
        scope: {
            type: '@'
        },
        controller: ['$scope', '$attrs', require('./loadersCtrl')],
        controllerAs: 'loadersCtrl',
        template: require('./loaders.html'),
        css: require('./loaders.css'),
        replace: true,
        transclude: true,
        link: function (scope, element, attrs, ctrl) {
            console.log('loaders directive injections : ', scope, element, attrs, ctrl);
            ctrl.pasteLoadersToBody();
            if(attrs.$attr.hasOwnProperty('covered')) {
                ctrl.showFilter();
                scope.$on('$destroy', function(){ctrl.hideFilter();});
            }
        }
    }
}
