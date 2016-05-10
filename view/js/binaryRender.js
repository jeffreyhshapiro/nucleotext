angular.module('nucleotext')
  .controller('binaryRender', function($scope){
    $scope.binaryRender = function() {
      return $scope.binaryString
    }
  })