import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import deleteClientService from "../../services/client/deleteClient.service";

const deleteClient = async (req: Request, res: Response) => {
  const clientId = req.params.id;

  try {
    await deleteClientService(clientId);

    return res.status(204).json();
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default deleteClient;
