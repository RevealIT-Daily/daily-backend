const Status = require('./Status')

module.exports = (sequelize,Sequelize)=>{
    var projects = sequelize.define('projects',{
        id:{
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
            type: Sequelize.BIGINT,
            references: {
                model: Status,
                key: 'id'
            },
        }

    },
    {
        freezeTable: true,
        timestamps: false,
        tableName: 'projects'
    });

    projects.associate = function (models) {
        models.projects.hasOne(models.status, { foreignKey: 'status_id' });
    }

    return projects;
}