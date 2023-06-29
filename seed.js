const db = require("./database")

const {student,campus}= require("./database/models");
const seedCampus=[
    {
      name: 'Campus 1',
      img:"img",
      address: 'Address 1',
      description: 'Description 1'
    },
    {
      name: 'Campus 2',
      img:"img",
      address: 'Address 2',
      description: 'Description 2'
    }
]

const seedStudents=[
    {
      firstName: 'John',
      lastName: 'Doe',
      address: 'Student Address 1',
      image:"image",
      email: 'john.doe@example.com',
      gpa: 3.5,
      campusId:2
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      address: 'Student Address 2',
      image:"image",
      email: 'jane.smith@example.com',
      gpa: 3.2,
      campusId:2
    }
  ]

  const seed = async () => {
    await campus.bulkCreate(seedCampus);
    await student.bulkCreate(seedStudents); 
    
  };

  seed().then(()=>process.exit);