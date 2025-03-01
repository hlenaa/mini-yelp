const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurants');

router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.post('/', restaurantController.createRestaurant);
// Add routes for PUT /restaurants/:id and DELETE /restaurants/:id

module.exports = router;