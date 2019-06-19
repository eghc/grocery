'use strict';
module.exports = (sequelize, DataTypes) => {
  var listItems = sequelize.define('listItems', {
    item: {
      type:DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    // listId: {
    //   type: DataTypes.INTEGER,
    //   onDelete: "CASCADE",
    //   references: {
    //    model: "List",
    //    key: "id",
    //    as: "listId",
    //   }
    // }
  }, {});

  listItems.associate = function(models) {
    // associations can be defined here
     //  listItems.belongsTo(models.List, {
     //   foreignKey: "topicId",
     //   onDelete: "CASCADE",
     // });
  };
  return listItems;
};
