import bcrypt from "bcrypt";

import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Client } from "../../entities/client.entity";
import { IClient, IClientRequest } from "../../interfaces/client.interface";

const createClientService = async ({
  name,
  lastname,
  email,
  password,
  phone,
  cellphone,
}: IClientRequest) => {
  if (!name || !lastname || !email || !password || !phone || !cellphone) {
    throw new AppError("There are missing fields", 400);
  }

  const clientRepository = AppDataSource.getRepository(Client);

  const userAlreadyExists = await clientRepository.findOneBy({
    email,
  });

  if (userAlreadyExists) {
    throw new AppError("E-mail already exists", 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newClient = clientRepository.create({
    name,
    lastname,
    email,
    password: hashedPassword,
    phone,
    cellphone,
  });

  await clientRepository.save(newClient);

  return { ...newClient, password: undefined };
};

export default createClientService;
