const express = require('express');
// const api = require('./routes/api');

const app = express();

// app.use('/api', api)

app.get('/', (req, res) => {
    console.log("hello")
    res.send("Hello?")
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));