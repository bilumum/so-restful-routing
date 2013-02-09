function DynamicController( $scope,$routeParams ,$log,$window) {
  var ctrl = $routeParams.resource;
  var method = $routeParams.method;

  $log.info('DynamicController Called');
  var element = $window.$('div[id='+ ctrl + ']');
  angular.bootstrap( element, []);
}