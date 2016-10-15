(function() {
  'use strict';

  angular.module('LunchCheck' , [])
  .controller('LunchCheckController' , LunchCheckController);

  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope) {
     $scope.list="";
     $scope.textBoxClass="";
     $scope.messageDivClass="";
     $scope.checkTheLunch = function () {
       var itemCount = itemCaluclator($scope.list);
      //  console.log(itemCount);
       if (itemCount>3) {
         $scope.messageDivClass="messageDivSuccess";
         $scope.textBoxClass="textBoxSuccess";
         $scope.message="Too Much!";
       }
       else if (itemCount==0){
          $scope.messageDivClass="messageDivError";
          $scope.textBoxClass="textBoxError";
         $scope.message="Please enter data first";
       }
       else{
          $scope.messageDivClass="messageDivSuccess";
          $scope.textBoxClass="textBoxSuccess";
         $scope.message="Enjoy!"
       }
     };
   }
   function itemCaluclator(itemList) {
     var arrayOfItems = itemList.split(",");
     var count=0;
     for (var i = 0; i < arrayOfItems.length; i++) {
      var item = arrayOfItems[i].trim();
      if(item!=""){
        count=count+1;
      }
     }
     return count;
   }
})();
