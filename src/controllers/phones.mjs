import { phonesServices } from '../services/phones.mjs';
import { SortBy } from '../types/SortBy.mjs';

const getMany = async(req, res) => {
  const normilizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const params = normilizedUrl.searchParams;
  const page = Number(params.get('page')) || 1;
  const perPage = Number(params.get('perPage')) || 16;
  const sortBy = params.get('sortBy') || SortBy.Newest;

  const loadPhones = await phonesServices.getMany(page, perPage, sortBy);

  res.send({
    data: loadPhones.result,
    total: loadPhones.loadedData,
  });
};

const getOne = async(req, res) => {
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
