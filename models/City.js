import {DataTypes} from 'sequelize';
import sequelize from '../db/index.js';

const City = sequelize.define('City', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default City;