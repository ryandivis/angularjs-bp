/**
 * Created by Ryan Divis on 4/26/2015.
 */
define([
    'angular',
    'angular-bootstrap',
    'angular-ui-router'
], function(angular){
    var module = angular.module('admin',['ui.bootstrap','ui.router']);

    module.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/admin/dashboard");

        $stateProvider.state('home', {
            url: "/admin",
            templateUrl: "components/admin/templates/admin.html",
            abstract: true
        }).state('home.dashboard', {
            url: "/dashboard",
            templateUrl: "components/admin/templates/admin.dashboard.html"
        });
    });

    return module;
})