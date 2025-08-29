import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import serviceRoutes from './routes/serviceRoute.js';
import settingsRoutes from './routes/settingsRoute.js'; // fixed import

const app = express();
const PORT = process.env.PORT || 4000;

connectDB(); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running with import/export');
});

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/settings', settingsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
