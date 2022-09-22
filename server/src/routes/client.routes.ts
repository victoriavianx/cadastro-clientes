import { Router } from "express";

import createClient from "../controllers/client/createClient.controller";
import deleteClient from "../controllers/client/deleteClient.controller";
import listClient from "../controllers/client/listClient.controller";
import updateClient from "../controllers/client/updateClient.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const clientRoutes = Router();

clientRoutes.post("", createClient);
clientRoutes.get("/:clientId", verifyToken, listClient);
clientRoutes.patch("/:clientId", verifyToken, updateClient);
clientRoutes.delete("/:clientId", verifyToken, deleteClient);

export default clientRoutes;
