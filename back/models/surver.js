'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Surver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Surver.init({
    turista: DataTypes.JSON,
    difusion: DataTypes.JSON,
    motivo: DataTypes.JSON,
    reserva: DataTypes.JSON,
    tipo_hospedaje: DataTypes.JSON,
    cali_hospedaje: DataTypes.JSON,
    mat_informativo: DataTypes.JSON,
    oficina: DataTypes.JSON,
    tipo_informacion: DataTypes.JSON,
    medio_informacion: DataTypes.JSON,
    tipo_material: DataTypes.JSON,
    cali_informacion: DataTypes.JSON,
    otra_info: DataTypes.JSON,
    que_info: DataTypes.JSON,
    cali_mc: DataTypes.JSON,
    recom: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Surver',
  });
  return Surver;
};