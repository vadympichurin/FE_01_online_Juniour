const express = require('express');

const app = express();

app.use('*', (req, res) => {
    console.log("Був запит від браузера");
    res.send('<h1>Це тобі відповідь з сервера!!!</h1>')
});

const listener = app.listen(4444, () => {
    console.log(`Веб-сервер на порте ${listener.address().port}`);
});

