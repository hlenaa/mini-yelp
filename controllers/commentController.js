//import { Comment, Restaurant} from '../models/Comment.js';

const addComment = async (req, res) => {
  try {
    const { restaurantId, content, rating } = req.body;

    const restaurant = await Restaurant.findByPk(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found!' });
    }

    const comment = await Comment.create({ content, rating, restaurantId });

    res.status(201).json({
      message: 'Comment added successfully',
      comment,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating comment', error });
  }
};

export { addComment };




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
        },
      ],
    });

    res.status(200).json({
      message: 'Comments retrieved successfully',
      comments,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving comments', error });
  }
};

export { getComments };
