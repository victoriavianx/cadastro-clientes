import cors from "cors";
import "express-async-errors";
import express from "express";

import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";

import clientRoutes from "./routes/client.routes";
import loginRoute from "./routes/login.routes";
import contactRoute from "./routes/contact.routes";

const app = express();
app.use(express.json());

app.use("/clients", clientRoutes);
app.use("/contacts", contactRoute);
app.use("/login", loginRoute);

app.use(handleAppErrorMiddleware);

export default app;
