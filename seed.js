const db = require("./database")

const {student,campus}= require("./database/models");
const seedCampus=[
      {
        name: 'Harvard University',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Harvard_Hall_%28Harvard_University%29_-_DSC00058.JPG',
        address: '86 Brattle Street, Cambridge, MA 02138, USA',
        description: 'Harvard University is a renowned private Ivy League research university located in Cambridge, Massachusetts. It is one of the oldest and most prestigious universities in the world, offering a wide range of undergraduate and graduate programs.'
      },
      {
        name: 'Stanford University',
        img: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Stanford_Oval_May_2011_panorama.jpg',
        address: '450 Serra Mall, Stanford, CA 94305, USA',
        description: 'Stanford University is a leading private research university situated in Stanford, California. Known for its innovation and academic excellence, Stanford offers diverse programs in areas such as humanities, sciences, engineering, business, and medicine.'
      },
      {
        name: 'Massachusetts Institute of Technology (MIT)',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/MIT_Building_10_and_the_Great_Dome%2C_Cambridge_MA.jpg',
        address: '77 Massachusetts Avenue, Cambridge, MA 02139, USA',
        description: 'The Massachusetts Institute of Technology (MIT) is a world-renowned institution specializing in science, engineering, technology, and research. Located in Cambridge, Massachusetts, MIT is dedicated to advancing knowledge and providing cutting-edge education.'
      },
      {
        name: 'University of Cambridge',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg',
        address: 'The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK',
        description: 'The University of Cambridge is a prestigious public research university located in Cambridge, England. It is one of the oldest universities in the world and offers a wide range of academic disciplines across various faculties and departments.'
      },
      {
        name: 'Oxford University',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Oxford_university_The_Queen%27s_College_by_Fenlio.jpg',
        address: 'University Offices, Wellington Square, Oxford OX1 2JD, UK',
        description: 'The University of Oxford, located in Oxford, England, is a world-renowned institution known for its academic excellence. With a history dating back over nine centuries, Oxford offers a diverse range of undergraduate and postgraduate programs.'
      },
      {
        name: 'California Institute of Technology (Caltech)',
        img: 'Caltech Image',
        address: '1200 E California Blvd, Pasadena, CA 91125, USA',
        description: 'The California Institute of Technology (Caltech) is a prestigious private research university situated in Pasadena, California. Known for its strong focus on science and engineering, Caltech is at the forefront of groundbreaking research and education.'
      },
      {
        name: 'University of Chicago',
        img: 'University of Chicago Image',
        address: '5801 S Ellis Ave, Chicago, IL 60637, USA',
        description: 'The University of Chicago is a renowned private research university located in Chicago, Illinois. It is known for its rigorous academic programs, interdisciplinary approach, and emphasis on critical thinking and inquiry.'
      },
      {
        name: 'Columbia University',
        img: 'Columbia University Image',
        address: '116th St & Broadway, New York, NY 10027, USA',
        description: 'Columbia University is an Ivy League institution situated in New York City. With a rich history and diverse academic offerings, Columbia is known for its world-class faculty and vibrant campus life.'
      },
      {
        name: 'University of California, Berkeley (UC Berkeley)',
        img: 'UC Berkeley Image',
        address: 'Berkeley, CA 94720, USA',
        description: 'The University of California, Berkeley is a renowned public research university located in Berkeley, California. With a strong emphasis on academic excellence and social activism, UC Berkeley offers a wide range of programs across various disciplines.'
      },
      {
        name: 'University of Tokyo',
        img: 'University of Tokyo Image',
        address: '7-3-1 Hongo, Bunkyo City, Tokyo 113-8654, Japan',
        description: 'The University of Tokyo is a prestigious national university located in Tokyo, Japan. It is known for its contributions to research and education in various fields, including science, engineering, humanities, and social sciences.'
      },
      {
        name: 'ETH Zurich (Swiss Federal Institute of Technology)',
        img: 'ETH Zurich Image',
        address: 'Rämistrasse 101, 8092 Zürich, Switzerland',
        description: 'ETH Zurich is a leading science, technology, engineering, and mathematics (STEM) university located in Zurich, Switzerland. Renowned for its cutting-edge research and innovation, ETH Zurich offers a wide range of programs for both undergraduate and postgraduate students.'
      },
      {
        name: 'Peking University',
        img: 'Peking University Image',
        address: '5 Yiheyuan Rd, Haidian District, Beijing, China',
        description: 'Peking University, located in Beijing, China, is a prestigious research university and one of the oldest in the country. It is recognized for its comprehensive academic programs, with a focus on science, humanities, social sciences, and economics.'
      },
      {
        name: 'Sorbonne University',
        img: 'Sorbonne University Image',
        address: '4 Place Jussieu, 75005 Paris, France',
        description: 'Sorbonne University, situated in Paris, France, is a renowned research university with a rich history. It offers a broad range of disciplines and is known for its contributions to the arts, sciences, humanities, and medicine.'
      },
      {
        name: 'University of Melbourne',
        img: 'University of Melbourne Image',
        address: 'Parkville VIC 3010, Australia',
        description: 'The University of Melbourne is a prestigious institution located in Parkville, Victoria, Australia. It is known for its academic excellence, research contributions, and diverse range of programs across various fields of study.'
      },
      {
        name: 'National University of Singapore (NUS)',
        img: 'National University of Singapore Image',
        address: '21 Lower Kent Ridge Rd, Singapore 119077',
        description: 'The National University of Singapore (NUS) is a leading global university located in Singapore. It offers a comprehensive range of undergraduate and postgraduate programs across various disciplines and is known for its research and innovation initiatives.'
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