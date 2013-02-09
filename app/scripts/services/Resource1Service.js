'use strict';
angular
  .module('restrouteApp')
    .service('Resource1Service', [
      '$log','$http', function(
       $log,  $http ){

      var shared={
        resources:[]
      };

      function index(){
        var serverurl = "/data/resource1.json"
        return $http({
          method:'GET',
          url:serverurl,
          dataType: 'json'
        }).
        success(function(response) {
          shared.resources = response;
        }).
        error(function(ErrorMsg) {
          alert('Error:' + ErrorMsg );
        });
      }

      return {
        index:index,
        shared : shared
      }
    }]
  );
