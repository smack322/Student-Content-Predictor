var path = require('path');


module.exports = function(app) {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/update', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/update.html'));
    });

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
}