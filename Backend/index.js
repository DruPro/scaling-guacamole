const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: '*'
));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const message = "Arrr matey! The servers be sailin' the digital seas. Beware the cyber waves, for they be as treacherous as a pirate’s stormy path! Only those with the proper key can unlock the treasure hidden in the data chests!";

app.get('/gem', (req, res) => {
    console.log('Received request for /gem');
    res.json({ Gem: 1 });
});

app.get('/message', (req, res) => {
    console.log('Received request for /message');
    res.json({ Message: message });
});

app.listen(port, () => {
    console.log(`Server Initialized | Port: ${port}`);
});
