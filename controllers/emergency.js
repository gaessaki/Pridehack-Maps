const client = require('twilio');

const config = {
    sid: 'ACac43a94e3e98e027a325c2ca2a6004fc',
    token: '8aad26e5ae72eb3a7da24887627e9b4a'
};

exports.text = function(req, res, next) {
    // make Twilio text message
    client.status(
        {
            to: '+15142106816',
            from: '+15142106816',
            body: 'This is an alert message'
        },
        (err, message) => {

            console.log(message.sid);

        }
    );
}

