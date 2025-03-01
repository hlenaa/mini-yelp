import { Restaurant, Tag, City, Comment } from '../models/index.js';

const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll({
            include: [
                { model: Tag, attributes: ['name'] },
                { model: City, attributes: ['name'] },
                { model: Comment }
            ]
        });
        res.json(restaurants);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
export default getAllRestaurants;


const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByPk(req.params.id, {
            include: [
                { model: Tag, attributes: ['name'] },
                { model: City, attributes: ['name'] },
                { model: Comment }
            ]
        });
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const createRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const [updated] = await Restaurant.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedRestaurant = await Restaurant.findByPk(req.params.id);
            return res.status(200).json({ restaurant: updatedRestaurant });
        }
        throw new Error('Restaurant not found');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        const deleted = await Restaurant.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            return res.status(204).send("Restaurant deleted");
        }
        throw new Error("Restaurant not found");
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

export { getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant };