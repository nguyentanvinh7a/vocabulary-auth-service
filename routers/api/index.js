const auth = require('./auth');

const health = require('./health');

const router = require('express').Router();

router.use('/auth', auth);

router.use('/health', health);

module.exports = router;