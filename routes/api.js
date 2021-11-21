const express = require('express');
const router = express.Router();
const { addUser, findUser, findAllUsers } = require('../db/mongodb.js');

router.post('/adduser', async (req, res) => {
    const user = await addUser(req.body);
    res.json(user);
})

router.get('/finduser', async (req, res) => {
    const people = await findUser(req.query);
    res.json(people);
})

router.get('/findallusers', async (req, res) => {
    const people = await findAllUsers();
    res.json(people);
})

module.exports = router;