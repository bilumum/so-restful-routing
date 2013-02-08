'use strict';

restrouteApp.controller(
  'resource2', 
  function($scope,$routeParams,$http,$log,$controller) {
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
