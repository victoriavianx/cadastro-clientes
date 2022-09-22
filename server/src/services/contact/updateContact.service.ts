import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Contact } from "../../entities/contact.entity";
import { IContactUpdate } from "../../interfaces/contact.interface";

const updateContactService = async (
  contactData: IContactUpdate,
  contactId: string,
  clientId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact: any = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  if (contact?.client.id !== clientId) {
    throw new AppError("You don't have permission to do this action", 403);
  }

  await contactRepository.update(contact?.id!, {
    ...contactData,
  });
};

export default updateContactService;
