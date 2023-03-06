import express from 'express';
import { phoneDetailsControllers } from '../controllers/phoneDetails.mjs';

export const phoneDetailsRouter = express.Router();

phoneDetailsRouter.get('/:phoneId', phoneDetailsControllers.getOne);
