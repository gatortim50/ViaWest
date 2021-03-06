(function () {
  'use strict';

  angular.module('client')
    .service('alert', function ($rootScope, $timeout) {
      var alertTimeout;
      return function (type, title, message, timeout) {
        $rootScope.alert = {
          hasBeenShow: true,
          show: true,
          type: type,
          message: message,
          title: title
        };

        $timeout.cancel(alertTimeout);

        alertTimeout = $timeout(function () {
          $rootScope.alert.show = false;
        }, timeout || 2000);
      };
    });

})();