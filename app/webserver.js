const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from Express..');
// });

// app.listen(port, (err) => {
//   if (err) { return console.log('something bad happened ', err); }
//   console.log(`server is listening on port ${port}`);
// });

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.use((req, res, next) => {
  req.chance = Math.random();
  next();
});

app.get('/', (req, res) => {
  throw new Error('oppps');
  res.json({
    chance: req.chance
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something broke!');
});

app.listen(port);