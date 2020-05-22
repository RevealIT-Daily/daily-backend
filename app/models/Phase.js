
module.exports = (sequelize,Sequelize) => {
    var phases = sequelize.define('phases',{
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
            allowNull:false
        },
        status_id:{
            type:Sequelize.BIGINT,
            allowNull:false
        }
    },{
        freezeTable: true,
        timestamps: false,
        tableName: 'phases'
    });

    return phases;
}