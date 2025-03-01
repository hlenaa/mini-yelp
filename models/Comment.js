import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';  
import Restaurant from './restaurant.js';

const Comment = sequelize.define('Comment', {
  username: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true,
  }, 
  city: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false, 
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true, 
  },
  restaurantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Restaurants',  
      key: 'id',
    },
  },
});


Comment.sync()
  .then(() => console.log('Comment table created or updated'))
  .catch((err) => console.error('Error creating/updating Comment table:', err));

export default Comment;
