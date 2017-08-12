angular.module('pridehacks-maps')
.controller('formController', function ($scope, EmergencyService) {
    $scope.locData = {};

    $scope.emergency = function() {
        EmergencyService.sendText();
    }
})