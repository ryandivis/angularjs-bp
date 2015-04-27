/**
 * Created by Ryan Divis on 4/26/2015.
 */
define([
    'angular',
    'angular-bootstrap',
    'angular-ui-router',
    './services/authentication-service'
], function(angular){
    var module = angular.module('admin',['ui.bootstrap','ui.router']);

    /**
     * Authentication Interceptor
     */
    module.factory('authenticationInterceptor', ['$rootScope', '$q', '$injector', function($rootScope, $q, $injector){
        return {
            request: function(config){

            },
            responseError: function(response){
                if(response.status === 401) { //authentication failed
                    var authenticationService = $injector.get('authenticationService');
                    authenticationService.logout();
                    authenticationService.goToLogin("Please Sign In");
                }
                return $q.reject(response);
            }
        }
    }]);

    module.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.interceptors.push('authenticationInterceptor'); //ensures all traffic is authenticated

        $urlRouterProvider.otherwise("/admin/dashboard");

        $stateProvider.state('home', {
            url: "/admin",
            templateUrl: "components/admin/templates/admin.html",
            abstract: true
        }).state('home.dashboard', {
            url: "/dashboard",
            templateUrl: "components/admin/templates/admin.dashboard.html"
        });
    }]);

    return module;
})