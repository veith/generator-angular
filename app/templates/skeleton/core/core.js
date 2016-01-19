(function() {
    angular.module('core', []);

        angular.module('core').config(function ($routeProvider) {

            $routeProvider.when('/',{templateUrl: 'core/partial/yps/yps.html'});
            /* Add New Routes Above */

        });

})();
