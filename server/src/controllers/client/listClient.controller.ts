import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import listClientService from "../../services/client/listClient.service";

const listClient = async (req: Request, res: Response) => {
  const clientId = req.params.id;

  try {
    const client = await listClientService(clientId);

    return res.status(200).json(client);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default listClient;
