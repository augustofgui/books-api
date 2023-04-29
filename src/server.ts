import express, { Response } from 'express';
import { routes } from './infra/http/routes/routes';

const app = express()

const port = 3000

app.use('/', routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})