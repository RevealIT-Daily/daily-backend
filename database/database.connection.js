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
db.GroupRoles = require('../app/models/GroupRole')(db.sequelize,db.Sequelize);
db.ProjectUser = require('../app/models/ProjectUsers')(db.sequelize,db.Sequelize);
db.Phase = require('../app/models/Phase')(db.sequelize,db.Sequelize);



//Relations
db.Project.belongsTo(db.Status,{foreignKey: 'status_id'});
db.ProjectTasks.belongsTo(db.Project, {foreignKey: 'projects_id'}); // Adds fk_company to User
db.ProjectTasks.belongsTo(db.Status,{foreignKey: 'status_id'});
db.ProjectTasks.belongsTo(db.Phase,{foreignKey: 'phase_id'});
db.User.belongsTo(db.AccountType, {foreignKey:'account_types'});
db.User.belongsTo(db.DefaultRole, {foreignKey: 'default_roles'});
db.User.belongsTo(db.Status,{foreignKey: 'status_id'});
db.DefaultRole.belongsTo(db.Status,{foreignKey:'status_id'});
db.AccountType.belongsTo(db.Status,{foreignKey:'status_id'});
db.GroupRoles.belongsTo(db.Status,{foreignKey: 'status_id'});
db.ProjectUser.belongsTo(db.User,{foreignKey: 'user_id'});
db.ProjectUser.belongsTo(db.Project,{foreignKey: 'projects_id'});
db.ProjectUser.belongsTo(db.GroupRoles,{foreignKey: 'group_roles_id'});
db.Phase.belongsTo(db.Status, {foreignKey: 'status_id'});


module.exports = db;