import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';  


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

Comment.associate = (models) => {
  Comment.belongsTo(models.Restaurant, {
    foreignKey: 'restaurantId',
    as: 'restaurant', 
  });
};

Comment.sync()
  .then(() => console.log('Comment table created or updated'))
  .catch((err) => console.error('Error creating/updating Comment table:', err));

export default Comment;
