import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Contact } from "../../entities/contact.entity";

const deleteContactService = async (contactId: string, clientId: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact: any = await contactRepository.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (contact?.client.id !== clientId) {
    throw new AppError("You don't have permission to do this action", 403);
  }

  await contactRepository.delete(contact.id);
};

export default deleteContactService;
