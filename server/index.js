require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8080;
const cors = require('cors');

app.listen(
    port, () => {
        console.log(`Escuchando en http://localhost:${port}`);
    }
);

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes/routes.js');
app.use('/api/v1',routes);