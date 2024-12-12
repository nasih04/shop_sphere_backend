import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
app.use(express.json()); // Middleware to parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

const MONGOURI = 'mongodb+srv://devnasih:nasih123@cluster0.l1msp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// MongoDB Connection
mongoose.connect(MONGOURI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Start Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
