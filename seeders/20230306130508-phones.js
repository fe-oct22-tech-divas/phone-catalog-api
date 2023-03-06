/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { Phones } = require('../models');

const fs = require('fs/promises');
const path = require('path');

const directoryPath = path.join(path.dirname(__dirname), 'phonesData');
const phones = [];

const readJsonFiles = async() => {
  const files = await fs.readdir(directoryPath, (err) => {
    if (err) {
      return 'Error reading directory: ' + err;
    }
  });

  for (const file of files) {
    if (path.extname(file) === '.json') {
      try {
        // eslint-disable-next-line max-len
        const jsonData = await fs.readFile(
          path.join(directoryPath, file),
          'utf-8',
        );
        const data = JSON.parse(jsonData).map((eachData) =>
          Object.assign(eachData, { createdAt: new Date() }));

        phones.push(...data);
      } catch (e) {
        return `Error parsing JSON file ${file}: ${e}`;
      }
    }
  }
};

const initPhones = async() => {
  await readJsonFiles();
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await initPhones();

    await queryInterface.bulkInsert(Phones.tableName, phones, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(Phones.tableName, null, {});
  },
};
