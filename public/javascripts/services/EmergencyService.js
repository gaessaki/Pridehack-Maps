'use strict'

angular.module('pridehacks-maps')
    .factory('EmergencyService', function EmergencyService(Emergency) {
    return {
        sendText: function (callback) {
            var cb = callback || angular.noop;
            Emergency.save({
                time: new Date(),
                message: 'Test message',

            },
            function (err) {
                console.log(err.data);
                return cb(err.data);
            });
            window.location.href = 'tel:+15142338930';
        }
    }
})
