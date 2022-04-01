'use strict'

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./src/routes/routes')


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.render('index');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));