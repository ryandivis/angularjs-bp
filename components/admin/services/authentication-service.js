/**
 * Created by Ryan Divis on 4/27/2015.
 */
define([], function () {
    'use strict';
    authenticationService.$inject = ['webStorage', '$q', '$state'];

    function authenticationService(webStorage, $q, $state) {
        var self = this;

        self.login = function (username, password) {

        };

        self.logout = function () {

        };

        self.goToLogin = function () {
            $state.go('admin.login');
        };

        self.checkLogin = function () {
            var deferred = $q.defer();
            if (!webStorage.getLocal('authToken')) {
                deferred.reject();
                self.goToLogin();
            }

            return deferred.promise;
        };
    };

    return authenticationService;
});