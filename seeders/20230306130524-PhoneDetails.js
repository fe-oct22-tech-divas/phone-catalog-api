/* eslint-disable */
'use strict';

const { PhoneDetails } = require('../models');

const fs = require('fs/promises');
const path = require('path');
const directoryPath = path.join(path.dirname(__dirname), 'phonesData/phones');
const phones = [];

const readJsonFiles = async () => {
  const files = await fs.readdir(directoryPath, (err) => {
    if (err) {
      return 'Error reading directory: ' + err;
    }
  });

  for (const file of files) {
    if (path.extname(file) === '.json') {
      try {
        const jsonData = await fs.readFile(
          path.join(directoryPath, file),
          'utf-8'
        );
        const data = JSON.parse(jsonData);

        Object.assign(data, { createdAt: new Date() });
        data.description = JSON.stringify(data.description);
        phones.push(data);
      } catch (e) {
        console.error(`Error parsing JSON file ${file}: ${e}`);
      }
    }
  }
};

const initPhones = async () => {
  await readJsonFiles();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await initPhones();
    await queryInterface.bulkInsert(PhoneDetails.tableName, phones, {});
  },

  async down(queryInterface) {
  await queryInterface.bulkDelete(PhoneDetails.tableName, null, {});
  },
};
