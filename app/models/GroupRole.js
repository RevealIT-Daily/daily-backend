
module.exports = (sequelize, Sequelize) => {
    var group_roles = sequelize.define("group_roles", {
        id: {
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
        },
        name:{
            type: Sequelize.STRING,
            allowNull:false
        },
        description: {
            type: Sequelize.STRING,
            allowNull:false
        },
        status_id: {
            type: Sequelize.BIGINT,
            allowNull:false,
        }
    }, {
        freezeTable: true,
        timestamps: false,
        tableName: 'group_roles'
    });
        

    return group_roles;
}