import express from 'express';
import { addComment , getComments } from '../controllers/commentController.js';

const router = express.Router();

router.post('/comments', addComment);
router.get('/comments/:restaurantId', getComments);

export default router;
