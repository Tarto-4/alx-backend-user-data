const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 5000;

app.get('/api/news', (req, res) => {
    const { preferences } = req.query;
    res.json({ message: `News articles filtered by preferences: ${preferences}` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});