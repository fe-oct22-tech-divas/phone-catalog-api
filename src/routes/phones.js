import express from 'express';
import { phonesControllers } from '../controllers/phones.js';

export const router = express.Router();

router.get('/', phonesControllers.getMany);
router.get('/:phoneId', phonesControllers.getOne);
