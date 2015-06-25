/**
 * Created by Ryan Divis on 4/26/2015.
 */
define([
    'angular',
    'lodash',
    //load modules here
    'components/main/main-app',
    'components/admin/admin-app'
], function (angular, _) {
    'use strict';
    angular.bootstrap(document.body, ['main']);
});
