'use strict';




describe('Social Tests', function() {

        var $scope;
        var MockAuth;
        var $state;
        var $cookies;
        var createController;
        var $q;

        beforeEach(angular.mock.module('ngCookies', 'yaldayGatewayApp'));


             beforeEach(inject (function($injector){

                    $scope = $injector.get('$rootScope').$new();
                    $cookies = $injector.get('$cookies');
                    MockAuth = jasmine.createSpyObj('MockAuth', ['loginWithToken']);
                    $state = $injector.get('$state');
                    $q = $injector.get('$q');

                    //new shit
                    $cookies.put('social-authenticationTest','helloTest');
                    spyOn($state, 'go');


                   var locals = {
                         'Auth': MockAuth,
                         '$state': $state,
                         '$cookies': $cookies,
                         '$scope': $scope,
                    };
                    createController = function() {
                        $injector.get('$controller')('SocialAuthController as vm', locals);
                    };
                    }));


      it('should set scope', function () {
              expect($scope).toBeTruthy();
      });

      it('should set auth', function () {
              expect(MockAuth).toBeTruthy();
      });

      it('should set state', function(){
              expect($state).toBeTruthy();
      });

      it('should set cookies', function(){
              expect($cookies).toBeTruthy();
      });

      it('should set cookies to be "hello" to be defined', function(){
               expect($cookies.get('social-authenticationTest')).toBeTruthy();
      });

      it('should set cookies to be equal to "hello"', function(){
               expect($cookies.get('social-authenticationTest')).toEqual('helloTest');
      });

      it('should call MockAuth.loginWithToken', function (){

               MockAuth.loginWithToken.and.returnValue($q.resolve());
               var controller = createController();

               expect(MockAuth.loginWithToken).toHaveBeenCalled();
      });


      it('the state "go" should not have been called', function (){

                     MockAuth.loginWithToken.and.returnValue($q.resolve());
                     var controller = createController();
                     expect($state.go).not.toHaveBeenCalled();
       });

        it('cookies.get should have been called', function (){

                            MockAuth.loginWithToken.and.returnValue($q.resolve());
                            spyOn($cookies, 'get');
                            var controller = createController();
                            expect($cookies.get).toHaveBeenCalled();
        });

        it('cookies.get should have been called with "social-authentication"', function (){

                             MockAuth.loginWithToken.and.returnValue($q.resolve());
                             spyOn($cookies, 'get');
                             var controller = createController();
                             expect($cookies.get).toHaveBeenCalledWith('social-authentication');
         });

        it('cookies.get should not have been called with "cookieMonster"', function (){

                              MockAuth.loginWithToken.and.returnValue($q.resolve());
                              spyOn($cookies, 'get');
                              var controller = createController();
                              expect($cookies.get).not.toHaveBeenCalledWith('cookieMonster');
        });

        it('cookies.remove should not have been called', function (){

                               MockAuth.loginWithToken.and.returnValue($q.resolve());
                               spyOn($cookies, 'remove');
                               var controller = createController();
                               expect($cookies.remove).not.toHaveBeenCalled();
         });






});
