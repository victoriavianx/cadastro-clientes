import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiSmartphone, FiUser } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schema/schema";

import CustomInput from "../Input/input";
import { Form, FullName } from "../../pages/SignUp/styles";

import { api } from "../../services/data-source";
import { getToken } from "../../utils";
import { toast } from "react-toastify";

const ModalEdit = ({ isOpen, onClose, showContacts, contact, id }: any) => {
  const token = JSON.parse(getToken);

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const submitData = (data: any) => {
    api
      .patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Contato atualizado");

        return showContacts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Atualizar contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={"flex"} justifyContent={"center"}>
          <Form onSubmit={handleSubmit(submitData)}>
            <FullName>
              <CustomInput
                name="name"
                register={register}
                icon={<FiUser />}
                placeholder={contact.name}
                defaultValue={contact.name}
                type={"text"}
              />
              <CustomInput
                name="lastname"
                register={register}
                icon={<FiUser />}
                placeholder={contact.lastname}
                defaultValue={contact.lastname}
                type={"text"}
              />
            </FullName>
            <CustomInput
              name="email"
              register={register}
              icon={<FiMail />}
              placeholder={contact.email}
              defaultValue={contact.email}
              type={"email"}
            />
            <CustomInput
              name="phone"
              register={register}
              icon={<FiPhone />}
              placeholder={contact.phone}
              defaultValue={contact.phone}
              type={"tel"}
            />
            <CustomInput
              name="cellphone"
              register={register}
              icon={<FiSmartphone />}
              placeholder={contact.cellphone}
              defaultValue={contact.cellphone}
              type={"tel"}
            />
            <Button type="submit" bgColor={"green.500"} color={"white"} mr={3}>
              Atualizar
            </Button>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEdit;
