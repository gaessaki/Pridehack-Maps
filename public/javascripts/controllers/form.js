angular.module('pridehacks-maps')
.controller('formController', function ($scope, $location, EmergencyService) {
    $scope.locData = {};

    $scope.emergency = function() {
        EmergencyService.sendText();
    }
    $scope.status = function() {
        $location.path('/update');
    }
    $scope.checkout = function() {
        $location.path('/');
    }
})