'use strict';
angular
  .module('restrouteApp')
    .service('Resource2Service', [
      '$log','$http', function(
       $log,  $http ){

      var shared={
        resources:[]
      };

      function index(){
        var serverurl = "/data/resource2.json"
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
