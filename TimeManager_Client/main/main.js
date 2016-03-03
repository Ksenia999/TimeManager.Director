/**
 * Created by Илья on 11.02.2016.
 */
//var App = angular.module('TM.main', ['ngRoute','ngMaterial']);
//
//   App.config(['$routeProvider', function($routeProvider) {
//        $routeProvider.when('/main', {
//            templateUrl: 'main/main.html',
//            controller: 'mainCtrl'
//        });
//    }]);
//
//    App.controller('mainCtrl', ['$scope', '$http','$mdSidenav', function($scope, $http){
//        $scope.data = {
//       //some data
//    };
//    }]);

angular
    .module('TM.main', ['ngRoute','ngMaterial'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('orange')
    })
    .controller('mainCtrl', function ($scope, $mdSidenav, $log) {
        $scope.tasks = [{
            name: 'Альфа версия TM.Director',
            project: 'TimeManager',
            status: 'В работе',
            executors: '2',
            deadline: "18.03.2016",
            estimated_time: "20/30 ч."
        }, {
            name: 'Бета версия TM.Director',
            project: 'TimeManager',
            status: 'В работе',
            executors: '2',
            deadline: "18.03.2016",
            estimated_time: "20/30 ч."
        }, {
            name: 'Релизная версия TM.Director',
            project: 'TimeManager',
            status: 'В работе',
            executors: '2',
            deadline: "18.03.2016",
            estimated_time: "20/30 ч."
        }, {
            name: 'Альфа версия TM.Director',
            project: 'TimeManager',
            status: 'В работе',
            executors: '2',
            deadline: "18.03.2016",
            estimated_time: "20/30 ч."
        }, {
            name: 'Альфа версия TM.Director',
            project: 'TimeManager',
            status: 'В работе',
            executors: '2',
            deadline: "18.03.2016",
            estimated_time: "20/30 ч."
        }];
    })
    .controller('SideNavCtrl', function ($scope, $mdSidenav) {
        $scope.close = function () {
            $mdSidenav('left').close()
        };
        $scope.openSideNav =  function (){
            $mdSidenav('left').toggle()
        };
    });

