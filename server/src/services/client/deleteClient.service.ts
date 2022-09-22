import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Client } from "../../entities/client.entity";

const deleteClientService = async (id: string, clientIdToken: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    id,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  if (clientIdToken !== client.id) {
    throw new AppError("You don't have permission to do this action", 403);
  }

  await clientRepository.delete(id);
};

export default deleteClientService;
