import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './db/index.js';  
import commentRoutes from './routers/commentRouter.js'; 
import restaurantRoutes from './routers/restaurants.js';  
import cityRoutes from './routers/cityRouter.js';  
import errorMiddleware from './middleware/errorMiddleware.js';  
import { getTags, createTag, getTagById, updateTag, deleteTag } from './controllers/tag.js';
import tagRouter from './routers/tagRouter.js';
import associations from './db/associations.js';

dotenv.config();  

const app = express();

app.use(bodyParser.json());

app.use('/api/comments', commentRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/cities', cityRoutes);
app.use('/api/tags', tagRouter);

app.use(errorMiddleware);

associations(); 

sequelize.sync()
  .then(() => {
    console.log('Database synced!');
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
