const dbConfig = require("../Databaseconnect/dbConstants");

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.LOCALHOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

async function connect(){

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  
  connect();




module.exports = {
  sequelize : sequelize,
  Sequelize : Sequelize
};





