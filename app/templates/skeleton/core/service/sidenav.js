/*jshint latedef: nofunc */
angular.module('core').factory('sidenav', function ($mdSidenav) {

    var sidenav = {
        left: {


            toggle: function () {
                $mdSidenav('sidenavLeft').toggle();

            },
            switchOn: function () {
                $mdSidenav('sidenavLeft').open();
            } ,
            switchOff: function () {
                $mdSidenav('sidenavLeft').close();
            }
        },
        right: {
            visible: false,
            toggle: function () {
                sidenav.right.visible = !sidenav.right.visible;
            },
            switchOn: function () {
                sidenav.right.visible = true;
            },
            switchOff: function () {
                sidenav.right.visible = false;
            }
        }
    };

    return sidenav;
});
