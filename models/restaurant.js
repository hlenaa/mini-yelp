import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Comment from './Comment.js'; 

const Restaurant = sequelize.define('Restaurant', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'city_id'
  },
  address: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
});

Restaurant.hasMany(Comment, {
  foreignKey: 'restaurantId',
  as: 'comments',
});

export default Restaurant;
