angular.module('nucleotext')
  .controller('selectAlg', function($scope) {
    $scope.chooseCalcMethod = true;
    $scope.selectAlg = function() {
      if ($scope.alg === 'binary') {
        $scope.convertToBinary();
      } else if ($scope.alg === 'baseFour') {
        $scope.convertToBaseFour();
      } else {
        $scope.chooseCalcMethod = false;
      }
    }
  })

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
          $scope.generateNucleotideSequenceBinary();
        }
      }
    }
  })
  .directive('genBaseFour', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/baseFour.html',
      link: function($scope, elem, attrs) {
        $scope.convertToBaseFour = function() {
          $scope.baseFourText = [];
          for (var i = 0; i < $scope.nucleotext.length; i++) {
            $scope.baseFourText.push($scope.nucleotext[i].charCodeAt(0).toString(4))
          }
          $scope.baseFourString = $scope.baseFourText.join('')
          $scope.generateNucleotideSequenceBaseFour();
        }
      }
    }
  })
  .directive('genNucStringBinary', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/nucTemplate.html',
      link: function($scope, elem, attrs) {
        $scope.generateNucleotideSequenceBinary = function() {
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
          $scope.calcSequences();
        }
        $scope.calcSequences = function() {
          var possibilities = Math.pow(2, $scope.nucleotides.length)
          $scope.possibilitiesFixed = Number(possibilities).toFixed(0)
        }
      }
    }
  })
  .directive('genNucStringBaseFour', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/nucTemplateBaseFour.html',
      link: function($scope, elem, attrs) {
        $scope.generateNucleotideSequenceBaseFour = function() {
          $scope.nucleotideBaseFour = [];
          for (var i = 0; i < $scope.baseFourString.length; i++) {
            switch ($scope.baseFourString[i]) {
              case '0':
                $scope.nucleotideBaseFour.push('A')
                break;
              case '1':
                $scope.nucleotideBaseFour.push('T')
                break;
              case '2':
                $scope.nucleotideBaseFour.push('G')
                break;
              case '3':
                $scope.nucleotideBaseFour.push('C')
                break;
            }
          }
          $scope.nucleotideStringBaseFour = $scope.nucleotideBaseFour.join('')
        }
      }
    }
  })
