import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import deleteContactService from "../../services/contact/deleteContact.service";

const deleteContact = async (req: Request, res: Response) => {
  const contactId = req.params.contactId;
  const clientId = req.client;

  try {
    await deleteContactService(contactId, clientId);

    return res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default deleteContact;
