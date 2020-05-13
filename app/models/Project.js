const Status = require('./Status')
const Project_tasks = require('./ProjectTasks');

module.exports = (sequelize,Sequelize)=>{
    var projects = sequelize.define('projects',{
        id:{
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        description:{
            type: Sequelize.STRING
        },
        members: {
            type:Sequelize.STRING,
            allowNull: false
        },
        status_id: {
            type: Sequelize.BIGINT
        }

    },
    {
        freezeTable: true,
        timestamps: false,
        tableName: 'projects'
    });



    return projects;
}