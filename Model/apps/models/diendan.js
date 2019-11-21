'use strict';
module.exports = (sequelize, DataTypes) => {
  const diendan = sequelize.define('diendan', {
    tendiendan: DataTypes.STRING,
    trangthai: DataTypes.BIGINT
  }, {});
  diendan.associate = function(models) {
    // associations can be defined here
  };
  return diendan;
};