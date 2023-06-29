const campus = require('./campus')
const student = require('./student')

// Associations 
// ONE STUDENT GOES TO ONE CAMPUS --> 1-1
// ONE CAMPUS HAS MANY STUDENTS --> 1-MANY

student.belongsTo(campus)
// campus.belongsToMany(student) --> belongsToMany establishes a many to many relationship which is not required here.
campus.hasMany(student) // hasMany successfully establishes a one to many relationship between campus and students.

// export
module.exports = {
    student,
    campus  
}