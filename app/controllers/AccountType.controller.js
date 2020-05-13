const dbConnection = require('../../database/database.connection');


const ACCOUNTYPE = dbConnection.AccountType;
const STATUS = dbConnection.Status;

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const statusId = req.body.status_id;

    if (!name || !description) res.status(400).send({ message: "Please, send all params value" });

    const accountType = {
        name: name,
        description: description,
        status_id: statusId
    }

    await ACCOUNTYPE.create(accountType)
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
    await ACCOUNTYPE.findAll(
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
    await ACCOUNTYPE.findByPk(req.params.id,
        {include:[{model:STATUS}]}
        )
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Account type not found!' });
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get account type by id"
            });
        });
}

exports.update = async (req, res) => {
    const accountTypeId = req.body.id;
    const newName = req.body.name;
    const newDescription = req.body.description;
    const newStatusId = req.body.status_id;

    const accountType = {
        name: newName,
        description: newDescription,
        status_id: newStatusId
    }

    await ACCOUNTYPE.findByPk(accountTypeId)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Account type not found!' });

            if (ACCOUNTYPE.update(accountType, { where: { id: accountTypeId } }))
                res.status(200).send({ message: "Account type updated!" });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update account type"
            });
        });
}