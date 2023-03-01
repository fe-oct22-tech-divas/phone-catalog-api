import express from 'express';
import * as phoneControllers from '../controllers/phones';

export const router = express.Router();
router.get('/', phoneControllers.getAll);
router.get('/:phoneId', phoneControllers.getById);
