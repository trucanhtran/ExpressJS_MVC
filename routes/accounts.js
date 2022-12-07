const express = require('express');
const router = express.Router();

const accountsController = require('../app/controllers/AccountsController');

router.use('/', accountsController.accounts);

module.exports = router;
