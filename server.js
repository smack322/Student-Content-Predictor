var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models/students');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

//ROUTES IMPORT BELOW
//TEST ROUTE

require('./routes/htmlRoutes.js')(app);
require('./routes/apiRoutes')(app);

// app.get('/', (req, res) => {
//     res.send('testing to make sure the route works');
// });
// db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
// });
