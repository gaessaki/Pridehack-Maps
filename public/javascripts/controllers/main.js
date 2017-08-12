angular.module('pridehacks-maps')
.controller('mainController', function ($scope, $location, CheckService) {
    $scope.locData = {};
    $scope.checkin = function(data) {
        $location.path('/form');
        CheckService.in();
        //call api service
    }
})