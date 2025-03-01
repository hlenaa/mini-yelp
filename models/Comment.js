
import { DataTypes } from 'sequelize';
//import sequelize from '../db/associations.js';

const Comment = sequelize.define('Comment', {
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

Comment.associate = (models) => {
  Comment.belongsTo(models.Restaurant, {
    foreignKey: 'restaurantId',
    as: 'restaurant',
  });
};

Comment.sync()
  .then(() => console.log('Comment table created'))
  .catch((err) => console.error('Error creating Comment table:', err));

export default Comment;
