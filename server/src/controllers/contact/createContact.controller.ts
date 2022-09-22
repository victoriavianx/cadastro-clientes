import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import createContactService from "../../services/contact/createContact.service";

const createContact = async (req: Request, res: Response) => {
  const clientId = req.client;

  const { name, lastname, email, phone, cellphone } = req.body;

  try {
    const contact = await createContactService(
      { name, lastname, email, phone, cellphone },
      clientId
    );

    return res.status(201).json(contact);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default createContact;
