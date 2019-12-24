const express = require('express');
const businessCtrl = require('./businessUrlController.js');

const businessUrlRouter = express.Router();

// Routes
businessUrlRouter.post('/postBusinesUrl', businessCtrl.addBusinessUrl);
businessUrlRouter.get('/getBusinessUrl/:id', businessCtrl.getBusinessUrl);

module.exports = businessUrlRouter;