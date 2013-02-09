'use strict';

restrouteApp.controller('resource2', function($scope,$routeParams,$log,Resource2Service) {

  $log.info('new resource2');

  $scope.controllername = $routeParams.ctrl;
  $scope.r2data= Resource2Service.shared;

  $scope.index = function(){
    Resource2Service.index().then(function(){
      //when the service returns do something
    });
  }

  $scope.a = function(){
    alert('called method a');
  }
  
  $scope[$routeParams.method]();
});
