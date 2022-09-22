import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

import loginClientService from "../../services/client/loginClient.service";

const loginClient = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await loginClientService({ email, password });

    return res.status(200).json({
      accessToken: token,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default loginClient;
