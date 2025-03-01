import { Router } from 'express';

import {
    getTags,
    createTag,
    getTagById,
    updateTag,
    deleteTag
} from '../controllers/tag.js';

const tagRouter = Router();

tagRouter.route('/')
    .get(getTags)
    .post(createTag);

tagRouter.route('/:id')
    .get(getTagById)
    .put(updateTag)
    .delete(deleteTag);

export default tagRouter;