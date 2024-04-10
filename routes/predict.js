const express = require('express');
const router = express.Router();


router.post('/', function(req, res) {
 //
});


router.get('/', function(req, res) {
    res.send('Predict route')
});
module.exports = router;