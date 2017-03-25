(function() {
    'use strict';
    angular
        .module('yaldayGatewayApp')
        .factory('Merchant', Merchant);

    Merchant.$inject = ['$resource', 'DateUtils'];

    function Merchant ($resource, DateUtils) {

        var resourceUrl =  'finalyaldaymerchant/' + 'api/merchants/:id';


        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateCreated = DateUtils.convertDateTimeFromServer(data.dateCreated);
                        data.lastEdited = DateUtils.convertDateTimeFromServer(data.lastEdited);
                    }
                    return data;
                }
            },
            'update': { method:'POST',
                params: {
                      id: '@id'
                }

            }
        });

    }
})();
