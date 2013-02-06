'use strict';

var restrouteApp = angular.module('restrouteApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/resource1/:method/:id', {
        templateUrl: 'views/includeIt.html',
        controller: 'resource1'
      })
      .when('/resource2/:method/:id', {
        templateUrl: 'views/includeIt.html',
        controller: 'resource2'
      })
      .otherwise({
        redirectTo: '/resource1/a/1'
      });
  }]);
