import express from 'express';
import UserController from '../Controller/UserController';
import ManageTokens from '../Helper/Manage-Token';

const router = express.Router()

router.post('/register', UserController.Register);
router.post('/login', UserController.Login)
router.get('/checkuser', UserController.CheckUser)


export default router