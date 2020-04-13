module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("status", {
        id: {
            primaryKey: true,
            autoIncrement:true,
            type:  Sequelize.BIGINT
        },
        description: { type: Sequelize.STRING, }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name,
        timestamps: false,
    });

    return Status;
};