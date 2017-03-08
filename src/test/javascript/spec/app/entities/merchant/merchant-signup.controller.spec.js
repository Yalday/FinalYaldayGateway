'use strict';

describe('Controller Tests', function() {

 describe('Merchant SignUp Controller', function() {

     var $scope, $rootScope, MockTimeout, $q;
      var MockEntity, MockMerchant;

     var MockStateParams;
      var $uibModalInstance;

     var createController;

     beforeEach(inject(function($injector) {

      //Constructor is  MerchantDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Merchant)

         $q = $injector.get('$q');
          $scope = $injector.get('$rootScope').$new();
          $uibModalInstance = jasmine.createSpyObj('$uibModalInstance', ['cancel', 'dismiss']);
          MockStateParams = jasmine.createSpy('MockStateParams');
          MockTimeout = jasmine.createSpy('MockTimeout');
          MockEntity = jasmine.createSpy('MockEntity');
          MockMerchant = jasmine.createSpyObj('MockMerchant', ['save', 'update', 'onSaveError']);


         var locals = {
              '$timeout': MockTimeout,
              '$scope': $scope,
              '$stateParams': MockStateParams,
              '$uibModalInstance': $uibModalInstance,
              'entity': MockEntity,
              'Merchant': MockMerchant

         };

         createController = function() {
              $injector.get('$controller')("MerchantDialogController as vm", locals);
          };
      }));

      it('test1', function() {

         createController();
         $scope.vm.merchant.id = null;
         $scope.vm.save();
         expect(MockMerchant.save).toHaveBeenCalled();

      });


      it('test2', function() {

         createController();
         $scope.vm.save();
         expect($scope.vm.isSaving).toBeTruthy();

      });

     it('test3', function() {

        createController();
        $scope.vm.merchant.id = 1;
        $scope.vm.save();
        expect(MockMerchant.update).toHaveBeenCalled();

     });

       it('test4', function() {

        createController();
        $scope.vm.clear();
           expect($uibModalInstance.dismiss).toHaveBeenCalled();

       });

       it('test1', function() {

                MockMerchant = {
                                   id : 2,
                                   name :'Asif Test',
                                   description : 'Description of Asifs test',
                                   firstLineOfAddress : 'First Line of Address',
                                   secondLineOfAddress : 'Second line of address',
                                   city : 'Glasgow',
                                   postcode : 'PA1 1AB',
                                   facebook : 'azkan01',
                                   instagram : 'askan01'};
                 createController();
                 $scope.vm.save();
                 expect($scope.vm.isSaving).toBeTruthy();

              });

 });

});