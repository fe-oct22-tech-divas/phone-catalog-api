import express from 'express';
import { phonesControllers } from '../controllers/phones.mjs';

export const phonesRouter = express.Router();

phonesRouter.get('/', phonesControllers.getMany);
phonesRouter.get('/:phoneId', phonesControllers.getOne);
