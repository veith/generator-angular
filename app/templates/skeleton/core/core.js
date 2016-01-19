(function () {
    angular.module('core', ['ngMaterial']);

    angular.module('core').config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('deep-orange')
            .backgroundPalette('grey');
    });


})();
