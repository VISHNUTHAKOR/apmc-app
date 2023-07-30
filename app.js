const express = require('express');
const app = express();

require('dotenv/config');
require("./src/db/conn");

const port = process.env.PORT || 3000;

app.use(express.json());

const postRoutes = require("./src/routes/posts");
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to my homepage");
});

app.all('*', (req, res) => {
    res.send("404 page not found!");
});

app.listen(port, () => {
    console.log(`App running on the port ${port}`);
});