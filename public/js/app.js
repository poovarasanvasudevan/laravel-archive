(function() {
  var app;

  app = angular.module('realtime', ['ngMaterial'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('pink');
  });

  app.controller('globalcontroller', function($scope) {});

  app.controller('logincontroller', function($scope) {
    $scope.abhyasiid = '';
    $scope.abpassword = '';
    $scope.error = '';
    $scope.login = function() {
      if ($scope.abhyasiid.length === 0) {
        $('.error').html('<i class="mi mi-error"></i>&nbsp;&nbsp;&nbsp;Please enter Username');
        return;
      }
      if ($scope.abpassword.length === 0) {
        $('.error').html('<i class="mi mi-error"></i> &nbsp;&nbsp;&nbsp;Password needed');
      }
    };
  });

  $(document).ready(function() {
    $(document).scroll(function() {
      var scroll, topDist;
      scroll = $(this).scrollTop;
      topDist = $("#toolbar").position;
      if (scroll > topDist.top) {
        $('#toolbar').css({
          "position": "fixed",
          "top": "0"
        });
      } else {
        $('#toolbar').css({
          "position": "static",
          "top": "auto"
        });
      }
    });
  });

}).call(this);

//# sourceMappingURL=app.js.map
