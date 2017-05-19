'use strict';

describe('Controller Tests', function() {

    describe('Search Controller Tests', function() {

    	var $scope;
        var $state;
        var $q;
        var createController;

		beforeEach(inject (function($injector){

		    $q = $injector.get('$q');
		    $scope = $injector.get('$rootScope').$new();
		    $state = $injector.get('$state');

		    spyOn($state, 'go');

			var locals = {
			     '$scope': $scope,
			     '$state': $state
			};
			createController = function() {
			    $injector.get('$controller')('SearchController as vm', locals);
			};
		}));

      it('Check date is set', function () {
      	createController();
        expect($scope.vm.date).toBeTruthy();
      });

      it('Check calendar state set to true', function () {
      	createController();
        $scope.vm.openCalendar($scope.vm.date);
        expect($scope.vm.datePickerOpenStatus).toBeTruthy();
      }); 

      it('Validate state change', function () {
      	createController();
      	$scope.vm.goSearch();
  		expect($state.go).toHaveBeenCalled();
      });  
});

});
