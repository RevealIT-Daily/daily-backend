const { Router } = require('express');
const router = Router();

router.get('/', function(req, res){
    res.send('Working')
});

const user = require('../app/controllers/StatusController');

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
router.post('/api/status', user.create);

/***
 * @swagger
 * /api/status:
 *  get:
 *     tags:
 *          - Status
 *     description: Use to get all statuses
 *     responses:
 *          '200':
 *              description: Returns status object
 */
router.get('/api/status', user.findAll);

module.exports = router;