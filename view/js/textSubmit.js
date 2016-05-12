angular.module('nucleotext')
  .directive('genBinary', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/binaryTemplate.html',
      link: function($scope, elem, attrs) {
        $scope.convertToBinary = function() {
          $scope.binaryText = [];
          for (var i = 0; i < $scope.nucleotext.length; i++) {
            $scope.binaryText.push($scope.nucleotext[i].charCodeAt(0).toString(2))
          }
          $scope.binaryString = $scope.binaryText.join('')
          $scope.generateNucleotideSequence();
        }
      }
    }
  })
  .directive('genNucString', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/nucTemplate.html',
      link: function($scope, elem, attrs) {
        $scope.generateNucleotideSequence = function() {
          $scope.at = ['A','T']
          $scope.gc = ['G','C']
          $scope.nucleotides = []
          for (var i = 0; i < $scope.binaryString.length; i++) {
            var randomIndex = Math.floor(Math.random() * 2)
            if ($scope.binaryString[i] === '0') {
              $scope.nucleotides.push($scope.at[randomIndex])
            } else {
              $scope.nucleotides.push($scope.gc[randomIndex])
            }
          }
          $scope.nucleotideString = $scope.nucleotides.join('')
        }
      }
    }
  })