import { api } from "../../services/data-source";
import { useEffect } from "react";

import { FiTrash2, FiEdit } from "react-icons/fi";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";
import { getToken } from "../../utils";
import { toast } from "react-toastify";
import ModalEdit from "../ModalEdit/modal";

const ContactTable = ({ showContacts, contacts }: any) => {
  useEffect(() => {
    showContacts();
  }, [showContacts]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = JSON.parse(getToken);

  const handleDelete = (id: string) => {
    api
      .delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Contato deletado");

        return showContacts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <TableContainer marginTop={"2rem"}>
      <Table variant="striped" colorScheme={"blackAlpha"} color={"black"}>
        <Thead>
          <Tr>
            <Th color={"black"}>Nome Completo</Th>
            <Th color={"black"}>Email</Th>
            <Th color={"black"}>Telefone</Th>
            <Th color={"black"}>Celular</Th>
            <Th color={"black"}>Editar</Th>
            <Th color={"black"}>Deletar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contacts.map((contact: any) => (
            <Tr key={contact.id}>
              <Td>
                {contact.name} {contact.lastname}
              </Td>
              <Td>{contact.email}</Td>
              <Td>{contact.phone}</Td>
              <Td>{contact.cellphone}</Td>
              <Td>
                {isOpen && (
                  <ModalEdit
                    isOpen={isOpen}
                    onClose={onClose}
                    showContacts={showContacts}
                    contact={contact}
                    id={contact.id}
                  />
                )}
                <button onClick={onOpen}>
                  <FiEdit />
                </button>
              </Td>
              <Td>
                <button onClick={() => handleDelete(contact.id)}>
                  <FiTrash2 />
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
