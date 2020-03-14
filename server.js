var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

//ROUTES IMPORT BELOW
//TEST ROUTE

require('./routes/htmlRoutes.js')(app);

// app.get('/', (req, res) => {
//     res.send('testing to make sure the route works');
// });

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});