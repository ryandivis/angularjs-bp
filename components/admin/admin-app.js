/**
 * Created by Ryan Divis on 4/26/2015.
 */
define([
    'angular',
    './services/authentication-service',
    './controllers/admin-login-controller',
    'components/shared/shared-app',
    'angular-bootstrap',
    'angular-ui-router'
], function (angular, authService, loginController) {
    'use strict';
    var module = angular.module('admin', ['ui.bootstrap', 'ui.router', 'shared']);

    /**
     * Authentication Interceptor
     */
    module.factory('authenticationInterceptor', ['$rootScope', '$q', '$injector', 'webStorage', function($rootScope, $q, $injector, webStorage){
        return {
            request: function (config) {
                config.headers = config.headers;
                if (webStorage.getLocal('authToken')) {
                    config.headers.AuthToken = angular.toJson(webStorage.getLocal('authToken'));
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 401) { //authentication failed
                    var authenticationService = $injector.get('authenticationService');
                    authenticationService.logout();
                    authenticationService.goToLogin("Please Sign In");
                }
                return $q.reject(response);
            }
        };
    }]);

    module.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {

        //$httpProvider.interceptors.push('authenticationInterceptor'); //ensures all traffic is authenticated

        $urlRouterProvider.otherwise("/admin/dashboard");

        $stateProvider.state('admin', {
            url: "/admin",
            templateUrl: "components/admin/templates/admin.html",
            abstract: true,
            resolve: {
                loggedIn: function (authenticationService) {
                    return authenticationService.checkLogin();
                }
            }
        }).state('admin.dashboard', {
            url: "/dashboard",
            templateUrl: "components/admin/templates/admin.dashboard.html"
        }).state('admin.login', {
            url: "/login",
            templateUrl: "components/admin/templates/admin.login.html",
            controller: loginController
        });
    }]);

    module.service('authenticationService', authService);

    return module;
});