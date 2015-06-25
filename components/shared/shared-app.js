/**
 * Created by Ryan Divis on 5/5/2015.
 */
define([
    'angular',
    './services/web-storage.js',
    './directives/header/header-directive.js',
    './directives/sidebar/sidebar-directive.js',
    'angular-bootstrap'
  ], function (angular, webStorage, headerDirective, sidebarDirective) {
    'use strict';
    var module = angular.module('shared', ['ui.bootstrap']);

    module.service('webStorage', webStorage);

    module.directive('headerDirective', headerDirective);
    module.directive('sidebarDirective', sidebarDirective);

    return module;
  }
)