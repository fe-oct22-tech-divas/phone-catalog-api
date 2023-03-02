'use strict';

import * as phoneServices from '../services/phones.js';

export const getAll = async(req, res) => {
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

export const getById = async(req, res) => {
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
