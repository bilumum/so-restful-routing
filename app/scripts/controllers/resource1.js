'use strict';

restrouteApp.controller('resource1', function($scope,$routeParams,$http,$log) {
  $scope.template='views/resource1/' + $routeParams.method + '.php';
  $scope.id= $routeParams.id
  $scope.value='';

  $scope.run = function(id){
    $http({
      url:'data/' + id + '.json',
      method:'get'
    }).success(function(response){
      $log.info(response);
      $scope.value=response.value;
    });
  }

  $scope.run($scope.id);
});
