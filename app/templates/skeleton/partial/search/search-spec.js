describe('<%= _.camelize(appname) %>_SearchCtrl', function() {

    beforeEach(module('<%= _.camelize(appname) %>'));

    var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('<%= _.camelize(appname) %>_SearchCtrl', {$scope: scope});
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);

    }));

});
