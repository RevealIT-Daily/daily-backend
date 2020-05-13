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
        }
    }, {
        freezeTable: true,
        timestamps: false,
    });
        tableName: 'default_roles'

    return default_roles;
}