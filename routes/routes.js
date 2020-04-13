const { Router } = require('express');
const router = Router();

router.get('/', function(req, res){
    res.send('Working')
});

const user = require('../app/controllers/StatusController');

router.post('/status', user.create);
router.get('/status/description', user.findAll);

module.exports = router;