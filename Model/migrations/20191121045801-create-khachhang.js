'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('khachhangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenkhachhang: {
        type: Sequelize.STRING
      },
      sdt: {
        type: Sequelize.BIGINT
      },
      diachi: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      trangthai: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('khachhangs');
  }
};