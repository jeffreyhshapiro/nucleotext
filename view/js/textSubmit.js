angular.module('nucleotext')
  .controller('submitText', function($scope){
    $scope.convertToBinary = function() {
      $scope.binaryText = [];
      for (var i = 0; i < $scope.nucleotext.length; i++) {
        // console.log($scope.nucleotext[i])
        // console.log($scope.nucleotext[i].charCodeAt(0).toString(2))
        $scope.binaryText.push($scope.nucleotext[i].charCodeAt(0).toString(2))
      };
      console.log($scope.binaryText)
    }
  })