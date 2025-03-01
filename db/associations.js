

import Comment from  './models/Comment';
import Restaurant from './models/Restaurant';
import City from './models/City';
import Tag from './models/Tag';
import  RestaurantHasTag from './models/RestaurantHasTag';

function associations() {
  City.hasMany(Restaurant, {
    foreignKey: 'city_id',
    as: 'restaurants'
  });
  
  Restaurant.belongsTo(City, {
    foreignKey: 'city_id',
    as: 'city'
  });

  Restaurant.hasMany(Comment, {
    foreignKey: 'restaurant_id',
    as: 'comments'
  });
  
  Comment.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    as: 'restaurant'
  });

  Restaurant.belongsToMany(Tag, {
    through: RestaurantHasTag,
    foreignKey: 'id_restaurant',
    otherKey: 'id_tag',
    as: 'tags'
  });
  
  Tag.belongsToMany(Restaurant, {
    through: RestaurantHasTag,
    foreignKey: 'id_tag',
    otherKey: 'id_restaurant',
    as: 'restaurants'
  });
}

export default  associations;