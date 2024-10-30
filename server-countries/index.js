// index.js
import express from 'express';
import { countries } from './countries.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.static('assets'));
app.use(express.json());


// API endpoint to get the list of countries
app.get('/api/countries', (req, res) => {
    res.json(countries);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
