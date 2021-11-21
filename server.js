const express = require('express');
const api = require('./routes/api');

const app = express();

app.use('/api', api)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));