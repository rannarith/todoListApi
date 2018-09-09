var express = require('express');
var router = express.Router();

// Get home page.
router.get('/', function(req, res) {
    res.render('login');
});

router.get('/register', function(req, res) {
    res.render('register');
});

module.exports = router;