'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages', {
      stage_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
/*       stage_id: {
        type: Sequelize.INTEGER
      }, */
      stage_name: {
        type: Sequelize.STRING
      },
/*       createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } */
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages');
  }
};