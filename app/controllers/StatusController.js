const databaseConfig = require("../../database/database.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
    host: databaseConfig.HOST,
    dialect: databaseConfig.dialect,

    pool: {
        max: databaseConfig.pool.max,
        min: databaseConfig.pool.min,
        acquire: databaseConfig.pool.acquire,
        idle: databaseConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.sequelize.sync();

const STATUS = db.status = require("../models/Status")(sequelize, Sequelize);

const OP = db.Sequelize.Op;

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
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong from create satus"
            });
        })
}

exports.findAll = async (req, res) => {
    //const description = req.body.description;
    //var condition = description ? { description: { [Op.iLike]: `%${description}%` } } : null;

    await STATUS.findAll()
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong from get satus by description"
            });
        })
}