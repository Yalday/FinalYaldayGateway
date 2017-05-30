(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .factory('Password', Password);

    Password.$inject = ['$resource'];

    function Password($resource) {
        var service = $resource('finalyaldaymerchant/api/account/change_password', {}, {});

        return service;
    }
})();
