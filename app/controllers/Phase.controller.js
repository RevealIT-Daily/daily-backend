const dbConnection = require('../../database/database.connection');


const PHASE = dbConnection.Phase;
const STATUS = dbConnection.Status;

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const statusId = req.body.status_id;

    if (!name || !description) res.status(400).send({ message: "Please, send all params value" });

    const phase = {
        name: name,
        description: description,
        status_id: statusId
    }

    await PHASE.create(phase)
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
    await PHASE.findAll(
        {
            include:[
                {model:STATUS}
            ]
        }
    )
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get all account types"
            });
        });
}

exports.findById = async (req, res) => {
    await PHASE.findByPk(req.params.id,
        {include:[{model:STATUS}]}
        )
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Phase not found!' });
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get phase by id"
            });
        });
}

exports.update = async (req, res) => {
    const phaseId = req.body.id;
    const newName = req.body.name;
    const newDescription = req.body.description;
    const newStatusId = req.body.status_id;

    const phase = {
        name: newName,
        description: newDescription,
        status_id: newStatusId
    }

    await PHASE.findByPk(phaseId)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Phase not found!' });

            if (PHASE.update(phase, { where: { id: phaseId } }))
                res.status(200).send({ message: "Phase updated!" });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update account type"
            });
        });
}