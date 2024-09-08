const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines`, {
            params: {
                token: process.env.GNEWS_API_KEY,
                lang: 'en',
                country: 'us',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
