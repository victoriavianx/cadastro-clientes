import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/client/authProvider";
import { useDisclosure } from "@chakra-ui/react";

import { Heading, Divider, Button, Text } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";
import { Box, Container } from "./styles";

import Header from "../../components/Header/header";
import ContactTable from "../../components/Table/table";
import ModalAdd from "../../components/ModalAdd/modal";

import { api } from "../../services/data-source";
import { getToken, getClient } from "../../utils";

import { useCallback, useState } from "react";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = JSON.parse(getToken);

  const client = JSON.parse(getClient);

  const showContacts = useCallback(() => {
    api
      .get(`/contacts/${client.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response;

        setContacts(data);
      });
  }, [client.id, token]);

  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Container>
        <Box>
          <Heading
            fontSize={"28px"}
            color={"green.500"}
            marginTop={"5rem"}
            marginBottom={"1rem"}
          >
            Meus Contatos
            {isOpen && (
              <ModalAdd
                isOpen={isOpen}
                onClose={onClose}
                showContacts={showContacts}
              />
            )}
            <Button
              marginLeft={"1rem"}
              bgColor={"green.500"}
              color={"white"}
              variant="solid"
              onClick={onOpen}
            >
              <FiPlusCircle />
            </Button>
          </Heading>
        </Box>
        <Divider maxWidth={"80%"} borderColor={"black"} />
        {contacts.length === 0 ? (
          <Text fontSize={"sm"} fontFamily={"monospace"} marginTop={"2rem"}>
            Nenhum contato registrado ainda
          </Text>
        ) : (
          <ContactTable showContacts={showContacts} contacts={contacts} />
        )}
      </Container>
    </>
  );
};

export default Home;
