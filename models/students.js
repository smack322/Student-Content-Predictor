var Sequelize = require('sequelize');
var sequelize = require('../config/connection');

var Student = sequelize.define('students', {
    student: Sequelize.STRING,
    classCode: Sequelize.STRING,
    graduateDate: Sequelize.DATE,
    classLength: Sequelize.STRING
});

Student.sync();

module.exports= Student;