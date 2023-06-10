const router = require('express').Router();

// defined path for each route
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

// root directory -> homeRoutes
router.use('/', homeRoutes);

// /api root directory -> apiRoutes
router.use('/api', apiRoutes);

module.exports = router;