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

/***
 * @swagger
 * /api/status:
 *  post:
 *     tags:
 *          - Status
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


router.post('/api/projectTask', ProjectTask.create);

router.get('/api/projectTask', ProjectTask.findAll);


router.post('/api/project', Project.create);

router.get('/api/project',Project.findAll)


router.post('/login', passport.authenticate('local'), (req, res) => {

});

module.exports = router;