angular.module('pridehacks-maps')
.controller('updateController', function ($scope, EmergencyService) {
    $scope.locData = {};

    $scope.update = function () {
        
    }

    $scope.emergency = function() {
        EmergencyService.sendText();
    }
})