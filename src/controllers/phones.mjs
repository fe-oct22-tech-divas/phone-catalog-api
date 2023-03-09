import { phonesServices } from '../services/phones.mjs';

const getMany = async (req, res) => {
  const loadPhones = await phonesServices.getMany();

  res.send(loadPhones);
};

const getOne = async (req, res) => {
  const { phoneId } = req.params;

  try {
    const findPhoneById = await phonesServices.findById(phoneId);

    if (!findPhoneById) {
      res.sendStatus(404);

      return;
    }

    res.send(phonesServices.normalize(findPhoneById.get({ plain: true })));

    return findPhoneById;
  } catch (err) {
    res.sendStatus(500);
  }
};

export const phonesControllers = {
  getMany,
  getOne,
};
