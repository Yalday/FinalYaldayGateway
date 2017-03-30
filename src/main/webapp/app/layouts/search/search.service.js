(function() {
    'use strict';
    angular
        .module('yaldayGatewayApp')
        .factory('SearchService', SearchService);

    SearchService.$inject = ['$uibModal'];

    function SearchService ($uibModal) {
        var service = {
            open: open,
            close: close
        };

        var modalInstance = null;
        var resetModal = function () {
            modalInstance = null;
        };

        return service;

        function open () {
            if (modalInstance !== null) return;
            modalInstance = $uibModal.open({
                animation: true,
                backdrop: false,
                templateUrl: 'app/layouts/search/searchModal.html',
                controller: 'SearchModalController',
                controllerAs: 'vm',
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('login');
                        return $translate.refresh();
                    }]
                }
            });
            modalInstance.result.then(
                resetModal,
                resetModal
            );
        }

    }

})();
