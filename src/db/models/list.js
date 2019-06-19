'use strict';
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define('List', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  List.associate = function(models) {
    // associations can be defined here
    // List.hasMany(models.listItems, {
    //    foreignKey: "topicId",
    //    as: "banners",
    // });
  };
  return List;
};
