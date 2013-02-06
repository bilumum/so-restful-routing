'use strict';

var restrouteApp = angular.module('restrouteApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/:resource/:method/:id', {
        templateUrl: 'views/includeIt.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/one/a/1'
      });
  }]);
