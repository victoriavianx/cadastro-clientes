import { Container } from "./styles";
import { Heading, Button } from "@chakra-ui/react";
import MenuProfile from "../Menu/menu";

import { FiArrowRightCircle } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <Heading fontSize={"28px"} marginRight={"2rem"}>
        Contacte
      </Heading>
      <div>
        <MenuProfile />
        <Button
          variant={"solid"}
          rightIcon={<FiArrowRightCircle />}
          fontSize={"16px"}
          fontWeight={"thin"}
          fontStyle={"italic"}
          marginLeft={"1rem"}
        >
          Sair
        </Button>
      </div>
    </Container>
  );
};

export default Header;
