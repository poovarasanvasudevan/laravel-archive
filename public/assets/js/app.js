/**
 * Created by HTCINDIA\poovarasanv on 13/4/16.
 */
var app = angular.module('realtime', ['ngMaterial', 'aa.formExtensions', 'aa.notify'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
})
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
});
app.controller('globalcontroller', function ($scope) {

})

$(document).ready(function () {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("#toolbar").position();
        if (scroll > topDist.top) {
            $('#toolbar').css({"position": "fixed", "top": "0"});
        } else {
            $('#toolbar').css({"position": "static", "top": "auto"});
        }
    });
});