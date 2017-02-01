(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .factory('MerchantSearch', MerchantSearch);

    MerchantSearch.$inject = ['$resource'];

    function MerchantSearch($resource) {
        var resourceUrl =  'finalyaldaymerchant/' + 'api/_search/merchants/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
