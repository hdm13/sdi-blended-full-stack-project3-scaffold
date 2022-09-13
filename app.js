const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('MFIT for life')
})



module.exports = app