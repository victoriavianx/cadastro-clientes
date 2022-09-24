import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contact.entity";

const listAllContactsService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();

  return contacts;
};

export default listAllContactsService;
