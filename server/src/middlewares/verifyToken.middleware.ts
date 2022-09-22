import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";
import { SECRET_KEY } from "../utils";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new AppError("Missing headers authorization", 401);
    }

    jwt.verify(token, SECRET_KEY, (error: any, decoded: any) => {
      if (error) {
        throw new AppError("Invalid token", 401);
      }

      req.client = decoded.id;

      next();
    });
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default verifyToken;
