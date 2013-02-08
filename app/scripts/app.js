'use strict';

var restrouteApp = angular.module('restrouteApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/resource1/:method/:id', {
        templateUrl: function(rp){
          console.log(rp); 
          return 'views/resource1/'+rp.method+'.html';
        },
        controller: 'resource1'
      })
      .when('/:resource/:method/:id', {
        templateUrl: function(rp){
          console.log(rp); 
          return 'views/' + rp.resource + '/'+rp.method+'.html';
        },
        controller: 'resource2'
      })
      .otherwise({
        redirectTo: '/resource1/a/1'
      });
  }]);
