import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import updateClientService from "../../services/client/updateClient.service";

const updateClient = async (req: Request, res: Response) => {
  try {
    const clientId = req.params.clientId;
    const clientIdToken = req.client;
    const clientData = req.body;

    await updateClientService(clientId, clientData, clientIdToken);

    return res.status(200).json({
      message: "Client updated with success",
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default updateClient;
