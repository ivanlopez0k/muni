'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Survers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      turista: {
        type: Sequelize.JSON
      },
      difusion: {
        type: Sequelize.JSON
      },
      motivo: {
        type: Sequelize.JSON
      },
      reserva: {
        type: Sequelize.JSON
      },
      tipo_hospedaje: {
        type: Sequelize.JSON
      },
      cali_hospedaje: {
        type: Sequelize.JSON
      },
      mat_informativo: {
        type: Sequelize.JSON
      },
      oficina: {
        type: Sequelize.JSON
      },
      tipo_informacion: {
        type: Sequelize.JSON
      },
      medio_informacion: {
        type: Sequelize.JSON
      },
      tipo_material: {
        type: Sequelize.JSON
      },
      cali_informacion: {
        type: Sequelize.JSON
      },
      otra_info: {
        type: Sequelize.JSON
      },
      que_info: {
        type: Sequelize.JSON
      },
      cali_mc: {
        type: Sequelize.JSON
      },
      recom: {
        type: Sequelize.JSON
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Survers');
  }
};