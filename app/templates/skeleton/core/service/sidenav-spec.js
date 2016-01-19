describe('sidenav', function () {

    beforeEach(module('core'));

    it('sollte nach dem Einschalten sichtbar sein', inject(function (sidenav) {
        sidenav.right.switchOn();
        expect(true).toEqual(sidenav.right.visible);

    }));

    it('sollte nach dem Toggeln nach unsichtbar sichtbar sein', inject(function (sidenav) {
        sidenav.right.switchOff();
        sidenav.right.toggle();
        expect(true).toEqual(sidenav.right.visible);

    }));

    it('sollte nach 3 mal Toggeln nach unsichtbar wieder sichtbar sein', inject(function (sidenav) {
        sidenav.right.switchOff();
        sidenav.right.toggle();
        sidenav.right.toggle();
        sidenav.right.toggle();
        expect(true).toEqual(sidenav.right.visible);

    }));

    it('sollte nach ausschalten unsichtbar sein', inject(function (sidenav) {
        sidenav.right.switchOn();
        sidenav.right.toggle();
        sidenav.right.toggle();
        sidenav.right.switchOff();
        expect(false).toEqual(sidenav.right.visible);

    }));

});
