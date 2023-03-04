/* eslint-disable no-console */
'use strict';

import { Phone } from '../models';

import { readdir, readFile } from 'fs/promises';
import { join, dirname, extname } from 'path';

const imgURI = 'https://raw.githubusercontent.com/'
  + 'fe-oct22-tech-divas/phone-catalog-images/main/';
const directoryPath = join(dirname(__dirname), '/phonesData');
const phones = [];

const readJsonFiles = async() => {
  const files = await readdir(directoryPath, (err) => {
    if (err) {
      return 'Error reading directory: ' + err;
    }
  });

  for (const file of files) {
    if (extname(file) === '.json') {
      try {
        const jsonData = await readFile(join(directoryPath, file), 'utf-8');
        const data = JSON.parse(jsonData);

        Object.assign(data, { createdAt: new Date() });
        data.description = JSON.stringify(data.description);
        data.images = data.images.map((img) => imgURI + img.slice(0, 4));
        phones.push(data);
      } catch (e) {
        console.error(`Error parsing JSON file ${file}: ${e}`);
      }
    }
  }
};

const initPhones = async() => {
  await readJsonFiles();
};

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  await initPhones();
  await queryInterface.bulkInsert(Phone.tableName, phones, {});
}

export async function down(queryInterface) {
  await queryInterface.bulkDelete(Phone.tableName, null, {});
}
