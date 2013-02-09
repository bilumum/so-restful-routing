'use strict';

restrouteApp.controller('resource1', function($scope,$routeParams,$log,Resource1Service) {

  $log.info('new resource1');

  $scope.controllername = $routeParams.ctrl;
  $scope.r1data= Resource1Service.shared;

  $scope.index = function(){
    Resource1Service.index().then(function(){
      //when the service returns
    });
  }
  
  $scope.one = function(){
    $log.info('called method one');
    $log.info($scope);
    $scope.r1data.selected = $scope.r1data.resources[0];
  }
  $scope.two= function(){
    $log.info('called method two');
    $scope.r1data.selected = $scope.r1data.resources[1];
  }

  $scope[$routeParams.method]();
});
