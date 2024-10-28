const express = require('express');
const app = express();
const PORT = 3001;
const data = require('./json/default.json');

app.get('/', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server online at http://localhost:${PORT}`);
});