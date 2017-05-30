(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource'];

    function PasswordResetFinish($resource) {
        var service = $resource('finalyaldaymerchant/api/account/reset_password/finish', {}, {});

        return service;
    }
})();
