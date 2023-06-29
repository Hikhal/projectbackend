const campus = require('./campus')
const student = require('./student')

// Associations 
// ONE STUDENT GOES TO ONE CAMPUS --> 1-1
// ONE CAMPUS HAS MANY STUDENTS --> 1-MANY

student.belongsTo(campus)
campus.belongsToMany(student)

// export
modules.export = {
    student,
    campus  
}