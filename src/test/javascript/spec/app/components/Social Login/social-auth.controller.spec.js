'use strict';




describe('Social Tests', function() {


    beforeEach(angular.mock.module('ngCookies', 'yaldayGatewayApp'));


    describe('Social-Auth Controller', function(){

        var $scope, $q;
        var MockAuth;
        var $state;
        var $cookies;
       // var $cookieS;
        var createController;



   beforeEach(inject (function($injector, $cookieStore){




        $q = $injector.get('$q');
        $scope = $injector.get('$rootScope').$new();
        $state = $injector.get('$state');
        MockAuth = jasmine.createSpyObj('MockAuth', ['createAccount']);
      //  $cookieS['social-authentication']='gimp';

        $dick = $cookieStore.put('activeUser', 'username');

        var locals = {

             'Auth': MockAuth,
             '$state': $state,
             '$cookies': $cookieS,
             '$scope': $scope,
             '$cookieStore': $cookieStore.put('activeUser', 'username'),

        };
          createController = function() {
                        $injector.get('$controller')('SocialAuthController as vm', locals);
                    };


        }));



    it("Cookies is defined", function(){
                 expect($cookieStore.get('activeUser')).toBeTruthy();
      });

     });


 });

   //addAfter





