// models/Tag.js
import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Tag = sequelize.define('Tag', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Tag;
