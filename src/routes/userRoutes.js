const express  = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserById,
    // updateUser,
    deactivateUser,
    // changeUserRole
} = require('../controllers/userController.js');

const { verifyToken, isAdmin, isHr } = require('../middlewares/authMiddleware');


router.use(verifyToken); // all routes are protected

router.get('/', isHr, getAllUsers); // HR can view all users
router.get('/:id', getUserById); // Any logged in user can view their profile
// router.put('/:id', updateUser); // Allow self or admin to update
router.patch('/:id/deactivate', isAdmin, deactivateUser);
// router.patch('/:id/role', isAdmin, changeUserRole);

module.exports = router;