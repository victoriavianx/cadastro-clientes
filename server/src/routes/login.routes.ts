import { Router } from "express";

import loginClient from "../controllers/client/loginClient.controller";

const loginRoute = Router();

loginRoute.post("", loginClient);

export default loginRoute;
