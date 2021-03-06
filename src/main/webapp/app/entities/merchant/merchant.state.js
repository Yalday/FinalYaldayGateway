(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('merchant', {
            parent: 'entity',
            url: '/merchant?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'yaldayGatewayApp.merchant.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/merchant/merchants.html',
                    controller: 'MerchantController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('merchant');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('merchant-detail', {
            parent: 'entity',
            url: '/merchant/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'yaldayGatewayApp.merchant.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/merchant/merchant-detail.html',
                    controller: 'MerchantDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('merchant');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Merchant', function($stateParams, Merchant) {
                    return Merchant.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'merchant',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('merchant-detail.edit', {
            parent: 'merchant-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/merchant/merchant-dialog.html',
                    controller: 'MerchantDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Merchant', function(Merchant) {
                            return Merchant.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('merchant.new', {
            parent: 'merchant',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/merchant/merchant-dialog.html',
                    controller: 'MerchantDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                email: null,
                                description: null,
                                logo: null,
                                firstLineOfAddress: null,
                                secondLineOfAddress: null,
                                city: null,
                                postcode: null,
                                facebook: null,
                                instagram: null,
                                dateCreated: null,
                                lastEdited: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('merchant', null, { reload: 'merchant' });
                }, function() {
                    $state.go('merchant');
                });
            }]
        })
        .state('merchant.edit', {
            parent: 'merchant',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/merchant/merchant-dialog.html',
                    controller: 'MerchantDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Merchant', function(Merchant) {
                            return Merchant.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('merchant', null, { reload: 'merchant' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('merchant.delete', {
            parent: 'merchant',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/merchant/merchant-delete-dialog.html',
                    controller: 'MerchantDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Merchant', function(Merchant) {
                            return Merchant.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('merchant', null, { reload: 'merchant' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('merchant.signup', {
                    parent: 'entity',
                    url: '/newmerchant',
                    data: {
                        authorities: ['ROLE_USER']
                    },
                    onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                        $uibModal.open({
                            templateUrl: 'app/entities/merchant/merchant-signup.html',
                            controller: 'MerchantDialogController',
                            controllerAs: 'vm',
                            backdrop: 'static',
                            size: 'lg',
                            resolve: {
                                entity: function () {
                                    return {
                                        name: null,
                                        email: null,
                                        description: null,
                                        logo: null,
                                        firstLineOfAddress: null,
                                        secondLineOfAddress: null,
                                        city: null,
                                        postcode: null,
                                        facebook: null,
                                        instagram: null,
                                        dateCreated: null,
                                        lastEdited: null,
                                        id: null
                                    };
                                }
                            }
                        }).result.then(function() {
                            $state.go('home', null, { reload: 'home' });
                        }, function() {
                            $state.go('home');
                        });
                    }]
                });


    }

})();
