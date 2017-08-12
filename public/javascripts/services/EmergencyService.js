'use strict'

angular.module('pridehacks-maps')
    .factory('EmergencyService', function EmergencyService(Emergency) {
    
    return {
        sendText: function (callback) {
            var cb = callback || angular.noop;
            Emergency.post({
            },
            function (err) {
                console.log(err.data);
                return cb(err.data);
            })
        }
    }
})