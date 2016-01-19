(function () {
    'use strict';
    angular.module('core').controller('core_SidenavrightCtrl', sidenavRight);
    /* jshint validthis: true */
    function sidenavRight($scope, sidenav) {
        var vm = this;
        vm.close = sidenav.right.switchOff;
        vm.service = sidenav.right;
    }

})();
