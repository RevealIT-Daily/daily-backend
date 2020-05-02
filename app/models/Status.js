const DefaultRole = require('../models/DefaultRole');
module.exports = (sequelize, Sequelize) => {
    var status = sequelize.define("status", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
        },
        description: { type: Sequelize.STRING }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name,
        timestamps: false
    });

    status.associate = function (models) {
        models.status.belongsTo(models.default_roles, {
            targetKey: 'id',
            foreignKey: 'status_id'
        });
    }

    return status;
};