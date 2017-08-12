module.exports = function (app) {

    var emergency = require('./controllers/emergency');

    app.get('/api/emergency', emergency.text);

    app.get('/*', function (req, res) {
        res.send('index.html');
    });
}