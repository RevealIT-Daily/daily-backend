
const dbConnection = require('../../database/database.connection');

const db = {};

db.Sequelize = dbConnection.Sequelize;
db.sequelize = dbConnection.sequelize;

const DEFAULTROLE = require('../models/DefaultRole')(dbConnection.sequelize, dbConnection.Sequelize);
const STATUS = require('../models/Status')(dbConnection.sequelize, dbConnection.Sequelize);

exports.create = async (req, res) => {

    if (!req.body.description || !req.body.status_id) {
        res.status(400).send({
            message: 'Please, send all params value'
        });
    }

    const defaultRole = {
        description: req.body.description,
        status_id: req.body.status_id
    };

    await DEFAULTROLE.create(defaultRole)
        .then(data => {
            res.status(201).send({ message: "default role created!", data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create DEFAULTROLE"
            });
        })
}

exports.findAll = async (req, res) => {
    await DEFAULTROLE.findAll()
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

    await DEFAULTROLE.findByPk(req.params.id)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Default role not found!' });
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get default role by id"
            });
        });
}

exports.update = async (req, res) => {

    const roleId = req.body.id;
    const newDescription = req.body.description;
    const newStatusId = req.body.status_id;

    //if (!req.body.description) res.send(400).send({ message: 'description can not be null' });

    const defaultRole = {
        description: newDescription,
        status_id: newStatusId
    }

    await DEFAULTROLE.findByPk(roleId)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Default role not found!' });

            if (DEFAULTROLE.update(defaultRole, { where: { id: roleId } }))
                res.status(200).send({ message: "Default role updated!" });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update default role"
            });
        });
}