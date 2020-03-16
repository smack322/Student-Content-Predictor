var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

var Student = sequelize.define('students', {
    studentName: Sequelize.STRING,
    classCode: Sequelize.STRING,
    gradDate: Sequelize.DATE,
    classType: Sequelize.STRING
});

Student.sync();

module.exports= Student;