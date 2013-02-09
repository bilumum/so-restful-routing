'use strict';

var restrouteApp = angular.module('restrouteApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/:ctrl/:method', {
        templateUrl: function(rp){
          if(!rp.method) {rp.method = 'index';}
          console.log('route one'); 
          return 'views/'+rp.ctrl+'/'+rp.method+'.html';
        }
      })
      .when('/:ctrl/:method/:id', {
        templateUrl: function(rp){
          if(!rp.method) {rp.method = 'index';}
          console.log('route two'); 
          return 'views/'+rp.ctrl+'/'+rp.method+'.html';
        }
      })
      .otherwise({
        redirectTo: '/resource1/'
      });
  }]);
