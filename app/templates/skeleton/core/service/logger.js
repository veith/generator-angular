/*jshint latedef: nofunc */
/**
 * Logger Factory
 * @namespace Factories
 */
(function() {
    angular
        .module('core')
        .factory('logger', logger);

    /**
     * @namespace Logger
     * @desc Application wide logger
     * @memberOf Factories
     */
    function logger($log) {
        var service = {
            error: logError,
            info:logInfo
        };
        return service;

        ////////////

        /**
         * @name logError
         * @desc Logs errors
         * @param {String} msg Message to log
         * @returns {String}
         * @memberOf Factories.Logger
         */
        function logError(msg) {
            var loggedMsg = 'Error: ' + msg;
            $log.error(loggedMsg);
            return loggedMsg;
        }
        /**
         * @name logInfo
         * @desc Logs infos
         * @param {String} msg Message to log
         * @returns {String}
         * @memberOf Factories.Logger
         */
        function logInfo(msg) {
            var loggedMsg = 'Info: ' + msg;
            $log.info(loggedMsg);
            return loggedMsg;
        }
    }
})();
