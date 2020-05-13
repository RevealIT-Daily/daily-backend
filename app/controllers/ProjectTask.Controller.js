const dbConnection = require('../../database/database.connection');

const db = {};

db.Sequelize = db.Sequelize;
db.sequelize = db.sequelize;

const PROJECTASK = require('../models/ProjectTasks')(dbConnection.sequelize, dbConnection.Sequelize);

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const projectId = req.body.project_id
    const statusId = req.body.status_id;
    const user_assigned = req.body.user_assigned;


    if (!name || !description || !projectId ) res.status(400).send({ message: "Please, send all params value" });

    const projectType = {
        name: name,
        description: description,
        projects_id: projectId,
        user_assigned:user_assigned,
        status_id:statusId
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
    await PROJECTASK.findAll()
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

    await PROJECTASK.findByPk(req.params.id)
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

    if (!id) res.send(400).send({ message: 'Id can not be null' });

    const projectask = {
        name: name,
        description: description,
        status_id: status_id,
        user_assigned:user_assigned,
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

