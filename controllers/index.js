const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const commentsRoutes = require('./comments-routes.js');

router.use('/', homeRoutes)
router.use('/comments-routes', commentsRoutes)

module.exports = router;