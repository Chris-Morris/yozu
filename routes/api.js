const express = require('express');
const router = express.Router();
const { checkUserExists } = require('../db/mongodb.js');

router.get('/', async (req, res) => {
    const people = await checkUserExists();
    res.json(people);
})

module.exports = router;