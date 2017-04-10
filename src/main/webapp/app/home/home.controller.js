(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function HomeController ($scope, Principal, LoginService, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });
        vm.myInterval = 1500;
        vm.noWrapSlides = false;
        vm.active = 0;
        var currIndex = 0;
        var slides = vm.slides = [   {image: '../content/images/anh.png', id: currIndex++},
                                    {image: '../content/images/esb.png', id: currIndex++},
                                    {image: '../content/images/rotj.png', id: currIndex++}
                                 ];

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }

    }
})();
