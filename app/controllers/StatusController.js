
const dbConnection = require('../../database/database.connection');

const db = {};

db.Sequelize = dbConnection.Sequelize;
db.sequelize = dbConnection.sequelize;

//db.sequelize.sync();

const STATUS = require("../models/Status")(dbConnection.sequelize, dbConnection.Sequelize);

//const OP = db.Sequelize.Op;

exports.create = async (req, res) => {

    if (!req.body.description) {
        res.status(400).send({
            message: "Description can not be null"
        });
    }

    const status = {
        description: req.body.description
    };

    await STATUS.create(status)
        .then(data => {
            res.status(201).send({ "message": "Satus created!", "data": data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create satus"
            });
        })
}

exports.findAll = async (req, res) => {
    await STATUS.findAll()
        .then(data => {
            res.status(200).send({ "data": data });
        }).catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get satus by get all status"
            });
        })
}

exports.findById = async (req, res) => {
    const statusId = req.params.id;

    await STATUS.findByPk(statusId).then(data => {
        res.status(200).send({ "data": data });
    }).catch(err => {
        res.status(400).send({
            message: err.message || "Something wrong from get satus by get status find by primary key"
        });
    });
}

exports.update = async (req, res) => {
    const statusId = req.body.id;

    if (!statusId) res.status(400).send({ message: 'id can not be null' });

    if (!req.body.description) res.send(400).send({ message: 'description can not be null' });

    const status = {
        description: req.body.description
    }

    await STATUS.update(status, { where: { id: statusId } }).then(data => {
        res.status(200).send({ "message": "Status description updated" });
    });
}

/**
 *  THIS METHOD IS ONLY USED BY BACKEND DEVELOPERS 
 */
exports.delete = async (req, res) => {
    const statusId = req.params.id;

    if (!statusId) res.status(400).send({ "message": "id is required" });

    await STATUS.destroy({ where: { id: statusId } }).then(data => {
        res.status(200).send({ "message": "Status deleted", "data": data });
    });
}