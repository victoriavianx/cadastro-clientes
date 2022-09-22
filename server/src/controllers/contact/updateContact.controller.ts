import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import updateContactService from "../../services/contact/updateContact.service";

const updateContact = async (req: Request, res: Response) => {
  try {
    const contactId = req.params.contactId;
    const clientId = req.client;
    const contactData = req.body;

    await updateContactService(contactData, contactId, clientId);

    return res.status(200).json({
      message: "Contact updated with success",
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default updateContact;
