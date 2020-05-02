const Status = require('./Status')

module.exports = (sequelize,Sequelize) => {
    var phases = sequelize.define('phases',{
        id:{
            primeryKey:true,
            autoIncrement:true,
            type:Sequelize.BIGINT
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:false
        },
        status_id:{
            type:Sequelize.BIGINT,
            references:{
            model: Status,
            key: 'id'
            }
        }
    },{
        freezeTable: true,
        timestamps: false,
        tableName: 'phases'
    });

    phases.associate = function (models){
        models.phases.hasOne(models.status, { foreignKey: 'status_id'});
    }

    return phases;
}