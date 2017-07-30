import express from 'express';
import config from './config';
import { data } from './testData.json';
import serverRenderer from './renderers/server';

const app = express();

// serve static public folder
app.use(express.static('public'));
// set the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRenderer();
  res.render('index', { initialContent });
});
app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}...`);
});
