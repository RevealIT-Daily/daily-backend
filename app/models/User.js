const AccountType = require('./AccountType');
const DefaultRol = require('./DefaultRole')
const Status =require('./Status')

module.exports = (sequelize, Sequelize) => {
    var USER = sequelize.define('users', {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type: Sequelize.BIGINT
        },
        email:{
            type: Sequelize.STRING,
            allowNull:false
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        },
        created_at:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updated_at:{
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        account_types:{
            type:Sequelize.BIGINT,
            model: AccountType,
            id:'key'
        },
        default_roles:{
            type:Sequelize.BIGINT,
            model: DefaultRol,
            id:'key'
        },
        status_id:{
            type:Sequelize.BIGINT,
            model: Status,
            id:'key'
        }
    },{
        freezeTable: true,
        timestamps: false,
        tableName: 'users'
    });

    USER.associate = function (models){
        models.USER.hasOne(models.account_types, { foreignKey: 'account_types' });
        models.USER.hasOne(models.default_roles, { foreignKey: 'default_roles' });
        models.USER.hasOne(models.status_id, { foreignKey: 'status_id'});
    }
    return USER;
};