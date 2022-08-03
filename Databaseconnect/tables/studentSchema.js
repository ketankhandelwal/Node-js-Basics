const { sequelize, Sequelize } = require("../dbscript");


    const student = sequelize.define("student", {
      student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    
    
    
      name: {
        type: Sequelize.STRING,
      },
    
      dob: {
        type: Sequelize.DATE,
      },
    
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
    
      branch_id: {
        type: Sequelize.INTEGER,
      },
    
      contact_no: {
        type: Sequelize.BIGINT,
      },
    
      course_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
    
      created_by: {
        type: Sequelize.STRING,
      },
    
      updated_by: {
        type: Sequelize.STRING,
      },
    
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });


    module.exports = student;
  


  




  