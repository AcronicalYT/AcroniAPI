const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const data = require('./json/default.json');
const projects = require('./json/projects.json');

app.use(cors());

app.get('/', (req, res) => {
    res.json(data);
});

app.get('/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Server online at http://localhost:${PORT}`);
});