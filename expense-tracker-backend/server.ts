import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// importing rotue files
import expenseRoute from './routes/expense/index';

dotenv.config();

// Connecting to the database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to DB!!")
});

const app = express();
app.use(express.json());

app.use('/api/expense', expenseRoute);

app.listen(3000, () => {
    console.log("App is running!")
})