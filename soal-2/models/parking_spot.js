'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parking_spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parking_spot.init({
    block: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1,3],
          msg: "block should be filled with minimum 1 character"
        },
        isAlpha: {
          args: true,
          msg: "only alphabetical letters allowed"
        }
      }
    },
    slot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        isInt: {
          args: true,
          msg: "must be integer"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['empty', 'occupied']],
          msg: "Must be filled with either empty or occupied"
        }
      }
    },
    vehicle_number: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  }, {
    sequelize,
    modelName: 'parking_spot',
    tableName: 'parking_spots'
  });
  return parking_spot;
};

