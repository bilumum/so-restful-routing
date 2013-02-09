'use strict';

restrouteApp.controller('resource1', function($scope,$routeParams,$log,Resource1Service) {

  $log.info('new resource1');

  $scope.controllername = $routeParams.ctrl;
  $scope.r1data= Resource1Service.shared;

  $scope.index = function(){
    Resource1Service.index().then(function(){
      //when the service returns do something
    });
  }
  
  $scope.a = function(){
    alert('called method a');
  }

  $scope[$routeParams.method]();
});
