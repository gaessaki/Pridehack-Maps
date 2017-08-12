module.exports = function (app) {

    var emergency = require('./controllers/emergency');
    var check = require('./controllers/check');

    app.post('/api/check', check.in);

    app.post('/api/emergency', emergency.text);

}