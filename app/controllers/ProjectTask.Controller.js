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


    if (!name || !description || !projectId ) res.status(400).send({ message: "Please, send all params value" });

    const projectType = {
        name: name,
        description: description,
        projects_id: projectId,
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
