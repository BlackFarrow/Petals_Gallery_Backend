import express from 'express';

import cors from 'cors';
import { connectDB } from './config/db.js';


const app = express();
const PORT = process.env.PORT || 4000;

connectDB(); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running with import/export');
});

// Import routes
import serviceRoutes from './routes/serviceRoute.js';
app.use('/api/services', serviceRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
