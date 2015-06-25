/**
 * Created by Ryan Divis on 5/5/2015.
 */
define([], function () {
    'use strict';
    webStorage.$inject = ['$window'];

    function webStorage($window) {
        function serialize(value) {
            return angular.toJson(value);
        }

        function deSerialize(value) {
            if (value !== undefined) {
                return angular.fromJson(value);
            } else {
                return undefined;
            }
        }

        return {
            addLocal: function (key, value) {
                $window.localStorage[key] = serialize(value);
            },
            getLocal: function (key) {
                return deSerialize($window.localStorage[key]);
            },
            removeLocal: function (key) {
                delete $window.localStorage[key];
            },
            addSession: function (key, value) {
                $window.sessionStorage[key] = serialize(value);
            },
            getSession: function (key) {
                return deSerialize($window.sessionStorage[key]);
            },
            removeSession: function (key) {
                delete $window.sessionStorage[key];
            }
        };
    };

    return webStorage;
});