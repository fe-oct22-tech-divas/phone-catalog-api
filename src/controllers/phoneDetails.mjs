import { phoneDetailsServices } from '../services/phoneDetails.mjs';

const getOne = async(req, res) => {
  const { phoneId } = req.params;

  try {
    const findPhoneById = await phoneDetailsServices.findById(phoneId);

    if (!findPhoneById) {
      res.sendStatus(404);

      return;
    }

    res.send(
      phoneDetailsServices.normalize(findPhoneById.get({ plain: true })),
    );

    return findPhoneById;
  } catch (err) {
    res.sendStatus(500);
  }
};

export const phoneDetailsControllers = {
  getOne,
};
