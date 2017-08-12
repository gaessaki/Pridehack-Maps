angular.module('pridehacks-maps')
.controller('updateController', function ($scope, $location, EmergencyService) {
    $scope.locData = {};

    $scope.update = function () {
        $location.path('/');
    }

    $scope.emergency = function() {
        EmergencyService.sendText();
    }
})