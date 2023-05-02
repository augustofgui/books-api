import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (_, res) => {
  res.send('User World!');
});

export { userRouter };
