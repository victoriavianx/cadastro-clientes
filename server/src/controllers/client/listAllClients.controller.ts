import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import listAllClientsService from "../../services/client/listAllClients.service";

const listAllClients = async (req: Request, res: Response) => {
  try {
    const clients = await listAllClientsService();

    return res.status(200).json(clients);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default listAllClients;
