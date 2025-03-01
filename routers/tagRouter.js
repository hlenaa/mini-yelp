import { Router } from 'express';

import {
    getTag,
    createTag,
    getTagById,
    updateTag,
    deleteTag
} from '../controllers/tag.js';

const tagRouter = Router();

tagRouter.route('/')
    .get(getTag)
    .post(createTag);

tagRouter.route('/:id')
    .get(getTagById)
    .put(updateTag)
    .delete(deleteTag);

export default tagRouter;