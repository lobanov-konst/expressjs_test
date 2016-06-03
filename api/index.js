var express = require('express'),
    router = express.Router();

router.get('/mongo/create', function(req, res, next) {
    res.send(req.originalUrl);
});

router.get('/mongo/remove', function(req, res, next) {
    res.send(req.originalUrl);
});

module.exports = router;
