const router = require('express').Router();

const auth = require('./auth');
const health = require('./health');

router.use('/auth', auth);
router.use('/health', health);

module.exports = router;