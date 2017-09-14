module.exports = function() {

    const FILE_TYPE = ['application/pdf', 'image/png', 'image/jpeg', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const FILE_SIZE_MAX = 2097152;

    this.addValidators = function(model, scope, element) {


        model.$validators.fileType = function(){

            //scope.fileUploadControl = element[0].files[0];
            var file = scope.fileUploadControl;
            console.log('file value : ', file);
            if(!file)
                return true;
            else if(angular.isDefined(scope.extensionControl) && angular.isArray(scope.extensionControl))
                for(var i=0; i<scope.extensionControl.length; i++){
                    if(checkExtension(file.name, scope.extensionControl[i]))
                        return true;
                }
            else
                for(var i=0; i< FILE_TYPE.length; i++){
                    if(FILE_TYPE[i] == file.type)
                        return true;
                }

            return false;
        }

        model.$validators.fileSize = function(){

            //scope.fileUploadControl = element[0].files[0];
            var file = scope.fileUploadControl;
            if(!file)
                return true;
            else
                return file.size <= FILE_SIZE_MAX;
        }

        if(!scope.notRequired) {
            model.$validators.fileEmpty = function(){

                //scope.fileUploadControl = element[0].files[0];
                var file = scope.fileUploadControl;
                console.log('upload file empty validator : ', file);
                if(!scope.notRequired && !file)
                    return false;
                else
                    return true;
            }
        }

    }

    var checkExtension = function(name, extension) {

        return name.substr(name.lastIndexOf('.')+1) == extension;
    }

    return this;
}
