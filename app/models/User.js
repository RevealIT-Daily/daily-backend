module.exports = (sequelize, sequelize) => {
    const USER = sequelize.define('users', {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type: sequelize.BIGINT
        }
    });
};