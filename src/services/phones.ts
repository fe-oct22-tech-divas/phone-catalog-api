'use strict';
import fs from 'fs/promises';

async function readData() {
  const data = await fs.readFile('./src/data/phones.json', 'utf-8');

  return JSON.parse(data);
}

export const getAll = async(limit: number, offset: number) => {
  let phones = await readData();

  if (limit && offset) {
    const from = offset;
    const to = from + limit;

    phones = phones.slice(from, to);
  }

  return phones;
};

export const getById = async(phoneId: string) => {
  const phones = await readData();
  const foundPhone = phones.find(
    (phone: { id: string; }) => phone.id === phoneId,
  );

  return foundPhone || null;
};
