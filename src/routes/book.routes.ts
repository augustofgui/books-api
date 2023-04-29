import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (_, res) => {
  res.send("Books World!");
});

export { bookRouter };
