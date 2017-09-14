module.exports = function() {

    var _self = this;

    var errorClass = 'error';
    var successClass = 'success';

    this.setClasses = function(isValid, classList, value) {

        //console.log('setting classes in common services : ', isValid, classList, value)
        if(isValid) {
            classList.remove(errorClass);
            classList.add(successClass);
            if(angular.isUndefined(value) || value == '')
                classList.remove(successClass);
        } else {
            classList.remove(successClass);
            classList.add(errorClass);
        }

    }

    this.setClassValid = function(classList, value) {
        classList.remove(errorClass);
        if(angular.isDefined(value) && value != '')
            classList.add(successClass);
    }

    this.setClassInvalid = function(classList) {
        classList.remove(successClass);
        classList.add(errorClass);
    }

    this.unsetClasses = function(classList) {
        classList.remove(successClass);
        classList.remove(errorClass);
    }

    this.setBlurFunction = function(element) {

        element.onblur = function(element) {
            console.log('grap blur : ', element);

            var isValid = element.target.classList.contains('ng-valid');
            _self.setClasses(isValid, element.target.classList, element.target.value);

            element.target.onblur = null;
        }
    }

    return this;
}
