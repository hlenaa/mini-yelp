

import Comment from '../models/Comment.js';
import Restaurant from '../models/restaurant.js';

const addComment = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    
    const { restaurantId, content, rating, username } = req.body;
    
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }
    
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }
    
    if (!restaurantId) {
      return res.status(400).json({ message: 'Restaurant ID is required' });
    }
    
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found!' });
    }
    
    const comment = await Comment.create({
      content,
      rating,
      restaurantId,
      username,
      tag: req.body.tag || null,
      city: req.body.city || null
    });
    
    res.status(201).json({
      message: 'Comment added successfully',
      comment,
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ 
      message: 'Error creating comment', 
      error: {
        message: error.message,
        name: error.name
      } 
    });
  }
};

const getComments = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    
    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found!' });
    }
    
    const comments = await Comment.findAll({
      where: { restaurantId },
      include: [
        {
          model: Restaurant,
          attributes: ['name', 'city'],
          as: 'restaurant'
        },
      ],
    });
    
    res.status(200).json({
      message: 'Comments retrieved successfully',
      comments,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving comments', error: error.message });
  }
};

export { addComment, getComments };