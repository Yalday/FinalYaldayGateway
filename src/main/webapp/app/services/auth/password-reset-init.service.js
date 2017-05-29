(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource('finalyaldaymerchant/api/account/reset_password/init', {}, {});

        return service;
    }
})();
