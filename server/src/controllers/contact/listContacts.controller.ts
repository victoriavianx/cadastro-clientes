import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import listContactsService from "../../services/contact/listContacts.service";

const listContacts = async (req: Request, res: Response) => {
  const clientId = req.params.clientId;

  try {
    const list = await listContactsService(clientId);

    return res.status(200).json(list);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default listContacts;
