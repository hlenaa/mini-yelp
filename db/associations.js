

import Comment from  '../models/Comment.js';
import Restaurant from '../models/restaurant.js';
import City from '../models/City.js';
import Tag from '../models/Tag.js';
import  RestaurantHasTag from '../models/RestaurantHasTag.js';


function associations() {
  // ✅ One-to-Many: City ↔ Restaurants
  City.hasMany(Restaurant, {
    foreignKey: 'city_id',
    as: 'restaurants'
  });
  
  Restaurant.belongsTo(City, {
    foreignKey: 'city_id',
    as: 'city'
  });

  // ✅ One-to-Many: Restaurant ↔ Comments
  Restaurant.hasMany(Comment, {
    foreignKey: 'restaurant_id',
    as: 'comments'
  });
  
  Comment.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    as: 'restaurant'
  });

  // ✅ Many-to-Many: Restaurants ↔ Tags (via "restaurant_has_tag" junction table)
  Restaurant.belongsToMany(Tag, {
    through: "restaurant_has_tag",  // ✅ Automatically creates the table
    foreignKey: "id_restaurant",
    otherKey: "id_tag",
    as: "tags"
  });

  Tag.belongsToMany(Restaurant, {
    through: "restaurant_has_tag",  // ✅ Automatically creates the table
    foreignKey: "id_tag",
    otherKey: "id_restaurant",
    as: "restaurants"
  });
}

export default associations;