
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']; //to pass parameter to the DIController only so that it willl not be minified 
  function LunchCheckController($scope) {
    $scope.name = "";
    let toggler = ""
    $scope.message = toggler;
    $scope.displayNotify = function () {
      if ($scope.name === "") {
        $scope.message = "Please enter data first";
        return ;
      };
      
      let list_name = $scope.name.split(",");
      
      for (var i=0; i < list_name.length; i++) { 
          if (list_name[i] === "" || list_name[i] === " ") {
              list_name.splice(i, 1); //remove the item only
              i--; //since we are removing an item, may be at index 3, the next element will now be in index 3 which will be assumed to have been checked   
          }
      };

      if (list_name.length <= 3) {
        $scope.message = "Enjoy!";
        return ;
      }
      else if(list_name.length > 3) {
        $scope.message = "Too Much!"; 
        return ;
      }
      
  };
}

})();
