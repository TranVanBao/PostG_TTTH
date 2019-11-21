'use strict';
module.exports = (sequelize, DataTypes) => {
  const khachhang = sequelize.define('khachhang', {
    tenkhachhang: DataTypes.STRING,
    sdt: DataTypes.BIGINT,
    diachi: DataTypes.STRING,
    email: DataTypes.STRING,
    trangthai: DataTypes.BIGINT
  }, {});
  khachhang.associate = function(models) {
    // associations can be defined here
  };
  return khachhang;
};