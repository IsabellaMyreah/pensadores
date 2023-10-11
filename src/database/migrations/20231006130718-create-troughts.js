'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('thoughts', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

      create_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    
      update_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

      }
      );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('thoughts');
  }
};
