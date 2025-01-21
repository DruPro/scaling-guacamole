const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const message = "I stumbled into a city where every building is a server and the streets hum with static. HELLO WORLD. The stores? A nightmare. One sold Fresh Air™, bottled and branded. Another had loaves of bread—all in the cloud, naturally. The people? They only speak in binary, and even my hello turned into a glitch. I think I’m stuck in a dystopian software update.";

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
