/*jshint latedef: nofunc */
(function () {
    'use strict';
    angular.module('core').controller('core_ToolbarCtrl', toolbar);

    function toolbar($scope, sidenav ) {
        /* jshint validthis: true */
        var vm = this;
        vm.toggleSidenavLeft = sidenav.left.toggle;

        vm.enableSidenavRight = sidenav.right.switchOn;


    }
})();
