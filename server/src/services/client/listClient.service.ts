import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Client } from "../../entities/client.entity";

const listClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id,
    },
    relations: ["contacts"],
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return client;
};

export default listClientService;
