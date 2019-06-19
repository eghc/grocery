'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('listItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.FLOAT
      },
      userId: {
        type: Sequelize.INTEGER
      },
      purchaseDate: {
        type: Sequelize.DATE
      },
      purchased: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // listId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   references: {
      //      model: "List",
      //      key: "id",
      //      as: "listId",
      //    },
      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('listItems');
  }
};
