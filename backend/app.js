const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const GNEWS_API_URL = 'https://gnews.io/api/v4';

app.get('/news', async (req, res) => {
    const { q, page, category, country, lang } = req.query;

    try {
        const response = await axios.get(`${GNEWS_API_URL}/top-headlines`, {
            params: {
                apikey: process.env.GNEWS_API_KEY,
                q: q || '',
                page: page || 1,
                category: category || 'general',
                country: country || 'us',
                lang: lang || 'en'
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching news',
            error: error.message
        });
    }

});

app.listen(5000, () => console.log('Server running on port 5000'));
