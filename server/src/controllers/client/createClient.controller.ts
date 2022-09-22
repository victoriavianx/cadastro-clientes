import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import createClientService from "../../services/client/createClient.service";

const createClient = async (req: Request, res: Response) => {
  const { name, lastname, email, password, phone, cellphone } = req.body;

  try {
    const client = await createClientService({
      name,
      lastname,
      email,
      password,
      phone,
      cellphone,
    });

    return res.status(201).json(client);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default createClient;
