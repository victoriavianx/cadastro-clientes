import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import listAllContactsService from "../../services/contact/listAllContacts.service";

const listAllContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await listAllContactsService();

    return res.status(200).json(contacts);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default listAllContacts;
