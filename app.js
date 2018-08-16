const express = require('express');

const authRoutes = require('./routes/auth');
const analiticRoutes = require("./routes/analitic");
const categoryRoutes = require("./routes/category");
const orderhRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");

const app = express();

app.use('/api/auth', authRoutes );
app.use("/api/analitic", analiticRoutes );
app.use("/api/category", categoryRoutes );
app.use("/api/order", orderhRoutes );
app.use("/api/position", positionRoutes );



module.exports = app;