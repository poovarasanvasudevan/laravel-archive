app = angular.module 'realtime', ['ngMaterial'], ($interpolateProvider)->
  $interpolateProvider.startSymbol '[['
  $interpolateProvider.endSymbol ']]'
  return

app.config ($mdThemingProvider)->
  $mdThemingProvider.theme 'default'
  .primaryPalette 'blue'
  .accentPalette 'pink'
  return

app.controller 'globalcontroller', ($scope)->


app.controller 'logincontroller', ($scope)->
  $scope.abhyasiid = ''
  $scope.abpassword = ''
  $scope.error = ''
  $scope.login = ->
    if $scope.abhyasiid.length == 0
      $('.error').html '<i class="mi mi-error"></i>&nbsp;&nbsp;&nbsp;Please enter Username'
      return
    if $scope.abpassword.length == 0
      $('.error').html '<i class="mi mi-error"></i> &nbsp;&nbsp;&nbsp;Password needed'
      return
  return


$(document).ready ->
  $(document).scroll ->
    scroll = $(this).scrollTop
    topDist = $("#toolbar").position
    if (scroll > topDist.top)
      $('#toolbar').css {"position": "fixed", "top": "0"}
      return
    else
      $('#toolbar').css {"position": "static", "top": "auto"}
      return
  return
