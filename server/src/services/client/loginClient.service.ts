import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Client } from "../../entities/client.entity";
import { IClientLogin } from "../../interfaces/client.interface";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { SECRET_KEY } from "../../utils";

const loginClientService = async ({ email, password }: IClientLogin) => {
  if (!email || !password) {
    throw new AppError("There are missing fields", 400);
  }

  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const existClient = clients.find((client) => client.email === email);

  if (!existClient) {
    throw new AppError("Client not found", 404);
  }

  const passwordMatch = await bcrypt.compare(password, existClient.password);

  if (!passwordMatch) {
    throw new AppError("Wrong e-mail or password", 403);
  }

  const token = jwt.sign({ id: existClient.id }, SECRET_KEY, {
    expiresIn: "12h",
  });

  return token;
};

export default loginClientService;
