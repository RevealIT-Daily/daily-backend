const { Router } = require('express');
const passport = require('passport');

// PASSPORT //
//app.use(passport.initialize());
const router = Router();

const status = require('../app/controllers/StatusController');
const defaultrole = require('../app/controllers/DefaultRoleController');
const AccountTypeController = require('../app/controllers/AccountType.controller');
const ProjectTask = require('../app/controllers/ProjectTask.Controller');
const Project = require('../app/controllers/Project.Controller');
const User = require('../app/controllers/UserController');

/***
 * @swagger
 * /api/status:
 *  post:
 *     tags:
 *          - Statusssss
 *     description: Create new status
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: description,
 *            description: Status object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - description
 *              properties:
 *                  description:
 *                      type: string
 *     responses:
 *          201:
 *              description: Returns status object
 */
router.post('/api/status', status.create);

/***
 * @swagger
 * /api/status:
 *  get:
 *     tags:
 *          - Status
 *     description: Use to get all status
 *     responses:
 *          '200':
 *              description: Returns status object
 */
router.get('/api/status', status.findAll);

/***
 * @swagger
 * /api/status/{id}:
 *  get:
 *     tags:
 *          - Status
 *     description: Get status by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: id
 *            description: Primary key
 *            in: path
 *     responses:
 *          '200':
 *              description: Returns status object
 */
router.get('/api/status/:id', status.findById);

/***
 * @swagger
 * /api/status:
 *  put:
 *     tags:
 *          - Status
 *     description: Update status object by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Status description
 *            description: Status object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - id
 *                  - description
 *              properties:
 *                  id:
 *                      type: integer
 *                  description:
 *                      type: string
 *     responses:
 *          '200':
 *              description: Returns status object
 */
router.put('/api/status', status.update);

/**
 *  THIS METHOD IS ONLY USED BY BACKEND DEVELOPERS 
 */
router.delete('/api/dev/status/:id', status.delete);


// DEFAULTROLE ROUTES //

/***
 * @swagger
 * /api/defaultRole:
 *  post:
 *     tags:
 *          - Default role
 *     description: Create new default role
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: default role,
 *            description: Default role object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - description
 *              properties:
 *                  description:
 *                      type: string
 *                  status_id:
 *                      type: integer
 *     responses:
 *          201:
 *              description: Returns default roles object
 */
router.post('/api/defaultRole', defaultrole.create);

/***
 * @swagger
 * /api/defaultRole:
 *  get:
 *     tags:
 *          - Default role
 *     description: Use to get all default roles
 *     responses:
 *          '200':
 *              description: Returns default roles object
 */
router.get('/api/defaultRole', defaultrole.findAll);

/***
 * @swagger
 * /api/defaultRole/{id}:
 *  get:
 *     tags:
 *          - Default role
 *     description: Get default role by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: id
 *            description: Primary key
 *            in: path
 *     responses:   
 *          '200':
 *              description: Returns default roles object
 */
router.get('/api/defaultRole/:id', defaultrole.findById);

/***
 * @swagger
 * /api/defaultRole:
 *  put:
 *     tags:
 *          - Default role
 *     description: Update default role object by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Status description
 *            description: Status object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - id
 *                  - description
 *              properties:
 *                  id:
 *                      type: integer
 *                  description:
 *                      type: string
 *                  status_id:
 *                      type: integer
 *     responses:
 *          '200':
 *              description: Returns status object
 */
router.put('/api/defaultRole', defaultrole.update);


// ACCOUNT TYPE ROUTES //

/***
 * @swagger
 * /api/accountType:
 *  post:
 *     tags:
 *          - Account type
 *     description: Create new account type
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: default role,
 *            description: Account type object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - description
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  status_id:
 *                      type: integer
 *     responses:
 *          201:
 *              description: Returns account type object
 */
router.post('/api/accountType', AccountTypeController.create);

/***
 * @swagger
 * /api/accountType:
 *  get:
 *     tags:
 *          - Account type
 *     description: Use to get all account types
 *     responses:
 *          '200':
 *              description: Returns account types object
 */
router.get('/api/accountType', AccountTypeController.findAll);

/***
 * @swagger
 * /api/accountType/{id}:
 *  get:
 *     tags:
 *          - Account type
 *     description: Get account type by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: id
 *            description: Primary key
 *            in: path
 *     responses:   
 *          '200':
 *              description: Returns account type object
 */
router.get('/api/accountType/:id', AccountTypeController.findById);

/***
 * @swagger
 * /api/accountType:
 *  put:
 *     tags:
 *          - Account type
 *     description: Update account type object by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Status description
 *            description: Status object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - id
 *                  - description
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  status_id:
 *                      type: integer
 *     responses:
 *          '200':
 *              description: Returns the message 'Account type updated!'
 */
router.put('/api/accountType/', AccountTypeController.update);

/***
 * @swagger
 * /api/projectTask:
 *  post:
 *     tags:
 *          - Project task
 *     description: Create new project task
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Project task description,
 *            description: Project task object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - name
 *                  - description
 *                  - project_id
 *                  - status_id
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  project_id:
 *                      type: integer
 *                  status_id:
 *                      type: integer
 *     responses:
 *          201:
 *              description: Returns project task object
 */
router.post('/api/projectTask', ProjectTask.create);

/***
 * @swagger
 * /api/accountType:
 *  get:
 *     tags:
 *          - Project task
 *     description: Use to get all project tasks
 *     responses:
 *          '200':
 *              description: Returns project tasks object
 */
router.get('/api/projectTask', ProjectTask.findAll);

/***
 * @swagger
 * /api/projectTask/{id}:
 *  get:
 *     tags:
 *          - Project task
 *     description: Get project task by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: id
 *            description: Primary key
 *            in: path
 *     responses:   
 *          '200':
 *              description: Returns project task object
 */
router.get('/api/projectTask/:id',ProjectTask.findById);

/***
 * @swagger
 * /api/projectTask:
 *  put:
 *     tags:
 *          - Project task
 *     description: Update project task object by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Project task description
 *            description: Project task object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - id
 *                  - name
 *                  - description
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  status_id:
 *                      type: integer
 *     responses:
 *          '200':
 *              description: Returns the message 'Project task updated!'
 */
router.put('/api/projectTask',ProjectTask.update);

/***
 * @swagger
 * /api/project:
 *  post:
 *     tags:
 *          - Project 
 *     description: Create new project 
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Project description,
 *            description: Project object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - name
 *                  - description
 *                  - members
 *                  - status_id
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  members:
 *                      type: integer
 *                  status_id:
 *                      type: integer
 *     responses:
 *          201:
 *              description: Returns project object
 */
router.post('/api/project', Project.create);

/***
 * @swagger
 * /api/project:
 *  get:
 *      tags:
 *          - Project
 *      description: User to get all projects
 *      responses:
 *          '200':
 *              description: Return projects object
 */
router.get('/api/project',Project.findAll)

/***
 * @swagger
 * /api/project/{id}:
 *  get:
 *     tags:
 *          - Project 
 *     description: Get project  by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: id
 *            description: Primary key
 *            in: path
 *     responses:   
 *          '200':
 *              description: Returns project  object
 */

router.get('/api/project/:id',Project.findById)

/***
 * @swagger
 * /api/project:
 *  put:
 *     tags:
 *          - Project
 *     description: Update project object by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: Project description
 *            description: Project object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - id
 *                  - name
 *                  - description
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *     responses:
 *          '200':
 *              description: Returns the message 'Project  updated!'
 */
router.put('/api/project', Project.update);

/***
 * @swagger
 * /api/user:
 *  post:
 *     tags:
 *          - User 
 *     description: Create new user 
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: User description,
 *            description: User object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - email
 *                  - password
 *                  - account_type
 *                  - default_role
 *                  - status_id
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  account_type:
 *                      type: integer
 *                  default_role:
 *                      type: integer
 *                  status_id:
 *                      type: integer
 *     responses:
 *          201:
 *              description: Returns user object
 */
router.post('/api/user',User.create);

/***
 * @swagger
 * /api/user:
 *  get:
 *      tags:
 *          - User
 *      description: User to get all users
 *      responses:
 *          '200':
 *              description: Return user object
 */
router.get('/api/user',User.findAll);

/***
 * @swagger
 * /api/user/{id}:
 *  get:
 *     tags:
 *          - User
 *     description: Get user by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: id
 *            description: Primary key
 *            in: path
 *     responses:   
 *          '200':
 *              description: Returns user object
 */
router.get('/api/user/:id',User.findById);

/***
 * @swagger
 * /api/user:
 *  put:
 *     tags:
 *          - User
 *     description: Update user object by id
 *     produces:
 *          - application/json
 *     parameters:
 *          - name: User description
 *            description: User object
 *            in: body
 *            required: true
 *            schema:
 *              type: object
 *              required: 
 *                  - id
 *                  - email
 *              properties:
 *                  id:
 *                      type: integer
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *                  status_id:
 *                      type: integer
 *     responses:
 *          '200':
 *              description: Returns the message 'User updated!'
 */
router.put('/api/user',User.update);


router.post('/login', passport.authenticate('local'), (req, res) => {

});

module.exports = router;