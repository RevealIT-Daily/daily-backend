const dbConnection = require('../../database/database.connection');


const USER = dbConnection.User;
const ACCOUNTYPE = dbConnection.AccountType;
const DEFAULTROLE = dbConnection.DefaultRole
const STATUS = dbConnection.Status;

exports.create = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const account_type = req.body.account_type;
    const default_role = req.body.default_role;
    const status_id = req.body.status_id;


    if (!email || !password || !account_type || !default_role || !status_id)
     res.status(400).send({ message: "Please, send all params value" });

    const user = {
        email: email,
        password: password,
        account_types: account_type,
        default_roles:default_role,
        status_id: status_id
    }

    await USER.create(user)
        .then(data => {
            res.status(201).send({ message: "user created!", data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from create USER"
            });
        });
}

exports.findAll = async (req, res) => {
    await USER.findAll({
        include:[
            {
                model:ACCOUNTYPE
            },{
                model:DEFAULTROLE
            },{
                model:STATUS
            }
        ]
    })
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(err => {
            res.status(400).send({
                message: err.message || "Something wrong from get all user "
            });
        });
}

exports.findById = async (req,res)=>{

    if(!req.params.id) return res.status(400).send({message: "Id can not be null"});

    await USER.findByPk(req.params.id)
            .then(data => {
                if(!data) return res.status(404).send({message: "User not found!"});
                res.status(200).send({data: data});
            })
            .catch(err => {
                res.status(400).send({
                    message: err.message || "something wrong from get all USER"
                });
            });
}

exports.update = async (req,res)=>{
    const userId=req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    const statusId = req.body.status_id;
    const update_at= new Date();

    if(!userId) return res.status(400).send({message: 'Id can not be null!'});

    const project_task = {
        email: email,
        password:password,
        status_id:statusId,
        updated_at:update_at
    }

    await USER.findByPk(userId)
    .then(data=>{
        if(!data) return res.status(400).send({message: 'User not found!'});

        if(USER.update(project_task, {where: {id:userId}}))
            res.status(200).send({message: 'User updated!'})

    }).catch(err =>{
        res.status(400).send({
            message: err.message || 'Something wrong from update user'
        })
    });
}
