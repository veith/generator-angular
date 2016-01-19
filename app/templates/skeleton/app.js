angular.module('<%= _.camelize(appname) %>', ['<%= routerModuleName %>','core']);
<% if (!uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($routeProvider) {
    $routeProvider.when('/',{templateUrl: 'partial/home/home.html'});
    $routeProvider.when('/search',{templateUrl: 'partial/search/search.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});
<% } %><% if (uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});
<% } %>
angular.module('<%= _.camelize(appname) %>').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
