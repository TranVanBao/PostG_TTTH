'use strict';
module.exports = (sequelize, DataTypes) => {
  const thoikhoabieu = sequelize.define('thoikhoabieu', {
    thoigianbatdau: DataTypes.DATE,
    thoigianketthuc: DataTypes.DATE
  }, {});
  thoikhoabieu.associate = function(models) {
    // associations can be defined here
  };
  return thoikhoabieu;
};