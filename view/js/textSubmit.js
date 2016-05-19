angular.module('nucleotext')
  .controller('selectAlg', function($scope, $http) {
    $scope.chooseCalcMethod = true;
    $scope.selectAlg = function() {
      if ($scope.alg === 'binary') {
        $scope.showNucleotext();
      } else if ($scope.alg === 'baseFour') {
        $scope.showNucleotext();
      } else if (!$scope.alg || $scope.nucleotext === ''){
        $scope.chooseCalcMethod = false;
      }
      //direct logic to store data into an object depending on if $scope.alg = binary or base four
      if ($scope.alg === 'binary') {
        $scope.queryData= {
          nucleotext: $scope.nucleotext,
          binaryString: $scope.binaryString,
          nucleotideString: $scope.nucleotideString,
          possibilities: $scope.possibilitiesFixed
        }
      } else {
        $scope.queryData = {
          nucleotext: $scope.nucleotext,
          baseFourString: $scope.baseFourString,
          nucleotideString: $scope.nucleotideStringBaseFour,
        }
      }
    }
  })
