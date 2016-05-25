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
          type: 'binary'
          nucleotext: $scope.nucleotext,
          binaryString: $scope.binaryString,
          nucleotideString: $scope.nucleotideString,
        }
        // console.log($scope.queryData)
        $http.post('/nucleotexts', $scope.queryData).then(
          function(response) {
            console.log(response)
          },
          function(err) {
            console.log(err)
          })
      } else {
        $scope.queryData = {
          type: "base four"
          nucleotext: $scope.nucleotext,
          baseFourString: $scope.baseFourString,
          nucleotideString: $scope.nucleotideStringBaseFour,
        }
      }
    }
  })
