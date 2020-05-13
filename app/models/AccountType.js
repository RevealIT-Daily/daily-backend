const Status = require('./Status');
module.exports = (sequelize, Sequelize) => {
    var account_types = sequelize.define("account_types", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNulls: false
        },
        description: {
            type: Sequelize.STRING,
            allowNulls: false
        },
        status_id: {
            type: Sequelize.BIGINT,
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return account_types;
}