import cors from "cors";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";

import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";

import clientRoutes from "./routes/client.routes";
import loginRoute from "./routes/login.routes";
import contactRoute from "./routes/contact.routes";

const app = express();
app.use(express.json());

app.options("*", cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

  app.use(cors());

  next();
});

app.use("/clients", clientRoutes);
app.use("/contacts", contactRoute);
app.use("/login", loginRoute);

app.use(handleAppErrorMiddleware);

export default app;
