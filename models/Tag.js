import {DataTypes} from 'sequelize';
import sequelize from '../db/index.js';

const Tag = sequelize.define('Tag', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Tag;