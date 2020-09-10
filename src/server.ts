import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(1337, () => {
  console.log('Server started on port 1337 💻');
});
