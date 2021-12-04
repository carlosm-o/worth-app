const express = require('express');
const app = express();
const port = 3000;

const scraper = require('./scraper');

app.get('/returns', async (req, res) => {
    const returns = await scraper.scrapeSite();
    res.send(returns);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
