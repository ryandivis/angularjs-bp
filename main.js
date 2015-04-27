/**
 * Created by Ryan Divis on 4/26/2015.
 */
require.config({
    baseUrl: "",
    paths: {
        'angular': 'bower_components/angular/angular',
        'lodash': 'bower_components/lodash/lodash',
        'jquery': 'bower_components/jquery/dist/jquery',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        'angular': { deps: ['jquery'], exports: 'angular' },
        'angular-bootstrap': ['angular'],
        'angular-ui-router': ['angular']
    }
});

require(['app.js'], function(){

});