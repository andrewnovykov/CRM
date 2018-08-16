const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require('./routes/auth');
const analiticRoutes = require("./routes/analitic");
const categoryRoutes = require("./routes/category");
const orderhRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes );
app.use("/api/analitic", analiticRoutes );
app.use("/api/category", categoryRoutes );
app.use("/api/order", orderhRoutes );
app.use("/api/position", positionRoutes );



module.exports = app;