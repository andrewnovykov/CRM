const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require('mongoose');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const analiticRoutes = require("./routes/analitic");
const categoryRoutes = require("./routes/category");
const orderhRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");

const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI).then(()=> {
    console.log('Mongo DB conected');
}).catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/uploads', express.static('uploads'));

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