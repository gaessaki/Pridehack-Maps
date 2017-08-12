angular.module('pridehacks-maps')
.controller('mainController', function ($scope, $location) {
    $scope.locData = {};
    $scope.checkin = function(data) {
        $location.path('/form');
    }
})