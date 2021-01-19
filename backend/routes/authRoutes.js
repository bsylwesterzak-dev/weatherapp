const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.post('/checkConfirmation', authController.check_confirmation);
router.post('/checkAuth', requireAuth, (req, res) => {
    res.status(201).json({isAuth: true})
})

module.exports = router;

