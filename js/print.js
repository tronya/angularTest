angular.module('myModule', [])
  .directive('getPrint', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            console.log(element[0].offsetHeight);
            console.log("asdasd");
            
        }
    };
  })
;