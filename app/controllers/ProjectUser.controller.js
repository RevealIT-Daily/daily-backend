
const dbConnection = require('../../database/database.connection');


const PROJECTUSER = dbConnection.ProjectUser;
const USER = dbConnection.User;
const PROJECT = dbConnection.Project;
const GROUPROLE = dbConnection.GroupRoles;

exports.create = async (req, res) => {

    
    if (!req.body.user_id || !req.body.projects_id || !req.body.group_roles_id) {
        res.status(400).send({
            message: 'Please, send all params value'
        });
    }

    const projectUser = {
        user_id: req.body.user_id,
        projects_id: req.body.projects_id,
        group_roles_id:req.body.group_roles_id
    };
    
    await PROJECTUSER.create(projectUser)
        .then(data => {
            res.status(201).send({ message: "Project user created!", data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create PROJECT USER"
            });
        })
}

exports.findAll = async (req, res) => {
    await PROJECTUSER.findAll({
        include:[
            {model:USER},
            {model:PROJECT},
            {model:GROUPROLE}
        ]
    })
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get all projects user"
            });
        });
}

exports.findById = async (req, res) => {

    if (!req.params.id) return res.status(400).send({ message: "Id can not be null" });

    await PROJECTUSER.findByPk(req.params.id,{
        include:[{model:USER},{model:GROUPROLE},{model:PROJECT}]
    })
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Project user not found!' });
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get project user by id"
            });
        });
}

exports.update = async (req, res) => {

    const projectUserId = req.body.id;
    const userId = req.body.user_id;
    const projectId = req.body.projects_id;
    const groupRoleId = req.body.group_roles_id;

    //if (!req.body.description) res.send(400).send({ message: 'description can not be null' });

    const projectUser = {
        user_id: userId,
        projects_id: projectId,
        group_roles_id: groupRoleId
    }

    await PROJECTUSER.findByPk(projectUserId)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Project user not found!' });

            if (PROJECTUSER.update(projectUser, { where: { id: projectUserId } }))
                res.status(200).send({ message: "Project user updated!" });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update default role"
            });
        });
}