const express = require('express');
const router = express.Router();

const accountsController = require('../app/controllers/AccountsController');

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */
router.use('/', accountsController.accounts);

module.exports = router;
