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
import { useHistory } from "react-router-dom";

import { IModal } from "../../interfaces";

import { api } from "../../services/data-source";
import { getClient, getToken } from "../../utils";

const ModalWarning = ({ isOpen, onClose }: IModal) => {
  const history = useHistory();

  const token = JSON.parse(getToken);

  const client = JSON.parse(getClient);

  const handleDelete = () => {
    api
      .delete(`/clients/${client.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.clear();

        history.push("/signup");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deletar conta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Tem certeza que deseja excluir sua conta? Essa ação não é
              reversível.
            </p>
            <span style={{ fontSize: "10px" }}>
              Obs.: exclua seus contatos primeiro!
            </span>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleDelete}
              bgColor={"red.500"}
              color={"white"}
              mr={3}
            >
              Excluir
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWarning;
