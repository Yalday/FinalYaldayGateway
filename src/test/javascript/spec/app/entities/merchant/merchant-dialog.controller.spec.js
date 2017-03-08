/*'use strict';

describe('Dialog Controller Tests', function() {

    describe('Merchant Management Detail Controller', function() {

//details  '$rootScope', '$stateParams', 'previousState'
//dialog '$timeout', '$stateParams', '$uibModalInstance'
        var $scope;
        var $timeout;
        var MockEntity, MockMerchant, MockStateParams;
        var createController;

        beforeEach(inject(function(_$timeout_, $injector) {
            $scope = $injector.get('$rootScope').$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockStateParams = jasmine.createSpy('MockStateParams');
            MockMerchant = jasmine.createSpy('MockMerchant');
            $timeout = _$timeout_;

            var locals = {
                '$timeout': $timeout,
                '$scope': $scope,
                '$stateParams': MockStateParams,
                '$uibModalInstance': null,
                'entity': MockEntity,
                'Merchant': MockMerchant
            };
            createController = function() {
                $injector.get('$controller')("MerchantDialogController", locals);
            };
        }));

      it('should set scope', function () {
              createController();
              expect($scope).toBeTruthy();
      });

      //test clear() function

      it('should set scope', function () {
              createController();
              expect($scope).toBeTruthy();
      });

     //test save()

      it('should set scope', function () {
              createController();
              expect($scope).toBeTruthy();
      });

      //test onSaveSuccess()

      it('should set scope', function () {
              createController();
              expect($scope).toBeTruthy();
      });

      //test onSaveError()
      it('should set scope', function () {
              createController();
              expect($scope).toBeTruthy();
      });

      //test openCalendar()
      it('should set scope', function () {
              createController();
              expect($scope).toBeTruthy();
      });


    });

});
*/
