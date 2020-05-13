const databaseConfig = require("./database.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,

    pool: {
        max: databaseConfig.pool.max,
        min: databaseConfig.pool.min,
        acquire: databaseConfig.pool.acquire,
        idle: databaseConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/Table
db.Project = require('../app/models/Project')(db.sequelize, db.Sequelize);
db.ProjectTasks = require('../app/models/ProjectTasks')(db.sequelize,db.Sequelize);
db.Status = require('../app/models/Status')(db.sequelize,db.Sequelize);
db.User = require('../app/models/User')(db.sequelize,db.Sequelize);
db.AccountType = require('../app/models/AccountType')(db.sequelize,db.Sequelize);
db.DefaultRole = require('../app/models/DefaultRole')(db.sequelize,db.Sequelize);


//Relations
db.Project.belongsTo(db.Status,{foreignKey: 'status_id'});
db.ProjectTasks.belongsTo(db.Project, {foreignKey: 'projects_id'}); // Adds fk_company to User
db.ProjectTasks.belongsTo(db.Status,{foreignKey: 'status_id'});
db.User.belongsTo(db.AccountType, {foreignKey:'account_types'});
db.User.belongsTo(db.DefaultRole, {foreignKey: 'default_roles'});
db.User.belongsTo(db.Status,{foreignKey: 'status_id'});
db.DefaultRole.belongsTo(db.Status,{foreignKey:'status_id'});
db.AccountType.belongsTo(db.Status,{foreignKey:'status_id'});


module.exports = db;