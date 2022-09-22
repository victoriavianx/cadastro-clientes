import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Client } from "../../entities/client.entity";

const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  await clientRepository.delete(id);
};

export default deleteClientService;
