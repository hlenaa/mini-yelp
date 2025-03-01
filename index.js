import { Sequelize } from 'sequelize';
import express from 'express';
import bodyParser from 'body-parser';
import commentRoutes from './routers/commentRouter.js'; 

const app = express();

app.use(bodyParser.json());

app.use('/api', commentRoutes); 

Sequelize.sync()
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
