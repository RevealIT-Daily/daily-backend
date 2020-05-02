const Status = require('./Status');

module.exports = (sequelize, Sequelize) => {
    var default_roles = sequelize.define("default_roles", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
        },
        description: {
            type: Sequelize.STRING
        },
        status_id: {
            type: Sequelize.BIGINT,
            references: {
                model: Status,
                key: 'id'
            },
        }
    }, {
        freezeTable: true,
        timestamps: false,
        tableName: 'default_roles'
    });

    default_roles.associate = function (models) {
        models.default_roles.hasOne(models.status, { foreignKey: 'status_id' });
    }

    return default_roles;
}