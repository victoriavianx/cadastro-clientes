import { Router } from "express";

import createContact from "../controllers/contact/createContact.controller";
import deleteContact from "../controllers/contact/deleteContact.controller";
import listAllContacts from "../controllers/contact/listAllContacts.controller";
import listContacts from "../controllers/contact/listContacts.controller";
import updateContact from "../controllers/contact/updateContact.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const contactRoute = Router();

contactRoute.post("", verifyToken, createContact);
contactRoute.get("", verifyToken, listAllContacts);
contactRoute.get("/:clientId", verifyToken, listContacts);
contactRoute.patch("/:contactId", verifyToken, updateContact);
contactRoute.delete("/:contactId", verifyToken, deleteContact);

export default contactRoute;
