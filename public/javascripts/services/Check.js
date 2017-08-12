angular.module('pridehacks-maps')
.factory('Check', function ($resource) {
    return $resource('/api/check/');
});