import db from '../../models/index.js';

function normalize(phone) {
  const copyOfPhone = { ...phone };

  delete copyOfPhone.createdAt;

  return copyOfPhone;
}

async function getMany() {
  return db.Phones.findAll({
    order: ['name'],
    raw: true,
  });
}

function findById(phoneId) {
  return db.Phones.findByPk(phoneId);
}

export const phonesServices = {
  normalize,
  getMany,
  findById,
};
