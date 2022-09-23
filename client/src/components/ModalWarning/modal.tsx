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

interface IModal {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWarning = ({ isOpen, onClose }: IModal) => {
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
          </ModalBody>

          <ModalFooter>
            <Button bgColor={"red.500"} color={"white"} mr={3}>
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
