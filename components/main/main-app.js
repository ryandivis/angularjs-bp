define([
    'angular',
    './services/stats-service',
    './services/news-service',
    'angular-bootstrap',
    'angular-ui-router',
    'components/shared/shared-app'
  ], function (angular, statsService, newsService) {
    'use strict';
    var module = angular.module('main', ['ui.bootstrap', 'ui.router', 'shared']);

    module.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home/dashboard');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'components/main/templates/home.html',
            abstract: true
          }
        ).state('home.dashboard', {
            url: '/dashboard',
            templateUrl: 'components/main/templates/home.dashboard.html'
          }
        );
      }
    );

    module.service('statsService', statsService);
    module.service('statsService', newsService);

    return module;
  }
)