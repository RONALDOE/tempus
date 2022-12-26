require('dotenv').config();
const express = require('express');
const app = express();
const cookeParser = require('cookie-parser');
const port = 8080;
const cors = require('cors');

app.listen(
    port, () => {
        console.log(`Escuchando en http://localhost:${port}`);
    }
);

app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.static(_dirname + '/public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

const router = require('./routes/routes.js');
app.use('/api/v1',routes);