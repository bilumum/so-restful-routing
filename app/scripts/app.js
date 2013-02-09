'use strict';

var restrouteApp = angular.module('restrouteApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/:ctrl/:method', {
        templateUrl: function(rp){
          if(!rp.method) {rp.method = 'index';}
          console.log(rp); 
          return 'views/'+rp.ctrl+'/'+rp.method+'.html';
        },
        controller: 'DynamicController'
      })
      .otherwise({
        redirectTo: '/resource1/a'
      });
  }]);
