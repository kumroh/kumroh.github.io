(function(){
var app = (function() {

    var getModule = function() {
    	console.log('called.......');
        return angular.module('appModule', ['appModule.controllers', 'appModule.models', 'ngRoute']);
    };

    return {
        getRegisteredModule: getModule
    };
}()); 

window.myApplication = app.getRegisteredModule();
}());
 