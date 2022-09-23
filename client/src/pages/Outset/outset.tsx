import CustomButton from "../../components/Button/button";

import { Heading, Highlight } from "@chakra-ui/react";
import { Box, Main } from "./styles";

const Outset = () => {
  return (
    <Main>
      <Heading>Contacte</Heading>
      <Highlight
        query={"Organize seus contatos"}
        styles={{
          width: "200px",
          textAlign: "center",
          px: "1",
          py: "1",
          bg: "green.700",
          color: "gray.600",
          fontFamily: "monospace",
          fontSize: "14px",
          marginBottom: ".3rem",
          marginTop: ".2rem",
        }}
      >
        Organize seus contatos
      </Highlight>
      <Box>
        <CustomButton text={"Cadastre-se"} path={"/signup"} />
        <CustomButton text={"Login"} path={"/signin"} />
      </Box>
    </Main>
  );
};

export default Outset;
