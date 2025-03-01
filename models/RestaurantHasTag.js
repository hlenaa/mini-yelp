import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const RestaurantHasTag = sequelize.define('RestaurantHasTag', {
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Restaurants', 
      key: 'id',
    },
  },
  tagId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Tags', 
      key: 'id',
    },
  },
});

export default RestaurantHasTag;
