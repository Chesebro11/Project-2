const router = require('express').Router();

// const homeRoutes = require('./home-routesjs');
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
// const dashboardRoutes = require('./dashboard-routes.js');

// router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// router.use('/dashboard', dashboardRoutes);
module.exports = router;