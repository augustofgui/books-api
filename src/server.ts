import express, { Response } from 'express';
import { routes } from './routes/routes';

const app = express();

app.disable('x-powered-by');

const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
