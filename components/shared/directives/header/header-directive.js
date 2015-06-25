/**
 * Created by Ryan Divis on 6/25/2015.
 */
define(['text!./header-directive.html'], function(template) {

  headerDirective.$inject = [];

  function headerDirective() {
    return {
      restrict: 'EA',
      template: template,
      controller: headerDirective
    }
  };

  return headerDirective;

});