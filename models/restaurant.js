const { DataTypes } = require('sequelize');
const sequelize = require('../db/index').sequelize;

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

Restaurant.associate = (models) => {
    Restaurant.belongsTo(models.City, { foreignKey: 'city_id' });
    Restaurant.belongsToMany(models.Tag, { through: 'Restaurant_has_Tag', foreignKey: 'id_restaurant' });
    Restaurant.hasMany(models.Comment, { foreignKey: 'restaurant_id' });
};

module.exports = Restaurant;