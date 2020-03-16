var Student = require('../models/students');

module.exports = function(app) {
    //add CRUD routes in for backend
    app.get('/api/student', function(req, res) {
        db.Student.findAll({})
           .then(function(dbStudent) {
               res.json(dbStudent);
           });
    });

    app.post('/api/student', function(req, res) {
        console.log(req.body);
        db.Student.create({
            studentName: req.body.student,
            classCode: req.body.classCode,
            gradDate: req.body.gradDate,
            classType: req.body.classType

        })
           .then(function(dbStudent) {
               res.json(dbStudent);
           })
    });
}