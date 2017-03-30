(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .controller('SearchModalController', SearchModalController);

    SearchModalController.$inject = ['$state', '$uibModalInstance'];

    function SearchModalController ($state, $uibModalInstance) {
        var vm = this;

        vm.register=register;

        vm.searchppl = 0;
        vm.adults = 0;
        vm.children = 0;

        function register () {
            $uibModalInstance.dismiss('cancel');
        }

        function incrementPeople(count) {

            if (count < 10) {
                count++;
            }
        }

        function decrementPeople(count) {
            if (count > 0) {
                count--;
            }
        }
    }
})();
