const { Router } = require('express');
const router = Router();

router.get('/', function (req, res) {
    res.send('Working')
});

const status = require('../app/controllers/StatusController');

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
 *     description: Get status by primary key
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
 * /api/status/:
 *  put:
 *     tags:
 *          - Status
 *     description: Update status description by primar key
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

module.exports = router;