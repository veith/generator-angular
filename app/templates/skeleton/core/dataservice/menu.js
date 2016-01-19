/*jshint latedef: nofunc */
(function () {
    'use strict';
    angular
        .module('core')
        .factory('MenuDS', menu);


    function menu($http, logger, $q) {
        return {
            getMenu: getMenuXHR,
            getMenuMock: getMenuMock
        };

        function getMenuMock() {
            var defer = $q.defer();
            var data = [
                {
                    "link": "/marco",
                    "title": "MOCKDATA",
                    "icon": "action:dash"
                },
                {
                    "link": "ds",
                    "title": "Friends",
                    "icon": "navigation:forward"
                },
                {
                    "link": "",
                    "title": "Messages",
                    "icon": "action:NotOK"
                }
            ];

            defer.resolve(data);
            return defer.promise;
        }

        function getMenuXHR() {
            return $http.get('/api/menu.json')
                .then(getMenuComplete)
                .catch(getMenuFailed);

            function getMenuComplete(response) {
                // reduziere auf payload
                return response.data;
            }

            function getMenuFailed(error) {
                logger.error('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();


