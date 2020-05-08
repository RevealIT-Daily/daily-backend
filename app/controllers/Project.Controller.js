
const dbConnection = require('../../database/database.connection');

const db = {};

db.Sequelize = dbConnection.Sequelize;
db.sequelize = dbConnection.sequelize;

const PROJECT = require('../models/Project')(dbConnection.sequelize, dbConnection.Sequelize);

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const members = req.body.members
    const statusId = req.body.status_id;


    if (!name || !description || !members ) res.status(400).send({ message: "Please, send all params value" });

    const Project = {
        name: name,
        description: description,
        members: members,
        status_id:statusId
    }

    await PROJECT.create(Project)
        .then(data => {
            res.status(201).send({ message: "Project created!", data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create PROJECT"
            });
        });
}

exports.findAll = async (req,res)=>{
 await PROJECT.findAll()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get all PROJECTS"
            });
        });
}
exports.findById = async (req, res) => {

    if (!req.params.id) return res.status(400).send({ message: "Id can not be null" });

    await PROJECT.findByPk(req.params.id)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Project not found!' });
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get project by id"
            });
        });
}

exports.update = async (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const members = req.body.members;
    const status_id = req.body.status_id;

    if (!id) res.send(400).send({ message: 'Id can not be null' });

    const project = {
        name: name,
        description: description,
        members:members,
        status_id: status_id
    }

    await PROJECT.findByPk(id)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Project not found!' });

            if (PROJECT.update(project, { where: { id: id } }))
                res.status(200).send({ message: "Project updated!" });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update Project"
            });
        });
}
