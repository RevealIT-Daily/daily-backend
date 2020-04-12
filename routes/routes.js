const { Router } = require('express');
const router = Router();

router.get('/', function(req, res){
    res.send('Works wiith testing')
});

module.exports = router;