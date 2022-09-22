import { Router } from "express";

import createContact from "../controllers/contact/createContact.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const contactRoute = Router();

contactRoute.post("", verifyToken, createContact);

export default contactRoute;
