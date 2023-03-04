'use strict';

import { Phone } from '../models';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable(
    Phone.tableName,
    {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      namespaceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capacityAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      capacity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priceRegular: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      priceDiscount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      colorsAvailable: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      description: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      screen: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resolution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      camera: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zoom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      updatedAt: false,
    },
  );
}

export async function down(queryInterface) {
  await queryInterface.dropTable(Phone.tableName);
}
