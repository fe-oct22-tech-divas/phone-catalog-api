import _ from 'lodash';

import * as PhoneDetails from '../../db/models/PhoneDetails.js';

function normalize(phone) {
  const copyOfPhone = _.cloneDeep(phone);

  delete copyOfPhone.createdAt;

  return copyOfPhone;
}

function findById(phoneId) {
  return PhoneDetails.findByPk(phoneId);
}

export const phoneDetailsServices = {
  normalize,
  findById,
};
