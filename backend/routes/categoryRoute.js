import express from 'express';
import { addCategory, removeCategory, listCategory } from '../controllers/categoryController.js';
import adminAuth from '../middleware/adminAuth.js';

const categoryRouter = express.Router();

categoryRouter.post('/add', adminAuth,addCategory);
categoryRouter.post('/remove', adminAuth, removeCategory)
categoryRouter.get('/list', listCategory)

export default categoryRouter;