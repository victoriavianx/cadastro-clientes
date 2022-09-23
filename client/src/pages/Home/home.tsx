import Header from "../../components/Header/header";

import { Heading, Divider } from "@chakra-ui/react";
import { Container } from "./styles";
import ContactTable from "../../components/Table/table";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Heading
          fontSize={"28px"}
          color={"green.500"}
          marginTop={"5rem"}
          marginBottom={"1rem"}
        >
          Meus Contatos
        </Heading>
        <Divider maxWidth={"80%"} borderColor={"black"} />
        <ContactTable />
      </Container>
    </>
  );
};

export default Home;
