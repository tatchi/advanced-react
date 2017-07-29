import express from 'express';
import config from './config';

const app = express();

// serve static public folder
app.use(express.static('public'));
// set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
