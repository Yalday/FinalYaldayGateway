(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .factory('errorHandlerInterceptor', errorHandlerInterceptor);

    errorHandlerInterceptor.$inject = ['$q', '$rootScope'];

    function errorHandlerInterceptor ($q, $rootScope) {
        var service = {
            responseError: responseError
        };

        return service;

        function responseError (response) {
            if (!(response.status === 401 && (response.data === '' || (response.data.path && response.data.path.indexOf('finalyaldaymerchant/api/account') === 0 )))) {
                $rootScope.$emit('yaldayGatewayApp.httpError', response);
            }
            return $q.reject(response);
        }
    }
})();
