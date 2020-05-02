const Status = require('./Status')
const Project = require('./Project')
const User = require('./User')
const Phase = require('./Phase')

module.exports = (sequelize, Sequelize)=>{
    var project_tasks = sequelize.define("project_tasks",{
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:Sequelize.BIGINT
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        description:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        createDate:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        finishDate:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        projects_id:{
            type: Sequelize.BIGINT,
            references:{
                model:Project,
                key:'id'
            }
        },
        status_id:{
            type: Sequelize.BIGINT,
            model: Status,
            key:'id'
        },
        // phase_id:{
        //     type: Sequelize.BIGINT,
        //     model: Phase,
        //     key: 'id'
        // },
        user_assigned:{
            type: Sequelize.BIGINT,
            defaultValue: Sequelize.literal(1),
            model: User,
            key: 'id'
        }
    },{
        freezeTable: true,
        timestamps: false,
        tableName: 'project_tasks'
    });

    project_tasks.associate = function (models) {
        models.project_tasks.hasOne(models.projects_id, { foreignKey: 'projects_id' });
        models.project_tasks.hasOne(models.Status, { foreignKey: 'status_id' });
        models.project_tasks.hasOne(models.phases_id, { foreignKey: 'phases_id'});
        models.project_tasks.hasOne(models.user_assigned, { foreignKey: 'user_assigned'});
    }

    return project_tasks;
    
}