(function () {

"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject=['SignUpService']
function MyInfoController(SignUpService) {
  var myInfoCtrl = this;
  myInfoCtrl.user=SignUpService.user;
  myInfoCtrl.$onInit = function () {
    if(myInfoCtrl.user){
      SignUpService.shortNameCheck(myInfoCtrl.user.favorite).then(function(result){
        console.log(result);
        myInfoCtrl.favItem=result;
      });
  }

  }
}



})();
