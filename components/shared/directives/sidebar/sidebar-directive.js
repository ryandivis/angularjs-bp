/**
 * Created by Ryan Divis on 6/25/2015.
 */
define(['text!./sidebar-directive.html'], function(template) {

  sidebarDirective.$inject = [];

  function sidebarDirective() {
    return {
      restrict: 'EA',
      template: template,
      controller: sidebarDirective
    }
  };

  return sidebarDirective;

});