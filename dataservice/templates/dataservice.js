/*jshint latedef: nofunc */
(function () {
    'use strict';
    angular
        .module('<%= appname %>')
        .factory('<%= servicename %>', <%= _.camelize(name) %>);


    function <%= _.camelize(name) %>($http, logger,$q) {
        return {
            get<%= _.capitalize(_.camelize(name)) %>: get<%= _.capitalize(_.camelize(name)) %>,
            search<%= _.capitalize(_.camelize(name)) %>: search<%= _.capitalize(_.camelize(name)) %>,
        };

        // $http.get example
        function get<%= _.capitalize(_.camelize(name)) %>() {
            return $http.get('/api/<%= _.camelize(name) %>')
                .then(get<%= _.capitalize(_.camelize(name)) %>Complete)
                .catch(get<%= _.capitalize(_.camelize(name)) %>Failed);

            function get<%= _.capitalize(_.camelize(name)) %>Complete(response) {
                return response.data.results;
            }

            function get<%= _.capitalize(_.camelize(name)) %>Failed(error) {
                logger.error('XHR Failed for get<%= _.capitalize(_.camelize(name)) %>.' + error.data);
            }
        }

        // MockData JSON example
        function search<%= _.capitalize(_.camelize(name)) %>(term) {
            var defer = $q.defer();

            var data = {name:"object",searchterm:term};

            defer.resolve(data);
            return defer.promise;
        }


    }
})();


