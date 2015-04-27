define([
    'angular',
    'angular-bootstrap',
    'angular-ui-router'
], function(angular){
    var module = angular.module('main',['ui.bootstrap','ui.router']);

    module.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home/dashboard");

        $stateProvider.state('home', {
            url: "/home",
            templateUrl: "components/main/templates/home.html",
            abstract: true
        }).state('home.dashboard', {
            url: "/dashboard",
            templateUrl: "components/main/templates/home.dashboard.html"
        });
    });

    return module;
})