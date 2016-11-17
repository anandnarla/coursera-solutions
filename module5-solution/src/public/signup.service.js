(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  service.shortNameCheck = function (shortName) {

    return $http.get(ApiPath + '/menu_items/' + shortName +'.json').then(function (response) {
      console.log('true');
      return response.data;
    });
  }

}



})();
