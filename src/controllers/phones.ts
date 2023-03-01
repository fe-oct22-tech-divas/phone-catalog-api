'use strict';

import express from 'express';
import * as phoneServices from '../services/phones';

export const getAll = async(req: express.Request, res: express.Response) => {
  const { limit, offset } = req.query;

  const limitNum = Number(limit);
  const offsetNum = Number(offset);

  try {
    const phones = await phoneServices.getAll(limitNum, offsetNum);

    res.send(phones);
  } catch (e) {
    res.statusCode = 404;
    res.send();
  }
};

export const getById = async(req: express.Request, res: express.Response) => {
  const { phoneId } = req.params;

  if (!phoneId) {
    res.sendStatus(400);

    return;
  }

  const foundPhone = await phoneServices.getById(phoneId);

  if (!foundPhone) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(foundPhone);
};
