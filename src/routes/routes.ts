import { Router } from 'express';
import { bookRouter } from './book.routes';
import { userRouter } from './user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/books', bookRouter);

export { routes };
