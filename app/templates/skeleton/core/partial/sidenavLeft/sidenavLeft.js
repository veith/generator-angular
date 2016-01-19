(function () {
    'use strict';
    angular.module('core').controller('core_SidenavleftCtrl', sidenavLeft);

    function sidenavLeft($scope, sidenav, MenuDS) {
        /* jshint validthis: true */
        var vm = this;
        vm.sidenav = sidenav.left;
        vm.close = sidenav.left.switchOff;

        vm.menu = {};




        MenuDS.getMenuMock()
            .then(function (res) {
                vm.menu = res;

            });


        vm.admin = [
            {
                link : '/search',
                title: 'Trash',
                icon: 'av:playlistAdd'
            },
            {
                link : 'showListBottomSheet($event)',
                title: 'Settings',
                icon: 'action:OK'
            }
        ];



    }

})();
