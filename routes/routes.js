const { Router } = require('express');
const router = Router();

router.get('/', function(req, res){
    res.send('Test works')
});

module.exports = router;