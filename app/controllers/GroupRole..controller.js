const dbConnection = require('../../database/database.connection');


const GROUPROLE = dbConnection.GroupRoles;
const STATUS = dbConnection.Status;

exports.create = async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const statusId = req.body.status_id;

    if (!name || !description) res.status(400).send({ message: "Please, send all params value" });

    const groupRole = {
        name: name,
        description: description,
        status_id: statusId
    }

    await GROUPROLE.create(groupRole)
        .then(data => {
            res.status(201).send({ message: "group role created!", data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create GROUP ROLE"
            });
        });
}

exports.findAll = async (req, res) => {
    await GROUPROLE.findAll(
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
                message: err.message || "Something wrong from get all group roles"
            });
        });
}

exports.findById = async (req, res) => {
    await GROUPROLE.findByPk(req.params.id,
        {include:[{model:STATUS}]}
        )
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Group Role not found!' });
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get group role by id"
            });
        });
}

exports.update = async (req, res) => {
    const groupRoleId = req.body.id;
    const newName = req.body.name;
    const newDescription = req.body.description;
    const newStatusId = req.body.status_id;

    const groupRole = {
        name: newName,
        description: newDescription,
        status_id: newStatusId
    }

    await GROUPROLE.findByPk(groupRoleId)
        .then(data => {
            if (!data) return res.status(404).send({ message: 'Group role not found!' });

            if (GROUPROLE.update(groupRole, { where: { id: groupRoleId } }))
                res.status(200).send({ message: "Group role updated!" });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from update account type"
            });
        });
        
}