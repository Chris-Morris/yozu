const express = require('express');
const router = express.Router();
const { checkUserExists } = require('../db/mongodb.js');

// router.get('/', async (req, res) => {
//     console.log("request received")
//     const people = await checkUserExists();
//     console.log(people);
//     res.json(people);
// })

router.get('/hello', (req, res) => {
    res.send("hello?");
})

module.exports = router;