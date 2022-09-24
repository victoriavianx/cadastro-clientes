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

const ModalAdd = ({ isOpen, onClose, showContacts }: any) => {
  const token = JSON.parse(getToken);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const submitData = (data: any) => {
    api
      .post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Contato cadastrado");

        return showContacts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Adicionar contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={"flex"} justifyContent={"center"}>
          <Form onSubmit={handleSubmit(submitData)}>
            <FullName>
              <CustomInput
                name="name"
                register={register}
                icon={<FiUser />}
                placeholder={"nome"}
                type={"text"}
                error={errors.name?.message}
              />
              <CustomInput
                name="lastname"
                register={register}
                icon={<FiUser />}
                placeholder={"sobrenome"}
                type={"text"}
                error={errors.lastname?.message}
              />
            </FullName>
            <CustomInput
              name="email"
              register={register}
              icon={<FiMail />}
              placeholder={"email"}
              type={"email"}
              error={errors.email?.message}
            />
            <CustomInput
              name="phone"
              register={register}
              icon={<FiPhone />}
              placeholder={"telefone"}
              type={"tel"}
              error={errors.phone?.message}
            />
            <CustomInput
              name="cellphone"
              register={register}
              icon={<FiSmartphone />}
              placeholder={"celular"}
              type={"tel"}
              error={errors.cellphone?.message}
            />
            <Button type="submit" bgColor={"green.500"} color={"white"} mr={3}>
              Adicionar
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

export default ModalAdd;
