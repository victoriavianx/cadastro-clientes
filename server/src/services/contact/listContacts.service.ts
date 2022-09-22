import { AppDataSource } from "../../data-source";

import { Client } from "../../entities/client.entity";

const listContactsService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const listClientContacts = await clientRepository.findOne({
    where: { id: clientId },
    relations: {
      contacts: true,
    },
  });

  if (listClientContacts?.contacts.length === 0) {
    return {
      message: "You don't have any contacts yet",
    };
  }

  return listClientContacts?.contacts;
};

export default listContactsService;
