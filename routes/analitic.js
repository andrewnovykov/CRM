const express = require('express');

const controller = require('./../controllers/analitic');

const router = express.Router();

router.get("/overview", controller.overview);
router.get("/analitic", controller.analitic);


module.exports = router;