import { Router } from 'express';

import {
    getCity,
    createCity,
    getCityById,
    updateCity,
    deleteCity
} from '../controllers/city.js';

const cityRouter = Router();

cityRouter.route('/')
    .get(getCity)
    .post(createCity);

cityRouter.route('/:id')
    .get(getCityById)
    .put(updateCity)
    .delete(deleteCity);

export default cityRouter;