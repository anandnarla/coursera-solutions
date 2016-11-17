(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject=['SignUpService']
function SignUpController(SignUpService) {
  var signUpCtrl=this;
  signUpCtrl.saved=false;
  signUpCtrl.submit=function () {
    SignUpService.shortNameCheck(signUpCtrl.user.favorite).then(function (result) {
      SignUpService.user=signUpCtrl.user;
      signUpCtrl.saved=true;
    },
    function (error) {
      SignUpService.user={};
      signUpCtrl.saved=false;
      signUpCtrl.shortNameExists=true;
    })

  };
}


})();
