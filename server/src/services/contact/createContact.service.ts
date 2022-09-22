import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { IContactRequest } from "../../interfaces/contact.interface";

const createContactService = async (
  { name, lastname, email, phone, cellphone }: IContactRequest,
  id: string
) => {
  if (!name || !lastname || !email || !phone || !cellphone) {
    throw new AppError("There are missing fields", 400);
  }

  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const client: any = await clientRepository.findOneBy({
    id,
  });

  const contactAlreadyExists = await contactRepository.findOneBy({
    email,
  });

  if (contactAlreadyExists) {
    throw new AppError("Contact already exists", 400);
  }

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const contactCreated = contactRepository.create({
    name,
    lastname,
    email,
    phone,
    cellphone,
    client,
  });

  await contactRepository.save(contactCreated);

  return contactCreated;
};

export default createContactService;
