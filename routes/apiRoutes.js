var Student = require('../models/students');
// var db = require('./models/students');

module.exports = function(app) {
    //add CRUD routes in for backend
    app.get('/api/all/', function(req, res) {
        Student.findAll({})
           .then(function(dbStudent) {
               res.json(dbStudent);
           });
    });

    app.post('/api/student', function(req, res) {
        console.log(req.body);
        Student.create({
            studentName: req.body.studentName,
            classCode: req.body.classCode,
            gradDate: req.body.gradDate,
            classType: req.body.classType

        })
           .then(function(dbStudent) {
               res.json(dbStudent);
           })
    });
}