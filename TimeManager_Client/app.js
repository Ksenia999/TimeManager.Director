/**
 * Created by Илья on 10.02.2016.
 */
var App = angular.module('TM', ['ngRoute','TM.main','ngMaterial']);

App.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'main/main.html',
            controller: 'mainCtrl'
        });

    App.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('orange');
    });

    App.controller('appCtrl', function($scope) {
        $scope.someFunc = function() {

        };
        });
});