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
        },
        default_roles:{
            type:Sequelize.BIGINT,
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
    return USER;
};