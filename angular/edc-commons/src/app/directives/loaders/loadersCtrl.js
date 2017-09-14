module.exports = function($scope, $attrs) {

    var contentClass = 'main-container';
    var classOverflowHidden = 'overflow-hidden';
    var classFilterBlur = 'filter-blur';
    var modalClass = 'modal';
    var _self = this;

    this.$onInit = function() {

        console.log('passed scope to controller : ', $scope, $attrs)
        selectType($scope.type);
    }

    this.showFilter = function() {

        console.log('show filter !!');

        body = document.getElementsByTagName('body');
        filter = document.createElement('div');
        content = document.getElementsByClassName(contentClass);
        modal = document.getElementsByClassName(modalClass);
        filter.id = 'lizar';
        if(body[0]) {
            body[0].appendChild(filter);
            body[0].classList.add(classOverflowHidden);
        }
        if(content[0])
            content[0].classList.add(classFilterBlur);
        if(modal[0])
            modal[0].classList.add(classFilterBlur);

    }

    this.hideFilter = function() {
        console.log('hide filter !!');

        body = document.getElementsByTagName('body');
        filter = document.getElementById('lizar');
        content = document.getElementsByClassName(contentClass);
        modal = document.getElementsByClassName(modalClass);
        if(body[0]) {
            body[0].removeChild(filter);
            body[0].classList.remove(classOverflowHidden);
        }
        if(content[0])
            content[0].classList.remove(classFilterBlur);
        if(modal[0])
            modal[0].classList.remove(classFilterBlur);

    }


    this.pasteLoadersToBody = function() {
        var body = document.getElementsByTagName('body');
        var loaders = document.getElementById('loaders');
        body[0].appendChild(loaders);
    }

    var selectType = function(type) {
        switch (type) {
            case 'balls':
                _self.loadballsFlag = true;
                break;
            case 'quarter':
                _self.quarterFlag = true;
                break;
            default:

        }
    }

}
