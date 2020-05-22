const dbConnection = require('../../database/database.connection');


const PROJECT = dbConnection.Project;
const PROJECTASK = dbConnection.ProjectTasks;
const STATUS = dbConnection.Status;

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const projectId = req.body.project_id
    const statusId = req.body.status_id;
    const user_assigned = req.body.user_assigned;
    const phaseId = req.body.phase_id;


    if (!name || !description || !projectId ) res.status(400).send({ message: "Please, send all params value" });

    const projectType = {
        name: name,
        description: description,
        projects_id: projectId,
        user_assigned:user_assigned,
        status_id:statusId,
        phases_id:phaseId
    }

    await PROJECTASK.create(projectType)
        .then(data => {
            res.status(201).send({ message: "account type created!", data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create ACCOUNT TYPE"
            });
        });
}

exports.findAll = async (req, res) => {
    await PROJECTASK.findAll({
        include:[{
            model:PROJECT
        },{
            model: STATUS
        }
        ]
    })
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get all default roles"
            });
        });
}

exports.findById = async (req, res) => {

    if (!req.params.id) return res.status(400).send({ message: "Id can not be null" });

    await PROJECTASK.findByPk(req.params.id,{
        include:[{
            model:PROJECT
        },{
            model: STATUS
        }
        ]
    })
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Project task not found!' });
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get project task by id"
            });
        });
}

exports.update = async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const status_id= req.body.status_id;
    const user_assigned = req.body.user_assigned;
    const phase_id= req.body.phase_id;

    if (!id) res.send(400).send({ message: 'Id can not be null' });

    const projectask = {
        name: name,
        description: description,
        status_id: status_id,
        user_assigned:user_assigned,
        phases_id:phase_id,
        finishDate: new Date()
    }

    await PROJECTASK.findByPk(id)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Project task not found!' });

            if (PROJECTASK.update(projectask, { where: { id: id } }))
                res.status(200).send({ message: "Project task updated!" });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update project task"
            });
        });
}

exports.getTasksByProject = async (req,res) => {
    if (!req.params.idProject) return res.status(400).send({ message: "Project Id can not be null" });

    await PROJECTASK.findAll({
        include:[{
            model:PROJECT
        },{
            model: STATUS
        }
        ],
        where:{
            projects_id:req.params.idProject
        }
    }).then(data => {
        if(!data) return res.status(400).send({message : 'project task not found!'})
        res.status(200).send({data: data})
    }).catch(err =>{
        res.status(400).send({
            message: err.message || "Something Wrong from update project task"
        })
    })
}

