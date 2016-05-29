angular.module('nucleotext')
  .directive('textQuery', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/textQuery.html',
      link: function($scope, elem, attrs) {
        $scope.showNucleotext = function() {
          $scope.showNucleotextString = true;
          if ($scope.alg === 'binary') {
            $scope.convertToBinary();
          } else {
            $scope.convertToBaseFour();
          }
        }
      }
    }
  })
  .directive('genBinary', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/binaryTemplate.html',
      link: function($scope, elem, attrs) {
        $scope.convertToBinary = function() {
          $scope.baseFourString = false; //if baseFourString is showing on page, hide it
          $scope.binaryText = [];
          for (var i = 0; i < $scope.nucleotext.length; i++) {
            if ($scope.nucleotext[i] === ' ') {
              $scope.binaryText.push('0100000')
            } else {
              $scope.binaryText.push($scope.nucleotext[i].charCodeAt(0).toString(2))
            }
          }
          $scope.binaryString = $scope.binaryText.join('')
          console.log($scope.binaryString)
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
          $scope.binaryString = false; //if binaryString is showing on page hide it
          $scope.baseFourText = [];
          for (var i = 0; i < $scope.nucleotext.length; i++) {
            if ($scope.nucleotext[i].charCodeAt(0).toString(4).length === 3) {
              $scope.baseFourText.push('0' + $scope.nucleotext[i].charCodeAt(0).toString(4)) //handle punctuation and spaces which is converted to three digit numbers instead of four
            } else {
              $scope.baseFourText.push($scope.nucleotext[i].charCodeAt(0).toString(4))
            }
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
          $scope.nucleotideStringBaseFour = false; //if nucleotideStringBaseFour is showing on page hide it
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
          $scope.nucleotideString = false; //if nucleotideString binary is showing on page hide it
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
  .directive('decoder', function() {
    return {
      restrict: 'EA',
      templateUrl: 'template/decoder.html',
      link: function($scope, elem, attrs) {
        $scope.decoded = false;
        $scope.decoder = function() {
          $scope.decoded = true;
          var reverseToBaseFour = [];
          var wordConstructor = [];
          for (var i = 0; i < $scope.nucleotext.length; i++) {
            // console.log($scope.nucleotext[i])
            switch ($scope.nucleotext[i]) {
              case 'A':
                reverseToBaseFour.push('0')
                break;
              case 'T':
                reverseToBaseFour.push('1')
                break;
              case 'G':
                reverseToBaseFour.push('2')
                break;
              case 'C':
                reverseToBaseFour.push('3')
                break;
            }
          }
          while (reverseToBaseFour.length > 0) {
            wordConstructor.push(reverseToBaseFour.splice(0, 4))
          }
          $scope.convertedString = [];
          for (var i = 0; i < wordConstructor.length; i++) {
            var convertToLetter = parseInt(wordConstructor[i].join(''), 4)
            $scope.convertedString.push(String.fromCharCode(convertToLetter))
          }
          $scope.convertedString = $scope.convertedString.join('')
        }
      }
    }
  })
