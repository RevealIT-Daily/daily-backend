
module.exports = (sequelize,Sequelize)=>{
    var project_users = sequelize.define('project_users',{
        id:{
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
        },
        user_id:{
            type: Sequelize.BIGINT,
            allowNull: false
        },
        projects_id:{
            type: Sequelize.BIGINT,
            allowNull: false
        },
        group_roles_id: {
            type:Sequelize.BIGINT,
            allowNull: false
        }
    },
    {
        freezeTable: true,
        timestamps: false,
        tableName: 'project_users'
    });



    return project_users;
}